import { z } from "zod";

export const bussinessSchema = z.object({
  bussinessName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be less than 50 characters long" }),
});

export const meetingSchema = z.object({
  eventName: z
    .string()
    .min(2, { message: "Event Name must be at least 2 characters long" })
    .max(50, { message: "Event Name must be less than 50 characters long" }),
  duration: z
    .number()
    .min(15, { message: "Duration must be at least 15 minutes" })
    .max(60, { message: "Duration cannot exceed 60 minutes" }),
  locationType: z
    .string()
    .min(2, { message: "Location Type must be selected" }),
  locationUrl: z
    .string()
    .url({ message: "Invalid URL" })
    .min(2, { message: "Location URL must be provided" }),
  themeColor: z.string().min(1, { message: "Theme Color must be selected" }),
});
