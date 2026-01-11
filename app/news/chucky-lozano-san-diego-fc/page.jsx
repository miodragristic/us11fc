'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ChuckyLozano2026() {
  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Chucky Lozano Will Not Be Part of San Diego FC Sporting Plans
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-05">January 10, 2026</time>
          </div>
        </header>

        {/* FEATURE IMAGE */}
<figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
  <img
    src="https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    alt="Hirving Chucky Lozano scoring for San Diego FC"
    className="w-full h-[400px] object-cover rounded-lg shadow-md"
  />
  <figcaption className="mt-2 text-center text-sm text-gray-500">
   
    <p className="mt-1">
      Creator: Francisco Vega | Credit: Getty Images | Copyright: 2025 Getty Images
    </p>
  </figcaption>
</figure>

        {/* ARTICLE CONTENT */}
<section className="prose prose-lg max-w-none mb-8 leading-relaxed space-y-6">
  <p>
    San Diego FC has confirmed that winger Hirving “Chucky” Lozano will not be included in the club’s sporting plans moving forward, despite being the team’s second-leading scorer last season. The decision comes after discussions involving club ownership, leadership, and head coach Mikey Varas.
  </p>

  <p>
    Lozano joined San Diego in June 2024 from Eredivisie powerhouse PSV Eindhoven, signing a reported $12 million pre-contract. In his debut season, the 30-year-old winger tallied 11 goals and 11 assists in 34 appearances, helping the newcomers set club records for points (63) and wins (19) during their historic expansion campaign.
  </p>

  <p>
    However, Lozano was suspended for San Diego’s final regular-season match and MLS Cup Playoffs debut against the Portland Timbers due to team disciplinary reasons. He returned to score in Game 2 of the Best-of-3 series against Portland, as well as in the Western Conference Final loss to Vancouver Whitecaps FC.
  </p>

  <p>
    “We really appreciate Hirving’s contributions and what he was able to contribute last year,” Heaps said. “But as the season went on, from style of play, as well as environment, we feel like it’s best for both parties to find a new solution.”
  </p>

  <p>
    Lozano, a 2025 MLS All-Star, was among the league’s highest-paid players last year, with over $7.6 million in guaranteed compensation.
  </p>

  <p>
    “We all respect him for the player that he is,” Varas added. “Ultimately, it’s just not the right fit, and when it’s not the right fit, it’s no one’s fault. It's making sure that we set him up as best as possible to help him arrive at the 2026 FIFA World Cup because we do want what’s best for him. Most importantly, this is what we think is best for the team, in the short-term and long-term.”
  </p>

  <p>
    If Lozano formally departs, San Diego would gain Designated Player roster flexibility, while Danish international Anders Dreyer, the 2025 MLS Newcomer of the Year and runner-up in the Landon Donovan MLS MVP voting, would take on a bigger role in the team. Dreyer contributed 38 goals and assists (19/19) in the regular season.
  </p>

  <p>
    San Diego’s 2026 MLS campaign kicks off on February 21 against CF Montréal, following Concacaf Champions Cup Round One fixtures against Pumas UNAM on February 3 and 10.
  </p>

  <p>
    “No one’s bigger than the club, no one’s bigger than the city. That includes me,” Varas said. “We’re here to win. But how we win and who we win with matters. The decision was made across the entire club, from leadership all the way up to ownership. Everybody’s on the same page. This is the best decision for the team in both the short-term and long-term.”
  </p>
</section>

{/* FOOTER */}
<footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
  <div className="text-sm text-gray-600">
    <p>Published: January 10, 2026</p>
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
