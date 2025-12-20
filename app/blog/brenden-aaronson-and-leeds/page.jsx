'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function AaronsonArticle() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("Brenden Aaronson and Leeds United: Is It Time to Reevaluate His Role?")}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Brenden Aaronson and Leeds United: Is It Time to Reevaluate His Role?
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-29">November 29, 2025</time>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-3">
              <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
              <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
              <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
              <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10 cursor-pointer">
          <Link href="/blog/conference-finals">
            <Image
              src="https://assets.goal.com/images/v3/getty-2165145829/crop/MM5DEMZZGA5DCMZUGQ5G433XMU5DEOJYHIYTGMA=/GettyImages-2165145829.jpg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Brenden Aaronson at Leeds United"
              width={1200}
              height={500}
              className="w-full h-[420px] object-cover object-center"
              priority
            />
          </Link>
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Stu Forster 
| 
Credit: Getty Images
Copyright: 2024 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            Leeds United continues to face tough decisions regarding their starting lineup, with the latest example being Brenden Aaronson’s absence from the starting XI against Manchester City. The U.S. international has regularly featured in recent weeks, despite mixed performances in attack, raising the question: is his playing time fully justified?
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Effort vs. Impact</h2>
          <p>
            Manager Daniel Farke has defended Aaronson, highlighting his relentless work rate—covering around 13 kilometers per match and contributing defensively. While these statistics underscore Aaronson’s commitment and effort, the question remains how that work translates into tangible impact on results.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">The Manchester City Match</h2>
          <p>
            Aaronson came off the bench in the 90'+2' minute, immediately after A. Tanaka scored Manchester City’s third and final goal, sealing the 3-0 result. While his late entrance didn’t influence the outcome, it reflected Farke’s intention to keep Aaronson involved, even in a challenging fixture.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Fan Reactions and Theories</h2>
          <p>
            Supporters have expressed mixed opinions on this decision. Some see Aaronson’s omission as a tactical choice, while others suggest Farke may be balancing his squad and justifying Aaronson’s future starts. Regardless of the reason, it has sparked debate over how best to utilize the American midfielder at Leeds.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Statistics and Performance</h2>
          <p>
            In Leeds’ previous match against Aston Villa, Aaronson logged a 6.4 average rating, contributing seven defensive interventions but limited attacking output. These numbers highlight the need to balance his energy and work rate with tangible offensive contributions to maximize Leeds’ overall performance.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Conclusion</h2>
          <p>
            The discussion around Aaronson is not simply “for” or “against” him—it’s about how his minutes and role fit into the team’s broader strategy. Leeds must combine effort, technical ability, and team dynamics to optimize results. An objective assessment of Aaronson’s contributions can help the club make informed decisions while still recognizing the value he brings.
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
