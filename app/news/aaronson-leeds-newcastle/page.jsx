'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

export default function AaronsonNewcastle2026() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert("✅ Link copied to clipboard!");
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    "Aaronson stars for Leeds, but late handball costs the visitors"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Aaronson stars for Leeds, but late handball costs the visitors
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-06">January 6, 2026</time>
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
                   src="https://assets.goal.com/images/v3/getty-2180302529/crop/MM5DIOJQGY5DENZWGA5G433XMU5DENJWHIYA====/GettyImages-2180302529.jpg?auto=webp&format=pjpg&width=1920&quality=60"
                   alt="Brenden Aaronson"
                   width={1018}
                   height={420}
                   className="w-full h-[420px] object-cover object-center"
                   priority
                 />
                 <figcaption className="text-xs text-gray-400 px-3 py-2">
                   Creator: George Wood 
       | 
       Credit: Getty Images
       Copyright: 2024 Getty Images
                 </figcaption>
               </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed space-y-6">
          <p>Few Premier League matches this season have carried the chaos, quality, and emotional swing of Newcastle United’s 4–3 victory over Leeds United at St James’ Park.</p>

          <p>These are two clubs whose rivalry has deep roots, one that had lain dormant during Leeds’ years outside the top flight. Leeds’ return to the Premier League has revived that edge — and this encounter, stretched beyond 100 minutes and producing seven goals, felt like a statement that the fixture is alive again.</p>

          <p>At the centre of it all was Brenden Aaronson. For long stretches, he was the outstanding player on the pitch. Operating between the lines, he was sharp, direct, and difficult to track, repeatedly exploiting the spaces Newcastle struggled to close. His two goals were taken with composure and conviction, and both gave Leeds the lead in a hostile environment.</p>

          <p>For Leeds, the narrative was close to perfect. Aaronson’s energy set the tempo, Dominic Calvert-Lewin provided a physical reference point, and Daniel Farke’s side looked capable of managing the game deep into stoppage time.</p>

          <p>Then came the moment that altered everything.</p>

          <p>In the dying minutes, Aaronson handled the ball inside the penalty area, conceding a spot-kick. Newcastle converted, swinging momentum decisively. What followed was brutal: with Leeds reeling, Newcastle pressed and found another goal in extended stoppage time, turning a night that had promised so much for the visitors into one of crushing disappointment.</p>

          <p>Football rarely offers simple verdicts. Aaronson’s performance was exceptional, arguably the best on the pitch. Yet it was his late mistake that proved decisive, a reminder of how thin the margins are at this level. For Leeds, the sense of what slipped away will linger far longer than the goals they scored.</p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: January 6, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-2">
            <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
          </div>
        </footer>

      </div>
    </article>
  );
}
