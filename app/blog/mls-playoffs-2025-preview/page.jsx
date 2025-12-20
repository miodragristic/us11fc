'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSCupPlayoffs2025Preview() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS Playoffs 2025: The Final Eight — Drama, Stars, and Glory Await')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* ================= HEADER ================= */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Playoffs 2025: The Final Eight — Drama, Stars, and Glory Await
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-10">November 10, 2025</time>
          </div>

          {/* ===== TAGS ===== */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/inter-miami" target="_blank" rel="noopener noreferrer" className="text-xs bg-pink-600 text-white px-3 py-1 rounded-full hover:bg-pink-700 transition">#InterMiamiCF</Link>
            <Link href="/teams/philadelphia-union" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-800 text-white px-3 py-1 rounded-full hover:bg-blue-900 transition">#PhiladelphiaUnion</Link>
            <Link href="/teams/nycfc" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition">#NYCFC</Link>
            <Link href="/teams/fc-cincinnati" target="_blank" rel="noopener noreferrer" className="text-xs bg-orange-600 text-white px-3 py-1 rounded-full hover:bg-orange-700 transition">#FCCincinnati</Link>
            <Link href="/teams/lafc" target="_blank" rel="noopener noreferrer" className="text-xs bg-black text-white px-3 py-1 rounded-full hover:bg-gray-900 transition">#LAFC</Link>
            <Link href="/teams/vancouver-whitecaps" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-400 text-white px-3 py-1 rounded-full hover:bg-blue-500 transition">#VancouverWhitecapsFC</Link>
            <Link href="/teams/san-diego" target="_blank" rel="noopener noreferrer" className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full hover:bg-teal-700 transition">#SanDiegoFC</Link>
            <Link href="/teams/minnesota-united" target="_blank" rel="noopener noreferrer" className="text-xs bg-gray-600 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition">#MinnesotaUnitedFC</Link>
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
            src="https://www.365scores.com/es/news/wp-content/uploads/2025/07/GettyImages-1892797976-1024x694.jpg"
            alt="MLS Playoffs 2025 preview"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Zach Sanderson/ISI Photos 
| 
Credit: Getty Images
Copyright: 2023 Zach Sanderson/ISI Photos
          </figcaption>
        </figure>

        {/* ================= ARTICLE CONTENT ================= */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

          {/* --- INTRO --- */}
          <section id="intro">
            <p>
              The MLS Playoffs 2025 are reaching their climax, and the competition is becoming more intense with each match. Some giants have already fallen, while other favorites continue their pursuit of the ultimate prize. The next chapter in this incredible season will be written by your favorite clubs and some of the biggest stars in world football.
            </p>
          </section>

          {/* --- PHILADELPHIA vs NYCFC --- */}
          <section id="philadelphia" className="border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-2">Philadelphia Union vs New York City FC – November 23</h2>
            <p>
              The Philadelphia Union, winners of the Supporters’ Shield and the best team throughout the regular season, enter this matchup as clear favorites. However, New York City FC have already proven their quality in the dramatic three-game series against Charlotte. Their speed and counterattacking strength make them a dangerous opponent for any team.
            </p>
            <p>
              Philadelphia will likely dominate possession, but that could open space for NYCFC’s quick transitions and creative attackers. Even though Union’s consistency and coaching have made them the top contender, NYCFC’s ability to strike on the break makes this one of the most unpredictable fixtures of the round.
            </p>
            <p>🎟️ <a href="https://ticketnetwork.lusg.net/9LXyVj" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Buy tickets for the second leg here</a></p>
          </section>

          {/* --- CINCINNATI vs INTER MIAMI --- */}
          <section id="cincinnati" className="border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-2">FC Cincinnati vs Inter Miami CF – November 23</h2>
            <p>
              This might be the defining match of the playoffs. Both teams finished the regular season with the same number of points, with FC Cincinnati officially taking second place and securing home-field advantage. Inter Miami, led by Lionel Messi, remain not only the favorite in this clash but also to lift the MLS Cup itself.
            </p>
            <p>
              Cincinnati are tough, disciplined, and fully capable of creating an upset. Miami, however, have the experience and star power to take control when it matters most. After surviving a challenging series against Nashville, Messi’s team knows they must stay focused.
            </p>
            <p>🎟️ <a href="https://ticketnetwork.lusg.net/Dy2RWo" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Buy tickets for the second leg here</a></p>
          </section>

          {/* --- VANCOUVER vs LAFC --- */}
          <section id="vancouver" className="border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-2">Vancouver Whitecaps FC vs Los Angeles FC – November 22</h2>
            <p>
              Two high-profile teams, both with attacking ambition, meet in a game that promises excitement. Vancouver, one of this season’s biggest surprises and CONCACAF Cup finalists, welcome Los Angeles FC to Canada. With Thomas Müller leading the Whitecaps and Son Heung-min spearheading LAFC’s offense, fans will witness a star-studded battle that echoes the intensity of European nights.
            </p>
            <p>🎟️ <a href="https://ticketnetwork.lusg.net/o47onn" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Buy tickets for the second leg here</a></p>
          </section>

          {/* --- SAN DIEGO vs MINNESOTA --- */}
          <section id="sandiego" className="border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-2">San Diego FC vs Minnesota United FC – November 24</h2>
            <p>
              San Diego’s debut season has been nothing short of extraordinary. Guided by Hirving Lozano, the expansion club topped the Western Conference standings — an impressive achievement for a team built from scratch. Minnesota United, fresh off a dramatic penalty shootout win against Seattle Sounders, arrive in California with confidence and momentum.
            </p>
            <p>
              This will be a tactical battle between San Diego’s fluid, attacking style and Minnesota’s defensive discipline and resilience. The atmosphere in Snapdragon Stadium is expected to be electric.
            </p>
            <p>🎟️ <a href="https://ticketnetwork.lusg.net/yq74rv" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Buy tickets for the second leg here</a></p>
          </section>

          {/* --- CONCLUSION --- */}
          <section id="conclusion">
            <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-2">The Stage Is Set</h2>
            <p>
              Predictions are unnecessary — what awaits is passion, intensity, and world-class football. With Messi, Suarez, Son, Müller, Lozano, Alba, Busquets, De Paul, and Morales all taking the field, this is more than just a playoff — it’s a celebration of the sport. The MLS Playoffs 2025 promise to deliver drama, emotion, and unforgettable moments across North America.
            </p>
          </section>

        </section>

        {/* ================= FOOTER ================= */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: November 10, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>
          
        </footer>

      </div>
    </article>
  );
}
