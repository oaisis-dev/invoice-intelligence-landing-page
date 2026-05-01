import { ScrollReveal } from "./ScrollReveal";

export function FinalCTA() {
  return (
    <section className="w-full bg-dawn-faint">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <h2 className="accent-underline text-ink">
              See it on your invoices.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="mx-auto mt-6 max-w-[540px] text-[19px] leading-[1.5] text-ink-secondary">
              15 minutes. We process 10 of your real invoices live on the call.
              You decide if it&rsquo;s worth a pilot.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300} className="mt-10">
            <a
              href="mailto:chris@useoptimalai.com?subject=Demo request"
              className="cta-primary inline-flex items-center rounded-[10px] bg-ink px-7 py-3 text-[15px] font-medium text-white"
            >
              Book a demo
            </a>
          </ScrollReveal>

          <p className="mt-6 text-[15px] text-ink-muted">
            Or email{" "}
            <a
              href="mailto:chris@useoptimalai.com"
              className="underline transition-colors hover:text-ink-secondary"
            >
              chris@useoptimalai.com
            </a>{" "}
            — I read every one.
          </p>
        </div>
      </div>
    </section>
  );
}
