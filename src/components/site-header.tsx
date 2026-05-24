"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  ctaHref?: string;
  ctaLabel?: string;
};

function isActiveNavItem(pathname: string | null, href: string) {
  return href === "/" ? pathname === href : pathname?.startsWith(href) ?? false;
}

type NavLinksProps = {
  pathname: string | null;
  onNavigate?: () => void;
  className?: string;
  itemClassName: (isActive: boolean) => string;
};

function NavLinks({
  pathname,
  onNavigate,
  className,
  itemClassName,
}: NavLinksProps) {
  return (
    <nav className={className}>
      {siteConfig.navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className={itemClassName(isActiveNavItem(pathname, item.href))}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteHeader({
  ctaHref = "/#waitlist",
  ctaLabel = "Request access",
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-40 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,9,16,0.52),rgba(12,9,16,0.24))] px-4 py-3.5 backdrop-blur-xl sm:px-5 lg:px-6">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="relative flex h-16 w-16 items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Beauteqno logo"
                width={64}
                height={64}
                className="h-14 w-14 object-contain opacity-100 brightness-[5.2] contrast-[0.7] saturate-0 invert"
                priority
              />
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

        <NavLinks
          pathname={pathname}
          className="hidden items-center gap-1.5 rounded-[1.15rem] bg-transparent p-1 md:flex"
          itemClassName={(isActive) =>
            cn(
              "rounded-xl px-4 py-2.5 text-sm transition duration-300",
              isActive
                ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] text-[#f7eee7] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                : "text-[#e8ddd5]/60 hover:bg-white/7 hover:text-[#f7eee7]",
            )
          }
        />

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#f7eee7] transition hover:bg-white/8 md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link
          href={ctaHref}
          className="hidden items-center gap-2 rounded-[1.1rem] border border-white/10 bg-transparent px-4 py-2.5 text-sm font-medium text-[#f7eee7] transition duration-300 hover:-translate-y-0.5 hover:bg-white/6 md:inline-flex"
        >
          <span>{ctaLabel}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {isMobileMenuOpen ? (
        <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
          <NavLinks
            pathname={pathname}
            onNavigate={() => setIsMobileMenuOpen(false)}
            className="grid gap-2"
            itemClassName={(isActive) =>
              cn(
                "rounded-2xl px-4 py-3 text-sm transition duration-300",
                isActive
                  ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] text-[#f7eee7]"
                  : "bg-white/4 text-[#e8ddd5]/70 hover:bg-white/7 hover:text-[#f7eee7]",
              )
            }
          />

          <Link
            href={ctaHref}
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#f4e6db_0%,#e7d7cb_54%,#d8e3ef_100%)] px-4 py-3 text-sm font-semibold text-[#1b1418]"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}
    </header>
  );
}
