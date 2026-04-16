# src/content/advertisers/

One JSON file per advertiser. These power the homepage carousel sections.

## File format
```json
{
  "name": "Business Name",
  "image": "/images/advertisers/business-banner.jpg",
  "url": "https://businesswebsite.com",
  "carousel": 1
}
```

## carousel field
- `1` = appears in the first advertiser carousel (top)
- `2` = appears in the second advertiser carousel (bottom)

## Notes
- Banner images should be consistent dimensions — 300×150px is the standard ad banner size
- All external URLs should open in a new tab (handled in the component)
- When an advertiser renews, update their image file if needed; the JSON filename can stay the same
