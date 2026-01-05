'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

export default function InterMiamiNYCFCRecap() {
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
  )}&text=${encodeURIComponent("Inter Miami vs NYCFC: Allende Hat-Trick Sends Miami to MLS Cup Final")}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* ===== HEADER ===== */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Inter Miami vs NYCFC: Allende Hat-Trick Sends Miami to MLS Cup Final in Dominant 5–1 Win
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
            src="https://assets.goal.com/images/v3/getty-2218021380/crop/MM5DINJRGI5DENJTHA5G433XMU5DAORSGM2Q====/GettyImages-2218021380.jpg?width=1400&upscale=true"
            alt="Inter Miami vs NYCFC Eastern Conference Final"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Carmen Mandato | Credit: Getty Images | Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* ===== ARTICLE BODY ===== */}
        <section className="prose prose-lg max-w-none space-y-10 leading-relaxed">

          <h2 className="text-3xl font-bold">Inter Miami Deliver Their Most Complete Performance of the Season</h2>
          <p>
            Inter Miami booked their first-ever trip to the MLS Cup Final with a commanding 5–1 win over NYCFC, powered by a
            <strong> Tadeo Allende hat-trick</strong> and a masterful midfield display from <strong>Lionel Messi</strong>. 
            From the opening whistle, Miami showcased the difference between a clinical contender and a side struggling under pressure.
          </p>

          <h2 className="text-3xl font-bold">First-Half Momentum: Allende Sets the Tone Early</h2>
          <p>Miami pressed high, attacked with pace, and quickly took control of the match.</p>

          <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Key First-Half Moments</h3>
            <ul className="space-y-2">
              <li><strong>14’ —</strong> Tadeo Allende opens the scoring after slipping behind the NYCFC back line.</li>
              <li><strong>23’ —</strong> Allende doubles the lead with a powerful header from a Jordi Alba cross.</li>
              <li><strong>37’ —</strong> Justin Haak pulls one back for NYCFC, but Miami maintained control.</li>
            </ul>
          </div>

          <p>Even with NYCFC’s brief spark, Miami’s superior tempo, spacing, and attacking patterns established early dominance.</p>

          <h2 className="text-3xl font-bold">Second Half: Messi Orchestrates the Midfield</h2>
          <p>The turning point came when <strong>Lionel Messi</strong> began controlling the rhythm, dictating play, and creating opportunities.</p>
          <p><strong>67’ —</strong> Mateo Silvetti scores Miami’s third after a brilliant Messi assist slicing through NYCFC’s defensive block.</p>
          <p>NYCFC struggled to adjust to Miami’s increased tempo and width, leaving gaps that the hosts exploited repeatedly.</p>

          <h2 className="text-3xl font-bold">Closing Act: Segovia Strikes & Allende Completes Hat-Trick</h2>
          <p><strong>83’ —</strong> Telasco Segovia scores Miami’s fourth after an incisive pass from Jordi Alba.</p>
          <p><strong>89’ —</strong> Tadeo Allende completes his hat-trick, becoming the standout performer of the Eastern Conference Final.</p>
          <p>The atmosphere shifted to celebration as Inter Miami cruised toward their first MLS Cup Final.</p>

          <h2 className="text-3xl font-bold">Match Stats: Inter Miami vs NYCFC</h2>
          <div className="bg-gray-100 p-5 rounded-xl shadow-sm">
            <table className="w-full text-left text-sm md:text-base">
              <tbody>
                <tr><td className="font-semibold py-2">Shots:</td><td className="py-2">Miami 11 — NYCFC 6</td></tr>
                <tr><td className="font-semibold py-2">Shots on Target:</td><td className="py-2">Miami 6 — NYCFC 4</td></tr>
                <tr><td className="font-semibold py-2">Possession:</td><td className="py-2">Miami 49% — NYCFC 51%</td></tr>
                <tr><td className="font-semibold py-2">Corners:</td><td className="py-2">Miami 5 — NYCFC 2</td></tr>
                <tr><td className="font-semibold py-2">Fouls:</td><td className="py-2">Miami 22 — NYCFC 19</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold">Tactical Takeaways: Why Miami Deserved the Win</h2>
          <h3 className="text-2xl font-semibold">1. Allende’s Movement Was Unplayable</h3>
          <p>His diagonal runs consistently disrupted NYCFC’s defensive shape and created high-value chances.</p>

          <h3 className="text-2xl font-semibold">2. Messi Controlled the Tempo</h3>
          <p>Messi’s precise passing and positional awareness allowed Miami to dominate the second half.</p>

          <h3 className="text-2xl font-semibold">3. NYCFC Struggled Defensively</h3>
          <p>Poor spacing and slow recovery runs in transition proved costly throughout the match.</p>

          <h2 className="text-3xl font-bold">What This Means for Miami: MLS Cup Bound</h2>
          <p>With a dominant 5–1 victory, Inter Miami advance to the MLS Cup Final for the first time in club history — looking balanced, confident, and ready for the biggest match in American soccer.</p>

        </section>

        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
          <p>Published: November 29, 2025</p>
          <Link href="/blog" className="text-gray-500 hover:text-gray-800">Back to Blog</Link>
        </footer>

      </div>
    </article>
  );
}
