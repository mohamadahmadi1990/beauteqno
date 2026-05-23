import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { MarketingPageShell } from "@/components/marketing-page-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { aboutContent } from "@/content/site";

export const metadata: Metadata = {
  title: aboutContent.metadata.title,
  description: aboutContent.metadata.description,
};

export default function AboutPage() {
  return (
    <MarketingPageShell headerCtaHref="/contact" headerCtaLabel="Contact us">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center py-12">
        <Badge className="w-fit border-[#f3e6dc]/12 bg-[#f6e8dc]/8 text-[#efe1d5]">
          <Sparkles className="h-3.5 w-3.5" />
          {aboutContent.badge}
        </Badge>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="editorial-heading max-w-4xl font-heading text-4xl text-[#f7efe8] sm:text-5xl lg:text-[4.25rem]">
              {aboutContent.title}
            </h1>
            <p className="luxury-text mt-6 max-w-2xl text-lg leading-8">
              {aboutContent.intro}
            </p>
            <p className="luxury-text mt-4 max-w-2xl text-base leading-7">
              {aboutContent.body}
            </p>
          </div>

          <Card className="p-8">
            <p className="section-kicker">{aboutContent.pointOfView.kicker}</p>
            <h2 className="mt-4 font-heading text-3xl font-medium text-[#f7efe8]">
              {aboutContent.pointOfView.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#eadfd5]/70">
              {aboutContent.pointOfView.description}
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#eadfd5]/44">
                {aboutContent.pointOfView.visionLabel}
              </p>
              <p className="mt-3 text-base leading-7 text-[#f6eee8]/84">
                {aboutContent.pointOfView.vision}
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {aboutContent.principles.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/7 text-[#efe1d5]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-medium text-[#f7efe8]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#eadfd5]/70">
                {description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="mt-14 p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker">{aboutContent.cta.kicker}</p>
              <h2 className="mt-4 font-heading text-3xl font-medium text-[#f7efe8] sm:text-4xl">
                {aboutContent.cta.title}
              </h2>
            </div>
            <Link
              href={aboutContent.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f4e6db_0%,#e7d7cb_54%,#d8e3ef_100%)] px-6 py-3.5 text-sm font-semibold text-[#1b1418] transition hover:-translate-y-0.5"
            >
              {aboutContent.cta.label}
            </Link>
          </div>
        </Card>
      </div>
    </MarketingPageShell>
  );
}
