import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", name: "דף הבית" },
  { href: "/use-policy", name: "תנאי שימוש" },
  { href: "/privay-and-security", name: "פרטיות ואבטחה" },
  { href: "/terms-of-service", name: "תקנון" },
];

const Footer = () => {
  return (
    <footer className="bg-primary w-full rounded-t-2xl">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center gap-24 p-8">
          <div className="flex flex-col gap-4 max-w-md">
            <div className="flex gap-4">
              <Image src="/next.svg" alt="logo" width={100} height={75} />
              <span className="font-bold">חשבונית מוזרה</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              fugiat id iure labore officia. Amet dolore ea, est excepturi
              expedita ipsum modi, odit optio pariatur praesentium quam quisquam
              sit soluta!
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base">קישורים רלוונטיים</h3>
            <ul className="text-sm space-y-1">
              {links.map(({ href, name }) => (
                <li
                  key={href}
                  className="transition-all duration-200 hover:font-semibold"
                >
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
