import { z } from "zod";

export const bookingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().optional(),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email"),
  serviceType: z.string().min(1, "Service type is required"),
  pickupAddress: z.string().min(1, "Pickup address is required"),
  destination: z.string().min(1, "Destination is required"),
  travelDate: z.string().min(1, "Travel date is required"),
  pickupTime: z.string().min(1, "Pickup time is required"),
  passengers: z.number().min(1, "At least 1 passenger"),
  airportMeetGreet: z.boolean().default(false),
  comments: z.string().optional(),
  consent: z.literal(true).refine((val) => val === true, {
    message: "You must consent to data processing",
  }),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
