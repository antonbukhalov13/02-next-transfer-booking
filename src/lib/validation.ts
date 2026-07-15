import { z } from "zod";

export const bookingSchema = z.object({
  firstName: z.string().min(1, "validation.required"),
  lastName: z.string().min(1, "validation.required"),
  company: z.string().optional(),
  phone: z.string().min(1, "validation.required"),
  email: z.string().email("validation.email"),
  serviceType: z.string().min(1, "validation.required"),
  pickupAddress: z.string().min(1, "validation.required"),
  destination: z.string().min(1, "validation.required"),
  date: z.string().min(1, "validation.required"),
  time: z.string().min(1, "validation.required"),
  passengers: z.number().min(1, "validation.minPassengers"),
  airportMeetAndGreet: z.boolean().default(false),
  comment: z.string().optional(),
  consent: z.literal(true).refine(() => false, {
    message: "validation.consent",
  }),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
