# E-Sparkman Magazine — Claude Navigation Guide

This is the codebase for the redesigned **E-Sparkman Magazine** website.
Publisher: Marilyn Parker | esparkman.com | St. Louis, MO
A free, faith-based, community digital magazine serving the St. Louis Black community.

---

## Stack

| Layer | Tool |
|---|---|
| Framework | Astro (static site generator) |
| Styling | Tailwind CSS v4 |
| CMS | Decap CMS (GitHub-backed, web UI for non-technical editor) |
| Deployment | GitHub Pages via GitHub Actions |

---

## Folder Map

```
esparkman-magazine/
├── CLAUDE.md                        ← you are here
├── astro.config.mjs                 ← Astro config; base URL set for GitHub Pages
├── src/
│   ├── content/                     ← All site content (markdown + JSON)
│   │   ├── config.ts                ← Zod schemas for all content collections
│   │   ├── articles/                ← Article .md files (one per article)
│   │   ├── advertisers/             ← Advertiser .json files (for carousels)
│   │   ├── church-directory/        ← Church listing .json files
│   │   └── past-magazines/          ← Magazine archive .json files
│   ├── pages/                       ← Astro pages → routes
│   │   ├── index.astro              ← Homepage
│   │   ├── about.astro              ← About page
│   │   ├── church-directory.astro   ← Church directory
│   │   ├── past-magazines.astro     ← Magazine archive
│   │   ├── contact.astro            ← Contact page
│   │   └── [category]/
│   │       └── [slug].astro         ← Individual article pages (clean URLs)
│   ├── components/
│   │   ├── layout/                  ← Header, Footer, Nav
│   │   ├── article/                 ← ArticleCard, ArticleGrid
│   │   ├── advertiser/              ← AdvertiserCarousel, AdvertiserBanner
│   │   └── ui/                      ← Reusable UI (Button, etc.)
│   ├── layouts/
│   │   ├── BaseLayout.astro         ← Wraps every page (head, header, footer)
│   │   └── ArticleLayout.astro      ← Wraps individual article pages
│   └── styles/
│       ├── global.css               ← Tailwind imports + base resets
│       └── tokens.css               ← Brand design tokens (colors, fonts)
├── public/
│   ├── admin/                       ← Decap CMS web interface
│   │   ├── index.html               ← CMS entry point (visit /admin to edit)
│   │   └── config.yml               ← CMS collections config (mirrors src/content/)
│   ├── images/
│   │   ├── articles/                ← Article author headshots and body images
│   │   ├── advertisers/             ← Advertiser banner images
│   │   ├── church-directory/        ← Church banner images
│   │   └── magazine-covers/         ← Past magazine cover thumbnails
│   └── fonts/                       ← Self-hosted web fonts (if any)
└── .github/
    └── workflows/
        └── deploy.yml               ← GitHub Actions: build Astro → deploy to gh-pages
```

---

## Content Architecture

### Article URLs
Clean URL pattern: `/[category]/[slug]`
Example: `/job-talk/workforce-trends-2026`

Valid categories (must match frontmatter `category` field):
- `faith`
- `job-talk`
- `community-care`
- `testimonies`
- `black-history`
- `technology`

### Content Collections
All collections are defined and typed in `src/content/config.ts`.
Decap CMS `public/admin/config.yml` mirrors these schemas exactly — any schema change needs updating in both files.

### CMS Access
Once deployed, Marilyn accesses the CMS at: `https://[username].github.io/esparkman-magazine/admin`
She logs in with her GitHub account (must be added as a collaborator on the repo).

---

## Phase 1 (current)
- Core pages and routing
- Article system with clean URLs
- Advertiser carousels
- Magazine archive
- Decap CMS for content editing

## Phase 2 (future)
- Newsletter signup integration
- Social sharing buttons on articles
- Searchable church directory (structured data, not image-only)
- Author bio pages
