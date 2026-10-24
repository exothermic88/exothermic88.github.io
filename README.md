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

There are no GitHub releases — **SourceForge is the source of truth.**

- Upload the new ISO to the SourceForge project (set in `src/lib/release.ts`,
  `SF_PROJECT`), named `ncos-vX.Y.Z-x86_64.iso`. The Download button points at
  `/files/latest/download`, which always serves the newest file.
- At build time the site reads `best_release.json` from SourceForge and takes the
  version from the filename, plus the release date and SHA-256 shown in the download
  section. SourceForge doesn't allow browser (CORS) requests, so this can't be live.
- The deploy workflow rebuilds daily, so a new upload appears within a day. Run the
  workflow manually (Actions → Deploy → Run workflow) to update immediately.
- `FALLBACK_VERSION` in `src/lib/release.ts` is only used if SourceForge is
  unreachable during a build — bump it occasionally.
- Write a news post (`tag: release`) and update `ncos-docs/docs/release-notes.md` for
  the changelog; the download section links to the newest release post.

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
