// Project ID y dataset son públicos (van al browser) — fallbacks para que Vercel
// pueda buildear sin env vars configurados manualmente.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ia2ji9f4";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";
