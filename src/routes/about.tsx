import { createFileRoute } from "@tanstack/react-router";
import {
  Benefit,
  CtaBand,
  PageHeader,
  Section,
  SectionHead,
  StatPlate,
  Wrap,
} from "@/components/site/primitives";
import { engagementSteps, site } from "@/content/site";

const title = `About — ${site.name}`;
const description =
  "A senior-only technical consultancy for operations-heavy businesses: how we work, what we refuse to do, and who we're the right fit for.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Senior engineers, accountable for outcomes — not a staffing bench."
        lede="JABS Technical Consulting works with operations-heavy and regulated businesses that need real systems built, not slideware. The people who scope your work are the people who build it."
      />

      <Section className="pt-0">
        <Wrap>
          <StatPlate
            stats={[
              { value: "$13B", label: "Monthly volume platforms supported" },
              { value: "70%+", label: "Infrastructure cost reduced" },
              { value: "80%", label: "Manual entry eliminated" },
            ]}
          />
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead
            eyebrow="How we work"
            title="Four steps, and you can stop after any of them."
            lede="Each stage produces something you own and can act on, whether or not you continue with us."
          />
          <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((s) => (
              <Benefit key={s.num} num={s.num} title={s.title} body={s.body} />
            ))}
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead
            eyebrow="Principles"
            title="What you can hold us to."
          />
          <div className="grid gap-9 md:grid-cols-2">
            <Benefit
              num="01"
              title="Humans stay accountable"
              body="We don't ship automation that makes consequential decisions unsupervised. Review checkpoints and audit trails are part of the design, not an afterthought."
            />
            <Benefit
              num="02"
              title="No big-bang rewrites"
              body="Phased delivery with rollback at every step. If a phase doesn't prove out, you stop with a working system rather than a half-finished one."
            />
            <Benefit
              num="03"
              title="You own the handoff"
              body="Infrastructure-as-code, documentation, and runbooks are deliverables. We're designed to be leavable."
            />
            <Benefit
              num="04"
              title="We'll tell you not to build it"
              body="If a process isn't worth automating, saying so in the assessment is cheaper for both of us than finding out in month four."
            />
          </div>
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead eyebrow="Fit" title="Who this works for — and who it doesn't." />
          <div className="grid gap-7 md:grid-cols-2">
            <div className="corners border border-line-soft bg-card p-8">
              <h3 className="mb-3 font-mono text-[13px] uppercase tracking-[0.06em] text-markup">
                Good fit
              </h3>
              <ul className="space-y-2.5 text-muted">
                <li>Document- or approval-heavy operations still handled by hand</li>
                <li>Legacy backends that can't be frozen for a rewrite</li>
                <li>Regulated environments needing audit trails and uptime</li>
                <li>Teams that want to own the system after handoff</li>
              </ul>
            </div>
            <div className="corners border border-line-soft bg-card p-8">
              <h3 className="mb-3 font-mono text-[13px] uppercase tracking-[0.06em] text-muted">
                Not a fit
              </h3>
              <ul className="space-y-2.5 text-muted">
                <li>Body-shop staff augmentation by the seat</li>
                <li>Fully autonomous AI making financial decisions unsupervised</li>
                <li>Greenfield consumer apps with no operational system behind them</li>
                <li>Engagements where no one internally owns the process</li>
              </ul>
            </div>
          </div>
        </Wrap>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Start with one real process and a 30-minute call."
        body={`Prefer email? Reach us directly at ${site.email}.`}
      />
    </>
  );
}
