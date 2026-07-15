// IndexNow ping — tells Bing (and other IndexNow engines) about our URLs on
// every production deploy. Bing's index is what ChatGPT browsing reads, so
// this is a GEO lever, not just classic SEO.
//
// Runs from the npm "postbuild" hook. It is a no-op outside Vercel
// production builds, and it NEVER fails the build — indexing is best-effort.
import { readFileSync } from "node:fs";

const HOST = "bal-harbour.com";
const SITE_URL = `https://${HOST}`;
// Key must match the public/<key>.txt file (IndexNow ownership proof).
const KEY = "6c67a632386b89d71f9be6ea23e80018";

function slugsFrom(file, pattern) {
  try {
    const src = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
    return [...src.matchAll(pattern)].map((m) => m[1]);
  } catch {
    return [];
  }
}

async function main() {
  if (process.env.VERCEL_ENV !== "production") {
    console.log("[indexnow] skipped (not a Vercel production build)");
    return;
  }

  const staticPaths = [
    "/",
    "/hotels",
    "/eat",
    "/shops",
    "/beach",
    "/guides",
    "/real-estate",
    "/about",
  ];
  const hotelSlugs = slugsFrom("lib/hotels.ts", /slug: "([^"]+)"/g).map(
    (s) => `/hotels/${s}`,
  );
  const guideSlugs = slugsFrom("lib/guides.ts", /slug: "([^"]+)"/g).map(
    (s) => `/guides/${s}`,
  );
  const urlList = [...staticPaths, ...hotelSlugs, ...guideSlugs].map(
    (p) => `${SITE_URL}${p === "/" ? "" : p}`,
  );

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${SITE_URL}/${KEY}.txt`,
      urlList,
    }),
  });
  console.log(`[indexnow] pinged ${urlList.length} URLs → HTTP ${res.status}`);
}

main().catch((err) => {
  // Never break the deploy over an indexing ping.
  console.warn("[indexnow] ping failed (non-fatal):", err?.message ?? err);
});
