# Favicon + domain-accurate metadata

## 1. Favicon

Generate a square blueprint-style brand mark ("JABS" monogram in Markup Red on Paper, technical/drafting feel), downscale it to a 64x64 square, and ship it as `public/favicon.png`. Point the root route's icon link at it and delete the leftover default `public/favicon.ico` so no stale Lovable icon is served.

## 2. Make jabstechnicalconsulting.com the canonical domain

Today every page's `canonical` and `og:url` are relative paths (`/`, `/about`, ...). Convert them to absolute URLs on `https://jabstechnicalconsulting.com` across all eight routes:

- `/` (home), `/about`, `/contact`
- `/services/ai-automation`, `/services/cloud-devops`, `/services/modernization`, `/services/web-development`
- `/case-studies/invoice-automation`

Also update the root Organization JSON-LD `url` from `/` to `https://jabstechnicalconsulting.com`, and add the site URL to the schema so search engines tie the brand to the domain.

The sitemap and robots.txt already use the domain — no change needed there.

## 3. One content note to confirm

Site contact email is currently `hello@jabstechnical.com`, which doesn't match the domain. Unless you say otherwise, I'll leave it as-is; tell me if it should become `hello@jabstechnicalconsulting.com`.

## Technical details

- Favicon: `imagegen--generate_image` → resize to 64x64 with padding → `public/favicon.png`; root `head().links` gets `{ rel: "icon", type: "image/png", href: "/favicon.png" }`; remove `favicon.ico`.
- Metadata: leaf-route `head()` only — canonical stays off `__root.tsx`. og:image is intentionally omitted (no branded absolute hero image exists yet; hosting supplies a screenshot preview).
- Verify by curling each route and checking for a single absolute self-referencing canonical and og:url.
