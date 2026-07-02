# Handoff: bal-harbour.com — local guide + affiliate site

## Overview
A friendly, upscale-but-not-stuffy local guide to Bal Harbour, Florida. The business model is affiliate + lead-gen: hotel bookings (commission on referred bookings via Booking.com / Expedia / hotel-direct), dining/shops referrals, and real-estate lead capture (referral fee from a partner agent on transaction). The tone is warm, opinionated, first-person ("we live here, we tan here"), never corporate-luxury.

Target hosting: **Next.js on Vercel** (the user's stated intent). No codebase exists yet — choose the current stable Next.js App Router with your preferred styling approach; the tokens below map cleanly to Tailwind or CSS variables.

## About the Design Files
The files in this bundle are **design references created in HTML** (Design Component `.dc.html` files — they open in a browser but are prototypes, not production code). They show the intended look, copy, and behavior. **Do not ship the HTML directly.** The task is to **recreate these designs as a Next.js site** using idiomatic React components, real routing, and a real image pipeline. Treat the `.dc.html` markup as a precise spec for layout, spacing, color, and copy.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and layout are all intentional and should be recreated faithfully. The one caveat is imagery (see Assets) — the current images are placeholder gradient art and must be replaced with real photography.

## Pages / Routes
Recreate as these routes (suggested App Router paths):

| Design file | Route | Purpose |
|---|---|---|
| `Home.dc.html` | `/` | Landing — hero search, featured hotels, category tiles, real-estate teaser |
| `Hotels.dc.html` | `/hotels` | Ranked hotel listing with filter chips + sort |
| `The Grande Oceanfront.dc.html` | `/hotels/[slug]` | Hotel detail/review — photo gallery, review, rate-comparison booking widget |
| `Dining.dc.html` | `/eat` | Dining guide — featured table, grid, map strip |
| `Shops.dc.html` | `/shops` | Shopping guide — hero, numbered tips, cross-link to beach |
| `Beach.dc.html` | `/beach` | Beach guide — conditions, access tips, feature panel |
| `Real Estate.dc.html` | `/real-estate` | Lead-capture form (the money page) — pitch panel + form |

### Shared layout
- **Header** (every page): logo `bal-harbour.com` (`.com` in gold), pill nav [Hotels · Eat & drink · Shops · Beach · Real estate], solid dark "Book a stay" button on the right. Active nav item = solid dark green pill (`#0d2f25` bg, `#eef2ec` text). Inactive = transparent; the current section's pill on some pages shows a subtle white fill.
- **Footer** (every page): dark green→near-black vertical gradient band (`#16453a → #0b2a21`), logo + repeated nav on top row, then a hairline divider and two lines of fine print: `© 2026 bal-harbour.com · an independent local guide` (left) and `Some links earn us a commission — it keeps the sunscreen stocked` (right).
- Content max width is effectively ~1160px; pages use 44px horizontal padding. Build responsive — these are desktop specs; collapse nav to a hamburger and stack grids on mobile.

## The signature background move (important)
The **home page only** uses a full-page vertical "sunset dive" gradient: it starts in warm sand at the top and darkens through seafoam into deep palm green by the footer:
```
linear-gradient(180deg,
  #f3f1e6 0%, #e9efe7 26%, #cfe0d3 48%,
  #5f8a75 72%, #16453a 88%, #0b2a21 100%)
```
Two soft radial "sun glow" circles are layered over it (one top-center, one lower-right) using `radial-gradient(circle, rgba(216,182,110,0.5) → transparent)`.

**Inner pages stay light** — a gentle top-to-bottom wash only (`linear-gradient(180deg,#f3f1e6 0%,#edf2ec 55%,#e2ece4 100%)`), with the same dark footer. This contrast is deliberate: the dive is a homepage signature, not a site-wide texture. Keep it that way.

The hero card on the home page is its own dark rounded panel (`linear-gradient(160deg,#0b2a21,#12463a,#1e6350)`, 28px radius) sitting on the light top of the page.

## Key components (per page)

### Home
- **Hero panel**: dark green rounded card. Left column (max-width 520px): eyebrow `BAL HARBOUR, FLORIDA` (gold, letter-spacing 0.16em), 54px headline "Sun's out. We know *the good spots.*" (last phrase in Instrument Serif italic, gold `#d8c493`), 16px body. Right 38% is a full-bleed photo. A floating search bar (pill, `#eef2ec`, big shadow) overlaps the bottom of the panel with placeholder "Try 'rooftop dinner' or 'beachfront suite'…", three category chips, and a gold "Search" button.
- **Featured hotels**: section header "Stay somewhere *lovely*" + "See all six hotels" link; 3-col grid of hotel cards (white, 22px radius, photo w/ overlay tag chip top-left, title, one-liner, "from $X/nt" + gold "Check rates" pill). Cards link to hotel detail.
- **Category tiles**: 4-col; three glass tiles (`rgba(255,255,255,0.16)` + backdrop-blur, over the darkening gradient) for Eat/Shops/Beach, plus one solid gold tile "Move here" → real-estate.
- **Real-estate teaser**: 2-col, light text on the dark lower gradient, "What if the vacation just *didn't end?*" + gold "Get matched" button + photo.

### Hotels (listing)
- Page header eyebrow/headline/intro.
- **Filter row**: chip group [All · Oceanfront · Adults-mostly · Family · Spa · Pet-friendly] (active = dark pill) + right-aligned "Sort: our ranking ▾".
- **Hotel rows**: horizontal cards, 380px photo column + content. Photo has a rank badge ("№1 our pick" in gold) and **image-slider chrome**: left/right circular arrow buttons vertically centered, and a row of dot indicators bottom-center (first dot active). Content: name + star rating, an italic pull-quote (Instrument Serif), amenity chips, and a footer row with price + "Full review" (outline) and "Check rates ↗" (gold) buttons. "Full review" links to the detail page.
- Fine print under the list about commissions.

### Hotel detail (`The Grande Oceanfront`)
- Breadcrumb (Hotels / name).
- Title row: name + rank badge + rating/price line.
- **Photo gallery**: CSS grid, one large 2-row image + four smaller, last tile has "All 24 photos" chip.
- **Two-column body**: left = italic pull-quote, two review paragraphs, and a "THE RUNDOWN" 2-col spec list (Best for, Rooms, Beach, Breakfast, Kids, Parking). Right = **sticky booking widget**: "from $890/night", check-in/out date chips, three rate rows (Booking.com / Expedia [BEST, highlighted gold border] / Hotel direct) each with price + ↗, a big gold "Book the best rate ↗" button, and rate-disclosure fine print.
- "You might also like" — 2 related hotel cards.

### Dining
- Header. Filter chips [All · Breakfast · Long lunch · Date night · Drinks · On the water].
- **Featured + secondary**: 1.5fr featured card (photo with bottom gradient scrim, "TABLE OF THE MONTH", name+cuisine+price, italic quote, "Reserve ↗" gold + "Read the review" outline) beside a column of 2 smaller stacked cards.
- **3-col grid** of restaurant cards (photo, name + "· category · $$$", one-liner).
- **Map strip** placeholder (striped) with "Open the map" button — implement with a real map embed later.

### Shops
- Header. Full-width **hero banner** (photo + bottom scrim, "START HERE", "The open-air mall, decoded", italic quote, "The full walkthrough" gold button).
- **4-col numbered tip cards** (serif italic numerals in gold, title, body).
- **Gold CTA band** cross-linking to the Beach guide.

### Beach
- Header. Full-width photo banner with **condition chips** bottom-left (water temp, surf, UV).
- **3-col info cards** (Getting on / Sitting down / Timing it — eyebrow, title, body).
- **Feature panel**: 1fr photo + 1.4fr dark green panel ("DON'T MISS", headline with serif-italic accent, body, two buttons linking to Dining + Hotels).

### Real Estate (lead form — primary conversion)
- 2-col: **left dark pitch panel** (`linear-gradient(165deg,#0b2a21,#12463a,#1e6350)`, sun-glow radial, "LIVE HERE", "Make the vacation *permanent.*", body, a 01/02/03 how-it-works list with serif-italic numerals, a photo at the bottom). **Right white form card** (28px radius, big shadow): First name + Email row, "I'm looking to" segmented chips [Buy·Rent·Sell·Just curious], Budget + Timeline selects, an optional textarea "The dream, in a sentence", gold submit "Introduce me to my agent", and trust fine print ("paid a referral fee by the agent if you transact — never by you").
- Wire the form to your lead pipeline (email/CRM/webhook). Validate email; the "looking to" chips are single-select; Budget/Timeline are selects.

## Interactions & Behavior
- **Nav**: standard client-side routing between the 7 pages. Active state on the current section's pill.
- **Hotel image sliders**: the arrows + dots are currently static chrome. Implement as a real carousel (swipe on touch, arrow-click on desktop, dot = go-to-index). 4–5 images per hotel.
- **Filter chips** (Hotels, Dining): click to filter the list client-side by tag; single active "All" default. Sort control on Hotels reorders (our ranking / price asc).
- **Booking widget** (hotel detail): rate rows are affiliate outbound links (open in new tab, `rel="sponsored noopener"`). "Book the best rate" points to the cheapest. Prices should ideally come from a rates API; static is acceptable for v1.
- **Real-estate form**: validated submit → POST to a lead endpoint; success + error states needed.
- **Hover states**: cards lift slightly (raise shadow); buttons darken ~6%; nav pills gain a faint fill. Add these — the prototype doesn't show them but they're expected.
- **"Check rates" / "Reserve" / "Book"** buttons are all affiliate outbound links.

## State Management
- Mostly static content — model hotels/restaurants/shops as data (JSON/MDX/CMS), map to components.
- Client state: active filter tag, sort order, carousel index per hotel, form field values + validation + submit status.
- Real-estate lead submission (async POST). Optionally hotel rates fetching.

## Design Tokens

### Colors
- `--ink` deep palm green (primary text, dark panels): `#0d2f25`
- `--ink-2` slightly lighter body-on-light: `#22443a` / `#3c4a42` / `#4c5a50` (text tints)
- Panel gradient greens: `#0b2a21`, `#12463a`, `#16453a`, `#1e6350`, `#5f8a75`
- `--gold` accent (CTAs, eyebrows): `#b5975a`; lighter gold text on dark: `#d8c493`; gold gradient `#c3a366 → #b5975a`; deep gold text `#8a6f3c`
- Backgrounds: sand `#f3f1e6`, ivory `#eef2ec` / `#efede6`, light washes `#edf2ec` `#e9efe7` `#e2ece4` `#cfe0d3`
- Card white: `#ffffff`; muted text/placeholder: `#7d8378` / `#9aa39c`
- Chip fill on light: `rgba(13,47,37,0.07)`; glass tile: `rgba(255,255,255,0.16)` + `backdrop-filter: blur(6px)`

### Typography
- Sans (UI + headlines): **Instrument Sans** (400/500/600/700). Headlines 700, letter-spacing -0.01 to -0.02em.
- Serif accent (italic phrases, numerals, pull-quotes): **Instrument Serif** italic, 400.
- Scale: hero 54px, page H1 46px, section H2 30px, card title 18–24px, body 14–16px, fine print 12–13px. Line-height ~1.1 headlines, ~1.6 body.
- Both are Google Fonts — load via `next/font/google`.

### Spacing / radius / shadow
- Page padding 44px (desktop). Section gaps 22–28px. Card padding 18–30px.
- Radius: big panels 28px, cards 20–24px, tiles 18px, pills/buttons 99px (fully round), inputs 14px.
- Card shadow `0 6px 22px rgba(13,47,37,0.10)`; elevated `0 10px 32px rgba(13,47,37,0.12)`; small `0 4px 16px rgba(13,47,37,0.07)`.

## Assets
- The `img/` folder now contains **real photography sourced from Unsplash** (free for commercial use, no attribution required — see unsplash.com/license). Files are `img/<name>.jpg`. These are generic tropical/resort/food/ocean stock, chosen to match the palette — they are placeholders for *specific* Bal Harbour subjects and should ideally be swapped for real photos of the actual hotels/restaurants/properties once you have rights to them (hotel and agent press kits are the easy path).
- Image filenames map to their slots by name (e.g. `pool-sunrise.jpg`, `terrace-golden.jpg`, `marina-dusk.jpg`, `shops-arcade.jpg`, `ocean-horizon.jpg`, `condo-terrace.jpg`). Use `next/image` with proper sizing.
- If you keep any Unsplash images in production, that's fine under their license; just don't imply the photo depicts a specific named property if it doesn't.
- Icons: the design uses only text glyphs (‹ › ↗ ▾ ★ ◆) and pill chips — no icon library required, though you may swap in a lightweight set.
- Fonts: Instrument Sans + Instrument Serif (Google Fonts).

## Files
Design references in this bundle (recreate, don't copy):
- `Home.dc.html`, `Hotels.dc.html`, `The Grande Oceanfront.dc.html`, `Dining.dc.html`, `Shops.dc.html`, `Beach.dc.html`, `Real Estate.dc.html`
- `Bal Harbour Explorations.dc.html` — the exploration doc with all the option variations (context only; the 7 pages above are the finals, built in the `3b` direction).
- `img/` — placeholder imagery (replace).

## Compliance note
The site earns affiliate commissions and real-estate referral fees. Keep the existing disclosure copy visible (FTC-style): the footer line on every page, the note under hotel lists, and the "never by you" line on the real-estate form. Mark affiliate outbound links `rel="sponsored"`.
