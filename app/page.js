import ParticlesBackground from "../components/ParticlesBackground";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
import DecryptText from "../components/DecryptText";
import Link from "next/link";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"] });

export default function Home() {
  return (
    <ParticlesBackground>
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center select-none">
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-[600px] h-[600px] rounded-full bg-[#f97316]/10 blur-[150px]" />
        </div>

        <h1 className={`${orbitron.className} relative text-7xl sm:text-8xl md:text-9xl font-black tracking-widest leading-none text-white mb-6 drop-shadow-2xl uppercase`}>
          Geek
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#00A8B5] animate-gradient-x">
            Room
          </span>
        </h1>

        <div className="relative text-gray-400 text-lg sm:text-xl max-w-md leading-relaxed mb-12 h-14 flex flex-col items-center justify-center">
          <DecryptText
            text="A Room Full of Ideas."
            speed={40}
            maxIterations={20}
            animateOn="view"
          />
          <span className="text-[#00A8B5] font-medium drop-shadow-[0_0_8px_rgba(0,168,181,0.5)] mt-1">
            <DecryptText
              text="A Club Full of Geeks."
              speed={40}
              maxIterations={30} // Slightly higher iterations makes it decrypt slower/later
              animateOn="view"
            />
          </span>
        </div>
        <div className="relative flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/join"
            className="group relative px-8 py-3 rounded-xl bg-[#f97316] text-white font-bold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] active:scale-95"
          >
            <span className="relative z-10">Join Us →</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-0" />
          </Link>

          <button className="relative px-8 py-3 rounded-xl border border-[#00A8B5] text-[#00A8B5] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#00A8B5] hover:text-[#050505] hover:scale-105 shadow-[inset_0_0_10px_rgba(0,168,181,0.2)] hover:shadow-[0_0_30px_rgba(0,168,181,0.6)] active:scale-95">
            View Projects
          </button>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* STATS SECTION */}
      <StatsSection />

      <Footer />
    </ParticlesBackground>
  );
}