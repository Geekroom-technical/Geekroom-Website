import Image from "next/image";
import InteractiveBackground from "../components/InteractiveBackground";

export default function Home() {
  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center px-4 text-center select-none w-full max-w-4xl mx-auto flex-grow py-20">
        
        {/* Transparent Logo */}
        <div className="w-48 sm:w-56 flex justify-center items-center drop-shadow-sm mb-4 animate-fadeIn animate-float" style={{animationDelay: '0s'}}>
          <Image
            src="/Transparentlogo.webp"
            alt="GeekRoom Logo"
            width={300}
            height={300}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1a1a1a] select-none uppercase mb-4">
          GEEK ROOM
        </h1>

        {/* Badge */}
        <div className="px-5 py-1.5 rounded-full border-[1.5px] border-gray-600 mb-6 bg-white/50 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-gray-800 hover:bg-white hover:shadow-lg">
          <span className="text-gray-800 font-medium text-sm sm:text-base tracking-wide">Campus Chapter</span>
        </div>

        {/* SRM Ghaziabad Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
          SRM Ghaziabad
        </h2>

        {/* Subtitle / Description */}
        <p className="text-gray-800 text-base sm:text-lg md:text-xl font-normal tracking-tight leading-relaxed max-w-3xl">
          Geek Room is more than just a tech club — it's a community. We aim to bring
          together curious minds who are passionate about exploring, building, and pushing
          the boundaries of technology.
        </p>
      </div>
    </InteractiveBackground>
  );
}
