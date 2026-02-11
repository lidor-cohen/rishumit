import React from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/dashboard/app-sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider className="p-2">
      <AppSidebar />
      <SidebarInset className="bg-muted/50 m-2! min-h-[calc(100vh-2rem)] flex flex-col">
        <div className="p-4">
          <SidebarTrigger />
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};
export default DashboardLayout;
