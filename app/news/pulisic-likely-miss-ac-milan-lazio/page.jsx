'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PulisicInjury() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("Christian Pulisic Likely to Miss AC Milan vs. Lazio, Says Massimiliano Allegri")}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  const merch = [
    {
      id: 1,
      title: 'Christian Pulisic AC Milan Puma Youth 2025/26 Home Replica Player Jersey - Red',
      price: '$114.99',
      imageUrl: 'https://fanatics.frgimages.com/ac-milan/youth-puma-christian-pulisic-red-ac-milan-2025/26-home-replica-player-jersey_ss5_p-203151183+pv-1+u-gd6gv56qnom7lh628zvp+v-wsgoetxomogswedne8hs.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/zxEo7O'
    },
    {
      id: 2,
      title: 'Christian Pulisic AC Milan Puma 2024/25 Third Replica Player Jersey - Charcoal',
      price: '$90.99 with code: BRIGHT',
      imageUrl: 'https://fanatics.frgimages.com/ac-milan/mens-puma-christian-pulisic-charcoal-ac-milan-2024/25-third-replica-player-jersey_ss5_p-202127670+pv-1+u-e1pxpgcsxgzwuqmhb5vq+v-adkqo1ss91jr2s9ywpya.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/vPBJ7d'
    },
    {
      id: 3,
      title: 'Christian Pulisic AC Milan Puma 2025/26 Home Replica Long Sleeve Player Jersey - Red',
      price: '$149.99',
      imageUrl: 'https://fanatics.frgimages.com/ac-milan/mens-puma-christian-pulisic-red-ac-milan-2025/26-home-replica-long-sleeve-player-jersey_ss5_p-203151180+pv-1+u-muyhvghrilzzpyh3elvk+v-l04mvcu4wzobt3jqmnm3.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/K01MDn'
    }
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Christian Pulisic Likely to Miss AC Milan vs. Lazio, Says Massimiliano Allegri
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-28">November 28, 2025</time>
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
            src="https://assets.goal.com/images/v3/getty-2247574198/crop/MM5DENJXG45DCNBVGA5G433XMU5DAORRGM2A====/GettyImages-2247574198.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Christian Pulisic training with AC Milan"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Marco Luzzani | Credit: Getty Images | Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            AC Milan could be without star winger Christian Pulisic for their Serie A clash against Lazio this weekend, according to head coach Massimiliano Allegri.
          </p>

          <p>
            Allegri revealed at a pre-match press conference that the USMNT midfielder is “very likely” to miss the game due to muscle discomfort. Pulisic recently returned from a hamstring injury, and the coaching staff are prioritizing caution to prevent further setbacks.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Impact on AC Milan vs. Lazio</h2>
          <p>
            Pulisic has been one of AC Milan’s key attackers, contributing goals, assists, and creativity throughout the 2025-26 Serie A season. His potential absence could force Allegri to adjust the Milan attack, with options including Ruben Loftus-Cheek or a tactical reshuffle of the front three.
          </p>
          <p>
            Lazio will likely test Milan’s defensive structure, knowing that Pulisic’s pace and vision will be missing. This could change Milan’s approach in the Serie A title race, where every point matters.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Squad Management and Injury Updates</h2>
          <p>
            Allegri emphasized that Milan’s medical team is managing player workloads carefully, ensuring key performers like Pulisic are protected. Even without him, Milan remain confident in their squad depth and tactical flexibility.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Why It Matters</h2>
          <p>
            Pulisic’s potential absence is a major talking point for Serie A fans and USMNT followers. Milan will need to adapt their offensive strategy without their American star. The match could influence Serie A standings and Milan’s momentum in the final stretch of the season.
          </p>
        </section>

        {/* Merch Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-[#020617] mb-6 tracking-tight">Shop AC Milan Gear</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {merch.map((m) => (
              <div key={m.id} className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="w-full h-64 relative">
                  <Image src={m.imageUrl} alt={m.title} fill style={{ objectFit: 'cover' }} className="w-full h-full" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                  <p className="text-gray-600 mb-4">{m.price}</p>
                  <a href={m.link} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#020617] hover:border hover:border-[#020617] transition">
                    Buy Now <FaShoppingCart className="inline ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: November 28, 2025</p>
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
