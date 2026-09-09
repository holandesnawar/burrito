import type { MetadataRoute } from "next";
import { restaurant } from "@/lib/restaurant";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/menukaart", priority: 0.9, changeFrequency: "monthly" },
  { path: "/sfeerimpressie", priority: 0.6, changeFrequency: "monthly" },
  { path: "/over-ons", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${restaurant.siteUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
