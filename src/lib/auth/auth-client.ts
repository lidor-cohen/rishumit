import { createAuthClient } from "better-auth/react";
import { organizationClient } from "better-auth/client/plugins";

const BASE_URL = "http://localhost:3000";

export const { signIn, signUp, useSession, organization } = createAuthClient({
  baseURL: BASE_URL,
  plugins: [organizationClient()],
});
