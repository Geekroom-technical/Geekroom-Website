import Image from "next/image";

export default function Collaborators() {
    return (
        <div className="w-full mt-24 pb-24 flex flex-col items-center animate-fadeIn px-4">

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
                     bg-white/30 backdrop-blur-md border border-white/50 
                     shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
                     transition-all duration-300 hover:-translate-y-1.5"
                >
                    {/* Logo Container */}
                    <div className="relative w-3/5 h-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                        <Image
                            src="/amd-logo.png"
                            alt="AMD Logo"
                            fill
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
                     bg-white/30 backdrop-blur-md border border-white/50 
                     shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
                     transition-all duration-300 hover:-translate-y-1.5"
                >
                    {/* Logo Container */}
                    <div className="relative w-3/5 h-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                        <Image
                            src="/AIM_logo_new-CKspk8Of.png"
                            alt="AIM Media Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </a>

            </div>

        </div>
    );
}