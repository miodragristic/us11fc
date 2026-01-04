'use client';

import React from 'react';
import Image from 'next/image';

// ScrollToTopButton komponenta
const ScrollToTopButton = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      className="cursor-pointer text-white ml-10 bg-[#020617] group border-2 border-transparent px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-[#020617] hover:text-[#020617] rounded-lg transition duration-500 ease-in-out transform hover:scale-105"
    >
      Back to top
    </button>
  );
};

const items = [
  {
    id: 1,
    title: 'Player Pathways',
    imageUrl:
      'https://images.pexels.com/photos/3886066/pexels-photo-3886066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // link: 'https://amzn.to/3XBDhy7',
  },
  {
    id: 2,
    title: 'Coaches’ Spotlight',
    imageUrl:
      'https://images.unsplash.com/photo-1585757318177-0570a997dc3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // link: 'https://amzn.to/4i7Zb3G',
  },
];

export default function SupplementsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
      <h1 className="text-4xl sm:text-7xl font-bold text-[#020617] mb-4">
        Academy Insider
      </h1>

      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7">
        {items.map((item) => (
          <div
            key={item.id}
            className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="relative overflow-hidden bg-gray-200 h-48">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-contain group-hover:scale-105 transition duration-400"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold group-hover:text-blue-600 transition duration-300">
                {item.title}
              </h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>

      <section className="mb-8 mt-10">
  <h2 className="text-2xl sm:text-4xl font-bold text-[#020617] mb-4">
    US11 — More Than a Game
  </h2>

  <p className="text-lg text-[#020617] mb-4">
    US11 is a community built on a deep love for football and a clear mission:
    to support young talents, coaches, and everyone who truly lives the game.
  </p>

  <p className="text-lg text-[#020617] mb-4">
    We all know that the United States is not a perfect place to begin and develop
    a football career in the same way countries like Spain, Italy, or England are.
    The system is different, often complex, and sometimes expensive. That reality
    cannot be ignored — and that is exactly why US11 exists.
  </p>

  <p className="text-lg text-[#020617] mb-4">
    Our goal is to help young players understand the American soccer landscape and
    connect with academies, football schools, and coaches that truly match their
    level, ambitions, and personality. At the same time, we give visibility to
    academies and coaches who are doing meaningful, high-quality work and genuinely
    care about player development.
  </p>

  <h3 className="text-xl font-semibold text-[#020617] mb-2">
    Honest Guidance, Real Information
  </h3>

  <p className="text-lg text-[#020617] mb-4">
    US11 is not an agency, and we do not sell dreams. We provide knowledge, real
    experiences, in-depth interviews, analysis, and honest stories that help
    players, parents, and coaches make informed decisions.
  </p>

  <p className="text-lg text-[#020617] mb-4">
    Talent exists everywhere — but the right pathway must be understood.
    US11 is here to be the bridge between potential and opportunity.
  </p>
</section>


      <ScrollToTopButton />
    </div>
  );
}
