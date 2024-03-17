import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { MyContextProvider } from "@/provider/MyContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Flat",
  description: "Created by Arko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* @ts-ignore */}
        <MyContextProvider>
          <Navbar />
          {children}
        </MyContextProvider>
      </body>
    </html>
  );
}
