import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caden Grover | Software Engineer & Cybersecurity",
  description:
    "Software engineer and cybersecurity student building secure systems, AI-powered tools, and production data pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grid-bg">
        <div className="scan-line" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="py-8 px-6 text-center">
          <p className="text-xs text-muted/60 font-mono tracking-wide">
            Caden Grover &middot; 2026
          </p>
        </footer>
      </body>
    </html>
  );
}
