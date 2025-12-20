'use client';

import React from 'react';
import Link from 'next/link';

const MullerVancouverBlog = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-3xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Thomas Müller to Vancouver Whitecaps?
        </h1>

        <div className='w-full h-[400px] rounded-lg shadow-md overflow-hidden relative'>
          <img
            src='https://cdn.vox-cdn.com/uploads/chorus_asset/file/25539754/2160081112.jpg'
            alt='Thomas Müller Vancouver Whitecaps Rumor'
            className='w-full h-full object-cover object-center'
          />
        </div>

        <div className='mb-4 text-sm text-gray-600'>
          <p>By: Mio Ristić | August 3, 2025</p>
          <p className='mt-1 text-xs text-gray-400'>
            Creator: Qian Jun/MB Media | Credit: Getty Images | Copyright: 2024 Qian Jun/MB Media
          </p>
        </div>
        <div className='flex justify-center space-x-4 mt-4 mb-4'>
          <a href='/vancouver' target='_blank' className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg'>
            Vancouver Whitecaps
          </a>
        </div>
         

        <div className='space-y-4 mb-15 text-[#020617] text-lg'>
          <p className='text-2xl font-semibold'>🇨🇦 A Shockwave in Canadian Soccer?</p>
          <p>
            Rumors swirling around <strong>Thomas Müller</strong> potentially joining the <strong>Vancouver Whitecaps</strong> have fans and pundits alike scratching their heads—and getting excited. While no official confirmation has been given, several outlets have reported that there is legitimate interest from the MLS side in bringing the Bayern Munich legend to Canada.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🤔 Why Vancouver?</h2>
          <p>
            On the surface, Müller doesn’t seem like a typical MLS signing—he's still a key piece at Bayern. But the idea of moving to a relaxed, emerging football market and helping grow the game in North America may appeal to the veteran forward. Vancouver’s scenic lifestyle and growing football infrastructure could offer a perfect late-career adventure.
          </p>

          <h2 className='text-xl font-semibold mt-6'>📊 The Numbers Game</h2>
          <p>
            Müller is still producing at a high level, making this move less about "retirement" and more about <strong>legacy-building</strong>. He’s a leader on and off the pitch, and Vancouver could use that kind of personality to elevate their locker room—and global image.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🎯 What He Would Bring</h2>
          <ul className='list-disc list-inside ml-4'>
            <li>Over a decade of Champions League experience</li>
            <li>World Cup winner and proven clutch performer</li>
            <li>Unmatched football IQ and versatility</li>
          </ul>

          <h2 className='text-xl font-semibold mt-6'>🌎 What This Means for MLS</h2>
          <p>
            If Müller joins, it’s not just a win for Vancouver—it’s another massive W for the <strong>MLS brand</strong>. It’s further proof that even Europe’s most established players see the league as a serious, exciting destination.
          </p>

          <p>
            <strong>Could Thomas Müller actually suit up for the Whitecaps?</strong> It may sound like a dream, but with the way MLS is growing, it just might come true.
          </p>
        </div>

        <div className='text-center mt-10'>
          <p className='text-sm text-gray-600'>Follow US11 for the latest MLS transfer news, player rumors, and exclusive updates.</p>
          <p className='text-sm text-gray-600'>#ThomasMuller #VancouverWhitecaps #MLS #TransferRumors #US11</p>
        </div>
      </div>
    </div>
  );
};

export default MullerVancouverBlog;
