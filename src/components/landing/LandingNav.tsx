"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const navItems = [
  { label: "Product", hasMenu: true },
  { label: "Solutions", hasMenu: true },
  { label: "Pricing", hasMenu: false },
  { label: "Developers", hasMenu: false },
  { label: "Careers", hasMenu: false },
];

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center gap-1 rounded-[20px] border border-hairline px-2 py-2 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,14,21,0.75)] backdrop-blur-2xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]"
            : "bg-[rgba(10,14,21,0.45)] backdrop-blur-xl"
        }`}
      >
        {/* Logomark */}
        <a
          href="#"
          className="group flex items-center gap-2 rounded-[14px] px-3 py-1.5 transition-colors hover:bg-white/5"
          aria-label="Invoice Intelligence home"
        >
          <Logomark />
          <span className="hidden sm:inline font-display text-[18px] leading-none text-foreground/95">
            Invoice Intelligence
          </span>
        </a>

        {/* Divider */}
        <span className="mx-1 h-5 w-px bg-hairline" aria-hidden />

        {/* Items */}
        <ul className="hidden md:flex items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                className="group flex items-center gap-1 rounded-[12px] px-3 py-2 text-[13.5px] text-muted-strong transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
                {item.hasMenu && (
                  <ChevronDown className="size-3.5 opacity-60 transition-transform group-hover:translate-y-[1px]" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <span className="mx-1 hidden md:block h-5 w-px bg-hairline" aria-hidden />

        {/* CTAs */}
        <div className="flex items-center gap-1 pl-1 pr-1">
          <a
            href="#"
            className="hidden sm:inline-flex items-center rounded-[12px] px-3 py-2 text-[13.5px] text-muted-strong transition-colors hover:bg-white/5 hover:text-foreground"
          >
            Log in
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-[12px] bg-foreground px-3.5 py-2 text-[13.5px] font-medium text-background transition-all hover:bg-white active:scale-[0.98]"
          >
            <Sparkles className="size-3.5" />
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}

function Logomark() {
  return (
    <span
      aria-hidden
      className="relative grid place-items-center size-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,#a4c8ff_0%,#4b7fd4_55%,#0c1626_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_16px_-8px_rgba(106,164,255,0.6)]"
    >
      <span className="absolute inset-[3px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.4)_0%,transparent_60%)]" />
    </span>
  );
}
