import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === "fr" ? "Services" : "Services",
    description:
      locale === "fr"
        ? "Les services EreborHub: ingénierie logicielle, intégration IA, infrastructures cloud et architectures d'entreprise."
        : "EreborHub services: software engineering, AI integration, cloud infrastructures, and enterprise architectures.",
  };
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
