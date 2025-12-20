import React from 'react';

const USLFutureHero = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          USL Is Building the Future of American Soccer
        </h1>

        {/* Slika sa placeholderom i kreditima */}
        <div className="mb-10">
          <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm shadow-md">
          
            {/* Kad imaš sliku, zameni sa ovim: */}
            <img 
                src="https://the18.com/sites/default/files/feature-images/GettyImages-1258549217.jpg" 
                alt="USL Stadium or related" 
                className="w-full h-[400px] object-cover rounded-lg shadow-md" 
              />
          </div>

          <div className="mt-2 text-sm text-gray-600 text-center">
            <span>By Mio Ristic</span>
            <p>Creator: Icon Sportswire 
Credit: Icon Sportswire via Getty Images</p>
          </div>
        </div>

        <div className='space-y-6 text-[#020617] text-lg mb-10'>
          <p>
            In today’s sports world, where headlines, hype, and short-term trends often dominate,
            real staying power comes from a deeper strategy — vision, patience, and long-term investment.
            The United Soccer League (USL) understands this well and is quietly shaping the future of
            American soccer through infrastructure, community connection, and sustainable growth.
          </p>

          <h2 className='text-xl font-semibold mt-8'>
            ⚽ A Stadium Is More Than a Matchday Venue
          </h2>
          <p>
            For USL, a stadium isn’t just a place where matches are played — it’s a community anchor and
            an economic catalyst. Over the next five years, billions of dollars are projected to be invested
            into developing stadium districts, turning them into full-scale soccer neighborhoods filled with
            restaurants, businesses, and gathering spaces.
          </p>
          <p>
            Fans don’t just show up for the final whistle — they come to connect, celebrate, and experience
            their city. These aren’t just venues — they’re destinations.
          </p>

          <h2 className='text-xl font-semibold mt-8'>
            🏡 Partnerships That Go Beyond the Game
          </h2>
          <p>
            USL is working hand-in-hand with local governments, private investors, and grassroots
            organizations to create something more than just a league. This is city-building through sport —
            a model rooted in local pride, urban development, and long-term economic impact.
          </p>
          <p>
            Many USL clubs own their stadiums and facilities, which means they’re building real, appreciating
            assets — not just renting space. That ownership model provides security, stability, and leverage
            for future growth.
          </p>

          <h2 className='text-xl font-semibold mt-8'>
            🧢 Developing Players, Shaping the League of the Future
          </h2>
          <p>
            Beyond bricks and mortar, USL is investing heavily in player development — with elite training
            facilities and a direct pathway from youth academies to professional teams. It’s a complete soccer
            ecosystem designed to discover and nurture homegrown talent.
          </p>
          <p>
            Perhaps most exciting is the planned three-tier league structure with promotion and relegation —
            a bold and unprecedented move in North American sports. It’s a system that fosters competition,
            ambition, and opportunity across every level.
          </p>

          <h2 className='text-xl font-semibold mt-8'>
            🌍 What This Means for the Future of Soccer
          </h2>
          <p>
            USL is proving that soccer can be a driver of meaningful, lasting growth. Not just through goals
            and trophies — but by creating places people love, building teams that are part of the local identity,
            and fostering pride that stretches far beyond the pitch.
          </p>
          <p>
            This is not just an alternative to the MLS — it’s a different model altogether. One that emphasizes roots
            over trends, community over spectacle, and sustainability over flash.
          </p>

          <h2 className='text-xl font-semibold mt-8'>
            📣 Final Word
          </h2>
          <p>
            While others chase the headlines, USL is building a foundation — brick by brick, club by club,
            city by city. It may not always grab the spotlight, but its impact will be felt for generations.
          </p>
         

    
        </div>
      </div>
    </div>
  );
};

export default USLFutureHero;
