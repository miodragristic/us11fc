import React from 'react';
import Link from 'next/link';

const SanDiegoBrawl = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Chaos in California: LA Galaxy vs San Diego FC Turns Violent
        </h1>

        <img
          src='https://assets.goal.com/images/v3/getty-2212164120/crop/MM5DIOBWGU5DENZTG45G433XMU5DAORSGUZQ====/GettyImages-2212164120.jpg?auto=webp&format=pjpg&width=3840&quality=60'
          alt='Galaxy vs San Diego FC Brawl'
          className='w-full h-[400px] object-cover rounded-lg shadow-md'
        />

        <div className="mb-10 text-center text-sm text-gray-500">
          <p>
            Creator: Sean M. Haffey | Credit: Getty Images | Copyright: 2025 Getty Images
          </p>
        </div>

        <div className='flex justify-center space-x-4 mt-4 mb-4'>
          <Link href='/teams/san-diego' className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg'>
            San Diego FC
          </Link>
          <Link href='/teams/la-galaxy' className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg'>
            LA Galaxy
          </Link>
        </div>

        <div className='space-y-6 text-[#020617] text-lg mb-10'>
          <p>
            What should have been a festive night at Snapdragon Stadium turned into a moment of infamy for Major League Soccer. After the final whistle blew in a tense showdown between LA Galaxy and new rivals San Diego FC, violence erupted in the stands.
          </p>

          <p>
            Videos circulating online show fans from both sides clashing in the bleachers. Authorities in riot gear were deployed, and the situation escalated to the point of full-on chaos. According to San Diego State University Police, one individual sustained minor injuries unrelated to the fighting. No arrests have been made as of now.
          </p>

          <h2 className='text-xl font-semibold mt-8'>😡 Boiling Point for Galaxy Fans</h2>
          <p>
            With a winless streak extending through 15 matches, frustrations among Galaxy supporters have reached a fever pitch. The 2-1 defeat to expansion side San Diego FC only added salt to the wound — their second loss this season to the newcomers.
          </p>

          <h2 className='text-xl font-semibold mt-8'>🏟️ Safety Concerns on the Rise</h2>
          <p>
            The violence raises questions about the stadium’s security protocols and MLS’s growing pains as rivalries heat up. Snapdragon Stadium, located at San Diego State University, is expected to host high-stakes matches — but is it ready to handle the tension?
          </p>

          <h2 className='text-xl font-semibold mt-8'>🤝 Clubs Issue Joint Statement</h2>
          <p>
            In a rare act of unity, both clubs released a joint statement condemning the violence: “Soccer is meant to unite. What happened in the stands does not reflect our clubs, our players, or our true fans.”
          </p>

          <h2 className='text-xl font-semibold mt-8'>📎 Final Thoughts</h2>
          <p>
            Rivalries fuel the fire of football, but the line between passion and violence must never blur. Saturday night’s events serve as a reminder that fan behavior is as much a part of the game’s integrity as anything on the pitch.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/mvIxpYILwCA"
            title="San Diego FC vs LA Galaxy Brawl"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SanDiegoBrawl;
