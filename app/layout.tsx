import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/header";

const poppins = Poppins({ subsets: [], weight: '500', display: "swap", });

export const metadata: Metadata = {
  title: "Probinsyano Vlogs",
  description: "This website is a personal blogs to promote my videos from facebook.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
