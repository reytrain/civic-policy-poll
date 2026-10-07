import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Civic Policy Poll | GOVT 2305",
  description: "Share your views on government, public money, and business in a voluntary student research survey.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
