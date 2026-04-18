import LogoLoop from "./LogoLoop";

export default function Collaborators() {
    // Much cleaner! No need for manual Next.js <Image /> tags inside the array.
    const collaboratorLogos = [
        { src: "/amdlogo.png", alt: "AMD", href: "https://www.amd.com" },
        { src: "/aimlogo.png", alt: "AIM Media", href: "https://www.aimmedia.com" },
        // Duplicated so the loop has enough items to scroll smoothly
        { src: "/amdlogo.png", alt: "AMD", href: "https://www.amd.com" },
        { src: "/aimlogo.png", alt: "AIM Media", href: "https://www.aimmedia.com" },
    ];

    return (
        <div className="w-full mt-24 pb-24 flex flex-col items-center animate-fadeIn px-4 overflow-hidden">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-16 text-center">
                Our Collaborators
            </h2>

            <div className="w-full max-w-6xl relative h-[100px] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <LogoLoop
                    logos={collaboratorLogos}
                    speed={130}
                    direction="left"
                    logoHeight={80}
                    gap={80}
                    hoverSpeed={50}
                    scaleOnHover={true}
                    fadeOut={false}
                    ariaLabel="Our Collaborators"
                />
            </div>

        </div>
    );
}