import { MenuItem, MeetingType, ThemeType } from "@/lib/types";
import zoom from "../../public/zoom.png";
import meet from "../../public/meet.png";
import phone from "../../public/phone.png";
import other from "../../public/other.png";
import { Briefcase, Calendar, Clock, Settings } from "lucide-react";

export const MENU_ITEMS: MenuItem = [
  {
    id: 1,
    name: "Meeting Type",
    path: "/dashboard/meeting-type",
    icon: Briefcase,
  },
  {
    id: 2,
    name: "Scheduled Meeting",
    path: "/dashboard/scheduled-meeting",
    icon: Calendar,
  },
  {
    id: 3,
    name: "Availability",
    path: "/dashboard/availability",
    icon: Clock,
  },
  {
    id: 4,
    name: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

export const MEETING_TYPES: MeetingType = [
  {
    id: 1,
    name: "Zoom",
    icon: zoom,
  },
  {
    id: 2,
    name: "Meet",
    icon: meet,
  },
  {
    id: 3,
    name: "Phone",
    icon: phone,
  },
  {
    id: 4,
    name: "Other",
    icon: other,
  },
];

export const THEME_OPTIONS: ThemeType = [
  "#4F75FE",
  "#13C38B",
  "#9F3CFE",
  "#FF555D",
  "#FF7D4F",
];
