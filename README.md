# @stillsid

Personal portfolio — a single-page bento-grid site indexing apps, essays, and
media. Static Next.js, no database.

## What it does

- **Hero** — a one-line intro.
- **About** — a short bio card next to a featured-app card (currently
  [PhD Tracker](https://phdtracker.corporatedropout.in), with a small live-style
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

This lives at `www.corporatedropout.in` (the root domain). The PhD Tracker
app was moved to `phdtracker.corporatedropout.in` to make room for it.

## Tech stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Lora (serif, headline only) + Manrope (everything else) via `next/font`
- No backend — every "Apps"/"Essays"/"Media" entry is literal content in
  `page.tsx`
