import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BookingsList from "@/components/manager/BookingsList";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.manager" });
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
      languages: { en: "/en/manager", ru: "/ru/manager" },
    },
  };
}

export default async function ManagerPage() {
  const t = await getTranslations("manager");

  return (
    <main className="min-h-screen bg-neutral-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-primary-900">
          {t("title")}
        </h1>
        <BookingsList />
      </div>
    </main>
  );
}
