# exothermic88.github.io

The [NCOS Linux](https://exothermic88.github.io) website — built with [Astro](https://astro.build), deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve dist/ locally
```

## Wiki (Zensical)

The wiki lives in `ncos-docs/` ([Zensical](https://zensical.org), the successor to
MkDocs Material — config in `ncos-docs/zensical.toml`) and is built into `public/wiki/`,
which is **committed** so CI doesn't need Python. After editing any `ncos-docs/docs/*.md`:

```bash
python3 -m venv .venv && .venv/bin/pip install -r ncos-docs/requirements.txt   # first time only
npm run wiki:build
git add public/wiki
```

To preview the wiki alone while writing: `cd ncos-docs && ../.venv/bin/zensical serve`.

## Releases

- **ISO** is hosted on SourceForge. The Download button points at
  `sourceforge.net/projects/<project>/files/latest/download`, which always serves the
  newest uploaded file — just upload the new ISO, no site change needed.
  The project name is set in `src/lib/release.ts` (`SF_PROJECT`).
- **Version / changelog** shown on the site come from the latest GitHub Release on
  [`exothermic88/NCOS`](https://github.com/exothermic88/NCOS/releases). Create a
  release per version (tag like `v1.0.0`, changelog in the body). The site fetches it
  client-side and falls back to `FALLBACK_VERSION` in `src/lib/release.ts` — bump that
  constant when releasing.

## News posts

Add a markdown file in `src/content/news/` with frontmatter:

```markdown
---
title: 'Post title'
date: 2026-07-20
summary: 'One-line summary shown in lists.'
tag: release   # release | news | update
---

Body in markdown…
```

## Deploying

Push to `main` — the GitHub Actions workflow (`.github/workflows/deploy.yml`) builds
and deploys. Repo **Settings → Pages → Source** must be set to **GitHub Actions**.
