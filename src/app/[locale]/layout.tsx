import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ereborhub.cloud"),
  title: {
    default: "EreborHub — Premium Technology Solutions",
    template: "%s | EreborHub",
  },
  description:
    "EreborHub delivers custom software development, digital identity solutions (KYC/KYB/AML), cloud infrastructure, and enterprise software for modern organizations.",
  keywords: [
    "custom software development",
    "digital identity",
    "KYC",
    "KYB",
    "AML",
    "cloud solutions",
    "DevOps",
    "enterprise software",
    "Kinshasa",
    "Congo",
  ],
  authors: [{ name: "EreborHub", url: "https://ereborhub.cloud" }],
  creator: "EreborHub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ereborhub.cloud",
    siteName: "EreborHub",
    title: "EreborHub — Premium Technology Solutions",
    description:
      "Custom software, digital identity, cloud infrastructure, and enterprise solutions built for the future.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EreborHub — Premium Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EreborHub — Premium Technology Solutions",
    description:
      "Custom software, digital identity, cloud infrastructure, and enterprise solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { i18n } from "@/lib/dictionaries";
import type { Locale } from "@/lib/dictionaries";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;

  return (
    <html
      lang={typedLocale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar locale={typedLocale} />
        <main className="flex-1">{children}</main>
        <Footer locale={typedLocale} />
      </body>
    </html>
  );
}
