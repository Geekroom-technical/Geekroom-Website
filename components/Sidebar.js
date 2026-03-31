"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
];

export default function Sidebar({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(5, 5, 5, 0.6)", backdropFilter: "blur(4px)" }}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 right-0 h-full w-72 z-50
          rounded-l-3xl flex flex-col
          transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{
          background: "rgba(11, 25, 44, 0.45)", // Deepened the base color for better contrast
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderLeft: "1px solid rgba(0, 168, 181, 0.2)", // Subtle Teal border
          boxShadow: "-8px 0 40px rgba(0, 0, 0, 0.5), inset 1px 0 0 0 rgba(0,168,181,0.1)",
        }}
        aria-label="Navigation sidebar"
      >
        <div className="flex items-center justify-end px-6 pt-6 pb-2">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-gray-400 hover:text-[#f97316] p-2 rounded-xl transition-all duration-200 hover:bg-[#f97316]/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-2 px-5 py-8 flex-grow">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              className="group flex items-center gap-4 px-4 py-4 rounded-2xl
                text-gray-300 text-lg font-bold tracking-wide
                hover:text-white hover:translate-x-2
                hover:bg-gradient-to-r hover:from-[#00A8B5]/10 hover:to-transparent
                transition-all duration-300 ease-out"
            >
              <span
                className="w-1 h-6 rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                style={{ background: "linear-gradient(to bottom, #f97316, #fb923c)" }}
              />
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-8 py-6">
          <div
            className="w-full h-px mb-4"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,168,181,0.3), transparent)" }}
          />
          <p className="text-xs tracking-widest text-center uppercase text-gray-500 font-medium">
            GeekRoom © 2026
          </p>
        </div>
      </aside>
    </>
  );
}