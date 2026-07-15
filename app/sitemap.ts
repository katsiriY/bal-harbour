import type { MetadataRoute } from "next";
import { SITE, ROUTES } from "@/lib/site";
import { HOTELS } from "@/lib/hotels";
import { GUIDES } from "@/lib/guides";

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

  // Guides carry their real edit date — a freshness signal search engines
  // and AI crawlers actually read.
  const guidePages: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${SITE.url}/guides/${g.slug}`,
    lastModified: new Date(`${g.updated}T12:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...hotelPages, ...guidePages];
}
