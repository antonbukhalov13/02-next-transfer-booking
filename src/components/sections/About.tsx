import { getTranslations } from "next-intl/server";

export default async function About() {
  const t = await getTranslations("about");

  return (
    <section id="about" className="scroll-mt-20 bg-neutral-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary-900 sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-lg text-primary-600">{t("subtitle")}</p>
          <div className="mx-auto mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-neutral-700">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
            <p>{t("paragraph3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
