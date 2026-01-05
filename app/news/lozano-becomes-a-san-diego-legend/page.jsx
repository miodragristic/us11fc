import React from 'react';
import Link from 'next/link';

const ChuckyLozanoHero = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Chucky Lozano: San Diego’s Last-Minute Hero
        </h1>

        <img
          src='https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60' 
          alt='Hirving Chucky Lozano scoring for San Diego FC'
          className='w-full h-[400px] object-cover rounded-lg shadow-md'
        />

        <div className="mb-10 text-center text-sm text-gray-500">
        <div className="mt-2 text-sm text-gray-600">
            <span>By Mio Ristic | May 25, 2025</span>
          </div>
          <p>Creator: Francisco Vega 
| 
Credit: Getty Images
Copyright: 2025 Getty Images</p>
        </div>

        <div className='flex justify-center space-x-4 mt-4 mb-4'>
          <Link href='/teams/san-diego' target='_blank' className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
            San Diego FC
          </Link>
          <Link href='/teams/la-galaxy' target='_blank' className='bg-yellow-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg'>
            LA Galaxy
          </Link>
        </div>

        <div className='space-y-6 text-[#020617] text-lg mb-10'>
          <p>
            San Diego FC extended their unbeaten streak in thrilling fashion by defeating reigning MLS champions LA Galaxy with a last-gasp header from Hirving “Chucky” Lozano in the 95th minute.
          </p>

          <p>
            The match started evenly, with the Galaxy taking the lead through Diego Fagundez in the 40th minute, silencing the home crowd. But San Diego quickly responded as local talent Luca De La Torre scored his first home goal just one minute later, leveling the score.
          </p>

          <h2 className='text-xl font-semibold mt-8'>⚽ The Game-Winning Moment</h2>
          <p>
            The second half was a tense battle until a costly defensive error from LA Galaxy allowed Anders Dreyer to send a perfect cross to Lozano, who headed the ball into the bottom right corner with less than a minute left — sealing a 2-1 victory for San Diego.
          </p>

          <p>
            Lozano shared his feelings about his time with San Diego FC: <em>“I’m fully enjoying it here. I feel I’m working my best every day and giving my all. Hopefully, the fans will keep supporting and see my everyday work.”</em>
          </p>

          <h2 className='text-xl font-semibold mt-8'>⚠️ Post-Match Fan Violence</h2>
          <p>
            Unfortunately, the celebration was marred by fan altercations. San Diego head coach Mikey Varas condemned the violence, stating: <em>“There’s no place for violence in this sport. This is the beautiful game — it’s supposed to bring joy. Of course there’s passion, but we are gathering all the information.”</em>
          </p>

          <h2 className='text-xl font-semibold mt-8'>🔜 Looking Ahead</h2>
          <p>
            San Diego FC aims to continue their hot streak in the upcoming match against Seattle Sounders, while LA Galaxy remain in search of their first win this season.
          </p>
        </div>

        <h2 className='text-2xl sm:text-3xl font-semibold text-[#020617] mb-6'>
        Match Highlights Video
</h2>
<div className="flex justify-center mb-8">
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/O1oBc_K0ZZI"
    title="San Diego FC vs. LA Galaxy Highlights | MLS on FOX"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

        <p className='mb-4'>
          🎫 <a href="https://ticketnetwork.lusg.net/qzm7Eb" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
            Get your tickets for San Diego FC matches here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default ChuckyLozanoHero;
