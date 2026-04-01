"use client";
import { useEffect, useRef } from "react";

export default function InteractiveBackground({ children }) {
  const bgRef1 = useRef(null);
  const bgRef2 = useRef(null);
  const bgRef3 = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        if (bgRef1.current) {
          bgRef1.current.style.transform = `translate(${x * -70}px, ${y * -70}px)`;
        }
        if (bgRef2.current) {
          bgRef2.current.style.transform = `translate(${x * -100}px, ${y * -100}px)`;
        }
        if (bgRef3.current) {
          bgRef3.current.style.transform = `translate(${x * -50}px, ${y * -50}px)`;
        }
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Interactive Blobs Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full z-0">
        <div 
          ref={bgRef1}
          className="absolute w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full bg-cyan-200/40 blur-[120px] will-change-transform ease-out transition-transform duration-300"
          style={{ bottom: "-20%", left: "-10%" }}
        />
        <div 
          ref={bgRef2}
          className="absolute w-[700px] h-[700px] sm:w-[1000px] sm:h-[1000px] rounded-full bg-orange-200/40 blur-[150px] will-change-transform ease-out transition-transform duration-300"
          style={{ top: "0%", right: "-10%" }}
        />
        <div 
          ref={bgRef3}
          className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-pink-100/50 blur-[100px] will-change-transform ease-out transition-transform duration-300"
          style={{ top: "-10%", left: "20%" }}
        />
      </div>
      
      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
}
