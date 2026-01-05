'use client';

import React from 'react';
import Link from 'next/link';

const InterMiamiSeattleBlog = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-3xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Inter Miami vs Seattle Sounders – Leagues Cup Final 2025
        </h1>

        <div className='w-full h-[400px] rounded-lg shadow-md overflow-hidden relative'>
          <img
            src='https://brila.net/wp-content/uploads/2025/08/Lionel-Messi.jpg'
            alt='Lionel Messi Inter Miami'
            className='w-full h-full object-cover object-center'
          />
        </div>

        <div className='mb-4 text-sm text-gray-600'>
          <p>By: US11 | August 30, 2025</p>
          <p className='mt-1 text-xs text-gray-400'>
            Image Credit: Carmen Mandato - Leagues Cup | MLS via Getty Images
          </p>
        </div>

        <div className='space-y-4 mb-15 text-[#020617] text-lg'>
          <p className='text-2xl font-semibold'>🎉 A Final That Promises Fireworks</p>
          <p>
            Sunday night, Lumen Field, Seattle – and yes, once again, all eyes are on one man: <strong>Lionel Messi</strong>.  
            At 38 years old, with legs that have carried him across the globe, he’s still the main attraction. Coming back from injury, Messi scored twice in the semifinal against Orlando, single-handedly turning the game around. It’s like he has a hidden “GOAT mode” switch.
          </p>

          <p>
            But it’s not just Messi. Alongside him are his old Barcelona friends – <strong>Suárez and Jordi Alba</strong> – making Inter Miami look like a mini-Barça on American soil. Since July: 9 wins, 3 draws, only 2 losses.
          </p>

          <p>
            On the other side: the <strong>Seattle Sounders</strong>. A club that refuses to play second fiddle. They already boast two MLS Cups, a Supporters’ Shield, four US Open Cups, and a CONCACAF Champions Cup. If they win the Leagues Cup, they’ll become the first MLS team to have literally won every major North American trophy.
          </p>

          <h2 className='text-xl font-semibold mt-6'>⚽ Why This Final Matters</h2>
          <ul className='list-disc list-inside ml-4'>
            <li>The winner goes directly to the Round of 16 in the <strong>2026 CONCACAF Champions Cup</strong>.</li>
            <li>Both teams are already qualified, but the final is about pride and legacy.</li>
            <li>The champion also earns a pathway to the <strong>2029 FIFA Club World Cup</strong>.</li>
            <li>And of course, bragging rights: “We beat Messi in a final” or “Messi carried us to another trophy.”</li>
          </ul>

          <h2 className='text-xl font-semibold mt-6'>🕗 When & Where to Watch?</h2>
          <p>
            <strong>Match:</strong> Seattle Sounders vs Inter Miami  
            <br />
            <strong>Date:</strong> Sunday, August 31, 2025  
            <br />
            <strong>Venue:</strong> Lumen Field, Seattle  
            <br />
            <strong>Kick-off:</strong> 8PM ET  
            <br />
            <strong>Watch:</strong> MLS Season Pass (Apple TV), TUDN, Univision
          </p>

          <div className='flex justify-center mt-6'>
            <a
              href='https://ticketnetwork.lusg.net/9L3653'
              target='_blank'
              className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-3 px-6 rounded-lg shadow-md'
            >
              🎟️ Get Tickets Here
            </a>
          </div>

          <p className='mt-8'>
            👉 In short: One side has Messi and pure magic. The other has a machine that crushes opponents.  
            Who’s lifting the trophy? This is the kind of final where there are no “easy” answers.
          </p>
        </div>

        <div className='text-center mt-10'>
          <p className='text-sm text-gray-600'>Follow the US11FC Blog for more relaxed takes, match previews, and soccer stories across the globe.</p>
          <p className='text-sm text-gray-600'>#InterMiami #Sounders #LeaguesCupFinal #Messi #US11</p>
        </div>
      </div>
    </div>
  );
};

export default InterMiamiSeattleBlog;
