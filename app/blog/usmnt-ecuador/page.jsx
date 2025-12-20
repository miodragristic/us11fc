'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTPochettinoBlog() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('A New Era for the USMNT Under Pochettino')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            A New Era for the USMNT Under Pochettino: Bold Tactics, New Faces, and a Clear Direction
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-10-08">October 8, 2025</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
              aria-label="Share on Facebook"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
              aria-label="Share on Twitter"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
              aria-label="Copy Link"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/blt024caa907a00f79e/balogun3.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="USMNT in action"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Photo creator: John Dorton/USSF 
Copyright: 2025 John Dorton/ISI Photos/USSF
          </figcaption>
        </figure>

        {/* CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>
            The United States men’s national soccer team (USMNT) is entering a new chapter. Since Mauricio Pochettino took over as head coach, the team looks more structured, aggressive, and tactically ambitious than in recent years. In a friendly match against Ecuador, the result itself may not have been historic — but the performance gave fans and analysts plenty to talk about.
          </p>
          <p>
            This was not the old “give the ball to Christian Pulisic and hope for magic” game plan. It was something much more intentional.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Starting XI vs Ecuador
          </h2>
          <p>
            <strong>GK:</strong> Matthew Freese<br />
            <strong>Defense:</strong> Chris Richards, Tim Ream, Mark McKenzie, Miles Robinson, Alex Freeman<br />
            <strong>Midfield:</strong> Aidan Morris, Cristian Roldan, Tanner Tessmann<br />
            <strong>Attack:</strong> Max Arfsten, Timothy Weah<br />
            <strong>Substitutes:</strong> Patrick Agyemang, Chris Brady, Brenden Aaronson, Patrick Schulte, Matt Turner, Cameron Carter-Vickers, James Sands
          </p>
          <p className="italic text-gray-500">Note: Christian Pulisic was not in the squad.</p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Tactical Shape: A Bold 3-4-3
          </h2>
          <p>
            Pochettino opted for a 3-4-3 formation, signaling a desire to control the game through width, intensity, and quick transitions. Deploying Max Arfsten and Timothy Weah in wide roles added pace and energy on the flanks.
          </p>
          <p>
            The team pressed aggressively and tried to build through the middle, but defensive transitions remained a vulnerability. Ecuador found space on the counter several times — something the USMNT must fix before facing tougher opponents.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Missing Stars, New Opportunities
          </h2>
          <p>
            With Pulisic and Antonee Robinson sidelined, this match forced Pochettino to rely on rotation players. Rather than being a setback, this is a golden opportunity to build squad depth. Young talents like Freeman and Arfsten gained valuable minutes under real pressure — something that could pay off in future competitions.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            A Clearer Identity Emerging
          </h2>
          <p>
            For years, USMNT often relied on individual brilliance rather than a cohesive tactical identity. Under Pochettino, that seems to be changing. The team looks younger, faster, and more willing to take risks. The pressing is more coordinated, the structure more defined, and the energy unmistakable.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            What’s Next for the USMNT
          </h2>
          <p>Upcoming matches against Australia, Paraguay, and Uruguay will provide a much bigger test. To take the next step, the team needs to:</p>
          <ul>
            <li>Improve defensive organization during transitions.</li>
            <li>Build stronger on-pitch chemistry.</li>
            <li>Reinforce attacking patterns with key players returning from injury.</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Final Thoughts
          </h2>
          <p>
            This wasn’t a historic win — but it felt like a turning point. With Pochettino at the helm, the USMNT is embracing a modern, proactive style of play. If the squad stays healthy and continues to grow tactically, this could be the most exciting era of American soccer in years.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: October 8, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
