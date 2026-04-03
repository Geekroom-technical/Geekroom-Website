"use client";

import { useState, useEffect } from "react";
import InteractiveBackground from "../../components/InteractiveBackground";
import Image from "next/image";

export default function TeamPage() {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    
    // Fetch Team
    fetch(`${apiUrl}/api/team`)
      .then((res) => res.json())
      .then(setTeamData)
      .catch((err) => console.error("Failed to fetch team:", err));
  }, []);

  // Helper to handle Top 3 naming variations
  const getTop3Person = (key) => {
    if (!teamData?.top3) return null;
    const hyphenKey = key.replace("_", "-");
    const underscoreKey = key.replace("-", "_");
    return teamData.top3[key] || teamData.top3[hyphenKey] || teamData.top3[underscoreKey];
  };

  const president = getTop3Person("president");
  const vicePresident = getTop3Person("vice-president");
  const secretary = getTop3Person("secretary");

  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center px-4 text-center select-none w-full max-w-6xl mx-auto flex-grow py-32 space-y-24">

        {/* Hero Section */}
        <section className="text-center animate-fadeIn space-y-6">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#1a1a1a] select-none">
            Meet Our Core Team
          </h1>
          <p className="text-gray-800 text-lg sm:text-2xl font-medium tracking-tight leading-relaxed max-w-4xl mx-auto opacity-90">
            The passionate students driving the mission of GeekRoom forward.
          </p>
        </section>

        {/* Top 3 Leadership Section */}
        {teamData?.top3 && (
          <section className="w-full space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* President */}
              <div className="group relative bg-white border-2 border-black rounded-[3.5rem] p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1">
                {president?.image && (
                  <div className="w-full aspect-square rounded-[2.5rem] overflow-hidden mb-8 border-2 border-black/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image
                      src={president.image}
                      alt={president.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="text-center space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-2 leading-none">President</p>
                  <h4 className="text-3xl font-bold text-black tracking-tighter leading-none">{president?.name}</h4>
                  {president?.tagline && (
                    <p className="text-xs italic text-gray-500 mt-2 font-medium opacity-90">"{president.tagline}"</p>
                  )}
                </div>
              </div>

              {/* Vice President */}
              <div className="group relative bg-white border-2 border-black rounded-[3.5rem] p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1">
                {vicePresident?.image && (
                  <div className="w-full aspect-square rounded-[2.5rem] overflow-hidden mb-8 border-2 border-black/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image
                      src={vicePresident.image}
                      alt={vicePresident.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="text-center space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-2 leading-none">Vice President</p>
                  <h4 className="text-3xl font-bold text-black tracking-tighter leading-none">{vicePresident?.name}</h4>
                  {vicePresident?.tagline && (
                    <p className="text-xs italic text-gray-500 mt-2 font-medium opacity-90">"{vicePresident.tagline}"</p>
                  )}
                </div>
              </div>

              {/* Secretary */}
              <div className="group relative bg-white border-2 border-black rounded-[3.5rem] p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1">
                {secretary?.image && (
                  <div className="w-full aspect-square rounded-[2.5rem] overflow-hidden mb-8 border-2 border-black/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image
                      src={secretary.image}
                      alt={secretary.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="text-center space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-2 leading-none">Secretary</p>
                  <h4 className="text-3xl font-bold text-black tracking-tighter leading-none">{secretary?.name}</h4>
                  {secretary?.tagline && (
                    <p className="text-xs italic text-gray-500 mt-2 font-medium opacity-90">"{secretary.tagline}"</p>
                  )}
                </div>
              </div>
            </div>
            <div className="border-b-2 border-black/5 w-full pt-12"></div>
          </section>
        )}

        {/* Department Teams Section */}
        {teamData?.teams && (
          <div className="w-full space-y-48 pb-20">
            {teamData.teams.map((team, tIdx) => {
              const leadershipList = [];
              if (team.lead) leadershipList.push({ ...team.lead, type: "Lead" });
              if (team.colead) leadershipList.push({ ...team.colead, type: "Co-Lead" });
              if (team.core_members) {
                team.core_members.forEach(core => leadershipList.push({ ...core, type: "Core Member" }));
              }

              const hasLeadership = leadershipList.length > 0;
              const hasMembers = team.members && team.members.length > 0;

              return (
                <div key={tIdx} className="w-full space-y-12 flex flex-col items-center">
                  <div className="bg-black text-white px-8 py-2 rounded-full inline-block text-[10px] font-bold tracking-[0.4em] uppercase">
                    {team.name}
                  </div>

                  {/* Top Row: Leadership (Lead, Co-Lead & Core Members) */}
                  {hasLeadership && (
                    <div className={`grid grid-cols-1 ${leadershipList.length > 1 ? "sm:grid-cols-2 lg:grid-cols-" + Math.min(leadershipList.length, 3) : "max-w-xl mx-auto"} gap-8 w-full items-center justify-center`}>
                      {leadershipList.map((leader, lIdx) => (
                        <div key={lIdx} className="group relative bg-white border-2 border-black rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 flex flex-col items-center text-center">
                          {leader.image && (
                            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-8 border-2 border-black/5 grayscale group-hover:grayscale-0 transition-all duration-700 max-w-sm">
                               <Image 
                                 src={leader.image} 
                                 alt={leader.name}
                                 width={400}
                                 height={400}
                                 className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                               />
                            </div>
                          )}
                          <div className="space-y-2">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-2">{leader.type}:</p>
                            <h4 className="text-3xl font-bold text-black tracking-tighter leading-none">{leader.name}</h4>
                            <p className="text-sm font-semibold text-gray-500">{leader.role}</p>
                            {leader.tagline && (
                              <p className="text-sm italic text-gray-500 mt-4 font-medium opacity-90 leading-relaxed max-w-md">"{leader.tagline}"</p>
                            )}
                          </div>
                          {leader.github && (
                            <div className="mt-8 flex justify-center">
                                <a href={leader.github} target="_blank" className="inline-flex p-3 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all">
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom Row: Rest of the Members (CENTERED FLEX) */}
                  {hasMembers && (
                    <div className="flex flex-wrap items-center justify-center gap-6 w-full mt-4">
                      {team.members.map((member, mIdx) => (
                        <div key={mIdx} className="bg-white/40 backdrop-blur-md border border-black/5 rounded-[2.3rem] p-8 min-w-[260px] max-w-[300px] flex-grow flex flex-col items-center justify-center text-center transition-all hover:bg-white hover:shadow-xl group/item">
                          <div className="space-y-1">
                            <h5 className="text-xl font-bold text-black tracking-tight">{member.name}</h5>
                            <p className="text-xs font-semibold text-gray-500 leading-tight">{member.role}</p>
                          </div>
                          {member.github && (
                            <a href={member.github} target="_blank" className="mt-6 opacity-0 group-hover/item:opacity-100 transition-opacity">
                              <svg className="w-4 h-4 text-gray-400 hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Loading State Skeleton */}
        {!teamData && (
          <div className="py-20 animate-pulse space-y-4">
            <div className="h-1 lg:w-96 w-40 bg-gray-200 rounded-full mx-auto"></div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em]">Establishing Connection</p>
          </div>
        )}

      </div>
    </InteractiveBackground>
  );
}
