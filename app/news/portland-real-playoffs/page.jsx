'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PortlandRSLBlog() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
    }
    alert('✅ Link copied to clipboard!');
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Portland Timbers & Felipe Mora Get Groove Back in Wild Card Win | US11 Blog')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  const jerseys = [
    {
      id: 1,
      title: "Men's Portland Timbers Diego Chara adidas Green 2025 Forever Green & Gold Authentic Player Jersey",
      img: 'https://images.footballfanatics.com/portland-timbers/mens-adidas-diego-chara-green-portland-timbers-2025-forever-green-and-gold-authentic-player-jersey_ss5_p-202842192+pv-1+u-i8yshgjotfjazarrhqpp+v-gmvssskt461hnuuqivk7.jpg?_hv=2&w=1018',
      price: '$194.99',
      link: 'https://mlsstore.i8h2.net/nXYz36'
    },
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Portland Timbers & Felipe Mora Get Groove Back in Wild Card Win
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-10-23">October 23, 2025</time>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link
              href="/teams/portland-timbers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition"
            >
              #PortlandTimbers
            </Link>
            <Link
              href="/teams/real-salt-lake"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-yellow-500 text-white px-3 py-1 rounded-full hover:bg-yellow-600 transition"
            >
              #RealSaltLake
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://cloudfront-us-east-1.images.arcpublishing.com/prisachile/IDRGQPSWNJAULE3CHLPZVD3FGM.jpg"
            alt="Felipe Mora celebrates after scoring for Portland Timbers"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Soobum Im | Credit: Getty Images | Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>
            After a lopsided defeat at home against San Diego FC on Decision Day, the Portland Timbers entered their Audi 2025 MLS Cup Playoffs campaign with their backs against the wall.
            They responded emphatically, taking a 3–1 win over Real Salt Lake in Wednesday’s Western Conference Wild Card match at Providence Park — their first playoff victory since 2021.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Mora Gets Back on Track</h2>
          <p>
            Felipe Mora, who scored Portland's last playoff goal back in 2021, delivered again — this time with a composed first-half brace to put the Timbers firmly in control.
            The Chilean striker recently became a father, and his manager Phil Neville praised his resilience and timing.
          </p>

          <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-700">
            “I’m so pleased for Pipe Mora. He’s been through a lot — and when he starts scoring, he just keeps going,” Neville said post-match.
          </blockquote>

          <p>
            The win snapped a frustrating five-match winless streak that had plagued Portland at the end of the regular season (0W-3L-2D). With the playoffs offering a clean slate, the Timbers now carry momentum into a tough Round One matchup against top-seeded San Diego FC.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Eyes on an Upset</h2>
          <p>
            Defender Kamal Miller sealed the win with a late goal, ending the night 3–1 and restoring belief throughout the squad. “If we’d played like we did tonight all season, we’d be a top-four team,” Miller said.
          </p>

          <p>
            Head coach Phil Neville echoed that sentiment, emphasizing his trust in the team: “I’ve got a group of players I trust with my life. That’s a brilliant place to be as a manager.”
          </p>
        </section>

        {/* SCORERS SECTION */}
        <section className="bg-gray-50 p-6 rounded-2xl shadow-inner mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#020617]">⚽ Goal Scorers</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Felipe Mora</strong> — 16’, 33’ (Portland Timbers)</li>
            <li><strong>Kamal Miller</strong> — 78’ (Portland Timbers)</li>
            <li><strong>Real Salt Lake</strong> — 54’ (own goal or unlisted)</li>
          </ul>
        </section>

        {/* VIDEO SECTION */}
        <div className="mt-10 mb-12 aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/7XnnB4vax64"
            title="Portland Timbers vs Real Salt Lake - Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* JERSEYS / SHOP SECTION */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-[#020617] mb-6 tracking-tight">Shop Portland Timbers Gear</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {jerseys.map((j) => (
              <div key={j.id} className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="w-full h-64 relative">
                  <Image
                    src={j.img}
                    alt={j.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{j.title}</h3>
                  <p className="text-gray-600 mb-4">{j.price}</p>
                  <a
                    href={j.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-[#006400] text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#020617] hover:border hover:border-[#020617] transition"
                  >
                    Buy Now <FaShoppingCart className="inline ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: October 23, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
