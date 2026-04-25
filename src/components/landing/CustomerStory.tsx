import { SectionContainer, Eyebrow } from "./primitives";

export function CustomerStory() {
  return (
    <SectionContainer width="narrow" className="py-28 md:py-36">
      <div className="mx-auto max-w-[720px]">
        <Eyebrow className="mb-5 text-ink-muted">A RECENT ENGAGEMENT</Eyebrow>

        <h2 className="font-display text-ink">
          A 100+ location restaurant chain had a $200K monthly variance they
          couldn&rsquo;t close.
        </h2>

        <div className="mt-10 space-y-6 text-[17px] leading-[1.6] text-ink-secondary">
          <p>
            Their accountants spent hours at month-end trying to reconcile
            invoices their existing tools couldn&rsquo;t read accurately. The
            line items didn&rsquo;t match. The GL codes drifted. The books and
            the bank didn&rsquo;t agree&nbsp;&mdash; and nobody on the team
            could say exactly where the gap came from.
          </p>
          <p>
            The reason is structural. Restaurant365 and InfoSync&nbsp;&mdash;
            the incumbents in this space&nbsp;&mdash; rely on data dictionaries.
            Rigid, pre-mapped templates that work when an invoice matches the
            expected format and break when it doesn&rsquo;t. Real restaurant
            invoices don&rsquo;t match. Vendors change layouts without warning,
            line items shift position, formats vary across suppliers. Every miss
            becomes a manual reconciliation. At a hundred-plus locations, the
            misses compound into a six-figure monthly variance nobody has time to
            chase.
          </p>
          <p>
            We replaced the dictionary with OCR paired with a classification
            model that learns the chart of accounts and adapts to invoice
            variation&nbsp;&mdash; including the formats R365 and InfoSync
            can&rsquo;t read. Near-perfect capture on real-world invoices. The
            variance dropped by roughly half in the first months of the
            engagement and is still falling. Month-end stopped being a fire
            drill.
          </p>
        </div>

        <p className="mt-8 text-[19px] font-medium leading-[1.5] text-ink">
          If your current tool can&rsquo;t read a handwritten delivery ticket or
          a PDF with a new vendor logo, you already know where your variance
          comes from.
        </p>
      </div>
    </SectionContainer>
  );
}
