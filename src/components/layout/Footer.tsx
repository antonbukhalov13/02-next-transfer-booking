import { getTranslations, getLocale } from "next-intl/server";
import Link from "next/link";

export default async function Footer() {
  const t = await getTranslations("footer");
  const locale = await getLocale();

  return (
    <footer className="border-t border-neutral-200 bg-primary-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="min-w-[240px] max-w-sm">
            <Link href={`/${locale}/#hero`} className="text-base font-bold tracking-wide text-white transition-colors hover:text-accent-400">
              {t("companyName")}
            </Link>
            <p className="mt-1 text-xs text-neutral-500">{t("companyType")}</p>
            <div className="mt-4 space-y-1.5 text-xs text-neutral-500">
              <p>{t("companyNumber")}</p>
              <p>{t("registeredOffice")}</p>
              <p>{t("vatNumber")}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-10">
            <div className="shrink-0">
              <p className="text-sm font-semibold text-white">{t("documents.title")}</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li>
                  <Link href={`/${locale}/privacy`} className="transition-colors hover:text-white">
                    {t("documents.privacy")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/cookie-policy`} className="transition-colors hover:text-white">
                    {t("documents.cookies")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/terms`} className="transition-colors hover:text-white">
                    {t("documents.terms")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/transport-terms`} className="transition-colors hover:text-white">
                    {t("documents.transportTerms")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="shrink-0 lg:border-l lg:border-neutral-700 lg:pl-10">
              <p className="text-sm font-semibold text-white">{t("contacts.title")}</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li>
                  <span className="text-neutral-500">{t("contacts.email")}:</span>{" "}
                  <a href="mailto:booking@example.test" className="transition-colors hover:text-white">
                    booking@example.test
                  </a>
                </li>
                <li>
                  <span className="text-neutral-500">{t("contacts.phone")}:</span>{" "}
                  <a href="tel:+440000000000" className="transition-colors hover:text-white">
                    +44 0000 000000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-700 pt-6">
          <p className="max-w-4xl text-xs leading-relaxed text-neutral-500">
            {t("legalInfo")}
          </p>
          <p className="mt-4 text-xs text-neutral-500">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
