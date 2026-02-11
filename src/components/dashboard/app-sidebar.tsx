"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Newspaper, User2, Users2 } from "lucide-react";
import Image from "next/image";
import { useSession } from "@/lib/auth/auth-client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AppSidebar = () => {
  const user = useSession()?.data?.user;
  const currentPath = usePathname();

  const sidebarItems = [
    { name: "לקוחות", path: "/dashboard/clients", icon: Users2 },
    { name: "חשבוניות", path: "/dashboard/invoices", icon: Newspaper },
  ];

  return (
    <Sidebar
      className="p-6 text-primary-foreground"
      side="right"
      variant="inset"
      dir="rtl"
      collapsible="icon"
    >
      <SidebarHeader>
        <SidebarMenu className="space-y-8">
          <SidebarMenuItem className="mx-auto pb-2 border-b-2 border-primary">
            <Image src="/next.svg" alt="logo" width={100} height={150} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="py-6">
        <SidebarMenu>
          <SidebarGroup className="space-y-1">
            {sidebarItems.map(({ name, path, icon: Icon }) => (
              <SidebarMenuItem key={name}>
                <SidebarMenuButton
                  asChild
                  isActive={currentPath.startsWith(path)}
                >
                  <Link href={path}>
                    <Icon /> {name}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <User2 /> {user?.name}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
export default AppSidebar;
