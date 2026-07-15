import { getTranslations } from "next-intl/server";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default async function Header() {
  const t = await getTranslations("header");

  const navItems = [
    { key: "about", href: "/#about" },
    { key: "services", href: "/services" },
    { key: "advantages", href: "/#advantages" },
    { key: "contacts", href: "/#contacts" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-primary-900">
          {t("logo")}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-primary-700 transition-colors hover:text-accent-600"
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
          <Link
            href="/booking"
            className="rounded-lg bg-accent-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
          >
            {t("nav.booking")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
