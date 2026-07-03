import type { MetadataRoute } from "next";
import { SITE, ROUTES } from "@/lib/site";
import { HOTELS } from "@/lib/hotels";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${SITE.url}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const hotelPages: MetadataRoute.Sitemap = HOTELS.map((h) => ({
    url: `${SITE.url}/hotels/${h.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...hotelPages];
}
