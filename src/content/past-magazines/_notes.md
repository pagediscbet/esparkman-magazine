# src/content/past-magazines/

One JSON file per magazine edition. Powers the archive grid page and homepage archive section.

## File format
```json
{
  "title": "Black History Edition",
  "edition": "Jan/Feb 2026",
  "date": "2026-02-04",
  "coverImage": "/images/magazine-covers/jan-feb-2026.jpg",
  "flipUrl": "https://online.fliphtml5.com/hwiv/XXXXX/"
}
```

## Notes
- `flipUrl` is the external FlipHTML5 link for the full flipbook view
- Cover images should be consistent portrait dimensions (~300×400px)
- Filename convention: `YYYY-MM-edition.json` (e.g., `2026-02-black-history.json`)
- Editions are bimonthly: Jan/Feb, Mar/Apr, May/Jun, Jul/Aug, Sep/Oct, Nov/Dec
