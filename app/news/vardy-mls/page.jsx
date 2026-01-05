import React from 'react';
import Link from 'next/link';

const JamieVardyMLSBlog = () => {
  return (
    <div className="w-full min-h-screen bg-white">
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
          Jamie Vardy & MLS Rumors: Why a Move Looks Less Likely
        </h1>
        <div className='mb-4'>
          <img
            src='https://assets.goal.com/images/v3/blt441143863bcbc649/2.jpg?auto=webp&format=pjpg&width=1920&quality=60'
            alt='Jamie Vardy'
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
            style={{ objectPosition: 'center 30%' }}
          />
          <div className='mt-2 text-sm text-gray-600'>
            <span>By: Mio Ristić | June 2025 | Creator: Alex Pantling 
            Copyright: 2025 Getty Images</span>
          </div>
        </div>

        <p className='text-center'>Tags</p>
        <div className='flex justify-center space-x-4 mt-4 mb-4'>
          
        
      <Link href="/teams/charlotte">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">
      Charlotte
    </button>

      </Link>
    </div>
        <p className='mb-4'>
          As always, when a popular European football star is linked with a move to MLS, rumors spread quickly and fans from all over get excited. This time, it's Jamie Vardy’s name in the spotlight. However, the excitement might be premature.
        </p>
        <p className='mb-4'>
          After the initial wave of speculation, we've taken a step back to evaluate things more calmly. So, is Vardy still realistically heading to MLS? Short answer: unlikely. But could it still happen? Technically, yes.
        </p>

        <h2 className='text-2xl sm:text-3xl font-semibold text-[#020617] mb-6'>
          Glasgow Rangers – The Most Likely Destination
        </h2>
        <p className='mb-4'>
          One of the strongest links points to Rangers FC. The Scottish giants offer Vardy something MLS clubs currently can’t: a realistic chance at silverware and European football. Staying in the UK, even in Scotland, would also minimize life disruption.
        </p>
        <p className='mb-4'>
          Rangers are a massive club with consistent title ambitions. If Vardy is focused more on legacy and success than financial offers, this move makes far more sense than any American adventure.
        </p>

        <h2 className='text-2xl sm:text-3xl font-semibold text-[#020617] mb-6'>
          Other Clubs In The Mix
        </h2>
        <ul className='list-disc list-inside mb-4'>
          <li>Valencia CF (LaLiga)</li>
          <li>Crystal Palace (Premier League)</li>
          <li>Wrexham AFC (League One)</li>
        </ul>
        <p className='mb-4'>
          While all of these clubs have shown interest, most of them present less convincing sporting projects. Valencia is a big name, but finished 12th in LaLiga – not exactly a title contender. Crystal Palace and Wrexham, though intriguing, don't seem like ideal fits for this stage of Vardy’s career.
        </p>

        <h2 className='text-2xl sm:text-3xl font-semibold text-[#020617] mb-6'>
          Charlotte FC & The MLS Angle
        </h2>
        <p className='mb-4'>
          Goal.com previously reported that Charlotte FC manager Dean Smith (who briefly coached Vardy at Leicester) attempted to bring him to the U.S. The discussions were serious enough to attract media attention, but nothing materialized.
        </p>
        <p className='mb-4'>
          New York Red Bulls were also mentioned in earlier reports, though interest has seemingly cooled off in recent weeks.
        </p>

        <h2 className='text-2xl sm:text-3xl font-semibold text-[#020617] mb-6'>
          Final Verdict
        </h2>
        <p className='mb-4'>
          A Vardy move to MLS now appears more like wishful thinking than a developing reality. While the league would surely benefit from his arrival, the practical path forward for the veteran striker may well be staying in Europe, especially with Rangers pushing hard.
        </p>

        <p className='mb-8 font-semibold italic text-[#047857]'>
          Vardy to MLS? A dream still alive — but fading fast.
        </p>

        <div className='text-center mt-8 mb-8'>
          <p className='text-sm text-gray-600'>Follow US11 for exclusive transfer stories and analysis.</p>
          <p className='text-sm text-gray-600'>#VardyWatch #MLS2025 #RangersFC</p>
        </div>
      </div>
    </div>
  );
};

export default JamieVardyMLSBlog;
