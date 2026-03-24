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
        style={{ background: "rgba(0, 0, 0, 0.35)" }}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 right-0 h-full w-72 z-50
          rounded-l-3xl flex flex-col
          transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{
          background: "rgba(20, 20, 25, 0.55)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "-8px 0 40px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255,255,255,0.05)",
        }}
        aria-label="Navigation sidebar"
      >
        <div className="flex items-center justify-end px-6 pt-6 pb-2">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-gray-500 hover:text-white p-2 rounded-xl transition-all duration-200 hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-5 py-8 flex-grow">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              className="group flex items-center gap-4 px-4 py-4 rounded-2xl
                text-gray-400 text-xl font-semibold tracking-wide
                hover:text-orange-400 hover:translate-x-1.5
                hover:bg-white/5
                transition-all duration-200 ease-out"
            >
              <span
                className="w-[3px] h-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "linear-gradient(to bottom, #f97316, #ea580c)" }}
              />
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-8 py-6">
          <div
            className="w-full h-px mb-4"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
          <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
            GeekRoom © 2025
          </p>
        </div>
      </aside>
    </>
  );
}
