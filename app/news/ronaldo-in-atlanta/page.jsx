'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function RonaldoInAtlanta() {
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
const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Cristiano Ronaldo Is Coming to Atlanta: Georgia Prepares for a Football Spectacle')}`;
const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

return ( <article className="w-full min-h-screen bg-white text-[#020617]"> <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">


    {/* HEADER */}
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
        Cristiano Ronaldo Is Coming to Atlanta: Georgia Prepares for a Football Spectacle
      </h1>

      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
        <span>By Mio Ristić</span>
        <span>•</span>
        <time dateTime="2025-12-03">December 3, 2025</time>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <Link href="/teams/usmnt" className="text-xs bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition">
          #USMNT
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

    {/* FEATURE IMAGE */}
    <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
      <Image
        src="https://assets.goal.com/images/v3/getty-2233954657/crop/MM5DEMZTGY5DCMZRGQ5G433XMU5DEMBQG45DS===/GettyImages-2233954657.jpg?auto=webp&format=pjpg&width=3840&quality=60"
        alt="Cristiano Ronaldo in Atlanta"
        width={1018}
        height={420}
        className="w-full h-[420px] object-cover object-center"
        priority
      />
      <figcaption className="text-xs text-gray-400 px-3 py-2">
        Creator: ATTILA KISBENEDEK 
| 
Credit: AFP via Getty Images
Copyright: AFP or licensors
      </figcaption>
    </figure>

    {/* ARTICLE CONTENT */}
    <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
      <p>
        One of the most anticipated matches in the USMNT’s 2026 World Cup preparation schedule is the friendly against Portugal, set for March 31, 2026, at Mercedes-Benz Stadium in Atlanta, Georgia. But this is far from an ordinary friendly — it’s a chance for fans in Georgia to see one of the greatest footballers of all time, Cristiano Ronaldo, live in action.
      </p>

      <p>
        Mercedes-Benz Stadium, already considered one of the most modern and visually striking venues in the United States — and arguably the world — will host Ronaldo and his Portuguese side less than a year after Lionel Messi’s visit. Atlanta fans have a long memory when it comes to football icons; Messi’s appearance drew both admiration and playful jeers. Now the question is: how will Georgia react to Ronaldo, a player who has won nearly every trophy imaginable except the World Cup?
      </p>

      <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">A Familiar Rivalry</h2>
      <p>
        This matchup is more than a clash of star power — it is a meeting of national teams. Ronaldo last faced the United States on the World Cup stage in 2014, during the group stage. That Portuguese side, with Ronaldo at the peak of his powers, faced the legendary USMNT squad led by Clint Dempsey and Landon Donovan. The result? 1-1, with Portugal exiting the tournament shortly thereafter. For Ronaldo, it was a rare outing against the Americans on football’s biggest stage, and a reminder that even the greatest players can face challenges at the World Cup.
      </p>

      <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">A Spectacle Before the Spectacle</h2>
      <p>
        Atlanta fans now have the opportunity to witness a prelude to the 2026 World Cup — a rare chance to see one of football’s global icons on American soil. While the stakes of this friendly won’t carry tournament weight, the cultural and sporting significance is undeniable. The city that has seen Messi’s creativity and flair now prepares to witness Ronaldo’s poise, power, and unrelenting ambition.
      </p>
      <p>
        From a tactical perspective, Portugal will challenge the USMNT in ways few previous friendlies have. Ronaldo is more than a goal scorer; his presence stretches defenses, demands attention, and shapes the flow of the match. For Mauricio Pochettino’s team, facing a Portuguese side led by Ronaldo provides an early glimpse of the intensity and quality they will encounter at the World Cup itself.
      </p>
      <p>
        Mercedes-Benz Stadium will host thousands of fans, but the story goes far beyond attendance figures. This is about history, footballing legends, and a unique spectacle: Cristiano Ronaldo coming to Georgia for the very first time, giving fans an unforgettable preview of the World Cup to come.
      </p>
    </section>

    {/* FOOTER */}
    <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="text-sm text-gray-600">
        <p>Published: December 3, 2025</p>
        <p>Author: Mio Ristić</p>
      </div>
      <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
            <Link href="/teams/usa-national-team" className="text-sm text-red-700 hover:text-red-800 ml-4">#USA</Link>
          </div>
    </footer>

  </div>
</article>


);
}
