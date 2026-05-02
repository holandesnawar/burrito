/**
 * Sube imágenes locales (public/images/) a Sanity con nombres profesionales
 * y crea documentos galleryPhoto + siteSettings que las referencian.
 *
 * Uso:
 *   node scripts/upload-images-to-sanity.mjs
 *
 * Requiere SANITY_API_WRITE_TOKEN en .env.local
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { config } from "dotenv";

config({ path: resolve(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error("Faltan vars en .env.local: PROJECT_ID, DATASET o WRITE_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-10-01",
  useCdn: false,
});

/** Mapeo de archivos locales → metadata Sanity */
const galleryPhotos = [
  // SFEER (galería principal)
  { file: "completo.jpg", title: "Plato completo Mexicano", alt: "Plato Mexicano completo con burrito, nachos y guarniciones", category: "sfeer", wide: true, order: 10 },
  { file: "postre.jpg", title: "Postre con fresa y chocolate", alt: "Postre artesanal con fresa y salsa de chocolate", category: "sfeer", order: 20 },
  { file: "tacos.jpg", title: "Tacos frescos", alt: "Tacos mexicanos con guacamole y verduras frescas", category: "sfeer", order: 30 },
  { file: "tarta1.jpeg", title: "Tarta de queso con mango", alt: "Tarta de queso casera con coulis de mango", category: "sfeer", order: 40 },
  { file: "nachos.jpg", title: "Nachos con queso", alt: "Nachos crujientes con queso fundido y jalapeños", category: "sfeer", order: 50 },

  // MEXICAN CLASSICS (Home, sección destacada)
  { file: "burrito.jpg", title: "Burrito recién hecho", alt: "Burrito clásico relleno de carne, frijoles y verduras", category: "mexicanClassics", order: 10 },
  { file: "plato.jpg", title: "Plato típico Mexicano", alt: "Plato tradicional Mexicano con guarniciones", category: "mexicanClassics", order: 20 },

  // OVER ONS — IMPRESSIE (galería extendida)
  { file: "fiesta.jpg", title: "Fiesta en el restaurante", alt: "Ambiente festivo en Burrito Azteca", category: "overOns", order: 10 },
  { file: "tacos.jpg", title: "Tacos frescos (impressie)", alt: "Tacos preparados con ingredientes frescos", category: "overOns", order: 20 },
  { file: "postre2.jpg", title: "Postre con cítricos", alt: "Postre artesanal con notas cítricas", category: "overOns", order: 30 },
  { file: "nachos.jpg", title: "Nachos para compartir", alt: "Plato grande de nachos para compartir", category: "overOns", order: 40 },
  { file: "empanada.jpg", title: "Empanada tradicional", alt: "Empanada casera estilo Latino", category: "overOns", order: 50 },
  { file: "burrito.jpg", title: "Burrito en mesa", alt: "Burrito servido en mesa de madera", category: "overOns", order: 60 },
  { file: "canelones.jpg", title: "Canelones Mexicanos", alt: "Canelones con salsa Mexicana especial", category: "overOns", order: 70 },
  { file: "tostadas.jpg", title: "Tostadas con guacamole", alt: "Tostadas crujientes con guacamole y carne", category: "overOns", order: 80 },
  { file: "sala.jpg", title: "Interior del restaurante", alt: "Ambiente cálido del local en Kampen", category: "overOns", order: 90 },
];

/** Settings con assets singulares */
const settingsAssets = {
  visitPhoto: { file: "visit-sala.jpg", alt: "Sala íntima del restaurante" },
  claudiaAlfredoPhoto: { file: "claudia-alfredo.jpg", alt: "Claudia y Alfredo, oprichters" },
};

async function uploadFile(filename) {
  const filePath = resolve(process.cwd(), "public/images", filename);
  const buffer = readFileSync(filePath);
  const ext = filename.split(".").pop().toLowerCase();
  const slug = filename.replace(/\.[^.]+$/, "").replace(/[^a-z0-9-]/gi, "-").toLowerCase();
  const contentType = ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg";
  console.log(`  ⬆️  Subiendo ${filename}...`);
  return await client.assets.upload("image", buffer, {
    filename: `${slug}.${ext}`,
    contentType,
  });
}

async function main() {
  console.log(`\n🚀 Subiendo imágenes a Sanity (project: ${projectId})\n`);

  // 1. Subir y crear galleryPhotos
  const fileCache = new Map();
  for (const photo of galleryPhotos) {
    let asset = fileCache.get(photo.file);
    if (!asset) {
      asset = await uploadFile(photo.file);
      fileCache.set(photo.file, asset);
    }
    const doc = {
      _type: "galleryPhoto",
      title: photo.title,
      category: photo.category,
      wide: !!photo.wide,
      order: photo.order,
      image: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
        alt: photo.alt,
      },
    };
    const created = await client.create(doc);
    console.log(`  ✅ ${photo.category.padEnd(16)} ${photo.title} (${created._id})`);
  }

  // 2. Crear/actualizar siteSettings con visitPhoto + claudia-alfredo
  console.log("\n⚙️  Subiendo siteSettings...");
  const visitAsset =
    fileCache.get(settingsAssets.visitPhoto.file) ||
    (await uploadFile(settingsAssets.visitPhoto.file));
  const claudiaAsset =
    fileCache.get(settingsAssets.claudiaAlfredoPhoto.file) ||
    (await uploadFile(settingsAssets.claudiaAlfredoPhoto.file));

  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    visitPhoto: {
      _type: "image",
      asset: { _type: "reference", _ref: visitAsset._id },
      alt: settingsAssets.visitPhoto.alt,
    },
    claudiaAlfredoPhoto: {
      _type: "image",
      asset: { _type: "reference", _ref: claudiaAsset._id },
      alt: settingsAssets.claudiaAlfredoPhoto.alt,
    },
  });
  console.log("  ✅ siteSettings creado");

  console.log("\n✨ Todo listo! Mira los resultados en /studio\n");
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
