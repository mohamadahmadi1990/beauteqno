import { HomeHeroSection } from "@/components/home-hero-section";
import { InfrastructureSection } from "@/components/infrastructure-section";
import { IntegratedPillarsGrid } from "@/components/integrated-pillars-grid";
import { MarketingPageShell } from "@/components/marketing-page-shell";
import { SectionHeading } from "@/components/section-heading";
import { WaitlistSection } from "@/components/waitlist-section";
import { homeContent } from "@/content/site";

export default function Home() {
  return (
    <MarketingPageShell sectionClassName="pb-10">
      <HomeHeroSection />

      <section id="ecosystem" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          kicker={homeContent.integratedPillars.kicker}
          title={homeContent.integratedPillars.title}
          description={homeContent.integratedPillars.description}
          align="center"
        />

        <div className="mx-auto mt-8 max-w-4xl rounded-[1.6rem] border border-[#c9a35d]/18 bg-[#c9a35d]/5 px-6 py-6 text-center font-heading text-2xl leading-10 text-[#f4e5d7] sm:text-[2rem]">
          {homeContent.integratedPillars.quote}
        </div>

        <IntegratedPillarsGrid />
      </section>


      <InfrastructureSection />
      <WaitlistSection />
    </MarketingPageShell>
  );
}
