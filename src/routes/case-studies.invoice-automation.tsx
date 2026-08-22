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

const title = `Case Study: 80% Less Manual Invoice Entry — ${site.name}`;
const description =
  "How we cut manual freight invoice processing by 80% with ~99% extraction accuracy for a nationwide logistics marketplace, using document AI and three-stage human review.";

export const Route = createFileRoute("/case-studies/invoice-automation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/case-studies/invoice-automation" },
    ],
    links: [{ rel: "canonical", href: "/case-studies/invoice-automation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cutting manual invoice processing by 80% for a nationwide logistics marketplace",
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
        tag="Logistics · Freight operations"
        eyebrow="Case study"
        title="Cutting manual invoice processing by 80% for a nationwide logistics marketplace"
        lede="A production automation pipeline for freight invoices — built so accuracy went up while the manual workload went down."
      />

      <Section className="pt-0">
        <Wrap>
          <StatPlate
            stats={[
              { value: "80%", label: "Less manual entry" },
              { value: "99%", label: "Extraction accuracy" },
              { value: "3", label: "Stage human review" },
              { value: "∞", label: "Scales without headcount" },
            ]}
          />
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead eyebrow="The situation" title="Volume was growing. The process wasn't." />
          <ThreeColumnStory
            items={[
              {
                label: "Challenge",
                body: "Freight invoices arrived from hundreds of carriers in inconsistent formats — PDFs, scans, and email bodies — with rates, accessorials, and reference numbers buried in unstructured text.",
              },
              {
                label: "Constraint",
                body: "Payments could not be automated blindly. Incorrect pay dates or duplicate invoices carried real financial consequences, so a person had to remain accountable for every approval.",
              },
              {
                label: "Cost of inaction",
                body: "Headcount was the only lever left. Every new carrier and every volume increase translated directly into more hours of keying data by hand.",
              },
            ]}
          />
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead
            eyebrow="What we built"
            title="An extraction pipeline with people still in the loop."
            lede="Automation handled the mechanical work. Humans kept the judgment calls."
          />
          <div className="grid gap-9 md:grid-cols-2">
            <Benefit
              num="01"
              title="Document AI + extraction agent"
              body="Document AI handled layout and OCR; a purpose-built extraction agent resolved the fields that varied by carrier, with confidence scores attached to every value."
            />
            <Benefit
              num="02"
              title="Validation & duplicate detection"
              body="Cross-references against load records, duplicate invoice detection, and factoring or vendor assignment checks ran before anything reached a reviewer."
            />
            <Benefit
              num="03"
              title="Three-stage human review"
              body="Reviewer, validator, and approver checkpoints with a clear audit trail. Low-confidence extractions were routed to a person rather than pushed through."
            />
            <Benefit
              num="04"
              title="Pay-date logic & exception alerts"
              body="Payment dates were calculated automatically from terms, and anything the pipeline couldn't confidently handle triggered a real-time alert instead of failing silently."
            />
          </div>
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead
            eyebrow="Outcome"
            title="80% of the manual work removed — and accuracy went up."
            lede="The team stopped keying invoices and started handling exceptions. Volume growth no longer requires proportional hiring, and the audit trail is stronger than it was under the fully manual process."
          />
          <ThreeColumnStory
            items={[
              {
                label: "Operationally",
                body: "Staff time shifted from data entry to reviewing the small fraction of invoices that genuinely need judgment.",
              },
              {
                label: "Financially",
                body: "Pay dates are calculated consistently, duplicates are caught before payment, and processing cost no longer scales with volume.",
              },
              {
                label: "Structurally",
                body: "The pipeline is documented and infrastructure-as-code, so adding carriers or document types is a configuration change, not a project.",
              },
            ]}
          />
        </Wrap>
      </Section>

      <CtaBand
        eyebrow="Similar problem?"
        title="If your team is still keying documents by hand, we can tell you what's automatable."
        body="A 30-minute call is enough to know whether the process is worth automating — and we'll say so if it isn't."
      />
    </>
  );
}
