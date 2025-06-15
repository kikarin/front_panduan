import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSProvider from "@/components/AOSProvider"; // komponen client

export const metadata: Metadata = {
  title: "Panduan",
  description: "Portal Tutorial by Jaganet",
};

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={karla.variable}>
      <body className="font-sans antialiased">
        <AOSProvider />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
