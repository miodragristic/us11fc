'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSPlayoffsFormat() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS Playoffs Format: Is It Time for a Change?')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Playoffs Format: Is It Time for a Change?
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-10">November 10, 2025</time>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5c9a73454d87117017c01508/1686249453251-OXCODUQ3QUF79G4L38GW/525050.jpg"
            alt="MLS Playoffs Format Analysis"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: William Manning 
| 
Credit: William Manning
Copyright: © William Manning
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

          <section>
            <p>
              Major League Soccer (MLS) prides itself on being different — with a unique calendar, distinct rules, and a playoff system unlike any other in global football.
              But more and more fans, analysts, and even players are asking the same question: <strong>does the current MLS playoff format truly reward the best teams and deliver exciting competition, or has it become a chaotic compromise between American spectacle and football logic?</strong>
            </p>
          </section>

          <section>
            <h2>How the Current Format Works</h2>
            <p>Since 2023, MLS has adopted an expanded playoff system:</p>
            <ul>
              <li><strong>18 teams qualify</strong> for the postseason (9 from each conference).</li>
              <li>Teams ranked <strong>8th and 9th</strong> play a “wild card” match to enter the first round.</li>
              <li>The <strong>first round is a best-of-three series</strong>, with ties going straight to penalties.</li>
              <li>From the quarterfinals onward, the league switches to a <strong>single-elimination format</strong>, with the higher-seeded team hosting.</li>
            </ul>
            <p>The idea was to increase matches, revenue, and fan engagement. However, the effect is often the opposite.</p>
          </section>

          <section>
            <h2>Main Criticisms of the Format</h2>
            <h3>1. Regular season loses significance</h3>
            <p>When more than half the league qualifies, finishing first or sixth has minimal impact. Compared to European leagues, MLS can feel like a system that <strong>rewards mediocrity</strong>.</p>

            <h3>2. Best-of-three kills momentum</h3>
            <p>In football, a series of up to three matches often removes the tension of “do-or-die” games, elongates the calendar, and disrupts flow.</p>

            <h3>3. Long breaks between rounds</h3>
            <p>Some teams wait <strong>up to 20 days</strong> for their next opponent, breaking rhythm and creating uneven conditions.</p>

            <h3>4. Luck often outweighs quality</h3>
            <p>The system can lead to unexpected eliminations, creating drama but undermining sporting credibility.</p>
          </section>

          <section>
            <h2>Possible Solutions</h2>
            <ul>
              <li>Return to classic single-elimination matches, rewarding higher-seeded teams.</li>
              <li>Reduce playoff participants from 18 to 12, restoring regular season importance.</li>
              <li>Better calendar planning to maintain competitive rhythm.</li>
              <li>Provide advantages to higher-ranked teams, such as automatic byes or extra home matches.</li>
            </ul>
          </section>

          <section>
            <h2>Conclusion</h2>
            <p>MLS playoffs were designed as a spectacle, but increasingly they feel experimental. To be taken seriously as a competition, MLS must balance American entertainment with football logic, rewarding consistency and excellence rather than randomness.</p>
          </section>

        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: November 10, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>
        </footer>

      </div>
    </article>
  );
}
