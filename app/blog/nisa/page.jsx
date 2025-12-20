'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function NISABlog() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('✅ Link copied to clipboard!');
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Capo FC and Los Angeles Force Secure Spots in NISA Pro Cup Final')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Capo FC and Los Angeles Force Secure Spots in NISA Pro Cup Final
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristic</span>
            <span>•</span>
            <time dateTime="2025-10-19">October 19, 2025</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
              aria-label="Share on Facebook"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
              aria-label="Share on Twitter"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
              aria-label="Copy Link"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/NISA_logo_black_2022.png"
            alt="NISA Logo"
            width={1000}
            height={1000}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            NISA Logo
          </figcaption>
        </figure>

        {/* CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>
            The 2025 NISA Pro Cup semifinals showcased the tactical discipline and experience of both Capo FC and Los Angeles Force, who secured their spots in the championship final.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Los Angeles Force 2 – Northern Colorado Hailstorm 0
          </h2>
          <p>
            Los Angeles Force dominated possession and controlled the tempo of the game. Enzo Mauriz converted an early second-half penalty, and Joe Montes de Oca added an insurance goal to secure the win. Northern Colorado Hailstorm managed just one shot on goal and struggled to keep up with Los Angeles Force’s second-half substitutions.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Capo FC 2 – Peak XI FC 0
          </h2>
          <p>
            Capo FC showcased their strength in set-piece situations. Julian Svoboda scored from a free kick, marking the team’s fourth goal from a restart in the tournament. Dakota Hatzenbeller added a late goal in the final five minutes to seal the 2-0 victory, advancing Capo FC to the NISA Pro Cup Championship Final against a longtime rival. Peak XI FC, the tournament’s Cinderella story, ends their campaign with a second 2-0 loss.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            Conclusion
          </h2>
          <p>
            The NISA Pro Cup final promises an exciting showdown between Los Angeles Force and Capo FC, two teams demonstrating skill, discipline, and the ability to dominate crucial moments. Experience is clearly a deciding factor, but fans can expect a thrilling battle for the championship.
          </p>

          <p>
            This final will be one to watch for soccer fans across the U.S., offering top-level action, intense rivalry, and a showcase of the best in NISA professional soccer.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: October 19, 2025</p>
            <p>Author: Mio Ristic</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
