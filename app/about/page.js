// d:/Geekroom-Website/app/about/page.js
import InteractiveBackground from "../../components/InteractiveBackground";

const missionPoints = [
  {
    title: "Learn Together",
    description: "We grow faster through peer sessions, code reviews, and shared curiosity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-orange-400" aria-hidden="true">
        <path d="M4 6.5C4 5.67 4.67 5 5.5 5H11v14H5.5A1.5 1.5 0 0 1 4 17.5v-11Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M20 6.5C20 5.67 19.33 5 18.5 5H13v14h5.5a1.5 1.5 0 0 0 1.5-1.5v-11Z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Build Real Things",
    description: "From prototypes to production-ready apps, we ship projects that actually matter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-orange-400" aria-hidden="true">
        <path d="M4 10.5 12 6l8 4.5v8L12 23l-8-4.5v-8Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 6v17M4 10.5l8 4.5 8-4.5" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Grow as One",
    description: "We celebrate wins together and support every member through every challenge.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-orange-400" aria-hidden="true">
        <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.5 19c0-2.5 2-4.5 4.5-4.5S12.5 16.5 12.5 19" stroke="currentColor" strokeWidth="1.7" />
        <path d="M11.5 19c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
];

const activityCards = [
  "Workshops",
  "Hackathons",
  "Open Source",
  "Networking",
];

const stats = [
  { label: "Members", value: "200+" },
  { label: "Events", value: "30+" },
  { label: "Projects", value: "50+" },
  { label: "Years", value: "3+" },
];

export default function AboutPage() {
  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center px-4 text-center select-none w-full max-w-4xl mx-auto flex-grow py-32">


        <div className="relative mx-auto max-w-6xl space-y-16">
          <section className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1a1a1a] select-none uppercase mb-4">
              About GeekRoom
            </h1>
            <p className="text-gray-800 text-base sm:text-lg md:text-xl font-normal tracking-tight leading-relaxed max-w-3xl">
              Geek Room is a college tech club where students explore, collaborate, and create real software through
              workshops, hackathons, and community projects.
            </p>
          </section>

          <section>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              Our Mission
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {missionPoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-800/40"
                >
                  <div className="mb-4 inline-flex rounded-xl border border-gray-600/20 bg-white/50 p-3">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-800">{point.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              What We Do
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {activityCards.map((card) => (
                <article
                  key={card}
                  className="rounded-2xl border border-gray-600 p-6 transition-all duration-200 hover:border-gray-800 hover:shadow-lg"
                >
                  <p className="text-gray-800 font-medium text-sm sm:text-base tracking-wide">{card}</p>
                  <p className="mt-2 text-sm text-gray-800">Hands-on, community-first, and focused on practical outcomes.</p>
                </article>
              ))}
            </div>
          </section>

          <section className="w-full p-8 rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-white/80 to-gray-50 shadow-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-8 text-center">Stats</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="p-6 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white/50 to-gray-50 hover:shadow-xl transition-all duration-300">
                  <p className="text-4xl font-black text-gray-900 mb-2">
                    {item.value}
                  </p>
                  <p className="text-sm uppercase tracking-wider font-semibold text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </InteractiveBackground>
  );
}
