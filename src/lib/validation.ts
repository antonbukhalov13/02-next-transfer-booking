import { z } from "zod";

export const bookingSchema = z.object({
  firstName: z.string().min(1, "required"),
  lastName: z.string().min(1, "required"),
  company: z.string().optional(),
  phone: z.string().min(1, "required"),
  email: z.email("email").min(1, "required"),
  serviceType: z.string().min(1, "required"),
  pickupAddress: z.string().min(1, "required"),
  destination: z.string().min(1, "required"),
  date: z.string().min(1, "required"),
  time: z.string().min(1, "required"),
  passengers: z.coerce.number().min(1, "minPassengers"),
  airportMeetAndGreet: z.union([z.boolean(), z.string()]).transform(v => v === true || v === "true"),
  comment: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: "consent",
  }),
});

export type BookingFormValues = z.input<typeof bookingSchema>;
