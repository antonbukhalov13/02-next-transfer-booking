"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = routing.locales.find((l) => l !== locale) || routing.defaultLocale;

  function switchLocale() {
    const segments = pathname.split("/");
    segments[1] = otherLocale;
    router.push(segments.join("/"));
  }

  return (
    <button
      onClick={switchLocale}
      className="rounded-md border border-primary-200 px-3 py-1.5 text-xs font-medium text-primary-700 transition-colors hover:bg-primary-50"
      aria-label={t("nav.booking")}
    >
      {otherLocale.toUpperCase()}
    </button>
  );
}
