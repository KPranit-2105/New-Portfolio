import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/ai-assistant/chat-widget";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { profileData } from "@/data/profile";
import { generatePersonJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kpranit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profileData.name} | AI Governance & Cloud Security`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.summary,
  keywords: [
    "AI Governance",
    "Cloud Security",
    "Java Developer",
    "Spring Boot",
    "GRC Analyst",
    "Information Security Analyst",
    "Risk & Compliance Analyst",
    "ISO 27001",
    "NIST CSF",
    "NIST 800-53",
    "SOC 2 Type II",
    "PCI DSS",
    "AWS Cloud Security",
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${profileData.name} | Java Developer & Cybersecurity GRC Specialist`,
    description: profileData.summary,
    siteName: `${profileData.name} - Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | Java Developer & Cybersecurity GRC Specialist`,
    description: profileData.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = generatePersonJsonLd(profileData);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Inject Structured Data (JSON-LD) for Search Engine Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
          <StickyMobileCTA />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
