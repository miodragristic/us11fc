import React from 'react';
import Link from 'next/link';

const MLSRoundRecap = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
          MLS Roundup: Messi Shines, San Diego Surges, and DC United Stuns Cincinnati
        </h1>

        

        <img
          src="https://cdn1.intermiami.news/uploads/52/2024/12/GettyImages-1884518040-scaled.jpg"
          alt="MLS Matchday Recap"
          className="w-full h-[400px] object-cover rounded-lg shadow-md mb-6"
        />
        <div className="mb-4 text-sm text-gray-500">
          <p>By Mio Ristic | May 31, 2025</p>
          <p className="text-sm text-gray-600">
            Creator: SOPA Images | Credit: SOPA Images/LightRocket
          </p>
        </div>
        

        <div className="space-y-6 text-[#020617] text-lg mb-10">
          <p>
            Major League Soccer's latest matchday was packed with drama, brilliance, and shifting momentum across both conferences. From Lionel Messi's masterclass to surprising away victories, here’s everything you need to know from the action on May 31 and June 1.
          </p>

          <h2 className="text-xl font-semibold mt-8">🐐 Messi Puts on a Clinic as Inter Miami Dismantles Columbus Crew</h2>
          <p>
            Inter Miami delivered a statement performance in a 5–1 rout over Columbus Crew, with Lionel Messi leading the charge. The Argentine maestro recorded two goals and three assists, dictating the game in vintage fashion.
          </p>
          <p>
            Inter Miami now sits comfortably atop the Eastern Conference, and with Messi hitting full stride, the Herons are serious Supporters’ Shield contenders.
          </p>
          <p><strong>Key stat:</strong> Messi now has 9 goals and 11 assists in his last 8 appearances.</p>

          <h2 className="text-xl font-semibold mt-8">🌴 San Diego FC Continues Home Dominance</h2>
          <p>
            In California, San Diego FC kept their fortress intact with a commanding 2–0 win over Austin FC. It’s their fifth consecutive home victory, highlighting their rise as a serious playoff threat in their debut season.
          </p>
          <p>
            Across the state, LA Galaxy also impressed, beating Real Salt Lake 2–0, as Joseph Paintsil added another goal to his tally.
          </p>

          <h2 className="text-xl font-semibold mt-8">💥 Shocks Across the East: DC United Upsets Cincinnati</h2>
          <p>
            The biggest upset of the round came in Ohio, where DC United stunned defending East champs FC Cincinnati with a 2–1 victory. Gabriel Pirani was the standout performer, while Cincinnati’s defense looked shaky once again.
          </p>

          <p>Elsewhere:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>New England Revolution won away at CF Montréal (3–0),</li>
            <li>Charlotte FC shocked Toronto FC (2–0),</li>
            <li>Chicago Fire pulled off a stunning 3–1 victory over Orlando City.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">🚀 Joveljić Inspires SKC in Houston</h2>
          <p>
            Sporting Kansas City earned a crucial 3–1 away win over Houston Dynamo, thanks to a brace from Dejan Joveljić. The Serbian striker is quickly becoming the focal point for SKC’s attack and was clinical in front of goal.
          </p>

          <h2 className="text-xl font-semibold mt-8">🧊 Mixed Results in the West</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>New York Red Bulls defeated Atlanta United 2–0 in a solid team performance.</li>
            <li>St. Louis City came from behind to beat San Jose Earthquakes 2–1, with Löwen scoring from the spot.</li>
            <li>FC Dallas and Philadelphia Union played out a goalless draw.</li>
            <li>Meanwhile, Nashville SC and NYCFC shared the points in a dramatic 2–2 draw.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">🏆 Players of the Round</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Lionel Messi (Inter Miami)</strong> – 2 goals, 3 assists, simply unplayable.</li>
            <li><strong>Dejan Joveljić (Sporting KC)</strong> – Match-winning double.</li>
            <li><strong>Gabriel Pirani (DC United)</strong> – Dominated midfield, set the tempo.</li>
            <li><strong>Ilay Feingold (New England)</strong> – Key playmaker in a big road win.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">⚽ What We Learned This Week in MLS</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Inter Miami are peaking at just the right time – Messi is in MVP form.</li>
            <li>DC United and San Diego FC are proving doubters wrong.</li>
            <li>Charlotte and Chicago Fire are quietly gaining momentum in the East.</li>
            <li>Sporting KC could be a dark horse if Joveljić stays hot.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">📊 Eastern & Western Conference Standings – Key Movements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Inter Miami strengthens hold on 1st in the East.</li>
            <li>FC Cincinnati drops critical points and exposes vulnerabilities.</li>
            <li>San Diego FC climbs into a top-six position in the West.</li>
            <li>Houston Dynamo slide out of playoff contention (for now).</li>
          </ul>

          
        </div>
      </div>
    </div>
  );
};

export default MLSRoundRecap;
