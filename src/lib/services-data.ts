import { ServiceType } from "@/types/services";

export interface ServiceSummaryCard {
  serviceType: ServiceType;
  icon: string;
  href: string;
}

export const serviceSummaryCards: ServiceSummaryCard[] = [
  {
    serviceType: "airport",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`,
    href: "/services#airport",
  },
  {
    serviceType: "corporate",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM9 20v-5h6v5M12 3l9 4H3l9-4z"/></svg>`,
    href: "/services#corporate",
  },
  {
    serviceType: "group",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    href: "/services#group",
  },
  {
    serviceType: "private",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s7-7.7 7-12.4A7 7 0 005 8.6C5 13.3 12 21 12 21zM9.5 8.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"/></svg>`,
    href: "/services#private",
  },
];
