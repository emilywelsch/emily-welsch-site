# Emily Welsch personal website — mockup v1

A Vite + React site prepared for page-by-page iteration and eventual Vercel deployment.

## Current information architecture

- Home
- Ventures
  - Founder Projects (internal detail pages)
  - Angel Investments (external company links)
- Advisory
- Media
- Contact

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Vercel should detect Vite automatically.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Connect the desired custom domain in Vercel.

`vercel.json` is included so direct visits to nested React routes resolve correctly.

## Content still needed

- Final angel investment logos, company names, and URLs
- Project images and finalized case-study copy
- Former advisory client logos and URLs
- Approved testimonials
- Media and speaking links
- Contact email and form delivery provider
