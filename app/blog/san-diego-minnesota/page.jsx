'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function SanDiegoMinnesota() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("San Diego FC Edges Minnesota in a Fierce 1–0 Battle to Reach Western Conference Final")}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            San Diego FC Edges Minnesota in a Fierce 1–0 Battle to Reach Western Conference Final in Their Debut MLS Season
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-26">November 26, 2025</time>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/san-diego" className="text-xs bg-blue-900 text-white px-3 py-1 rounded-full hover:bg-blue-950 transition">#SanDiegoFC</Link>
            <Link href="/teams/minnesota-united" className="text-xs bg-black text-white px-3 py-1 rounded-full hover:opacity-90 transition">#MinnesotaUnited</Link>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2216643330/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216643330.jpg?width=1400&upscale=true"
            alt="San Diego FC celebrates win"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Francisco Vega 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* Article */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            In a match defined by intensity, physical duels, and very little margin for error, San Diego FC defeated Minnesota United 1–0 in one of the toughest playoff battles of the season. The game was as tight as it was aggressive — a true postseason slugfest — with both teams pressing high, closing space quickly, and refusing to give away anything easily inside their own penalty area.
          </p>

          <p>
            From the opening whistle, the match carried that familiar playoff tension. Hard tackles, crowded midfield battles, and constant pressure on the ball left little room for clean buildup. Chances did come on both sides: Minnesota forced San Diego into several last-ditch defensive actions, while San Diego carved out fast transitions but struggled to find a final pass.
          </p>

          <p>
            Despite the volume of half-chances and shots from distance, both defenses stood tall. San Diego’s back line, led by the composed Pablo Sisniega and a perfectly timed goal-line clearance from Ian Pilcher, refused to bend. Minnesota matched that intensity with well-organized blocks in their own box. For over 70 minutes, the scoreline stayed frozen because both teams defended like a season depended on every tackle — because it did.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Dreyer’s Thunderbolt Changes Everything</h2>
          <p>
            It took one moment of pure quality to crack the match open.
          </p>

          <p>
            In the 72nd minute, after a quick attacking sequence on the right side, the ball was pushed backward into the path of Anders Dreyer — and the Danish winger unleashed a strike “as if fired from a cannon.”
          </p>

          <p>
            A rocket to the near post.<br />
            Unsavable.<br />
            Unpredictable.<br />
            And exactly what a game like this needed.
          </p>

          <p>
            Dreyer has been one of the league’s best newcomers this season, and this goal only added to his growing reputation as a clutch performer.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Statistically Speaking</h2>
          <p>While the match was narrow on the scoreboard, the underlying numbers show how competitive it truly was:</p>
          <ul className="list-disc list-inside">
            <li>San Diego xG: <strong>1.21</strong></li>
            <li>Minnesota xG: <strong>0.98</strong></li>
            <li>Total Shots: San Diego 13 – Minnesota 11</li>
            <li>Duels Won: Nearly even, with San Diego slightly ahead in ground duels</li>
            <li>Key Saves: Sisniega kept a clean sheet with 3 decisive saves</li>
          </ul>

          <p>
            The stats reflect the eye test — not a one-sided match, but rather two evenly matched sides separated by one moment of brilliance.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">A Historic Breakthrough for an Expansion Team</h2>
          <p>
            With this win, San Diego FC reaches the Western Conference Final in their first-ever MLS season — a remarkable achievement for a club still writing its opening chapter.
          </p>

          <p>
            Snapdragon Stadium erupted at full time, not just because of the victory, but because of what it represents: belief, ambition, and immediate relevance in a league where expansion teams rarely find success this quickly.
          </p>

          <p>
            Now, San Diego turns its attention to the next challenge: the always dangerous, unpredictable, and tactically disciplined Vancouver Whitecaps — a team no one enjoys facing in knockout football.
          </p>

          <p>
            San Diego’s story continues, and their first chapter is already unforgettable.
          </p>
        </section>

        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: November 26, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>

          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
            <Link href="/teams/san-diego" className="text-sm text-blue-900 hover:text-blue-950 ml-4">#SanDiegoFC</Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
