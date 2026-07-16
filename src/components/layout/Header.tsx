import { getTranslations, getLocale } from "next-intl/server";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default async function Header() {
  const t = await getTranslations("header");
  const locale = await getLocale();

  const navItems = [
    { key: "about", href: `/${locale}/#about` },
    { key: "services", href: `/${locale}/#services` },
    { key: "advantages", href: `/${locale}/#advantages` },
    { key: "contacts", href: `/${locale}/#contacts` },
  ];

  const resolvedNavItems = navItems.map((item) => ({
    label: t(`nav.${item.key}`),
    href: item.href,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-primary-900">
          {t("logo")}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {resolvedNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary-700 transition-colors hover:text-accent-600"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/booking`}
            className="rounded-lg bg-accent-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
          >
            {t("nav.booking")}
          </Link>
          <LanguageSwitcher label={t("nav.switchLanguage")} />
        </nav>

        <MobileMenu navItems={resolvedNavItems} bookingHref={`/${locale}/booking`} bookingLabel={t("nav.booking")} languageSwitchLabel={t("nav.switchLanguage")} />
      </div>
    </header>
  );
}
