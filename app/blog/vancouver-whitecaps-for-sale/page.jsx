import React from 'react';

const VancouverWhitecapsFC = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
     

      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Vancouver Whitecaps: A Club for Sale, Currently First in the West
        </h1>
        <img
            src='https://assets.goal.com/images/v3/getty-2209348788/crop/MM5DINZZGU5DENRZG45G433XMU5DAORSGUYA====/GettyImages-2209348788.jpg?auto=webp&format=pjpg&width=3840&quality=60'
            alt='Vancouver Whitecaps banner'
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
            style={{ objectPosition: 'center 20%' }}
          />
        <div className='mb-4'>
          <div className='mt-2 text-sm text-gray-600'>
            <span>By: Mio Ristić | April 2025</span>
          </div>
          <p>
          License details
Creator: Derek Cain 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </p>
        </div>
        <div className="flex justify-center">
          {/* Optional link for tickets */}
        </div>
        <p className='text-center'>Tags</p>
        <div className='flex justify-center space-x-4 mt-4 mb-4'>
          <a href='/vancouver' target='_blank' className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg'>
            Vancouver Whitecaps
          </a>
        </div>

        <p className='mb-4'>
          Vancouver Whitecaps FC has been on an incredible run in the 2025 MLS season, sitting at the top of the Western Conference with **20 points** from 9 matches. The team’s form has been exceptional, boasting **6 wins**, **1 loss**, and **2 draws**. They currently have a **goal difference of +11** with **17 goals scored** and only **6 conceded**.
        </p>

        <p className='mb-4'>
          Despite their impressive start, the club is currently **on sale**, creating a unique tension as they lead the pack. The sale process was confirmed publicly back in **2023**, with **Greg Kerfoot**, the current owner, signaling his intent to sell his stake. This has raised questions about the potential impact of new ownership on the club’s future.
        </p>

        <h2 className='text-2xl sm:text-3xl font-semibold text-[#020617] mb-6'>
          What Does the Sale Mean for Vancouver Whitecaps?
        </h2>
        <p className='mb-4'>
          While the team is performing at its best, there is significant uncertainty regarding its future, as the **sale of the club** could potentially change its direction. The prospect of fresh investment could provide an opportunity for the club to grow further, both on and off the pitch.
        </p>

        <p className='mb-4'>
          However, the sale process has not been without challenges. Several buyers have shown interest, including **multinational investment firms** and **individual investors**. Previous attempts at selling the club have seen discussions with **international buyers**, particularly from the **Middle East** and **Asia**, though no deal has been finalized yet.
        </p>

        <h2 className='text-2xl sm:text-3xl font-semibold text-[#020617] mb-6'>
          Key Questions for the Future of Vancouver Whitecaps
        </h2>
        <p className='mb-4'>
          As the club sits at the top of the table, many are wondering what the future holds. Will the new owners focus on strengthening the roster, building better facilities, or perhaps bring in new coaching strategies? The questions surrounding the club’s sale only add to the excitement of their current form.
        </p>

        <h2 className='text-2xl sm:text-3xl font-semibold text-[#020617] mb-6'>
          A Historic Season with Uncertainty Ahead
        </h2>
        <p className='mb-4'>
          Vancouver Whitecaps are proving themselves to be a top contender in the MLS in 2025. However, the uncertainty around the sale could change everything. For now, the team is focused on maintaining their form, and the next few months will likely reveal more about who will take over this successful club.
        </p>

        <p className='mb-4'>
          🎫 <a href="https://ticketnetwork.lusg.net/BnRR1J" target="_blank" className="text-yellow-600 hover:text-yellow-800 font-semibold">Click here to buy your tickets!</a>
        </p>

        <h2 className='text-2xl sm:text-3xl font-semibold text-[#020617] mb-6'>
          Quick Recap
        </h2>
        <ul className='list-disc list-inside mb-4'>
          <li>Vancouver Whitecaps currently top the Western Conference in MLS</li>
          <li>Record: 6 wins, 1 loss, 2 draws, with 20 points</li>
          <li>Sale of the club confirmed since 2023</li>
          <li>Potential interest from multinational investors and buyers from the Middle East and Asia</li>
          <li>The club’s future is uncertain, but they remain focused on success on the pitch</li>
        </ul>

        <div className='text-center mt-8 mb-8'>
          <p className='text-sm text-gray-600'>Follow all Vancouver Whitecaps news and highlights</p>
          <p className='text-sm text-gray-600'>#VancouverWhitecaps #MLS2025</p>
        </div>
      </div>
    </div>
  );
};

export default VancouverWhitecapsFC;
