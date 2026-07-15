"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { bookingSchema, type BookingFormValues } from "@/lib/validation";

type FormState = "idle" | "submitting" | "success" | "error";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

function Spinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export default function BookingForm() {
  const t = useTranslations("booking");
  const tValidation = useTranslations("validation");
  const [formState, setFormState] = useState<FormState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      email: "",
      serviceType: "",
      pickupAddress: "",
      destination: "",
      date: "",
      time: "",
      passengers: 1,
      airportMeetAndGreet: false,
      comment: "",
    },
  });

  function onSubmit() {
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
      reset();
    }, 1000);
  }

  function handleDismiss() {
    setFormState("idle");
  }

  const fieldClass =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200";
  const labelClass = "block text-sm font-medium text-neutral-700 mb-1";
  const errorBorderClass = "border-red-500 focus:border-red-500 focus:ring-red-200";
  const isSubmitting = formState === "submitting";

  if (formState === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center shadow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="mx-auto mb-4 h-12 w-12 text-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="mb-2 text-xl font-semibold text-green-900">
          {t("states.success")}
        </h2>
        <p className="mb-6 text-green-700">{t("states.successMessage")}</p>
        <button
          type="button"
          onClick={handleDismiss}
          className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-all hover:bg-green-700"
        >
          {t("form.submit")}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
    >
      {formState === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800" role="alert">
          <p className="font-medium">{t("states.error")}</p>
          <p className="text-sm">{t("states.errorMessage")}</p>
        </div>
      )}

      <fieldset className="space-y-4" disabled={isSubmitting}>
        <legend className="text-lg font-semibold text-primary-900">
          {t("title")}
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              {t("form.firstName")} *
            </label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              aria-required="true"
              aria-invalid={!!errors.firstName}
              {...register("firstName")}
              className={`${fieldClass} ${errors.firstName ? errorBorderClass : ""}`}
            />
            <FieldError
              message={
                errors.firstName?.message &&
                tValidation(errors.firstName.message as "required")
              }
            />
          </div>

          <div>
            <label htmlFor="lastName" className={labelClass}>
              {t("form.lastName")} *
            </label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              aria-required="true"
              aria-invalid={!!errors.lastName}
              {...register("lastName")}
              className={`${fieldClass} ${errors.lastName ? errorBorderClass : ""}`}
            />
            <FieldError
              message={
                errors.lastName?.message &&
                tValidation(errors.lastName.message as "required")
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            {t("form.company")}
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            {...register("company")}
            className={fieldClass}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className={labelClass}>
              {t("form.phone")} *
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              aria-required="true"
              aria-invalid={!!errors.phone}
              {...register("phone")}
              className={`${fieldClass} ${errors.phone ? errorBorderClass : ""}`}
            />
            <FieldError
              message={
                errors.phone?.message &&
                tValidation(errors.phone.message as "required")
              }
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              {t("form.email")} *
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-required="true"
              aria-invalid={!!errors.email}
              {...register("email")}
              className={`${fieldClass} ${errors.email ? errorBorderClass : ""}`}
            />
            <FieldError
              message={
                errors.email?.message &&
                tValidation(
                  errors.email.message as "email" | "required"
                )
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor="serviceType" className={labelClass}>
            {t("form.serviceType")} *
          </label>
          <select
            id="serviceType"
            aria-required="true"
            aria-invalid={!!errors.serviceType}
            {...register("serviceType")}
            className={`${fieldClass} ${errors.serviceType ? errorBorderClass : ""}`}
          >
            <option value="">{t("form.serviceType")}</option>
            <option value="airport">
              {t("form.serviceOptions.airport")}
            </option>
            <option value="corporate">
              {t("form.serviceOptions.corporate")}
            </option>
            <option value="group">{t("form.serviceOptions.group")}</option>
            <option value="private">
              {t("form.serviceOptions.private")}
            </option>
          </select>
          <FieldError
            message={
              errors.serviceType?.message &&
              tValidation(errors.serviceType.message as "required")
            }
          />
        </div>

        <div>
          <label htmlFor="pickupAddress" className={labelClass}>
            {t("form.pickupAddress")} *
          </label>
          <input
            id="pickupAddress"
            type="text"
            aria-required="true"
            aria-invalid={!!errors.pickupAddress}
            {...register("pickupAddress")}
            className={`${fieldClass} ${errors.pickupAddress ? errorBorderClass : ""}`}
          />
          <FieldError
            message={
              errors.pickupAddress?.message &&
              tValidation(errors.pickupAddress.message as "required")
            }
          />
        </div>

        <div>
          <label htmlFor="destination" className={labelClass}>
            {t("form.destination")} *
          </label>
          <input
            id="destination"
            type="text"
            aria-required="true"
            aria-invalid={!!errors.destination}
            {...register("destination")}
            className={`${fieldClass} ${errors.destination ? errorBorderClass : ""}`}
          />
          <FieldError
            message={
              errors.destination?.message &&
              tValidation(errors.destination.message as "required")
            }
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className={labelClass}>
              {t("form.date")} *
            </label>
            <input
              id="date"
              type="date"
              aria-required="true"
              aria-invalid={!!errors.date}
              {...register("date")}
              className={`${fieldClass} ${errors.date ? errorBorderClass : ""}`}
            />
            <FieldError
              message={
                errors.date?.message &&
                tValidation(errors.date.message as "required")
              }
            />
          </div>

          <div>
            <label htmlFor="time" className={labelClass}>
              {t("form.time")} *
            </label>
            <input
              id="time"
              type="time"
              aria-required="true"
              aria-invalid={!!errors.time}
              {...register("time")}
              className={`${fieldClass} ${errors.time ? errorBorderClass : ""}`}
            />
            <FieldError
              message={
                errors.time?.message &&
                tValidation(errors.time.message as "required")
              }
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="passengers" className={labelClass}>
              {t("form.passengers")} *
            </label>
            <input
              id="passengers"
              type="number"
              min={1}
              aria-required="true"
              aria-invalid={!!errors.passengers}
              {...register("passengers", { valueAsNumber: true })}
              className={`${fieldClass} ${errors.passengers ? errorBorderClass : ""}`}
            />
            <FieldError
              message={
                errors.passengers?.message &&
                tValidation(errors.passengers.message as "minPassengers")
              }
            />
          </div>

          <div>
            <label className={labelClass}>
              {t("form.airportMeetAndGreet")}
            </label>
            <div className="flex gap-6 pt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="true"
                  {...register("airportMeetAndGreet", {
                    setValueAs: (v) => v === "true",
                  })}
                  className="h-4 w-4 text-primary-600"
                />
                <span className="text-sm text-neutral-700">
                  {t("form.meetGreetOptions.yes")}
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="false"
                  {...register("airportMeetAndGreet", {
                    setValueAs: (v) => v === "true",
                  })}
                  className="h-4 w-4 text-primary-600"
                />
                <span className="text-sm text-neutral-700">
                  {t("form.meetGreetOptions.no")}
                </span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="comment" className={labelClass}>
            {t("form.comment")}
          </label>
          <textarea
            id="comment"
            rows={3}
            {...register("comment")}
            className={fieldClass}
          />
        </div>

        <div>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              {...register("consent", { setValueAs: (v) => !!v })}
              aria-required="true"
              aria-invalid={!!errors.consent}
              className="mt-1 h-4 w-4 shrink-0 rounded text-primary-600"
            />
            <span className="text-sm text-neutral-700">
              {t("form.consent")} *
            </span>
          </label>
          <FieldError
            message={
              errors.consent?.message &&
              tValidation(errors.consent.message as "consent")
            }
          />
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-lg font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting && <Spinner />}
        {isSubmitting ? t("states.submitting") : t("form.submit")}
      </button>
    </form>
  );
}
