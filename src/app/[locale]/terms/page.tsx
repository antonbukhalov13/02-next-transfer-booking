import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import LegalContent from "@/components/legal/LegalContent";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.terms" });
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
      languages: { en: "/en/terms", ru: "/ru/terms" },
    },
  };
}

const sectionKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
] as const;

export default async function TermsPage() {
  const t = await getTranslations("legal.terms");

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-12 text-3xl font-bold text-primary-900 sm:text-4xl">
          {t("title")}
        </h1>

        <div className="space-y-10">
          {sectionKeys.map((key) => (
            <section key={key}>
              <h2 className="mb-4 text-xl font-semibold text-primary-800">
                {t(`sections.${key}.title`)}
              </h2>
              <LegalContent content={t(`sections.${key}.content`)} />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
