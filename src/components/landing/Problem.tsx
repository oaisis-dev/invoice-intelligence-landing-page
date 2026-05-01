import { SectionContainer } from "./primitives";
import { ScrollReveal } from "./ScrollReveal";

export function Problem() {
  return (
    <section className="section-wash w-full bg-problem-halo">
      <SectionContainer width="narrow" className="pt-32 pb-28 md:pt-40 md:pb-36">
        <div className="mx-auto max-w-[720px]">
          <ScrollReveal>
            <h2 className="accent-underline text-ink">
              You didn&rsquo;t hire a controller to do data entry.
            </h2>
          </ScrollReveal>

          <div className="mt-10 space-y-6 text-[17px] leading-[1.55] text-ink-secondary">
            <ScrollReveal delay={100}>
              <p>
                At one location, AP runs on a spreadsheet and a calculator. At
                five, it cracks. At twenty, you have three full-time clerks
                re-keying line items into the same GL codes — and the close
                still slips by a week.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p>
                The invoices come from everywhere. Vendor portals nobody
                monitors. PDF attachments in three different inboxes. Paper
                through the back door. EDI files that never get opened. Your AP
                team chases approvals and fixes coding mistakes while your CFO
                asks why margins won&rsquo;t move.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300} className="mt-8">
            <p className="accent-bar text-[19px] font-medium leading-[1.5] text-ink">
              This is the part that automates.
            </p>
          </ScrollReveal>
        </div>
      </SectionContainer>
    </section>
  );
}
