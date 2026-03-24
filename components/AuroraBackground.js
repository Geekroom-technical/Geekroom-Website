export default function AuroraBackground({ children }) {
    return (
        <div className="relative flex flex-col items-center justify-center bg-[#050505] text-[#ededed] min-h-screen overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -inset-[10px] opacity-40 blur-[120px]">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[#00A8B5] rounded-full mix-blend-screen animate-pulse duration-10000" />
                    <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[60vh] bg-[#f97316] rounded-full mix-blend-screen animate-pulse duration-3000 delay-1000" />
                    <div className="absolute bottom-[-20%] left-[10%] w-[60vw] h-[50vh] bg-red-700 rounded-full mix-blend-screen animate-pulse duration-3000 delay-500" />
                </div>
            </div>

            <div className="relative z-10 w-full flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
}