import { SectionContainer } from "./primitives";

const items = [
  {
    q: "Will it hallucinate and miscode my invoices?",
    a: "No. Every invoice runs through a verification step before it touches your books. Anything the system isn\u2019t 95%+ confident on lands in a review queue your team clears in seconds. You see what it did and why.",
  },
  {
    q: "Does it work with Restaurant365 and InfoSync?",
    a: "Yes. We export in both native formats, plus generic CSV for any GL. Setup takes about 20 minutes.",
  },
  {
    q: "What about weird vendor invoices? Handwritten, faxed, scanned?",
    a: "Those are exactly the ones we\u2019re built for. The system handles PDFs, images, scans, and email-body invoices. If a vendor sends it, we read it.",
  },
  {
    q: "How long is implementation?",
    a: "Most groups are processing live invoices within a week. We import your chart of accounts, connect your inbox, and run a parallel period against your existing process so you can verify before cutting over.",
  },
  {
    q: "What does it cost?",
    a: "$100 per location per month for our founding customers. No setup fees, no per-invoice charges, no tiering. A 12-location group pays $1,200 a month \u2014 less than half a clerk. Founding customer pricing is locked for the life of your account.",
  },
  {
    q: "What if it doesn\u2019t work for us?",
    a: "Run a 50-invoice pilot on your real data in your first week. If it doesn\u2019t beat your current process on speed and accuracy, you don\u2019t pay. We\u2019ll send the comparison report either way \u2014 at minimum you\u2019ll learn something about your AP workflow.",
  },
];

export function Objections() {
  return (
    <section id="pricing" className="w-full bg-surface-warm">
      <SectionContainer width="xl" className="py-28 md:py-36">
        <h2 className="mx-auto max-w-[800px] text-center font-display text-ink">
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
