import {
  Benefit,
  ButtonLink,
  CtaBand,
  PageHeader,
  Section,
  SectionHead,
  ServiceCard,
  StatPlate,
  ThreeColumnStory,
  Wrap,
} from "./primitives";
import { practices } from "@/content/site";

export type ServicePageData = {
  slug: (typeof practices)[number]["to"];
  eyebrow: string;
  h1: string;
  lede: string;
  pillars: { num: string; title: string; body: string }[];
  caseStudy: {
    eyebrow: string;
    title: string;
    items: { label: string; body: string }[];
    link?: { to: string; label: string };
  };
  stats: { value: string; label: string }[];
  cta: { title: string; label: string };
  extra?: React.ReactNode;
};

export function ServicePage({ data }: { data: ServicePageData }) {
  const related = practices.filter((p) => p.to !== data.slug);

  return (
    <>
      <PageHeader eyebrow={data.eyebrow} title={data.h1} lede={data.lede} />

      <Section className="pt-0">
        <Wrap>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {data.pillars.map((p) => (
              <Benefit key={p.title} num={p.num} title={p.title} body={p.body} />
            ))}
          </div>
        </Wrap>
      </Section>

      {data.extra}

      <Section tone="paper-2">
        <Wrap>
          <SectionHead eyebrow={data.caseStudy.eyebrow} title={data.caseStudy.title} />
          <ThreeColumnStory items={data.caseStudy.items} />
          {data.caseStudy.link ? (
            <div className="mt-9">
              <ButtonLink to={data.caseStudy.link.to} variant="ghost">
                {data.caseStudy.link.label}
              </ButtonLink>
            </div>
          ) : null}
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <StatPlate stats={data.stats} />
        </Wrap>
      </Section>

      <Section tone="paper-2">
        <Wrap>
          <SectionHead eyebrow="Related practices" />
          <div className="grid gap-7 md:grid-cols-2">
            {related.map((p) => (
              <ServiceCard key={p.to} to={p.to} tag={p.tag} title={p.title} body={p.body} />
            ))}
          </div>
        </Wrap>
      </Section>

      <CtaBand eyebrow={data.eyebrow} title={data.cta.title} label={data.cta.label} />
    </>
  );
}
