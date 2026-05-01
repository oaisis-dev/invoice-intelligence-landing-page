"use client";

import { useEffect, useRef } from "react";

type Tier = "md" | "lg";

type Chip = {
  label: string;
  className: string;
  delay: string;
  duration: string;
  variant: 1 | 2 | 3 | 4;
  tier: Tier;
  hasDot?: boolean;
};

const chips: Chip[] = [
  // LEFT SIDE (top → bottom)
  {
    label: "Sysco Foods",
    hasDot: true,
    tier: "md",
    className: "top-[18%] left-[8%]",
    variant: 1,
    duration: "14s",
    delay: "-8s",
  },
  {
    label: "Beef Tenderloin · $890.00",
    tier: "lg",
    className: "top-[38%] left-[4%]",
    variant: 3,
    duration: "16s",
    delay: "-4s",
  },
  {
    label: "GL: 5010-PROTEIN",
    tier: "md",
    className: "top-[62%] left-[12%]",
    variant: 2,
    duration: "13s",
    delay: "-11s",
  },
  {
    label: "Atlantic Salmon · $612.00",
    tier: "lg",
    className: "top-[82%] left-[6%]",
    variant: 4,
    duration: "15s",
    delay: "-2s",
  },
  // RIGHT SIDE (top → bottom)
  {
    label: "US Foods · INV-44218",
    hasDot: true,
    tier: "lg",
    className: "top-[22%] right-[6%]",
    variant: 2,
    duration: "17s",
    delay: "-6s",
  },
  {
    label: "Performance Food Group",
    hasDot: true,
    tier: "md",
    className: "top-[44%] right-[10%]",
    variant: 4,
    duration: "12s",
    delay: "-9s",
  },
  {
    label: "GL: 5020-PRODUCE",
    tier: "lg",
    className: "top-[66%] right-[4%]",
    variant: 1,
    duration: "18s",
    delay: "-3s",
  },
  {
    label: "Ben E. Keith · INV-92301",
    hasDot: true,
    tier: "md",
    className: "top-[84%] right-[8%]",
    variant: 3,
    duration: "14s",
    delay: "-7s",
  },
];

function Chip({ label, className, delay, duration, variant, tier, hasDot }: Chip) {
  const visibility =
    tier === "md" ? "hidden md:inline-flex" : "hidden lg:inline-flex";
  return (
    <div
      className={`float-chip float-chip-${variant} absolute ${visibility} items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-medium text-ink-secondary ${className}`}
      style={{
        animationDuration: duration,
        animationDelay: delay,
      }}
    >
      {hasDot ? (
        <span aria-hidden className="chip-dot inline-block" />
      ) : null}
      {label}
    </div>
  );
}

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Parallax: bg drifts at 0.15x scroll, chips at 0.25x, content at 0.4x.
  // Effects only run within the first viewport-height of scroll. Refs +
  // rAF avoid React re-renders during scroll.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      // Disable parallax on small viewports (mobile feels laggy).
      if (window.innerWidth < 768) {
        if (bgRef.current) bgRef.current.style.transform = "";
        if (chipsRef.current) chipsRef.current.style.transform = "";
        if (contentRef.current) contentRef.current.style.transform = "";
        return;
      }
      const cap = Math.min(window.scrollY, window.innerHeight);
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${cap * -0.15}px, 0)`;
      }
      if (chipsRef.current) {
        chipsRef.current.style.transform = `translate3d(0, ${cap * -0.25}px, 0)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${cap * -0.4}px, 0)`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background — parallax target. Sits behind everything. */}
      <div
        ref={bgRef}
        aria-hidden
        className="bg-dawn pointer-events-none absolute inset-0 -z-10"
        style={{ willChange: "transform" }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-20 md:px-10 md:py-32">
        {/* Floating chips — separate parallax layer so they drift slower
            than the headline but faster than the background. */}
        <div
          ref={chipsRef}
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ willChange: "transform" }}
        >
          {chips.map((c) => (
            <Chip key={c.label} {...c} />
          ))}
        </div>

        {/* Centered content — the deepest parallax layer. */}
        <div
          ref={contentRef}
          className="relative mx-auto flex max-w-[1100px] flex-col items-center text-center"
          style={{ willChange: "transform" }}
        >
          {/* Eyebrow + product pill */}
          <div className="reveal flex flex-col items-center gap-3">
            <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-ink-muted">
              Invoice Intelligence
            </span>
            <span className="inline-flex items-center rounded-full border border-border-subtle bg-white px-3 py-1 text-[12px] text-ink-secondary">
              An OAISIS product
            </span>
          </div>

          {/* Headline */}
          <h1
            className="reveal mt-10 max-w-[900px] text-ink"
            style={{ animationDelay: "0.1s" }}
          >
            AP automation built{" "}
            <span className="strike-word">for</span>{" "}
            <span className="text-ink">by</span> people who run restaurants.
          </h1>

          {/* Subheadline */}
          <p
            className="reveal mt-8 max-w-[580px] text-[19px] leading-[1.5] text-ink-secondary"
            style={{ animationDelay: "0.25s" }}
          >
            Restaurant365 and InfoSync break on real invoices. We don&rsquo;t.
            Read every invoice. Code every line item. Export clean to your GL.
          </p>

          {/* CTAs */}
          <div
            className="reveal mt-10 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="mailto:chris@useoptimalai.com?subject=Demo request"
              className="cta-primary inline-flex items-center rounded-[10px] bg-ink px-7 py-3 text-[15px] font-medium text-white"
            >
              Book a 15-minute demo
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-[10px] border border-border-medium bg-white px-7 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-mist"
            >
              See pricing
            </a>
          </div>

          {/* Trust line */}
          <p
            className="reveal mt-6 text-[13px] text-ink-muted"
            style={{ animationDelay: "0.55s" }}
          >
            Built for 5–50 location restaurant groups · Works with R365,
            InfoSync, custom GL
          </p>
        </div>
      </div>
    </section>
  );
}
