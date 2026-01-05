'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

function TwitterEmbed({ tweetUrl }) {
  const ref = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(ref.current);
      } else {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [tweetUrl]);

  return (
    <div ref={ref} className="flex justify-center my-8">
      <blockquote className="twitter-tweet">
        <a href={tweetUrl}></a>
      </blockquote>
    </div>
  );
}

export default function VancouverLafcFinal() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Vancouver Whitecaps Stun LAFC in Dramatic Penalty Shootout')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Vancouver Whitecaps Stun LAFC in Dramatic Penalty Shootout — Historic Playoff Thriller at BC Place
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-22">November 22, 2025</time>
          </div>

          {/* Social Icons */}
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
            src="https://assets.goal.com/images/v3/getty-2248017867/crop/MM5DEOJRGI5DCNRTHA5G433XMU5DCMRWGM5DENJR/GettyImages-2248017867.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Vancouver Whitecaps vs LAFC USL Championship Final"
            width={1200}
            height={700}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Rich Lam 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            Vancouver Whitecaps pulled off a sensational upset at <strong>BC Place Stadium</strong>, defeating LAFC in the 2025 MLS Western Conference Semifinals after an intense penalty shootout. After 120 minutes of tension-filled football, the Hounds triumphed 4–3 on penalties, sending their fans into euphoria and proving they are a team built for the big moments.
          </p>
          <p>
            From the opening whistle, the match was fast-paced, physical, and high-stakes. Vancouver took the lead in the 39th minute through <strong>Emmanuel Sabbi</strong>, and <strong>Mathías Laborda</strong> doubled the advantage just before halftime, igniting the crowd. But LAFC refused to back down: <strong>Son Heung‑Min</strong> scored twice, including a stunning stoppage-time free kick in the 95th minute, leveling the game and forcing extra time and ultimately penalties.
          </p>

          <TwitterEmbed tweetUrl="https://x.com/MLS/status/1992453151018963302?s=20" />

          <p>
            In the shootout, Vancouver displayed remarkable composure, while LAFC faltered. Laborda netted the decisive penalty, and goalkeeper <strong>Eric Dick</strong> became the hero of the night, making crucial saves that kept his team in contention.
          </p>
          <p>
            Despite LAFC controlling possession and creating more chances — 25 shots to Vancouver’s 9 and 15 corners to 5 — Vancouver’s defensive organization and clutch performances carried the day. The result marks a historic night for Vancouver Whitecaps and a major statement that they are ready to compete at the highest level in MLS.
          </p>
        </section>

        {/* YouTube Video */}
        <section className="my-8">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">Match Highlights</h2>
  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-md">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/oP7py2j8zps"
      title="Vancouver vs LAFC Highlights"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: November 22, 2025</p>
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
