import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Wrap({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1120px] px-6 md:px-8", className)}>{children}</div>;
}

export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em]",
        onDark ? "text-accent-dark" : "text-markup",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("h-px w-[18px]", onDark ? "bg-accent-dark" : "bg-markup")}
      />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  onDark = false,
}: {
  eyebrow?: string;
  title?: string;
  lede?: string;
  onDark?: boolean;
}) {
  return (
    <div className="mb-12 max-w-[640px]">
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      {title ? (
        <h2 className={cn("mb-4 text-[26px] md:text-[32px]", onDark && "text-paper")}>{title}</h2>
      ) : null}
      {lede ? <p className={onDark ? "text-muted-dark" : "text-muted"}>{lede}</p> : null}
    </div>
  );
}

export function Section({
  children,
  tone = "paper",
  className,
  id,
}: {
  children: ReactNode;
  tone?: "paper" | "paper-2" | "blueprint";
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20",
        tone === "paper-2" && "bg-paper-2",
        tone === "blueprint" && "blueprint",
        className,
      )}
    >
      {children}
    </section>
  );
}

const btnBase =
  "inline-block cursor-pointer border px-5 py-3 font-mono text-[13px] uppercase tracking-[0.03em] transition-colors";

const btnVariants = {
  primary: "border-markup bg-markup text-paper hover:border-markup-dark hover:bg-markup-dark",
  ghost: "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
  onDark: "border-line text-paper hover:bg-line hover:text-ink",
} as const;

export type BtnVariant = keyof typeof btnVariants;

export function btnClass(variant: BtnVariant = "primary", className?: string) {
  return cn(btnBase, btnVariants[variant], className);
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: BtnVariant }) {
  return <Link {...props} className={btnClass(variant, className)} />;
}

export function StatPlate({
  stats,
  onDark = false,
}: {
  stats: { value: string; label: string }[];
  onDark?: boolean;
}) {
  return (
    <dl
      className={cn(
        "corners grid border border-line-soft",
        stats.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3",
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="border-b border-line-soft px-6 py-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
        >
          <dd
            className={cn(
              "font-display text-[38px] leading-none",
              onDark ? "text-accent-dark" : "text-markup",
            )}
          >
            {stat.value}
          </dd>
          <dt
            className={cn(
              "mt-2 font-mono text-[11px] uppercase tracking-[0.05em]",
              onDark ? "text-muted-dark" : "text-muted",
            )}
          >
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}

export function Benefit({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <span className="mb-3 block font-mono text-[13px] text-markup">{num}</span>
      <h3 className="mb-2 text-[19px]">{title}</h3>
      <p className="text-muted">{body}</p>
    </div>
  );
}

export function ServiceCard({
  to,
  tag,
  title,
  body,
  cta = "View the practice →",
}: {
  to: ComponentProps<typeof Link>["to"];
  tag: string;
  title: string;
  body?: string;
  cta?: string;
}) {
  return (
    <Link
      to={to}
      className="corners block border border-paper-2 bg-card px-7 py-8 transition-[border-color,transform] hover:-translate-y-[3px] hover:border-ink"
    >
      <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        {tag}
      </span>
      <h3 className="mb-2 text-[19px]">{title}</h3>
      {body ? <p className="text-muted">{body}</p> : null}
      <span className="mt-[18px] inline-block font-mono text-[13px] text-markup">{cta}</span>
    </Link>
  );
}

export function ThreeColumnStory({
  items,
}: {
  items: { label: string; body: string }[];
}) {
  return (
    <div className="grid gap-9 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <h3 className="mb-2 font-mono text-[13px] uppercase tracking-[0.06em] text-markup">
            {item.label}
          </h3>
          <p className="text-muted">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
  tag,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  tag?: string;
}) {
  return (
    <section className="pb-9 pt-14">
      <Wrap>
        {tag ? (
          <span className="mb-[18px] inline-block border border-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.05em]">
            {tag}
          </span>
        ) : null}
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="mb-3.5 max-w-[860px] text-[34px] md:text-[46px]">{title}</h1>
        <p className="max-w-[640px] text-[19px] text-muted">{lede}</p>
      </Wrap>
    </section>
  );
}

export function CtaBand({
  eyebrow,
  title,
  body,
  label = "Book a 30-min assessment",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  label?: string;
}) {
  return (
    <section className="blueprint py-20 text-center">
      <Wrap>
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <h2 className="mx-auto mb-7 max-w-[580px] text-[26px] text-paper md:text-[32px]">{title}</h2>
        {body ? <p className="mx-auto mb-7 max-w-[560px] text-muted-dark">{body}</p> : null}
        <ButtonLink to="/contact" variant="primary">
          {label}
        </ButtonLink>
      </Wrap>
    </section>
  );
}
