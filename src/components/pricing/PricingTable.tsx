import type { ReactNode } from "react";
import { SectionContainer } from "../landing/primitives";
import { ScrollReveal } from "../landing/ScrollReveal";

function CheckIcon() {
  return (
    <span className="mt-[3px] inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-forest text-white">
      <svg
        viewBox="0 0 16 16"
        className="size-2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <polyline points="3 8 7 12 13 4" />
      </svg>
    </span>
  );
}

function PricingCard({
  eyebrow,
  eyebrowAccent,
  planName,
  price,
  per,
  tagline,
  features,
  ctaLabel,
  ctaHref,
  highlighted,
  delay,
}: {
  eyebrow: string;
  eyebrowAccent?: boolean;
  planName: string;
  price: string;
  per: string;
  tagline: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  delay: number;
}) {
  return (
    <ScrollReveal
      delay={delay}
      className={`bento-cell flex flex-col rounded-[16px] border border-border-subtle p-8 md:p-10 ${
        highlighted ? "pricing-card-highlighted" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-medium uppercase tracking-[0.08em] ${
            eyebrowAccent
              ? "bg-mist text-forest"
              : "text-ink-muted"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      <h2 className="mt-5 text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
        {planName}
      </h2>

      <div className="mt-6 flex items-end gap-2">
        <span className="text-[56px] font-bold leading-[1] tracking-[-0.03em] text-ink">
          {price}
        </span>
        <span className="pb-2 text-[14px] text-ink-muted">{per}</span>
      </div>

      <p className="mt-3 text-[15px] leading-[1.5] text-ink-secondary">
        {tagline}
      </p>

      <ul className="mt-8 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[15px] text-ink-secondary">
            <CheckIcon />
            <span className="leading-[1.5]">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <a
          href={ctaHref}
          className={`cta-primary flex w-full items-center justify-center rounded-[10px] px-7 py-3 text-[15px] font-medium transition-colors ${
            highlighted
              ? "bg-forest text-white"
              : "bg-ink text-white"
          }`}
        >
          {ctaLabel}
        </a>
      </div>
    </ScrollReveal>
  );
}

function MostPopularBadge({ children }: { children: ReactNode }) {
  return (
    <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-forest bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-forest shadow-sm">
      {children}
    </span>
  );
}

export function PricingTable() {
  return (
    <section className="w-full bg-transparent">
      <SectionContainer width="xl" className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-2">
          <PricingCard
            delay={0}
            eyebrow="Free"
            planName="Start Free"
            price="$0"
            per="/month"
            tagline="10 invoices per month. No credit card required."
            features={[
              "10 invoices per month, refills monthly",
              "Email and PDF intake",
              "Excel export",
              "One location",
              "Community support",
            ]}
            ctaLabel="Start free"
            ctaHref="https://invoice-stg.openoaisis.com/sign-up"
          />

          <div className="relative">
            <MostPopularBadge>Most popular</MostPopularBadge>
            <PricingCard
              delay={100}
              eyebrow="Founding customer"
              eyebrowAccent
              planName="Pro"
              price="$100"
              per="per location / month"
              tagline="Unlimited invoices. Locked for life."
              features={[
                "Unlimited invoices",
                "Email and PDF intake",
                "All export formats (R365, InfoSync, NetSuite, QuickBooks, CSV)",
                "Unlimited locations",
                "Vendor rule customization",
                "Priority support",
                "Founding customer pricing locked for life",
              ]}
              ctaLabel="Start with Pro"
              ctaHref="https://invoice-stg.openoaisis.com/sign-up?plan=pro"
              highlighted
            />
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[700px] text-center text-[15px] text-ink-muted">
          Need a custom plan for 50+ locations?{" "}
          <a
            href="mailto:chris@useoptimalai.com"
            className="underline transition-colors hover:text-ink"
          >
            chris@useoptimalai.com
          </a>
        </p>
      </SectionContainer>
    </section>
  );
}
