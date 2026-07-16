"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { mockBookings } from "@/lib/mock-data";
import type { BookingStatus } from "@/types/mock-bookings";

const statusStyles: Record<BookingStatus, string> = {
  pending: "bg-accent-100 text-accent-800 border-accent-200",
  confirmed: "bg-primary-100 text-primary-800 border-primary-200",
  completed: "bg-primary-50 text-primary-600 border-primary-100",
  cancelled: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

export default function BookingsList() {
  const t = useTranslations("manager");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<BookingStatus | "all">("all");

  const filtered = mockBookings.filter((b) => {
    const matchesSearch =
      search === "" ||
      b.clientName.toLowerCase().includes(search.toLowerCase()) ||
      (b.company && b.company.toLowerCase().includes(search.toLowerCase())) ||
      b.pickup.toLowerCase().includes(search.toLowerCase()) ||
      b.destination.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || b.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  function handleResetFilters() {
    setSearch("");
    setStatusFilter("all");
  }

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="search"
            placeholder={t("filters.searchPlaceholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200 sm:max-w-sm"
          />
          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value as BookingStatus | "all")
            }
            className="rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            <option value="all">{t("filters.allStatuses")}</option>
            <option value="pending">{t("status.pending")}</option>
            <option value="confirmed">{t("status.confirmed")}</option>
            <option value="completed">{t("status.completed")}</option>
            <option value="cancelled">{t("status.cancelled")}</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-neutral-200 bg-white py-12 text-center">
          <p className="text-lg font-medium text-neutral-900">
            {t("emptyState.title")}
          </p>
          <p className="mt-1 text-sm text-neutral-500">
            {t("emptyState.description")}
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="mt-4 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            {t("emptyState.resetFilters")}
          </button>
        </div>
      ) : (
        <div key={`${search}-${statusFilter}`} className="animate-fade-in-up">
          <div className="space-y-3 md:hidden">
            {filtered.map((booking) => (
              <div
                key={booking.id}
                className="rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-primary-200 hover:shadow-sm"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-neutral-900">
                      {booking.clientName}
                    </p>
                    {booking.company && (
                      <p className="text-xs text-neutral-500">
                        {booking.company}
                      </p>
                    )}
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[booking.status]}`}
                  >
                    {t("status." + booking.status)}
                  </span>
                </div>
                <div className="space-y-1 text-sm text-neutral-600">
                  <p className="text-xs font-medium text-neutral-400">
                    {t("serviceTypes." + booking.serviceType)}
                  </p>
                  <p>
                    {booking.pickup} → {booking.destination}
                  </p>
                  {booking.notes && (
                    <p className="text-xs text-neutral-400 truncate">
                      {booking.notes}
                    </p>
                  )}
                  <div className="flex items-center gap-4 pt-1 text-xs text-neutral-500">
                    <span>
                      {booking.date} {booking.time}
                    </span>
                    <span>
                      {booking.passengers} {t("columns.passengers").toLowerCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden overflow-x-auto rounded-xl border border-neutral-200 bg-white md:block">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-neutral-200 bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 font-medium text-neutral-700">
                    {t("columns.client")}
                  </th>
                  <th className="px-4 py-3 font-medium text-neutral-700">
                    {t("columns.service")}
                  </th>
                  <th className="px-4 py-3 font-medium text-neutral-700">
                    {t("columns.route")}
                  </th>
                  <th className="px-4 py-3 font-medium text-neutral-700">
                    {t("columns.dateTime")}
                  </th>
                  <th className="px-4 py-3 font-medium text-neutral-700">
                    {t("columns.passengers")}
                  </th>
                  <th className="px-4 py-3 font-medium text-neutral-700">
                    {t("columns.status")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filtered.map((booking, idx) => (
                  <tr
                    key={booking.id}
                    className={`transition-colors hover:bg-primary-50/50 ${
                      idx % 2 === 1 ? "bg-neutral-50/50" : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="font-medium text-neutral-900">
                        {booking.clientName}
                      </div>
                      {booking.company && (
                        <div className="text-xs text-neutral-500">
                          {booking.company}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-neutral-600">
                      {t("serviceTypes." + booking.serviceType)}
                    </td>
                    <td className="max-w-[280px] truncate px-4 py-3 text-neutral-600">
                      {booking.pickup} → {booking.destination}
                      {booking.notes && (
                        <div className="mt-0.5 truncate text-xs text-neutral-400">
                          {booking.notes}
                        </div>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-neutral-600">
                      <div>{booking.date}</div>
                      <div className="text-xs text-neutral-400">
                        {booking.time}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-neutral-600">
                      {booking.passengers}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[booking.status]}`}
                      >
                        {t("status." + booking.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
