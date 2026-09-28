"use client"
import Image from "next/image";
import InteractiveBackground from "../../components/InteractiveBackground";

export default function JoinPage() {
  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center px-4 text-center select-none w-full max-w-4xl mx-auto flex-grow py-32 space-y-12">

        {/* GEEKROOM Heading */}
        <div className="space-y-4 animate-fadeIn">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tighter text-[#1a1a1a] select-none uppercase leading-none">
            Join <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-cyan-500 to-cyan-600">GeekRoom</span>
          </h1>
          <p className="text-lg sm:text-2xl font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Let's &nbsp; Geek &nbsp; Out
          </p>
        </div>


        {/* Footer note */}
        <p className="text-gray-800 text-base sm:text-lg md:text-xl font-semibold tracking-tight opacity-50 animate-fadeIn">
          Join ✦ Learn ✦ Build ✦ Lead
        </p>
      </div>
    </InteractiveBackground >
  )
}
