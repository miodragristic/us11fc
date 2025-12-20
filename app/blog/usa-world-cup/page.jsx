'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';


export default function USMNTGroupD() {
const [currentUrl, setCurrentUrl] = useState('');

useEffect(() => {
if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
}, []);

const handleCopyLink = () => {
if (navigator?.clipboard) {
navigator.clipboard.writeText(currentUrl);
alert('✅ Link copied to clipboard!');
}
};

const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT in Group D: Analysis, Challenges, and Chances for World Cup 2026')}`;
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

return ( <article className="w-full min-h-screen bg-white text-[#020617]"> <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
{/* HEADER */} <header className="mb-8"> <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
USMNT in Group D: Analysis, Challenges, and Chances for World Cup 2026 </h1> <div className="flex items-center gap-4 mt-2 text-sm text-gray-500"> <span>Mio Ristić</span> <span>•</span> <time dateTime="2025-12-05">December 5, 2025</time> </div>
  {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/usa-national-team" className="text-xs bg-blue-800 text-white px-3 py-1 rounded-full hover:bg-blue-900 transition">#USMNT</Link>
          </div>


      {/* SHARE BUTTONS */}
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
  src="https://assets.goal.com/images/v3/blt72949e9c276641f4/crop/MM5DGOBYGE5DEMJYGM5G433XMU5DAORSGAZA====/GettyImages-2246882882.jpg?auto=webp&format=pjpg&width=3840&quality=60"
  alt="USMNT players in action during World Cup qualifiers"  // <- OBAVEZNO
  width={1018}
  height={420}
  className="w-full h-[420px] object-cover object-center"
  priority
/>

  <figcaption className="text-xs text-gray-400 px-3 py-2">
    Creator: John Dorton/ISI Photos/USSF 
    | 
    Credit: Getty Images
    Copyright: 2025 John Dorton/ISI Photos/USSF
  </figcaption>
</figure>


    {/* ARTICLE CONTENT */}
    <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
      <p>When the draw placed the United States in Group D, reactions were mixed. On paper, the group may seem manageable, but a deeper look reveals a tricky and tactically demanding environment, where every opponent can seriously challenge the Americans.</p>

      <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">Group D Teams</h2>
      <ul>
        <li>United States</li>
        <li>Paraguay</li>
        <li>Australia</li>
        <li>Winner of the European Playoff-C (Turkey / Romania / Slovakia / Kosovo)</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Paraguay — A Tough South American Enigma</h3>
      <p>Paraguay is traditionally a team that gives technically skilled sides a headache. Their strengths include disciplined defense, rapid counterattacks, and game tempo control. The USMNT will need to break through the bunker and withstand physical pressure.</p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Australia — Physical and Tactical Discipline</h3>
      <p>Australia may lack star power, but they are known for tactical precision, exceptional endurance, and the ability to neutralize opponents. One key moment could change the outcome.</p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">European Playoff-C Winner — A Tactical Challenge</h3>
      <p>The European playoff winner could be Turkey, Romania, Slovakia, or Kosovo, each presenting unique tactical difficulties for the USMNT.</p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Where the USMNT Stands</h3>
      <p>Home-field advantage, passionate fans, and logistical comfort are significant. But questions remain: Can young leaders like Reyna, Musah, and Balogun handle the pressure? Can the defense withstand physical teams? Does the team have a true “match-winner”?</p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Conclusion — A Group That Cannot Be Underestimated</h3>
      <p>On paper, the group might appear manageable. In practice, Paraguay is a physical challenge, Australia an organizational challenge, and the European playoff winner a tactical challenge. The United States may be favorites, but only on the pitch can they prove readiness for 2026.</p>
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
    

    {/* FOOTER */}
    <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="text-sm text-gray-600">
        <p>Published: December 5, 2025</p>
        <p>Author: US11 FC</p>
      
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
