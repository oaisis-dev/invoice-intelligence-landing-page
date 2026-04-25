import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Product } from "@/components/landing/Product";
import { Objections } from "@/components/landing/Objections";
import { Origin } from "@/components/landing/Origin";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Product />
        <Objections />
        <Origin />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
