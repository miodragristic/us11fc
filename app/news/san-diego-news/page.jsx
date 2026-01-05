import React from 'react';
import Link from 'next/link';

const SanDiegoBlog = () => {
    return (
        <div className='w-full min-h-screen bg-white'>
            <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-8 mt-16 lg:mt-10'>
                    San Diego: A New MLS Team Ready for Big Challenges
                    
                </h1>
                <div className='mb-4'>
                    <img 
                        src='https://assets.goal.com/images/v3/getty-2202758631/crop/MM5DGNZXGI5DEMJSGI5G433XMU5DAORRHE3A====/GettyImages-2202758631.jpg?auto=webp&format=pjpg&width=3840&quality=60'
                        alt='San Diego' 
                        className='w-full h-[400px] object-cover rounded-lg shadow-md' 
                    />
                    <div className="mt-2 text-sm text-gray-600">
                        <span>By Mio Ristic | Dec 24, 2024
                        Creator: Sean M. Haffey 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
                        </span>
                    </div>
                    <div className='mt-4 text-center'>
                        <Link href="/SanDiego">
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                                Visit San Diego
                            </button>
                        </Link>
                    </div>
                </div>

                <h2 className='text-3xl font-semibold text-[#020617] mb-12'>
                    Hirving Lozano: The Star and Face of the Club
                </h2>
                <p className='mb-4'>
                    Although the club is new and still searching for its identity, it has already made a big move by signing Hirving Lozano as a Designated Player (DP). Lozano, known as a legend of Napoli and PSV, brings significant experience and recognition to the team. His arrival not only reflects the club's ambitions but also demonstrates a strategic approach to attracting the Mexican community in San Diego, which makes up a significant part of the local population.
                </p>
                <p className='mb-4'>
                    Lozano will be the leader on the field, and expectations are high—he is tasked with passing on his extensive experience to younger players and helping the team achieve its first successes in the league.
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Coach and Roster: A Young Team with Great Potential
                </h3>
                <p className='mb-4'>
                    Mikey Varas has been chosen as the head coach, known for his work with the youth teams of the US national team. Although he lacks experience as a head coach in the MLS, his knowledge of American soccer and talent development could be crucial for building the team.
                </p>
                <p className='mb-4'>
                    San Diego's roster includes young and promising players, as well as several experienced internationals:
                </p>
                <ul className='list-disc list-inside mb-4'>
                    <li>Duran Ferree (GK) - currently on loan at Nordsjælland until January 2025.</li>
                    <li>Paddy McNair (DF) - on loan from West Bromwich Albion.</li>
                    <li>Hamady Diop (DF) and Jasper Löffelsend (DF) - young talents with great potential.</li>
                    <li>Aníbal Godoy (MF) - an experienced midfielder from Panama.</li>
                    <li>Tomás Ángel (FW) - a promising striker from Colombia.</li>
                </ul>

                <h3 className='text-2xl font-semibold text-[#020617] mb-7'>
                    Conclusion
                </h3>
                <p className='mb-4'>
                    San Diego is entering the MLS with ambitions to become not only competitive but also a recognizable team. Given the strong support of the local community and the signing of international stars like Lozano, the future of this club looks bright. The first matches will show how prepared they are to face the challenges of the highest level of American soccer.
                </p>
            </div>
        </div>
    );
};

export default SanDiegoBlog;
