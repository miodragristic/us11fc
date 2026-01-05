'use client';

import React from 'react';
import Link from 'next/link';

const InterMiamiSeattleRecap = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-3xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Seattle Runs Over Inter Miami: A Leagues Cup Night to Remember
        </h1>

        <div className='w-full h-[400px] rounded-lg shadow-md overflow-hidden relative mb-6'>
          <img
            src='https://cloudfront-us-east-1.images.arcpublishing.com/leadersgroup/UNPIXKTAEVBB3HJWDGSPYQFOMA.jpg'
            alt='Messi after Inter Miami loss'
            className='w-full h-full object-cover object-center'
          />
        </div>

        

        <div className='mb-4 text-sm text-gray-600'>
          <p>By: Mio Ristić | August 31, 2025</p>
          <p className='mt-1 text-xs text-gray-400'>
            Image Credit: Carmen Mandato – MLS via Getty Images | License: Getty Images
          </p>
        </div>

        <div className='space-y-4 mb-15 text-[#020617] text-lg'>
          <p className='text-2xl font-semibold'>⚡ Big Game, Big Crowd</p>
          <p>
            In front of almost <strong>70,000 fans</strong> at Lumen Field, the <strong>Seattle Sounders</strong> handed <strong>Inter Miami</strong> a heavy 3–0 loss to grab the <strong>2025 Leagues Cup</strong>. For Seattle, this wasn’t just another trophy — it was the missing piece in their collection, making them the first MLS team to win it all in North America.
          </p>

          <h2 className='text-xl font-semibold mt-6'>⚽ First Half: De Rosario Opens the Party</h2>
          <p>
            Miami rolled out Messi, Suárez, and company, but Seattle wasn’t impressed. In the 26th minute, <strong>Osaze De Rosario</strong> rose high to smash home an <strong>Alex Roldan</strong> cross, with <strong>Jesús Ferreira</strong> adding the clever touch before it. The stadium erupted — and Miami already looked shaky.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🔥 Second Half: Seattle Turns It Up</h2>
          <p>
            Miami came out swinging, but just couldn’t finish. <strong>Tadeo Allende</strong> missed a golden chance in the 60th minute, and it came back to haunt them. Then it was all Sounders: <strong>Roldan</strong> buried a penalty in the 82nd, and five minutes later, local favorite <strong>Paul Rothrock</strong> curled one in to make it 3–0. Game over.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🚨 Drama at the End</h2>
          <p>
            Instead of just handshakes, things got heated at the final whistle. Reports say <strong>Suárez spat on a Seattle staff member</strong>, sparking chaos. Miami coach <strong>Javier Mascherano</strong> brushed it off, but it’s definitely going to stir conversation.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🏆 Awards & Highlights</h2>
          <ul className='list-disc list-inside ml-4'>
            <li><strong>Man of the Match:</strong> Alex Roldan (1 goal, 2 assists)</li>
            <li><strong>Player of the Tournament:</strong> Pedro de la Vega</li>
            <li><strong>Best Goalkeeper:</strong> Andrew Thomas (2 clean sheets)</li>
          </ul>
          <p>
            Seattle outscored teams 15–2 across the tournament. That’s not just winning — that’s domination. With this trophy, they now have 4 U.S. Open Cups, 2 MLS Cups, 1 Supporters’ Shield, 1 Concacaf Champions Cup, and the Leagues Cup.
          </p>

          <h2 className='text-xl font-semibold mt-6'>📌 What It Means</h2>
          <p>
            This wasn’t just Messi vs. MLS. It was proof that a well-drilled team can outplay the biggest stars. Seattle showed the league — and the world — that sometimes, teamwork really does beat star power.
          </p>
        </div>

        {/* YouTube Video Embed */}
        <div className='w-full aspect-video rounded-lg overflow-hidden shadow-md mb-6'>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/PYfNULZJQGo'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>

        <div className='text-center mt-10'>
          <p className='text-sm text-gray-600'>Follow US11 for more recaps, reactions, and soccer stories from around the world.</p>
          <p className='text-sm text-gray-600'>#LeaguesCup #SeattleSounders #InterMiami #US11</p>
        </div>
      </div>
    </div>
  );
};

export default InterMiamiSeattleRecap;
