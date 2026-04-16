# public/

Static assets served directly — no processing by Astro.

## admin/
Decap CMS. Visit `/admin` in the browser to open the content editor.
- `index.html` — loads the CMS interface from the Decap CDN
- `config.yml` — tells the CMS which collections exist, what fields they have, and where to save files

## images/
All image assets. Organized by content type.
- `articles/` — author headshots and article hero images
- `advertisers/` — advertiser banner images (300×150px recommended)
- `church-directory/` — church banner images
- `magazine-covers/` — past edition cover thumbnails (~300×400px)

## fonts/
Self-hosted web fonts (optional). If using Google Fonts via CDN link in BaseLayout.astro, this folder stays empty.
