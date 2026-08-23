# Add a fourth "What we do" block

Update only the "What we do" section on the homepage.

## Changes

1. Heading: "Three problems, one accountable team." becomes "Four problems, one accountable team."
2. Add a fourth benefit block after "Deploy with confidence", using the same number/heading/description structure:
   - 04 — Build a real web presence
   - A public site and the internet-facing tools behind it, built around how the business actually runs, not a template.
3. Grid: change this section from a 3-column desktop layout to 2 columns on smaller screens and 4 columns on desktop, so all four blocks sit evenly.

No other homepage section changes.

## Technical detail

- File: `src/routes/index.tsx`, the first `<Section>` in `Index()`.
- `SectionHead` title string updated; a fourth `<Benefit num="04" ... />` added.
- Wrapper class changes from `grid gap-9 md:grid-cols-3` to `grid gap-9 md:grid-cols-2 lg:grid-cols-4` (mirrors the practices grid already used lower on the page).
- No changes to `Benefit` in `src/components/site/primitives.tsx` or to content in `src/content/site.ts`.
