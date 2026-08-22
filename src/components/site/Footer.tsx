import { Link } from "@tanstack/react-router";
import { practices, site } from "@/content/site";
import { Logo } from "./Nav";
import { Wrap, btnClass } from "./primitives";

const titleBlock = [
  { k: "Firm", v: site.name },
  { k: "Practice", v: "AI · Cloud · Modernization · Web" },
  { k: "Status", v: "Accepting new engagements" },
  { k: "Rev", v: "2026.08" },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-9 pt-16 text-paper">
      <Wrap>
        <div className="mb-12 grid gap-9 md:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="mb-4">
              <Logo onDark />
            </div>
            <p className="max-w-[260px] text-sm text-muted-dark">{site.tagline}</p>
          </div>
          <div>
            <h2 className="mb-3.5 font-mono text-xs uppercase tracking-[0.08em] text-muted-dark">
              Services
            </h2>
            {practices.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="mb-2.5 block text-sm text-muted-dark transition-colors hover:text-paper"
              >
                {p.title}
              </Link>
            ))}
          </div>
          <div>
            <h2 className="mb-3.5 font-mono text-xs uppercase tracking-[0.08em] text-muted-dark">
              Company
            </h2>
            <Link
              to="/case-studies/invoice-automation"
              className="mb-2.5 block text-sm text-muted-dark transition-colors hover:text-paper"
            >
              Case study
            </Link>
            <Link
              to="/about"
              className="mb-2.5 block text-sm text-muted-dark transition-colors hover:text-paper"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="mb-2.5 block text-sm text-muted-dark transition-colors hover:text-paper"
            >
              Contact
            </Link>
          </div>
          <div>
            <h2 className="mb-3.5 font-mono text-xs uppercase tracking-[0.08em] text-muted-dark">
              Start a project
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mb-4 block text-sm text-muted-dark transition-colors hover:text-paper"
            >
              {site.email}
            </a>
            <Link to="/contact" className={btnClass("onDark")}>
              Book a 30-min call
            </Link>
          </div>
        </div>

        <dl className="grid border border-line-soft font-mono text-xs md:grid-cols-4">
          {titleBlock.map((item) => (
            <div
              key={item.k}
              className="border-b border-line-soft px-4 py-3.5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <dt className="mb-1 text-[10px] uppercase tracking-[0.05em] text-muted-dark">
                {item.k}
              </dt>
              <dd className="text-paper">{item.v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2.5 border-t border-ink-3 pt-6 font-mono text-xs text-muted-dark">
          <span>© {new Date().getFullYear()} {site.name}, Inc.</span>
          <a href={`mailto:${site.email}`} className="hover:text-paper">
            {site.email}
          </a>
        </div>
      </Wrap>
    </footer>
  );
}
