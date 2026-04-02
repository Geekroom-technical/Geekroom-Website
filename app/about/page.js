// d:/Geekroom-Website/app/about/page.js
import ParticlesBackground from "../../components/ParticlesBackground";

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
    <ParticlesBackground>
      <div className="relative min-h-screen px-6 pt-28 pb-20 text-white">
        <div
          className="pointer-events-none absolute inset-0 flex items-start justify-center"
          aria-hidden="true"
        >
          <div className="mt-4 h-[420px] w-[420px] rounded-full bg-orange-600/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-16">
          <section className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-none text-white drop-shadow-lg">
              About 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400">
                 Geek Room
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed">
              Geek Room is a college tech club where students explore, collaborate, and create real software through
              workshops, hackathons, and community projects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Mission</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {missionPoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-orange-400/40"
                >
                  <div className="mb-4 inline-flex rounded-xl border border-orange-400/20 bg-orange-500/10 p-3">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{point.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What We Do</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {activityCards.map((card) => (
                <article
                  key={card}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-200 hover:border-orange-400/35 hover:bg-white/[0.07]"
                >
                  <p className="text-lg font-semibold text-white">{card}</p>
                  <p className="mt-2 text-sm text-gray-400">Hands-on, community-first, and focused on practical outcomes.</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-black/35 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Stats</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </ParticlesBackground>
  );
}
