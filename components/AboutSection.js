"use client";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative w-full min-h-screen flex items-center justify-start px-6 md:px-16 lg:px-32 py-24 bg-transparent overflow-hidden"
    >
      <div 
        className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[500px] h-[500px] bg-[#00A8B5]/10 blur-[150px] rounded-full pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl w-full">
        <div className="flex items-center gap-4 mb-6 opacity-80">
          <span className="w-12 h-[2px] bg-gradient-to-r from-[#f97316] to-transparent"></span>
          <span className="text-[#f97316] uppercase tracking-[0.3em] text-sm font-bold">
            Our Vision
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 tracking-tight drop-shadow-lg">
          About <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8B5] to-[#0D9488]">
            Us.
          </span>
        </h2>

        {/* Stylized Glassmorphism Content Box */}
        <div className="relative p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,255,255,0.01)] hover:border-[#00A8B5]/40 transition-all duration-700 group">
          
          {/* Neon Corner Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#f97316] rounded-tl-3xl opacity-40 group-hover:opacity-100 group-hover:shadow-[[-8px_-8px_20px_rgba(249,115,22,0.2)]] transition-all duration-500" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00A8B5] rounded-br-3xl opacity-40 group-hover:opacity-100 group-hover:shadow-[[8px_8px_20px_rgba(0,168,181,0.2)]] transition-all duration-500" />

          {/* Typography */}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            <span className="text-white font-medium">Geek Room</span> is where curiosity meets creation, where ideas escape notebooks and shape the future. You may not know us yet — but soon, you won’t forget us.
            <br /><br />
            Our orientation is coming, and with it begins{" "}
            <span className="text-[#00A8B5] font-semibold drop-shadow-[0_0_8px_rgba(0,168,181,0.3)]">
              a community
            </span>,{" "}
            <span className="text-[#f97316] font-semibold drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">
              a movement
            </span>,{" "}
            <span className="text-white font-bold tracking-widest uppercase text-lg ml-1">
              a spark.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}