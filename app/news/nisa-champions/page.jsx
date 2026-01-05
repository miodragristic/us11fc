'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LAForceNISABlog() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('LA Force Crowned NISA Pro Cup Champions 2025')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            LA Force Crowned NISA Pro Cup Champions 2025
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-10-21">October 21, 2025</time>
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
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            NISA Logo | Credit: Wikimedia Commons
          </figcaption>
        </figure>

        {/* CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <h2 className="text-2xl font-semibold mt-6 mb-3">Preface</h2>
          <p>
            Unfortunately, no one from the US11 editorial team was present at the National Independent Soccer Association (NISA) final. The match received very little media coverage, so this article is based solely on the official Instagram posts shared by the clubs.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">The 2025 NISA Pro Cup Final</h2>
          <p>🏟️ Michigan Stars Sports Center</p>
          <p>📅 October 21, 2025</p>
          <p>Los Angeles Force defeated Capo FC 4–1 after extra time to win the 2025 NISA Pro Cup.</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Scorers:</h3>
          <ul className="list-disc list-inside">
            <li>Michael Salazar (73’)</li>
            <li>Moreno (86’)</li>
            <li>Joel Quist (96’, 100’)</li>
            <li>Bryan Ortega (120’)</li>
          </ul>

          <p>
            LA Force opened the scoring in the 73rd minute through Salazar, but Capo FC equalized late in the game. In extra time, LA Force displayed their quality and depth — Quist scored twice and Ortega sealed the victory in the 120th minute.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Why This Title Matters for LA Force</h2>
          <p>
            This trophy represents a significant moment in LA Force’s history. After several seasons of ups and downs in NISA, the team showed consistency and resilience when it mattered most. Their performance in extra time highlighted tactical discipline and fitness, with Joel Quist emerging as the hero of the night.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">NISA in Context</h2>
          <p>
            NISA may not receive the same level of attention as Major League Soccer or USL Championship, but it plays an important role in the growth of lower-division professional soccer in the U.S. Clubs like LA Force prove that strong, ambitious projects exist outside the top tiers, offering opportunities to both players and communities.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
          <p>
            The 2025 NISA final may not have made headlines, but for those who follow lower-division soccer, it’s a meaningful event. LA Force’s victory was convincing and well-deserved, while Capo FC gained valuable experience for the future.
          </p>
          <p>
            The match serves as a reminder that soccer’s growth in the U.S. isn’t limited to the spotlight of the biggest leagues — it’s thriving in the shadows, too.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: October 21, 2025</p>
            <p>By Mio Ristić</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
