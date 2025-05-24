import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenText(text: string, maxLength: number) {
  const ellipsis = "...";

  // If the text is already shorter than or equal to the max length, return it as is
  if (text.length <= maxLength) {
    return text;
  }

  // Calculate the actual length of the text content without the ellipsis
  const truncLength = maxLength - ellipsis.length;

  // Ensure there's enough space for at least some text plus the ellipsis
  if (truncLength <= 0) {
    return ellipsis.substring(0, maxLength); // Just return ellipsis if max length is too small
  }

  // Get the substring up to the calculated length
  let shortened = text.substring(0, truncLength);

  // Optional: Try to avoid cutting a word in the middle if possible
  // Find the last space before the truncation point
  const lastSpaceIndex = shortened.lastIndexOf(" ");

  // If a space is found and it's not too close to the beginning, cut there
  if (lastSpaceIndex !== -1 && lastSpaceIndex > truncLength / 2) {
    shortened = shortened.substring(0, lastSpaceIndex);
  }

  return shortened + ellipsis;
}
