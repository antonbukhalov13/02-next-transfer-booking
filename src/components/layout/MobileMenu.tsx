"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

type NavItem = { label: string; href: string };

export default function MobileMenu({
  navItems,
  bookingHref,
  bookingLabel,
  languageSwitchLabel,
}: {
  navItems: NavItem[];
  bookingHref: string;
  bookingLabel: string;
  languageSwitchLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("mobileMenu");

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center rounded-md p-2 text-primary-700 transition-colors hover:bg-primary-50"
        aria-expanded={open}
        aria-label={open ? t("close") : t("open")}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-white shadow-lg">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-50 hover:text-accent-600"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={bookingHref}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-accent-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              {bookingLabel}
            </Link>
            <div className="mt-3 border-t border-neutral-100 pt-3">
              <LanguageSwitcher label={languageSwitchLabel} />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
