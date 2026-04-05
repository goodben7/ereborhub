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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "fr"
      ? "EreborHub conçoit des infrastructures sécurisées et des plateformes d'identité"
      : "EreborHub engineers secure infrastructure and identity platforms";

  const description =
    locale === "fr"
      ? "EreborHub permet aux entreprises modernes de croître avec confiance et impact grâce à des solutions technologiques premium."
      : "EreborHub empowers modern businesses to scale with confidence and impact through premium technology solutions.";

  return {
    metadataBase: new URL("https://ereborhub.cloud"),
    title: {
      default: title,
      template: "%s | EreborHub",
    },
    description,
    keywords: [
      "custom software development",
      "digital identity",
      "AI solutions",
      "cloud computing",
      "SaaS",
      "enterprise software",
      "EreborHub",
    ],
    authors: [{ name: "EreborHub", url: "https://ereborhub.cloud" }],
    creator: "EreborHub",
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: `https://ereborhub.cloud/${locale}`,
      siteName: "EreborHub",
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://ereborhub.cloud/${locale}`,
      languages: {
        en: "https://ereborhub.cloud/en",
        fr: "https://ereborhub.cloud/fr",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

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
