import { type SchemaTypeDefinition } from "sanity";

import { galleryPhoto } from "./galleryPhoto";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryPhoto, siteSettings],
};
