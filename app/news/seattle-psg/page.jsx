'use client';

import React from 'react';
import Link from 'next/link';

const SeattlePsg = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
        Heart Over Power: Seattle Fall 2–0 to Ruthless PSG
        </h1>

        <div className="mb-4">
          <img
            src="https://bad-dawgsports.com/wp-content/uploads/2025/06/2221741605.jpg"
            alt="Atlético Madrid vs Seattle Sounders"
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-sm text-gray-600">
            <span>
              By: Mio Ristic | US11 | June 24, 2025 <br />
              Creator: Steph Chambers - FIFA | Credit: FIFA via Getty Images | Copyright: 2025 FIFA
            </span>
          </div>

          <div className="mt-4 text-center">
            <Link href="/teams/seattle-sounders">
              <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">
                Visit Seattle Sounders
              </button>
            </Link>
          </div>
        </div>

        <p className="mb-4">
          <strong>SEATTLE, WA —</strong> Seattle Sounders closed their 2025 FIFA Club World Cup journey without a win, but with a performance that earned respect. A 2–0 loss to Paris Saint-Germain sealed their elimination from Group C, but the final score didn’t reflect their fighting spirit.
        </p>

        <p className="mb-4">
          The goals came from Khvicha Kvaratskhelia in the 35th minute and Achraf Hakimi in the 66th, both in moments when Seattle had pushed high. Once again, the Sounders played with heart — as they had against Atlético Madrid and Botafogo — but the gap in class ultimately proved too much.
        </p>

        <h2 className="text-3xl font-semibold text-[#020617] mb-6">A Brave Campaign Comes to a Close</h2>

        <p className="mb-4">
          In their final match at Lumen Field, Seattle showed why they belonged on this stage. Obed Vargas, Cristian Roldan, and goalkeeper Stefan Frei fought valiantly against PSG’s relentless attack. Frei made several key saves to keep the game within reach.
        </p>

        <p className="mb-6">
          Despite three defeats, the team played with unity, heart, and professionalism — a message to the world that MLS clubs are here to compete.
        </p>

        <h2 className="text-3xl font-semibold text-[#020617] mb-6">Final Group C Standings</h2>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full text-left text-sm text-gray-700 border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                {['Pos', 'Team', 'Pld', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts'].map((heading, idx) => (
                  <th
                    key={heading}
                    className={`px-4 py-2 ${idx < 9 ? 'border-r border-gray-300' : ''}`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['1', 'Paris Saint-Germain (FRA)', '3', '2', '0', '1', '6', '1', '+5', '6'],
                ['2', 'Botafogo (BRA)', '3', '2', '0', '1', '3', '2', '+1', '6'],
                ['3', 'Atlético Madrid (ESP)', '3', '2', '0', '1', '4', '5', '−1', '6'],
                ['4', 'Seattle Sounders (USA)', '3', '0', '0', '3', '2', '7', '−5', '0'],
              ].map((row, i) => (
                <tr key={i} className="border-t border-gray-300">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-2 ${j < 9 ? 'border-r border-gray-300' : ''}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-[#020617] mb-4">
            🎥 Highlights: Seattle Sounders vs PSG
          </h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/sfNWp27JFxQ"
              title="Seattle vs PSG Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <p className="mt-10 italic text-gray-500 text-sm">
          Let the world watch. Let Seattle dream — again.
        </p>
      </div>
    </div>
  );
};

export default SeattlePsg;
