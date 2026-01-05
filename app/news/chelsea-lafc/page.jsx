import React from 'react';
import Link from 'next/link';

const ChelseaVsLafcRecap = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
          Brave LAFC Fall 2-0 to Chelsea in Club World Cup Opener in Front of Sparse Crowd
        </h1>

        <div className="mb-4">
          <img
            src="https://media.freemalaysiatoday.com/wp-content/uploads/2025/06/ce61bd72-chelsea.jpg"
            alt="Chelsea vs LAFC at Club World Cup"
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="mt-2 text-sm text-gray-600">
            <span>By: Mio Ristić | US11 FC | June 17, 2025 | Credit: Free Malaysia Today</span>
          </div>
          <div className="mt-4 text-center">
            <Link href="/teams/lafc">
              <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">
                Visit LAFC
              </button>
            </Link>
          </div>
        </div>

        <p className="mb-4">
          Chelsea kicked off their 2025 FIFA Club World Cup run with a 2-0 win over MLS champions Los Angeles FC at the massive Mercedes-Benz Stadium in Atlanta. But with fewer than 23,000 fans in attendance, the scene raised questions about the tournament’s visibility — and LAFC raised eyebrows with a bold performance.
        </p>

        <p className="mb-4">
          In front of tens of thousands of empty seats, Chelsea took the lead through <strong>Pedro Neto</strong> in the 34th minute. Despite falling behind, LAFC pushed back and showed the kind of fearless football that’s earned them respect across MLS and now, around the world.
        </p>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">⚽ Liam Delap Impresses on Debut</h2>
        <p className="mb-4">
          Chelsea’s new £30 million signing <strong>Liam Delap</strong> made an instant impact off the bench. The former Man City prospect delivered an assist in the 79th minute, lofting a perfect ball into the box for <strong>Enzo Fernández</strong> to tap home and seal the win.
        </p>

        <p className="mb-4">
          The debut showed Delap’s confidence, physicality, and tactical understanding — attributes that may earn him more minutes going forward. Head coach <strong>Enzo Maresca</strong> praised the striker’s quick adaptation, while Delap himself said he’s ready to “thrive off the competition” for minutes.
        </p>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">📉 Empty Seats Highlight Scheduling Issues</h2>
        <p className="mb-4">
          Only <strong>22,137 fans</strong> filled the stadium — just a third of its full capacity. A Monday 3PM kickoff, aligned with European TV time, was part of the problem. While Chelsea previously drew 70,000+ fans at the same venue in a 2023 friendly, the Club World Cup debut didn’t spark the same local interest.
        </p>

        <p className="mb-4">
          LAFC head coach <strong>Steve Cherundolo</strong> commented: “Maybe LA loves football more than Atlanta.” FIFA has yet to issue a statement regarding the disappointing attendance.
        </p>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">💪 LAFC Showed Fight, If Not Fortune</h2>
        <p className="mb-4">
          Despite the result, LAFC’s resilience was clear. <strong>Hugo Lloris</strong> made key early saves, and the Black & Gold defense kept Chelsea honest for most of the match. With two group-stage matches still ahead — including a crucial showdown against <strong>ES Tunis</strong> — LAFC remain very much alive in Group D.
        </p>

        <p className="mb-4">
          Their courage on the ball and commitment to pressing Chelsea high will give head coach Cherundolo belief that his side can still advance.
        </p>

        <p className="mt-8 italic text-gray-500 text-sm">
          LAFC faces ES Tunis next — a must-win match in their quest to reach the Club World Cup knockout stages.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-[#020617] mb-4">🎥 Highlights: Chelsea vs LAFC</h2>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
              className="w-full h-96 rounded-lg shadow-md"
              src="https://www.youtube.com/embed/W01L1CsVxw0"
              title="Chelsea vs LAFC Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChelseaVsLafcRecap;

