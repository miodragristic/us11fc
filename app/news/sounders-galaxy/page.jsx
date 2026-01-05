import React from 'react';

const SoundersGalaxyBlog = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Sounders FC Back in MLS Action: Ferreira Breaks Records in 2-2 Draw with LA Galaxy
        </h1>

        <img
          src="https://assets.goal.com/images/v3/getty-2202323865/crop/MM5DGOBZHE5DEMJZGM5G433XMU5DAORSGAZQ====/GettyImages-2202323865.jpg?auto=webp&format=pjpg&width=3840&quality=60"
          alt='Seattle Sounders vs LA Galaxy'
          className='w-full h-[400px] object-cover rounded-lg shadow-md'
        />

        <div className='mb-4 text-sm text-gray-600'>
          <p>By: US11 FC | September 14, 2025</p>
          <p className='mt-1 text-xs text-gray-400'>
            Creator: Steph Chambers | Credit: Getty Images | Copyright: 2025 Getty Images
          </p>
        </div>

        <div className='space-y-4 mb-10 text-[#020617] text-lg'>
          <p>
            Seattle Sounders FC returned to MLS play following the international break with a thrilling 2-2 draw against LA Galaxy at Lumen Field. The match featured record-breaking moments, spectacular goals, and the return of key players from injury.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🔝 Ferreira Makes History</h2>
          <p>
            Jesús Ferreira wasted no time leaving his mark, scoring in the 5th minute to set a new MLS record: 57 regular-season goals before turning 25, surpassing Landon Donovan. His goal came courtesy of assists from Danny Musovski and Alex Roldan, highlighting his lethal combination of precision and teamwork.
          </p>

          <h2 className='text-xl font-semibold mt-6'>⚡ Musovski Leads the Charge</h2>
          <p>
            Danny Musovski continued his exceptional season with a goal in the 41st minute, assisted by Paul Rothrock and Obed Vargas. His 16th goal of the year puts him just three shy of breaking the club’s single-season scoring record, cementing his status as a key offensive threat.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🔄 Returning Stars Make an Impact</h2>
          <p>
            Albert Rusnák returned from a hamstring injury in the 59th minute, while Jordan Morris came on in the 80th, marking his first appearance since a shoulder injury in July. Their presence added depth and energy to the team in the final stages of the match.
          </p>

          <h2 className='text-xl font-semibold mt-6'>📊 Match Summary</h2>
          <ul className='list-disc list-inside'>
            <li>Final Score: Seattle Sounders FC 2 – 2 LA Galaxy</li>
            <li>Attendance: 31,952, sunny 73°F</li>
            <li>Shots: Seattle 19 | LA Galaxy 15</li>
            <li>Shots on Goal: Seattle 9 | LA Galaxy 6</li>
            <li>Corners: Seattle 8 | LA Galaxy 10</li>
          </ul>

          <h2 className='text-xl font-semibold mt-6'>🎯 Key Stats</h2>
          <ul className='list-disc list-inside'>
            <li>Jesús Ferreira: Goal (5’), MLS record breaker</li>
            <li>Danny Musovski: Goal (41’)</li>
            <li>Assists: Musovski & Roldan (Ferreira), Rothrock & Vargas (Musovski)</li>
          </ul>

          <h2 className='text-xl font-semibold mt-6'>🏁 Final Thoughts</h2>
          <p>
            The draw showcased both the brilliance and resilience of Sounders FC. Ferreira’s historic goal, Musovski’s continued scoring streak, and the return of Rusnák and Morris give Seattle momentum heading into their next match against Inter Miami CF. The team continues to demonstrate that it can perform under pressure and maintain its position in the Western Conference standings.
          </p>
        </div>

        <div className='text-center mt-10'>
          <p className='text-sm text-gray-600'>Follow more MLS updates and analysis at US11</p>
          <p className='text-sm text-gray-600'>#MLS #SeattleSounders #JesúsFerreira #DannyMusovski #LAGalaxy</p>
        </div>
      </div>
    </div>
  );
};

export default SoundersGalaxyBlog;
