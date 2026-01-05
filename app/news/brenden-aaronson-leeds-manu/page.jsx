'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

export default function BrendenAaronsonArticle() {
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
    "Leading the Charge: Brenden Aaronson Shines as Leeds Draw 1-1 with ManU"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Leading the Charge: Brenden Aaronson Shines as Leeds Draw 1-1 with ManU
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-04">January 4, 2026</time>
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
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p className="mb-6">
            Brenden Aaronson continues to prove why he is one of the brightest American talents in Europe. The U.S. men’s national team midfielder scored his second goal of the Premier League season to give Leeds United a 1-1 home draw against Manchester United at Elland Road on Sunday.
          </p>

          <p className="mb-6">
            Aaronson, who has now contributed to three goals in his last six matches, broke a scoreless halftime tie in the 62nd minute. With his trademark intelligence and timing, he surged forward, slotted between Ayden Heaven and Leny Yoro, and calmly finished past the goalkeeper. His movement, vision, and composure under pressure are a reminder of why he’s considered a key figure in both Leeds’ midfield and the U.S. national team setup.
          </p>

          <p className="mb-6">
            Manchester United responded quickly, with Matheus Cunha equalizing just three minutes later, but Aaronson’s moment underscored his growing influence in English football. Despite Leeds’ struggles this season—they sit 16th in the table with 22 points—Aaronson’s performances offer a glimpse of hope and a hint at the talent the Americans are producing overseas.
          </p>

          <p className="mb-6">
            For the U.S. national team, Aaronson’s form is critical. His ability to dictate play, make late runs into the box, and score in high-pressure moments is exactly the type of performance Gregg Berhalter and the coaching staff are looking for ahead of major international tournaments.
          </p>

          <p className="mb-6">
            Aaronson may be young, but his maturity on the pitch is undeniable. From MLS to the Premier League, he continues to lead by example, proving that American midfielders can shine on the biggest stages.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Leeds United Record</h2>
          <p>5 wins – 8 draws – 7 losses, 22 points</p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: January 4, 2026</p>
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
