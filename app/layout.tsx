import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thakur Saad",
  description: "Your partner in AI-driven solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
