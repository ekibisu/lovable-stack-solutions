# Header navigation: readability, spacing, hierarchy

All four practice links return to the top bar as flat items, alongside Case Studies and About, with the spacing and contrast issues fixed. No redesign — same blueprint identity (ink navy, markup red, existing fonts).

## What changes

1. **Logo separated from the nav**
   - Keep the two-line "JABS / TECHNICAL CONSULTING" lockup as the heaviest element on the bar.
   - Add a 1px vertical divider in the hairline border color plus ~48px of clear space between the logo block and the first nav link, so they never blur together.

2. **Nav link contrast**
   - Move link text from the light muted gray to the darker ink-2 slate/navy tone (AA-compliant on the paper background); the current muted tone is reserved for the wordmark's second line only.

3. **Even spacing**
   - One uniform 32px gap between every nav item — AI Automation, Cloud & DevOps, Modernization, Web Development, Case Studies, About — nothing cramped or isolated.

4. **Consistent typography**
   - Every nav link: same family, 15px, medium weight, no monospace or letter-spacing on individual items.

5. **Hover / active state**
   - Hover and active both shift the label to markup red with a 1.5px bottom border; active page keeps the marker persistently.

6. **Alignment**
   - Header stays 80px tall, logo / links / "Book a call" all centered on one baseline.

7. **Breakpoint**
   - Six links plus the logo need room, so the full row shows at `xl` and the existing mobile drawer (flat list of the same six links) covers everything narrower.

## Technical notes

- Edits confined to `src/components/site/Nav.tsx`; the Services dropdown added earlier is removed in favor of the flat six-link row.
- Uses existing tokens only (`ink-2`, `markup`, `paper-2`); no new colors and no changes to `src/styles.css` or `src/content/site.ts`.
- Verified visually with an element screenshot of the header at desktop and tablet widths.
