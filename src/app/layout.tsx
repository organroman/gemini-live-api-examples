import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAN Classroom",
  description:
    "DAN Classroom is a live translation platform that allows you to broadcast your voice, screen, and video to attendees who can choose their preferred language. Translation voices are generated on demand.",
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
