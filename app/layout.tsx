import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vexa AI — Build Smarter with AI",
  description: "Vexa AI helps you automate workflows, generate insights, and ship products faster.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}