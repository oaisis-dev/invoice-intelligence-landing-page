import { Play } from "lucide-react";
import { SectionContainer } from "./primitives";
import { HeroProductDemo } from "./HeroProductDemo";

export function HeroSection() {
  return (
    <SectionContainer width="xl" className="pt-[140px] md:pt-[180px] pb-24">
      {/* Hero copy */}
      <div className="mx-auto flex max-w-[920px] flex-col items-center text-center">
        {/* Watch-demo pill */}
        <a
          href="#"
          className="group mb-10 inline-flex items-center gap-2 rounded-full border border-hairline bg-black/40 px-3.5 py-1.5 text-[12.5px] text-muted-strong backdrop-blur-sm transition-colors hover:bg-black/60 hover:text-foreground"
        >
          <span className="grid size-4 place-items-center rounded-full bg-white/10">
            <Play className="size-2.5 translate-x-[0.5px] fill-current" />
          </span>
          Watch the product tour
        </a>

        {/* Headline */}
        <h1 className="font-display text-[56px] sm:text-[72px] md:text-[88px] leading-[0.98] tracking-[-0.015em] text-foreground">
          One place for invoices
          <br />
          that works for you
        </h1>

        {/* Sub */}
        <p className="mt-7 max-w-[640px] text-[16px] leading-[1.55] text-muted">
          Invoice Intelligence centralizes AP workflows, approvals, document
          extraction, vendor context, and AI-driven follow-through — from received
          invoice to downloadable Excel directly into your ERP.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex h-11 items-center rounded-[12px] bg-foreground px-5 text-[14px] font-medium text-background transition-all hover:bg-white active:scale-[0.98]"
          >
            Get started
          </a>
          <a
            href="#"
            className="inline-flex h-11 items-center rounded-[12px] border border-hairline-strong bg-white/[0.03] px-5 text-[14px] font-medium text-foreground transition-colors hover:bg-white/[0.08]"
          >
            Talk to sales
          </a>
        </div>
      </div>

      {/* Hero product demo */}
      <div className="relative mt-20">
        {/* soft halo behind the demo */}
        <div
          aria-hidden
          className="absolute inset-x-10 -inset-y-10 rounded-[36px] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(106,164,255,0.22)_0%,rgba(106,164,255,0)_70%)] blur-2xl"
        />
        <HeroProductDemo />
      </div>
    </SectionContainer>
  );
}
