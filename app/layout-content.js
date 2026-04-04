"use client";

import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayoutContent({ children }) {
  useEffect(() => {
    document.documentElement.style.overscrollBehaviorX = "none";
    document.body.style.overscrollBehaviorX = "none";
  }, []);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/next.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://geekroom.tech" />
        <meta property="og:image" content="https://res.cloudinary.com/dwqzgfghq/image/upload/q_auto/f_auto/v1775288192/Geekroom_pswjia.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dwqzgfghq/image/upload/q_auto/f_auto/v1775288192/Geekroom_pswjia.png" />
        
        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GeekRoom",
              "alternateName": "GeekRoom Tech Community",
              "url": "https://geekroom.tech",
              "logo": "https://geekroom.tech/Transparentlogo.webp",
              "description": "Where coders connect, build, and grow.",
              "image": "https://res.cloudinary.com/dwqzgfghq/image/upload/q_auto/f_auto/v1775288192/Geekroom_pswjia.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Community Support",
                "url": "https://geekroom.tech/contact"
              }
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black font-sans">
        {/* Navbar globally mounted here */}
        <Navbar />

        <main className="flex-grow flex flex-col relative z-0">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
