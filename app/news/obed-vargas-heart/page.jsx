import React from 'react';
import Link from 'next/link';

const ObedVargasBlog = () => {
    return (
        <div className='w-full min-h-screen bg-white'>
            <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-8 '>
                    Obed Vargas: The Future of MLS
                </h1>
                <div className='mb-3'>
                    <img 
                        src='https://sports.mynorthwest.com/wp-content/uploads/2024/04/Obed-Vargas-plays-for-the-Seattle-Sounders-ball-on-ground-Getty-900.jpg'
                        alt='Obed Vargas - Seattle Sounders' 
                        className='w-full h-[400px] object-cover rounded-lg shadow-md' 
                    />
                    <div className="mt-2 text-sm text-gray-600">
                        <span>By Mio Ristic | May 31, 2025 | Creator: Steph Chambers 
| 
Credit: Getty Images
Copyright: 2024 Getty Images</span>
                    </div>
                    <div className='mt-4 text-center flex justify-center gap-4'>
    <Link href="/teams/seattle-sounders">
        <button className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg cursor-pointer'>
            Seattle Sounders FC
        </button>
    </Link>
    
    <Link href="/teams/mexico-national-team">
        <button className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg cursor-pointer'>
            Mexico
        </button>
    </Link>
</div>
                </div>

                <h2 className='text-3xl font-semibold text-[#020617] mb-12'>
                    Rising Star from Alaska to Club World Cup
                </h2>
                <p className='mb-4'>
                    Obed Vargas, born in 2005 in Alaska to Mexican parents, began his football journey with Cook Inlet SC. He credits the club with helping him chase his dream in the frozen north. His talent was quickly recognized by Seattle Sounders FC, a club known for investing in homegrown youth talent.
                </p>
                <p className='mb-4'>
                    At just 15 years old, Vargas became the youngest player to ever debut for Seattle’s first team. He soon became a regular in midfield and one of the most talked-about young players in Major League Soccer (MLS).
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Dual National Identity and International Decision
                </h3>
                <p className='mb-4'>
                    Although he represented the United States U-20 team in 2022, Vargas made an emotional decision to switch and represent Mexico internationally. He expressed that, while raised in the U.S., his heart belongs to Mexico—an identity deeply rooted in his family.
                </p>
                <p className='mb-4'>
                    His debut for Mexico was a proud moment, fulfilling a childhood dream not only for himself but also for his family.
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Ready for the FIFA Club World Cup
                </h3>
                <p className='mb-4'>
                    Obed’s journey is far from over. Seattle Sounders are set to play in the FIFA Club World Cup 2025, where they’ll face Atlético de Madrid — the very club Vargas has supported since childhood. This matchup is more than just a game; it's a dream come true for the young midfielder and a potential gateway to European football.
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Let the Talent Breathe
                </h3>
                <p className='mb-4'>
                    Despite his early success, it’s important not to rush Vargas' development. He’s just 19, and his journey is only beginning. He symbolizes a shift in MLS—one where clubs like Seattle prioritize development over importing stars nearing retirement.
                </p>
                <p className='mb-4'>
                    Vargas is proof that American soccer can produce elite talent. Seattle Sounders have set an example: you don’t have to buy stars — you can build them.
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-7'>
                    Conclusion
                </h3>
                <p className='mb-4'>
                    From Alaska to the world stage, Obed Vargas represents a new era of multicultural, homegrown talent in MLS. His story is only beginning, and the best is yet to come. Whether he stays in MLS or makes the jump to Europe, one thing is clear — Obed Vargas is a name we’ll be hearing for years to come.
                </p>
            </div>
        </div>
    );
};

export default ObedVargasBlog;
