# GSC history

One dated block per run. Real Google Search Console data via Composio (`sc-domain:bal-harbour.com`, domain property — aggregates apex + www + http/https). Window is always the last 28 completed days (GSC lags ~3 days).

## 2026-09-21 (window: 2026-08-21 to 2026-09-18)

First run with real GSC data — no prior week to diff against.

**Totals:** clicks 1, impressions 1180, CTR 0.085%, avg position 23.47.

**Top pages by impressions:**
| Page | Impr | Pos | Clicks |
|---|---|---|---|
| www/ (homepage) | 882 | 23.0 | 0 |
| /shops | 77 | 47.2 | 0 |
| /guides/beach-access | 64 | 6.95 | 1 |
| /beach | 51 | 17.8 | 0 |
| /eat (www) | 42 | 30.5 | 0 |
| /guides/bal-harbour-vs-surfside | 33 | 7.0 | 0 |
| /hotels/ritz-carlton-bal-harbour | 16 | 8.4 | 0 |
| /guides | 14 | 53.8 | 0 |
| /guides/best-time-to-visit | 8 | 4.5 | 0 |

**Top queries by impressions:**
| Query | Impr | Pos |
|---|---|---|
| bal harbour | 546 | 13.9 |
| bal harbour miami | 18 | 33.6 |
| bal harbour bay harbor islands | 14 | 67.9 |
| bal harbour shops | 15 | 40.3 |
| bal harbor miami | 13 | 41.5 |

**Striking distance (position 5–20, impressions ≥ 3), sorted by impressions:**
- /guides/beach-access — pos 6.95, impr 64, 1 click ← acted on this run
- /beach — pos 17.8, impr 51, 0 clicks ← acted on this run
- /guides/bal-harbour-vs-surfside — pos 7.0, impr 33, 0 clicks
- /hotels/ritz-carlton-bal-harbour — pos 8.4, impr 16, 0 clicks
- query "bal harbour" — pos 13.9, impr 546 (branded head term; on-page tweaks have limited leverage here, mostly a domain-authority/CTR question)
- homepage (apex, bal-harbour.com/) — pos 8, impr 3

Note: nearly every indexed page still shows as `www.bal-harbour.com/*` in GSC even though apex is canonical — expected lag from the redirect fix (see journal). Will re-check the split next run.

## 2026-09-28 (window: 2026-08-29 to 2026-09-25)

**Totals:** clicks 3, impressions 1552, CTR 0.19%, avg position 17.69.

**WoW deltas vs 2026-09-21 block:** clicks +2 (1→3, +200%), impressions +372 (+31.5%), CTR +0.11pp (0.085%→0.19%, more than doubled), avg position improved 5.8 places (23.47→17.69). Directionally strong — consistent with last week's two CTR tweaks landing plus the apex/www split starting to normalize.

**Top pages by impressions:**
| Page | Impr | Pos | Clicks |
|---|---|---|---|
| www/ (homepage) | 831 | 18.92 | 0 |
| apex/ (homepage) | 438 | 14.23 | 1 |
| apex/guides/beach-access | 69 | 7.07 | 2 |
| www/shops | 66 | 38.44 | 0 |
| www/eat | 40 | 24.65 | 0 |
| www/beach | 36 | 10.86 | 0 |
| www/guides/bal-harbour-vs-surfside | 31 | 7.74 | 0 |
| www/hotels/ritz-carlton-bal-harbour | 11 | 7.64 | 0 |
| apex/beach | 9 | 7.0 | 0 |
| apex/shops | 8 | 36.0 | 0 |

**Top queries by impressions:**
| Query | Impr | Pos |
|---|---|---|
| bal harbour | 892 | 12.50 (was 13.9) |
| bal harbour miami | 24 | 27.46 |
| bal harbor miami | 15 | 28.87 |
| bal harbour shops | 16 | 40.5 |
| bal harbour bay harbor islands | 8 | 66.38 |

**Striking distance (position 5–20, impr ≥ 3), sorted by impressions:**
- www/ (homepage) — pos 18.92, impr 831, 0 clicks — branded-term/domain-authority play, not a quick on-page fix (see keywords.md notes)
- apex/ (homepage) — pos 14.23, impr 438, 1 click
- apex/guides/beach-access — pos 7.07, impr 69, 2 clicks ← last week's FAQ tweak is converting
- www/beach — pos 10.86, impr 36, 0 clicks — position improved sharply from 17.8 last week (title/description rewrite working on ranking; CTR hasn't followed yet, give it another week)
- **www/guides/bal-harbour-vs-surfside — pos 7.74, impr 31, 0 clicks — flagged last run as next candidate, confirmed still 0 clicks over 2 full weeks despite good position. ACTED ON this run: tightened seoTitle (74→51 chars, avoids SERP truncation) and description (186→~150 chars) to lead with the direct comparison hook, same playbook as beach-access/beach.**
- www/hotels/ritz-carlton-bal-harbour — pos 7.64, impr 11, 0 clicks — still holding off per keywords.md (wait until closer to Jan 2027 reopening)
- apex/beach — pos 7.0, impr 9, 0 clicks

Apex/www split: apex now carries a real, growing share (438 of 1269 homepage impressions, 33%) vs. near-zero two weeks ago — Google is gradually consolidating onto the canonical apex following the Vercel redirect fix. Expect this to keep shifting.

## 2026-10-05 (window: 2026-09-05 to 2026-10-02)

**Totals:** clicks 10, impressions 1902, CTR 0.526%, avg position 15.00.

**WoW deltas vs 2026-09-28 block:** clicks +7 (3→10, +233%), impressions +350 (+22.6%), CTR +0.34pp (0.19%→0.53%, nearly 3x), avg position improved 2.69 places (17.69→15.00). Biggest single-week jump yet — all four headline metrics accelerating.

**Top pages by impressions (apex + www):**
| Page | Impr | Pos | Clicks |
|---|---|---|---|
| www/ (homepage) | 766 | 16.31 | 0 |
| apex/ (homepage) | 831 | 13.42 | 1 |
| www/guides/beach-access | 58 | 7.10 | 2 |
| www/shops | 51 | 34.35 | 0 |
| apex/beach | 29 | 6.69 | 5 |
| www/beach | 29 | 8.34 | 0 |
| www/guides/bal-harbour-vs-surfside | 26 | 5.5 | 0 |
| apex/guides/bal-harbour-vs-surfside | 19 | 20.37 | 0 |
| apex/shops | 18 | 36.67 | 0 |
| apex/guides/beach-access | 17 | 3.82 | 2 |
| apex/hotels | 10 | 44.9 | 0 |
| www/hotels/ritz-carlton-bal-harbour | 7 | 6.43 | 0 |
| www/best-time-to-visit | 7 | 4.14 | 0 |

**Top queries by impressions:**
| Query | Impr | Pos |
|---|---|---|
| bal harbour | 1159 | 11.89 (was 12.50) |
| bal harbor miami | 18 | 26.0 |
| bal harbour miami | 28 | 22.07 |
| bal harbour shops | 14 | 39.14 |
| bal harbor | 28 | 15.75 |
| bal harbour beach parking | 10 | 4.2 |

**Striking distance (position 5–20, impr ≥ 3), sorted by impressions:**
- apex/ (homepage) — pos 13.42, impr 831, 1 click — branded/domain-authority play
- www/ (homepage) — pos 16.31, impr 766, 0 clicks — same
- www/guides/beach-access — pos 7.10, impr 58, 2 clicks — converting well (combined w/ apex: 75 impr, 4 clicks)
- apex/beach — pos 6.69, impr 29, **5 clicks, 17.2% CTR** — the title/description rewrite from two runs ago is now converting strongly
- www/guides/bal-harbour-vs-surfside — pos 5.5 (improved from 7.74), impr 26, still 0 clicks after 3 straight weeks and 2 rounds of title/description tightening
- apex/guides/beach-access — pos 3.82, impr 17, 2 clicks
- www/hotels/ritz-carlton-bal-harbour — pos 6.43, impr 7, 0 clicks — holding off per keywords.md
- **www/best-time-to-visit — pos 4.14, impr 7, 0 clicks ← NEW candidate, acted on this run**

Apex/www split holding steady (~52% apex on homepage impressions) — consolidation plateauing rather than continuing to accelerate; worth watching but not yet a concern.

## 2026-10-12 (window: 2026-09-12 to 2026-10-09)

**Totals:** clicks 13, impressions 2158, CTR 0.602%, avg position 14.00.

**WoW deltas vs 2026-10-05 block:** clicks +3 (10→13, +30%), impressions +256 (+13.5%), CTR +0.076pp (0.526%→0.602%), avg position improved 1.00 place (15.00→14.00). Fourth straight week of improvement on all four headline metrics, though this week's jump is smaller than the prior two — growth is still real but decelerating from the 2026-10-05 spike.

**Top pages by impressions (apex + www combined):**
| Page | Impr | Pos | Clicks |
|---|---|---|---|
| / (homepage) | 1870 | ~13.9 | 2 |
| /guides/beach-access | 65 | ~6.0 | 5 |
| /beach | 64 | ~6.7 | 6 |
| /shops | 55 | ~32.9 | 0 |
| /guides/bal-harbour-vs-surfside | 40 | ~12.9 | 0 |
| /eat | 32 | ~14.0 | 0 |
| /hotels/ritz-carlton-bal-harbour | 17 | ~8.5 | 0 |
| /hotels | 13 | ~38 | 0 |
| /guides | 10 | ~9.2 | 0 |
| /guides/best-time-to-visit | 9 | ~4.3 | 0 |

**Top queries by impressions:**
| Query | Impr | Pos |
|---|---|---|
| bal harbour | 1395 | 11.32 (was 11.89) |
| bal harbor miami | 18 | 33.56 |
| bal harbour miami | 26 | 16.12 |
| bal.harbour | 22 | 11.82 |
| bal harbor | 27 | 14.85 |
| bal harbour beach | 12 | 29.0 |
| bal harbour florida | 11 | 43.73 |

**Striking distance (position 5–20, impr ≥ 3), sorted by impr:**
- / (homepage) — pos ~13.9, impr 1870, 2 clicks — branded/domain-authority play, not a quick fix
- /guides/beach-access — pos ~6.0, impr 65, **5 clicks** — still the best-converting page after the homepage
- /beach — pos ~6.7, impr 64, **6 clicks** — converting strongly, no action needed
- /guides/bal-harbour-vs-surfside — pos ~12.9, impr 40, 0 clicks — 4th straight week at 0 clicks; confirmed intent-mismatch diagnosis from last run, not touched again
- **/eat — pos ~14.0, impr 32, 0 clicks ← NEW candidate, acted on this run** (meta description was 252 chars, way over display limit — tightened to 140 chars)
- /hotels/ritz-carlton-bal-harbour — pos ~8.5, impr 17, 0 clicks — holding off per keywords.md until closer to Jan 2027 reopening
- /guides (index) — pos ~9.2, impr 10, 0 clicks — low actionability (index page), not acted on
- /guides/best-time-to-visit — pos ~4.3, impr 9, 0 clicks — tightened last run (2026-10-05); one week of data isn't enough yet, give it more time before any further change

Apex/www split: homepage apex 1293 impr / www 577 impr this window — apex now carries the clear majority (~69%) vs ~52% two runs ago; consolidation resumed after last run's plateau note.

## 2026-10-19 (window: 2026-09-19 to 2026-10-16)

**Totals:** clicks 19, impressions 2236, CTR 0.850%, avg position 13.46.

**WoW deltas vs 2026-10-12 block:** clicks +6 (13→19, +46%), impressions +78 (2158→2236, +3.6%), CTR +0.248pp (0.602%→0.850%), avg position improved 0.54 places (14.00→13.46). Fifth straight week of improvement on all four headline metrics.

**Top pages by impressions (apex + www combined):**
| Page | Impr | Pos | Clicks |
|---|---|---|---|
| / (homepage) | 1908 | ~13.4 | 3 |
| /guides/beach-access | 67 | ~5.1 | 8 |
| /beach | 85 | ~7.0 | 6 |
| /shops | 60 | ~26.5 | 0 |
| /guides/bal-harbour-vs-surfside | 39 | ~12.5 | 1 |
| /eat | 25 | ~12.5 | 0 |
| /hotels/ritz-carlton-bal-harbour | 19 | 9.1 | 1 |
| /hotels | 20 | 45.95 | 0 |
| /guides/haulover-park | 17 | 7.24 | 0 |
| /guides (index) | 10 | 6.5 | 0 |
| /guides/best-time-to-visit | 9 | ~4.3 | 0 |

**Top queries by impressions:**
| Query | Impr | Pos |
|---|---|---|
| bal harbour | 1373 | 10.90 (was 11.32) |
| bal harbour miami | 29 | 15.55 |
| bal harbor | 49 | 12.92 (new — alt spelling, no 'u') |
| bal harbor miami | 20 | 26.75 |
| bal harbour beach | 18 | 21.28 |
| bal habour | 15 | 13.13 (typo) |
| bal harbour beach access | 10 | 21.7 |

**Striking distance (position 5–20, impr ≥ 3), sorted by impr:**
- / (homepage) — pos ~13.4, impr 1908, 3 clicks — branded/domain-authority play, not a quick fix
- /guides/beach-access — pos ~5.1, impr 67, **8 clicks** — still the best-converting page after the homepage
- /beach — pos ~7.0, impr 85, **6 clicks** — converting strongly, no action needed
- /guides/bal-harbour-vs-surfside — pos ~12.5, impr 39, **1 click (first ever)** after 5 straight weeks at zero
- /eat — pos ~12.5, impr 25, 0 clicks — first full week since the 10-12 meta fix, still 0; hold one more week
- /hotels/ritz-carlton-bal-harbour — pos 9.1, impr 19, **1 click (first ever)** — still holding off per keywords.md
- **/guides/haulover-park — pos 7.24, impr 17, 0 clicks ← NEW candidate, acted on this run** (description was 229 chars, over display limit — tightened to 145 chars, same playbook as 4 earlier pages)
- /guides (index) — pos 6.5, impr 10, 0 clicks — low actionability (index page), not acted on
- query "bal harbor" (no 'u') — pos 12.92, impr 49 ← NEW query-level candidate, acted on this run via a homepage disambiguation FAQ rather than a single page tweak
- /guides/best-time-to-visit — pos ~4.3, impr 9, 0 clicks — still too little data two weeks after its tweak; give it more time

Apex/www split: homepage apex 1856 impr / www 52 impr this window (~97% apex) — consolidation is essentially complete, up sharply from ~69% last run.
