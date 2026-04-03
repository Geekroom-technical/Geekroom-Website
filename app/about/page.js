"use client";

import { useState, useEffect } from "react";
import InteractiveBackground from "../../components/InteractiveBackground";
import Image from "next/image";

export default function AboutPage() {
  const [aboutData, setAboutData] = useState(null);
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    
    // Fetch About
    fetch(`${apiUrl}/api/about`)
      .then((res) => res.json())
      .then(setAboutData)
      .catch((err) => console.error("Failed to fetch about:", err));

    // Fetch Team
    fetch(`${apiUrl}/api/team`)
      .then((res) => res.json())
      .then(setTeamData)
      .catch((err) => console.error("Failed to fetch team:", err));
  }, []);

  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center px-4 text-center select-none w-full max-w-6xl mx-auto flex-grow py-32 space-y-24">

        {/* Hero Section */}
        <section className="text-center animate-fadeIn space-y-6">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#1a1a1a] select-none">
            About {aboutData?.title || "GeekRoom"}
          </h1>
          <p className="text-gray-800 text-lg sm:text-2xl font-medium tracking-tight leading-relaxed max-w-4xl mx-auto opacity-90">
            {aboutData?.description || "Geek Room is a college tech club where students explore, collaborate, and create real software."}
          </p>
        </section>

        {/* Mission Section */}
        {aboutData?.missionPoints && (
          <section className="w-full space-y-12">
            <h2 className="text-4xl font-bold text-black tracking-widest border-b-4 border-black inline-block pb-2">
              Our Mission
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {aboutData.missionPoints.map((point, idx) => (
                <article
                  key={idx}
                  className="group relative rounded-3xl border-2 border-black/5 bg-white/40 p-8 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-black p-4 text-white shadow-lg group-hover:rotate-6 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: point.icon_svg }} />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">{point.title}</h3>
                  <p className="text-gray-700 leading-relaxed font-semibold">{point.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Stats Section */}
        {aboutData?.stats && (
           <section className="w-full group p-12 rounded-[3rem] border-2 border-black/5 bg-white/20 backdrop-blur-3xl shadow-sm hover:shadow-2xl transition-all duration-700">
             <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
               {aboutData.stats.map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center">
                   <p className="text-5xl sm:text-6xl font-bold text-[#1a1a1a] mb-2 tracking-tighter">
                     {item.value}
                   </p>
                   <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 opacity-60">
                     {item.label}
                   </p>
                 </div>
               ))}
             </div>
           </section>
        )}

        {/* Team Section */}
        {teamData?.teams && (
          <section className="w-full space-y-20 pb-20">
            <h2 className="text-4xl font-bold text-black tracking-widest border-b-4 border-black inline-block pb-2">
              Meet The Core
            </h2>
            
            <div className="space-y-32">
              {teamData.teams.map((team, tIdx) => (
                <div key={tIdx} className="space-y-12">
                  <div className="bg-black text-white px-8 py-3 rounded-full inline-block text-xs font-bold tracking-[0.3em]">
                    {team.name}
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
                    {/* Lead Card */}
                    <div className="relative group bg-white border-2 border-black rounded-[2.5rem] p-10 shadow-2xl transition-all hover:scale-[1.02]">
                       <div className="absolute top-6 right-6">
                            <span className="bg-black text-white px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest">LEAD</span>
                       </div>
                       <h4 className="text-4xl font-bold text-black mb-1 tracking-tighter">{team.lead.name}</h4>
                       <p className="text-sm font-bold text-gray-400 tracking-widest mb-6">{team.lead.role}</p>
                       <p className="text-gray-700 font-medium leading-snug">Pushing boundaries in {team.name} with passion and precision.</p>
                       <div className="mt-8 border-t border-gray-100 pt-6 flex gap-4">
                         {team.lead.linkedin && (
                           <a href={team.lead.linkedin} target="_blank" className="text-black hover:scale-110 transition-transform">
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                           </a>
                         )}
                       </div>
                    </div>

                    {/* Members Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {team.members.map((member, mIdx) => (
                        <div key={mIdx} className="bg-white/40 backdrop-blur-md border border-gray-200 rounded-3xl p-6 flex flex-col justify-center hover:bg-white transition-all shadow-sm">
                           <h5 className="text-xl font-bold text-black tracking-tight">{member.name}</h5>
                           <p className="text-xs font-bold text-gray-500 tracking-widest mt-1">{member.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Loading State Skeleton */}
        {(!aboutData || !teamData) && (
          <div className="py-20 animate-pulse space-y-4">
             <div className="h-1 lg:w-96 w-40 bg-gray-200 rounded-full mx-auto"></div>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">Establishing Connection</p>
          </div>
        )}

      </div>
    </InteractiveBackground>
  );
}
