'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ChicagoFireOrlandoBlog() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Chicago Fire Blaze Past Orlando in Wild Card Clash | US11 Blog')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Chicago Fire Blaze Past Orlando in Wild Card Clash: Gutiérrez and Cuypers Lead the Charge
          </h1>

          {/* META INFO */}
          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-10-23">October 23, 2025</time>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
  <Link
    href="/teams/chicago-fire"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full hover:bg-red-200 transition"
  >
    #ChicagoFire
  </Link>

  <Link
    href="/teams/orlando-city"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-200 transition"
  >
    #OrlandoCity
  </Link>
</div>


          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition" aria-label="Share on Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition" aria-label="Share on Twitter">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition" aria-label="Share on WhatsApp">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition" aria-label="Copy Link">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://cdn.wsn.com/filters:format(webp)/filters:no_upscale()/fit-in/1200x585/1745997572/chicago-fire-fc-vs-orlando-city-sc-2025-05-03.jpg"
            alt="Chicago Fire celebrate playoff win"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
           Creator: Soobum Im 
| 
Credit: Getty Images
Copyright: 2025 Soobum Im
          </figcaption>
        </figure>

        {/* CONTENT */}

        

        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>
            After eight long years, the Chicago Fire are back — and they returned in spectacular fashion.
            In their first playoff match since 2017, the Fire delivered a commanding 3–1 win over Orlando City
            in Wednesday night’s Eastern Conference Wild Card showdown at SeatGeek Stadium.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Goal Scorers</h2>
<ul className="list-disc list-inside mb-6">
  <li><strong>Brian Gutiérrez</strong> - 46' (Chicago Fire)</li>
  <li><strong>Hugo Cuypers</strong> - 57', 74' (Chicago Fire)</li>
  <li><strong>Kevin Spicer</strong> - 82' (Orlando City)</li>
</ul>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Relentless First Half Pressure</h2>
          <p>
            Chicago came out firing from the opening whistle, dominating possession and pressing Orlando high.
            They struck the post twice and forced several saves from Pedro Gallese, making it almost a miracle
            that the score remained level at halftime. Orlando could only absorb pressure — but not for long.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Gutiérrez Breaks the Deadlock</h2>
          <p>
            Just minutes into the second half, hometown hero Brian Gutiérrez finally broke through with a calm,
            clinical finish after a perfect cross from Jonathan Dean. The 22-year-old midfielder, who grew up
            watching the Fire from the stands, celebrated by leaping into the crowd in an unforgettable scene.
          </p>

          <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-700">
            “It was surreal. I used to be one of those fans. I always dreamed of scoring for Chicago in a moment like this.”
          </blockquote>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Cuypers Seals the Victory</h2>
          <p>
            Once Chicago went ahead, they never looked back. Belgian striker Hugo Cuypers added two goals to put the game
            beyond reach. Orlando’s late consolation goal was just that — a mere formality in a night dominated by the Fire.
          </p>

          {/* VIDEO SECTION */}
          <div className="mt-10 mb-12 aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/U5SWZ9GZVlQ"
              title="Chicago Fire vs Orlando Wild Card Highlights"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Next Stop: Philadelphia</h2>
          <p>
            With the win, Chicago advance to face Supporters’ Shield winners Philadelphia Union in Round One of the playoffs.
            Head coach Gregg Berhalter praised his team’s mentality and togetherness, noting this could be the start of a new era for the club.
          </p>
        </section>

          {/* AFFILIATE PRODUCTS */}
                  <section className="my-12">
                    <h2 className="text-3xl font-bold text-[#020617] mb-6 tracking-tight">
                      Shop Chicago Fire vs Orlando City Gear
                    </h2>
        
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Product 1 */}
                      <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                        <Image
                          src="https://images.footballfanatics.com/chicago-fire/mens-adidas-hugo-cuypers-red-chicago-fire-2024-return-to-red-replica-player-jersey_ss5_p-202850499+pv-1+u-qkpru6sqdaiadvjrtqku+v-fp29lvyqp1hd0cfi5i4i.jpg?_hv=2&w=1018"
                          alt="Lamine Yamal Barcelona Nike 2025/26 Replica Player Jersey - Blue"
                          width={500}
                          height={500}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">Men's Chicago Fire Hugo Cuypers adidas Red 2024 Return To Red Replica Player Jersey</h3>
                          <p className="text-gray-600 mb-4">$101.24 with code: 25MLS
$134.99</p>
                          <a
                            href="https://mlsstore.i8h2.net/bOY1Gg"
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
                          src="https://images.footballfanatics.com/orlando-city-sc/mens-adidas-marco-pa%C5%A1ali%C4%87-purple-orlando-city-sc-2025-perfect-storm-replica-player-jersey_ss5_p-202852872+pv-1+u-zdep6sxfhnwd5cy7bd6i+v-i9u5h9d3c4tawadxb5wn.jpg?_hv=2&w=1018"
                          alt="Barcelona Away Jersey 2025"
                          width={500}
                          height={500}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">Men's Orlando City SC Marco Pašalić adidas Purple 2025 Perfect Storm Replica Player Jersey</h3>
                          <p className="text-gray-600 mb-4">Your Price: $134.99</p>
                          <a
                            href="https://mlsstore.i8h2.net/Bn7dOx"
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
                          src="https://images.footballfanatics.com/chicago-fire/mens-adidas-brian-gutierrez-red-chicago-fire-2024-return-to-red-replica-player-jersey_ss5_p-202855037+pv-1+u-ylr0d8yjhng0w4ntkvpk+v-lw8bkgrbyymzmwubmegl.jpg?_hv=2&w=1018"
                           alt="Men's Chicago Fire Brian Gutierrez adidas Red 2024 Return To Red Replica Player Jersey"
                          width={500}
                          height={500}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">Men's Chicago Fire Brian Gutierrez adidas Red 2024 Return To Red Replica Player Jersey</h3>
                          <p className="text-gray-600 mb-4">$101.24 with code: 25MLS
$134.99</p>
                          <a
                            href="https://mlsstore.i8h2.net/MA7dNn"
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
