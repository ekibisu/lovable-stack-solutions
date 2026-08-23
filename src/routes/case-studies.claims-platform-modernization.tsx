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

const title = `Case Study: Claims Platform Modernization Without a Freeze — ${site.name}`;
const description =
  "How we rebuilt the backend of a high-volume claims platform phase by phase behind a stable API layer — no feature freeze, rollback at every step, and critical paths under automated test.";

export const Route = createFileRoute("/case-studies/claims-platform-modernization")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://jabstechnicalconsulting.com/case-studies/claims-platform-modernization",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://jabstechnicalconsulting.com/case-studies/claims-platform-modernization",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Rebuilding the backend of a high-volume claims platform without a freeze",
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
        tag="Healthcare · Claims processing"
        eyebrow="Case study"
        title="Rebuilding the backend of a high-volume claims platform without a freeze"
        lede="A phased rewrite of core claims processing off unsupported frameworks — delivered while the business kept shipping features and processing claims every day."
      />

      <Section className="pt-0">
        <Wrap>
          <StatPlate
            stats={[
              { value: "0", label: "Feature freezes required" },
              { value: "Phased", label: "Rollback at every step" },
              { value: "100%", label: "Critical paths under test" },
              { value: "Stable", label: "API contract throughout" },
            ]}
          />
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead
            eyebrow="The situation"
            title="A system the business depended on and nobody wanted to change."
          />
          <ThreeColumnStory
            items={[
              {
                label: "Challenge",
                body: "Core claims processing ran on frameworks years past end of support. Business logic accumulated over a decade sat tangled with the framework itself, so even small changes required tracing behavior by hand.",
              },
              {
                label: "Constraint",
                body: "Claims kept arriving. A rewrite-then-switch approach would have meant freezing product work for months, and no one was willing to risk a single big cutover on the pipeline the business bills through.",
              },
              {
                label: "Cost of inaction",
                body: "Change velocity was falling, security patches were no longer available upstream, and hiring for the legacy stack was getting harder every quarter — leaving delivery dependent on a handful of specialists.",
              },
            ]}
          />
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead
            eyebrow="What we built"
            title="A migration in phases, each one independently shippable."
            lede="Every phase left the platform in a working, releasable state — and every phase could be reversed."
          />
          <div className="grid gap-9 md:grid-cols-2">
            <Benefit
              num="01"
              title="System & dependency map"
              body="Before any code moved, we mapped what called what, which paths were load-bearing for claims and payments, and which modules could be changed first with the least blast radius."
            />
            <Benefit
              num="02"
              title="Stable API layer in front"
              body="Consumers were pointed at a versioned API contract, so internal implementations could be swapped underneath without downstream teams or integrations needing to change."
            />
            <Benefit
              num="03"
              title="Regression coverage ahead of each phase"
              body="Automated tests were written against existing behavior before it was touched — characterizing the legacy path first, so a rewrite that changed a result was caught immediately instead of in production."
            />
            <Benefit
              num="04"
              title="Module-by-module rewrite"
              body="Claims intake, adjudication rules, and downstream integrations were migrated onto a supported stack one slice at a time, with old and new coexisting behind the same contract."
            />
            <Benefit
              num="05"
              title="Shadow runs & routed cutover"
              body="New modules processed real traffic in parallel and were compared against legacy output before taking ownership, then were switched on progressively behind routing controls."
            />
            <Benefit
              num="06"
              title="Rollback at every step"
              body="Each phase kept the legacy path warm and reversible, so a rollback was a routing change rather than an incident — which is what made continuing feature work safe."
            />
          </div>
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead
            eyebrow="Outcome"
            title="A supported, testable platform — delivered without a feature freeze."
            lede="The team ended the engagement on a current stack with automated coverage on the paths that matter, and shipped product work throughout the migration."
          />
          <ThreeColumnStory
            items={[
              {
                label: "Operationally",
                body: "Changes to claims logic are now routine and covered by tests, instead of requiring a specialist to reason through unsupported framework behavior.",
              },
              {
                label: "Commercially",
                body: "Roadmap work never stopped. Feature delivery continued in parallel with the migration, so modernization didn't cost the business a quarter of progress.",
              },
              {
                label: "Structurally",
                body: "The API layer and regression suite outlive the project: future replacements can happen behind the same contract, with the same phased, reversible approach.",
              },
            ]}
          />
        </Wrap>
      </Section>

      <CtaBand
        eyebrow="Similar problem?"
        title="If you're sitting on a system nobody wants to touch, we can map a phased way out."
        body="A 30-minute call is enough to tell you whether modernization is worth starting now — and we'll say so if it isn't."
      />
    </>
  );
}
