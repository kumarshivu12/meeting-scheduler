import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateTimeSlots(interval: number) {
  const startTime = 8 * 60;
  const endTime = 22 * 60;
  const totalSlots = (endTime - startTime) / interval;
  const slots = Array.from({ length: totalSlots }, (_, i) => {
    const totalMinutes = startTime + i * interval;
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    const formattedHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    const period = hour >= 12 ? "PM" : "AM";
    return `${String(formattedHour).padStart(2, "0")}:${String(minute).padStart(
      2,
      "0"
    )} ${period}`;
  });

  return slots;
}
