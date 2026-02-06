"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const currentPath = usePathname();
  const navItems = [
    { path: "/", label: "דף הבית" },
    { path: "/pricing", label: "מחירון" },
    { path: "/contact", label: "צרו קשר" },
  ];

  return (
    <header className="max-w-7xl mx-auto sticky top-8 z-50">
      <nav className="container mx-auto my-8 p-6 flex justify-between items-center shadow-lg text-secondary-foreground bg-card rounded-3xl">
        <div className="flex items-center gap-8">
          <div className="flex gap-8 items-center ">
            <Image src="/next.svg" alt="לוגו" width={120} height={75} />
          </div>
          <div className="flex gap-4">
            {navItems.map(({ path, label }, index) => (
              <Link
                key={path + index}
                href={path}
                className={`${currentPath === path ? "font-semibold" : "font-normal"} transition-all duration-200`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Link href="/dashboard">
            <Button className="font-semibold">כניסה למערכת</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
