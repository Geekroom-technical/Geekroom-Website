import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // Next.js built-in tool for fast navigation
import "./globals.css";
import Image from "next/image"; // Add this to the very top of your file

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "GeekRoom | Tech Community",
  description: "Where coders connect, build, and grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#ededed]">

        {/* The Global Navigation Bar */}
        <nav className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0a0a0a]">
          <div className="flex items-center gap-1 font-bold text-xl tracking-widest text-white">
            <Image
              src="/Transparentlogo.webp" // The slash means it looks in your 'public' folder
              alt="GeekRoom Logo"
              width={60}
              height={40}
            />
          </div>

          <div className="flex gap-6 font-medium text-sm text-gray-400">
            {/* The Link component is how Next.js switches pages without reloading the browser */}
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link href="/events" className="hover:text-orange-500 transition-colors">Events</Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
          </div>
        </nav>

        {/* The 'children' prop is whatever page currently being viewed (like page.js) */}
        <main className="flex-grow">
          {children}
        </main>

      </body>
    </html>
  );
}