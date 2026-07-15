import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import FadeIn from "@/components/ui/FadeIn";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ServicesSummary from "@/components/sections/ServicesSummary";
import Advantages from "@/components/sections/Advantages";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale,
      siteName: "LONDON ROUTE TRANSFERS",
      type: "website",
    },
    alternates: {
      languages: { en: "/en", ru: "/ru" },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn delay={100}>
        <ServicesSummary />
      </FadeIn>
      <FadeIn delay={100}>
        <Advantages />
      </FadeIn>
    </>
  );
}
