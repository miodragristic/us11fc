'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSFinal2025() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS Cup Final 2025: Inter Miami FC vs Vancouver Whitecaps Preview')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Finally, Countdown: Inter Miami FC vs Vancouver Whitecaps – Everything You Need to Know for the MLS Cup Final
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristic</span>
            <span>•</span>
            <time dateTime="2025-12-06">December 6, 2025</time>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/inter-miami" className="text-xs bg-pink-600 text-white px-3 py-1 rounded-full hover:bg-pink-700 transition">
              #InterMiamiCF
            </Link>
            <Link href="/teams/vancouver-whitecaps" className="text-xs bg-blue-400 text-white px-3 py-1 rounded-full hover:bg-blue-500 transition">
              #VancouverWhitecapsFC
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
            src="https://i.ibb.co/NdY7jggd/Dynamic-Soccer-Stars-in-Action.png"
            alt="Inter Miami FC vs Vancouver Whitecaps MLS Cup Final"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Credit: US11
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>
            The stage is set for one of the most anticipated matches in MLS history: <strong>Inter Miami FC</strong> faces off against the <strong>Vancouver Whitecaps</strong> in the 2025 MLS Cup Final. Fans from both sides are eagerly counting down the days to Saturday, December 6, 2025, when this historic showdown takes place.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Match Details & Local Kickoff Times
          </h2>
          <p><strong>Date:</strong> Saturday, December 6, 2025</p>
          <p><strong>Kickoff Time:</strong> 2:30 PM Eastern Time (ET) / 11:30 AM Pacific Time (PT)</p>
          <p><strong>Other US Time Zones:</strong></p>
          <ul className="list-disc pl-5">
            <li>Central Time (CT): 1:30 PM</li>
            <li>Mountain Time (MT): 12:30 PM</li>
            <li>Alaska Time (AKT): 10:30 AM</li>
            <li>Hawaii-Aleutian Time (HST): 8:30 AM</li>
          </ul>

          <p>
            🎟️ You can purchase tickets for the MLS Cup Final <a href="https://ticketnetwork.lusg.net/7ajqRd" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 font-semibold">here</a>.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Inter Miami – Must Win on Home Turf
          </h2>
          <p>
            David Beckham and his squad are looking to secure the title he envisioned when founding the club. With Lionel Messi leading the attack and veterans like Busquets and Jordi Alba aiming for one last championship before retirement, this is a must-win scenario. Home advantage and fan support make it even more crucial.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Vancouver – The Underdog Story
          </h2>
          <p>
            The Vancouver Whitecaps have defied expectations all season, reaching the MLS Cup Final after a Concacaf triumph. Thomas Muller has been a pivotal addition, and despite the club recently being on sale, Vancouver is set for a historic moment. Few expected this underdog to go so far, and fans worldwide are now watching closely.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Gear Up for the Big Day
          </h2>
          <p>
            Don’t miss the chance to show your support. Equip yourself in the colors of your favorite club: <a href="https://mlsstore.i8h2.net/559EW3" target="_blank" className="text-pink-600 hover:text-pink-700 font-semibold">Inter Miami FC Gear</a> | <a href="https://mlsstore.i8h2.net/zxLGAW" target="_blank" className="text-blue-500 hover:text-blue-600 font-semibold">Vancouver Whitecaps Gear</a>.
          </p>

          <p>
            Fans unable to attend can watch the game live and experience all the excitement from home. This is the moment we've all been waiting for!
          </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: December 1, 2025</p>
            <p>Author: Mio Ristic</p>
          </div>
        </footer>

      </div>
    </article>
  );
}
