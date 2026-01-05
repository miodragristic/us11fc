'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTPochettino() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Mauricio Pochettino’s USMNT: Momentum, Identity, and Cautious Optimism')}`;
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
            Mauricio Pochettino’s USMNT: Momentum, Identity, and Cautious Optimism
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-21">November 21, 2025</time>
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
            src="https://assets.goal.com/images/v3/getty-1185973972/crop/MM5DEMZTGQ5DCMZRGM5G433XMU5DENRTHI3TQ===/GettyImages-1185973972.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="USMNT under Pochettino"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Justin Setterfield 
| 
Credit: Getty Images
Copyright: 2019 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            The United States men’s national team is entering one of its most intriguing phases in recent memory. Since Mauricio Pochettino took charge, the USMNT has not only rediscovered confidence — it has also found structure, clarity, and a growing competitive edge. Recent performances, including a strong showing against Paraguay and a statement 5–1 win over Uruguay, have fueled the belief that this team is evolving into a legitimate contender ahead of the 2026 World Cup.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">A New Identity: Pochettino’s Collective-First Philosophy</h2>
          <p>
            From the outset, Pochettino made one thing clear: the USMNT will not revolve around individual stars. In a national team pool stacked with young talent playing across Europe, that stance is both bold and necessary. Rather than relying on isolated brilliance, Pochettino’s system emphasizes compact team shape, collective pressing, vertical transitions, and shared responsibility in possession.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Emerging Leaders: Reyna, Freeman, and the Next Wave</h2>
          <p>
            One of the most noticeable changes under Pochettino has been the confidence he places in emerging players. Gio Reyna has found renewed rhythm, thriving as a creative connector in the half-spaces, while Alex Freeman embodies the new American mentality: aggressive, committed, and emotionally invested. Under Pochettino, this next wave is becoming dependable.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Performance Markers: Paraguay and Uruguay</h2>
          <p>
            Against Paraguay, the USMNT looked composed and tactically disciplined. The 5–1 victory against Uruguay was the statement moment: high pressing, dynamic movement, clinical finishing — even without a full-strength lineup, the team performed with intensity and purpose.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Leadership at the Core: Pochettino’s Culture Building</h2>
          <p>
            Pochettino emphasizes that every player matters, rejecting the idea of “regular” starters. This approach fosters competition, unity, and accountability, laying the foundation for a resilient squad capable of handling the pressure of a major tournament.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Cautious Optimism: Friendlies Are Not the World Cup</h2>
          <p>
            While results look impressive, friendlies cannot replicate the pressure of a World Cup. In 2026, the U.S. will face technically superior and experienced opponents. Momentum is valuable but can mislead — sustaining form without overconfidence is essential.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Looking Ahead: Road to the 2026 World Cup</h2>
          <p>
            With the World Cup on home soil, expectations are high. Pochettino has shown he can build tactical identity, develop young talent, and create squad depth. If this trajectory continues, the USMNT could enter 2026 as a disciplined, cohesive, and competitive team.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Conclusion: A New Era With Measured Expectations</h2>
          <p>
            Pochettino has injected belief, structure, and ambition into the USMNT. The team shows energy, sharper performances, and stronger identity. The real test will come at the World Cup, but if they balance optimism with discipline, this era could be a turning point in modern American soccer.
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
            <p>Published: November 21, 2025</p>
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
