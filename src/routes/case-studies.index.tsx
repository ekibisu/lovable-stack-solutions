import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHeader, Section, ServiceCard, Wrap } from "@/components/site/primitives";
import { site } from "@/content/site";

const title = `Case Studies — ${site.name}`;
const description =
  "Production engagements in logistics, healthcare, and retail: invoice automation, a zero-downtime cloud migration, a claims platform rebuild, and a two-shop vintage store taken online.";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jabstechnicalconsulting.com/case-studies" },
    ],
    links: [{ rel: "canonical", href: "https://jabstechnicalconsulting.com/case-studies" }],
  }),
  component: CaseStudiesIndex,
});

const studies = [
  {
    to: "/case-studies/invoice-automation" as const,
    tag: "Logistics · Freight operations",
    title: "Cutting manual invoice processing by 80%",
    body: "80% less manual entry, at ~99% extraction accuracy.",
  },
  {
    to: "/case-studies/cloud-migration" as const,
    tag: "Healthcare · Payer platform",
    title: "Migrating a high-volume transaction platform to the cloud",
    body: "Zero downtime, full transaction volume maintained throughout.",
  },
  {
    to: "/case-studies/claims-platform-modernization" as const,
    tag: "Healthcare · Claims processing",
    title: "Rebuilding a high-volume claims platform without a freeze",
    body: "Zero feature freeze across a phased rewrite.",
  },
  {
    to: "/case-studies/bon-voyage-vintage" as const,
    tag: "Retail · Vintage resale · Seattle, WA",
    title: "Putting two Seattle vintage shops online",
    body: "Two shops, one shared catalog — for dollars a month.",
  },
];

function CaseStudiesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Work we can point at."
        lede="Four engagements, each shipped into production and still running. Every one names the constraint, the build, and the measurable outcome."
      />

      <Section className="pt-0">
        <Wrap>
          <div className="grid gap-6 md:grid-cols-2">
            {studies.map((s) => (
              <ServiceCard key={s.to} {...s} cta="Read the case study →" />
            ))}
          </div>
        </Wrap>
      </Section>

      <CtaBand
        eyebrow="Your turn"
        title="Tell us the process that's costing you the most hours."
        body="A 30-minute call is enough for us to say whether it's worth engineering — and we'll say so if it isn't."
      />
    </>
  );
}
