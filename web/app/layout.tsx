import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Public_Sans } from "next/font/google";
import { PackageProvider } from "@/components/package-choice";
import { ConceptBanner, SiteFooter, SiteHeader } from "@/components/site-chrome";
import "./globals.css";

// next/font downloads the fonts at build time and serves them from this site,
// so visitors never contact Google.
const display = Familjen_Grotesk({ subsets: ["latin"], variable: "--font-familjen" });
const body = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" });

export const metadata: Metadata = {
  title: {
    default: "Heima – Ingen andre kan sjå bileta dine. Ikkje ein gong vi.",
    template: "%s – Heima",
  },
  description:
    "Heima-boksen tek vare på bileta og dokumenta til familien, heime hos deg. Med ein privat assistent som hjelper deg å finne fram og forstå breva frå NAV og banken.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F1F2F1" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1522" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nn"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} antialiased`}
    >
      <body className="min-h-dvh bg-bg font-sans text-ink">
        <a
          href="#innhald"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2"
        >
          Hopp til innhaldet
        </a>
        <ConceptBanner />
        <SiteHeader />
        <PackageProvider>
          <main id="innhald">{children}</main>
        </PackageProvider>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
