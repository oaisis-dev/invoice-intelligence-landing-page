import { SectionContainer } from "./primitives";

const items = [
  {
    q: "Will it hallucinate and miscode my invoices?",
    a: "No. Every invoice runs a verification step before it touches your books. Anything below 95% confidence lands in a review queue your team clears in seconds. You see exactly what the system did and why.",
  },
  {
    q: "Does it actually work with R365 and InfoSync?",
    a: "Yes. Native exports for both, plus generic CSV for any GL. Setup takes about 20 minutes.",
  },
  {
    q: "What about handwritten, faxed, or weird vendor invoices?",
    a: "Those are exactly the ones we built this for. R365 and InfoSync break on format variation. We don’t. PDFs, scans, photos, email-body invoices — if a vendor sends it, we read it.",
  },
  {
    q: "How long is implementation?",
    a: "Most groups process live invoices within a week. We import your chart of accounts, connect your inbox, run a parallel period against your existing process, and you cut over when you’re satisfied.",
  },
  {
    q: "What does it cost?",
    a: "$100 per location per month for our founding customers. No setup fees. No per-invoice charges. No tiering. A 12-location group pays $1,200 a month — less than half a clerk. Founding customer pricing is locked for the life of your account.",
  },
  {
    q: "What if it doesn’t work for us?",
    a: "Run a 50-invoice pilot on your real data in your first week. If we don’t beat your current process on speed and accuracy, you don’t pay. Either way, we send the comparison report. At minimum you’ll learn something about where your AP workflow leaks.",
  },
];

export function Objections() {
  return (
    <section id="pricing" className="w-full bg-surface-warm">
      <SectionContainer width="xl" className="py-28 md:py-36">
        <h2 className="accent-underline mx-auto max-w-[800px] text-center text-ink">
          Yes, we thought of that.
        </h2>

        <div className="mx-auto mt-16 grid max-w-[1100px] gap-x-12 gap-y-14 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.q}>
              <h3 className="text-[19px] font-medium leading-[1.3] text-ink">
                {item.q}
              </h3>
              <p className="mt-3 max-w-[460px] text-[16px] leading-[1.6] text-ink-secondary">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
