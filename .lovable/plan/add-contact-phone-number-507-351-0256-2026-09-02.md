# Add contact phone number: 507.351.0256

Put the phone number alongside the existing email everywhere contact details already appear, using one source of truth.

## Changes

1. **Single source of truth** (`src/content/site.ts`)
   - Add `phone: "507.351.0256"` and `phoneHref: "+15073510256"` to the `site` object.

2. **Contact page** (`src/routes/contact.tsx`)
   - In the "Direct" block, add the phone as a clickable `tel:` link under the email, styled the same way.
   - Mention the phone in the submission-error fallback line ("email … or call …").

3. **Footer** (`src/components/site/Footer.tsx`)
   - Add the phone as a `tel:` link under the email in the "Start a project" column, and next to the email in the bottom bar.

4. **About page** (`src/routes/about.tsx`)
   - Extend the closing CTA line to include the phone number.

5. **Structured data** (`src/routes/__root.tsx`)
   - Add `telephone: site.phone` to the existing Organization JSON-LD.

## Notes

- No layout redesign, no new sections; phone follows the existing type and color treatment.
- Links use `tel:+15073510256` so mobile taps dial correctly while the display text stays `507.351.0256`.
