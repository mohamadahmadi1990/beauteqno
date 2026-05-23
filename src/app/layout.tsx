import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  keywords: [...siteConfig.keywords],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.openGraphDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.openGraphDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
