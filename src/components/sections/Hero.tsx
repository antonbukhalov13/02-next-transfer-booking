import { getTranslations, getLocale } from "next-intl/server";
import Link from "next/link";

export default async function Hero() {
  const t = await getTranslations("hero");
  const locale = await getLocale();

  return (
    <section id="hero" className="scroll-mt-20 relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-800 to-primary-700 py-20 sm:py-28">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-primary-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-primary-200 sm:text-xl">
            {t("subtitle")}
          </p>
          <p className="mt-4 text-base text-primary-300">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={`/${locale}/booking`}
              className="inline-flex items-center justify-center rounded-xl bg-accent-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              {t("cta")}
            </Link>
          </div>
          <p className="mt-4 text-sm text-primary-400">
            {t("note")}
          </p>
        </div>
      </div>
    </section>
  );
}
