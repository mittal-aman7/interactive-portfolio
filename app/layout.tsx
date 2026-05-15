import "./globals.css";
import type { Metadata } from "next";
import { bodyFont } from "./fonts";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Interactive Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        {children}
      </body>
    </html>
  );
}