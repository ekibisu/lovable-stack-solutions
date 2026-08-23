import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { practices, site } from "@/content/site";
import { Wrap, btnClass } from "./primitives";

function Mark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      aria-hidden
      className={`relative block size-5 shrink-0 border-[1.5px] ${onDark ? "border-paper" : "border-ink"} before:absolute before:inset-1 before:border before:border-markup before:content-['']`}
    />
  );
}

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      to="/"
      aria-label={site.name}
      className={`flex items-center gap-2.5 font-mono ${onDark ? "text-paper" : "text-ink"}`}
    >
      <Mark onDark={onDark} />
      <span className="flex flex-col leading-none">
        <span className="text-base font-semibold tracking-[0.12em]">JABS</span>
        <span
          className={`mt-1 text-[10px] font-medium tracking-[0.22em] ${onDark ? "text-paper/70" : "text-muted"}`}
        >
          TECHNICAL CONSULTING
        </span>
      </span>
    </Link>
  );
}

const navLink =
  "relative py-1 text-[15px] font-medium text-ink-2 transition-colors hover:text-markup after:absolute after:inset-x-0 after:-bottom-1 after:h-[1.5px] after:bg-markup after:opacity-0 after:transition-opacity after:content-[''] hover:after:opacity-100";
const navLinkActive = "text-markup after:opacity-100";

export function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    ...practices.map((p) => ({ to: p.to, label: p.short })),
    { to: "/case-studies", label: "Case Studies" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-paper-2 bg-paper/95 backdrop-blur-sm">
      <Wrap className="flex h-20 items-center justify-between">
        <Logo />
        <div className="flex items-center">
          <span aria-hidden className="mx-12 hidden h-8 w-px bg-paper-2 xl:block" />
          <nav aria-label="Main" className="hidden items-center gap-8 xl:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={navLink}
                activeProps={{ className: navLinkActive }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className={btnClass("primary", "ml-10 hidden xl:inline-block")}>
            Book a call
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="border border-ink px-3 py-2 font-mono text-xs uppercase tracking-[0.05em] xl:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Wrap>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-paper-2 bg-paper xl:hidden"
        >
          <Wrap className="flex flex-col py-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-paper-2 py-3 text-[15px] font-medium text-ink-2 last:border-b-0"
                activeProps={{ className: "text-markup" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={btnClass("primary", "mt-4 text-center")}
            >
              Book a call
            </Link>
          </Wrap>
        </nav>
      ) : null}
    </header>
  );
}
