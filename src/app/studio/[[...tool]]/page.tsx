"use client";

/**
 * Studio de Sanity embebido en Next.js en /studio
 * Edición de fotos, vídeos y configuración general.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
