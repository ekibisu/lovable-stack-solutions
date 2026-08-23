# Lead notification email

When someone submits the assessment request form, you get an email at
hello@jabstechnicalconsulting.com right after the lead is saved.

## One thing needed from you first

Sending email requires a sender domain you own. You already have
jabstechnicalconsulting.com on this project, so email can be set up on a
subdomain of it (e.g. notify.jabstechnicalconsulting.com) — that takes adding a
couple of DNS records, which the setup dialog walks through. Nothing else is
required from you.

Note: no Resend account is connected to this project. Rather than adding one,
this uses Lovable's built-in email sending, which needs no API key and gives you
delivery/bounce logs in the backend Emails view.

## The email you'll get

- To: hello@jabstechnicalconsulting.com
- Subject: `New assessment request: <company, or name if no company given>`
- Reply-to: the lead's own work email, so hitting reply goes straight to them
- Body: name, work email, company (only if provided), what it's about, and the
  full process/system description — plainly laid out, in the site's blueprint
  styling

## Failure behavior

The lead is saved first. The email send happens after, wrapped so any failure
(domain not verified yet, rate limit, outage) is logged on the server only. The
visitor always sees the existing "Thanks — we've got it" state, and the row stays
in the database. Nothing rolls back.

## Technical details

- Scaffold the email template system, then add a `lead-notification` React Email
  template registered in `src/lib/email-templates/registry.ts`.
- In `submitLead` (`src/lib/leads.functions.ts`), after the successful insert,
  call `sendTemplateEmail` inside a `try/catch` that only `console.error`s.
  Interest codes are mapped to their human labels for the email body.
- No change to the Zod schema, the `leads` table, or `src/routes/contact.tsx`.
