import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Noto_Serif_Hebrew, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const openSans = Open_Sans({
  subsets: ["latin", "hebrew"],
  variable: "--font-sans",
});

const notoSerif = Noto_Serif_Hebrew({
  subsets: ["hebrew"],
  variable: "--font-serif",
});

const ibmPlex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "רישומית",
  description: "הפקת חשבוניות, קבלות, דרישות תשלום ועוד..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${openSans.variable} ${notoSerif.variable} ${ibmPlex.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
