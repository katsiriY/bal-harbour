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
