import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Salih",
  description: "Salih platform",
};

export const gilraybold = localFont({
  src: [
    {
      path: "./fonts/gilroy-bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
