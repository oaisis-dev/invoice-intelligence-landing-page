import { SectionContainer } from "./primitives";

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-[12px] bg-[#E8E5DD] text-[15px] text-ink-muted"
      style={{ aspectRatio: "16 / 10" }}
    >
      {label} screenshot
    </div>
  );
}

export function Hero() {
  return (
    <section className="w-full bg-dot-grid">
      <SectionContainer width="xl" className="pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Copy */}
          <div>
            <h1
              className="reveal font-display text-ink"
            >
              Invoices, decided.
            </h1>
            <p
              className="reveal mt-6 max-w-[540px] text-[17px] leading-[1.6] text-ink-secondary"
              style={{ animationDelay: "0.1s" }}
            >
              Invoice Intelligence reads, codes, and routes every invoice your
              restaurant group receives — so your controller closes the books
              faster, with fewer people, and fewer mistakes.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="mailto:chris@useoptimalai.com?subject=Demo request"
                className="inline-flex items-center rounded-[8px] bg-forest px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-forest-hover"
              >
                Book a 15-minute demo
              </a>
              <a
                href="mailto:chris@useoptimalai.com?subject=See it on our invoices"
                className="inline-flex items-center rounded-[8px] border border-border-medium bg-transparent px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:border-ink"
              >
                See it on your invoices
              </a>
            </div>

            <p className="mt-6 text-[14px] text-ink-muted">
              Built for 5–50 location restaurant groups. Works with R365 and
              InfoSync.
            </p>
          </div>

          {/* Screenshot */}
          <div
            className="relative overflow-hidden rounded-[12px]"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <ScreenshotPlaceholder label="Dashboard" />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
