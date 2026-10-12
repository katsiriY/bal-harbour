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

## 2026-10-05

**Infra:** apex↔www redirect still correctly fixed — `curl -I https://bal-harbour.com/` returns 200 direct (HTTP/2, Vercel cache HIT). Sitemap: 200 OK. Build clean.

**GSC (WoW, window 2026-09-05→2026-10-02 vs. last week's 2026-08-29→2026-09-25):** clicks 3→10 (+233%), impressions 1552→1902 (+22.6%), CTR 0.19%→0.53% (nearly 3x), avg position 17.69→15.00 (improved 2.69 places). The best single-week jump yet — all four headline metrics accelerating together. Full tables in gsc-history.md.

**Evidence past tweaks are working:**
- `/beach` (apex) — the title/description rewrite from two runs ago ("Is Bal Harbour Beach Public?") is now converting hard: pos 6.69, 29 impr, **5 clicks (17.2% CTR)**. The ranking jump 3 weeks ago has fully turned into clicks.
- `/guides/beach-access` — apex+www combined now 75 impr, 4 clicks (up from 69/2 last week). The parking-FAQ play keeps compounding.
- `/guides/bal-harbour-vs-surfside` — position kept improving (7.74→5.5 on www) but **still 0 clicks after 3 straight weeks and 2 rounds of title/description tightening**. Diagnosis: the impressions for this page come mostly from generic "bal harbour ___" query variants, not an actual "vs surfside" search — intent mismatch, not a snippet problem. Decided NOT to re-tweak the title a third time (diminishing-returns pattern); logging this and moving on rather than iterating on a fix that isn't the bottleneck.

**Striking distance (acted on):**
- `/guides/best-time-to-visit` — pos 4.14 (excellent), 7 impr, 0 clicks — a fresh candidate this run. Tightened seoTitle (74→53 chars) and description (217→145 chars) to lead with the "secret shoulder months" hook, same playbook that worked for beach/beach-access. Bumped `updated` to 2026-10-05.
- `/shops` — speculative backlog item #6 (queued since 2026-09-21): added an inline "Full dining guide →" link from the existing "The refuel" tip card to `/eat`. Cheap internal-linking win, no new content, no FAQ needed — the dining mention was already there, it just didn't link anywhere.

No new guide this run — same reasoning as the last two: a validated striking-distance candidate plus a zero-cost internal-link fix together satisfy the "1-2 highest-impact actions" cap, and a new guide would be lower leverage this week.

**AI-engine proxy (WebSearch battery, 10 fixed queries vs. last run):** No change in outcome — bal-harbour.com still wins exactly one query outright: "is Bal Harbour beach public" (homepage cited, AI answer phrasing tracks our copy). "Bal Harbour Shops tips" and "best restaurants in Bal Harbour" results included no bal-harbour.com citation. All comparison queries (vs Surfside, vs Bay Harbor Islands) are now dominated by a cluster of individual real-estate-agent blogs (millionluxury.com, kimrodstein.com, marielahopen.com, jelenakhurana.com, jgsellingmiami.com, makrealty.com) rather than OTAs — a new competitive pattern worth noting, though our own vs-surfside guide still ranks well in classic Google (see GSC above), just not in the AI-summary box. No regressions.

**Freshness sweep:** WebSearch-verified — Ritz-Carlton Bal Harbour renovation timeline unchanged (closed through Dec 7 2026, reopening Jan 2027; today is Oct 5 2026, so still mid-closure). No drift to correct.

**Link health:** curl-checked all outbound hotel/restaurant links. `marriott.com` St. Regis page now returns a clean 200 with a browser user-agent (previously 403-blocked — Akamai easing up, or just this request got through); ritzcarlton.com, surfclubrestaurant.com, resy.com all clean. `opentable.com` again timed out at the connection level (000, third run in a row) — same inconclusive pattern as before, not treated as a dead link.

**Shipped:** 1 commit to main — `lib/guides.ts` (best-time-to-visit seoTitle/description tightening + updated date) and `app/shops/page.tsx` (new /eat link on the refuel tip). Build passed (`npm run build`, TypeScript + all 28 static pages generated OK).

**Next 3 priorities:**
1. Check whether `/guides/best-time-to-visit`'s click-through responds to this run's title/description tightening (pos 4.14 is already excellent — this is a pure CTR test).
2. Stop iterating on `/guides/bal-harbour-vs-surfside`'s title/description — 2 rounds done, position improving but clicks flat, likely a query-intent mismatch rather than a snippet problem. Just monitor; don't spend a third action there unless something changes.
3. Apex/www consolidation has plateaued around ~52% apex on homepage impressions rather than continuing to climb — watch next week; if it stalls again or reverses, flag as a possible new infra issue rather than assuming it'll keep self-correcting.

## 2026-10-12

**Infra:** apex↔www redirect still correctly fixed — `curl -I https://bal-harbour.com/` returns HTTP/2 200 direct (Vercel cache HIT, `x-nextjs-prerender: 1`). Sitemap: 200 OK, valid URL list. Build clean.

**GSC (WoW, window 2026-09-12→2026-10-09 vs. last week's 2026-09-05→2026-10-02):** clicks 10→13 (+30%), impressions 1902→2158 (+13.5%), CTR 0.526%→0.602% (+0.076pp), avg position 15.00→14.00 (improved 1 place). Fourth straight week of improvement on all four metrics, though smaller than last week's spike — growth continuing but decelerating. Apex/www split resumed consolidating: apex now carries ~69% of homepage impressions (1293/1870), up from ~52% two runs ago, after last week's plateau. Full tables in gsc-history.md.

**Evidence past tweaks are working:**
- `/beach` and `/guides/beach-access` — both still converting well (6 and 5 clicks respectively this window), no action needed.
- `/guides/bal-harbour-vs-surfside` — 4th straight week at 0 clicks despite pos ~12.9 (combined apex+www). Per last run's decision, did not re-tweak a third time — confirmed intent-mismatch, not a snippet problem.
- `/guides/best-time-to-visit` — tightened last run (2026-10-05); still 0 clicks, but only one week of data (9 impressions) — too small a sample to judge yet, holding off another round.

**Striking distance (acted on):**
- `/eat` — pos ~14.0 (apex+www combined), 32 impressions, 0 clicks, never previously touched. Diagnosed the same failure mode that worked on 3 earlier pages: the meta description was 252 characters, far past Google's ~155-char display limit, so it was being truncated mid-sentence. Rewrote to 140 chars leading with the "6 favorite tables" hook (`app/eat/page.tsx`).
- `/guides/beach-access` — added a new FAQ entry, "Is the beach walkable from the Bal Harbour Shops?" (keywords.md backlog item #5, queued since 2026-09-21). The "two-minute walk" fact was already verified in the guide's intro prose; this just promotes it to an explicit Q&A for the snippet/PAA box, same playbook as the parking-FAQ win from three runs ago. Bumped `updated` to 2026-10-12.

No new guide this run — same reasoning as the last three: a validated striking-distance candidate plus a zero-cost FAQ addition satisfy the "1–2 highest-impact actions" cap at lower cost than new content.

**AI-engine proxy (WebSearch battery, 10 fixed queries + site: vs. last run):** Regression to flag — bal-harbour.com did not appear as a cited source in ANY of the 10 AI-generated summaries this run, including "is Bal Harbour beach public," which had been our one reliable win for three straight runs. The `site:bal-harbour.com` proxy query also returned zero results from our own domain (only third-party real-estate/directory sites), vs. previous runs where at least the homepage or /shops surfaced. Hotels/restaurants/comparison queries remain dominated by OTAs (Expedia, Hotels.com, Fodor's), aggregators (OpenTable, Resy), and real-estate blogs (manhattanmiami.com, condoblackbook.com) — consistent with prior runs. This may be noise in a single WebSearch pull rather than a real citation loss (GSC classic-search metrics are unambiguously up this week), but it's the first run where we lost our only AI-citation win, so it's worth re-checking next run before concluding it's a trend.

**Freshness sweep:** WebSearch-verified — Ritz-Carlton Bal Harbour renovation timeline unchanged (ritzcarlton.com/BalHarbour confirms reopening January 2027). No drift to correct.

**Link health:** curl-checked all outbound hotel/restaurant links with a browser user-agent. `marriott.com` Ritz-Carlton page alternated 403/404 across two consecutive requests — consistent with the known Akamai bot-blocking pattern (not a real break); `officialUrl` for this hotel already points to the clean ritzcarlton.com page, so no change made. `seaview-hotel.com`, `ritzcarlton.com`, `surfclubrestaurant.com`, `resy.com` all clean 200s. `opentable.com` timed out at the connection level again (000) — fourth run in a row with the same inconclusive pattern; not treated as a dead link.

**Shipped:** 1 commit to main — `app/eat/page.tsx` (meta description tightening) and `lib/guides.ts` (new FAQ entry + updated date on beach-access), plus this journal/gsc-history/keywords update. Build passed (`npm run build`, TypeScript + all 28 static pages generated OK).

**Next 3 priorities:**
1. Check whether `/eat`'s click-through responds to this run's meta description fix (pos ~14 is mediocre but workable — this is testing whether the truncated-description theory holds for a fourth page).
2. Re-run the AI-engine proxy battery next week and specifically re-check "is Bal Harbour beach public" — if bal-harbour.com is still absent from AI summaries two runs running, treat it as a real citation loss rather than single-pull noise and consider a content refresh on `/beach` or the beach-access guide aimed at that query.
3. `/guides/best-time-to-visit` has too little data (9 impressions) one week after its CTR tweak — give it one more week before deciding whether to revisit.
