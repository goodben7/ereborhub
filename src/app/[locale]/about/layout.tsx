import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === "fr" ? "À Propos" : "About",
    description:
      locale === "fr"
        ? "Découvrez EreborHub — une entreprise technologique construisant des produits numériques premium et des infrastructures résilientes."
        : "Learn about EreborHub — a technology company building premium digital products and resilient infrastructures.",
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
