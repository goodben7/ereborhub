import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { getDictionary } from "@/lib/get-dictionary";
import { i18n } from "@/lib/dictionaries";
import type { Locale } from "@/lib/dictionaries";

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
  const typedLocale = locale as Locale;
  const dict = await getDictionary(typedLocale);

  const title = dict.metadata.site.title;
  const description = dict.metadata.site.description;

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
      locale: typedLocale === "fr" ? "fr_FR" : "en_US",
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
  const dict = await getDictionary(typedLocale);

  return (
    <html
      lang={typedLocale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar locale={typedLocale} dict={dict.nav} />
        <main className="flex-1">{children}</main>
        <Footer locale={typedLocale} dict={dict.footer} />
      </body>
    </html>
  );
}
