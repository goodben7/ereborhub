import { HeroSection } from "@/components/hero/HeroSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

import { CTASection } from "@/components/cta/CTASection";

import { getDictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/dictionaries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <HeroSection locale={locale} dict={dict.hero} />
      <ServicesSection locale={locale} dict={dict.services} />
      <FeaturesSection dict={dict.features} />
      <ProjectsSection locale={locale} dict={dict.projects} />
      <CTASection locale={locale} dict={dict.cta} />
    </>
  );
}
