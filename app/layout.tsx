import type { Metadata } from "next";
import { inter } from "../lib/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "News Homepage | Frontend Mentor Challenge",
  description: "A modern and responsive news website homepage built with Next.js, TypeScript, and Tailwind CSS. Features optimal layout for all devices and interactive elements.",
  keywords: ["news", "homepage", "nextjs", "typescript", "tailwind", "responsive design", "frontend mentor"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    title: "News Homepage | Frontend Mentor Challenge",
    description: "A modern and responsive news website homepage built with Next.js, TypeScript, and Tailwind CSS.",
    siteName: "News Homepage",
  },
  twitter: {
    card: "summary_large_image",
    title: "News Homepage | Frontend Mentor Challenge",
    description: "A modern and responsive news website homepage built with Next.js, TypeScript, and Tailwind CSS.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}