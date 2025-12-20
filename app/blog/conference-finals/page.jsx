'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ConferenceFinalsPreview() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("Today Is the Day: Conference Finals — Who Will Reach the MLS Cup Final?")}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  // Replace this with your actual ticket purchase URL(s)
  const ticketLink = 'REPLACE_WITH_TICKET_URL';

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Today Is the Day: Conference Finals — Who Will Reach the MLS Cup Final?
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-29">November 29, 2025</time>
          </div>

          {/* ===== TAGS ===== */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/inter-miami" target="_blank" rel="noopener noreferrer" className="text-xs bg-pink-600 text-white px-3 py-1 rounded-full hover:bg-pink-700 transition">#InterMiamiCF</Link>
            <Link href="/teams/nycfc" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition">#NYCFC</Link>
            <Link href="/teams/san-diego" target="_blank" rel="noopener noreferrer" className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full hover:bg-teal-700 transition">#SanDiegoFC</Link>
            <Link href="/teams/vancouver-whitecaps" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-400 text-white px-3 py-1 rounded-full hover:bg-blue-500 transition">#VancouverWhitecapsFC</Link>
          </div>

          

          {/* Social Icons + Tickets CTA */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-3">
              <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
              <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
              <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
              <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
            </div>

            <div className="ml-auto">
              
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://i.ibb.co/Swc5SdWv/Untitled-design.png"
            alt="MLS playoff atmosphere"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Photo: US11
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            The MLS Playoffs have reached their decisive moment. The Eastern and Western Conference Finals take place tonight, with four teams still chasing a coveted spot in the 2025 MLS Cup Final. Two completely different stories, two completely different journeys — but one identical goal: a place on the biggest stage in American soccer.
          </p>

          <p>
            <strong>Inter Miami vs. New York City FC in the East.</strong><br />
            <strong>San Diego FC vs. Vancouver Whitecaps in the West.</strong>
          </p>

          <p>
            The favorites are clear, but MLS has never been a league that sticks to the script.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">EASTERN CONFERENCE FINAL — Inter Miami vs. New York City FC</h2>
          <p>
            Inter Miami enters tonight’s match as a heavy favorite, and for good reason. The club has spent years building toward moments like this, and now, after several close calls, they finally stand on the brink of their first-ever MLS Cup Final appearance.
          </p>
          <p>
            Miami’s attack has torn through defenses all season long, and playing at home gives them another strong edge. This is more than just a match — it’s a test of the project, the philosophy, and the investment that shaped this team.
          </p>
          <p>
            But across the pitch stands the team that has shocked the league: New York City FC — the biggest surprise of the 2025 MLS season. A roster that many had written off in February has grown into one of the league’s toughest units. NYCFC survived injuries, rebuilt lineups, and conquered difficult away matches to reach this point.
          </p>
          <p>
            They enter Miami as underdogs — and as a team with absolutely nothing to lose. The question is simple: Can the overlooked, underestimated NYCFC pull off one more upset in South Florida?
          </p>
           <p className='mb-6'>
                🎫 <a href="https://ticketnetwork.lusg.net/vPRgPd" target="_blank" className="text-yellow-600 hover:text-yellow-800 font-semibold">Click here to buy your ticket for this game</a>
        
                </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">WESTERN CONFERENCE FINAL — San Diego FC vs. Vancouver Whitecaps</h2>
          <p>
            If NYCFC is the surprise of the East, then San Diego FC is undoubtedly the miracle of the West. In their inaugural MLS season, San Diego didn’t behave like a newcomer — they played like contenders. Organized, disciplined, and remarkably balanced, the expansion club finished first in the Western Conference, sending a clear message: this project is ahead of schedule.
          </p>
          <p>
            San Diego is not a feel-good story; they’re a legitimate force. But tonight they face a veteran, battle-tested opponent: Vancouver Whitecaps, a team that quietly put together one of their best seasons in recent years.
          </p>
          <p>
            Vancouver already reached one major final this year — the CONCACAF Champions Cup — but fell short. Now, they have a second chance. A chance to prove they belong at the highest competitive level of North American soccer.
          </p>
          <p>
            San Diego is the favorite. Vancouver is the experienced challenger. It’s a perfect playoff matchup.
          </p>
           <p className='mb-6'>
                🎫 <a href="https://ticketnetwork.lusg.net/MA6YAJ" target="_blank" className="text-yellow-600 hover:text-yellow-800 font-semibold">Click here to buy your ticket for this game</a>
        
                </p>

          <h3 className="text-xl font-semibold mt-6">Four Big Stories, One Big Stage</h3>
          <p>
            MLS has once again delivered a postseason filled with unpredictability, breakthroughs, and unforgettable arcs: Inter Miami chasing long-awaited fulfillment of their ambition; NYCFC trying to shock the league one more time; San Diego FC attempting to make history in their very first season; Vancouver Whitecaps seeking redemption after a painful continental final loss.
          </p>

          <p>
            By the end of the night, only two teams will remain. Tomorrow, the conversation will shift entirely to them — the finalists of the 2025 MLS Cup.
          </p>
        </section>


        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: November 29, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>

          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
            
          </div>
        </footer>
      </div>
    </article>
  );
}
