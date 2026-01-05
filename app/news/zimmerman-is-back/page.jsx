import React from 'react';
import Link from 'next/link';

const ZimmermanIsBack = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Walker Zimmerman Is Back
        </h1>

        <img
          src='https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju' 
          alt='Walker Zimmerman'
          className='w-full h-[400px] object-cover rounded-lg shadow-md'
        />

        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Brett Carlsen | Credit: Getty Images | Copyright: 2021 Getty Images</p>
        </div>

        <div className='flex justify-center space-x-4 mt-4 mb-4'>
          <Link href='/teams/nashville-sc' target='_blank' className='bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg'>
            Nashville SC
          </Link>
        </div>

        <div className='space-y-6 text-[#020617] text-lg mb-10'>
          <p>
            After a stretch without one of their most important players, Walker Zimmerman finally returned to the pitch — and Nashville SC looked all the better for it.
          </p>

          <p>
            In Saturday’s match against <strong>Toronto FC</strong>, Zimmerman made his long-awaited return in the <strong>73rd minute</strong>, coming off the bench to help secure a <strong>2-1 win</strong>. It wasn’t a clean sheet, but it was a crucial step forward: Nashville simply look more secure when their No. 25 is on the field.
          </p>

          <h2 className='text-xl font-semibold mt-8'>💪 Leadership You Can’t Teach</h2>
          <p>
            Zimmerman’s return brought composure and clarity to a Nashville backline that had been struggling in recent weeks. With him in charge, the defense looked better positioned, more disciplined, and more confident in duels.
          </p>

          <p>
            These stats don’t tell the whole story — Zimmerman’s impact goes beyond the box score. His communication, experience, and ability to organize the backline instantly lift the entire squad.
          </p>

          <h2 className='text-xl font-semibold mt-8'>🔁 Tactical Stability</h2>
          <p>
            With Zimmerman back in the mix, Nashville appeared more comfortable in a structured shape. His ability to read the game allowed the team to stay compact without retreating too deep — something they struggled with in his absence.
          </p>

          <h2 className='text-xl font-semibold mt-8'>Why Zimmerman Wasn’t Called Up for Gold Cup 2025</h2>
          <p>
            Despite his importance to Nashville SC, Zimmerman was not included in the final USMNT roster for the 2025 CONCACAF Gold Cup. Coming off a recent concussion that sidelined him for nearly two months, he wasn’t fully match-fit for the intense tournament schedule.
          </p>

          <p>
            Head coach Mauricio Pochettino prioritized players who were at peak fitness and ready to compete at the highest level. Though Zimmerman wasn’t called up this time, he remains a key leader for Nashville and a strong candidate for future USMNT squads.
          </p>

          <h2 className='text-xl font-semibold mt-8'>📎 Bottom Line</h2>
          <p>
            This was more than just one good performance. It was a reminder:
            <strong> When Walker Zimmerman plays, Nashville SC competes.</strong>
          </p>
        </div>

        <p className='mb-4'>
          🎫 <a href="https://ticketnetwork.lusg.net/K0ODJv" target="_blank" className="text-yellow-600 hover:text-yellow-800 font-semibold">Click here to buy your tickets!</a>
        </p>

      </div>
    </div>
  );
};

export default ZimmermanIsBack;
