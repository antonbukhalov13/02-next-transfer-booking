import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.transportTerms" });
  return {
    title: t("title"),
    description: t("sections.1.content"),
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
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
] as const;

export default async function TransportTermsPage() {
  const t = await getTranslations("legal.transportTerms");

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-primary-900 sm:text-4xl">
          {t("title")}
        </h1>

        <nav className="mb-12 rounded-xl border border-primary-100 bg-primary-50/50 p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-700">
            Contents
          </h2>
          <ol className="space-y-1.5 text-sm text-primary-800">
            {sectionKeys.map((key) => (
              <li key={key}>
                <a
                  href={`#section-${key}`}
                  className="hover:text-primary-600 hover:underline"
                >
                  {key}. {t(`sections.${key}.title`)}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-12">
          {sectionKeys.map((key) => {
            const content = t(`sections.${key}.content`);
            const paragraphs = content.split("\n").filter(Boolean);

            return (
              <section key={key} id={`section-${key}`} className="scroll-mt-24">
                <h2 className="mb-4 text-xl font-semibold text-primary-800">
                  {key}. {t(`sections.${key}.title`)}
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
