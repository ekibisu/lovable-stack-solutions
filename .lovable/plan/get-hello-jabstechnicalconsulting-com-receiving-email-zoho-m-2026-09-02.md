# Get hello@jabstechnicalconsulting.com receiving email (Zoho Mail)

No code changes are needed. This is entirely DNS + Zoho configuration, and every DNS record is added inside Lovable because the domain was purchased through Lovable.

## Where to add DNS records

Project Settings → Project → Domains → find `jabstechnicalconsulting.com` → three-dot menu (⋯) → Configure → Manage DNS records.

## Steps

1. **Ownership verification (done)**
   TXT record on host `@` with value `zoho-verification=zb59698784.zmverify.zoho.com` is added. Wait ~30 minutes, then click **Verify TXT Record** in Zoho.

2. **Create the mailbox**
   In Zoho, create the user/mailbox `hello@jabstechnicalconsulting.com`, or add it as an alias on your existing Zoho account.

3. **Add MX records (this is what makes mail arrive)**
   Open Zoho's Mail Delivery / MX Records setup page and copy the MX hostnames and priorities it shows for your account. Add each one in Lovable's DNS manager with host `@` and the priority Zoho lists. Remove any existing MX records pointing anywhere else — leftover MX entries silently divert mail.

4. **Add SPF and DKIM (TXT records)**
   Zoho's setup pages give you an SPF value and a DKIM value with its own selector host. Add both. Without them, mail you send from `hello@` gets filtered as spam by recipients.

5. **Test**
   Send a message to `hello@jabstechnicalconsulting.com` from an outside address (personal Gmail, phone). Then reply from Zoho and confirm it arrives without a spam warning.

## Notes

- Copy MX/SPF/DKIM values from Zoho's own screens, not from memory — they differ per Zoho data center (US / EU / IN).
- Propagation is typically minutes but can take up to a few hours.
- None of this affects the live site. The web routing record (`A` → 185.158.133.1) is separate from mail records and stays untouched.
- Lovable does not host inboxes — it only sends email. Zoho is the correct tool for receiving.

## Deferred

Form-submission lead notifications are intentionally not part of this. When you want them later, they go on a separate sending subdomain (`notify.jabstechnicalconsulting.com`) so they never collide with Zoho's mail routing on the root domain.
