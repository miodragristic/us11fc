'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSPlayoffs2025Blog() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS 2025 Playoffs Recap: Full Match Reviews & Highlights')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Playoffs 2025: Full Recap of the First 8 Matches
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-10-30">October 30, 2025</time>
          </div>

          {/* TAGS */}
<div className="flex flex-wrap items-center gap-2 mt-3">
  <Link href="/teams/inter-miami" target="_blank" rel="noopener noreferrer" className="text-xs bg-pink-600 text-white px-3 py-1 rounded-full hover:bg-pink-700 transition">#InterMiamiCF</Link>
  <Link href="/teams/nashville-sc" target="_blank" rel="noopener noreferrer" className="text-xs bg-yellow-500 text-white px-3 py-1 rounded-full hover:bg-yellow-600 transition">#NashvilleSC</Link>
  <Link href="/teams/charlotte" target="_blank" rel="noopener noreferrer" className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 transition">#CharlotteFC</Link>
  <Link href="/teams/nycfc" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition">#NYCFC</Link>
  <Link href="/teams/philadelphia-union" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-800 text-white px-3 py-1 rounded-full hover:bg-blue-900 transition">#PhiladelphiaUnion</Link>
  <Link href="/teams/chicago-fire" target="_blank" rel="noopener noreferrer" className="text-xs bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition">#ChicagoFireFC</Link>
  <Link href="/teams/san-diego" target="_blank" rel="noopener noreferrer" className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full hover:bg-teal-700 transition">#SanDiegoFC</Link>
  <Link href="/teams/portland-timbers" target="_blank" rel="noopener noreferrer" className="text-xs bg-green-700 text-white px-3 py-1 rounded-full hover:bg-green-800 transition">#PortlandTimbers</Link>
  <Link href="/teams/vancouver-whitecaps" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-400 text-white px-3 py-1 rounded-full hover:bg-blue-500 transition">#VancouverWhitecapsFC</Link>
  <Link href="/teams/fc-dallas" target="_blank" rel="noopener noreferrer" className="text-xs bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition">#FCDallas</Link>
  <Link href="/teams/fc-cincinnati" target="_blank" rel="noopener noreferrer" className="text-xs bg-orange-600 text-white px-3 py-1 rounded-full hover:bg-orange-700 transition">#FCCincinnati</Link>
  <Link href="/teams/columbus-crew" target="_blank" rel="noopener noreferrer" className="text-xs bg-yellow-600 text-white px-3 py-1 rounded-full hover:bg-yellow-700 transition">#ColumbusCrew</Link>
  <Link href="/teams/minnesota-united" target="_blank" rel="noopener noreferrer" className="text-xs bg-gray-600 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition">#MinnesotaUnitedFC</Link>
  <Link href="/teams/seattle-sounders" target="_blank" rel="noopener noreferrer" className="text-xs bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition">#SeattleSoundersFC</Link>
  <Link href="/teams/lafc" target="_blank" rel="noopener noreferrer" className="text-xs bg-black text-white px-3 py-1 rounded-full hover:bg-gray-900 transition">#LosAngelesFC</Link>
  <Link href="/teams/austin-fc" target="_blank" rel="noopener noreferrer" className="text-xs bg-lime-500 text-white px-3 py-1 rounded-full hover:bg-lime-600 transition">#AustinFC</Link>
</div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2243553938/crop/MM5DGMBWGQ5DCNZSGQ5G433XMU5DAORRGU4Q====/GettyImages-2243553938.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="MLS Playoffs 2025 Highlights"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Kevork Djansezian 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* CONTENT */}
<section className="prose prose-lg max-w-none mb-9 leading-relaxed">

  {/* 1. Inter Miami vs Nashville */}
  <h2 className="text-3xl font-bold mt-8 mb-2">Inter Miami CF 3–1 Nashville SC</h2>
  <p>Inter Miami dominated from start to finish under Javier Mascherano. Messi opened the scoring early, Allende doubled the lead, and Messi sealed the victory in stoppage time. Mukhtar scored a late consolation goal for Nashville.</p>
  <ul className="list-disc pl-6 mb-2">
    <li>Scorers: Messi 19’, 90+6’, Allende 62’, Mukhtar 90+11’</li>
  </ul>
  <p>🎟️ <a href="https://ticketnetwork.lusg.net/2a4Wyg" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Buy tickets for the second leg here</a></p>

  {/* 2. Charlotte FC vs NYCFC */}
  <h2 className="text-3xl font-bold mt-8 mb-2">Charlotte FC 0–1 New York City FC</h2>
  <p>NYCFC claimed a narrow victory thanks to Martínez’s goal in the 34th minute. Charlotte pushed hard but could not break through, giving NYCFC a slight advantage for the rematch.</p>
  <ul className="list-disc pl-6 mb-2">
    <li>Scorer: Martínez 34’</li>
  </ul>
  <p>🎟️ <a href="https://ticketnetwork.lusg.net/7aYJ1A" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Get tickets for the rematch in New York</a></p>

  {/* 3. Philadelphia Union vs Chicago Fire FC */}
  <h2 className="text-3xl font-bold mt-8 mb-2">Philadelphia Union 2–2 Chicago Fire FC (4–2 Penalties)</h2>
  <p>Philadelphia led 2–0, but Chicago fought back to draw 2–2. The Union triumphed 4–2 on penalties, highlighting their Shield-winning pedigree.</p>
  <ul className="list-disc pl-6 mb-2">
    <li>Scorers: Vassilev 70’, Iloski 75’ (Philadelphia), Bamba 84’, Elliott 90+3’ (Chicago)</li>
  </ul>
  <p>🎟️ <a href="https://ticketnetwork.lusg.net/Dy4kOo" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Buy tickets for the rematch in Chicago</a></p>

  {/* 4. San Diego FC vs Portland Timbers */}
  <h2 className="text-3xl font-bold mt-8 mb-2">San Diego FC 2–1 Portland Timbers</h2>
  <p>San Diego secured a historic playoff win in their first MLS season. Goals from Valakari and Dreyer ensured victory, while Portland scored once through Velde.</p>
  <ul className="list-disc pl-6 mb-2">
    <li>Scorers: Valakari 23’, Dreyer 30’ (San Diego), Velde 36’ (Portland)</li>
  </ul>
  <p>🎟️ <a href="https://ticketnetwork.lusg.net/9LKJn0" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Buy tickets for the rematch in Portland</a></p>

  {/* 5. Vancouver Whitecaps FC vs FC Dallas */}
  <h2 className="text-3xl font-bold mt-8 mb-2">Vancouver Whitecaps FC 3–0 FC Dallas</h2>
  <p>Vancouver dominated with the leadership of Thomas Müller. Ríos, Müller (penalty), and Cabrera scored, securing a decisive 3–0 win ahead of the rematch in Texas.</p>
  <ul className="list-disc pl-6 mb-2">
    <li>Scorers: Ríos 43’, Müller 60’ (pen.), Cabrera 83’</li>
  </ul>
  <p>🎟️ <a href="https://ticketnetwork.lusg.net/LK9ZOj" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Reserve your tickets for the Texas rematch</a></p>

  {/* 6. FC Cincinnati vs Columbus Crew */}
  <h2 className="text-3xl font-bold mt-8 mb-2">FC Cincinnati 1–0 Columbus Crew</h2>
  <p>A thrilling Ohio derby saw Denkey score the only goal at 78’. Cincinnati takes a narrow advantage into the second leg.</p>
  <ul className="list-disc pl-6 mb-2">
    <li>Scorer: Denkey 78’</li>
  </ul>
  <p>🎟️ <a href="https://ticketnetwork.lusg.net/Qjk62P" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Support your city—buy tickets for the rematch</a></p>

  {/* 7. Minnesota United FC vs Seattle Sounders FC */}
  <h2 className="text-3xl font-bold mt-8 mb-2">Minnesota United FC 0–0 Seattle Sounders FC (3–2 Penalties)</h2>
  <p>The match ended 0–0 in regulation, but Minnesota prevailed 3–2 in penalties, converting Yeboah, Triantis, and Pereyra, while Seattle missed three crucial shots.</p>
  <ul className="list-disc pl-6 mb-2">
    <li>Penalty Shootout: Minnesota: Yeboah ✅, Triantis ✅, Pereyra ✅ | Seattle: Rusnák ✅, Á. Roldán ❌, Ragen ✅, C. Roldan ❌, Leyva ❌</li>
  </ul>
  <p>🎟️ <a href="https://ticketnetwork.lusg.net/Vx162A" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Buy tickets for the Seattle rematch</a></p>

  {/* 8. Los Angeles FC vs Austin FC */}
  <h2 className="text-3xl font-bold mt-8 mb-2">Los Angeles FC 2–1 Austin FC</h2>
  <p>LAFC’s Bounga–Son duo tested Austin’s defense. After an early own goal and Austin’s equalizer, LAFC scored the winner late to claim victory.</p>
  <ul className="list-disc pl-6 mb-2">
    <li>Scorers: Hines-Ike 20’ (o.g.), Ordaz 79’ (LAFC), Gallagher 63’ (Austin)</li>
  </ul>
  <p>🎟️ <a href="https://ticketnetwork.lusg.net/zxJ2nO" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Get tickets for the Austin rematch</a></p>

</section>


        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: October 30, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>
        </footer>

      </div>
    </article>
  );
}
