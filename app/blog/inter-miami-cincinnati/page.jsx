'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function InterMiamiCincinnati() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("Inter Miami Dominates Without Suárez: Messi Leads, Silvetti and Allende Shine in Historic Win vs Cincinnati")}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

    const jerseys = [
     { id: 1, title: "Men's Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-authentic-player-jersey_ss5_p-202860048+u-90c1ap4gywaxy53ptq00+v-yujii65dkxwfdeedytbp.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/XmNXL3', price: '$194.99' },
    { id: 2, title: "Youth Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-201677367+u-hrow2y8rhvpwrddyelhp+v-dftko5xtuap5eeoanmxy.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/zx42eG', price: '$109.99' },
    { id: 3, title: "Men's Inter Miami CF Lionel Messi adidas Black 2025 The Fortitude Kit Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-authentic-player-jersey_ss5_p-202594033+u-knqnh7w92m4datnj7vqo+v-ouhd9owk3afqcevad5fn.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/Oebm9P', price: '$194.99' },
  ];


  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Inter Miami Dominates Without Suárez: Messi Leads, Silvetti and Allende Shine in Historic Win vs Cincinnati
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-24">November 25, 2025</time>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/inter-miami" className="text-xs bg-pink-700 text-white px-3 py-1 rounded-full hover:bg-pink-800 transition">#InterMiami</Link>
            <Link href="/teams/inter-miami/messi" className="text-xs bg-black text-white px-3 py-1 rounded-full hover:opacity-90 transition">#Messi</Link>
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
            src="https://assets.goal.com/images/v3/getty-2248121981/crop/MM5DIMRQGI5DEMZWGQ5G433XMU5DAORSGE4Q====/GettyImages-2248121981.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Messi and Inter Miami celebrate historic win"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Jeff Dean 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            Inter Miami made history today, defeating FC Cincinnati 4–0 to reach the MLS Eastern Conference Final for the first time. The victory was a showcase of tactical ingenuity by Javier Mascherano, the brilliance of Lionel Messi, and the emerging talent of young forwards Mateo Silvetti and Tadeo Allende — all achieved without veteran striker Luis Suárez.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Messi at the Heart of the Attack</h2>
          <p>
            Lionel Messi controlled the game from the center, scoring the opener and assisting on two additional goals. Beyond statistics, Messi’s vision, pace, and positioning allowed Inter Miami to dominate possession in key moments, orchestrating attacks and providing decisive passes that Silvetti and Allende converted efficiently.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Silvetti and Allende: The Dynamic Duo Replacing Suárez</h2>
          <p>
            With Suárez unavailable, Mascherano opted for a more dynamic attacking setup:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Mateo Silvetti:</strong> Functioned as the creative spark on the left side. Assisted Messi for the first goal, scored himself, and helped stretch Cincinnati’s defense.</li>
            <li><strong>Tadeo Allende:</strong> Operated as the primary finisher, scoring twice in transition after precise Messi passes. His movement highlighted finishing instincts and adaptability.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Tactical Advantage of Suárez’s Absence</h2>
          <p>
            Mascherano implemented a two-striker system with Messi in the middle. Silvetti and Allende’s mobility created constant threats behind the defense, allowing Messi to act as a central playmaker and maximize counterattack speed.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">The Takeaway</h2>
          <p>
            Inter Miami’s 4–0 win over FC Cincinnati wasn’t just a dominant result — it was a statement. Messi led by example, Silvetti and Allende proved they can thrive without Suárez, and Mascherano’s tactical acumen created a balanced, fluid, and lethal attacking system. This performance positions Inter Miami as a serious contender in the MLS playoffs.
          </p>
        </section>

        
        {/* JERSEYS SECTION */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-[#020617] mb-6 tracking-tight">Shop Inter Miami CF Gear</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {jerseys.map((j) => (
              <div key={j.id} className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="w-full h-64 relative">
                 <Image
  src={j.imageUrl}
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
                    className="inline-block w-full text-center bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#020617] hover:border hover:border-[#020617] transition"
                  >
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
            <p>Published: November 25, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>

          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
            <Link href="/teams/inter-miami" className="text-sm text-pink-700 hover:text-pink-900 ml-4">#InterMiami</Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
