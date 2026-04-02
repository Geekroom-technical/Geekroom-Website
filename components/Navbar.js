"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-6 sm:gap-10 px-8 py-3.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-300">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={`relative text-sm sm:text-base font-bold tracking-wide transition-colors duration-300 
                bg-clip-text bg-gradient-to-r from-[#c2410c] to-[#0f766e]
                ${isActive ? "text-transparent" : "text-black hover:text-transparent"}
              `}
            >
              {label}
              
              {/* Underline indicator for the active page */}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-[#c2410c] to-[#0f766e] rounded-full transform -translate-x-1/2" />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}