import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DuskBackground from "./components/DuskBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ackshat Tiwari",
  description:
    "Building geo-environmental tech and apps to empower DMV communities.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* `relative` is what lets the sky layer stretch to the full document
          height rather than a single viewport */}
      <body className="relative min-h-full">
        <DuskBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
