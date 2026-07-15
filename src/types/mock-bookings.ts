export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

export interface MockBooking {
  id: string;
  clientName: string;
  company?: string;
  serviceType: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: number;
  status: BookingStatus;
  notes?: string;
}
