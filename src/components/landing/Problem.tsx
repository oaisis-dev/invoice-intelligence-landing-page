import { SectionContainer } from "./primitives";

export function Problem() {
  return (
    <section className="w-full bg-surface-warm">
      <SectionContainer width="narrow" className="py-28 md:py-36">
        <div className="mx-auto max-w-[720px]">
          <h2 className="text-ink">
            You didn&rsquo;t hire a controller to do data entry.
          </h2>

          <div className="mt-10 space-y-6 text-[17px] leading-[1.55] text-ink-secondary">
            <p>
              At one location, AP runs on a spreadsheet and a calculator. At
              five, it cracks. At twenty, you have three full-time clerks
              re-keying line items into the same GL codes — and the close still
              slips by a week.
            </p>
            <p>
              The invoices come from everywhere. Vendor portals nobody monitors.
              PDF attachments in three different inboxes. Paper through the back
              door. EDI files that never get opened. Your AP team chases
              approvals and fixes coding mistakes while your CFO asks why
              margins won&rsquo;t move.
            </p>
          </div>

          <p className="mt-8 text-[19px] font-medium leading-[1.5] text-ink">
            This is the part that automates.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
