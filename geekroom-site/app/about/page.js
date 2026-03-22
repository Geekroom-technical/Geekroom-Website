import React from "react";
import AuroraBackground from "../../components/AuroraBackground";
import Image from "next/image";

const team = [
  {
    name: "Name1",
    role: "Founder",
    image: "/team1.jpg",
  },
  {
    name: "Name2",
    role: "Developer",
    image: "/team2.jpg",
  },
  {
    name: "Name3",
    role: "Designer",
    image: "/team3.jpg",
  },
];

export default function About() {
  return (
    <AuroraBackground>
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-400/80 hover:scale-110 transition duration-300">
              <Image src="/team1.png" alt="team" width={128} height={128} />
            </div>

            <h2 className="mt-4 text-xl font-semibold">{member.name}</h2>

            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </AuroraBackground>
  );
}
