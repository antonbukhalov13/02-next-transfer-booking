import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BookingForm from "@/components/booking-form/BookingForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "booking" });
  return {
    title: t("title"),
    description: t("privacy.text"),
  };
}

export default async function BookingPage() {
  const t = await getTranslations("booking");

  return (
    <main className="min-h-screen bg-neutral-50 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-3xl font-bold text-primary-900 sm:text-4xl">
          {t("title")}
        </h1>

        <BookingForm />

        <p className="mt-8 text-sm leading-relaxed text-neutral-500">
          {t("privacy.text")}
        </p>
      </div>
    </main>
  );
}
