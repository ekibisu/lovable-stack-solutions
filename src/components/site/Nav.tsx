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
      className={`flex items-center gap-2.5 font-mono text-sm font-semibold tracking-[0.04em] ${onDark ? "text-paper" : ""}`}
    >
      <Mark onDark={onDark} />
      {site.short}
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    ...practices.map((p) => ({ to: p.to, label: p.short })),
    { to: "/case-studies", label: "Case Studies" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-paper-2 bg-paper/95 backdrop-blur-sm">
      <Wrap className="flex h-[76px] items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden gap-7 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-muted transition-colors hover:text-ink"
              activeProps={{ className: "text-ink" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className={btnClass("primary", "hidden md:inline-block")}>
            Book a call
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="border border-ink px-3 py-2 font-mono text-xs uppercase tracking-[0.05em] md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Wrap>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-paper-2 bg-paper md:hidden"
        >
          <Wrap className="flex flex-col py-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-paper-2 py-3 text-muted last:border-b-0"
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
