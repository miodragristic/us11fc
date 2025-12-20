'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function InterMiamiNashvilleBlog() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Inter Miami Cruise Past Nashville in Dominant Playoff Victory | US11 Blog')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  const jerseys = [
     { id: 1, title: "Men's Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-authentic-player-jersey_ss5_p-202860048+u-90c1ap4gywaxy53ptq00+v-yujii65dkxwfdeedytbp.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/XmNXL3', price: '$194.99' },
    { id: 2, title: "Youth Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-201677367+u-hrow2y8rhvpwrddyelhp+v-dftko5xtuap5eeoanmxy.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/zx42eG', price: '$109.99' },
    { id: 3, title: "Men's Inter Miami CF Lionel Messi adidas Black 2025 The Fortitude Kit Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-authentic-player-jersey_ss5_p-202594033+u-knqnh7w92m4datnj7vqo+v-ouhd9owk3afqcevad5fn.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/Oebm9P', price: '$194.99' },
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
        
        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Inter Miami Cruise Past Nashville in Dominant Playoff Victory
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-10-25">October 25, 2025</time>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/inter-miami" target="_blank" rel="noopener noreferrer"
              className="text-xs bg-pink-600 text-white px-3 py-1 rounded-full hover:bg-pink-700 transition">
              #InterMiamiCF
            </Link>
            <Link href="/teams/nashville-sc" target="_blank" rel="noopener noreferrer"
              className="text-xs bg-yellow-500 text-white px-3 py-1 rounded-full hover:bg-yellow-600 transition">
              #NashvilleSC
            </Link>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://brobible.com/wp-content/uploads/2023/08/lionel-messi-taking-a-corner-kick-for-inter-miami.jpg"
            alt="Lionel Messi celebrates scoring for Inter Miami vs Nashville"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: John Wilkinson/ISI Photos 
| 
Credit: Getty Images
Copyright: 2023 John Wilkinson/ISI Photos
          </figcaption>
        </figure>

        {/* CONTENT */}
        <section className="prose prose-lg max-w-none mb-9 leading-relaxed">
          <p>
            Inter Miami CF showed no mercy in their Audi 2025 MLS Cup Playoffs opener, cruising to a 3–1 victory over Nashville SC in a match they controlled from start to finish.
            From the opening whistle to the 90th minute (plus an incredible 11 minutes of stoppage time), it was all Miami — confident, clinical, and composed.
          </p>

          {/* MATCH TIMELINE SECTION */}
<section className="bg-gray-50 p-6 rounded-2xl shadow-inner mb-10 mt-12">
  <h2 className="text-2xl font-bold mb-4 text-[#020617]">⏱️ Match Timeline</h2>
  <ul className="space-y-2 text-gray-700">
    <li><strong>18’</strong> — Lionel Messi (assist: Luis Suárez)</li>
    <li><strong>62’</strong> — Tomás Allende (assist: Fray, Messi)</li>
    <li><strong>69’–89’</strong> — Series of tactical substitutions</li>
    <li><strong>90+11’</strong> — Hany Mukhtar (Nashville SC)</li>
  </ul>
</section>


          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Total Control from Start to Finish</h2>
          <p>
            From the very start, Inter Miami displayed total dominance, pressing high and dictating the tempo.
            The experience and composure of players like <strong>Lionel Messi</strong>, <strong>Luis Suárez</strong>, and <strong>Sergio Busquets</strong> made a clear difference against a Nashville side that struggled to find rhythm or possession.
          </p>
          <p>
            Messi opened the scoring early after a clever setup from Suárez, setting the tone for what would become a near-flawless team performance.
            While Nashville tried to respond through counterattacks, their efforts were easily contained by a well-organized Miami defense led by <strong>Noah Allen</strong> and <strong>Falcón</strong>.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Second Half: Miami’s Masterclass</h2>
          <p>
            At halftime, Inter’s staff focused on shutting down Nashville’s counters — and the plan worked perfectly.
            The second half was pure control. In the 62nd minute, <strong>Tomás Allende</strong> doubled the lead after a slick combination play involving <strong>Ian Fray</strong> and Messi.
          </p>
          <p>
            Messi later sealed the victory with a brace in stoppage time, while <strong>Hany Mukhtar</strong> scored a late consolation goal for Nashville — a “beautiful bomb,” but too little, too late.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Post-Match Reaction: Rodrigo De Paul</h2>
          <blockquote className="border-l-4 border-pink-600 pl-4 italic text-gray-700">
            “We took the playoffs very seriously and prepared well. The most important thing now is to rest and be ready for the next stage.
            I’m also happy that Messi extended his contract — it’s a privilege to play with him, and he’s one of my best friends.”
          </blockquote>

          


          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Summary</h2>
          <p>
            This was a statement win for Inter Miami — a team that’s playing like true title contenders.
            With Messi in unstoppable form and Allende’s growing influence, Miami look ready for the next playoff round and possibly a historic run toward their first MLS Cup.
          </p>
        </section>

        {/* VIDEO SECTION */}
<div className="mt-12 mb-12 aspect-video rounded-xl overflow-hidden shadow-lg">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/BklFqkPZO8Y"
    title="Inter Miami vs Nashville - Highlights"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

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

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: October 25, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
