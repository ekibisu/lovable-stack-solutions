# Add "Web development & digital presence" to the contact form dropdown

## What changes
The assessment request form's "What's this about?" dropdown gains a fourth option, "Web development & digital presence", placed after "Modernization & full-stack" and before "Not sure yet". Nothing else on the Contact page changes.

## Technical details
- `src/routes/contact.tsx`: insert `{ value: "web-development", label: "Web development & digital presence" }` into the `interests` array between the modernization and not-sure entries.
- `src/lib/leads.functions.ts`: add `"web-development"` to the `interest` Zod enum so the new value passes server-side validation.
- No database change needed — the `leads.interest` column is plain text with no check constraint.
