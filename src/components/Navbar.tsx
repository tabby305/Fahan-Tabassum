"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      const marker = window.scrollY + 140;
      let current = "";

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= marker) current = link.id;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label="Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line font-mono text-xs tracking-wider text-foreground transition-colors duration-300 group-hover:border-muted-foreground">
            FT
          </span>
          <span className="hidden text-sm tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:block">
            {profile.fullName}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-md px-3 py-2 font-mono text-xs tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={`mailto:${profile.email}`}
            className="ml-3 rounded-md border border-line px-4 py-2 font-mono text-xs tracking-wider text-muted-foreground transition-colors duration-300 hover:border-muted-foreground hover:text-foreground"
          >
            Email
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted-foreground transition-colors duration-300 hover:text-foreground md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="relative block h-3 w-4">
            <span
              className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background md:hidden"
      >
        <div className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 font-mono text-sm tracking-wider text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="mt-4 rounded-md border border-line px-4 py-3 text-center font-mono text-sm tracking-wider text-muted-foreground transition-colors duration-300 hover:border-muted-foreground hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
