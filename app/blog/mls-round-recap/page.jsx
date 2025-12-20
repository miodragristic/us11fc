import React from 'react';
import Link from 'next/link';

const MLSRoundRecap = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
          MLS Round Recap: 13 Matches, 1 Night, Pure Chaos
        </h1>

        <img
          src="https://cdn1.intermiami.news/uploads/52/2024/12/GettyImages-1884518040-scaled.jpg"
          alt="MLS Matchday Recap"
          className="w-full h-[400px] object-cover rounded-lg shadow-md mb-6"
        />

        <div className="mb-10 text-center text-sm text-gray-500">
          <p className="mt-2 text-sm text-gray-600">
            Mio Ristic | May 2025
          </p>
          <p className="text-sm text-gray-600">
            Creator: SOPA Images | Credit: SOPA Images/LightRocket
          </p>
        </div>

        <div className="space-y-6 text-[#020617] text-lg mb-10">
          <p>
            From Messi’s magic in Miami to Galaxy’s meltdown in LA — Matchday 16 in MLS was packed with drama, goals, and surprises. Here’s what you need to know.
          </p>

          <h2 className="text-xl font-semibold mt-8">Top 3 Stories of the Round</h2>

          <p><strong>Messi Leads Miami in Another Goal Fest:</strong> Inter Miami rolled past CF Montréal with a convincing 4–2 win. Messi and Suárez were on fire, showing that this team isn’t just hype — it’s a real contender.</p>

          <p><strong>LA Galaxy Lose Again – At Home:</strong> A 0–1 loss to San Jose puts even more pressure on the Galaxy. No goals, no plan, and the fans are starting to turn. The coaching seat is getting hot in LA.</p>

          <p><strong>Cincinnati vs Dallas – Match of the Week:</strong> A wild 3–3 draw with comebacks, chaos, and crowd eruptions. Cincinnati remain contenders, but defensive cracks are showing.</p>

          <h2 className="text-xl font-semibold mt-8">Full Matchday Results</h2>

          <ul className="list-disc list-inside space-y-2">
  <li>
    <Link href="/teams/portland-timbers" className="text-blue-600 underline">Portland Timbers</Link> 2–1{' '}
    <Link href="/teams/colorado-rapids" className="text-blue-600 underline">Colorado Rapids</Link>
  </li>
  <li>
    <Link href="/teams/vancouver-whitecaps" className="text-blue-600 underline">Vancouver Whitecaps</Link> 0–0{' '}
    <Link href="/teams/minnesota-united" className="text-blue-600 underline">Minnesota United</Link>
  </li>
  <li>
    <Link href="/teams/la-galaxy" className="text-blue-600 underline">LA Galaxy</Link> 0–1{' '}
    <Link href="/teams/san-jose-earthquakes" className="text-blue-600 underline">San Jose Earthquakes</Link>
  </li>
  <li>
    <Link href="/teams/austin-fc" className="text-blue-600 underline">Austin FC</Link> 1–1{' '}
    <Link href="/teams/real-salt-lake" className="text-blue-600 underline">Real Salt Lake</Link>
  </li>
  <li>
    <Link href="/teams/seattle-sounders" className="text-blue-600 underline">Seattle Sounders</Link> 1–0{' '}
    <Link href="/teams/san-diego" className="text-blue-600 underline">San Diego FC</Link>
  </li>
  <li>
    <Link href="/teams/columbus-crew" className="text-blue-600 underline">Columbus Crew</Link> 2–2{' '}
    <Link href="/teams/nashville-sc" className="text-blue-600 underline">Nashville SC</Link>
  </li>
  <li>
    <Link href="/teams/atlanta-united" className="text-blue-600 underline">Atlanta United</Link> 3–2{' '}
    <Link href="/teams/orlando-city" className="text-blue-600 underline">Orlando City</Link>
  </li>
  <li>
    <Link href="/teams/dc-united" className="text-blue-600 underline">DC United</Link> 1–1{' '}
    <Link href="/teams/new-england-revolution" className="text-blue-600 underline">New England Revolution</Link>
  </li>
  <li>
    <Link href="/teams/fc-cincinnati" className="text-blue-600 underline">FC Cincinnati</Link> 3–3{' '}
    <Link href="/teams/fc-dallas" className="text-blue-600 underline">FC Dallas</Link>
  </li>
  <li>
    <Link href="/teams/inter-miami" className="text-blue-600 underline">Inter Miami</Link> 4–2{' '}
    <Link href="/teams/cf-montreal" className="text-blue-600 underline">CF Montréal</Link>
  </li>
  <li>
    <Link href="/teams/nycfc" className="text-blue-600 underline">NYCFC</Link> 0–3{' '}
    <Link href="/teams/houston-dynamo" className="text-blue-600 underline">Houston Dynamo</Link>
  </li>
  <li>
    <Link href="/teams/new-york-red-bulls" className="text-blue-600 underline">NY Red Bulls</Link> 4–2{' '}
    <Link href="/teams/charlotte" className="text-blue-600 underline">Charlotte FC</Link>
  </li>
  <li>
    <Link href="/teams/toronto-fc" className="text-blue-600 underline">Toronto FC</Link> 1–2{' '}
    <Link href="/teams/philadelphia-union" className="text-blue-600 underline">Philadelphia Union</Link>
  </li>
</ul>


          <h2 className="text-xl font-semibold mt-8">Quickfire Match Notes</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>Portland: Key win to stay in the Western race.</li>
            <li>Vancouver-Minnesota: Flat, uneventful.</li>
            <li>Galaxy: Fans are running out of patience.</li>
            <li>Austin-RSL: Balanced game, RSL look strong.</li>
            <li>Seattle: Not flashy, but effective.</li>
            <li>Columbus: Missed chance to seal it.</li>
            <li>Atlanta-Orlando: Derby drama and goals.</li>
            <li>DC-New England: One point each.</li>
            <li>Cincy-Dallas: Game of the round.</li>
            <li>Miami-Montreal: Showtime in South Florida.</li>
            <li>NYCFC-Houston: Dynamo domination.</li>
            <li>Red Bulls-Charlotte: Red Bulls rolling.</li>
            <li>Toronto-Philly: Union comeback win.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">Standouts of the Round</h2>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Player of the Round:</strong> Luis Suárez – 2 goals + 1 assist.</li>
            <li><strong>Flop of the Round:</strong> NYCFC – lifeless at home.</li>
            <li><strong>Team of the Round:</strong> Inter Miami – serious title vibes.</li>
            <li><strong>Shock of the Round:</strong> LA Galaxy – lost and directionless.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">Final Word</h2>

          <p>
            MLS isn’t playing around anymore — every match counts, and the pace is relentless. 13 matches in a single round means anything can happen… and usually does.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MLSRoundRecap;