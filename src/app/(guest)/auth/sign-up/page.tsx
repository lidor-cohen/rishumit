import React from "react";
import SignUpComponent from "@/components/signup-component";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const SignUpPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (session?.user) return redirect("/dashboard");

  return (
    <div className="flex items-center h-full justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpComponent />
      </div>
    </div>
  );
};
export default SignUpPage;
