import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

 export function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
 }

// Function to convert a date to an Arabic date string
export function getArabicDateString(date: Date): string {
  return format(date, "d MMMM yyyy", { locale: ar });
}


