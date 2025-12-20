import React from 'react';
import Link from 'next/link';

const InterMiamiVsPalmeirasRecap = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
          Inter Miami CF Draws With Palmeiras, Secures Group Stage Qualification at FIFA Club World Cup 2025
        </h1>

        <div className="mb-4">
          <img
            src="https://assets.goal.com/images/v3/getty-2221130245/crop/MM5DENBTGQ5DCMZWHE5G433XMU5DMMJYHIYTAMI=/GettyImages-2221130245.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Inter Miami vs Palmeiras"
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
            style={{ objectPosition: 'center' }}
          />
          <div className="mt-2 text-sm text-gray-600">
            <span>By: Mio Ristic | US11 | June 24, 2025 | Creator: PATRICIA DE MELO MOREIRA 
| 
Credit: AFP via Getty Images
Copyright: AFP or licensors</span>
          </div>
          <div className="mt-4 text-center">
            <Link href="/teams/inter-miami">
              <button className="bg-pink-500 hover:bg-pink-600 text-black font-bold py-2 px-4 rounded-lg cursor-pointer">
                Visit Inter Miami
              </button>
            </Link>
          </div>
        </div>

        <p className="mb-4">
          Inter Miami CF secured a hard-fought 2-2 draw against Palmeiras in the final Group A match of the FIFA Club World Cup 2025. The result was enough to ensure their progression to the knockout stages, marking a historic achievement for the club and MLS as a whole.
        </p>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">⚽ Early Lead and Strong Performance</h2>
        <p className="mb-4">
          Miami opened the scoring in the 16th minute thanks to young forward Tadeo Allende, who capitalized on a precise assist from Luis Suarez. Suarez himself doubled the lead in the second half with a clinical finish, putting Miami in a strong position.
        </p>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">⏳ Palmeiras Fight Back</h2>
        <p className="mb-4">
          Palmeiras, however, refused to back down. Late goals from Paulinho and Mauricio leveled the match, sparking a tense finale. Despite Miami’s efforts to hold on, Palmeiras’ pressure paid off, resulting in the final draw.
        </p>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">🏆 Group Stage Qualification: A Milestone for Miami and MLS</h2>
        <p className="mb-4">
          Although Miami missed out on topping the group, their 5 points earned them second place and a place in the knockout phase. Head coach Javier Mascherano expressed pride in his team and highlighted the broader impact:
        </p>
        <blockquote className="italic mb-4">
          “This is a historic night for MLS. We have made it into the top 16 teams worldwide, and that’s a success everyone in the league can be proud of.”
        </blockquote>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">🔥 What’s Next? Inter Miami vs Paris Saint-Germain</h2>
        <p className="mb-6">
          The next challenge for Inter Miami is a daunting one: facing European giants Paris Saint-Germain in the knockout round. While PSG enters as the favorites, Miami is motivated and ready to make their mark on the global stage.
        </p>

        <table className="w-full text-left border-collapse mb-6">
          <thead>
            <tr>
              <th className="border-b border-gray-300 px-3 py-2">Pos</th>
              <th className="border-b border-gray-300 px-3 py-2">Team</th>
              <th className="border-b border-gray-300 px-3 py-2">Played</th>
              <th className="border-b border-gray-300 px-3 py-2">Wins</th>
              <th className="border-b border-gray-300 px-3 py-2">Draws</th>
              <th className="border-b border-gray-300 px-3 py-2">Losses</th>
              <th className="border-b border-gray-300 px-3 py-2">Goal Difference</th>
              <th className="border-b border-gray-300 px-3 py-2">Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2">1</td>
              <td>Palmeiras</td>
              <td className="px-3 py-2">3</td>
              <td className="px-3 py-2">1</td>
              <td className="px-3 py-2">2</td>
              <td className="px-3 py-2">0</td>
              <td className="px-3 py-2">+2</td>
              <td className="px-3 py-2">5</td>
            </tr>
            <tr>
              <td className="px-3 py-2">2</td>
              <td>Inter Miami CF</td>
              <td className="px-3 py-2">3</td>
              <td className="px-3 py-2">1</td>
              <td className="px-3 py-2">2</td>
              <td className="px-3 py-2">0</td>
              <td className="px-3 py-2">+1</td>
              <td className="px-3 py-2">5</td>
            </tr>
            <tr>
              <td className="px-3 py-2">3</td>
              <td>FC Porto</td>
              <td className="px-3 py-2">3</td>
              <td className="px-3 py-2">0</td>
              <td className="px-3 py-2">2</td>
              <td className="px-3 py-2">1</td>
              <td className="px-3 py-2">-1</td>
              <td className="px-3 py-2">2</td>
            </tr>
            <tr>
              <td className="px-3 py-2">4</td>
              <td>Al Ahly</td>
              <td className="px-3 py-2">3</td>
              <td className="px-3 py-2">0</td>
              <td className="px-3 py-2">2</td>
              <td className="px-3 py-2">1</td>
              <td className="px-3 py-2">-2</td>
              <td className="px-3 py-2">2</td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-center my-8">
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/2aA0_1kTfIc"
    title="Inter Miami CF vs Palmeiras (2‑2) | Resumen – FIFA Club World Cup 2025™"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

        <p className="mb-4 text-gray-600 text-sm">
          Updated on June 24, 2025 | Source: FIFA
        </p>
      </div>
    </div>
  );
};

export default InterMiamiVsPalmeirasRecap;
