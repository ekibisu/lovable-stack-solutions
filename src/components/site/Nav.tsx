import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
      className={`flex items-center gap-2.5 font-mono ${onDark ? "text-paper" : ""}`}
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

const linkBase = "relative py-1 text-[15px] text-muted transition-colors hover:text-ink";
const activeMarker =
  "text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[1.5px] after:bg-markup after:content-['']";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!services) return;
    function onDoc(e: MouseEvent) {
      if (!servicesRef.current?.contains(e.target as Node)) setServices(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setServices(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [services]);

  return (
    <header className="sticky top-0 z-20 border-b border-paper-2 bg-paper/95 backdrop-blur-sm">
      <Wrap className="flex h-[76px] items-center justify-between gap-8">
        <Logo />
        <div className="flex items-center gap-8">
          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServices(true)}
              onMouseLeave={() => setServices(false)}
            >
              <button
                type="button"
                aria-expanded={services}
                onClick={() => setServices((v) => !v)}
                className={`${linkBase} flex items-center gap-1.5`}
              >
                Services
                <span aria-hidden className="text-[10px]">
                  ▾
                </span>
              </button>
              {services ? (
                <div className="absolute left-0 top-full z-30 w-64 border border-paper-2 bg-paper shadow-sm">
                  {practices.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      onClick={() => setServices(false)}
                      className="block border-b border-paper-2 px-4 py-3 text-[15px] text-muted transition-colors last:border-b-0 hover:bg-paper-2/60 hover:text-ink"
                      activeProps={{ className: "text-ink" }}
                    >
                      {p.short}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            <Link
              to="/case-studies"
              className={linkBase}
              activeProps={{ className: activeMarker }}
            >
              Case Studies
            </Link>
            <Link to="/about" className={linkBase} activeProps={{ className: activeMarker }}>
              About
            </Link>
          </nav>
          <Link to="/contact" className={btnClass("primary", "hidden lg:inline-block")}>
            Book a call
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="border border-ink px-3 py-2 font-mono text-xs uppercase tracking-[0.05em] lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Wrap>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-paper-2 bg-paper lg:hidden"
        >
          <Wrap className="flex flex-col py-4">
            <button
              type="button"
              aria-expanded={mobileServices}
              onClick={() => setMobileServices((v) => !v)}
              className="flex items-center justify-between border-b border-paper-2 py-3 text-left text-muted"
            >
              Services
              <span aria-hidden className="text-[10px]">
                {mobileServices ? "▴" : "▾"}
              </span>
            </button>
            {mobileServices ? (
              <div className="flex flex-col">
                {practices.map((p) => (
                  <Link
                    key={p.to}
                    to={p.to}
                    onClick={() => setOpen(false)}
                    className="border-b border-paper-2 py-3 pl-4 text-[15px] text-muted"
                  >
                    {p.short}
                  </Link>
                ))}
              </div>
            ) : null}
            <Link
              to="/case-studies"
              onClick={() => setOpen(false)}
              className="border-b border-paper-2 py-3 text-muted"
            >
              Case Studies
            </Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-3 text-muted">
              About
            </Link>
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
