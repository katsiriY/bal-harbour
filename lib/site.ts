// Central site config — shared by metadata, JSON-LD, sitemap, and robots so
// the SEO/GEO signals stay consistent everywhere.
export const SITE = {
  name: "bal-harbour.com",
  url: "https://bal-harbour.com",
  locale: "en_US",
  title: "Bal Harbour Travel Guide — Hotels, Dining, Beach & Shops",
  description:
    "The friendly local guide to Bal Harbour, Florida — hand-picked oceanfront hotels, the best restaurants, beach-access tips, the Bal Harbour Shops, and real-estate help, from people who actually live here.",
  // Short, quotable definition — written so AI answer engines can lift it whole.
  summary:
    "Bal Harbour is a small, upscale beachfront village at the north end of Miami Beach, Florida, best known for the luxury Bal Harbour Shops, oceanfront resorts, and a quiet public-access stretch of Atlantic Ocean beach.",
  keywords: [
    "Bal Harbour",
    "Bal Harbour Florida",
    "Bal Harbour hotels",
    "oceanfront hotels Bal Harbour",
    "Bal Harbour luxury hotels",
    "where to stay in Bal Harbour",
    "Bal Harbour restaurants",
    "best restaurants in Bal Harbour",
    "Bal Harbour Shops",
    "Bal Harbour Beach",
    "Bal Harbour real estate",
    "Bal Harbour travel guide",
    "things to do in Bal Harbour",
  ],
  geo: { latitude: 25.8901, longitude: -80.1256 },
  ogImage: "/img/palms-surf.jpg",
} as const;

// Route → priority/change-frequency, reused by the sitemap.
export const ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/hotels", priority: 0.9, changeFrequency: "weekly" },
  { path: "/eat", priority: 0.8, changeFrequency: "weekly" },
  { path: "/shops", priority: 0.7, changeFrequency: "monthly" },
  { path: "/beach", priority: 0.7, changeFrequency: "monthly" },
  { path: "/real-estate", priority: 0.8, changeFrequency: "monthly" },
] as const;
