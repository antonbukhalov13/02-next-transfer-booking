import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.privacy" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale,
      siteName: "LONDON ROUTE TRANSFERS",
      type: "website",
    },
    alternates: {
      languages: { en: "/en/privacy", ru: "/ru/privacy" },
    },
  };
}

const sectionKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
] as const;

export default async function PrivacyPage() {
  const t = await getTranslations("legal.privacy");

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-12 text-3xl font-bold text-primary-900 sm:text-4xl">
          {t("title")}
        </h1>

        <div className="space-y-10">
          {sectionKeys.map((key) => {
            const content = t(`sections.${key}.content`);
            const paragraphs = content.split("\n").filter(Boolean);

            return (
              <section key={key}>
                <h2 className="mb-4 text-xl font-semibold text-primary-800">
                  {t(`sections.${key}.title`)}
                </h2>
                <div className="space-y-3 text-neutral-700 leading-relaxed">
                  {paragraphs.map((paragraph, idx) => {
                    if (paragraph.startsWith("- ")) {
                      const items = paragraphs
                        .filter((p) => p.startsWith("- "))
                        .filter((p, i, arr) => arr.indexOf(p) === i);

                      if (paragraph !== items[0]) return null;

                      return (
                        <ul
                          key={idx}
                          className="list-disc space-y-1 pl-6"
                        >
                          {items.map((item, itemIdx) => (
                            <li key={itemIdx}>{item.slice(2)}</li>
                          ))}
                        </ul>
                      );
                    }

                    return <p key={idx}>{paragraph}</p>;
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
