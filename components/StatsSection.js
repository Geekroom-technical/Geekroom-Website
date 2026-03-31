"use client";

export default function StatsSection() {
  return (
    <section className="relative w-full py-16 flex justify-center z-10 px-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-4xl">
        
        {/* Orange Stat Card */}
        <div className="group relative w-full max-w-[320px] h-48 flex flex-col items-center justify-center rounded-2xl border border-[#f97316] bg-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]">
          {/* Subtle inner top-light reflection */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#f97316]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-wide drop-shadow-lg">
            30+
          </h3>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide">
            Active Members
          </p>
        </div>

        {/* Teal Stat Card */}
        <div className="group relative w-full max-w-[320px] h-48 flex flex-col items-center justify-center rounded-2xl border border-[#00A8B5] bg-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,168,181,0.2)]">
           {/* Subtle inner top-light reflection */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00A8B5]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <h3 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-wide drop-shadow-lg">
            3+
          </h3>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide">
            Events Held
          </p>
        </div>

      </div>
    </section>
  );
}