import { SectionContainer } from "./primitives";

/**
 * Cinematic testimonial band. Moonlit horizon, star speckle, large serif quote.
 * Full-width bleed — breaks out of the normal section padding system.
 */
export function TestimonialSection() {
  return (
    <section className="relative my-20 overflow-hidden">
      {/* bleed visual */}
      <div className="relative min-h-[560px] bg-moonfield">
        {/* stars layered on top */}
        <div className="absolute inset-0 bg-stars opacity-60" />

        {/* moon glow — off-center */}
        <div className="absolute -top-20 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,232,255,0.22)_0%,rgba(220,232,255,0)_60%)] blur-2xl" />

        {/* grass/horizon silhouette */}
        <div className="absolute inset-x-0 bottom-0 h-[160px] bg-[linear-gradient(to_top,#030507_0%,transparent_100%)]" />
        <svg
          aria-hidden
          viewBox="0 0 1400 160"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-[160px] w-full opacity-80"
        >
          <defs>
            <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0c1a24" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#030608" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0 70 C 180 40, 320 100, 520 72 C 720 48, 860 110, 1080 78 C 1260 52, 1340 100, 1400 80 L1400 160 L0 160 Z"
            fill="url(#grass)"
          />
        </svg>

        {/* content */}
        <SectionContainer width="wide" className="relative z-10 flex min-h-[560px] items-center pt-24 pb-32">
          <div className="max-w-[820px]">
            <blockquote className="font-display text-[36px] sm:text-[44px] md:text-[54px] leading-[1.1] tracking-[-0.015em] text-foreground">
              <span className="text-muted/80">&ldquo;</span>
              I used to spend half my day bouncing between email,
              spreadsheets, PDFs, Slack, and our ERP. Now Invoice Intelligence
              keeps the work organized, follows up automatically, and surfaces
              exactly what needs my attention.
              <span className="text-muted/80">&rdquo;</span>
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              <div className="grid size-11 place-items-center rounded-full bg-[linear-gradient(135deg,#a7c7ff_0%,#3a5fa0_100%)] text-[14px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                MC
              </div>
              <div className="text-[14px]">
                <div className="font-semibold text-foreground">Maya Chen</div>
                <div className="text-muted">Head of AP &middot; Relay Commerce</div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  );
}
