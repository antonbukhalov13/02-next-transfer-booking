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
  travelDate: string;
  pickupTime: string;
  passengers: number;
  airportMeetGreet: boolean;
  comments?: string;
  consent: boolean;
}
