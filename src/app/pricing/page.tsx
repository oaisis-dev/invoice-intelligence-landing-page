import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingTable } from "@/components/pricing/PricingTable";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";

export const metadata = {
  title: "Pricing — Invoice Intelligence",
  description:
    "Simple, transparent pricing for restaurant operators. Start free with 10 invoices a month.",
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="bg-page">
        <PricingHero />
        <PricingTable />
        <PricingFAQ />
      </main>
      <Footer />
    </>
  );
}
