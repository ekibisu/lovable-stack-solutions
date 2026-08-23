# Clean up the top navigation bar

The header currently runs a long all-caps wordmark ("JABS TECHNICAL CONSULTING") straight into six same-size nav links, so the logo and the links visually blur into one line of text.

## What changes

1. **Separate the wordmark from the links**
   - Keep the full name readable but give it its own visual weight: two-line lockup — "JABS" on top, "TECHNICAL CONSULTING" as a smaller, letter-spaced line beneath (single line on mobile), next to the existing square mark.
   - Add a thin vertical divider and more breathing room between the logo and the nav.

2. **Make the links read as navigation, not prose**
   - Group the four practice pages under one "Services" item with a hover/click dropdown, leaving the top bar as: Services, Case Studies, About, Book a call. Fewer, larger targets, no crowding.
   - Slightly larger link size, clearer muted-to-ink hover, and an underline marker on the active route.

3. **Fix the crowded breakpoint**
   - Desktop nav currently appears at `md`, where it is tightest. Switch to `lg`, so tablets get the (already clean) menu drawer instead of a squeezed row.

4. **Mobile drawer**
   - Keep the current drawer, but nest the four practices under a "Services" label so the list is scannable.

## Technical notes

- All edits in `src/components/site/Nav.tsx` (logo lockup, dropdown, breakpoints) plus the header's height/spacing classes.
- `src/content/site.ts` stays as the source of names; the two-line wordmark is rendered from `site.short` split for display, so copy stays intact.
- Dropdown built with existing primitives and Tailwind only — no new dependencies; keyboard focus and `aria-expanded` handled.
- No content, routing, or page-body changes.
