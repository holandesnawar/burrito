import { groq } from "next-sanity";

export const galleryByCategoryQuery = groq`
  *[_type == "galleryPhoto" && category == $category]
    | order(order asc) {
      _id,
      title,
      wide,
      "image": image.asset->,
      "alt": coalesce(image.alt, title)
    }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    "visitPhoto": visitPhoto.asset->,
    "visitPhotoAlt": coalesce(visitPhoto.alt, "Bezoek ons"),
    "claudiaAlfredoPhoto": claudiaAlfredoPhoto.asset->,
    "claudiaAlfredoAlt": coalesce(claudiaAlfredoPhoto.alt, "Claudia y Alfredo")
  }
`;

export type GalleryPhotoDoc = {
  _id: string;
  title: string;
  wide?: boolean;
  image: { _id: string; url: string };
  alt: string;
};

export type SiteSettingsDoc = {
  visitPhoto?: { url: string };
  visitPhotoAlt?: string;
  claudiaAlfredoPhoto?: { url: string };
  claudiaAlfredoAlt?: string;
} | null;
