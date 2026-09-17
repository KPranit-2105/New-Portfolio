import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind class names cleanly using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string into readable month and year
 */
export function formatDate(dateString: string): string {
  if (dateString.toLowerCase() === "present") return "Present";
  return dateString;
}
