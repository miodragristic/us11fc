'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LaLigaMiamiBlog() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('LaLiga’s American Dream: Why Miami Became the Center of Spanish Football')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            LaLiga’s American Dream: Why Miami Became the Center of Spanish Football
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-10-08">October 8, 2025</time>
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
            src="https://www.japantimes.co.jp/japantimes/uploads/images/2025/05/28/471879.JPG"
            alt="Barcelona vs Villarreal - Hard Rock Stadium, Miami"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Albert Gea | Credit: REUTERS
          </figcaption>
        </figure>

        {/* CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>
            Spanish football is about to make history. For the first time ever, <strong>a LaLiga match will be played outside Europe</strong> — as Barcelona prepare to face Villarreal on <strong>December 20 at Hard Rock Stadium in Miami</strong>. 
          </p>
          <p>
            What looks like a single fixture is actually a bold statement about the future of the sport — a test of globalization, commercial strategy, and competitive integrity.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Why Miami? The Strategic Case
          </h2>
          <p>
            LaLiga president <strong>Javier Tebas</strong> calls this a “historic step.” Miami was not chosen by chance — the city has a strong <em>Latino community</em>, a massive Barça following, and world-class stadium infrastructure capable of hosting global events.
          </p>
          <p>
            In many ways, Miami is a natural gateway into the U.S. sports market — a place where football’s passion meets commercial potential. The city bridges cultures and audiences in a way few others can.
          </p>

          <h3 className="text-2xl font-semibold text-[#111827] mt-8 mb-3">Market Access</h3>
          <p>
            The U.S. audience represents millions of viewers and thousands of potential new fans. For LaLiga and clubs like Barcelona, a single high-profile match in America opens doors to sponsorship deals, broadcast rights, and merchandise opportunities on a scale domestic venues can’t match.
          </p>

          <h3 className="text-2xl font-semibold text-[#111827] mt-8 mb-3">Event Infrastructure</h3>
          <p>
            Hard Rock Stadium — host to Super Bowls, major concerts, and even Formula 1 — offers logistics, visibility, and entertainment value that make this December fixture both practical and globally appealing.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            Business vs. Tradition: The Backlash
          </h2>
          <p>
            The decision hasn’t come without controversy. Spain’s players’ union (AFE) and several top players, including <strong>Frenkie de Jong</strong>, have publicly criticized the move, claiming it undermines the competition’s integrity and adds unfair travel burdens.
          </p>
          <blockquote className="border-l-4 pl-4 italic text-gray-700 my-6">
            “It’s not fair. We have to travel a lot, and it becomes an away match on neutral ground.” — Frenkie de Jong
          </blockquote>
          <p>
            Villarreal, originally set to host the game at Estadio de la Cerámica, will be compensated for lost home revenue — but that doesn’t erase the ethical question: is it fair for one club to lose its home advantage for commercial gain?
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            Regulatory and Political Hurdles
          </h2>
          <p>
            UEFA cautiously approved the move, as part of a growing trend that includes Serie A’s proposed fixture in Australia. Meanwhile, FIFA continues reviewing its global match regulations.
          </p>
          <p>
            In the U.S., the game has been approved by the national federation, but Concacaf’s final confirmation is still pending. Legal challenges could still arise — clubs or unions may escalate the issue to the Court of Arbitration for Sport (CAS).
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            Is This the Future of European Leagues?
          </h2>
          <p>
            If the Miami experiment succeeds, it could set a precedent for other European leagues. The Premier League and Serie A have long explored similar ideas — seeing them as new frontiers for growth and fan engagement.
          </p>

          {/* AFFILIATE PRODUCTS */}
          <section className="my-12">
            <h2 className="text-3xl font-bold text-[#020617] mb-6 tracking-tight">
              Shop Barcelona Gear
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Product 1 */}
              <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <Image
                  src="https://fanatics.frgimages.com/barcelona/mens-nike-lamine-yamal-blue-barcelona-2025/26-replica-player-jersey_ss5_p-203284529+pv-1+u-egcn4pkk9yugwdxafypr+v-9yopybyijyh7ysmfxoob.jpg?_hv=2&w=1018"
                  alt="Lamine Yamal Barcelona Nike 2025/26 Replica Player Jersey - Blue"
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Barcelona Home Jersey 2025/26</h3>
                  <p className="text-gray-600 mb-4">$129.99</p>
                  <a
                    href="https://fanatics.93n6tx.net/EEBJyQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-[blue] text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#020617] hover:border hover:border-[#020617] transition"
                  >
                    Buy Now
                  </a>
                </div>
              </div>

              {/* Product 2 */}
              <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <Image
                  src="https://fanatics.frgimages.com/barcelona/mens-nike-orange-barcelona-2025/26-third-replica-jersey_ss5_p-203294032+pv-1+u-1q7vtfkigkjnus9isua1+v-ngkwm1wjgiphgaladozs.jpg?_hv=2&w=1018"
                  alt="Barcelona Away Jersey 2025"
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Barcelona Nike 2025/26 Third Replica Jersey - Orange</h3>
                  <p className="text-gray-600 mb-4">$129.99</p>
                  <a
                    href="https://fanatics.93n6tx.net/MAOyB2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-[blue] text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#020617] hover:border hover:border-[#020617] transition"
                  >
                    Buy Now
                  </a>
                </div>
              </div>

              {/* Product 3 */}
              <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <Image
                  src="https://fanatics.frgimages.com/barcelona/mens-nike-yellow-barcelona-2022/23-fourth-vapor-match-authentic-jersey_pi5291000_altimages_ff_5291957-bd7d6888d74962cbc546alt1_full.jpg?_hv=2&w=1018"
                  alt="Barcelona Third Jersey 2025"
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Barcelona Nike 2022/23 Fourth Vapor Match Authentic Jersey - Yellow</h3>
                  <p className="text-gray-600 mb-4">$113.99</p>
                  <a
                    href="https://fanatics.93n6tx.net/Z6aBKg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-[blue] text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#020617] hover:border hover:border-[#020617] transition"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </section>

          <p>
            Yet, success will depend on more than revenue. Maintaining <strong>competitive fairness</strong> and <strong>player wellbeing</strong> will determine whether international fixtures become a sustainable evolution or a short-lived publicity stunt.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-12 mb-4 tracking-tight">
            Conclusion — Gateway or Breaking Point?
          </h2>
          <p>
            Barcelona vs Villarreal in Miami is more than just a football match. It’s a symbol — a test of how far the sport is willing to stretch its traditions in the name of progress.
          </p>
          <p>
            On one hand, it opens doors to new audiences and unprecedented growth. On the other, it raises questions about fairness, fatigue, and the essence of domestic competition.
          </p>
          <p>
            <strong>Miami may just be one city — but for LaLiga, it could mark a defining moment in football’s global evolution.</strong>
          </p>

          <hr className="my-10 border-gray-300" />

          <p className="text-gray-700 italic">
            What do you think — should domestic league games be played abroad? 
            Does the commercial upside justify changing the traditions of the game?
          </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: October 8, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
