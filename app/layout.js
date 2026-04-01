"use client";

import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    document.documentElement.style.overscrollBehaviorX = "none";
    document.body.style.overscrollBehaviorX = "none";
  }, []);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <title>GeekRoom | Tech Community</title>
        <meta name="description" content="Where coders connect, build, and grow." />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black font-sans">
        <main className="flex-grow flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
