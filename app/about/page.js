"use client";

import { useState, useEffect } from "react";
import InteractiveBackground from "../../components/InteractiveBackground";
import Image from "next/image";

export default function AboutPage() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    
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
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#1a1a1a] select-none">
            About {aboutData?.title || "GeekRoom"}
          </h1>
          <p className="text-gray-800 text-lg sm:text-2xl font-medium tracking-tight leading-relaxed max-w-4xl mx-auto opacity-90">
            {aboutData?.description || "Geek Room is a college tech club where students explore, collaborate, and create real software."}
          </p>
        </section>

        {/* Mission Section */}
        {aboutData?.missionPoints && (
          <section className="w-full space-y-12">
            <h2 className="text-4xl font-bold text-black tracking-widest border-b-4 border-black inline-block pb-2">
              Our Mission
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {aboutData.missionPoints.map((point, idx) => (
                <article
                  key={idx}
                  className="group relative rounded-3xl border-2 border-black/5 bg-white/40 p-8 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-black p-4 text-white shadow-lg group-hover:rotate-6 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: point.icon_svg }} />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">{point.title}</h3>
                  <p className="text-gray-700 leading-relaxed font-semibold">{point.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Stats Section */}
        {aboutData?.stats && (
           <section className="w-full group p-12 rounded-[3rem] border-2 border-black/5 bg-white/20 backdrop-blur-3xl shadow-sm hover:shadow-2xl transition-all duration-700">
             <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
               {aboutData.stats.map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center">
                   <p className="text-5xl sm:text-6xl font-bold text-[#1a1a1a] mb-2 tracking-tighter">
                     {item.value}
                   </p>
                   <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 opacity-60">
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

      </div>
    </InteractiveBackground>
  );
}
