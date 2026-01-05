'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTvsAustraliaBlog() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // fallback
      alert('Could not copy link — please copy manually.');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT 2–1 Australia — Wright brace, Pulisic returns, and a fiery Colorado atmosphere')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT 2–1 Australia: Wright’s Brace, Pulisic’s Return, and a Fiery Colorado Atmosphere
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-10-?">October 2025</time>
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
              <FaFacebookF size={18} />
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
              aria-label="Share on Twitter"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
              aria-label="Copy Link"
            >
              <FiCopy size={18} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/blt580bb7c6f26a8ef1/weah.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Packed stadium atmosphere during a USMNT match in Colorado"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
           Creator: John Dorton/USSF 
Copyright: 2025 John Dorton/ISI Photos/USSF
          </figcaption>
        </figure>

        {/* CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>
            The friendly between the <strong>United States men’s national team</strong> and <strong>Australia</strong> in Commerce City
            turned into far more than a casual exhibition. On the pitch — intensity. In the stands — pure passion.
            A packed stadium saw the hosts grind out a hard-fought <strong>2–1 victory</strong>, under the watch of Mauricio Pochettino.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            🔥 Colorado Brought the Energy
          </h2>
          <p>
            The atmosphere in Colorado felt closer to a European or Latin American derby than a typical U.S. friendly.
            Drums, chants and banners gave the night a charged, unforgettable vibe — a reminder of how soccer culture is evolving across the country.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            ⚽ Early Shock, Quick Response
          </h2>
          <p>
            Australia opened the scoring in the 19th minute — Jordan Bos finished clinically after a sharp throw-in and move into the box.
            The early strike only lit a fire under the home side. The USMNT raised the tempo, took control of possession phases,
            and began creating higher-quality chances.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            🇺🇸 Haji Wright: The Night’s Hero
          </h2>
          <p>
            <strong>Haji Wright</strong> stole the show with a composed equalizer in the 35th minute after a flowing team move.
            He then read a set-piece scenario perfectly early in the second half to volley home the winner — a brace that announced
            his readiness to be an important attacking option for this squad.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            🩺 Pulisic’s Return Matters
          </h2>
          <p>
            Christian Pulisic made his long-awaited comeback, and even with limited minutes his presence lifted the team and the crowd.
            Monitoring his fitness and minutes will be vital as the USMNT looks to build momentum into competitive fixtures.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            🧠 Tactical Discipline — A Message Sent
          </h2>
          <p>
            After some underwhelming results, Pochettino finally saw the reaction he wanted: calm, structure and adaptability after conceding early.
            The team showed maturity, effective pressing moments, and a willingness to control transitions — an encouraging sign for the coach’s project.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            📝 Final Thoughts
          </h2>
          <p>
            Those who attended saw more than a friendly — they saw a team beginning to define itself.
            A brace hero, a returning leader, and a crowd that made the difference: the USMNT is evolving, and crucially, winning.
            If Pochettino can keep building this identity, American soccer could be in for a genuinely exciting period.
          </p>

          <hr className="my-10 border-gray-300" />

          
        </section>

        {/* FOOTER / TAGS */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: October 2025</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="text-sm text-gray-600 text-center sm:text-right">
            <p>#USMNT #HajiWright #Pulisic #Pochettino #USAvAUS</p>
          </div>
        </footer>

        {/* TOAST */}
        {copied && (
          <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
            ✅ Link copied to clipboard!
          </div>
        )}
      </div>
    </article>
  );
}
