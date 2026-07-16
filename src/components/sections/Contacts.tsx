import { getTranslations } from "next-intl/server";

export default async function Contacts() {
  const t = await getTranslations("contacts");

  return (
    <section id="contacts" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="text-lg text-primary-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-12 grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
            <div className="h-1.5 bg-gradient-to-r from-accent-500 to-accent-600" />
            <div className="p-8">
              <h3 className="mb-6 text-lg font-semibold text-primary-800">
                {t("companyDetails.title")}
              </h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-medium text-neutral-500">{t("companyDetails.fullName")}</dt>
                <dd className="mt-1 text-neutral-800">LONDON ROUTE TRANSFERS LTD</dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-500">{t("companyDetails.legalForm")}</dt>
                <dd className="mt-1 text-neutral-800">{t("companyDetails.legalFormValue")}</dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-500">{t("companyDetails.registrationNumber")}</dt>
                <dd className="mt-1 text-neutral-800">00000000</dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-500">{t("companyDetails.registeredOffice")}</dt>
                <dd className="mt-1 text-neutral-800">10 Example House, London, United Kingdom</dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-500">{t("companyDetails.vatNumber")}</dt>
                <dd className="mt-1 text-neutral-800">GB 000000000</dd>
              </div>
            </dl>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
            <div className="h-1.5 bg-gradient-to-r from-primary-600 to-primary-700" />
            <div className="p-8">
              <h3 className="mb-6 text-lg font-semibold text-primary-800">
                {t("contactDetails.title")}
              </h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-medium text-neutral-500">{t("contactDetails.phone")}</dt>
                <dd className="mt-1">
                  <a href="tel:+440000000000" className="text-primary-700 transition-colors hover:text-accent-600">
                    +44 0000 000000
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-500">{t("contactDetails.email")}</dt>
                <dd className="mt-1">
                  <a href="mailto:booking@example.test" className="text-primary-700 transition-colors hover:text-accent-600">
                    booking@example.test
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-8 text-sm leading-relaxed text-neutral-600">
              {t("description")}
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
