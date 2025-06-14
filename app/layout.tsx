import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Panduan",
  description: "Portal Tutorial by Jaganet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={karla.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
