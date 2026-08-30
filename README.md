# @stillsid

Personal portfolio — a single-page bento-grid site indexing apps, essays, and
media. Static Next.js, no database.

## What it does

- **Hero** — a one-line intro.
- **About** — a short bio card next to a featured-app card (currently
  [PhD Tracker](https://phd-tracker-seven.vercel.app), with a small live-style
  preview of its dashboard).
- **Essays** — a 3-up grid of writing, currently placeholder entries
  (bracketed `[Essay title]` etc.) — swap in real posts as they're written.
- **Media** — a featured-episode card plus a "coming soon" placeholder.
- All content lives directly in `src/app/page.tsx` — no CMS, just edit and
  redeploy.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push this repo to GitHub (already done if you're reading this on
   `main`).
2. In [vercel.com](https://vercel.com), import the repo as a new project —
   Vercel auto-detects Next.js, no configuration needed.
3. Deploy.

No environment variables or database setup needed — this is a fully static
site.

### About the domain

This is meant to live at the root of `corporatedropout.in`. The PhD Tracker
app currently occupies that domain — moving it to a subdomain (e.g.
`phdtracker.corporatedropout.in`) is a separate step to do before pointing
this site at the root domain, so the tracker doesn't go dark in between.

## Tech stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Lora (serif, headline only) + Manrope (everything else) via `next/font`
- No backend — every "Apps"/"Essays"/"Media" entry is literal content in
  `page.tsx`
