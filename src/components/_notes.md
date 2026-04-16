# src/components/

Reusable Astro components. Organized by concern.

## layout/
- `Header.astro` — Logo, Subscribe button, main navigation
- `Nav.astro` — Navigation links (used inside Header)
- `Footer.astro` — Logo, nav links, address, contact form, copyright

## article/
- `ArticleCard.astro` — Card with image, title, author, date, excerpt. Used in grids.
- `ArticleGrid.astro` — Responsive grid wrapper for ArticleCards

## advertiser/
- `AdvertiserCarousel.astro` — Horizontal scrolling carousel of advertiser banners
- `AdvertiserBanner.astro` — Single linked banner image (used inside carousel)

## ui/
- `Button.astro` — Reusable button with primary/secondary variants

## Brand style notes
- Primary gold: #C9A84C
- Deep background: #1A1A1A (near black)
- Accent red: #8B1A1A (deep crimson)
- White: #FAFAFA
- Font: body uses a clean serif for magazine feel; headings use a bold display weight
