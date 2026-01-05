'use client';

import React from 'react';
import Link from 'next/link';

const DePaulInterMiamiBlog = () => {
  const items = [
    {
      id: 1,
      title: "Men's Inter Miami CF De Paul adidas Light Pink 2025 Euforia Authentic Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-rodrigo-de-paul-blue-inter-miami-cf-2025-third-authentic-player-jersey_ss5_p-203341920+u-hz6whmwcoouxfaitjwqa+v-rjggk5zbdhk8ux5xbzgq.jpg?_hv=2&w=400',
      link: 'https://mlsstore.i8h2.net/aOzQ2o',
    },
  ];

  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-3xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Rodrigo De Paul Joins Inter Miami: Is This the MLS Dream Team?
        </h1>

        <div className="w-full h-[400px] rounded-lg shadow-md overflow-hidden relative">
          <img
            src="https://assets.goal.com/images/v3/getty-2227792192/crop/MM5DCOBUGA5DCMBTGU5G433XMU5DCMRRGU5DENBX/GettyImages-2227792192.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Rodrigo De Paul Inter Miami"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className='mb-4 text-sm text-gray-600'>
          <p>By: Mio Ristić | August 3, 2025</p>
          <p className='mt-1 text-xs text-gray-400'>
            Creator: Megan Briggs | Credit: Getty Images | Copyright: 2025 Getty Images
          </p>
        </div>

        <div className="mt-4 mb-10 text-center">
          <Link href="/teams/inter-miami">
            <button className="bg-pink-500 hover:bg-pink-600 text-black font-bold py-2 px-4 rounded-lg cursor-pointer">
              Visit Inter Miami
            </button>
          </Link>
        </div>

        <div className='space-y-4 mb-15 text-[#020617] text-lg'>
          <p className='text-2xl font-semibold'>🔥 Inter Miami's Star Power Just Leveled Up</p>
          <p>
            When <strong>Rodrigo De Paul</strong> signed with <strong>Inter Miami</strong>, it wasn't just another high-profile move — it was a bold signal that the club is building what might be the most star-studded team in <strong>MLS history</strong>. With <strong>Lionel Messi</strong>, <strong>Sergio Busquets</strong>, and <strong>Jordi Alba</strong> already on the roster, De Paul's arrival makes Inter Miami look more like a <em>global dream team</em> than an MLS side.
          </p>

          {/* Shop Messi Jersey Section */}
        <div className='w-full bg-white py-16 px-4 md:px-0'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-4xl sm:text-5xl font-bold text-[#020617] mb-10'>
              Shop De Paul's Merchandise
            </h1>
            <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 justify-items-center'>
              {items.map((item) => (
                <div
                  key={item.id}
                  className='bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-sm hover:shadow-xl transition'
                >
                  <img
                    className='w-full h-80 object-cover object-center'
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <div className='p-6 text-left'>
                    <h3 className='font-semibold text-lg text-[#020617] mb-2'>{item.title}</h3>
                    <p className='text-gray-600 mb-4'>{item.price}</p>
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition'
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

          <h2 className='text-xl font-semibold mt-6'>🌍 Why De Paul Chose Miami</h2>
          <p>
            At just 30 years old, De Paul is still in his prime. Coming from <strong>Atletico Madrid</strong>, one of Europe's elite clubs, he had several options across Europe. But he chose MLS — more specifically, he chose to join his longtime Argentina teammates in South Florida. The atmosphere, the freedom of MLS play, and the opportunity to lead a project alongside Messi made the decision easier.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🎯 What He Brings to the Team</h2>
          <ul className='list-disc list-inside ml-4'>
            <li>Elite experience from La Liga and the World Cup</li>
            <li>High work rate, passing range, and leadership</li>
            <li>Creativity and confidence to thrive in open MLS play</li>
          </ul>

          <h2 className='text-xl font-semibold mt-6'>🚀 Inter Miami's Ambitions Just Got Real</h2>
          <p>
            With this roster, Inter Miami is not just looking to win — they're aiming to <strong>dominate</strong>. This could be a turning point for the league, as global eyes turn to MLS not just as a retirement league, but as a serious destination for prime-time talent.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🌱 A Golden Opportunity for Young Players</h2>
          <p>
            Younger and homegrown players on the roster now have the chance to learn directly from some of the best in the world. That mentorship could elevate their development in ways rarely seen in American soccer history.
          </p>

          <p>
            <strong>Rodrigo De Paul's move to Inter Miami is more than a signing. It’s a message. MLS is evolving — and fast.</strong>
          </p>
        </div>

        <div className='text-center mt-10'>
          <p className='text-sm text-gray-600'>Follow US11 for the latest MLS news, drops, and player updates.</p>
          <p className='text-sm text-gray-600'>#InterMiami #RodrigoDePaul #MLS #Messi #DreamTeam #US11</p>
        </div>

        

      </div>
    </div>
  );
};

export default DePaulInterMiamiBlog;
