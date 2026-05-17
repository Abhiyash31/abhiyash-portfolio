import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { site } from "@/content/site";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — ${site.role}`,
    template: `%s — ${site.shortName}`,
  },
  description: site.heroSub,
  keywords: [
    "Abhiyash Singh",
    "software engineer",
    "full-stack",
    "machine learning",
    "Next.js",
    "Michigan State University",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.shortName} — ${site.role}`,
    description: site.tagline,
    siteName: site.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} — ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
    >
      <body className="hide-system-cursor antialiased">
        <div className="grain" aria-hidden />
        <Cursor />
        <SmoothScroll>
          <Nav />
          <main id="top">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
