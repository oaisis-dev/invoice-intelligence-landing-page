type Tier = "md" | "lg";

type Chip = {
  label: string;
  className: string;
  /** Negative delay so the chip starts mid-cycle on page load. */
  delay: string;
  /** Total animation duration. 12–18s, varied per chip. */
  duration: string;
  /** Which of 4 drift keyframes to use. */
  variant: 1 | 2 | 3 | 4;
  /**
   * "md" = visible at 768+ (the four chips that hold the layout when
   * we drop to a tablet-sized viewport).
   * "lg" = visible at 1024+ only (filler chips that flesh out the
   * full eight-chip scatter on desktop).
   */
  tier: Tier;
  hasDot?: boolean;
};

/**
 * Eight chips, scattered across the wide left/right margins of the
 * hero. The centered content column is max-w-[1100px] inside a
 * max-w-[1400px] section, leaving the 4–18% bands on each side as
 * the chips' floating canvas.
 *
 * Variants are mixed so adjacent chips don't share keyframes; negative
 * delays put each chip at a different point in its cycle on load, so
 * the cumulative motion looks chaotic, not in-step.
 */
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
  return (
    <section className="relative w-full overflow-hidden bg-dawn">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-20 md:px-10 md:py-32">
        {/* Floating chips live in the wide canvas around the centered content. */}
        {chips.map((c) => (
          <Chip key={c.label} {...c} />
        ))}

        {/* Centered content column */}
        <div className="relative mx-auto flex max-w-[1100px] flex-col items-center text-center">
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
            style={{ animationDelay: "0.2s" }}
          >
            Restaurant365 and InfoSync break on real invoices. We don&rsquo;t.
            Read every invoice. Code every line item. Export clean to your GL.
          </p>

          {/* CTAs */}
          <div
            className="reveal mt-10 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="mailto:chris@useoptimalai.com?subject=Demo request"
              className="inline-flex items-center rounded-[10px] bg-ink px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-forest-bright"
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
            style={{ animationDelay: "0.4s" }}
          >
            Built for 5–50 location restaurant groups · Works with R365,
            InfoSync, custom GL
          </p>
        </div>
      </div>
    </section>
  );
}
