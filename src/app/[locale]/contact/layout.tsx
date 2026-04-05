import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === "fr" ? "Contact" : "Contact Us",
    description:
      locale === "fr"
        ? "Contactez l'équipe EreborHub. Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."
        : "Get in touch with the EreborHub team. Tell us about your project and we'll respond within 24 hours.",
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
