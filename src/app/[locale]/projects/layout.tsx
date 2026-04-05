import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === "fr" ? "Projets" : "Projects",
    description:
      locale === "fr"
        ? "Explorez le portfolio d'EreborHub : Plateformes d'identité, ERP hybrides et SaaS technologiques innovants."
        : "Explore EreborHub's portfolio: Identity Platforms, Hybrid ERPs, and innovative tech SaaS products.",
  };
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
