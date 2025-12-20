'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MessiVsMuller() {
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
const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Messi vs. Müller: The Final Chapter of a European Rivalry Arrives in MLS')}`;
const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

return ( <article className="w-full min-h-screen bg-white text-[#020617]"> <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">


    {/* HEADER */}
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
        Messi vs. Müller: The Final Chapter of a European Rivalry Arrives in MLS
      </h1>

      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
        <span>By Mio Ristić</span>
        <span>•</span>
        <time dateTime="2025-12-01">December 5, 2025</time>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <Link href="/teams/inter-miami/messi" className="text-xs bg-pink-600 text-white px-3 py-1 rounded-full hover:bg-pink-700 transition">
          #Messi
        </Link>
        <Link href="/teams/vancouver-whitecaps/muller" className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition">
          #Müller
        </Link>
          <Link href="/teams/inter-miami/" className="text-xs bg-pink-600 text-white px-3 py-1 rounded-full hover:bg-pink-700 transition">
          #Inter Miami
        </Link>
        <Link href="/teams/vancouver-whitecaps/" className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition">
          #Whitecaps
        </Link>
        
      </div>

      {/* SHARE BUTTONS */}
      <div className="flex items-center gap-4 mt-4">
        <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
        <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
        <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
        <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
      </div>
    </header>

    <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
  <div className="flex w-full h-[420px]">
    <div className="w-1/2 h-full overflow-hidden">
      <Image
        src="https://assets.goal.com/images/v3/getty-2249325528/crop/MM5DCNRQGQ5DSMBSHJXG653FHIYTOMZ2GM2TC===/GettyImages-2249325528.jpg?auto=webp&format=pjpg&width=3840&quality=60"
        alt="Messi"
        width={509}
        height={420}
        className="w-full h-full object-cover object-center"
        priority
      />
    </div>
    <div className="w-1/2 h-full overflow-hidden">
      <Image
        src="https://assets.goal.com/images/v3/getty-2230517016/crop/MM5DGNZUGQ5DEMJQGY5G433XMU5DINJRHIYTCMI=/GettyImages-2230517016.jpg?auto=webp&format=pjpg&width=3840&quality=60"
        alt="Müller"
        width={509}
        height={420}
        className="w-full h-full object-cover object-center"
        priority
      />
    </div>
  </div>
  <figcaption className="text-xs text-gray-400 px-3 py-2 w-full text-center mt-2">
    Creator: Leonardo Fernandez  + Creator: Megan Briggs
| 
Credit: Getty Images
Copyright: 2025 Getty Images 
  </figcaption>
</figure>



    {/* ARTICLE CONTENT */}
    <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
      <p>
        FORT LAUDERDALE, Fla. — When Lionel Messi and Thomas Müller take the field at Chase Stadium in the 2025 MLS Cup final, it will be more than just a match. It will be a clash of philosophies, personalities, and legacies that have shaped European football over the past fifteen years — now transported to North American soil.
      </p>

      <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">Messi and Inter Miami — An Emotional Championship Quest</h2>
      <p>
        Lionel Messi is chasing another trophy. This hardly comes as a surprise, but what is new is that the nine-time FIFA Ballon d’Or winner still does not have an MLS Cup in his collection. Winning it has become a priority — not just for the club, but for Messi personally.
      </p>
      <p>
        “This final is going to be very, very special,” Messi told MLS Season Pass, noting that Müller’s arrival in MLS adds extra weight to the encounter. “It’s great that he came to the league and brings quality and attention. This final is a special moment to face each other again.”
      </p>
      <p>
        Inter Miami enters the final with emotions extending beyond the title. Sergio Busquets and Jordi Alba have announced their retirements, and Messi feels this deeply: “It would be wonderful to finish their careers with a trophy. To say goodbye with one more joy… That would be very special for all of us.”
      </p>

      <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">Müller and Vancouver — Cool Head, Warm Heart</h2>
      <p>
        Thomas Müller, a veteran with 35 career trophies, approaches the final with a completely different philosophy. Pragmatic, rational, and calm, Müller knows the MLS Cup final is a rare opportunity, but he doesn’t overplay the personal rivalry.
      </p>
      <p>
        “This is a perfect match. Two teams playing attractive football — in my opinion, an ideal final,” Müller said. “We don’t assume we can win for sure, but we trust each other. It’s a very special group.”
      </p>
      <p>
        In 12 games for Vancouver, Müller has recorded 9 goals and 4 assists, but his impact goes beyond stats — game organization, experience in big moments, and leadership make him central to Vancouver’s rise.
      </p>

      <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">Rivalry Without Bitterness, History on Müller’s Side</h2>
      <p>
        Messi and Müller have faced each other about 10 times in their careers, both at club and international levels. The record is surprising: Müller’s teams have won 7 times, Messi’s teams 3 times. Yet neither player lets statistics dictate the narrative.
      </p>

      <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">A Larger Context: MLS as a New Historical Stage</h2>
      <p>
        This duel is more than a final. It demonstrates how MLS has evolved and attracts the biggest European legends. Messi said: “In recent years… there has been enormous growth in the number of fans. People are passionate, they love football, they live the matches.”
      </p>
      <p>
        Müller’s arrival in Vancouver confirms that MLS now provides a platform for elite players to continue their careers while promoting the league. This final brings together figures who have shaped European football for years: Messi, Müller, Mascherano, Busquets, Alba, and Luis Suárez.
      </p>

      <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">Conclusion: A Final Beyond the Pitch</h2>
      <p>
        This final is a rare opportunity to witness a continuation of European history transplanted into a new world. Messi chases the trophy that eludes him. Müller seeks a cup to start a new chapter. Miami aims to honor a legendary generation. Vancouver pursues an unexpected season-of-dreams triumph. It is a match where old rivals meet again — not to dwell on the past, but to write a new chapter.
      </p>
    </section>

    {/* SHOP THE GEAR SECTION */}
<section className="mb-12">
  <h2 className="text-3xl font-bold text-[#020617] mb-6">Shop the 2025 MLS Cup Gear</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Inter Miami */}
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <Image
        src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/330px-Inter_Miami_CF_logo.svg.png"
        alt="Inter Miami 2025 MLS Cup Gear"
        width={600}
        height={400}
        className="w-full h-64 object-cover object-center"
        priority
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Inter Miami CF Gear</h3>
        <p className="text-sm text-gray-600 mb-3">Official 2025 MLS Cup Inter Miami CF merchandise.</p>
        <div className="flex flex-wrap gap-2">
          <a href="https://mlsstore.i8h2.net/DyEVma" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition text-sm">US Store</a>
          <a href="https://mlsstore.i8h2.net/APzoQN" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-pink-400 text-white rounded hover:bg-pink-500 transition text-sm">Canada Store</a>
        </div>
      </div>
    </div>

    {/* Vancouver Whitecaps */}
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Vancouver_Whitecaps_logo.svg/960px-Vancouver_Whitecaps_logo.svg.png"
        alt="Vancouver Whitecaps 2025 MLS Cup Gear"
        width={600}
        height={400}
        className="w-full h-64 object-cover object-center"
        priority
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Vancouver Whitecaps Gear</h3>
        <p className="text-sm text-gray-600 mb-3">Official 2025 MLS Cup Vancouver Whitecaps merchandise.</p>
        <div className="flex flex-wrap gap-2">
          <a href="https://mlsstore.i8h2.net/kOnjvV" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm">US Store</a>
          <a href="https://mlsstore.i8h2.net/kOnjvV" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition text-sm">Canada Store</a>
        </div>
      </div>
    </div>

  </div>
</section>


    {/* FOOTER */}
    <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="text-sm text-gray-600">
        <p>Published: December 1, 2025</p>
        <p>Author: Mio Ristić</p>
      </div>
    </footer>

  </div>
</article>

);
}
