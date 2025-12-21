'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function Top10MLS2025() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('✅ Link copied to clipboard!');
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Top 10 Things We Will Remember From the 2025 MLS Season'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  const items = [
    {
      id: 1,
      title: 'Inter Miami Finally Won MLS Cup',
      text: [
        "After years of waiting, pressure, and media attention, Inter Miami finally achieved what the project was launched for — winning the MLS Cup.",
        "It wasn’t a perfect season, but it was good enough. In a league where playoffs erase all differences, Miami found balance between individual quality and team structure.",
        "The title proved that MLS can carry a global project without losing sporting integrity."
      ]
    },
    {
      id: 2,
      title: 'Vancouver Whitecaps – A Season to Remember and Never Repeat',
      text: [
        "Few clubs had a more emotionally complex year than Vancouver. Owners put the club up for sale during the season, which seemed like the start of the end.",
        "Instead, the Whitecaps reached both the CONCACAF Champions Cup final and the MLS Cup final — and lost both.",
        "The result? A season that was historic and painful at the same time. Vancouver became a club that proved it can reach the end, but still doesn't know how to cross it."
      ]
    },
    {
      id: 3,
      title: 'Thomas Müller Marks the End of a European Era',
      text: [
        "Thomas Müller's arrival in Vancouver was not a marketing trick.",
        "It brought MLS a player with football intelligence, not just a name. Müller didn’t dominate physically, but his influence on game structure, young players, and Vancouver's attack was clear.",
        "MLS 2025 got another proof that the league can be the final stop for major careers without losing meaning."
      ]
    },
    {
      id: 4,
      title: 'Son Heung-min in LAFC – The Perfect Match',
      text: [
        "If there was a transfer that made sense from day one, it was Son to LAFC.",
        "His energy, verticality, and professionalism fit a club identity that balances results and spectacle.",
        "Son’s contribution elevated the team both on the field and in the league’s global profile."
      ]
    },
    {
  id: 5,
  title: 'Rodrigo de Paula Secures Inter Miami\'s Historic MLS Cup',
  text: [
    "The 2025 MLS season saw Inter Miami finally lift the MLS Cup after years of anticipation and pressure. Fans, media, and players all felt the weight of expectation.",
    "Rodrigo de Paula joined Miami mid-season and quickly became a pivotal figure in the squad. His creativity, vision, and calmness under pressure transformed the team’s attacking play.",
    "In the MLS Cup final, it was de Paula who delivered the decisive assist and scored the clutch goal that secured the championship. His performance wasn’t just a highlight — it was the defining moment of the season.",
    "This victory confirmed that MLS clubs can attract global talents who can make an immediate impact, and it cemented Inter Miami as a top contender for years to come.",
    "De Paula’s arrival proved that one strategic signing can change the entire trajectory of a season, turning potential into reality and dreams into history."
  ]
},
    {
      id: 6,
      title: 'Messi Extended – Closing the Circle',
      text: [
        "Lionel Messi's contract extension in Miami symbolically closed a chapter in MLS history.",
        "Messi became part of infrastructure, not just a growth catalyst.",
        "His decision to stay sent a message: MLS is now a league where you can finish a career at a high level, not just a marketing experiment."
      ]
    },
    {
      id: 7,
      title: 'San Diego – Almost Perfect Debut',
      text: [
        "San Diego FC’s debut season was a case study in MLS entry.",
        "First place in the Western Conference, clear football idea, and strong fan support — everything was ready for a fairy tale, except the ending.",
        "The loss in the Western Conference final to Vancouver was painful but didn’t diminish the fact that San Diego is a legitimate MLS club from day one."
      ]
    },
    {
      id: 8,
      title: 'LA Galaxy – Champions Fall',
      text: [
        "After the 2024 title, expectations were high. Reality was harsh.",
        "Galaxy had one of their worst seasons in modern history, with no clear identity or continuity.",
        "MLS again proved that reputation and history mean nothing without adaptation."
      ]
    },
    {
      id: 9,
      title: 'Playoffs Rewarded the Brave, Not the Best',
      text: [
        "As in many previous seasons, the playoff system erased months of consistency.",
        "The most stable teams didn’t always reach the furthest stage, but the tactically and mentally braver survived.",
        "MLS 2025 confirmed again: the regular season builds reputation, but playoffs write history."
      ]
    },
    {
      id: 10,
      title: 'MLS Crossed the Point of No Return',
      text: [
        "By the end of 2025, MLS is no longer a developing project but a stable, complex, and sometimes brutal ecosystem.",
        "Global stars, ambitious owners, and clubs chasing big dreams make this league a permanent fixture in world football.",
        "2025 will be remembered as the year MLS solidified its identity and entered a new era."
      ]
    }
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Top 10 Things We Will Remember From the 2025 MLS Season
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-12-05">December 5, 2025</time>
          </div>

          {/* SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" className="p-2 rounded-full bg-[#1877F2] text-white"><FaFacebookF size={18} /></a>
            <a href={twitterShare} target="_blank" className="p-2 rounded-full bg-black text-white"><FaTwitter size={18} /></a>
            <a href={whatsappShare} target="_blank" className="p-2 rounded-full bg-[#25D366] text-white"><FaWhatsapp size={18} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200"><FiCopy size={18} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="mb-8">
          <Image
            src="https://assets.goal.com/images/v3/getty-2202000448/crop/MM5DEMJZGI5DCMRTGM5G433XMU5DCMJYHIZDK===/GettyImages-2202000448.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="MLS 2025 overview"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover rounded-2xl"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Leonardo Fernandez 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="space-y-12">
          {items.map(item => (
            <div key={item.id}>
              <h2 className="text-2xl font-bold mb-3">{item.id}. {item.title}</h2>
              {item.text.map((para, index) => (
                <p key={index} className="text-lg leading-relaxed mb-2">{para}</p>
              ))}
            </div>
          ))}
        </section>

        {/* FOOTER */}
        <footer className="mt-14 border-t pt-6 flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 gap-4">
          <div>
            <p>Published: December 5, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-2">
            <Link href="/blog" className="hover:text-gray-900">Back to blog</Link>
          </div>
        </footer>

      </div>
    </article>
  );
}
