import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServicePageData } from "@/components/site/ServicePage";
import { site } from "@/content/site";

const title = `Application Modernization — ${site.name}`;
const description =
  "Phased modernization of legacy backends, APIs, and integrations for operations-heavy businesses — upgraded incrementally, with the systems you depend on still running.";

export const Route = createFileRoute("/services/modernization")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/modernization" },
    ],
    links: [{ rel: "canonical", href: "/services/modernization" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Application modernization",
          description,
          provider: { "@type": "Organization", name: site.name },
        }),
      },
    ],
  }),
  component: () => <ServicePage data={data} />,
});

const data: ServicePageData = {
  slug: "/services/modernization",
  eyebrow: "Practice 03",
  h1: "Modernize in phases. Keep the lights on.",
  lede:
    "Legacy systems rarely get replaced in one move. We upgrade backends, APIs, and integrations incrementally, so the business keeps running while the platform improves.",
  pillars: [
    {
      num: "Map",
      title: "System & dependency mapping",
      body: "What talks to what, what's load-bearing, and what can safely change first.",
    },
    {
      num: "Split",
      title: "Incremental decomposition",
      body: "Carve services out of the monolith in an order that reduces risk instead of adding it.",
    },
    {
      num: "Bridge",
      title: "API & integration layer",
      body: "New services and old systems coexisting behind a stable contract.",
    },
    {
      num: "Prove",
      title: "Regression safety net",
      body: "Automated coverage on the paths that would hurt most if they broke.",
    },
  ],
  caseStudy: {
    eyebrow: "Case study",
    title: "Rebuilding the backend of a high-volume claims platform without a freeze",
    items: [
      {
        label: "Challenge",
        body: "Core claims processing ran on frameworks years past support, making every change slow, risky, and hard to staff for.",
      },
      {
        label: "Approach",
        body: "Phase-by-phase migration behind a stable API layer, with automated regression coverage added ahead of each phase and rollback available at every step.",
      },
      {
        label: "Result",
        body: "A supported, testable platform delivered without a feature freeze, and a team able to ship again without waiting on specialists.",
      },
    ],
  },
  stats: [
    { value: "0", label: "Feature freezes required" },
    { value: "Phased", label: "Rollback at every step" },
    { value: "100%", label: "Critical paths under test" },
  ],
  cta: {
    title: "Sitting on a system nobody wants to touch?",
    label: "Book a 30-min modernization review",
  },
};
