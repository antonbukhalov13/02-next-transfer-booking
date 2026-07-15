import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { serviceSummaryCards } from "@/lib/services-data";

export default async function ServicesSummary() {
  const t = await getTranslations("services");

  return (
    <section id="services" className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceSummaryCards.map((card) => (
            <Link
              key={card.serviceType}
              href={card.href}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white"
                dangerouslySetInnerHTML={{ __html: card.icon }}
              />
              <h3 className="mb-2 text-xl font-semibold text-primary-900">
                {t(`${card.serviceType}.title`)}
              </h3>
              <p className="mb-4 text-neutral-600">
                {t(`${card.serviceType}.description`)}
              </p>
              <ul className="space-y-1">
                {(t.raw(`${card.serviceType}.features`) as string[]).map(
                  (feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-neutral-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent-500" />
                      {feature}
                    </li>
                  )
                )}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
