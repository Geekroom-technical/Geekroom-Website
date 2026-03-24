import ParticlesBackground from "../components/ParticlesBackground";
import Link from "next/link";

export default function Home() {
  return (
    <ParticlesBackground>
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center select-none">
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-[600px] h-[600px] rounded-full bg-orange-600/10 blur-[140px]" />
        </div>

        <h1 className="relative text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter leading-none text-white mb-6 drop-shadow-lg">
          Geek
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400">
            Room
          </span>
        </h1>

        <p className="relative text-gray-400 text-lg sm:text-xl max-w-md leading-relaxed mb-10">
          A Room Full of Ideas.{" "}
          <span className="text-gray-300 font-medium">A Club Full of Geeks.</span>
        </p>

        <div className="relative flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/join"
            className="px-8 py-3 rounded-lg bg-orange-500 text-white font-semibold text-sm tracking-wide hover:bg-orange-600 active:scale-95 transition-all duration-200 shadow-lg shadow-orange-500/30"
          >
            Join Us →
          </Link>
          <button className="px-8 py-3 rounded-lg border border-white/15 text-gray-300 font-semibold text-sm tracking-wide hover:bg-white/5 hover:text-white active:scale-95 transition-all duration-200">
            View Projects
          </button>
        </div>
      </div>
    </ParticlesBackground>
  );
}
