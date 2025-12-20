'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function AppleTVMLSDeal() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Major League Soccer is coming to Apple TV starting in 2026')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Major League Soccer Will Stream on Apple TV Beginning in 2026
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
            src="https://assets.goal.com/images/v3/getty-2201986577/crop/MM5DEMRVGA5DCMRWGY5G433XMU5DAORRGE3Q====/GettyImages-2201986577.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Major League Soccer on Apple TV"
            width={1024}
            height={520}
            className="w-full h-[520px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Alika Jenner 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
<section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

  <p>
    Apple dropped a major announcement: Starting in 2026, every single Major League Soccer match will stream directly on Apple TV — with no additional subscription required. This marks the next era of Apple’s long-term partnership with MLS, giving fans worldwide a single platform to watch all league action without blackouts.
  </p>

  <h2 className="text-3xl font-bold !mt-10 !mb-4">
    MLS Becomes Fully Integrated Into Apple TV
  </h2>
  <p>
    Beginning with the 2026 season, fans will be able to watch every regular-season MLS match, the Leagues Cup, the MLS All-Star Game, Audi MLS Cup Playoffs, and additional competitions — all included inside a standard Apple TV subscription. The current standalone MLS Season Pass will officially end after the 2025 season.
  </p>

  <h3 className="text-2xl font-semibold !mt-8 !mb-3">
    A Global Streaming Destination for Soccer
  </h3>
  <p>
    Apple says the updated partnership will deliver MLS content to more than 100 countries, continuing the momentum built since the streaming agreement began. The platform will feature live matches, studio coverage, behind-the-scenes content, and on-demand programming — all without regional restrictions.
  </p>

  <blockquote className="border-l-4 pl-4 text-xl italic">
    “Every match, all in one place… it’s a win for fans everywhere.”
    — Eddy Cue, Apple SVP of Services
  </blockquote>

  <h2 className="text-3xl font-bold !mt-10 !mb-4">
    Why This Move Matters Ahead of the 2026 World Cup
  </h2>
  <p>
    North American soccer is entering a historic period. With the FIFA World Cup hosted across the U.S., Canada, and Mexico in 2026, fan interest and league visibility are surging. MLS attendance and viewership have been rising — helped by global stars like Lionel Messi and Son Heung-min joining the league.
  </p>

  <h3 className="text-2xl font-semibold !mt-8 !mb-3">
    Apple TV Becomes a True Sports Hub
  </h3>
  <p>
    With MLS joining Apple Originals, Friday Night Baseball, and Formula 1 coverage in the U.S., Apple continues positioning Apple TV as a premium sports and entertainment destination. Full-season ticket holders for MLS clubs in 2026 will also receive an Apple TV subscription included in their package.
  </p>

  <p>
    With this shift, Apple is not only simplifying access to MLS — they’re redefining how fans engage with soccer in the streaming era. The future of watching MLS is now clearer than ever: one app, one subscription, every match.
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
           
          </div>
        </footer>

      </div>
    </article>
  );
}
