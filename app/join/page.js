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

        {/* Coming Soon Card */}
        <div className="w-full max-w-2xl bg-white/40 backdrop-blur-3xl border-2 border-black/5 rounded-[3rem] p-16 shadow-2xl animate-slideInUp flex flex-col items-center space-y-8 group hover:border-black/10 transition-all duration-700">
          <div className="px-8 py-3 rounded-full border-2 border-black bg-black text-white text-sm font-semibold tracking-[0.3em] uppercase group-hover:scale-110 transition-transform">
            Applications Closed
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl font-semibold text-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-black via-gray-700 to-gray-500">
              Coming Soon
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl font-semibold max-w-md mx-auto leading-relaxed">
              We're currently preparing for our next major recruitment cycle. Stay tuned for updates!
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse [animation-delay:200ms]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse [animation-delay:400ms]"></div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-gray-800 text-base sm:text-lg md:text-xl font-semibold tracking-tight opacity-50 animate-fadeIn">
          Join ✦ Learn ✦ Build ✦ Lead
        </p>
      </div>
    </InteractiveBackground>
  )
}
