import { SectionContainer } from "../landing/primitives";
import { ScrollReveal } from "../landing/ScrollReveal";

const items = [
  {
    q: "What counts as an invoice?",
    a: "Any document we process and post to your books — PDF, scan, email body, EDI, or photo. Failed processing doesn't count. Duplicates don't count. Only successful invoice processings count toward your monthly limit.",
  },
  {
    q: "What happens when I hit 10 invoices on the Free plan?",
    a: "Processing pauses until your next billing cycle, or you upgrade to Pro. We never silently overage-charge you on Free. You'll see clear notifications as you approach the limit.",
  },
  {
    q: "Why is Pro $100 per location?",
    a: "Most multi-unit operators run 5–50 locations. The math works because each additional location adds invoice volume that scales with our infrastructure. A 12-location group pays $1,200 a month — less than half a clerk.",
  },
  {
    q: "What does 'locked for life' mean?",
    a: "If you sign up as a founding customer, your $100/location/month price never changes — even after we exit founding pricing publicly. Adding more locations? Same per-location rate. Renewals? Same rate. Forever, as long as your account is active.",
  },
  {
    q: "Can I upgrade or downgrade?",
    a: "Yes. Upgrade from Free to Pro any time and we'll prorate. Downgrade from Pro to Free at the end of your billing cycle. Your data stays. Your settings stay.",
  },
  {
    q: "What's included in setup?",
    a: "On Pro: chart of accounts import, email inbox connection, vendor rule configuration, and a parallel period against your existing tool before cutover. Free is fully self-serve with built-in onboarding. Setup help on Pro is included — no separate fees.",
  },
];

export function PricingFAQ() {
  return (
    <section className="w-full bg-transparent">
      <SectionContainer width="xl" className="pt-20 pb-32 md:pt-28 md:pb-40">
        <ScrollReveal>
          <h2 className="accent-underline mx-auto max-w-[800px] text-center text-ink">
            Pricing questions answered.
          </h2>
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-[1100px] gap-x-12 gap-y-14 md:grid-cols-2">
          {items.map((item, i) => (
            <ScrollReveal key={item.q} delay={i * 50}>
              <h3 className="text-[19px] font-medium leading-[1.3] text-ink">
                {item.q}
              </h3>
              <p className="mt-3 max-w-[460px] text-[16px] leading-[1.6] text-ink-secondary">
                {item.a}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
