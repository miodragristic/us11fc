'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PulisicDerby() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("Christian Pulisic Delivers in the Derby: Why AC Milan’s American Star Is Becoming Their Go-To Leader")}`;
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
            Christian Pulisic Delivers in the Derby: Why AC Milan’s American Star Is Becoming Their Go-To Leader
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-24">November 24, 2025</time>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/usa-national-team" className="text-xs bg-blue-800 text-white px-3 py-1 rounded-full hover:bg-blue-900 transition">#USA</Link>
            <Link href="/teams/usa-national-team/pulisic" className="text-xs bg-black text-white px-3 py-1 rounded-full hover:opacity-90 transition">#ChristianPulisic</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          {/* Replace the src with a real image path or external URL */}
          <Image
            src="https://assets.goal.com/images/v3/getty-2248113240/crop/MM5DCNJQGQ5DQNBWHJXG653FHI2DIMJ2G4ZA====/GettyImages-2248113240.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Christian Pulisic celebrates derby goal"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Marco Luzzani 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            In the Derby della Madonnina, elegance rarely wins — character does. And Christian Pulisic delivered exactly the kind of character AC Milan needed to beat Inter in one of the most intense fixtures in world football.
          </p>

          <p>
            For Milan, who entered the match with just 36% possession, the plan was clear: survive Inter’s pressure, strike in transition, and trust your match-winners. When Pulisic is on the pitch, one moment is all you need. And one moment arrived.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">A decisive instinct that changed the derby</h2>
          <p>
            In the 54th minute, after Alexis Saelemaekers’ shot was pushed away by Yann Sommer, Pulisic reacted faster than every Inter defender inside the box. It wasn’t the flashiest goal of his career — but it was the kind of goal that defines derbies and shapes seasons.
          </p>

          <p>
            Only Pulisic saw the opportunity before it existed. Only he moved early enough to turn a broken play into a game-winner. That instinct, honed in Dortmund, refined at Chelsea, and now unleashed in Milan, is what separates stars from supporting pieces.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">What the stats can’t fully capture</h2>
          <p>
            A raw statistical sheet won’t show how much pressure Pulisic put on Inter’s back line. His dribbles, his ball carries, his ability to relieve pressure in moments where Milan were suffocating — these were sequences that stabilized the team when they needed it most.
          </p>

          <p>
            Even his yellow card reflects his engagement: Pulisic refused to play like someone fresh off an injury return. Instead, he played like a leader who understood the weight of the match.
          </p>

          <p>
            This was his first start after returning from injury, yet his energy, timing, and decision-making looked sharper than ever. By the time he was subbed off in the 78th minute, he had already done enough to define the entire derby.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">A win that means more than three points</h2>
          <p>
            The match finished 1–0 for AC Milan, but the scoreline doesn't tell the full story. Nor does it explain how important Pulisic has become to this squad.
          </p>

          <p>
            In a season filled with debates about his fitness, consistency, and long-term role, this performance was a direct answer. These are the matches where a club’s leaders reveal themselves — and Pulisic stepped straight into that role.
          </p>

          <p>
            At US11, where we track the progress of American players across Europe with a spotlight on impact, mentality, and tactical evolution, this derby stands out. It wasn’t just a goal. It was a statement from one of the USMNT’s biggest stars on one of world football’s biggest stages.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">The takeaway</h2>
          <p>
            When Milan need a decisive moment, a spark, a leader — they now know exactly where to look. Christian Pulisic has become that guy.
          </p>
        </section>

        {/* MERCH SECTION */}
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
            <p>Published: November 24, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>

          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
            <Link href="/teams/usa-national-team/pulisic" className="text-sm text-blue-800 hover:text-blue-900 ml-4">#Pulisic</Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
