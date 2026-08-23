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

const title = `Case Study: Cloud Migration at $13B/Month, Zero Downtime — ${site.name}`;
const description =
  "How we migrated a healthcare payer platform processing over $13B per month off aging on-prem infrastructure with zero disruption, cutting infrastructure cost from ~$7M/year to under $2M/year.";

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
            "Migrating a billion-dollar transaction platform to the cloud with zero disruption",
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
        title="Migrating a billion-dollar transaction platform — and cutting infrastructure cost by 70%"
        lede="A healthcare payer platform moving more than $13B a month, lifted off aging on-prem hardware onto reproducible cloud infrastructure without a single disruptive cutover."
      />

      <Section className="pt-0">
        <Wrap>
          <StatPlate
            stats={[
              { value: "70%+", label: "Infrastructure cost reduction" },
              { value: "$13B", label: "Monthly volume, uninterrupted" },
              { value: "0", label: "Downtime during migration" },
              { value: "$5M", label: "Annual run-rate savings" },
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
                body: "The platform processed over $13B/month on aging on-prem infrastructure. Capacity was fixed, hardware refresh cycles were looming, and the environments that were supposed to mirror production had drifted apart over years of manual changes.",
              },
              {
                label: "Constraint",
                body: "Nothing could stop. Payment and claims traffic ran continuously, so there was no maintenance window large enough for a lift-and-shift, and no appetite for a big-bang cutover on a regulated, money-moving system.",
              },
              {
                label: "Cost of inaction",
                body: "Infrastructure spend was climbing past $7M/year, releases required manual coordination and out-of-hours risk, and every new internal team waiting on an environment added weeks to their own delivery timeline.",
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
            title="Cost cut by more than 70% — with nothing taken offline."
            lede="Infrastructure spend fell from roughly $7M/year to under $2M/year while the platform kept processing $13B a month throughout the migration."
          />
          <ThreeColumnStory
            items={[
              {
                label: "Operationally",
                body: "Deployments became routine and automated instead of scheduled events, and environments could be rebuilt from code rather than restored from memory.",
              },
              {
                label: "Financially",
                body: "Roughly $5M a year came out of the run rate, with capacity now tracking actual demand instead of a hardware purchase made years earlier.",
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
