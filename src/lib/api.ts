import { BookingFormValues } from "@/lib/validation";
import { BookingStatus } from "@/types/mock-bookings";

const API_BASE = "http://localhost:3001/api";

export interface Booking {
  id: string;
  firstName: string;
  lastName: string;
  company?: string;
  phone: string;
  email: string;
  serviceType: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: number;
  airportMeetAndGreet: boolean;
  comment?: string;
  consent: boolean;
  status: BookingStatus;
  createdAt: string;
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const body = await response.json().catch(() => null);
    const message =
      body?.message ?? `Request failed with status ${response.status}`;
    throw new Error(Array.isArray(message) ? message.join(", ") : message);
  }
  return response.json();
}

export async function createBooking(
  data: BookingFormValues
): Promise<Booking> {
  const { pickupAddress, ...rest } = data;
  const response = await fetch(`${API_BASE}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...rest, pickup: pickupAddress }),
  });
  return handleResponse<Booking>(response);
}

export async function getBookings(): Promise<Booking[]> {
  const response = await fetch(`${API_BASE}/bookings`);
  return handleResponse<Booking[]>(response);
}

export async function updateBookingStatus(
  id: string,
  status: BookingStatus
): Promise<Booking> {
  const response = await fetch(`${API_BASE}/bookings/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return handleResponse<Booking>(response);
}
