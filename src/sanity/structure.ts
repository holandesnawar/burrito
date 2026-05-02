import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Burrito Azteca CMS")
    .items([
      // Singleton: Site Settings
      S.listItem()
        .title("⚙️ Configuración general")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      // Galleries by category
      S.listItem()
        .title("📷 Sfeer (galería principal)")
        .child(
          S.documentList()
            .title("Sfeer")
            .filter('_type == "galleryPhoto" && category == "sfeer"')
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.listItem()
        .title("🌮 Mexicaanse klassiekers (Home)")
        .child(
          S.documentList()
            .title("Mexicaanse klassiekers")
            .filter(
              '_type == "galleryPhoto" && category == "mexicanClassics"'
            )
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.listItem()
        .title("🖼️ Over ons - Impressie")
        .child(
          S.documentList()
            .title("Over ons - Impressie")
            .filter('_type == "galleryPhoto" && category == "overOns"')
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
    ]);
