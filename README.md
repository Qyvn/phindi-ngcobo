# Phindi Ngcobo

A ministry and counselling website for Phindi Ngcobo, a follower of Jesus Christ. It offers faith-centred counselling for individuals, couples and families, with a booking kept on the device, and pages for a magazine and books that are coming soon.

TikTok: [@phindingcobo](https://www.tiktok.com/@phindingcobo).

Session length and the fee are given on enquiry. A booking is saved in this browser with `localStorage`. It is not sent. The note form and the magazine email are not stored.

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
