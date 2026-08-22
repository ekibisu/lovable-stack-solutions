# Practice 04 — Web Development & Digital Presence

Add a fourth practice matching the existing three, anchored on the Bon Voyage Vintage (Seattle) engagement.

## New page: /services/web-development

Same structure as the other practice pages (header, four pillars, case-study story, stats, related practices, CTA).

- Eyebrow: Practice 04
- H1: "A real digital presence — without turning your staff into data-entry clerks."
- Lede: modern web presence plus internet-facing business applications for walk-in-first, operations-heavy businesses.
- Pillars:
  - Presence — brand-owned site, SEO and SSR built for both search and AI crawlers, so competitors can't own your name online.
  - Applications — customer- and staff-facing web apps: inventory, reservations, multi-location cross-reference.
  - Speed of input — AI photo-to-listing and speech capture so listings take seconds at the register, not a back-office shift.
  - Cost discipline — cost-tuned model and hosting choices so tooling costs a small business dollars a month, not hundreds.

## Case study content (on the practice page)

- Challenge: two Seattle vintage shops running inventory on paper and Square alone; one-of-one pieces invisible online, impossible to reserve or cross-reference between locations, and a competitor cybersquatting their name.
- Approach: purpose-built store platform — AI photo-to-listing quick add on a tablet beside the register, "Representative Looks" for non-reorderable pieces, printable QR price tags, neighborhood walking maps, browser speech-to-text with AI cleanup, flash-lite vision models, SSR for search and AI-crawler visibility.
- Result: live storefront and staff tooling at both locations, one-of-one inventory discoverable and reservable, brand name reclaimed in search, running at a few dollars a month in AI/hosting cost.
- Stats: "2 shops, 1 catalog", "Seconds per listing", "$ / month AI cost"
- Reference link out to therealbonvoyagevintage.com.
- CTA: "Book a 30-min web presence review"

## Wiring

- `src/content/site.ts`: add practice 04 entry (nav short label "Web Development").
- Home page: change "Three practices" heading to four and switch grid to 2-up / 4-up so four cards lay out cleanly.
- Related-practices grid on service pages already derives from the practice list; keeps 2-up with three siblings.
- Footer title block "Practice" line updated to include Web.
- Sitemap: add the new path.
- Per-route head(): unique title, description, og:title/description, canonical, and Service JSON-LD, matching siblings.

## Technical notes

New route file `src/routes/services.web-development.tsx` reusing `ServicePage` / `ServicePageData`; no new components or backend changes. Nav and footer pick the link up automatically from the practices array.
