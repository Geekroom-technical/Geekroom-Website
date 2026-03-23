import ParticlesBackground from "../components/ParticlesBackground";
import Link from "next/link";

export default function Home() {
  return (
    <ParticlesBackground>
      <div className="flex flex-col items-center justify-center pt-32 px-6 text-center">

        {/* Intro Tag */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-orange-500 bg-orange-950/30 text-orange-500 text-sm font-semibold tracking-wide">
          Welcome to the Geekroom
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          GeekRoom <br />
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 max-w-2xl mb-10">
          GeekRoom is a community of builders, designers, and most importantly Geeks
        </p>

        {/* Buttons (Where you might inject a UI Verse component later) */}
        <div className="flex gap-4">
          <Link href="/join" className="px-8 py-3 rounded-md bg-teal-600 text-white font-bold hover:bg-orange-700 transition-colors">
            Join Us
          </Link>
          <button className="px-8 py-3 rounded-md bg-transparent border border-white/20 text-white font-bold hover:bg-white/5 transition-colors">
            View Projects
          </button>
        </div>

      </div>
    </ParticlesBackground>
  );
}
