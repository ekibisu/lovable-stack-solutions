import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Benefit, Eyebrow, PageHeader, Section, Wrap, btnClass } from "@/components/site/primitives";
import { engagementSteps, site } from "@/content/site";
import { leadSchema, submitLead, type LeadInput } from "@/lib/leads.functions";

const title = `Book a 30-Minute Assessment — ${site.name}`;
const description =
  "Tell us about one manual process or legacy system. We'll tell you in 30 minutes whether it's worth automating or modernizing — and what it would take.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jabstechnicalconsulting.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://jabstechnicalconsulting.com/contact" }],
  }),
  component: Contact,
});

const interests: { value: LeadInput["interest"]; label: string }[] = [
  { value: "ai-automation", label: "AI & workflow automation" },
  { value: "cloud-devops", label: "Cloud & DevOps reliability" },
  { value: "modernization", label: "Modernization & full-stack" },
  { value: "web-development", label: "Web development & digital presence" },
  { value: "not-sure", label: "Not sure yet" },
];

const fieldClass =
  "w-full border border-line-soft bg-card px-3.5 py-2.5 font-sans text-[15px] text-ink outline-none transition-colors focus:border-markup focus:ring-2 focus:ring-markup/25";
const labelClass = "mb-2 block font-mono text-[11px] uppercase tracking-[0.06em] text-muted";

function Contact() {
  const send = useServerFn(submitLead);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const mutation = useMutation({
    mutationFn: (data: LeadInput) => send({ data }),
  });

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = leadSchema.safeParse({
      name: form.get("name") ?? "",
      email: form.get("email") ?? "",
      company: form.get("company") ?? "",
      interest: form.get("interest") ?? "not-sure",
      message: form.get("message") ?? "",
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    mutation.mutate(parsed.data);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Bring us one process that's still manual."
        lede="Thirty minutes, no slide deck. We'll ask what the process actually looks like today and tell you honestly whether it's worth automating."
      />

      <Section className="pt-0">
        <Wrap className="grid gap-14 md:grid-cols-[1.05fr_.95fr]">
          <div className="corners border border-line-soft bg-card p-8">
            {mutation.isSuccess ? (
              <div>
                <Eyebrow>Received</Eyebrow>
                <h2 className="mb-3 text-[24px]">Thanks — we've got it.</h2>
                <p className="text-muted">
                  We reply to every request within one business day, usually with two or three
                  specific questions about the process you described. If it's urgent, email{" "}
                  <a className="text-markup underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <Eyebrow>Assessment request</Eyebrow>
                <div className="grid gap-5">
                  <div>
                    <label className={labelClass} htmlFor="name">
                      Name
                    </label>
                    <input id="name" name="name" className={fieldClass} maxLength={100} required />
                    {errors["name"] ? (
                      <p className="mt-1.5 font-mono text-[12px] text-markup">{errors["name"]}</p>
                    ) : null}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={fieldClass}
                      maxLength={255}
                      required
                    />
                    {errors["email"] ? (
                      <p className="mt-1.5 font-mono text-[12px] text-markup">{errors["email"]}</p>
                    ) : null}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="company">
                      Company <span className="normal-case">(optional)</span>
                    </label>
                    <input id="company" name="company" className={fieldClass} maxLength={120} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="interest">
                      What's this about?
                    </label>
                    <select id="interest" name="interest" className={fieldClass} defaultValue="ai-automation">
                      {interests.map((i) => (
                        <option key={i.value} value={i.value}>
                          {i.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="message">
                      The process or system in question
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={2000}
                      className={fieldClass}
                      placeholder="What happens today, who does it, and roughly how much volume is involved."
                      required
                    />
                    {errors["message"] ? (
                      <p className="mt-1.5 font-mono text-[12px] text-markup">{errors["message"]}</p>
                    ) : null}
                  </div>

                  {mutation.isError ? (
                    <p className="border border-markup/40 bg-markup/5 px-3.5 py-2.5 font-mono text-[12px] text-markup">
                      Something went wrong sending that. Please email {site.email} or call {site.phone} instead.
                    </p>
                  ) : null}

                  <div>
                    <button
                      type="submit"
                      disabled={mutation.isPending}
                      className={btnClass("primary", "disabled:opacity-60")}
                    >
                      {mutation.isPending ? "Sending…" : "Request the assessment"}
                    </button>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.05em] text-muted">
                      One business day reply · No mailing list
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div>
            <Eyebrow>What happens next</Eyebrow>
            <h2 className="mb-6 text-[24px]">From first call to handoff.</h2>
            <div className="grid gap-8">
              {engagementSteps.map((s) => (
                <Benefit key={s.num} num={s.num} title={s.title} body={s.body} />
              ))}
            </div>
            <div className="corners mt-9 border border-line-soft p-6">
              <span className={labelClass}>Direct</span>
              <a className="block font-mono text-[15px] text-markup underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="mt-2 block font-mono text-[15px] text-markup underline" href={`tel:${site.phoneHref}`}>
                {site.phone}
              </a>
            </div>
          </div>
        </Wrap>
      </Section>
    </>
  );
}
