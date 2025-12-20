'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MessiInterMiamiBlog() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Lionel Messi Extends Inter Miami Contract Through 2028 | US11 Blog')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  const jerseys = [
    { id: 1, title: "Men's Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-authentic-player-jersey_ss5_p-202860048+u-90c1ap4gywaxy53ptq00+v-yujii65dkxwfdeedytbp.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/XmNXL3', price: '$194.99' },
    { id: 2, title: "Men's Inter Miami CF Lionel Messi adidas Black 2025 The Fortitude Kit Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-201604868+u-wb8lncyovo25ie3w7gxq+v-68593kkmocwzvc55q9tq.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/2adWMg', price: '$129.99' },
    { id: 3, title: "Lionel Messi, Luis Suarez & Sergio Busquets Inter Miami CF Autographed Fanatics Authentic 2024 adidas MLS", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/lionel-messi-luis-suarez-and-sergio-busquets-inter-miami-cf-autographed-2024-adidas-mls-match-soccer-ball_ss5_p-201638269+u-pgg9ywbjxveinpoyfhyt+v-gslvivlyk9n5ebwioblq.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/jemOQv', price: '$5,999.99' },
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Lionel Messi Extends Inter Miami Contract Through 2028: The GOAT Stays Home 🐐
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-10-25">October 25, 2025</time>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link
              href="/teams/inter-miami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-pink-500 text-white px-3 py-1 rounded-full hover:bg-pink-600 transition"
            >
              #InterMiamiCF
            </Link>
            <Link
              href="/teams/inter-miami/messi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 transition"
            >
              #LionelMessi
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
            src="https://cyprus-mail.com/image/s1100x733/fill/webp/path/wp-content/uploads/2023/07/messi.jpg"
            alt="Lionel Messi celebrates with Inter Miami fans after scoring"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: MARCO BELLO 
| 
Credit: REUTERS
          </figcaption>
        </figure>

        {/* CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>
            When it comes to greatness in football, there’s no need for long introductions — one word says it all: <strong>GOAT</strong>.
            Lionel Messi isn’t just a football legend; he’s a global brand, a cultural icon, and a once-in-a-generation athlete whose influence goes far beyond the pitch.
          </p>

          <p>
            Now, the story continues. Messi has officially extended his contract with <strong>Inter Miami CF through 2028</strong>, giving fans more years of magic, goals, and history in the making.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Messi’s Legacy in Miami</h2>
          <p>
            Since joining Inter Miami in 2023, Lionel Messi has completely transformed Major League Soccer (MLS).
            Ticket sales skyrocketed, stadiums sold out, and viewership around the world exploded. The “Messi Effect” turned Inter Miami into a global football powerhouse.
          </p>

          <p>
            In the 2025 season, Messi delivered incredible numbers: <strong>29 goals and 19 assists</strong>, nearly breaking the single-season record for goal contributions.
            With those performances, he’s once again the frontrunner for the <em>Landon Donovan MLS MVP Award</em>.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">What the Contract Extension Means for Inter Miami</h2>
          <p>
            Messi’s new contract through 2028 is much more than just a business move — it’s a statement of belief.
            It shows that Messi truly believes in Inter Miami’s project, in the club’s vision, and in the dream that began when he first arrived.
          </p>

          <p>
            With the club preparing to open its new <strong>Miami Freedom Park Stadium</strong>, Messi will be at the heart of that historic moment, leading as captain and inspiration to the entire squad.
          </p>

          <p>
            Fans can expect more unforgettable free kicks, jaw-dropping assists, and that signature skyward look after every goal.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">The GOAT’s Next Chapter</h2>
          <p>
            Messi’s journey is far from over. Beyond MLS, 2026 could see him lead Argentina in defense of their World Cup title across North America.
            But right now, his focus remains clear — to bring Inter Miami their first-ever <strong>MLS Cup</strong> and to dominate continental competitions like the <em>Concacaf Champions Cup</em>.
          </p>

          <p>
            Across 82 matches for Inter Miami, Messi already has <strong>71 goals and 44 assists</strong>, plus two major trophies: the 2023 Leagues Cup and the 2024 Supporters’ Shield.
            Those are numbers few players can even dream of — but for Messi, they’re just another chapter in an extraordinary story.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Why Messi’s Presence Matters</h2>
          <p>
            Messi’s influence reaches far beyond the scoreline. He elevates everyone around him — teammates, fans, even rival clubs.
            His work ethic, humility, and passion for football make him the perfect ambassador for the sport in North America.
          </p>

          <p>
            With global icons like <strong>Luis Suárez, Sergio Busquets, Jordi Alba,</strong> and <strong>Rodrigo De Paul</strong> joining him, Inter Miami has built something truly special — 
            a team that blends experience, chemistry, and world-class talent.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4">Conclusion: The Magic Continues</h2>
          <p>
            Lionel Messi is staying in Miami — and the dream lives on.
            In a city known for its energy, style, and sunshine, Messi brings something even brighter: pure football brilliance.
          </p>

          <p>
            From Barcelona to Paris to Miami, his story has always been about more than goals — it’s about legacy.
            And now, with this new contract through 2028, that legacy continues right where he belongs: at home, in pink, with Inter Miami CF.
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
                    src={j.imageUrl} // <- fixed here
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
