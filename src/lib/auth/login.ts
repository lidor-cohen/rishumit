import { z } from "zod";
import { signIn } from "./auth-client";
import { getErrorMessage } from "@/lib/utils";

const loginSchema = z.object({
  email: z.email("כתובת אימייל לא תקינה"),
  password: z.string(),
});

type loginInputProps = z.infer<typeof loginSchema>;

export const loginWithEmail = async (raw: loginInputProps) => {
  const parsed = loginSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      errorMessage: Object.values(parsed.error.flatten().fieldErrors).join(
        ", ",
      ),
    };
  }

  const { data, error } = await signIn.email({
    ...parsed.data,
  });

  if (error) return { errorMessage: getErrorMessage(error?.statusText) };
  return { data };
};
