export function PricingHero() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      {/* Subtler dawn atmosphere — half saturation since this isn't the page entry. */}
      <div
        aria-hidden
        className="bg-pricing-dawn pointer-events-none absolute inset-0 z-0"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          <span
            className="reveal text-[13px] font-medium uppercase tracking-[0.06em] text-ink-muted"
          >
            Pricing
          </span>

          <h1
            className="reveal mt-6 max-w-[900px] text-ink"
            style={{ animationDelay: "0.1s" }}
          >
            Built for the operator&rsquo;s economics.
          </h1>

          <p
            className="reveal mt-8 max-w-[580px] text-[19px] leading-[1.5] text-ink-secondary"
            style={{ animationDelay: "0.25s" }}
          >
            Free to start. $100 per location for founding customers. Locked for
            the life of your account. No setup fees, no per-invoice charges, no
            tiering surprises.
          </p>
        </div>
      </div>
    </section>
  );
}
