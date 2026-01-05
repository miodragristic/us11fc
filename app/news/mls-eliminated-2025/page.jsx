'use client';

import Image from 'next/image';

export default function MLS2025Blog() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-3xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
          MLS 2025: Teams Eliminated from Audi MLS Cup Playoffs
        </h1>

        <div className="w-full h-[400px] rounded-lg shadow-md overflow-hidden relative">
          <Image
            src="https://cdn.wsn.com/filters:format(webp)/filters:no_upscale()/fit-in/1200x585/1752735435/los-angeles-fc-vs-la-galaxy-2025-07-19.jpg"
            alt="MLS Cup Playoffs"
            width={1200}
            height={585}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="mb-4 text-sm text-gray-600">
          <p>By: Mio Ristic | October 4, 2025</p>
          <p className="mt-1 text-xs text-gray-400">
            Get this image on: alamy.com | License details
            Credit: Alamy Stock Photo
            Copyright: Credit: Associated Press / Alamy Stock Photo
          </p>
        </div>

        <div className="space-y-4 mb-16 text-[#020617] text-lg">
          <p className="text-2xl font-semibold">Eastern Conference: Eliminated Teams</p>

          <h2 className="text-xl font-semibold mt-4">New England Revolution</h2>
          <p>Eliminated after a loss to Philadelphia Union on Matchday 35, officially ending their playoff hopes.</p>

          <h2 className="text-xl font-semibold mt-4">CF Montréal</h2>
          <p>Eliminated following a loss or draw against Austin FC, or a win by Chicago Fire FC or New York Red Bulls on Matchday 30.</p>

          <h2 className="text-xl font-semibold mt-4">D.C. United</h2>
          <p>Eliminated after a loss or draw against Inter Miami CF, or a win by Chicago Fire FC or New York Red Bulls on Matchday 30.</p>

          <p className="italic text-gray-600">
            Note: New York Red Bulls are currently outside the playoff zone, five points behind Chicago Fire FC, who have one game in hand. While their chances are slim, they are not officially eliminated.
          </p>

          <p className="text-2xl font-semibold mt-6">Western Conference: Eliminated Teams</p>

          <h2 className="text-xl font-semibold mt-4">LA Galaxy</h2>
          <p>Eliminated following a loss to Cincinnati on Matchday 35, ending their playoff hopes just one year after winning the MLS Cup.</p>

          <h2 className="text-xl font-semibold mt-4">Sporting Kansas City</h2>
          <p>Eliminated after a loss to Vancouver on Matchday 35, combined with other conditions such as wins by Dallas or San Jose.</p>

          <h2 className="text-xl font-semibold mt-4">St. Louis CITY SC</h2>
          <p>Eliminated following a loss or draw against San Jose, or a win by Real Salt Lake on Matchday 35.</p>

          <p className="italic text-gray-600">
            Note: Teams like FC Dallas, Real Salt Lake, and Houston Dynamo are still competing for the remaining playoff spots in the Western Conference. Final results will be determined on Decision Day.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Conclusion</h2>
          <p>
            As the regular season winds down, remaining teams are fighting for a spot in the playoffs while fans analyze potential matchups. Although some clubs no longer have a chance, the MLS 2025 season promises an exciting finish with high-stakes games deciding the final playoff contenders for the Audi 2025 MLS Cup.
          </p>

          <p>
            Stay tuned to <strong>US11</strong> for updates after Decision Day and in-depth playoff analysis.
          </p>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-600">Follow MLS updates, team news, and exclusive playoff content.</p>
          <p className="text-sm text-gray-600">#MLS2025 #AudiMLSPlayoffs #US11 #SoccerNews</p>
        </div>
      </div>
    </div>
  );
}