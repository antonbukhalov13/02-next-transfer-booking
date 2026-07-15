import { getTranslations } from "next-intl/server";

export default async function Advantages() {
  const t = await getTranslations("advantages");

  const advantagesList = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
      translationKey: "registeredCompany",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
      translationKey: "ownFleet",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
      translationKey: "individualAndGroup",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
      translationKey: "privateAndCorporate",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>`,
      translationKey: "centralisedManagement",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
      translationKey: "singlePointOfResponsibility",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,
      translationKey: "flexibleOperationalModel",
    },
  ];

  return (
    <section id="advantages" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-primary-800">
            {t("whyChooseUs.title")}
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantagesList.map((advantage) => (
              <div
                key={advantage.translationKey}
                className="flex items-start gap-4 rounded-xl border border-neutral-100 bg-neutral-50 p-6 transition-all hover:border-primary-200 hover:shadow-sm"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600"
                  dangerouslySetInnerHTML={{ __html: advantage.icon }}
                />
                <p className="text-neutral-700">
                  {t(`whyChooseUs.items.${advantage.translationKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-center text-2xl font-semibold text-primary-800">
            {t("whoWeServe.title")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {(
              [
                "privateClients",
                "corporateClients",
                "educational",
                "tourGroups",
                "eventOrganizers",
              ] as const
            ).map((client) => (
              <div
                key={client}
                className="rounded-full border border-primary-200 bg-primary-50 px-6 py-3 text-primary-700 transition-all hover:bg-primary-600 hover:text-white"
              >
                {t(`whoWeServe.${client}`)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
