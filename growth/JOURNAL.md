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

## 2026-09-28

**Infra:** apex↔www redirect still correctly fixed — `curl -I https://bal-harbour.com/` returns 200 direct, `curl -I https://www.bal-harbour.com/` still 308s to apex. Sitemap: 200 OK, 19 URLs. Build clean.

**GSC (WoW, window 2026-08-29→2026-09-25 vs. last week's 2026-08-21→2026-09-18):** clicks 1→3 (+200%), impressions 1180→1552 (+31.5%), CTR 0.085%→0.19% (more than doubled), avg position 23.47→17.69 (improved 5.8 places). All four headline metrics moved the right direction. Apex is now carrying 33% of homepage impressions (438/1269) vs. near-zero two weeks ago — Google is consolidating onto the canonical apex post-redirect-fix, as expected. Full tables in gsc-history.md.

**Evidence last week's tweaks are working:**
- `/guides/beach-access` (the FAQ addition) — pos improved 6.95→7.07 (flat/good), and it now has 2 clicks (was 1) — the parking-FAQ snippet play is converting.
- `/beach` (the title/description rewrite) — position jumped sharply, 17.8→7.0–10.9 depending on apex/www split. CTR hasn't followed yet (still 0 clicks) but the ranking lift itself is a strong signal; worth one more week before touching it again.

**Striking distance (acted on):**
- `/guides/bal-harbour-vs-surfside` — pos 7.74, 31–32 impr, 0 clicks for two full weeks despite good position (this was last week's #1 flagged next-priority). Tightened `seoTitle` from 74 chars ("Bal Harbour vs Surfside — Which Should You Choose? (Local's Honest Take)") to 51 chars ("Bal Harbour vs Surfside: Which Should You Choose?") to avoid SERP truncation, and shortened the meta description from 186 to ~150 chars to fit within Google's display limit while keeping the strongest hook. Bumped `updated` to 2026-09-28.

No new guide this run — same reasoning as last week: a validated, GSC-confirmed striking-distance candidate beats speculative new content, and the guardrail caps this run at 1–2 highest-impact actions.

**AI-engine proxy (WebSearch battery, 10 fixed queries vs. last run):** No change in outcome — bal-harbour.com still wins exactly one query outright: "is Bal Harbour beach public" (homepage cited as a source, AI answer phrasing tracks our copy closely). All other queries (hotels, restaurants, comparisons, Shops tips, Haulover sandbar) are dominated by big OTAs (Expedia, Booking, Tripadvisor, Hotels.com, Yelp) and local real-estate/tourism blogs (balharbourflorida.com, brosdaandbentley.com, miamiandbeaches.com). The "site:bal-harbour.com" proxy query surfaced `https://www.bal-harbour.com/shops` (www, not apex) as an indexed result alongside the apex homepage — confirms Google hasn't fully consolidated indexing onto apex yet, consistent with the GSC page-split note above. No regressions.

**Freshness sweep:** WebSearch-verified — Ritz-Carlton Bal Harbour renovation timeline unchanged (closed through Dec 7 2026, reopening Jan 2027). No drift to correct.

**Link health:** curl-checked all outbound hotel/restaurant links. `marriott.com` Ritz-Carlton page returned 403 with an Akamai "Access Denied" edge-block page (confirmed via full GET with a browser user-agent, not just a HEAD 404) — this is bot-blocking, not a dead link; ritzcarlton.com, surfclubrestaurant.com, resy.com all returned clean 200s. `opentable.com` timed out (connection-level, 000) rather than returning an HTTP status — inconclusive/likely this environment's network, not treated as evidence of a dead link (same domain returned 403/503 last week, i.e., reachable-but-blocked). No links replaced.

**Shipped:** 1 commit to main — `lib/guides.ts` seoTitle/description tightening + updated date on the bal-harbour-vs-surfside guide. Build passed (`npm run build`, TypeScript + all 28 static pages generated OK).

**Next 3 priorities:**
1. Check next week's GSC pull for whether `/guides/bal-harbour-vs-surfside`'s clicks respond to this run's title/description tightening, and whether `/beach`'s strong position gain (17.8→~7-11) finally converts to a click.
2. Keep watching the apex/www split in page-level GSC data — it should keep shifting toward apex; if it stalls or reverses, that's worth flagging as a possible new infra issue.
3. Speculative backlog unchanged: a short FAQ on /shops pointing to in-mall dining (Makoto, Carpaccio) — cheap internal link to /eat, no new content needed. See keywords.md #6.
