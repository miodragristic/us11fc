'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTParaguayBrawl() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Why Everyone’s Talking About the USMNT vs Paraguay Brawl')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  // Sample USMNT jerseys data
  const jerseys = [
    {
      id: 1,
      title: 'USMNT Nike 2024 Away Replica Jersey - Blue',
      price: '$51.29 with code: FESTIVE',
      imageUrl: 'https://fanatics.frgimages.com/usmnt/mens-nike-blue-usmnt-2024-away-replica-jersey_ss5_p-201149806+pv-1+u-sok5v33k09b74r2ypoou+v-7nlefv7wgkw3hgfxcmy7.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/POXjPj',
    },
    {
      id: 2,
      title: 'USMNT Nike 2025 Away Replica Jersey - Navy',
      price: '$129.99',
      imageUrl: 'https://fanatics.frgimages.com/usmnt/mens-nike-navy-usmnt-2025-away-replica-jersey_ss5_p-202297013+pv-1+u-f9wal9lduvhdzyrsu8xw+v-p6kn5elckajdhcsojmpr.jpg?_hv=2&w=1018',
      link: 'https://www.mlsstore.com/usmnt-away-jersey',
    },
    {
      id: 3,
      title: 'USMNT Nike 2024 Home Replica Jersey - White',
      price: '$60.79 with code: FESTIVE',
      imageUrl: 'https://fanatics.frgimages.com/usmnt/mens-nike-white-usmnt-2024-home-replica-jersey_ss5_p-201149800+pv-1+u-wehxef8zguyjty2iocsy+v-snchhstz5d1dem5wyg20.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/9LRGRE',
    },
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Why Everyone’s Talking About the USMNT vs Paraguay Brawl
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-17">November 17, 2025</time>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/usa-national-team" className="text-xs bg-blue-800 text-white px-3 py-1 rounded-full hover:bg-blue-900 transition">#USMNT</Link>
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
          <Image
            src="https://assets.goal.com/images/v3/blt19784dca8a91db2a/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2246884471.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="USMNT vs Paraguay brawl"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Photo: Getty Images
          </figcaption>
        </figure>


        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            The recent friendly match between the USMNT and Paraguay in Chester ended with all the elements that make headlines: goals, drama, and… a bench-clearing brawl. In the 91st minute, while the ball was out of play, Alex Freeman and Gustavo Gómez clashed over possession. The confrontation quickly escalated, with players from both benches getting involved, punches thrown, and even bottles thrown from the stands. But why has this incident captured so much attention, and what does it reveal about the U.S. Men’s National Team?
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">What Really Happened</h2>
          <ul className="list-disc list-inside">
            <li><strong>The spark:</strong> Freeman and Gómez physically confronted each other over a loose ball out of play.</li>
            <li><strong>The escalation:</strong> Other players rushed in, creating a chaotic melee that involved punches and aggressive shoving.</li>
            <li><strong>Discipline and cards:</strong> Cristian Roldan (USA) received a yellow card, while Paraguayan players, including Omar Alderete on the bench, were also penalized. Interestingly, Freeman and Gómez, the initial instigators, were not booked.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Why the Reaction Was So Big</h2>
          <ul className="list-disc list-inside">
            <li><strong>Media attention:</strong> Incidents in international soccer matches, even friendlies, automatically grab headlines.</li>
            <li><strong>Fan fascination with drama:</strong> Supporters are drawn to rivalries, heart, and visible team spirit on the field.</li>
            <li><strong>Social media amplification:</strong> GIFs, TikTok clips, and memes made the brawl go viral worldwide, increasing coverage and debate.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">What This Says About the USMNT</h2>
          <ul className="list-disc list-inside">
            <li><strong>Positive side:</strong> The team showed cohesion and a willingness to defend teammates, which can build a strong mental attitude ahead of major competitions.</li>
            <li><strong>Negative side:</strong> Such clashes risk injuries and create negative publicity, especially with the World Cup approaching.</li>
            <li><strong>Pochettino’s challenge:</strong> The incident highlights the difficulty of balancing tactical discipline with player temperament.</li>
          </ul>

          
        {/* Embedded YouTube Video */}
        <section className="my-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Match Highlights</h2>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-md">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/ofB_8Dlbv9E?t=111"
              title="USMNT vs Paraguay Brawl Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">The Bigger Picture</h2>
          <p>
            While many focus only on the brawl, the story is bigger: it reflects the current state of the USMNT. The team is talented but still transitioning from raw individual skill to mental maturity. The altercation also shows how Mauricio Pochettino is trying to build character alongside tactics, emphasizing mental toughness as much as technical ability.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Conclusion</h2>
          <p>
            The USMNT vs Paraguay brawl isn’t just a sensational moment—it’s a glimpse into the team’s mentality, cohesion, and areas for growth. The U.S. team is ready to defend its own, but managing player temperament remains critical. As the World Cup approaches, incidents like this may serve as a litmus test for how mature and disciplined the squad has become under Pochettino’s guidance.
          </p>
        </section>

        {/* USMNT JERSEYS SECTION */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-[#020617] mb-6 tracking-tight">Shop USMNT Gear</h2>
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
                    className="inline-block w-full text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#020617] hover:border hover:border-[#020617] transition"
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
            <p>Published: November 17, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>

          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
            <Link href="/teams/usa-national-team" className="text-sm text-blue-800 hover:text-blue-900 ml-4">#USMNT</Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
