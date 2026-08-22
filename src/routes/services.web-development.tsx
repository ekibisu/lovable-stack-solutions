import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServicePageData } from "@/components/site/ServicePage";
import { site } from "@/content/site";

const title = `Web Development & Digital Presence — ${site.name}`;
const description =
  "Modern websites and internet-facing business applications for walk-in-first, operations-heavy businesses — inventory, reservations, and AI-assisted data entry that staff will actually use.";

export const Route = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services/web-development" },
    ],
    links: [{ rel: "canonical", href: "/services/web-development" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Web development & digital presence",
          description,
          provider: { "@type": "Organization", name: site.name },
        }),
      },
    ],
  }),
  component: () => <ServicePage data={data} />,
});

const data: ServicePageData = {
  slug: "/services/web-development",
  eyebrow: "Practice 04",
  h1: "A real digital presence — without turning your staff into data-entry clerks.",
  lede:
    "We build the public site and the internet-facing application behind it: inventory, reservations, and customer-facing tooling designed around how the business already runs, not around a template.",
  pillars: [
    {
      num: "Presence",
      title: "Brand-owned site & discoverability",
      body: "Server-rendered pages built for search engines and AI crawlers alike, so competitors and squatters don't own your name online.",
    },
    {
      num: "Apps",
      title: "Business applications on the web",
      body: "Inventory, reservations, and multi-location cross-reference available to customers and staff from any browser.",
    },
    {
      num: "Input",
      title: "Fast, AI-assisted data entry",
      body: "Photo-to-listing and speech capture so adding an item takes seconds at the counter instead of a back-office shift.",
    },
    {
      num: "Cost",
      title: "Cost-tuned by design",
      body: "Model, hosting, and architecture choices sized to a small business — dollars a month, not hundreds.",
    },
  ],
  caseStudy: {
    eyebrow: "Case study",
    title: "Putting two Seattle vintage shops online without adding a data-entry job",
    items: [
      {
        label: "Challenge",
        body: "Bon Voyage Vintage ran inventory across two Seattle shops on paper and Square alone. One-of-one pieces were invisible online, impossible to reserve or cross-reference between locations — and a competitor was cybersquatting the shop's name in search.",
      },
      {
        label: "Approach",
        body: "A purpose-built store platform instead of an e-commerce template: AI photo-to-listing quick add on a tablet beside the register, \"Representative Looks\" for pieces that can't be reordered, printable QR price tags, and neighborhood walking maps marketing the shops' walkability. Browser speech-to-text with AI cleanup, flash-lite vision models, and SSR for search and AI-crawler visibility kept the stack cheap.",
      },
      {
        label: "Result",
        body: "A live storefront and staff tooling at both locations, one-of-one inventory discoverable and reservable, the brand name reclaimed in search, and AI plus hosting costs measured in a few dollars a month.",
      },
    ],
  },
  stats: [
    { value: "2 → 1", label: "Shops, one shared catalog" },
    { value: "Seconds", label: "Per listing, at the register" },
    { value: "$/mo", label: "Total AI & hosting cost" },
  ],
  cta: {
    title: "Is your storefront invisible online — or worse, outranked by someone else?",
    label: "Book a 30-min web presence review",
  },
};
