import React from 'react';
import Link from 'next/link';



const LAGalaxyVictoryBlog = () => {
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
                <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
                    LA Galaxy End Winless Streak with 2-0 Victory Over Real Salt Lake
                </h1>

                <div className="mb-4">
                    <img
                        src="https://energynews.rs/sites/energynews.rs/files/styles/large/public/content/images/2025-06/shutterstock_2499244741.jpg.webp?itok=djdfZ-lO"
                        alt="LA Galaxy vs Real Salt Lake"
                        className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    />
                    <div className="mt-2 text-sm text-gray-600">
                        <span>
                            By: Mio Ristić | US11 | June 4, 2025 | Creator: Ringo Chiu 
| 
Credit: Shutterstock
Copyright: Copyright 2024 Ringo Chiu/Shutterstock
                        </span>
                        
                    </div>
                    <div className='flex justify-center space-x-4 mt-4 mb-4'>
                    <Link href='/teams/la-galaxy' target='_blank' className='bg-yellow-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg'>
            LA Galaxy
          </Link>
          <Link href='/teams/real-salt-lake' target='_blank' className='bg-blue-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg'>
            Real Salt Lake
          </Link>
          
        </div>
                    
                </div>
                

                <p className="mb-4">
                    After 16 matches without a win, LA Galaxy finally gave their fans something to cheer about. In front of over 23,000 supporters at Dignity Health Sports Park, the Galaxy defeated Real Salt Lake 2-0, snapping the worst start to a season in the club’s MLS history.
                </p>

                <p className="mb-4">
                    The breakthrough came early in the 17th minute. Lucas Sanabria opened his MLS account with a clinical finish, capitalizing on a perfectly timed through ball from Matheus Nascimento. The goal not only gave Galaxy the lead but also a much-needed injection of belief.
                </p>

                <p className="mb-4">
                    The hosts doubled their advantage in the 55th minute. Joseph Paintsil showed great composure in front of goal, slotting home after a smart setup from Gabriel Pec. It was a well-worked move that highlighted the attacking potential the Galaxy have struggled to unlock this season.
                </p>

                <p className="mb-4">
                    Equally important was the performance of goalkeeper Novak Mićović. The young Serbian produced four crucial saves and displayed maturity beyond his years, securing LA’s first clean sheet of the season and anchoring a defense that had often looked vulnerable in previous outings.
                </p>

                <h2 className="text-3xl font-semibold text-[#020617] mb-6">⚽ A Turning Point or a One-Off?</h2>
                <p className="mb-4">
                    While the win isn’t enough to lift the Galaxy off the bottom of the standings just yet, it may signal a turning point. More than just three points, this result restores confidence and shows that this team still has fight left in it.
                </p>
                <p className="mb-4">
                    With the streak finally broken, the question now becomes: can LA Galaxy build on this and mount a serious comeback?
                </p>



                <h2 className="text-3xl font-semibold text-[#020617] mb-6">📊 Key Match Stats</h2>
                <ul className="mb-6 list-disc list-inside text-gray-700">
                    <li><strong>Goals:</strong> Sanabria (17'), Paintsil (55')</li>
                    <li><strong>Assists:</strong> Nascimento, Pec</li>
                    <li><strong>Clean Sheet:</strong> Mićović (4 saves)</li>
                    <li><strong>Attendance:</strong> 23,000+</li>
                    <li><strong>Galaxy's first win of the season</strong></li>
                    <li><strong>End of 16-match winless run</strong></li>
                </ul>

                <div className="flex justify-center mb-8">
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/tLwStEIZxN8"
    title="Inter Miami vs Columbus Crew najboljii momenti"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

                 
            </div>
        </div>
    );
};

export default LAGalaxyVictoryBlog;
