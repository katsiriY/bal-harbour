# Growth agent journal

One dated entry per run (weekly, Mondays). See gsc-history.md for the full GSC data tables and keywords.md for the ranked backlog.

## 2026-09-21

**Infra:** The known apex→www redirect issue is FIXED. `curl -I https://bal-harbour.com/` now returns 200 directly (canonical tag matches: `https://bal-harbour.com`), and `https://www.bal-harbour.com/` now 308-redirects to the apex — the correct direction, matching every canonical/JSON-LD/sitemap/llms.txt declaration in the repo. This was fixed at the Vercel Domains level (not a repo change) sometime between the 2026-09-16 check and today. Sitemap: 200 OK.

**GSC (first run with real data, no WoW yet):** 28-day totals (2026-08-21→2026-09-18): 1180 impressions, 1 click, CTR 0.085%, avg position 23.5. Nearly all indexed pages still show as `www.bal-harbour.com/*` in GSC — expected lag; will re-check the apex/www split in next week's data now that the redirect is fixed. Full tables in gsc-history.md.

**Striking distance (acted on):**
- `/guides/beach-access` — pos 6.95, 64 impressions, only 1 click. Added a new FAQ entry ("Where can I park for Bal Harbour beach?") answering the query "bal harbour beach parking" (pos 4.2, 9 impr, 0 clicks) near-verbatim, to compete for the featured-snippet/PAA box. Bumped `updated` to 2026-09-21.
- `/beach` — pos 17.8, 51 impressions, 0 clicks. Rewrote the page title/meta description to lead with "Is Bal Harbour Beach Public?" (matching the actual #1 question visitors ask, per our own copy) instead of a generic "Public Access, Parking & Local Tips" label — should lift CTR and possibly phrase-match position.

**AI-engine proxy (WebSearch battery vs. last run):** bal-harbour.com does NOT win any AI-generated summary among the 10 fixed queries except one: "is Bal Harbour beach public" — bal-harbour.com's homepage is cited as a source link and the AI answer's phrasing ("free and open to the public... 96th Street... metered parking, restrooms, outdoor shower") closely tracks our own copy. Big OTAs (Expedia, Booking, Tripadvisor, Hotels.com) and local real-estate blogs (balharbourflorida.com, brosdaandbentley.com) dominate the hotel/restaurant/comparison queries. No regressions vs. what we'd expect; this remains the hardest part of the mission — classic informational queries are where we compete best.

**Freshness sweep:** Verified via WebSearch — Ritz-Carlton Bal Harbour renovation timeline unchanged (closed since April 7 2026, reopening January 2027); no drift to correct. Link health: checked all outbound hotel/restaurant links in lib/hotels.ts and lib/restaurants.ts. seaview-hotel.com confirmed live via full fetch. marriott.com and opentable.com returned 403/503 to both curl and WebFetch — consistent with known bot-blocking on those domains, not evidence of dead links (ritzcarlton.com, surfclubrestaurant.com, resy.com all returned clean 200s). No links replaced.

**Shipped:** 2 commits worth of changes to main (FAQ addition + updated date on beach-access guide; title/description rewrite on /beach). Build passed (`npm run build`, TypeScript + all 28 static pages generated OK). No new guide this run — good striking-distance candidates existed and are cheaper than new content per the routine's own priority rule.

**Next 3 priorities:**
1. Check next week's GSC pull for (a) whether clicks respond to this run's two CTR tweaks, and (b) whether the page-URL split shifts from www→apex now that the redirect is fixed.
2. If `/guides/bal-harbour-vs-surfside` (pos 7.0, 33 impr, 0 clicks) still shows zero clicks next week, give it the same title/meta treatment as beach-access got this run.
3. Speculative backlog: a short FAQ on /shops pointing to in-mall dining (Makoto, Carpaccio) — cheap internal link to /eat, no new content needed. See keywords.md #6.
