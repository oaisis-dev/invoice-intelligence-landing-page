import { SectionContainer, Eyebrow } from "./primitives";

export function Origin() {
  return (
    <SectionContainer width="narrow" className="py-28 md:py-36">
      <div className="mx-auto max-w-[680px]">
        <Eyebrow className="mb-5 text-ink-muted">WHY WE BUILT THIS</Eyebrow>

        <h2 className="font-display text-ink">
          My mother runs a restaurant in Dallas.
        </h2>

        <div className="mt-10 space-y-6 text-[17px] leading-[1.6] text-ink-secondary">
          <p>
            Perle Des Antilles is the only Haitian restaurant in the DFW
            metroplex. My mother built it from nothing and runs it with an
            attached Caribbean market that supplies half the Haitian community
            here with the food they grew up eating. One location. One small team.
            Real margins to protect.
          </p>
          <p>
            I watched her do AP at the kitchen counter. Invoices stacked next to a
            notebook. Vendor calls about double-billing she had no time to
            dispute. End-of-month scrambles where she&rsquo;d lose an entire
            Sunday to receipts and a calculator.
          </p>
          <p>
            If this is the pain at one location, what does it look like at five?
            At twenty? At fifty? I started asking restaurant operators that
            question and the answers were the same everywhere — three clerks, a
            missed close, a CFO they couldn&rsquo;t promote because she was
            buried in invoices.
          </p>
          <p>
            Invoice Intelligence is what we built for them. And for her.
          </p>
        </div>

        <p className="mt-10 text-right text-[15px] italic text-ink-muted">
          — Chris Cahill, Founder
        </p>
      </div>
    </SectionContainer>
  );
}
