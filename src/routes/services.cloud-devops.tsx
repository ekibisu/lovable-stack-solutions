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
    title: "Migrating a billion-dollar transaction platform — and cutting infrastructure cost by 70%",
    items: [
      {
        label: "Challenge",
        body: "A healthcare payer platform processing over $13B/month ran on aging on-prem infrastructure, with risky deployments and a climbing $7M/year infrastructure bill.",
      },
      {
        label: "Approach",
        body: "Cloud migration on infrastructure-as-code, automated CI/CD, a managed scalable database layer, containers and microservices, and a reusable IaC library for self-service onboarding.",
      },
      {
        label: "Result",
        body: "Cost cut from ~$7M/year to under $2M/year, with zero disruption to a platform processing $13B/month throughout the migration.",
      },
    ],
    link: { to: "/case-studies/cloud-migration", label: "Read the full case study →" },
  },
  stats: [
    { value: "70%+", label: "Cost reduction" },
    { value: "$13B", label: "Monthly volume, zero disruption" },
    { value: "0", label: "Downtime during migration" },
  ],
  cta: {
    title: "Want to know what your cloud setup would look like reviewed honestly?",
    label: "Book a 30-min reliability review",
  },
};
