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

export default function PittsburghTulsaFinalReport() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Pittsburgh Win USL Championship After Dramatic Penalty Shootout')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Pittsburgh Win USL Championship After Dramatic Penalty Shootout
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-22">November 22, 2025</time>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
          </div>
        </header>

        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://the18.com/sites/default/files/feature-images/GettyImages-1258549217.jpg"
            alt="USL Championship Final Pittsburgh vs Tulsa"
            width={1200}
            height={700}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Icon Sportswire 
| 
Credit: Icon Sportswire via Getty Images
Copyright: ©Icon Sportswire
          </figcaption>
        </figure>

        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            In a night defined by tension, physical battles, and razor-thin margins, Pittsburgh Riverhounds defeated FC Tulsa in a dramatic USL Championship Final, claiming the first league title in club history. After 120 minutes without a goal, the Hounds prevailed 5–3 on penalties, silencing a sold-out ONEOK Field.
          </p>

          <TwitterEmbed tweetUrl="https://x.com/USLChampionship/status/1990270045617103306" />

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Eric Dick Delivers a Championship-Winning Performance</h2>
          <p>
            Pittsburgh’s goalkeeper Eric Dick emerged as the hero of the night, producing several crucial saves that kept his team alive. His extra-time stop on Stefan Lukic, who looked certain to score, became the turning point that pushed the match to penalties.
          </p>
          <p>
            In the shootout, Dick denied Lukic once again, making the only save of the sequence. Pittsburgh converted all five penalties with Beto Ydrach burying the decisive kick.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Tulsa Created Chances but Failed to Break Through</h2>
          <p>
            FC Tulsa controlled large stretches of the match, hitting the crossbar and generating multiple threats from wide areas. Despite their pressure, they couldn’t find a way past Dick or Pittsburgh’s disciplined defensive block.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">A Physical, Tactical War</h2>
          <p>
            The final featured 45 fouls and relentless intensity, with neither side willing to concede space. Despite the lack of goals, the match delivered drama at every moment.
          </p>
          <p>
            Remarkably, Pittsburgh completed the entire postseason without conceding a single goal.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">A Historic Title for Pittsburgh</h2>
          <p>
            Head coach Rob Vincent praised the team’s resilience, calling the victory the culmination of long-term planning and belief. This championship marks a turning point for the club, solidifying their place among the league’s elite.
          </p>
        </section>

        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/kf36qwa6L-8"
    title="USL Final"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

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