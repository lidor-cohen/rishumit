import { createAuthClient } from "better-auth/react";

const BASE_URL = "http://localhost:3000";

export const { signIn, signUp, useSession } = createAuthClient({
  baseURL: BASE_URL,
});
