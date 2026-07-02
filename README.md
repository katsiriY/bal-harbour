# bal-harbour.com

A friendly, upscale-but-not-stuffy local guide to Bal Harbour, Florida — hotel bookings, dining/shops referrals, and a real-estate lead form. Built with Next.js (App Router) for Vercel.

Recreated from the design references in [`design-reference/`](design-reference) — see [`DESIGN.md`](DESIGN.md) for the full design/content spec this app implements.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Tailwind CSS v4
- `next/font/google` (Instrument Sans, Instrument Serif)
- `next/image` for the photo pipeline

## Routes

| Route | Page |
|---|---|
| `/` | Home — hero search, featured hotels, category tiles, real-estate teaser |
| `/hotels` | Hotel listing — filter chips, sort, image carousels |
| `/hotels/[slug]` | Hotel detail — gallery, review, sticky booking widget |
| `/eat` | Dining guide — filter chips, featured table, grid |
| `/shops` | Shopping guide |
| `/beach` | Beach guide |
| `/real-estate` | Lead-capture form (posts to `/api/lead`) |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

Deploys to [Vercel](https://vercel.com/new) with zero configuration — import the GitHub repo and Vercel will detect Next.js automatically.

## Content

Hotel and restaurant data lives in [`lib/hotels.ts`](lib/hotels.ts) and [`lib/restaurants.ts`](lib/restaurants.ts). Photos in `public/img/` are placeholder stock photography (Unsplash) — see `DESIGN.md` for licensing notes and guidance on swapping in real property photography.
