import ParticlesBackground from "../components/ParticlesBackground";
export default function Home() {
  return (
    <ParticlesBackground>
      <div className="flex flex-col items-center justify-center pt-32 px-6 text-center">

        {/* Intro Tag */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-orange-500 bg-orange-950/30 text-orange-500 text-sm font-semibold tracking-wide">
          Welcome to the club
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Code. Create. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-800">
            Collaborate.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 max-w-2xl mb-10">
          GeekRoom is a community of builders, designers, and tech enthusiasts.
          We turn coffee into code and ideas into reality.
        </p>

        {/* Buttons (Where you might inject a UI Verse component later) */}
        <div className="flex gap-4">
          <button className="px-8 py-3 rounded-md bg-teal-600 text-white font-bold hover:bg-cyan-700 transition-colors">
            Join Us
          </button>
          <button className="px-8 py-3 rounded-md bg-transparent border border-white/20 text-white font-bold hover:bg-white/5 transition-colors">
            View Projects
          </button>
        </div>

      </div>
    </ParticlesBackground>
  );
}