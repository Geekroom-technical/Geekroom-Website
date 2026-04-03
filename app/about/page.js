"use client";

import { useState, useEffect } from "react";
import InteractiveBackground from "../../components/InteractiveBackground";
import Image from "next/image";

export default function AboutPage() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
    
    // Fetch About
    fetch(`${apiUrl}/api/about`)
      .then((res) => res.json())
      .then(setAboutData)
      .catch((err) => console.error("Failed to fetch about:", err));
  }, []);

  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center px-4 text-center select-none w-full max-w-6xl mx-auto flex-grow py-32 space-y-24">

        {/* Hero Section */}
        <section className="text-center animate-fadeIn space-y-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tighter text-[#1a1a1a] select-none uppercase leading-none">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-cyan-500 to-cyan-600">GeekRoom</span>
          </h1>
          <p className="text-lg sm:text-2xl font-semibold tracking-[0.2em] text-gray-400 uppercase">
            {aboutData?.description || "Explore • Collaborate • Create"}
          </p>
        </section>

        {/* Mission Section */}
        {aboutData?.missionPoints && (
          <section className="w-full space-y-12">
            <h2 className="text-3xl font-semibold text-black tracking-widest border-b-2 border-black inline-block pb-1">
              Our Mission
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {aboutData.missionPoints.map((point, idx) => (
                <article
                  key={idx}
                  className="group relative rounded-[2.5rem] border-2 border-black/5 bg-white/40 p-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 backdrop-blur-3xl"
                >
                  <div className="mb-8 inline-flex rounded-2xl bg-gradient-to-r from-cyan-500 to-orange-500 p-4 text-black shadow-lg group-hover:rotate-6 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={point.icon_svg} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-semibold text-sm">{point.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Stats Section */}
        {aboutData?.stats && (
           <section className="w-full group p-12 rounded-[3.5rem] border-2 border-black/5 bg-white/20 backdrop-blur-3xl shadow-sm hover:shadow-2xl transition-all duration-700">
             <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
               {aboutData.stats.map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center">
                   <p className="text-5xl sm:text-6xl font-semibold text-black mb-2 tracking-tighter">
                     {item.value}
                   </p>
                   <p className="text-[10px] uppercase tracking-[0.4em] font-semibold text-gray-400">
                     {item.label}
                   </p>
                 </div>
               ))}
             </div>
           </section>
        )}

        {/* Loading State Skeleton */}
        {!aboutData && (
          <div className="py-20 animate-pulse space-y-4">
             <div className="h-1 lg:w-96 w-40 bg-gray-200 rounded-full mx-auto"></div>
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em]">Establishing Connection</p>
          </div>
        )}

        <p className="text-gray-800 text-base sm:text-lg md:text-xl font-semibold tracking-tight opacity-50 animate-fadeIn pt-12">
          Learn ✦ Build ✦ Grow ✦ Lead
        </p>
      </div>
    </InteractiveBackground>
  );
}
