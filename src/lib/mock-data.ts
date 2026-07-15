import { MockBooking } from "../types/mock-bookings";

export const mockBookings: MockBooking[] = [
  {
    id: "1",
    clientName: "John Smith",
    company: "Acme Corp",
    serviceType: "airport",
    pickup: "10 Example House, London",
    destination: "Heathrow Terminal 5",
    date: "2025-01-15",
    time: "08:00",
    passengers: 2,
    status: "confirmed",
  },
];
