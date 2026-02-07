import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const GuestLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center">{children}</main>
      <Footer />
    </div>
  );
};
export default GuestLayout;
