"use client";
import { useEffect, useRef } from "react";

export default function InteractiveBackground({ children }) {
  const blob1 = useRef(null);
  const blob2 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      // Normalize mouse to -0.5 → 0.5
      const x = e.clientX / w - 0.5;
      const y = e.clientY / h - 0.5;

      // Mouse-tracking movement strength
      const strength = 180;

      if (blob1.current) {
        blob1.current.style.transform = `translate(${-x * strength}px, ${-y * strength}px)`;
      }
      if (blob2.current) {
        blob2.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh", background: "#ffffff" }}>
      {/* Blob 1 - top left (Cyan / Teal) - FIXED for scroll support */}
      <div ref={blob1} style={{
        position: "fixed", top: "-10%", left: "-5%",
        width: 900, height: 900, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.55), transparent 70%)",
        filter: "blur(80px)",
        transition: "transform 0.15s ease-out",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Blob 2 - bottom right (Orange) - FIXED for scroll support */}
      <div ref={blob2} style={{
        position: "fixed", bottom: "-10%", right: "-5%",
        width: 900, height: 900, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,115,22,0.55), transparent 70%)",
        filter: "blur(80px)",
        transition: "transform 0.15s ease-out",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Page content sits on top */}
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {children}
      </div>
    </div>
  );
}
