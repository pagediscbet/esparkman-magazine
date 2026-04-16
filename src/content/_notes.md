# src/content/

All site content lives here as markdown (.md) or JSON (.json) files.
Astro treats this as "content collections" — typed, schema-validated content.

## Folders

- `articles/` — One .md file per article. Frontmatter includes title, author, category, date, excerpt, image.
- `advertisers/` — One .json file per advertiser. Used to power the homepage carousels.
- `church-directory/` — One .json file per church. Currently image-based (Phase 2 adds structured data).
- `past-magazines/` — One .json file per edition. Links to cover image and FlipHTML5 URL.

## How Decap CMS connects
The CMS editor at `/admin` writes new files directly into these folders via the GitHub API.
Marilyn fills out a form → CMS creates/updates the .md or .json file → GitHub Actions rebuilds the site.

## Schema reference
All collection schemas are in `config.ts` in this folder.
