<div align="center">

# 🏮 Dragon's Trail

### Seven days across China, on ₹1,00,000 — flights included

**Mumbai → Beijing → Xi'an → Shanghai → Mumbai**

An animated, single-page itinerary site: 73 individually timed stops, four UNESCO World
Heritage sites, and a budget that balances to the rupee.

[**→ View the live site**](https://hrishizone.github.io/China-Itinerary/)

</div>

---

## What this is

Not a listicle. Every stop on this site has a real time, a real price and a reason it
earns its place — and the seven days add up, line item by line item, to a budget that
comes in under ₹1,00,000 with both international flights inside it.

| | |
|---|---|
| **Route** | Mumbai → Beijing (3 days) → Xi'an (1.5 days) → Shanghai (2.5 days) → Mumbai |
| **Duration** | 7 days on the ground, 2 of them starting before 07:00 |
| **Total budget** | ₹1,00,000 — ₹92,150 planned, ₹7,850 genuine buffer |
| **Flights** | ₹38,000 open-jaw (in to Beijing PEK, out of Shanghai PVG) |
| **On the ground** | ₹47,550 across all seven days |
| **UNESCO sites** | Great Wall · Forbidden City · Temple of Heaven · Terracotta Army |

### The two decisions that make it work

1. **An open-jaw ticket** — fly into Beijing, out of Shanghai. It costs the same as a
   return and removes a 1,400 km backtrack that would otherwise eat a whole day.
2. **The overnight sleeper to Xi'an** — the Z19 leaves Beijing at 20:37 and arrives at
   08:30. One decision that saves both a hotel night and a travel day.

## Sections

- **Overview** — the shape of the week, and what each city is actually for
- **Route** — an animated schematic of the loop, with every leg costed and timed
- **Itinerary** — the centrepiece: day-by-day, hour-by-hour, 73 stops with prices,
  booking deadlines and the things that will trip you up
- **Budget** — an interactive breakdown across three styles of travel
  (Shoestring / Balanced / Comfort), with a donut you can interrogate
- **Eat** — nine dishes worth travelling for, with what each one costs and where to find it
- **Gallery** — twelve real photographs with a keyboard-navigable lightbox
- **Know before** — visas, the Great Firewall, cashless payments, booking windows,
  etiquette and safety, plus a twelve-phrase Mandarin phrasebook that speaks aloud
- **Packing checklist** — interactive, saved to your browser
- **FAQ** — the eight questions everybody actually asks

## About the photography

Every image is a **real photograph of the real place**, resolved at runtime from
[Wikimedia Commons](https://commons.wikimedia.org) through the MediaWiki API and used
under its respective free licence. Nothing here is stock art or a render.

The resolver (`src/lib/imageResolver.js`) batches up to 50 article titles into a single
API round trip, follows the `pageimages` continuation, caches results in `localStorage`
for a week, and falls back — first to the REST summary endpoint, then to a generated
gradient placeholder — so the page degrades gracefully rather than showing broken images.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:5173/China-Itinerary/
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. The Vite `base` is set to `/China-Itinerary/` to match the
repository name — change both together if you rename the repo.

## Built with

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion 11 · lucide-react

Motion is used throughout — parallax hero, scroll-linked progress, staggered reveals,
SVG path-drawing on the route map, layout-animated tab pills, count-up statistics — and
the whole thing honours `prefers-reduced-motion`.

## A note on the numbers

Prices were researched for a 2026 departure and **will drift**. Treat every figure as a
well-argued starting point rather than a quotation, and re-check three things before you
book: current visa requirements for Indian passport holders, live fares on Trip.com, and
the booking windows for the Forbidden City and Tiananmen Square, which sell out.

---

<div align="center">
<sub>An independent travel plan. Not affiliated with any tour operator or airline.</sub>
</div>
