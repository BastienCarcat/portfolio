import type { Metadata } from "next";
import { literata, satoshi, satoshiVariable, KaiseiDecol } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  keywords: siteConfig.metadata.keywords,
  authors: [{ name: siteConfig.metadata.author }],
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    url: siteConfig.metadata.url,
    siteName: siteConfig.metadata.title,
    images: [
      {
        url: siteConfig.metadata.image,
        width: 800,
        height: 600,
        alt: siteConfig.metadata.title,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    images: [siteConfig.metadata.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${literata.variable} ${satoshi.variable} ${satoshiVariable.variable} ${KaiseiDecol.variable} bg-background font-satoshi min-h-screen antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
