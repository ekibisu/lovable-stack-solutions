import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServicePageData } from "@/components/site/ServicePage";
import { site } from "@/content/site";

const title = `AI & Workflow Automation — ${site.name}`;
const description =
  "Document intake, OCR and AI extraction, validation, and multi-stage approval workflows for document-heavy operations — with human sign-off built in, not removed.";

export const Route = createFileRoute("/services/ai-automation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jabstechnicalconsulting.com/services/ai-automation" },
    ],
    links: [{ rel: "canonical", href: "https://jabstechnicalconsulting.com/services/ai-automation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI & workflow automation",
          description,
          provider: { "@type": "Organization", name: site.name },
        }),
      },
    ],
  }),
  component: () => <ServicePage data={data} />,
});

const data: ServicePageData = {
  slug: "/services/ai-automation",
  eyebrow: "Practice 01",
  h1: "Stop re-keying the same data twice.",
  lede:
    "We turn documents, emails, and repetitive manual processes into reliable, auditable workflows — with human review built in, not removed.",
  pillars: [
    {
      num: "Intake",
      title: "Document & OCR extraction",
      body: "Invoices, POs, bills of lading, weigh tickets, and compliance forms read and structured automatically.",
    },
    {
      num: "Rules",
      title: "Validation & business logic",
      body: "Cross-references, duplicate detection, and factoring or vendor assignment checks built into the pipeline.",
    },
    {
      num: "Review",
      title: "Approval workflows",
      body: "Multi-stage reviewer, validator, and approver checkpoints — nothing ships without a person signing off.",
    },
    {
      num: "Alerts",
      title: "Exception handling",
      body: "Anything the system can't confidently extract gets quarantined and flagged, not guessed at.",
    },
  ],
  caseStudy: {
    eyebrow: "Case study",
    title: "Cutting manual invoice processing by 80% for a nationwide logistics marketplace",
    items: [
      {
        label: "Challenge",
        body: "Freight invoices arrived in inconsistent formats with critical details buried in unstructured text. Every one required manual entry before payment could be scheduled, and volume was outpacing the team.",
      },
      {
        label: "Approach",
        body: "A production pipeline combining document AI with an extraction agent, three-stage human review, automatic pay-date calculation, and real-time exception alerts.",
      },
      {
        label: "Result",
        body: "80% less manual entry, ~99% extraction accuracy, and a workflow built to scale to unlimited monthly volume without adding headcount.",
      },
    ],
  },
  stats: [
    { value: "80%", label: "Less manual entry" },
    { value: "99%", label: "Extraction accuracy" },
    { value: "∞", label: "Scales without headcount" },
  ],
  cta: {
    title: "Have a document-heavy process eating your team's time?",
    label: "Book a 30-min automation assessment",
  },
};
