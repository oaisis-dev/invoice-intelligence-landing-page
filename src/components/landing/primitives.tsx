import type { ReactNode, HTMLAttributes } from "react";

/**
 * Consistent max-width system:
 *   narrow  ~ 900px   — text-heavy sections
 *   default ~ 1120px  — hero copy, most content
 *   wide    ~ 1280px  — feature grids
 *   xl      ~ 1400px  — large visual sections
 */
type Width = "narrow" | "default" | "wide" | "xl";

const widthMap: Record<Width, string> = {
  narrow: "max-w-[900px]",
  default: "max-w-[1120px]",
  wide: "max-w-[1280px]",
  xl: "max-w-[1400px]",
};

export function SectionContainer({
  children,
  width = "default",
  className = "",
  as: As = "section",
  id,
}: {
  children: ReactNode;
  width?: Width;
  className?: string;
  as?: "section" | "div" | "header" | "footer";
  id?: string;
}) {
  return (
    <As id={id} className={`relative w-full px-6 md:px-10 ${className}`}>
      <div className={`${widthMap[width]} mx-auto`}>{children}</div>
    </As>
  );
}

/**
 * Thin section label — small caps-like eyebrow used above some headings.
 */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * Display heading (serif) — Section-level H2s.
 */
export function DisplayHeading({
  children,
  className = "",
  as: As = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <As
      className={`font-display text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.01em] text-foreground ${className}`}
    >
      {children}
    </As>
  );
}

/**
 * A card with glass treatment — used extensively.
 */
export function GlowPanel({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={`relative rounded-[24px] border border-hairline bg-white/[0.025] backdrop-blur-xl
      before:pointer-events-none before:absolute before:inset-0 before:rounded-[24px]
      before:bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.01)_40%,rgba(255,255,255,0)_100%)]
      after:pointer-events-none after:absolute after:-inset-px after:rounded-[25px]
      after:ring-1 after:ring-inset after:ring-white/[0.04] ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * A faint inline bullet / separator dot.
 */
export function Dot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block size-1 rounded-full bg-muted/50 ${className}`}
    />
  );
}
