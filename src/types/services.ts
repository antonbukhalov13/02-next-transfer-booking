export type ServiceType = "airport" | "corporate" | "group" | "private";

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
