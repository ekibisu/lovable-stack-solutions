import { createFileRoute } from "@tanstack/react-router";
import {
  Benefit,
  ButtonLink,
  CtaBand,
  Eyebrow,
  Section,
  SectionHead,
  ServiceCard,
  StatPlate,
  Wrap,
} from "@/components/site/primitives";
import { engagements, practices, site } from "@/content/site";

const title = `${site.name} — AI Automation & Cloud DevOps`;
const description = site.tagline;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jabstechnicalconsulting.com/" },
    ],
    links: [{ rel: "canonical", href: "https://jabstechnicalconsulting.com/" }],
  }),
  component: Index,
});

function PipelineDiagram() {
  const steps = [
    "01 · Document intake",
    "02 · OCR + AI extract",
    "03 · Validate + review",
    "04 · Approved output",
  ];
  return (
    <div className="corners border border-line-soft p-6">
      <svg
        viewBox="0 0 380 260"
        role="img"
        aria-label="Automation pipeline: document intake, OCR and AI extraction, validation and review, approved output"
        className="w-full"
      >
        <title>Automation pipeline schematic</title>
        <line
          x1="96"
          y1="40"
          x2="96"
          y2="220"
          stroke="var(--line)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        {steps.map((label, i) => {
          const last = i === steps.length - 1;
          return (
            <g key={label}>
              <rect
                x="16"
                y={20 + i * 60}
                width="200"
                height="40"
                fill="var(--ink-2)"
                stroke={last ? "var(--accent-dark)" : "var(--line)"}
                strokeWidth={last ? 1.5 : 1}
              />
              <text
                x="28"
                y={44 + i * 60}
                fontFamily="IBM Plex Mono, monospace"
                fontSize="11"
                fill={last ? "var(--accent-dark)" : "var(--muted-dark)"}
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function Index() {
  return (
    <>
      <section className="blueprint py-20">
        <Wrap className="grid items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <Eyebrow onDark>{site.name}</Eyebrow>
            <h1 className="mb-5 text-[34px] text-paper md:text-[52px]">
              Eliminate manual operations work. Modernize the systems holding you back.
            </h1>
            <p className="max-w-[640px] text-[19px] text-muted-dark">
              We build AI-powered workflows, secure cloud platforms, and modernized backend systems
              for logistics, healthcare, and other operations-heavy businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <ButtonLink to="/contact" variant="primary">
                Book a 30-min assessment
              </ButtonLink>
              <ButtonLink to="/case-studies/invoice-automation" variant="onDark">
                See the 80% reduction case study →
              </ButtonLink>
            </div>
          </div>
          <PipelineDiagram />
        </Wrap>
      </section>

      <Section>
        <Wrap>
          <SectionHead eyebrow="What we do" title="Three problems, one accountable team." />
          <div className="grid gap-9 md:grid-cols-3">
            <Benefit
              num="01"
              title="Automate operational workflows"
              body="Turn documents, email, and repetitive approvals into reliable, auditable workflows — with a human checkpoint at every stage that matters."
            />
            <Benefit
              num="02"
              title="Modernize without disruption"
              body="Upgrade legacy systems and integrations in phases, while the systems your business depends on keep running."
            />
            <Benefit
              num="03"
              title="Deploy with confidence"
              body="Secure cloud infrastructure, CI/CD pipelines, monitoring, and infrastructure-as-code, so releases stop being an event."
            />
          </div>
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead eyebrow="Services" title="Four practices, one team behind all of them." />
          <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-4">
            {practices.map((p) => (
              <ServiceCard key={p.to} to={p.to} tag={p.tag} title={p.title} body={p.body} />
            ))}
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap className="grid items-center gap-14 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <Eyebrow>Proof, not promises</Eyebrow>
            <h2 className="mb-4 text-[26px] md:text-[32px]">
              80% less manual entry. ~99% extraction accuracy.
            </h2>
            <p className="text-muted">
              A nationwide logistics marketplace was drowning in manually keyed freight invoices. We
              built a production automation pipeline with a three-stage human review process — and it
              hasn't stopped scaling since.
            </p>
            <div className="mt-6">
              <ButtonLink to="/case-studies/invoice-automation" variant="ghost">
                Read the full case study →
              </ButtonLink>
            </div>
          </div>
          <StatPlate
            stats={[
              { value: "80%", label: "Less manual entry" },
              { value: "99%", label: "Extraction accuracy" },
              { value: "3", label: "Stage human review" },
            ]}
          />
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead
            eyebrow="How we engage"
            title="Fixed shapes, so you know what you're buying."
            lede="Every engagement starts small and paid, so the value is proven before the budget grows."
          />
          <div className="grid gap-9 md:grid-cols-3">
            {engagements.map((e) => (
              <Benefit key={e.title} num={e.num} title={e.title} body={e.body} />
            ))}
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead eyebrow="Who we work with" title="Operations-heavy, regulated, or both." />
          <div className="grid gap-7 md:grid-cols-2">
            <div className="corners border border-paper-2 p-8">
              <Eyebrow>Primary</Eyebrow>
              <h3 className="mb-2 text-[19px]">Logistics &amp; operations</h3>
              <p className="text-muted">
                Freight, transportation, and warehousing teams buried in invoices, bills of lading,
                and weigh tickets that still get keyed in by hand.
              </p>
            </div>
            <div className="corners border border-paper-2 p-8">
              <Eyebrow>Primary</Eyebrow>
              <h3 className="mb-2 text-[19px]">Healthcare &amp; regulated compliance</h3>
              <p className="text-muted">
                Payer and provider platforms that need to modernize without risking uptime, audit
                trails, or transaction volume.
              </p>
            </div>
          </div>
        </Wrap>
      </Section>

      <CtaBand
        eyebrow="Start here"
        title="Bring us one process that's still manual."
        body="We'll tell you honestly whether it's worth automating, in a 30-minute call, not a sales pitch."
      />
    </>
  );
}
