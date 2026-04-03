"use client";

import InteractiveBackground from "../../components/InteractiveBackground";

export default function Projects() {
  return (
    <InteractiveBackground>
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center select-none overflow-hidden py-32 animate-fadeIn">
        {/* Subtle Background Accent */}
        <div 
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 blur-[160px]"
          aria-hidden="true"
        >
          <div className="w-[600px] h-[600px] rounded-full bg-cyan-600/20" />
          <div className="w-[400px] h-[400px] rounded-full bg-orange-600/20 -ml-20" />
        </div>

        {/* Status Badge */}
        <div className="mb-12 animate-slideInDown">
          <div className="px-8 py-3 rounded-full border-2 border-black bg-black text-white text-sm font-semibold tracking-[0.3em] uppercase">
            In Development
          </div>
        </div>

        {/* Hero Title */}
        <div className="flex flex-col items-center mb-10 animate-slideInUp">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-semibold tracking-tighter leading-none text-[#1a1a1a] select-none uppercase">
            Projects
          </h1>
          <span className="text-4xl sm:text-6xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-cyan-500 to-cyan-600 tracking-tight uppercase mt-4">
            COMING SOON
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg sm:text-2xl font-semibold tracking-[0.2em] max-w-lg leading-relaxed mb-12 uppercase animate-slideInUp delay-200">
          Crafting things that matter.
        </p>

        {/* Dynamic Tagline */}
        <p className="text-gray-800 text-base sm:text-lg md:text-xl font-semibold tracking-tight opacity-50 animate-fadeIn pt-12">
          Learn ✦ Build ✦ Grow ✦ Lead
        </p>
      </div>
    </InteractiveBackground>
  );
}
