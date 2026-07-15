import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-neutral-200 bg-primary-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-bold text-white">{t("companyName")}</p>
            <p className="mt-2 text-xs leading-relaxed text-neutral-400">{t("companyType")}</p>
            <p className="text-xs text-neutral-400">{t("companyNumber")}</p>
            <p className="text-xs text-neutral-400">{t("registeredOffice")}</p>
            <p className="text-xs text-neutral-400">{t("vatNumber")}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{t("documents.title")}</p>
            <ul className="mt-2 space-y-1 text-xs">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-white">
                  {t("documents.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="transition-colors hover:text-white">
                  {t("documents.cookies")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-white">
                  {t("documents.terms")}
                </Link>
              </li>
              <li>
                <Link href="/transport-terms" className="transition-colors hover:text-white">
                  {t("documents.transportTerms")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{t("contacts.title")}</p>
            <ul className="mt-2 space-y-1 text-xs">
              <li>
                <span className="text-neutral-400">{t("contacts.email")}:</span>{" "}
                <a href="mailto:booking@example.test" className="transition-colors hover:text-white">
                  booking@example.test
                </a>
              </li>
              <li>
                <span className="text-neutral-400">{t("contacts.phone")}:</span>{" "}
                <a href="tel:+440000000000" className="transition-colors hover:text-white">
                  +44 0000 000000
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs leading-relaxed text-neutral-400">{t("legalInfo")}</p>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-700 pt-6 text-center text-xs text-neutral-500">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
