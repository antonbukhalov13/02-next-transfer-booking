import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
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
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-accent-600 hover:shadow-xl"
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
