import { Inter } from "next/font/google";
import "@/styles/index.scss";
import "@/styles/globals.scss";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
export default function OrgPlainLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
