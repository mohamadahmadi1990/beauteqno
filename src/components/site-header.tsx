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
    <header className="sticky top-4 z-40 flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,9,16,0.52),rgba(12,9,16,0.24))] px-4 py-3.5 backdrop-blur-xl sm:px-5 lg:px-6">
      <Link href="/" className="min-w-0">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="h-4 w-4 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff7f3_0%,#edd7c9_34%,#95dff9_100%)] opacity-95" />
            <div className="absolute h-7 w-7 rounded-full border border-[#9bdcf6]/20" />
          </div>
          <div className="min-w-0">
            <p className="font-heading text-[1.02rem] font-medium tracking-[0.26em] text-[#f7eee7]">
              {siteConfig.shortName.toUpperCase()}
            </p>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#e6d8cd]/44">
              Intelligent beauty systems
            </p>
          </div>
        </div>
      </Link>

      <nav className="hidden items-center gap-1.5 rounded-[1.15rem] bg-transparent p-1 md:flex">
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
                "rounded-xl px-4 py-2.5 text-sm transition duration-300",
                isActive
                  ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] text-[#f7eee7] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  : "text-[#e8ddd5]/60 hover:bg-white/7 hover:text-[#f7eee7]",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href={ctaHref}
        className="inline-flex items-center gap-2 rounded-[1.1rem] border border-white/10 bg-transparent px-4 py-2.5 text-sm font-medium text-[#f7eee7] transition duration-300 hover:-translate-y-0.5 hover:bg-white/6"
      >
        <span className="hidden sm:inline">{ctaLabel}</span>
        <span className="sm:hidden">Demo</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </header>
  );
}
