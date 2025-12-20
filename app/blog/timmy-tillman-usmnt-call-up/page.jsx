'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function TimmyTillmanCallUp() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Timmy Tillman called up to USMNT as Pochettino adjusts roster')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Timmy Tillman Called Up to USMNT as Pochettino Adjusts Roster Ahead of Paraguay and Uruguay Friendlies
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-12">November 12, 2025</time>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/usa-national-team" className="text-xs bg-blue-800 text-white px-3 py-1 rounded-full hover:bg-blue-900 transition">#USMNT</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-8">
          <Image
            src="https://assets.goal.com/images/v3/bltf367b68cbbc7f98e/poch2.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Timmy Tillman called up to USMNT"
            width={1024}
            height={520}
            className="w-full h-[520px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: John Dorton/USSF 
Copyright: 2025 John Dorton/ISI Photos/USSF
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            U.S. Men’s National Team head coach <strong>Mauricio Pochettino</strong> has made a small but significant adjustment to his roster ahead of the November friendlies against <strong>Paraguay</strong> and <strong>Uruguay</strong>, both of which have already secured qualification for the 2026 FIFA World Cup. Due to injuries to <strong>Tyler Adams</strong> (Bournemouth) and <strong>Sean Zawadzki</strong> (Columbus Crew), <strong>Timmy Tillman</strong> of Los Angeles FC has been added to the squad.
          </p>

          <h2>Tillman Returns to the USMNT Picture</h2>
          <p>
            Tillman, 26, was born in Germany and switched his international allegiance to the United States in 2023. He has one prior cap for the national team and won the <em>2023 U.S. Open Cup</em> with LAFC. Tillman has been in strong form this season while his club pushes for a spot in the MLS Cup Final, and his call-up arrives at a crucial moment in the final international window before the 2026 World Cup preparations accelerate.
          </p>

          <h2>Roster Stability Despite Injuries</h2>
          <p>
            Despite the absences of Adams and Zawadzki, Pochettino has preserved the squad’s overall structure. The 24-man roster includes <strong>11 MLS-based players</strong>, combining proven European-based internationals with in-form domestic talents.
          </p>

          <h3>Final USMNT Roster for November Friendlies</h3>
          <p><strong>Goalkeepers (4):</strong> Roman Celentano (FC Cincinnati), Matt Freese (NYCFC), Jonathan Klinsmann (Cesena/Italy), Patrick Schulte (Columbus Crew)</p>

          <p><strong>Defenders (9):</strong> Max Arfsten (Columbus Crew), Sergiño Dest (PSV/Netherlands), Alex Freeman (Orlando City), Mark McKenzie (Toulouse/France), Tim Ream (Charlotte FC), Miles Robinson (FC Cincinnati), Joe Scally (Borussia Mönchengladbach/Germany), John Tolkin (Holstein Kiel/Germany), Auston Trusty (Celtic/Scotland)</p>

          <p><strong>Midfielders (6):</strong> Sebastian Berhalter (Vancouver Whitecaps), Aidan Morris (Middlesbrough/England), Gio Reyna (Borussia Mönchengladbach/Germany), Cristian Roldan (Seattle Sounders), Tanner Tessmann (Lyon/France), Timmy Tillman (LAFC)</p>

          <p><strong>Forwards (5):</strong> Brenden Aaronson (Leeds United/England), Folarin Balogun (AS Monaco/France), Diego Luna (Real Salt Lake), Ricardo Pepi (PSV/Netherlands), Haji Wright (Coventry City/England)</p>

          <h2>Strong Tests Ahead: Paraguay and Uruguay</h2>
          <p>
            These fixtures serve as the final matches of 2025 for the USMNT and are important tune-ups ahead of the 2026 cycle.
          </p>

          <p>
            <strong>November 15:</strong> USA vs. Paraguay — Subaru Park, Chester, Pennsylvania (5:00 PM ET) {' '}
            {/* <a href="https://www.ticketmaster.com/search?q=USA%20vs%20Paraguay" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Buy tickets</a> */}
          </p>

          <p>
            <strong>November 18:</strong> USA vs. Uruguay — Raymond James Stadium, Tampa, Florida (7:00 PM ET) {' '}
            {/* <a href="https://www.ticketmaster.com/search?q=USA%20vs%20Uruguay" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold">Buy tickets</a> */}
          </p>

          <h2>Pochettino Building Chemistry and Consistency</h2>
          <p>
            Since taking charge of the national team, Pochettino has stressed the importance of continuity and a competitive mentality. The current roster mixes emerging starters like Freeman, Luna, and Morris with experienced internationals such as Dest, Ream, Robinson, and Aaronson.
          </p>

          <blockquote>
            “These are exactly the type of games we want — against world-class opponents, in front of our home fans, to test our chemistry and resilience,” Pochettino said earlier this month.
          </blockquote>

          <h2>Conclusion</h2>
          <p>
            With limited roster changes, the United States closes out 2025 focused on constructing a cohesive and competitive squad for 2026. Timmy Tillman’s inclusion strengthens midfield depth and reflects the competitive environment Pochettino is cultivating within the team.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: November 12, 2025</p>
            <p>Author: Mio Ristić</p>
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
