"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import InteractiveBackground from "../components/InteractiveBackground";
import Collaborators from "../components/Collaborators";

export default function Home() {
  const [data, setData] = useState({
    description: "Geek Room is more than just a tech club — it's a community."
  });

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

    // Fetch About
    fetch(`${apiUrl}/api/about`)
      .then((res) => res.json())
      .then((json) => {
        if (json.description) setData(json);
      })
      .catch((err) => console.error("Failed to fetch about:", err));
  }, []);

  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center px-4 text-center select-none w-full max-w-4xl mx-auto flex-grow py-20">

        {/* Logo */}
        <div className="w-48 sm:w-56 flex justify-center items-center drop-shadow-sm mb-4 animate-fadeIn animate-float">
          <Image
            src="/Transparentlogo.webp"
            alt="GeekRoom Logo"
            width={300}
            height={300}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1a1a1a] select-none mb-4">
          Geek Room
        </h1>

        <div className="px-5 py-1.5 rounded-full border-[1.5px] border-gray-600 mb-6 bg-white/50 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-gray-800 hover:bg-white text-gray-800 font-medium text-sm sm:text-base tracking-wide">
          Campus Chapter
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-black mb-6">
          SRMIST Delhi-NCR Campus
        </h2>

        <p className="text-gray-800 text-base sm:text-lg md:text-xl font-normal tracking-tight leading-relaxed max-w-3xl mb-16">
          {data.description}
        </p>

        <Collaborators />

      </div>
    </InteractiveBackground>
  );
}