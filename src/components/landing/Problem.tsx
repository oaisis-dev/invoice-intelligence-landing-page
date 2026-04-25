import { SectionContainer, Eyebrow } from "./primitives";

export function Problem() {
  return (
    <section className="w-full bg-surface-warm">
      <SectionContainer width="narrow" className="py-28 md:py-36">
        <div className="mx-auto max-w-[720px]">
          <Eyebrow className="mb-5 text-ink-muted">
            WHAT BREAKS AT 5 LOCATIONS
          </Eyebrow>

          <h2 className="font-display text-ink">
            You didn&rsquo;t hire a controller to do data entry.
          </h2>

          <div className="mt-10 space-y-6 text-[17px] leading-[1.6] text-ink-secondary">
            <p>
              At one location, AP runs on a spreadsheet and goodwill. At five, it
              starts to crack. At twenty, it&rsquo;s three full-time clerks
              re-keying the same line items into the same GL codes day after day,
              and the close still slips by a week.
            </p>
            <p>
              The invoices arrive everywhere — vendor portals, email attachments,
              paper through the back door, EDI files nobody opens. Your AP team
              chases approvals, fixes coding mistakes, and reconciles the same
              vendor disputes every month. Meanwhile, you keep adding headcount as
              you add locations, and your CFO keeps asking why margins won&rsquo;t
              move.
            </p>
          </div>

          <p className="mt-8 text-[19px] font-medium leading-[1.5] text-ink">
            This is the part you automate.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
