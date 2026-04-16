import Image from "next/image";

export default function Collaborators() {
    return (
        <div className="w-full mt-8 pb-24 flex flex-col items-center animate-fadeIn px-4">

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-12">
                Our Collaborators
            </h2>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 w-full max-w-4xl">

                {/* AMD Card Link */}
                <a
                    href="https://www.amd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex justify-center items-center w-full sm:w-[300px] h-40 rounded-2xl 
                     bg-white/15 backdrop-blur-2xl border border-white/40 
                     shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.2)] 
                     transition-all duration-300 hover:-translate-y-2"
                >
                    {/* Logo Container */}
                    <div className="relative w-3/5 h-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                        <Image
                            src="/amdlogo.png"
                            alt="AMD Logo"
                            height={350}
                            width={300}
                            className="object-contain"
                        />
                    </div>
                </a>

                {/* AIM Media Card Link */}
                {/* Note: Update the href URL below if AIM Media uses a different official link */}
                <a
                    href="https://aim.media/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex justify-center items-center w-full sm:w-[300px] h-40 rounded-2xl 
                     bg-white/15 backdrop-blur-2xl border border-white/40 
                     shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.2)] 
                     transition-all duration-300 hover:-translate-y-2"
                >
                    {/* Logo Container */}
                    <div className="relative w-3/5 h-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                        <Image
                            src="/aimlogo.png"
                            alt="AIM Media Logo"
                            height={250}
                            width={300}
                            className="object-contain"
                        />
                    </div>
                </a>

            </div>

            {/* More Incoming Section */}
            <div className="mt-12 mb-8">
                <p className="text-lg sm:text-xl font-semibold text-[#1a1a1a] animate-pulse">
                    More coming soon
                    <span className="inline-block ml-1 animate-bounce">.</span>
                    <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>.</span>
                    <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
                </p>
            </div>

        </div>
    );
}