'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function BeckhamHallOfFame() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    "MLS Hall of Fame: David Beckham — the player who changed football’s geography"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Hall of Fame: David Beckham — The Player Who Changed Football’s Geography
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-06">January 6, 2026</time>
          </div>

          

          {/* SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
  src="https://i.ibb.co/kVfLGrpP/david-beckham-soccer-field-22396823.webp"
  alt="David Beckham LA Galaxy"
  width={1200}
  height={500}
  className="w-full h-[420px] object-cover object-[10%_5%]"
  priority
/>

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Stephen Dunn | Credit: Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none space-y-8 leading-relaxed">

          <p>
            Some players change matches. Some change clubs. Very few change the direction of an entire league — or the global perception of football itself.
            David Beckham belongs firmly in the last category.
          </p>

          <p>
            Often reduced to a pop-culture icon or marketing phenomenon, Beckham was, in truth, a footballer of rare technical purity,
            tactical intelligence, and mental resilience. From Manchester to Madrid, and ultimately to Los Angeles,
            he didn’t just follow football’s biggest stages — he helped create new ones.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">A right foot that redefined precision</h2>
          <p>
            At his core, Beckham was an elite technician. His right foot remains one of the most reliable and devastating weapons the game has ever seen.
            Curling free-kicks, early crosses, and inch-perfect diagonals allowed him to dictate games without dominating the ball.
          </p>

          <p>
            He wasn’t explosive or fast, nor a natural dribbler. Instead, Beckham thrived on timing, awareness, and execution.
            Under pressure, he delivered clarity — when others rushed, he measured.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">The wide playmaker before the term existed</h2>
          <p>
            Long before football became obsessed with hybrid roles and positional labels, Beckham embodied the concept of the wide playmaker.
            Operating from the right flank, he controlled rhythm, stretched defensive lines, and transformed structure into opportunity.
          </p>

          <p>
            His tactical discipline was just as important as his creativity. Beckham worked relentlessly without the ball,
            protected his full-back, and earned the complete trust of every manager he played under.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Pressure, redemption, and leadership</h2>
          <p>
            The red card against Argentina at the 1998 World Cup turned Beckham into a national scapegoat overnight.
            What followed defined his career — resilience, professionalism, and redemption.
          </p>

          <p>
            The iconic free-kick against Greece in 2001, sending England to the World Cup, remains one of football’s most powerful moments
            of leadership under pressure. Beckham didn’t hide — he responded.
          </p>

          

          <h2 className="text-2xl font-bold mt-6 mb-2">LA Galaxy — the moment MLS grew up</h2>
          <p>
            When David Beckham signed for LA Galaxy in 2007, it was not merely a transfer. It was a statement.
            MLS was still searching for global credibility, and Beckham arrived carrying expectation, scrutiny, and responsibility.
          </p>

          <p>
            He legitimized the league instantly. The Designated Player Rule reshaped MLS forever,
            while Beckham delivered on the pitch — adapting his game, leading by example,
            and winning MLS Cups in 2011 and 2012.
          </p>

          <p>
            Beckham wasn’t in America for comfort or celebrity. He was there to compete, to win,
            and to raise standards that continue to define the league today.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">A legacy beyond the pitch</h2>
          <p>
            Beckham’s impact didn’t end at retirement. As an owner with Inter Miami,
            he completed the arc — from pioneer to architect.
          </p>

          <p>
            In European football, David Beckham is a champion. In global football culture, an icon.
            And in MLS history, he is a turning point.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: January 6, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <div className="flex gap-2">
            <Link href="/blog/mls-hall-of-fame/" className="text-sm text-gray-500 hover:text-gray-800">Hall of Fame</Link>
             
          </div>
        </footer>

      </div>
    </article>
  );
}
