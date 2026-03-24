"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      <body className="min-h-full flex flex-col bg-[#050505] text-[#ededed]">
        <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 bg-transparent">
          <div className="flex items-center">
            <Image
              src="/Transparentlogo.webp"
              alt="GeekRoom Logo"
              width={80}
              height={54}
              priority
            />
          </div>

          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            className="flex flex-col justify-center items-center gap-[5px] p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
          >
            <span className="block w-6 h-[2px] bg-current rounded-full transition-all duration-200 group-hover:w-7" />
            <span className="block w-6 h-[2px] bg-current rounded-full transition-all duration-200" />
            <span className="block w-4 h-[2px] bg-current rounded-full transition-all duration-200 group-hover:w-7" />
          </button>
        </header>

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
