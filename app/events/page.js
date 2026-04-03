"use client";

import { useState, useEffect } from "react";
import InteractiveBackground from "../../components/InteractiveBackground";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
    
    fetch(`${apiUrl}/api/mongo/events`)
      .then((res) => res.json())
      .then((json) => {
        if (json && json.items) setEvents(json.items);
      })
      .catch((err) => console.error("Failed to fetch events:", err));

    // Live Clock timer
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper to check if event date is in the past
  const isExecuted = (dateString) => {
    if (!dateString) return false;
    const eventDate = new Date(dateString);
    // Add current day end-time if only date is provided
    const now = new Date();
    return eventDate < now;
  };

  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center px-4 text-center select-none w-full max-w-5xl mx-auto flex-grow py-20 pb-40">

        {/* Live Clock Display */}
        <div className="mb-12 animate-fadeIn">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-xl border-2 border-black/5 px-6 py-2 rounded-2xl shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 mr-3 animate-pulse"></span>
            <span className="text-xl sm:text-2xl font-semibold tracking-tighter text-black tabular-nums">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
            <span className="mx-3 text-gray-300">|</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest pt-0.5">
              {currentTime.toLocaleDateString([], { day: '2-digit', month: 'short', year: 'numeric' })}
            </span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#1a1a1a] select-none mb-4 animate-fadeIn">
          The Geek Room Events
        </h1>

        <p className="text-gray-800 text-lg sm:text-xl font-medium tracking-tight leading-relaxed max-w-3xl mb-16 opacity-80">
          Workshops • Hackathons • Sessions • Opportunities
        </p>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 w-full max-w-4xl">
            {events.map((event, idx) => {
              const executed = isExecuted(event.date);
              
              return (
                <div 
                  key={idx} 
                  className={`group relative bg-white/40 backdrop-blur-2xl border-[1.5px] border-white/50 rounded-[2.5rem] p-10 shadow-sm transition-all duration-500 text-left ${executed ? 'opacity-60 grayscale-[0.5] hover:grayscale-0' : 'hover:bg-white hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/5'}`}
                >
                  <div className={`absolute -top-4 -left-4 w-12 h-12 flex items-center justify-center rounded-2xl rotate-[-12deg] shadow-lg font-bold text-xl group-hover:rotate-0 transition-transform duration-300 ${executed ? 'bg-gray-400 text-white' : 'bg-black text-white'}`}>
                    {idx + 1}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                    <h4 className={`text-3xl sm:text-4xl font-bold leading-none tracking-tighter ${executed ? 'text-gray-600' : 'text-[#1a1a1a]'}`}>
                      {event.title}
                    </h4>
                    <div className={`shrink-0 inline-flex items-center border border-black/5 text-[10px] font-bold px-4 py-2 rounded-full tracking-widest shadow-inner ${executed ? 'bg-gray-200 text-gray-500' : 'bg-[#f0f0f0] text-black'}`}>
                      <span className={`w-2 h-2 rounded-full mr-2 ${executed ? 'bg-gray-400' : 'bg-black animate-pulse'}`}></span>
                      {event.date}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
                    <svg className="w-5 h-5 mr-3 text-black/20" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/>
                    </svg>
                    {event.location}
                  </div>

                  <p className={`text-lg leading-relaxed font-semibold pr-8 ${executed ? 'text-gray-500' : 'text-gray-800'}`}>
                    {event.description}
                  </p>

                  <div className="mt-10">
                    {executed ? (
                      <div className="inline-flex items-center gap-3">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b-2 border-gray-300 pb-1">Event Executed</span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    ) : (
                      event.registerlink && (
                        <a 
                          href={event.registerlink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300 cursor-pointer"
                        >
                           <span className="text-[10px] font-black text-black uppercase tracking-widest border-b-2 border-black pb-1">Register Now</span>
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        </a>
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center py-20">
            <div className="w-16 h-1 bg-[#eeeeee] rounded-full overflow-hidden mb-4">
               <div className="w-full h-full bg-black animate-marquee duration-1000"></div>
            </div>
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.5em] animate-pulse">
              Requesting Archive
            </p>
          </div>
        )}
      </div>
    </InteractiveBackground>
  );
}
