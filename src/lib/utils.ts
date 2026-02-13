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

export const checkIsraeliId = (id: string): boolean => {
  if (id.length !== 9) return false;

  const checker = id.split("");
  const tester = [1, 2, 1, 2, 1, 2, 1, 2, 1];

  // step 1 - multiply
  for (let i = 0; i < tester.length; i++) {
    tester[i] *= Number(checker[i]);
  }

  // step 2 - sum every 2-digit number
  for (let i = 0; i < tester.length; i++) {
    tester[i] = tester[i] > 9 ? (tester[i] -= 9) : tester[i];
  }

  // step 3 - check if sum is divisible by 10
  return tester.reduce((acc, curr) => acc + curr, 0) % 10 === 0;
};
