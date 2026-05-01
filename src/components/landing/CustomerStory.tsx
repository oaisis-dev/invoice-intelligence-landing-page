import { SectionContainer } from "./primitives";
import { ScrollReveal } from "./ScrollReveal";
import { CustomerStoryHeadline } from "./CustomerStoryHeadline";

export function CustomerStory() {
  return (
    <section className="w-full bg-canvas">
      <SectionContainer width="narrow" className="pt-32 pb-28 md:pt-40 md:pb-36">
        <div className="mx-auto max-w-[720px]">
          <ScrollReveal>
            <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-ink-muted">
              A recent engagement
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <CustomerStoryHeadline />
          </ScrollReveal>

          <div className="mt-10 space-y-6 text-[17px] leading-[1.55] text-ink-secondary">
            <ScrollReveal delay={200}>
              <p>
                Their accountants spent hours at month-end reconciling invoices
                their existing tools couldn&rsquo;t read. Line items
                didn&rsquo;t match. GL codes drifted. Books and bank disagreed
                by six figures and nobody could say where the gap came from.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p>
                The reason was structural. Restaurant365 and InfoSync — the
                incumbents — rely on data dictionaries. Rigid pre-mapped
                templates that work when invoices match the expected format
                and break when they don&rsquo;t. Real restaurant invoices
                don&rsquo;t match. Vendors change layouts. Line items shift.
                Formats vary across suppliers. Every miss becomes a manual
                reconciliation.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p>
                We replaced the dictionary with OCR plus a classification model
                that learns the chart of accounts and adapts to invoice
                variation. Near-perfect capture, including the formats R365
                and InfoSync can&rsquo;t read. The variance dropped by half in
                the first months and is still falling. Month-end stopped being
                a fire drill.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500} className="mt-8">
            <p className="accent-bar text-[19px] font-medium leading-[1.5] text-ink">
              If your current tool can&rsquo;t read a handwritten delivery
              ticket or a PDF with a new vendor logo, you already know where
              your variance comes from.
            </p>
          </ScrollReveal>
        </div>
      </SectionContainer>
    </section>
  );
}
