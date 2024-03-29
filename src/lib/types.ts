import { StaticImageData } from "next/image";
import { z } from "zod";
import { bussinessSchema, meetingSchema } from "./schemas";

export type SideNavItemType = {
  id: string | number;
  name: string;
  path: string;
  icon: React.ElementType;
}[];

export type LocationItemType = {
  id: string | number;
  name: string;
  icon: StaticImageData;
}[];

export type ThemeColorItemType = string[];

export type BussinessType = z.infer<typeof bussinessSchema>;

export type MeetingType = z.infer<typeof meetingSchema>;
