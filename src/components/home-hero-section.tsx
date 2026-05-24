import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroProductScene } from "@/components/hero-product-scene";
import { Badge } from "@/components/ui/badge";
import { homeContent } from "@/content/site";

export function HomeHeroSection() {
  const hero = homeContent.hero;

  return (
    <section className="mx-auto flex min-h-[calc(100svh-6.75rem)] w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-0 sm:px-8 lg:px-10 lg:pb-20">
      <div className="grid flex-1 items-center gap-10 py-4 lg:grid-cols-[0.84fr_1.16fr] lg:py-6">
        <div>
          {hero.badge ? (
            <Badge className="border-[#f3e6dc]/12 bg-[#f6e8dc]/8 text-[#efe1d5]">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.badge}
            </Badge>
          ) : null}

          <h1 className="editorial-heading mt-6 max-w-3xl bg-[linear-gradient(135deg,#fbf3ee_0%,#ecd6c8_52%,#cad6e6_100%)] bg-clip-text font-heading text-4xl text-transparent sm:text-5xl lg:text-[4.4rem]">
            {hero.title}
          </h1>

          <p className="luxury-text mt-6 max-w-2xl text-base leading-7 font-light sm:text-lg">
            {hero.supportingText}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {hero.moments.map((moment) => (
              <Badge
                key={moment}
                className="border-white/8 bg-white/4 text-[#efe5dc]/70 normal-case tracking-[0.08em]"
              >
                {moment}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#f4e6db_0%,#e7d7cb_54%,#d8e3ef_100%)] px-6 py-3.5 text-sm font-semibold text-[#1b1418] transition hover:-translate-y-0.5"
            >
              {hero.primaryCtaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#ecosystem"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#f6eee8] transition hover:bg-white/9"
            >
              {hero.secondaryCtaLabel}
            </Link>
          </div>
        </div>

        <HeroProductScene />
      </div>
    </section>
  );
}
