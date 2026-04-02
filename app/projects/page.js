
import ParticlesBackground from "../../components/ParticlesBackground";

export default function Projects() {
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
          COMING
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 block">
            SOON
          </span>
        </h1>

        <p className="relative text-gray-400 text-xl sm:text-2xl max-w-lg leading-relaxed mb-12">
          Exciting projects are on the way. Stay tuned!
        </p>
      </div>
    </ParticlesBackground>
  );
}
