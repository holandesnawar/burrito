import { defineField, defineType } from "sanity";

export const galleryPhoto = defineType({
  name: "galleryPhoto",
  title: "Foto de galería",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título interno",
      description: "Solo para identificarla en el admin (ej: 'Burrito clásico')",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          title: "Texto alternativo (SEO + accesibilidad)",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Sección donde aparece",
      type: "string",
      options: {
        list: [
          { title: "Sfeerimpressie (galería principal)", value: "sfeer" },
          { title: "Mexicaanse klassiekers (Home)", value: "mexicanClassics" },
          { title: "Over ons - Impressie", value: "overOns" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "wide",
      title: "Ocupa el doble de ancho (solo Sfeer)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Orden",
      description: "Menor número = aparece antes",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Orden manual",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image", category: "category" },
    prepare: ({ title, media, category }) => ({
      title,
      subtitle: category,
      media,
    }),
  },
});
