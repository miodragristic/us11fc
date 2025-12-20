'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSGlobalCalendar() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS Moves to Global Calendar: Summer-to-Spring Season Starts in 2027')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Moves to Global Calendar: Summer-to-Spring Season Starts in 2027
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-14">November 14, 2025</time>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams" className="text-xs bg-red-700 text-white px-3 py-1 rounded-full hover:bg-red-800 transition">
              #MLS
            </Link>
           
           
          </div>

          {/* Social Share Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={18} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={18} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={18} />
            </a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition">
              <FiCopy size={18} />
            </button>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-8">
          <Image
            src="https://assets.goal.com/images/v3/getty-2240501357/crop/MM5DINRYGQ5DENRTGU5G433XMU5DAORSGQ2A====/GettyImages-2240501357.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="MLS Global Calendar Shift"
            width={1024}
            height={520}
            className="w-full h-[520px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Rich Storry 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          
          <h2 className="text-3xl font-bold !mt-10 !mb-4">MLS 3.0 – A Historic Calendar Shift</h2>
          <p>
            Major League Soccer (MLS) is making a <strong>major overhaul</strong> of its competition calendar, moving from February–December to a <strong>July–May season starting in 2027</strong>. This aligns MLS with top European and global leagues, boosting <strong>competitiveness, transfer opportunities, and player development</strong>.
          </p>

          <h2 className="text-3xl font-bold !mt-10 !mb-4">New Season Structure</h2>
          <ul className="list-disc pl-5">
            <li><strong>2027–28 Regular Season:</strong> Mid-to-late July 2027 → May 2028</li>
            <li><strong>Midwinter Break:</strong> Mid-December → Early February (no matches in January)</li>
            <li><strong>Transition Season 2027:</strong> February → May 2027, featuring a 14-game regular season, playoffs, and MLS Cup</li>
            <li><strong>International Qualification:</strong> Transition season results determine spots for U.S. Open Cup, Canadian Championship, Leagues Cup, and Concacaf Champions Cup</li>
          </ul>

          <h2 className="text-3xl font-bold !mt-10 !mb-4">Strategic Benefits of the Calendar Change</h2>
          <ul className="list-disc pl-5">
            <li><strong>Global Transfer Market Alignment:</strong> Clubs can buy/sell players during the peak summer transfer window.</li>
            <li><strong>Better Player Integration:</strong> Summer signings arrive before season starts for smooth integration.</li>
            <li><strong>Reduced FIFA Calendar Conflicts:</strong> Fewer clashes with international call-ups and tournaments.</li>
            <li><strong>May Playoffs for Maximum Impact:</strong> MLS Cup playoffs in May ensure ideal weather, optimal viewership, and fan attention.</li>
          </ul>

          <h3 className="text-2xl font-semibold !mt-8 !mb-3">What Soccer Leaders Are Saying</h3>

<blockquote className="border-l-4 pl-4 text-xl italic">
  “This is a huge step forward for MLS. It benefits players, clubs, and youth national teams during critical international periods.”
  — Mauricio Pochettino, USMNT Head Coach
</blockquote>

<blockquote className="border-l-4 pl-4 text-xl italic">
  “Aligning with top leagues worldwide is a natural evolution for MLS and positions the league on par with the best.”
  — Gregg Berhalter, Chicago Fire FC Head Coach & Director of Football
</blockquote>

<blockquote className="border-l-4 pl-4 text-xl italic">
  “Being on the same timetable globally means players are sharper, and it’s easier for everyone – players, coaches, and fans – to follow the game year-round.”
  — Clint Dempsey, MLS Legend & Former USMNT Captain
</blockquote>

<blockquote className="border-l-4 pl-4 text-xl italic">
  “Operating in sync with the global transfer market is a massive game-changer. We can sign top talent in the summer instead of midseason.”
  — Will Kuntz, LA Galaxy GM
</blockquote>


          <h2 className="text-3xl font-bold !mt-10 !mb-4">Fan Support and Planning</h2>
          <ul className="list-disc pl-5">
            <li>92% of MLS viewers supported the change during the two-year review process</li>
            <li>Detailed weather and logistics studies optimized fan experience, especially in northern markets</li>
            <li>MLS NEXT Pro discusses aligning its calendar with the new schedule</li>
            <li>About 91% of matches still occur within the general timeframe of today’s season</li>
          </ul>

          <h2 className="text-3xl font-bold !mt-10 !mb-4">Conclusion</h2>
          <p>
            The MLS summer-to-spring calendar represents MLS 3.0 – a global shift enhancing <strong>club competitiveness, player development, and fan engagement</strong>. With May playoffs, better transfer integration, and alignment with international competitions, the 2027–28 season promises to be historic for Major League Soccer.
          </p>

        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: November 14, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>

          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
            <Link href="/teams" className="text-sm text-red-700 hover:text-red-800 ml-4">#MLS</Link>
          </div>
          
        </footer>

      </div>
    </article>
  );
}
