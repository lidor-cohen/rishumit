import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getErrorMessage = (errorCode: string | undefined): string => {
  if (!errorCode || errorCode === "") return "שגיאה";

  const errorCodeMap = {
    UNAUTHORIZED: "שם משתמש או סיסמא אינם נכונים",
  };

  return errorCodeMap[errorCode as keyof typeof errorCodeMap] || "";
};
