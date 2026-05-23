import type { ReactNode } from "react";
import { MarketingBackdrop } from "@/components/marketing-backdrop";
import { SiteHeader } from "@/components/site-header";

type MarketingPageShellProps = {
  children: ReactNode;
  headerCtaHref?: string;
  headerCtaLabel?: string;
  sectionClassName?: string;
};

export function MarketingPageShell({
  children,
  headerCtaHref,
  headerCtaLabel,
  sectionClassName = "pb-16",
}: MarketingPageShellProps) {
  return (
    <main className="relative isolate overflow-hidden">
      <MarketingBackdrop />

      <section
        className={`mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pt-4 sm:px-8 lg:px-10 ${sectionClassName}`}
      >
        <SiteHeader ctaHref={headerCtaHref} ctaLabel={headerCtaLabel} />
        {children}
      </section>
    </main>
  );
}
