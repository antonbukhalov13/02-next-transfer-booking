import { ServiceType } from "./services";

export interface BookingFormData {
  firstName: string;
  lastName: string;
  company?: string;
  phone: string;
  email: string;
  serviceType: ServiceType;
  pickupAddress: string;
  destination: string;
  date: string;
  time: string;
  passengers: number;
  airportMeetAndGreet: boolean;
  comment?: string;
  consent: boolean;
}
