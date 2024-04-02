import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram",
  description: "Author: @1longg",
};

export default function RootLayout({
  children,
  modalpost,
}: Readonly<{
  children: React.ReactNode;
  modalpost: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
        {modalpost}
      </body>
    </html>
  );
}
