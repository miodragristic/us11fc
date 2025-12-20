"use client";

import Image from "next/image";
import ProfileImage from "../../public/Mio.png";

export default function AuthorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 font-sans">

      {/* ===== HEADER ===== */}
      <div className="flex flex-col md:flex-row gap-12">

        {/* LEFT SIDEBAR */}
        <aside className="md:w-1/3 flex flex-col items-center md:items-start">
          <div className="w-48 h-48  overflow-hidden relative shadow-md">
            <Image
              src={ProfileImage}
              alt="Mio Ristic"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl font-extrabold text-[#020617] mt-6">
            Mio Ristić
          </h1>

          <p className="text-lg font-medium text-gray-600 mt-2">
            Sports Writer & Analyst
          </p>

          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-500 mb-1">Email</p>
            <a
              href="mailto:us11footballclub@gmail.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              us11footballclub@gmail.com
            </a>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="md:w-2/3 space-y-10">

          {/* BIO */}
          <section>
            <h2 className="text-3xl font-bold text-[#020617] mb-4">Bio</h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              I am Mio Ristić Mikaso, a dedicated sports writer and analyst with
              a focus on MLS, global football trends, tactical analysis, and player
              development. I aim to bring clarity, insight, and depth to every story 
              I cover—whether it’s a high-stakes playoff match or the rise of a young 
              talent breaking onto the scene.
            </p>
          </section>

          {/* FOOTBALL STORY */}
          <section>
            <h2 className="text-3xl font-bold text-[#020617] mb-4">My Football Story</h2>
            <p className="text-gray-800 leading-relaxed text-lg mb-4">
              The first match I ever watched was <strong>Yugoslavia vs Spain at Euro 2000</strong>.
              But I truly fell in love with football shortly after, watching the elegance of 
              the Italian national team with <strong>Francesco Totti</strong> and 
              <strong> Alessandro Del Piero</strong> leading the attack.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg mb-4">
              My passion for MLS began with the unforgettable attacking duo 
              <strong> Clint Dempsey – Obafemi Martins</strong> at the Seattle Sounders.
              Since then, I’ve followed the league every season, finding the joy and 
              unpredictability that modern European football has slowly lost.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg">
              In MLS, every match feels alive—open, creative, and unpredictable.
              It’s a league where players express themselves, where tactics bend instead of restrict,
              and where every week brings something completely unexpected. That’s the beauty of it.
            </p>
          </section>

          {/* AREAS OF EXPERTISE */}
          <section>
            <h2 className="text-3xl font-bold text-[#020617] mb-4">Areas of Expertise</h2>
            <ul className="list-disc pl-6 text-lg text-gray-800 space-y-2">
              <li>MLS match analysis & tactical breakdowns</li>
              <li>U.S. national team coverage</li>
              <li>Player development & scouting profiles</li>
              <li>Opinion pieces on global football trends</li>
            </ul>
          </section>

          {/* FAVORITE MEMORIES */}
          <section>
            <h2 className="text-3xl font-bold text-[#020617] mb-4">
              Favourite Footballing Memories
            </h2>

            <p className="text-lg text-gray-800 mb-4">
              <strong>• 2003 — Newcastle United vs Partizan</strong>  
              <br />
              Partizan eliminating mighty Newcastle on penalties — the match that 
              cemented my love for emotional, unpredictable football.
            </p>

            <p className="text-lg text-gray-800">
              <strong>• MLS Cup 2016 — Seattle Sounders vs Toronto FC</strong>  
              <br />
              Seattle winning the MLS Cup on penalties — a match that defined the 
              league’s drama and the moment I knew MLS would be part of my life forever.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}
