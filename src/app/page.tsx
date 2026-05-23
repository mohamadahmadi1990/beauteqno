import { ExperienceLoopSection } from "@/components/experience-loop-section";
import { HomeHeroSection } from "@/components/home-hero-section";
import { MarketingPageShell } from "@/components/marketing-page-shell";
import { ProductArchitectureGrid } from "@/components/product-architecture-grid";
import { SectionHeading } from "@/components/section-heading";
import { WaitlistSection } from "@/components/waitlist-section";
import { homeContent } from "@/content/site";

export default function Home() {
  return (
    <MarketingPageShell sectionClassName="pb-10">
      <HomeHeroSection />

      <section id="platform" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          kicker={homeContent.productArchitecture.kicker}
          title={homeContent.productArchitecture.title}
          description={homeContent.productArchitecture.description}
          align="center"
        />

        <ProductArchitectureGrid />
      </section>

      <ExperienceLoopSection />
      <WaitlistSection />
    </MarketingPageShell>
  );
}
