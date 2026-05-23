"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  ctaHref?: string;
  ctaLabel?: string;
};

export function SiteHeader({
  ctaHref = "/#waitlist",
  ctaLabel = "Book the demo",
}: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md sm:px-6">
      <Link href="/" className="min-w-0">
        <p className="font-heading text-lg font-medium tracking-[0.28em] text-[#f7eee7]">
          BEAUTEQNO
        </p>
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#e6d8cd]/42">
          AI Beauty Technology
        </p>
      </Link>

      <nav className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/4 p-1 md:flex">
        {siteConfig.navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : pathname?.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition",
                isActive
                  ? "bg-white/10 text-[#f7eee7]"
                  : "text-[#e8ddd5]/62 hover:bg-white/7 hover:text-[#f7eee7]",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href={ctaHref}
        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm font-medium text-[#f7eee7] transition hover:bg-white/12"
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </header>
  );
}
