import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Link from "next/link";
import { serviceSummaryCards } from "@/lib/services-data";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.services" });
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
      languages: { en: "/en/services", ru: "/ru/services" },
    },
  };
}

const sectionIcons: Record<string, string> = {
  airport: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-8 w-8"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`,
  corporate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-8 w-8"><path d="M20 7H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM9 20v-5h6v5M12 3l9 4H3l9-4z"/></svg>`,
  group: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-8 w-8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  private: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-8 w-8"><path d="M12 21s7-7.7 7-12.4A7 7 0 005 8.6C5 13.3 12 21 12 21zM9.5 8.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"/></svg>`,
};

const benefitIcons = [
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6"><path d="M4 12a8 8 0 1016 0 8 8 0 00-16 0zM12 4v4M4.5 15l3.8-2.2M19.5 15l-3.8-2.2M10.5 12a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
];

export default async function ServicesPage() {
  const t = await getTranslations("servicesPage");
  const locale = await getLocale();

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-800 to-primary-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="max-w-3xl text-lg text-primary-100">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary-900">
            {t("keyBenefits.title")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {(t.raw("keyBenefits.items") as string[]).map((item, idx) => (
              <div
                key={idx}
                className="flex w-full items-start gap-3 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
              >
                <div
                  className="shrink-0 text-primary-600"
                  dangerouslySetInnerHTML={{ __html: benefitIcons[idx] }}
                />
                <p className="text-neutral-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {(serviceSummaryCards.map((card) => card.serviceType) as string[]).map(
            (serviceType) => (
              <div
                key={serviceType}
                id={serviceType}
                className="scroll-mt-20 flex items-start gap-6 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: sectionIcons[serviceType],
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900">
                    {t(`${serviceType}.title`)}
                  </h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
                    {t(`${serviceType}.description`)}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <section className="bg-primary-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">{t("cta.title")}</h2>
          <p className="mb-8 text-lg text-primary-100">
            {t("cta.description")}
          </p>
          <Link
            href={`/${locale}/booking`}
            className="inline-flex items-center justify-center rounded-xl bg-accent-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
