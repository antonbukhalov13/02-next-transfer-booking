import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LONDON ROUTE TRANSFERS",
  description: "Comfortable and reliable transfers in London",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
