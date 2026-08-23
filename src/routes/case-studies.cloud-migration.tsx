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

const title = `Case Study: High-Volume Cloud Migration, Zero Downtime — ${site.name}`;
const description =
  "How we migrated a healthcare payer platform off aging on-premises infrastructure with zero disruption and zero downtime, using infrastructure-as-code and a reversible, incremental cutover.";

export const Route = createFileRoute("/case-studies/cloud-migration")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://jabstechnicalconsulting.com/case-studies/cloud-migration" },
    ],
    links: [{ rel: "canonical", href: "https://jabstechnicalconsulting.com/case-studies/cloud-migration" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Migrating a high-volume transaction platform to the cloud, with zero downtime",
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
        tag="Healthcare · Payer platform"
        eyebrow="Case study"
        title="Migrating a high-volume transaction platform to the cloud, with zero downtime"
        lede="A healthcare payer platform moving a large, continuous volume of transactions, lifted off aging on-prem hardware onto reproducible cloud infrastructure without a single disruptive cutover."
      />

      <Section className="pt-0">
        <Wrap>
          <StatPlate
            stats={[
              { value: "Zero", label: "Downtime during the migration" },
              { value: "Full", label: "Transaction volume maintained throughout" },
              { value: "Self-service", label: "Infrastructure reused by other teams" },
              { value: "Reversible", label: "Every migration step, in minutes" },
            ]}
          />
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead
            eyebrow="The situation"
            title="A critical platform on hardware nobody wanted to touch."
          />
          <ThreeColumnStory
            items={[
              {
                label: "Challenge",
                body: "The platform processed a large, continuous volume of transactions on aging on-prem infrastructure. Capacity was fixed, hardware refresh cycles were looming, and the environments that were supposed to mirror production had drifted apart over years of manual changes.",
              },
              {
                label: "Constraint",
                body: "Nothing could stop. Payment and claims traffic ran continuously, so there was no maintenance window large enough for a lift-and-shift, and no appetite for a big-bang cutover on a regulated, money-moving system.",
              },
              {
                label: "Cost of inaction",
                body: "Infrastructure spend was climbing well past what the platform's usage justified, releases required manual coordination and out-of-hours risk, and every new internal team waiting on an environment added weeks to their own delivery timeline.",
              },
            ]}
          />
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead
            eyebrow="What we built"
            title="Reproducible infrastructure first, then a migration that could be reversed."
            lede="Each step shipped on its own and was safe to stop at. Nothing depended on a single all-or-nothing weekend."
          />
          <div className="grid gap-9 md:grid-cols-2">
            <Benefit
              num="01"
              title="Infrastructure as code foundation"
              body="Every network, cluster, and data service was defined in code before anything moved, so dev, test, staging, and production could be rebuilt identically instead of being repaired by hand."
            />
            <Benefit
              num="02"
              title="Automated CI/CD pipelines"
              body="Manual release nights were replaced with automated, gated deployments — build, test, promote, and roll back — so shipping stopped depending on who was awake."
            />
            <Benefit
              num="03"
              title="Managed, scalable data layer"
              body="The database tier moved to a managed, horizontally scalable service with replication and point-in-time recovery, sized to real traffic rather than to peak-forever on-prem capacity."
            />
            <Benefit
              num="04"
              title="Containers & service decomposition"
              body="The monolithic deployment was broken into containerized services, letting the highest-traffic paths scale independently instead of scaling the whole platform to serve one hot component."
            />
            <Benefit
              num="05"
              title="Incremental, reversible cutover"
              body="Traffic shifted workload by workload behind routing controls, with the legacy path kept warm until each slice proved itself. Any step could be reversed in minutes without a customer noticing."
            />
            <Benefit
              num="06"
              title="Reusable IaC library for self-service"
              body="The patterns were packaged into a shared module library so other internal teams could stand up compliant environments themselves, without a ticket queue or a platform-team bottleneck."
            />
          </div>
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead
            eyebrow="Outcome"
            title="Infrastructure cost came down sharply — with nothing taken offline."
            lede="Infrastructure spend came down sharply while the platform kept processing its full transaction volume throughout the migration."
          />
          <ThreeColumnStory
            items={[
              {
                label: "Operationally",
                body: "Deployments became routine and automated instead of scheduled events, and environments could be rebuilt from code rather than restored from memory.",
              },
              {
                label: "Financially",
                body: "Infrastructure spend now tracks actual demand instead of a hardware purchase made years earlier, so the savings compound every year capacity would otherwise have sat idle.",
              },
              {
                label: "Structurally",
                body: "The reusable IaC library turned environment provisioning into self-service, so the platform team stopped being the constraint on everyone else's roadmap.",
              },
            ]}
          />
        </Wrap>
      </Section>

      <CtaBand
        eyebrow="Similar problem?"
        title="If a migration you can't afford to get wrong is sitting on the roadmap, we can scope it honestly."
        body="A 30-minute call is enough to tell you whether the move is worth making now — and we'll say so if it isn't."
      />
    </>
  );
}
