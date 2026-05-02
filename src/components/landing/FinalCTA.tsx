import { ScrollReveal } from "./ScrollReveal";

export function FinalCTA() {
  return (
    <section className="w-full bg-dawn-faint">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <h2 className="accent-underline text-ink">
              Run it on your invoices.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="mx-auto mt-6 max-w-[540px] text-[19px] leading-[1.5] text-ink-secondary">
              Free for 10 invoices a month. Sign up, forward your first invoice,
              and see your books update. No credit card.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300} className="mt-10">
            <a
              href="https://invoice-stg.openoaisis.com/sign-up"
              className="cta-primary inline-flex items-center rounded-[10px] bg-ink px-7 py-3 text-[15px] font-medium text-white"
            >
              Get started — free
            </a>
          </ScrollReveal>

          <p className="mt-4 text-[14px] text-ink-muted">
            Or{" "}
            <a
              href="https://invoice-stg.openoaisis.com/sign-up?plan=pro"
              className="underline transition-colors hover:text-ink-secondary"
            >
              upgrade straight to Pro — $100/location
            </a>
          </p>

          <p className="mt-6 text-[15px] text-ink-muted">
            Questions? Email{" "}
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
