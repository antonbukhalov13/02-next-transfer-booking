import { getTranslations, getLocale } from "next-intl/server";
import { serviceSummaryCards } from "@/lib/services-data";

const accentColors = [
  "from-accent-500 to-accent-600",
  "from-primary-600 to-primary-700",
  "from-primary-500 to-primary-600",
  "from-accent-400 to-accent-500",
];

export default async function ServicesSummary() {
  const t = await getTranslations("services");
  const locale = await getLocale();

  return (
    <section id="services" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {serviceSummaryCards.map((card, idx) => (
            <a
              key={card.serviceType}
              href={`/${locale}${card.href}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`h-1.5 bg-gradient-to-r ${accentColors[idx]}`} />
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600"
                    dangerouslySetInnerHTML={{ __html: card.icon }}
                  />
                  <h3 className="text-xl font-semibold leading-snug text-primary-900">
                    {t(`${card.serviceType}.title`)}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {t(`${card.serviceType}.description`)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
