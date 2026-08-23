import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServicePageData } from "@/components/site/ServicePage";
import { site } from "@/content/site";

const title = `Cloud & DevOps Reliability — ${site.name}`;
const description =
  "Cloud architecture, security, infrastructure-as-code, CI/CD, monitoring, and cost reviewed — then handed to you as a prioritized 30/60/90-day plan, not a list of problems.";

export const Route = createFileRoute("/services/cloud-devops")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jabstechnicalconsulting.com/services/cloud-devops" },
    ],
    links: [{ rel: "canonical", href: "https://jabstechnicalconsulting.com/services/cloud-devops" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Cloud & DevOps reliability",
          description,
          provider: { "@type": "Organization", name: site.name },
        }),
      },
    ],
  }),
  component: () => <ServicePage data={data} />,
});

const data: ServicePageData = {
  slug: "/services/cloud-devops",
  eyebrow: "Practice 02",
  h1: "Your infrastructure shouldn't be the reason releases are scary.",
  lede:
    "We review cloud architecture, security, infrastructure-as-code, CI/CD, monitoring, and cost, then hand you a prioritized plan, not just a list of problems.",
  pillars: [
    {
      num: "Review",
      title: "Architecture & security",
      body: "A full read of your current cloud footprint, access controls, and network posture.",
    },
    {
      num: "Build",
      title: "Infrastructure as code",
      body: "Reproducible environments across dev, test, staging, and production.",
    },
    {
      num: "Ship",
      title: "CI/CD pipelines",
      body: "Automated, lower-risk deployments that replace manual release nights.",
    },
    {
      num: "Audit",
      title: "Cost & reliability",
      body: "Where spend and downtime risk are actually coming from, ranked by impact.",
    },
  ],
  caseStudy: {
    eyebrow: "Case study",
    title: "Migrating a high-volume transaction platform to the cloud, with zero downtime",
    items: [
      {
        label: "Challenge",
        body: "A healthcare payer platform processing a large, continuous volume of transactions ran on aging on-premises infrastructure, with risky deployments and infrastructure spend that had climbed well past what the platform's usage justified.",
      },
      {
        label: "Approach",
        body: "Cloud migration on infrastructure-as-code, automated CI/CD, a managed scalable database layer, containers and microservices, and a reusable IaC library for self-service onboarding.",
      },
      {
        label: "Result",
        body: "Infrastructure spend came down sharply and deployment risk came down with it, with zero disruption to transaction processing throughout the migration. The approach was packaged into a reusable library so other teams could safely onboard to the cloud on their own.",
      },
    ],
    link: { to: "/case-studies/cloud-migration", label: "Read the full case study →" },
  },
  stats: [
    { value: "Zero", label: "Downtime during the migration" },
    { value: "Full", label: "Transaction volume maintained throughout" },
    { value: "Self-service", label: "Infrastructure reused by other teams" },
  ],
  cta: {
    title: "Want to know what your cloud setup would look like reviewed honestly?",
    label: "Book a 30-min reliability review",
  },
};
