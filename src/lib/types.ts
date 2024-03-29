import { StaticImageData } from "next/image";
import { z } from "zod";
import { bussinessSchema, meetingTypeSchema } from "./schemas";

export type MenuItem = {
  id: string | number;
  name: string;
  path: string;
  icon: React.ElementType;
}[];

export type MeetingType = {
  id: string | number;
  name: string;
  icon: StaticImageData;
}[];

export type ThemeType = string[];

export type BussinessType = z.infer<typeof bussinessSchema>;

export type MeetingTypeSchema = z.infer<typeof meetingTypeSchema>;
