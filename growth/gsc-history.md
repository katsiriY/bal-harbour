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
