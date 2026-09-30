# wonderfill-website

Rebuild of [wonderfill.ch](https://www.wonderfill.ch): a static, SEO-optimised site built with [Astro](https://astro.build), with a warm, natural "forest" look.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
```

## Structure

- `src/data/site.js`: all content (flavours, boosts, FAQ, partners, contact details)
- `src/layouts/Base.astro`: `<head>` with SEO meta, Open Graph, canonical, hreflang, JSON-LD
- `src/pages/`: `index`, `getraenke`, `station`, `ueber-uns`, `faq`, `kontakt`, `404`
- `src/styles/global.css`: design tokens (forest / moss / honey / cream palette)

## SEO

- Zero client JS apart from the mobile menu. Pages are pre-rendered HTML.
- Unique title and description per page, canonical URLs, `de-CH` hreflang
- Structured data: Organization, WebSite, Product, ItemList, FAQPage, AboutPage, ContactPage
- `sitemap-index.xml` (generated) and `robots.txt`
- Self-hosted variable fonts (Fraunces, Inter). No third-party font requests.

## Notes

- Images are still loaded from the current Webflow CDN. Download them into `public/` before switching hosting.
- Legal pages (Datenschutz, Cookies, AGB) and Karriere still link to the live site.
