import { z } from "zod";
import { signUp } from "./auth-client";
import { getErrorMessage } from "@/lib/utils";

const signUpSchema = z.object({
  name: z.string().min(2, "שם חייב להכיל לפחות 2 תווים"),
  email: z.email("כתובת אימייל לא תקינה"),
  password: z.string().min(8, "סיסמה חייבת להכיל לפחות 8 תווים"),
  image: z.url().optional(),
});

type signUpInputProps = z.infer<typeof signUpSchema>;

export const signUpWithEmail = async (raw: signUpInputProps) => {
  const parsed = signUpSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      errorMessage: Object.values(parsed.error.flatten().fieldErrors).join(
        ", ",
      ),
    };
  }

  const { data, error } = await signUp.email({
    ...parsed.data,
  });

  if (error) return { errorMessage: getErrorMessage(error?.statusText) };
  return { data };
};
