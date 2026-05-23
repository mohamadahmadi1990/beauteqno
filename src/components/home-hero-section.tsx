import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroProductScene } from "@/components/hero-product-scene";
import { Badge } from "@/components/ui/badge";
import { homeContent } from "@/content/site";

export function HomeHeroSection() {
  const hero = homeContent.hero;

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-4 sm:px-8 lg:px-10">
      <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[0.84fr_1.16fr] lg:py-10">
        <div>
          <Badge className="border-[#f3e6dc]/12 bg-[#f6e8dc]/8 text-[#efe1d5]">
            <Sparkles className="h-3.5 w-3.5" />
            {hero.badge}
          </Badge>

          <h1 className="editorial-heading mt-6 max-w-3xl font-heading text-4xl text-[#f7efe8] sm:text-5xl lg:text-[4.4rem]">
            {hero.title}
            <span className="mt-1 block bg-[linear-gradient(135deg,#fbf3ee_0%,#ecd6c8_48%,#cad6e6_100%)] bg-clip-text text-transparent">
              {hero.accentTitle}
            </span>
          </h1>

          <p className="luxury-text mt-4 max-w-xl text-base leading-7 sm:text-lg">
            {hero.description}
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
              href="#platform"
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
