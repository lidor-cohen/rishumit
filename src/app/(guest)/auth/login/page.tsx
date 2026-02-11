import React from "react";
import LoginComponent from "@/components/login-component";

const LoginPage = async () => {
  return (
    <div className="flex items-center h-full justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginComponent />
      </div>
    </div>
  );
};
export default LoginPage;
