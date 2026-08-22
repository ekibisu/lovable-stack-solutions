# JABS Technical Consulting — site build

Port the uploaded HTML prototype to the Lovable stack (TanStack Start + Tailwind v4) as a real, deployable site with a working contact form. The blueprint/technical-drawing aesthetic stays exactly as designed: paper `#F2F4F1`, ink `#14283D`, markup red `#C1432E`, Space Grotesk / IBM Plex Sans / IBM Plex Mono, hairline rules, corner ticks, SVG schematics.

## Pages

| Route | Source |
|---|---|
| `/` | index.html |
| `/services/ai-automation` | service-ai-automation.html |
| `/services/cloud-devops` | service-cloud-devops.html |
| `/services/modernization` | service-modernization.html |
| `/case-studies/invoice-automation` | case-study.html |
| `/about` | new — founder bio, credentials, how you work |
| `/contact` | new — real form, replaces the `#contact` footer anchor |

Nav becomes Services / Case study / About / Contact, with a Services dropdown. All prototype `.html` links get rewritten to these routes.

## Contact form

Real submissions, stored in Lovable Cloud and emailed to you:

- Fields: name, work email, company, what's still manual (textarea), optional budget/timeline select.
- Validated on both client and server with zod (trimmed, length-capped).
- Stored in a `contact_submissions` table; anonymous insert only, no public read.
- Server-side spam guards: honeypot field + simple rate limit per IP.
- Email notification to `hello@jabstechnical.com` on submit; success state stays on-page.

## Improvements over the prototype

1. **Split routes instead of `#contact` anchors** — real `/contact` and `/about` pages, each with its own title/description/OG tags so they're indexable and shareable.
2. **Per-page SEO** — unique meta per route, Organization + Service + Article JSON-LD, `sitemap.xml`, canonical tags.
3. **Trust layer, which is where consulting sites win or lose.** Compared to Thoughtworks / Slalom / Pariveda / boutique firms like Test Double and Big Nerd Ranch, the prototype is already strong on proof (real numbers, real pipeline diagram) but thin on *who*. Add to `/about`: named founder, background, certifications, stack fluency, and an explicit "how an engagement runs" sequence (assessment → scoped pilot → build → handoff). Boutique firms outperform the big shops precisely by naming the person doing the work.
4. **Engagement shapes with price anchors** — the best small consultancies publish 2–3 packaged offers ("2-week automation assessment", "30/60/90 reliability review", "phased modernization") with at least a starting range. Removes the biggest reason a qualified lead doesn't email.
5. **One CTA, everywhere** — keep the single "Bring us one process that's still manual" ask. Do not add a second competing CTA.
6. **Case study restructured to Situation / Constraint / What we built / Result** with the metrics plate pinned, and add a client-type line since the client is unnamed.
7. **Accessibility + polish** — visible focus rings, skip link, real `<h1>` per page, `prefers-reduced-motion` respected, keyboard-navigable dropdown, mobile nav sheet (the prototype's mobile nav is unfinished).

What I'd deliberately *not* copy from bigger consulting sites: stock-photo hero teams, logo walls you can't fill yet, vague "digital transformation" copy. The blueprint direction is more distinctive than any of them — it stays.

## Technical notes

- Design tokens ported into `src/styles.css` (`@theme inline`, oklch values) — no hardcoded hex in components. Fonts loaded via `<link>` in `src/routes/__root.tsx`.
- Shared primitives: `Nav`, `Footer` (in `__root.tsx` around `<Outlet />`), plus `Eyebrow`, `CornerFrame`, `StatPlate`, `ServiceCard`, `SectionHead`.
- SVG schematics kept as inline React components, colors switched to CSS vars.
- Contact submission via `createServerFn` in `src/lib/contact.functions.ts`; Lovable Cloud enabled for the table and email.
- Service/case-study copy lives in a typed content module so pages stay layout-only.
- Deploy via Publish once the pages render.

## Needed from you before launch

Founder bio + credentials for `/about`, and confirmation of the engagement price ranges. I'll ship sensible drafted copy marked for your review if you'd rather fill it in after seeing it live.
