import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-neutral-200 bg-primary-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-white">{t("companyName")}</p>
            <p className="mt-1 text-xs text-neutral-400">{t("companyType")}</p>
            <p className="text-xs text-neutral-400">{t("companyNumber")}</p>
            <p className="text-xs text-neutral-400">{t("registeredOffice")}</p>
            <p className="text-xs text-neutral-400">{t("vatNumber")}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{t("documents.privacy")}</p>
            <ul className="mt-2 space-y-1 text-xs">
              <li><Link href="/privacy" className="hover:text-white">{t("documents.privacy")}</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white">{t("documents.cookies")}</Link></li>
              <li><Link href="/terms" className="hover:text-white">{t("documents.terms")}</Link></li>
              <li><Link href="/transport-terms" className="hover:text-white">{t("documents.transportTerms")}</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{t("contacts.title")}</p>
            <p className="mt-2 text-xs">{t("contacts.email")}: booking@example.test</p>
            <p className="text-xs">{t("contacts.phone")}: +44 0000 000000</p>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-700 pt-6 text-center text-xs text-neutral-500">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
