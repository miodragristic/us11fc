'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLS2025PlayoffsBlog() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS 2025: Qualified Teams for the Audi MLS Cup Playoffs')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS 2025: Qualified Teams for the Audi MLS Cup Playoffs
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-10-06">October 6, 2025</time>
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
            src="https://assets.goal.com/images/v3/getty-2227050537/crop/MM5DGMZSHA5DCOBXGI5G433XMU5DEMJYHIZDEMY=/GettyImages-2227050537.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="MLS 2025 Playoffs"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Harry How | Credit: Getty Images | Source: MLSsoccer.com, Wikipedia, OurSportsCentral
          </figcaption>
        </figure>

        {/* CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>
            As the <strong>2025 Major League Soccer regular season</strong> nears its end, the race
            for the <strong>Audi MLS Cup Playoffs</strong> has reached a thrilling conclusion.
            With <strong>Decision Day 2025</strong> set for October 18, both the Eastern and
            Western Conferences have nearly finalized their playoff brackets. Here’s a full list
            of qualified and eliminated teams so far — based on official updates from MLS sources.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            📊 Playoff Format Overview
          </h2>
          <p>
            A total of <strong>18 teams</strong> (9 from each conference) will qualify for the{' '}
            <strong>2025 Audi MLS Cup Playoffs</strong>. The top seven in each conference advance
            directly to the first round (Best-of-3 series), while teams ranked 8th and 9th will
            face off in a <strong>single-elimination Wild Card match</strong> on October 22.  
            Winners will join the first round against the top seeds.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            🏆 Eastern Conference – All 9 Spots Clinched
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Philadelphia Union</strong> – Clinched August 30, 2025 (Supporters’ Shield winners, 66 pts).</li>
            <li><strong>FC Cincinnati</strong> – Clinched September 13, 2025 (62 pts).</li>
            <li><strong>Inter Miami CF</strong> – Clinched September 24, 2025 (59 pts).</li>
            <li><strong>Charlotte FC</strong> – Clinched September 13, 2025.</li>
            <li><strong>New York City FC</strong> – Clinched September 20, 2025.</li>
            <li><strong>Columbus Crew</strong> – Clinched September 27, 2025.</li>
            <li><strong>Nashville SC</strong> – Clinched September 27, 2025 (3–1 vs Houston).</li>
            <li><strong>Orlando City SC</strong> – Clinched September 27, 2025.</li>
            <li><strong>Chicago Fire FC</strong> – Clinched September 30, 2025.</li>
          </ul>
          <p className="italic text-gray-700">
            Note: New York Red Bulls remain mathematically alive but trail Chicago Fire FC by five
            points with one fewer game in hand.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            🌄 Western Conference – 7 of 9 Spots Confirmed
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>San Diego FC</strong> – Clinched August 23, 2025 (historic debut season).</li>
            <li><strong>Minnesota United FC</strong> – Clinched August 30, 2025.</li>
            <li><strong>Vancouver Whitecaps FC</strong> – Clinched September 13, 2025 (top of the West).</li>
            <li><strong>Los Angeles FC (LAFC)</strong> – Clinched September 20, 2025.</li>
            <li><strong>Seattle Sounders FC</strong> – Clinched September 27, 2025.</li>
            <li><strong>Austin FC</strong> – Clinched October 5, 2025 (44 pts, 2nd playoff berth).</li>
            <li><strong>Portland Timbers</strong> – Clinched October 5, 2025 (9th playoff in club history).</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            ❌ Eliminated Teams
          </h2>
          <p>
            <strong>Eastern Conference:</strong> New England Revolution, CF Montréal, D.C. United. <br />
            <strong>Western Conference:</strong> LA Galaxy (defending champions), Sporting Kansas City, St. Louis CITY SC.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            📅 Key Dates
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Decision Day:</strong> October 18, 2025 – final matches of the regular season.</li>
            <li><strong>Wild Card Round:</strong> October 22, 2025 – single elimination (8th vs 9th).</li>
            <li><strong>Round 1 (Best-of-3):</strong> October 24 – November 9, 2025.</li>
            <li><strong>MLS Cup Final:</strong> December 6, 2025 – hosted by the higher-seeded finalist.</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            🧠 Final Thoughts
          </h2>
          <p>
            The <strong>MLS 2025 Playoffs</strong> are shaping up to be one of the most competitive in
            league history. With debutants San Diego FC making waves and heavyweights like Inter Miami
            and LAFC eyeing the title, the upcoming postseason promises drama, goals, and unforgettable
            storylines.
          </p>
          <p>
            Stay tuned to <strong>US11</strong> for full <strong>Decision Day coverage</strong>, live
            results, and <strong>MLS Cup 2025 playoff brackets</strong> as the postseason begins.
          </p>
        </section>

        {/* FOOTER / TAGS */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: October 6, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="text-sm text-gray-600 text-center sm:text-right">
            <p>#MLS2025 #AudiMLSCup #DecisionDay #US11 #SoccerNews</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
