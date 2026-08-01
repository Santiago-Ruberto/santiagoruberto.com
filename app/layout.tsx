import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santiago Ruberto",
  description: "Santiago Ruberto",
  icons: {
    icon: "/applepirateflag.webp",
    shortcut: "/applepirateflag.webp",
    apple: "/applepirateflag.webp",
  },
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
