import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const textFormatter = (text: string) => {
  if(text === 'isbn') return text.toUpperCase()
   return text.charAt(0).toUpperCase() + text.slice(1);
};
