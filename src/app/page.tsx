import { AtmosphericBackground } from "@/components/landing/AtmosphericBackground";
import { LandingNav } from "@/components/landing/LandingNav";
import { HeroSection } from "@/components/landing/HeroSection";
import { LogoRow } from "@/components/landing/LogoRow";
import { EverythingSection } from "@/components/landing/EverythingSection";
import { AssistantFeatureSection } from "@/components/landing/AssistantFeatureSection";
import { AutomationSection } from "@/components/landing/AutomationSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { ContextGraphSection } from "@/components/landing/ContextGraphSection";
import { DeveloperSection } from "@/components/landing/DeveloperSection";
import { ScaleSection } from "@/components/landing/ScaleSection";
import { FooterPlaceholder } from "@/components/landing/FooterPlaceholder";

export default function Home() {
  return (
    <div className="relative isolate">
      <AtmosphericBackground />

      <LandingNav />

      <main className="relative z-10">
        <HeroSection />
        <LogoRow />
        <EverythingSection />
        <AssistantFeatureSection />
        <AutomationSection />
        <TestimonialSection />
        <ContextGraphSection />
        <DeveloperSection />
        <ScaleSection />
        <FooterPlaceholder />
      </main>
    </div>
  );
}
