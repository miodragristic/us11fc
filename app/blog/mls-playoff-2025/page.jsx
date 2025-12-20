'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSPlayoffsBlog() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Audi 2025 MLS Cup Playoffs: Wild Card & Round One Matchups Preview')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Audi 2025 MLS Cup Playoffs: Wild Card & Round One Matchups Preview
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristic</span>
            <span>•</span>
            <time dateTime="2025-10-19">October 20, 2025</time>
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
            src="https://www.365scores.com/news/wp-content/uploads/2024/10/GettyImages-2148556804-780x470.jpg"
            alt="MLS Cup Playoffs 2025"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Kyle Rivas 
| 
Credit: Getty Images
Copyright: 2024 Getty Images
          </figcaption>
        </figure>

        {/* CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>
            The Audi 2025 MLS Cup Playoffs are officially underway, with 18 teams qualifying after Decision Day — nine from the Eastern Conference and nine from the Western Conference. The journey to the MLS Cup on December 6 promises thrilling action, top-tier talent, and high-stakes rivalry matches.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Wild Card Showdowns – Wednesday, October 22
          </h2>
          <p>
            <strong>Eastern Conference:</strong> (8) Chicago Fire vs. (9) Orlando City | 8:30 PM ET, SeatGeek Stadium
          </p>
          <p>
            Chicago returns to the playoffs for the first time since 2017 under head coach Gregg Berhalter. Newcomer of the Year candidate Philip Zinckernagel leads the squad with 15 goals and 15 assists.
          </p>
          <p>
            Orlando City, winless in four, looks to spark momentum from Martín Ojeda, who tallied 16 goals and 15 assists this season.
          </p>

          <p>
            <strong>Western Conference:</strong> (8) Portland Timbers vs. (9) Real Salt Lake | 10:30 PM ET, Providence Park
          </p>
          <p>
            Portland plays their second consecutive Wild Card game, hoping David Da Costa and Kristoffer Velde can reverse a late-season skid. RSL clinched the final Wild Card spot with a 2-2 draw against St. Louis CITY SC. Star midfielder Diego Luna, a 2026 FIFA World Cup hopeful, leads the charge.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Round One – Best-of-3 Series
          </h2>

          <h3 className="text-2xl font-semibold text-[#111827] mt-8 mb-3">Eastern Conference</h3>
          <p>
            <strong>Philadelphia Union vs. Wild Card winner (Chicago/Orlando)</strong> – Philadelphia finished atop the league with 66 points and recently captured their second Supporters’ Shield. Tai Baribo leads the team with 16 goals, joined by All-Stars Kai Wagner and Jakob Glesnes.
          </p>
          <p>
            <strong>FC Cincinnati vs. Columbus Crew</strong> – The “Hell is Real” rivalry returns, with Cincinnati seeking revenge after the 2023 Eastern Conference Final loss. Brazilian playmaker Evander has 18 goals and 15 assists this season.
          </p>
          <p>
            <strong>Inter Miami CF vs. Nashville SC</strong> – Momentum is on Inter Miami’s side, winning six of their past eight games. Lionel Messi leads the Golden Boot race with 29 goals and 19 assists. Nashville features a potent duo, Sam Surridge and Hany Mukhtar, who combined for 40 goals this season.
          </p>
          <p>
            <strong>Charlotte FC vs. New York City FC</strong> – Charlotte boasts the league’s best home record but will be without star Wilfried Zaha in Game 1.
          </p>

          <h3 className="text-2xl font-semibold text-[#111827] mt-8 mb-3">Western Conference</h3>
          <p>
            <strong>San Diego FC vs. Wild Card winner (Portland/RSL)</strong> – San Diego, a debut season sensation, set expansion-team records with 63 points and 19 wins. Anders Dreyer (19g/19a) and Chucky Lozano lead the squad.
          </p>
          <p>
            <strong>Vancouver Whitecaps FC vs. FC Dallas</strong> – German superstar Thomas Müller has been key for Vancouver, who won the 2025 Canadian Championship and reached the Concacaf Champions Cup final. FC Dallas striker Petar Musa has 18 goals this season.
          </p>
          <p>
            <strong>LAFC vs. Austin FC</strong> – South Korean star Son Heung-Min and Golden Boot runner-up Denis Bouanga form a lethal duo for LAFC.
          </p>
          <p>
            <strong>Minnesota United FC vs. Seattle Sounders FC</strong> – Minnesota earned home-field advantage, backed by goalkeeper Dayne St. Clair and veteran Michael Boxall. Seattle’s roster includes Cristian Roldan, Obed Vargas, and DP attacker Albert Rusnák, all proven playoff performers.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            Conclusion
          </h2>
          <p>
            The 2025 MLS Cup Playoffs promise intense rivalries, superstar performances, and unforgettable moments. From Messi’s brilliance to emerging talents like Son Heung-Min and Thomas Müller, every series has game-changing potential.
          </p>

          <blockquote className="border-l-4 pl-4 italic text-gray-700 my-6">
            This playoff season is a must-watch for all soccer fans in the U.S., delivering top-tier action, thrilling matchups, and the drama only MLS Cup contention can provide.
          </blockquote>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: October 20, 2025</p>
            <p>Author: Mio Ristic</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
