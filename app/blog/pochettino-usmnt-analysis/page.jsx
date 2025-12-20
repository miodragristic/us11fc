'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PochettinoUSMNTAnalysis() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Pochettino and USMNT: Has He Finally Found the Right Path?')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  // Sample USMNT jerseys data
  const jerseys = [
    {
      id: 1,
      title: 'USMNT Nike 2024 Away Replica Jersey - Blue',
      price: '$51.29 with code: FESTIVE',
      imageUrl: ' https://fanatics.frgimages.com/usmnt/mens-nike-blue-usmnt-2024-away-replica-jersey_ss5_p-201149806+pv-1+u-sok5v33k09b74r2ypoou+v-7nlefv7wgkw3hgfxcmy7.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/POXjPj',
    },
    {
      id: 2,
      title: 'USMNT Nike 2025 Away Replica Jersey - Navy',
      price: '$129.99',
      imageUrl: 'https://fanatics.frgimages.com/usmnt/mens-nike-navy-usmnt-2025-away-replica-jersey_ss5_p-202297013+pv-1+u-f9wal9lduvhdzyrsu8xw+v-p6kn5elckajdhcsojmpr.jpg?_hv=2&w=1018',
      link: 'https//www.mlsstore.com/usmnt-away-jersey',
    },
    {
      id: 3,
      title: 'USMNT Nike 2024 Home Replica Jersey - White',
      price: '$60.79 with code: FESTIVE',
      imageUrl: 'https://fanatics.frgimages.com/usmnt/mens-nike-white-usmnt-2024-home-replica-jersey_ss5_p-201149800+pv-1+u-wehxef8zguyjty2iocsy+v-snchhstz5d1dem5wyg20.jpg?_hv=2&w=1018 ',
      link: 'https://fanatics.93n6tx.net/9LRGRE',
    },
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Pochettino and the USMNT: Has He Finally Found the Right Path?
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
            src="https://assets.goal.com/images/v3/blt4724cfaf9e2f7ee3/crop/MM5DCNZTGQ5DSNZVHJXG653FHI4TAORQ/poch-point169.jpeg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Lionel Messi celebrates scoring for Inter Miami vs Nashville"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
           Creator: Manuel Velasquez Figueroa/USSF 
| 
Credit: Getty Images for USSF
Copyright: 2024 Manuel Velasquez Figueroa/USSF
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
           The USA vs Paraguay match, though officially just a friendly, may have offered the clearest sign yet that something concrete is being built under Mauricio Pochettino. We don’t want to jump to early conclusions, but it seems the coach needed time to implement his ideas with the USMNT – especially since this is his first job at the national team level.

Pochettino doesn’t come from the American infrastructure and isn’t deeply familiar with the “American mentality,” even though he is Latin American. He is much more adapted to the European style and pace, which still remains several steps ahead of American soccer. This gives the impression that he wants to elevate this team toward those standards – faster ball circulation, more compact pressing, and greater tactical discipline.

His now-famous statement – that the greatest success for USMNT would be “winning the World Cup” – divided fans. Some saw it as a much-needed dose of ambition, while others dismissed it as completely out of touch. But today’s match gave both sides something to chew on: there are still holes to fix, but clear progress is visible.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">What We Saw Against Paraguay (Match Summary)</h2>
          <p>
           The US took the lead in the 4th minute with a goal from Gio Reyna, who finally looked like the player everyone expected him to be. Paraguay responded quickly through Arce, following a brilliant Almirón cross. In the second half, with better control of the ball and more aggressive pressing, the US scored the winner via Folarin Balogun, following Reyna’s run and a deflected pass.

There were minor disturbances – a few dangerous Paraguay chances, a missed Pepi opportunity on a counter, and even a small skirmish near the sideline – but the key takeaway is that the US looked more organized and tactically secure than in previous Pochettino matches.
          </p>
          {/* Embedded YouTube Video */}
<section className="my-8">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">Match Highlights</h2>
  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-md">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/cXE4N5k50Ao"
      title="USMNT vs Paraguay Match Highlights"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>


          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Has Pochettino Gained Credibility With Fans?</h2>
          <p>
           Slowly – yes, he has.

Fans value two things most: a clear identity and visible progress. Past games felt like experiments, but today it seemed like there is a formation and structure that works. The three-center-back system with attacking fullbacks, which Pochettino consistently uses, finally looked like something players understand and can execute.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Signs of the Right Path Forward</h2>
          <p>
            Although there are areas to refine — defensive transitions, finishing efficiency, and midfield control — the USMNT now displays:
          </p>
          <ul>
            <li><strong>Tactical maturity</strong></li>
            <li><strong>Defined roles</strong></li>
            <li><strong>Recognizable playing style</strong></li>
            <li><strong>Individual development</strong></li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Looking Ahead: Uruguay Challenge</h2>
          <p>
            The upcoming friendly against <strong>Uruguay</strong> will test the team further, but the USMNT appears on a positive trajectory. If the goal is to restore confidence and elevate the squad’s level, Pochettino has taken a significant step in the right direction.
          </p>

          <blockquote>
            “These are exactly the type of games we want — against world-class opponents, in front of our home fans, to test our chemistry and resilience,” Pochettino said earlier this month.
          </blockquote>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Conclusion</h2>
          <p>
            With visible progress, clear roles, and tactical identity emerging, Pochettino is beginning to solidify the USMNT’s path toward competitiveness ahead of the 2026 World Cup.
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
