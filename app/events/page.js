import InteractiveBackground from "../../components/InteractiveBackground";

export default function Events() {
  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center px-4 text-center select-none w-full max-w-4xl mx-auto flex-grow py-20">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1a1a1a] select-none uppercase mb-4">
          EVENTS COMING SOON
        </h1>

        <p className="text-gray-800 text-base sm:text-lg md:text-xl font-normal tracking-tight leading-relaxed max-w-3xl mb-8">
          Stay tuned for exciting upcoming events!
        </p>
        
        {/* Loader */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce [animation-delay:0s]"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
        </div>
      </div>
    </InteractiveBackground>
  );
}
