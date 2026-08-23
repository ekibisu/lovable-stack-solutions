export const site = {
  name: "JABS Technical Consulting",
  short: "JABS TECHNICAL CONSULTING",
  email: "hello@jabstechnicalconsulting.com",
  tagline:
    "We eliminate manual operations work and modernize legacy systems for operations-heavy and regulated businesses — from enterprise logistics, healthcare, and finance platforms to local shops and field-service trades. 80% less manual invoice entry, proven in production.",
} as const;

export const practices = [
  {
    to: "/services/ai-automation",
    tag: "Practice 01",
    title: "AI & workflow automation",
    short: "AI Automation",
    body: "Document intake, extraction, validation, and approval — automated, with people still signing off.",
  },
  {
    to: "/services/cloud-devops",
    tag: "Practice 02",
    title: "Cloud & DevOps reliability",
    short: "Cloud & DevOps",
    body: "Architecture, IaC, CI/CD, and security review, with a prioritized 30/60/90-day plan.",
  },
  {
    to: "/services/modernization",
    tag: "Practice 03",
    title: "Modernization & full-stack engineering",
    short: "Modernization",
    body: "Legacy systems, APIs, and databases modernized in phases, on whatever stack you already run — no risky rewrites.",
  },
  {
    to: "/services/web-development",
    tag: "Practice 04",
    title: "Web development & digital presence",
    short: "Web Development",
    body: "Websites and internet-facing business applications for walk-in-first businesses — built around how the shop actually runs.",
  },
] as const;

export const engagements = [
  {
    num: "Shape 01",
    title: "Automation assessment — 2 weeks",
    body: "We map one manual process end to end, prototype the extraction, and hand you a build estimate with an honest go/no-go. A fixed two-week engagement, credited against the build if you move forward.",
  },
  {
    num: "Shape 02",
    title: "Reliability review — 30/60/90 plan",
    body: "Architecture, security, IaC, CI/CD, and cost reviewed, then ranked by impact into a plan your team can execute. A fixed-scope review, typically wrapped inside three weeks.",
  },
  {
    num: "Shape 03",
    title: "Phased build & modernization",
    body: "Monthly engagement for the actual work: pipelines, migrations, services, front ends. Scoped in shippable phases, each one estimated and approved before it starts.",
  },
  {
    num: "Shape 04",
    title: "Web presence build — phased launch",
    body: "A public site and the internet-facing tools behind it, launched in phases — starting with what customers see first, with reservations, inventory, or booking added once the foundation is live. Each phase estimated and approved before it starts.",
  },
] as const;


export const engagementSteps = [
  {
    num: "01",
    title: "Assessment",
    body: "A 30-minute call, then a short paid assessment on one real process. You get the findings whether or not you hire us for the build.",
  },
  {
    num: "02",
    title: "Scoped pilot",
    body: "One narrow slice shipped to production behind human review, so the value is measurable before the budget grows.",
  },
  {
    num: "03",
    title: "Phased build",
    body: "We expand coverage in phases you can ship safely — no freeze on the systems your business runs on.",
  },
  {
    num: "04",
    title: "Handoff",
    body: "Documentation, infrastructure-as-code, and runbooks handed to your team. We stay only as long as you need us.",
  },
] as const;
