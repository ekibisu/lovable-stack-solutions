import { createFileRoute } from "@tanstack/react-router";
import {
  Benefit,
  CtaBand,
  PageHeader,
  Section,
  SectionHead,
  StatPlate,
  ThreeColumnStory,
  Wrap,
} from "@/components/site/primitives";
import { site } from "@/content/site";

const title = `Case Study: Putting Two Seattle Vintage Shops Online — ${site.name}`;
const description =
  "How Bon Voyage Vintage moved two Seattle shops off paper and Square alone: one shared catalog, AI photo-to-listing at the register, and a brand name reclaimed in search — for a few dollars a month.";

export const Route = createFileRoute("/case-studies/bon-voyage-vintage")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://jabstechnicalconsulting.com/case-studies/bon-voyage-vintage" },
    ],
    links: [{ rel: "canonical", href: "https://jabstechnicalconsulting.com/case-studies/bon-voyage-vintage" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Putting two Seattle vintage shops online without adding a data-entry job",
          description,
          author: { "@type": "Organization", name: site.name },
        }),
      },
    ],
  }),
  component: CaseStudy,
});

function CaseStudy() {
  return (
    <>
      <PageHeader
        tag="Retail · Vintage resale · Seattle, WA"
        eyebrow="Case study"
        title="Putting two Seattle vintage shops online without adding a data-entry job"
        lede="Bon Voyage Vintage sells one-of-one pieces from two walk-in shops. We gave them a real digital presence built around how the store actually works — not a template that assumes reorderable stock."
      />

      <Section className="pt-0">
        <Wrap>
          <StatPlate
            stats={[
              { value: "2 → 1", label: "Shops, one shared catalog" },
              { value: "Seconds", label: "Per listing, at the register" },
              { value: "$/mo", label: "Total AI & hosting cost" },
              { value: "1st", label: "Own name back in search" },
            ]}
          />
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead
            eyebrow="The situation"
            title="Paper inventory, invisible stock, and someone else owning the name."
          />
          <ThreeColumnStory
            items={[
              {
                label: "Challenge",
                body: "Inventory across both Seattle shops lived on paper and in Square alone. One-of-one vintage pieces were invisible online, impossible to reserve, and impossible to cross-reference between locations — staff called the other store to check if something was still on the rack.",
              },
              {
                label: "Constraint",
                body: "The shops are walk-in-first and the team is small. Any system that asked staff to become data-entry clerks — long forms, back-office cataloging shifts, per-item SKU discipline — would have been abandoned in a week.",
              },
              {
                label: "Cost of inaction",
                body: "A competitor was cybersquatting the shop's name in search, so customers looking for Bon Voyage Vintage found someone else first. Every unlisted piece was a sale that depended entirely on foot traffic.",
              },
            ]}
          />
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead
            eyebrow="What we built"
            title="A store platform shaped like a vintage shop."
            lede="Instead of a generic e-commerce build, every feature answers a specific way the business works."
          />
          <div className="grid gap-9 md:grid-cols-2">
            <Benefit
              num="01"
              title="AI photo-to-listing quick add"
              body="A tablet beside the register: photograph the piece, and a flash-lite vision model drafts title, category, era, materials, and condition. Staff confirm or correct in seconds — no keyboard-first data entry."
            />
            <Benefit
              num="02"
              title="Speech capture with AI cleanup"
              body="Browser speech-to-text lets staff describe a garment out loud while handling it; an AI pass cleans the transcript into listing copy that matches the shop's voice."
            />
            <Benefit
              num="03"
              title="One-of-one inventory & Representative Looks"
              body={'Single-quantity items behave correctly across both locations — one shared catalog, reservable, with cross-store lookup. Pieces that can\'t be reordered get "Representative Looks" so the shop can market a style without implying restock.'}
            />
            <Benefit
              num="04"
              title="Printable QR price tags"
              body="Each listing prints a tag whose QR code links back to its page, tying the physical rack to the online catalog without a separate labeling workflow."
            />
            <Benefit
              num="05"
              title="Neighborhood walking maps"
              body="The site markets what a vintage shopper actually plans — a walkable afternoon between the two shops and their neighborhoods — rather than only listing inventory."
            />
            <Benefit
              num="06"
              title="SSR for search and AI crawlers"
              body="Server-rendered pages with clean metadata so both search engines and AI assistants can read the catalog, which is how the shop reclaimed its own name in results."
            />
          </div>
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead
            eyebrow="Outcome"
            title="A real digital presence the staff actually keeps current."
            lede="Listings happen at the counter between customers. The catalog is live at both locations, the brand name is back in search, and the whole stack costs a small business dollars a month."
          />
          <ThreeColumnStory
            items={[
              {
                label: "Operationally",
                body: "Adding a piece takes seconds at the register, and both shops see the same catalog — no phone calls to check whether something has already sold.",
              },
              {
                label: "Commercially",
                body: "One-of-one inventory is discoverable and reservable online, and customers searching the shop's name find the shop rather than a squatter.",
              },
              {
                label: "Financially",
                body: "The stack is cost-tuned end to end — browser speech-to-text, flash-lite vision models, and lean hosting — so AI and infrastructure cost a few dollars a month, not hundreds.",
              },
            ]}
          />
        </Wrap>
      </Section>

      <CtaBand
        eyebrow="Similar problem?"
        title="If your storefront is invisible online — or outranked by someone else — we can tell you what it takes to fix it."
        body="A 30-minute web presence review is enough to know what's worth building, and we'll say so if a simpler answer will do."
      />
    </>
  );
}
