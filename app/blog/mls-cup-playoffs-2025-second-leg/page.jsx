'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSCupPlayoffs2025Round2() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS Cup Playoffs 2025 – Round 2 Recap: Drama, Goals & Legends')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* ================= HEADER ================= */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Cup Playoffs 2025 – Round 2 Delivers Drama, Goals, and Rising Legends
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-02">November 2, 2025</time>
          </div>

          {/* ===== TAGS ===== */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/inter-miami" target="_blank" rel="noopener noreferrer" className="text-xs bg-pink-600 text-white px-3 py-1 rounded-full hover:bg-pink-700 transition">#InterMiamiCF</Link>
            <Link href="/teams/nashville-sc" target="_blank" rel="noopener noreferrer" className="text-xs bg-yellow-500 text-white px-3 py-1 rounded-full hover:bg-yellow-600 transition">#NashvilleSC</Link>
            <Link href="/teams/charlotte-fc" target="_blank" rel="noopener noreferrer" className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 transition">#CharlotteFC</Link>
            <Link href="/teams/nycfc" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition">#NYCFC</Link>
            <Link href="/teams/philadelphia-union" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-800 text-white px-3 py-1 rounded-full hover:bg-blue-900 transition">#PhiladelphiaUnion</Link>
            <Link href="/teams/chicago-fire" target="_blank" rel="noopener noreferrer" className="text-xs bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition">#ChicagoFireFC</Link>
            <Link href="/teams/fc-cincinnati" target="_blank" rel="noopener noreferrer" className="text-xs bg-orange-600 text-white px-3 py-1 rounded-full hover:bg-orange-700 transition">#FCCincinnati</Link>
            <Link href="/teams/columbus-crew" target="_blank" rel="noopener noreferrer" className="text-xs bg-yellow-600 text-white px-3 py-1 rounded-full hover:bg-yellow-700 transition">#ColumbusCrew</Link>
            <Link href="/teams/san-diego" target="_blank" rel="noopener noreferrer" className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full hover:bg-teal-700 transition">#SanDiegoFC</Link>
            <Link href="/teams/portland-timbers" target="_blank" rel="noopener noreferrer" className="text-xs bg-green-700 text-white px-3 py-1 rounded-full hover:bg-green-800 transition">#PortlandTimbers</Link>
            <Link href="/teams/vancouver-whitecaps" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-400 text-white px-3 py-1 rounded-full hover:bg-blue-500 transition">#VancouverWhitecapsFC</Link>
            <Link href="/teams/fc-dallas" target="_blank" rel="noopener noreferrer" className="text-xs bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition">#FCDallas</Link>
            <Link href="/teams/minnesota-united" target="_blank" rel="noopener noreferrer" className="text-xs bg-gray-600 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition">#MinnesotaUnitedFC</Link>
            <Link href="/teams/seattle-sounders" target="_blank" rel="noopener noreferrer" className="text-xs bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition">#SeattleSoundersFC</Link>
            <Link href="/teams/lafc" target="_blank" rel="noopener noreferrer" className="text-xs bg-black text-white px-3 py-1 rounded-full hover:bg-gray-900 transition">#LosAngelesFC</Link>
            <Link href="/teams/austin-fc" target="_blank" rel="noopener noreferrer" className="text-xs bg-lime-500 text-white px-3 py-1 rounded-full hover:bg-lime-600 transition">#AustinFC</Link>
          </div>

          {/* ===== SOCIAL ICONS ===== */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* ================= FEATURE IMAGE ================= */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-1469812350/crop/MM5DIMBUHA5DEMRXG45G433XMU5DENJQHIZDKNY=/GettyImages-1469812350.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="MLS Cup Playoffs 2025 – Round 2 Highlights"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Tim Nwachukwu 
| 
Credit: Getty Images
Copyright: 2023 Getty Images
          </figcaption>
        </figure>

        {/* ================= ARTICLE CONTENT ================= */}
        <section className="prose prose-lg max-w-none space-y-6 mb-9 leading-relaxed">

          {/* --- INTRO --- */}
          <section id="intro" className="mb-10">
            <p>
              The second round of the 2025 MLS Cup Playoffs brought everything fans could ask for — drama, goals, passion, and statement performances from league superstars. From Lionel Messi’s brilliance to Thomas Müller’s leadership and LAFC’s ruthless efficiency, this postseason is shaping up to be one for the history books.
            </p>
          </section>

          {/* --- INTER MIAMI vs NASHVILLE --- */}
          <section id="inter-miami" className="mb-10 border-b border-gray-200 pb-6">
            <h2 className="mb-4">⚽ Inter Miami CF vs Nashville SC (Series tied 1–1, Decider on Nov 8)</h2>
            <p>
              The battle between Inter Miami and Nashville SC has become a full-scale playoff war. In the first leg, it was all about Messi — two goals and an assist to Allende sealed a 3–1 win in Fort Lauderdale. But Nashville hit back in the return leg. Sam Surridge opened the scoring from the spot, Bauer made it 2–0, and though Messi pulled one back in stoppage time, Nashville won 2–1 to level the series.
            </p>
          </section>

          {/* --- CHARLOTTE vs NYCFC --- */}
          <section id="charlotte" className="mb-10 border-b border-gray-200 pb-6">
            <h2 className="mb-4">🏙️ Charlotte FC vs New York City FC (Series tied 1–1, Decider on Nov 7)</h2>
            <p>
              A tense and tactical battle. NYCFC claimed a 1–0 win in the opener thanks to Martínez, but Charlotte FC responded with a dramatic 7–6 penalty victory after a goalless draw at Yankee Stadium. Both sides have shown grit and defensive resilience. The third leg in Charlotte will decide who marches on to the Eastern semis.
            </p>
          </section>

          {/* --- PHILADELPHIA vs CHICAGO --- */}
          <section id="philadelphia" className="mb-10 border-b border-gray-200 pb-6">
            <h2 className="mb-4">🦅 Philadelphia Union vs Chicago Fire FC (Union win 2–0)</h2>
            <p>
              Philadelphia Union once again proved why they’re one of MLS’s most consistent clubs. After a thrilling 2–2 first leg that ended in a 4–2 penalty win, the Union dominated the return match in Bridgeview — Baribo scored twice, Damiani added another, and the Union booked their spot in the next round with a 3–0 win (2–0 aggregate). The Shield winners look like real title contenders.
            </p>
          </section>

          {/* --- CINCINNATI vs COLUMBUS --- */}
          <section id="cincinnati" className="mb-10 border-b border-gray-200 pb-6">
            <h2 className="mb-4">🧡 FC Cincinnati vs Columbus Crew (Series tied 1–1, Decider on Nov 8)</h2>
            <p>
              The Hell is Real Derby lived up to its name. Cincinnati edged the first leg 1–0 through Denkey, but Columbus Crew answered with a stunning 4–0 home victory — goals from Arfsten, Chambost, Herrera, and Russell-Rowe lit up Lower.com Field. The decider returns to TQL Stadium on November 8, promising one of the most electric atmospheres of the playoffs.
            </p>
          </section>

          {/* --- SAN DIEGO vs PORTLAND --- */}
          <section id="san-diego" className="mb-10 border-b border-gray-200 pb-6">
            <h2 className="mb-4">🌴 San Diego FC vs Portland Timbers (Series tied 1–1, Decider on Nov 9)</h2>
            <p>
              What a debut season it’s been for San Diego FC. They won 2–1 in their first-ever playoff match, but Portland fought back in a chaotic 2–2 draw at Providence Park — equalizing in the 98th minute before winning 3–2 on penalties. Now everything comes down to the third leg at a packed Snapdragon Stadium on November 9.
            </p>
          </section>

          {/* --- VANCOUVER vs DALLAS --- */}
          <section id="vancouver" className="mb-10 border-b border-gray-200 pb-6">
            <h2 className="mb-4">🇨🇦 Vancouver Whitecaps FC vs FC Dallas (Vancouver win 2–0)</h2>
            <p>
              Led by Thomas Müller, the Vancouver Whitecaps were dominant from start to finish. A commanding 3–0 win at home was followed by a 1–1 draw in Dallas, with Vancouver prevailing 4–2 on penalties. Müller’s leadership and Cabrera’s form have made the Whitecaps look like one of the most complete teams in the league.
            </p>
          </section>

          {/* --- LAFC vs AUSTIN --- */}
          <section id="lafc" className="mb-10 border-b border-gray-200 pb-6">
            <h2 className="mb-4">🖤 Los Angeles FC vs Austin FC (LAFC win 2–0)</h2>
            <p>
              LAFC are sending a clear message: they want the Cup. The first leg ended 2–1 thanks to attacking brilliance from Bouanga and Son Heung-min, while the second match was even more ruthless — Son, Bouanga (brace), and Ebobisse destroyed Austin 4–1 to secure a 2–0 series sweep. LAFC look unstoppable right now.
            </p>
          </section>

          {/* --- MINNESOTA vs SEATTLE --- */}
          <section id="minnesota" className="mb-10 border-b border-gray-200 pb-6">
            <h2 className="mb-4">⚔️ Minnesota United FC vs Seattle Sounders FC (Minnesota lead 1–0, Second leg ahead)</h2>
            <p>
              Minnesota United held firm in a tight 0–0 draw before winning 3–2 on penalties. With the second leg set for November 3 at Lumen Field, Seattle will look to respond in front of their fans. Expect a tactical chess match — and possibly another penalty thriller.
            </p>
          </section>

          {/* --- CONCLUSION --- */}
          <section id="conclusion" className="mb-10">
            <h2 className="mb-4">🏁 The Road Ahead</h2>
            <p>
              Round 2 of the 2025 MLS Cup Playoffs delivered everything: comebacks, controversies, and unforgettable moments. Philadelphia Union, Vancouver Whitecaps, and LAFC are already through, while the remaining series — Inter Miami vs Nashville, Charlotte vs NYCFC, Cincinnati vs Columbus, and San Diego vs Portland — will soon decide the rest of the semifinal field. This postseason is setting new standards for MLS — and the best is yet to come.
            </p>
          </section>

        </section>

        {/* ================= FOOTER ================= */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: November 2, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
