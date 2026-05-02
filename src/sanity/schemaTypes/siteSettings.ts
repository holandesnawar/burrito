import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Configuración general",
  type: "document",
  fields: [
    defineField({
      name: "visitPhoto",
      title: "Foto de Bezoek ons (sección Visit)",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "Texto alternativo", type: "string" },
      ],
    }),
    defineField({
      name: "heroVideoMobile",
      title: "Vídeo Hero (vertical, móvil)",
      type: "file",
      options: { accept: "video/mp4,video/quicktime" },
    }),
    defineField({
      name: "heroVideoDesktop",
      title: "Vídeo Hero (horizontal, desktop)",
      type: "file",
      options: { accept: "video/mp4,video/quicktime" },
    }),
    defineField({
      name: "claudiaAlfredoPhoto",
      title: "Foto de Claudia & Alfredo (Over ons)",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "Texto alternativo", type: "string" },
      ],
    }),
  ],
});
