# Phindi Ngcobo

A simple, quiet website for Phindi Ngcobo, Christian content creator on TikTok ([@phindingcobo](https://www.tiktok.com/@phindingcobo)). It introduces her in her own words, offers counselling sessions with a browser-only booking, and leaves room for a magazine and books that do not have titles yet.

Biography, qualifications, session length, fees, and contact details that were not provided are marked **Placeholder**. A booking is saved in this browser with `localStorage`. The enquiry and magazine sign-up are not sent, and they are not stored.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:4317](http://127.0.0.1:4317).

## Build

Both builds are static exports (`output: 'export'`), with unoptimized images and `trailingSlash: true`. HTML is written to `out/`.

```bash
npm run build
```

Local static files, served from the site root.

```bash
npm run build:pages
```

GitHub Pages build. This sets `GITHUB_PAGES=true`, which sets `basePath` and `assetPrefix` to `/phindi-ngcobo`. Publish it as a project site whose repository is named `phindi-ngcobo`, so the pages URL matches that path. In the repository settings, set Pages to deploy with GitHub Actions. The workflow is `.github/workflows/deploy-pages.yml`.

Preview a finished `out/` folder with any static file server, for example:

```bash
npx serve out
```
