'use client';

import React from 'react';
import Link from 'next/link';

const AthleticClubBoiseBlog = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-3xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Athletic Club Boise Set to Debut in USL League One
        </h1>

        <div className='w-full h-[400px] rounded-lg shadow-md overflow-hidden relative'>
          <img
            src='https://cdn1.sportngin.com/attachments/photo/6128-211830812/Crest-Reveal-Video-Thumbnail_large.png'
            alt='Athletic Club Boise Logo'
            className='w-full h-full object-cover object-center'
          />
        </div>

        <div className='mb-4 text-sm text-gray-600'>
          <p>By: Mio Ristić | August 26, 2025</p>
          <p className='mt-1 text-xs text-gray-400'>
            Image Credit: Athletic Club Boise | Source: ACBoise.com
          </p>
        </div>
        {/* <div className='flex justify-center space-x-4 mt-4 mb-4'>
          <a href='/uslleagueone' target='_blank' className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg'>
            USL League One
          </a>
        </div> */}

        <div className='space-y-4 mb-15 text-[#020617] text-lg'>
          <p className='text-2xl font-semibold'>⚽ A New Era of Soccer in Idaho</p>
          <p>
            Fans in Idaho have a reason to celebrate as <strong>Athletic Club Boise</strong> prepares to make its professional debut in <strong>USL League One</strong> in Spring 2026. The club brings together local pride, cultural identity, and an ambitious vision for soccer in the region.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🏟️ Stadium & Infrastructure</h2>
          <p>
            The team will play at <strong>Expo Idaho / Les Bois Park</strong>, which will seat 6,225 spectators with potential expansion up to 11,000. Fans can expect modern facilities, family-friendly areas, and top-notch athlete support.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🎯 Goals for the First Season</h2>
          <ul className='list-disc list-inside ml-4'>
            <li>Develop local and young talent</li>
            <li>Compete at the top of USL League One</li>
            <li>Build a strong connection with the Idaho community</li>
          </ul>

          <h2 className='text-xl font-semibold mt-6'>👥 Ownership & Support</h2>
          <p>
            Led by <strong>Brad Stith, Steve Patterson, David Wali, and Bill Taylor</strong> with <strong>Kasey Keller</strong> as investor and mentor, the club also partners with <strong>Saint Alphonsus Health System</strong> to provide professional medical and performance support for players.
          </p>

    
          <h2 className='text-xl font-semibold mt-6'>📹 Exclusive Interview</h2>
<p>
  Watch an exclusive interview with the club’s Vice President, <strong>Jeremy Fishman</strong>. In this discussion, he emphasizes that <strong>Athletic Club Boise</strong> is not just a team—it represents the entire city and state of Idaho. Jeremy shares the club’s commitment to showcasing their region with pride and dedication, making sure Boise shines on the national soccer stage: 
  <a href='https://www.youtube.com/watch?v=rWHIfZ5-y5k' target='_blank' className='text-blue-600 underline ml-1'>
    Watch the Interview
  </a>
</p>

          <h2 className='text-xl font-semibold mt-6'>🌟 Community & Fans</h2>
          <p>
            With over 4,000 season ticket deposits in just a few days, fan excitement is high. Athletic Club Boise is committed to youth clinics, community events, and fostering a lifelong love of soccer in Idaho.
          </p>

          <p>
            <strong>Get ready to be part of Idaho’s first professional men’s soccer season!</strong>
          </p>
        </div>

        <div className='text-center mt-10'>
          <p className='text-sm text-gray-600'>Follow USL League One updates, team news, and exclusive content from Athletic Club Boise.</p>
          <p className='text-sm text-gray-600'>#AthleticClubBoise #USLLeagueOne #IdahoSoccer #NewEra #US11</p>
        </div>
      </div>
    </div>
  );
};

export default AthleticClubBoiseBlog;
