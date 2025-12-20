'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTPrepares2026() {
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
const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT Prepares for the World Cup: European Giants Set to Arrive for High-Profile Friendlies')}`;
const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

return ( <article className="w-full min-h-screen bg-white text-[#020617]"> <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">


    {/* HEADER */}
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
        USMNT Prepares for the World Cup: European Giants Set to Arrive for High-Profile Friendlies
      </h1>

      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
        <span>By Mio Ristic</span>
        <span>•</span>
        <time dateTime="2026-03-01">December 2, 2025</time>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <Link href="/teams/usa-national-team" className="text-xs bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition">
          #USMNT
        </Link>
        
      </div>

      {/* SHARE BUTTONS */}
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
        src="https://assets.goal.com/images/v3/getty-2234693152/crop/MM5DGMRQGA5DCOBQGA5G433XMU5DGNRQHI2DK===/GettyImages-2234693152.jpg?auto=webp&format=pjpg&width=1920&quality=60"
        alt="USMNT World Cup 2026 Preparations"
        width={1018}
        height={420}
        className="w-full h-[420px] object-cover object-center"
        priority
      />
      <figcaption className="text-xs text-gray-400 px-3 py-2">
        Creator: Koji Watanabe 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
      </figcaption>
    </figure>

    {/* ARTICLE CONTENT */}
    <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
      <p>
        As the 2026 World Cup approaches, the <strong>U.S. Men’s National Team</strong> enters a preparation cycle unlike almost anything in its modern history. After respectable showings against Paraguay and Uruguay — two matches that demonstrated the team’s ability to handle the intensity and unpredictability of South American opponents — head coach Mauricio Pochettino has asked for something very different.
      </p>

      <p>He asked for tougher challenges. The federation delivered.</p>

      <p>
        Belgium, Portugal and Germany are set to travel to the United States in spring and early summer of 2026, forming one of the most ambitious pre-World Cup friendly windows USMNT has undertaken in decades.
      </p>

      <p>
        These are not just European heavyweights rich with tradition — they are three national teams whose playing identities, tactical tendencies and structural profiles differ sharply. Belgium, transitioning into a new era but still defined by technical ambition. Portugal, fluid and dynamic, capable of shifting tempos instantly. And Germany, the long-standing tactical barometer of European football, disciplined, structured and unforgiving.
      </p>

      <p>
        For a U.S. side aiming to make a meaningful impact on home soil, these tests are exactly the kind that reveal truths — both encouraging and uncomfortable.
      </p>

      <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
        Confirmed Pre-World Cup Friendlies
      </h2>
      <ul className="list-disc pl-5">
        <li>March 28, 2026 — Belgium<br/>Mercedes-Benz Stadium, Atlanta</li>
        <li>March 31, 2026 — Portugal<br/>Mercedes-Benz Stadium, Atlanta</li>
        <li>May 31, 2026 — Opponent TBA<br/>Bank of America Stadium, Charlotte<br/>Send-off / warm-up match</li>
        <li>June 6, 2026 — Germany<br/>Soldier Field, Chicago<br/>Official pre-World Cup send-off</li>
      </ul>

      <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
        A Spectacle Before the Spectacle
      </h2>
      <p>
        For U.S. fans, these matchups form an ideal lead-in to what is set to be the most significant World Cup in the history of American sports. If the World Cup itself is the spectacle, then this spring-to-summer preparation period is its prologue — a spectacle before the spectacle — a rare chance to see where the USMNT stands against some of the strongest, most stylistically diverse teams in world football.
      </p>

      <p>
        For Pochettino, the term “friendly” hardly applies. These aren’t casual exhibitions; they are controlled experiments — opportunities to push the squad out of its comfort zone, stress-test its tactical versatility and clarify decisions on formation, lineup rotation, and ultimately the final World Cup roster.
      </p>
    </section>

     {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: December 2, 2025</p>
            <p>Author: Mio Ristic</p>
          </div>
          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
            <Link href="/teams/usa-national-team" className="text-sm text-red-700 hover:text-red-800 ml-4">#USMNT</Link>
          </div>
        </footer>

  </div>
</article>


);
}
