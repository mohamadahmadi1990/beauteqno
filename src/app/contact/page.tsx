import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { BeauteqnoWaitlistForm } from "@/components/beauteqno-waitlist-form";
import { MarketingPageShell } from "@/components/marketing-page-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { contactContent } from "@/content/site";

export const metadata: Metadata = {
  title: contactContent.metadata.title,
  description: contactContent.metadata.description,
};

export default function ContactPage() {
  return (
    <MarketingPageShell headerCtaHref="/#waitlist" headerCtaLabel="Request access">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center py-12">
        <Badge className="w-fit border-[#f3e6dc]/12 bg-[#f6e8dc]/8 text-[#efe1d5]">
          <Sparkles className="h-3.5 w-3.5" />
          {contactContent.badge}
        </Badge>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <div>
              <h1 className="editorial-heading max-w-4xl font-heading text-4xl text-[#f7efe8] sm:text-5xl lg:text-[4.15rem]">
                {contactContent.title}
              </h1>
              <p className="luxury-text mt-6 max-w-xl text-lg leading-8">
                {contactContent.description}
              </p>
            </div>

            <div className="grid gap-4">
              {contactContent.reasons.map(({ title, description, icon: Icon }) => (
                <Card key={title} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/7 text-[#efe1d5]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-medium text-[#f7efe8]">
                        {title}
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-[#eadfd5]/70">
                        {description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <BeauteqnoWaitlistForm />
        </div>
      </div>
    </MarketingPageShell>
  );
}
