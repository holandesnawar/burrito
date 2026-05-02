/**
 * Layout para el Studio de Sanity:
 * - Anula el layout principal (sin Header/Footer)
 * - Re-exporta metadata y viewport del Studio
 */
export { metadata, viewport } from "next-sanity/studio";

export const dynamic = "force-static";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
