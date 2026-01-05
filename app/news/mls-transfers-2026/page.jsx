'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

export default function MLSTransfers2026() {
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
    "MLS Transfers 2026: Early Moves and Updates"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Transfers 2026: Early Moves and Updates
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-05">January 5, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2248300236/crop/MM5DIMJRGE5DEMZRGI5G433XMU5DAORSGE2A====/GettyImages-2248300236.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="MLS Transfers 2026"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Sean M. Haffey 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>The 2026 MLS transfer window has officially begun. While activity is still early, several clubs have already made key acquisitions and roster changes.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Confirmed Transfers / Signings</h2>
          <ul>
            <li><strong>Inter Miami CF:</strong> Facundo Mura (D, free agent, Jan 3), Dayne St. Clair (GK, free agent, Jan 4)</li>
            <li><strong>Toronto FC:</strong> Walker Zimmerman (D, free agent, Jan 2)</li>
            <li><strong>Orlando City SC:</strong> Braian Ojeda (M, trade from Real Salt Lake, Jan 2)</li>
            <li><strong>D.C. United:</strong> Gabriel Segal (F, Re-Entry Draft, Jan 4)</li>
            <li><strong>Philadelphia Union:</strong> Kai Wagner (D, transfer to Birmingham City, Jan 2)</li>
            <li><strong>CF Montréal:</strong> Emil Gazdov (GK, loan to St. Pauli, Jan 4)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">Overview</h2>
          <p>These early moves mainly include free agents, Re-Entry Draft picks, and trades within MLS. The main transfer window will see more high-profile signings and international transfers as preseason approaches.</p>

          <p>Stay tuned for continuous updates throughout the 2026 MLS transfer window.</p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: January 5, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
          </div>
        </footer>

      </div>
    </article>
  );
}
