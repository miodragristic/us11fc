'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

export default function SanDiegoVancouverRecap() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Link copied to clipboard!");
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}&text=${encodeURIComponent("Brian White’s Brace Sends Vancouver Whitecaps to MLS Cup Final")}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* ===== HEADER ===== */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Brian White’s Brace Sends Vancouver Whitecaps to MLS Cup Final with 3–1 Win over San Diego FC
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-29">November 29, 2025</time>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-3 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={18} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={18} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={18} />
            </a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-[#020617] transition">
              <FiCopy size={18} />
            </button>
          </div>
        </header>

        {/* ===== FEATURE IMAGE ===== */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2209348682/crop/MM5DINRQGI5DENJYHE5G433XMU5DAORSGQYA====/GettyImages-2209348682.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="San Diego FC vs Vancouver Whitecaps Western Conference Final"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Derek Cain 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* ===== ARTICLE BODY ===== */}
        <section className="prose prose-lg max-w-none space-y-10 leading-relaxed">

          <h2 className="text-3xl font-bold">Brian White Powers Vancouver to MLS Cup Final</h2>
          <p>
            USMNT forward <strong>Brian White</strong> scored a first-half brace to send the <strong>Vancouver Whitecaps</strong> to their first-ever <strong>MLS Cup Final</strong>. Vancouver dominated <strong>San Diego FC</strong> from the opening whistle, effectively settling the match before halftime with an own goal by <strong>Pablo Sisniega</strong>, completing a commanding 3–0 lead.
          </p>
          <p>
            Despite San Diego pulling one back through <strong>Hirving ‘Chucky’ Lozano</strong>, Vancouver’s control and composure ensured a 3–1 victory and a historic first MLS Cup final for Jesper Sørensen’s side.
          </p>

          <h2 className="text-3xl font-bold">First-Half Dominance: White Strikes Twice</h2>
          <p>Vancouver’s opening goal came via <strong>Brian White</strong>, finishing from close range on the right side of the box after a pass from <strong>Andrés Cubas</strong>. Moments later, San Diego’s <strong>Pablo Sisniega</strong> inadvertently doubled the lead with an own goal, compounding the pressure on the expansion side.</p>
          <p>Before halftime, White struck again with a low finish inside the left post following a slick assist from <strong>Ali Ahmed</strong>, making it 3–0 and putting Vancouver firmly in control.</p>

          <h2 className="text-3xl font-bold">Second Half: San Diego Responds, But Red Card Ends Hopes</h2>
          <p>San Diego’s hopes were briefly rekindled when <strong>Hirving Lozano</strong> curled a right-footed shot from outside the box into the top corner, assisted by <strong>Anders Dreyer</strong>. However, any momentum quickly evaporated when <strong>Sisniega was sent off in the 79th minute</strong>, effectively ending San Diego’s chances.</p>

          <h2 className="text-3xl font-bold">Key Performers</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Brian White (Vancouver)</strong> – MVP, scoring both first-half goals. He now has 18 goals this season.</li>
            <li><strong>Thomas Muller (Vancouver)</strong> – Started and played 60 minutes, finishing with 0 shots and 82% passing accuracy.</li>
            <li><strong>Hirving Lozano (San Diego)</strong> – Subbed on late, scoring the team’s lone goal; would have been more influential if started.</li>
          </ul>

          <h2 className="text-3xl font-bold">Tactical Takeaways: Why Vancouver Deserved the Win</h2>
          <h3 className="text-2xl font-semibold">1. Vancouver Controlled the Tempo</h3>
          <p>High pressing, efficient passing, and wide positioning forced San Diego into mistakes, including the own goal.</p>

          <h3 className="text-2xl font-semibold">2. San Diego’s Approach Fell Short</h3>
          <p>The expansion side struggled under pressure and their tactical setup couldn’t cope with Vancouver’s intensity.</p>

          <h3 className="text-2xl font-semibold">3. Substitution Decisions Criticized</h3>
          <p>Not starting Lozano limited San Diego’s attacking threat and reduced options when trailing 3–0.</p>

          <h2 className="text-3xl font-bold">What This Means: MLS Cup Showdown Awaits</h2>
          <p>Vancouver Whitecaps will face <strong>Lionel Messi’s Inter Miami</strong> next Saturday in the <strong>MLS Cup Final</strong>, a marquee matchup between two clubs making their first appearance in the competition’s biggest game. For <strong>San Diego FC</strong>, reaching the Western Conference Final in their inaugural season remains a historic achievement.</p>

        </section>

        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
          <p>Published: November 29, 2025</p>
          <Link href="/blog" className="text-gray-500 hover:text-gray-800">Back to Blog</Link>
        </footer>

      </div>
    </article>
  );
}
