import React from 'react'; 
  

const Imga = () => {
    return (
        <div className='w-full min-h-screen bg-white'>
           

            {/* Blog Content */}
            <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-8 mt-16 lg:mt-10'>
                    MLS in FC25
                </h1>
                <div className='mb-4'>
                    <img 
                        src='https://drop-assets.ea.com/images/1BY2V24NDqyjYKlDV8mJrx/ff63d00bb5bf24ad0c1b87adcd0e2771/EA_FC25_Standard_KeyArt_16-9_3840x2160.jpg?im=AspectCrop=(16,9),xPosition=0.5384114583333334,yPosition=0.538425925925926&q=85&w=1280' 
                        alt='FC25 Key Art' 
                        className='w-full h-[400px] object-cover rounded-lg shadow-md' 
                        style={{ maxHeight: '400px', objectFit: 'cover' }} 
                    />
                    {/* Author and Date */}
                    <div className="mt-2 text-sm text-gray-600">
                        <span>Mio Ristic | Dec 24, 2024</span>
                    </div>
                    {/* "Buy on Amazon" Button */}
                    <div className='mt-4 text-center'>
                        <a href="https://amzn.to/3QtvVIP" target="_blank" rel="noopener noreferrer">
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                                Buy on Amazon
                            </button>
                        </a>
                    </div>
                </div>

                {/* MLS Clubs Overview */}
                <h2 className='text-3xl font-semibold text-[#020617] mb-12'>
                Top 5 MLS Clubs in FC25
                </h2>
                <p className='mb-4'>
                    The MLS in FC25 features a variety of teams with their own strengths and weaknesses. Some of the top clubs include:
                </p>
                <div className='space-y-4'>
                    <h3 className='text-2xl font-semibold text-[#020617] mb-4'>1. Inter Miami CF</h3>
                    <p>It’s no surprise that Inter Miami CF takes the top spot, and that’s largely thanks to the arrival of Lionel Messi! With an incredible rating of 88, Messi is the highest-rated player in the MLS. Combine that with the talents of Sergio Busquets (81) and Jordi Alba (80), and you’ve got a powerhouse team. Inter Miami has become a must-play club in FC25, whether you’re a seasoned pro or just starting out. Their mix of experience and skill makes them a top contender in any match.</p>

                    <h3 className='text-2xl font-semibold text-[#020617] mb-4'>2. LAFC</h3>
                    <p>LAFC is another team dominating the MLS in FC25. With Olivier Giroud (83) leading the charge up front and a strong supporting cast including Denis Bouanga (80) and Hugo Lloris (79) in goal, this team is built to compete. LAFC’s balance across attack, midfield, and defense makes them one of the most well-rounded clubs in the game. If you’re looking for a team with depth and versatility, LAFC is a great choice.</p>

                    <h3 className='text-2xl font-semibold text-[#020617] mb-4'>3. LA Galaxy</h3>
                    <p>LA Galaxy remains one of the most well-known clubs in MLS, and their strength in FC25 comes from a mix of experience and youth. Riqui Puig (80) is the key midfield playmaker, while new forward Gabriel Pec (76) adds extra creativity in attack. In defense, Martín Cáceres (74) brings veteran leadership. The biggest addition, however, is Marco Reus, whose technical ability and vision make Galaxy an even more dangerous team. LA Galaxy is a great choice for players who enjoy technical football and controlling the game.</p>

                    <h3 className='text-2xl font-semibold text-[#020617] mb-4'>4. FC Cincinnati</h3>
                    <p>FC Cincinnati is making waves with an exciting roster led by Luciano Acosta (81). Known for his playmaking ability, Acosta is the heart of this team. Supporting him are Pavel Bucha (74) and Matt Miazga (73), who bring stability to the midfield and defense. Cincinnati’s rise in the MLS is reflected in their strong ratings in FC25, making them a great pick for players looking to dominate with a rising star team.</p>

                    <h3 className='text-2xl font-semibold text-[#020617] mb-7'>5. St. Louis City</h3>
                    <p>Rounding out our top 5 is St. Louis CITY SC. With Roman Bürki (78) as their reliable goalkeeper and Eduard Löwen (75) commanding the midfield, this team has both defensive solidity and creative flair. João Klauss (74) provides a strong attacking option, making St. Louis a formidable opponent in any match. For those who love playing with underdogs and proving their skills, St. Louis is a fantastic choice.</p>
                </div>

                {/* Player Rankings */}
                <h2 className='text-3xl font-semibold text-[#020617] mb-7 mt-10'>Top 10 players in MLS in FC25</h2>
                <p className='mb-4'>
                    Top 10 players in MLS in FC25:
                </p>
                <ul className='space-y-2'>
                    <li><a href="/messi"><strong>Lionel Messi</strong></a> – 88 OVR, RW, <a href="/inter">Inter Miami CF</a></li>
                    <li><a href="/giroud"><strong>Olivier Giroud</strong></a> – 83 OVR, ST, <a href="/lafc">LAFC</a></li>
                    <li><a href="/suarez"><strong>Luis Suárez</strong></a> – 82 OVR, ST, <a href="/inter">Inter Miami CF</a></li>
                    <li><a href="/acosta"><strong>Luciano Acosta</strong></a> – 81 OVR, CAM, <a href="/cincinnati">FC Cincinnati</a></li>
                    <li><a href="/busquets"><strong>Sergio Busquets</strong></a> – 81 OVR, CDM, <a href="/inter">Inter Miami CF</a></li>
                    <li><a href="/reus"><strong>Marco Reus</strong></a> – 81 OVR, ST, <a href="/lagalaxy">LA Galaxy</a></li>
                    <li><a href="/alba"><strong>Jordi Alba</strong></a> – 80 OVR, LB, <a href="/inter">Inter Miami CF</a></li>
                    <li><a href="/bounga"><strong>Denis Bouanga</strong></a> – 80 OVR, LW, <a href="/lafc">LAFC</a></li>
                    <li><a href="/forsberg"><strong>Emil Forsberg</strong></a> – 79 OVR, CAM, <a href="/nyrb">Red Bulls</a></li>
                    <li><a href="/gil"><strong>Carles Gil</strong></a> – 79 OVR, CAM, <a href="/ne">New England Revolution</a></li>
                </ul>

                {/* U.S. National Team */}
                <h2 className='text-3xl font-semibold text-[#020617] mb-8 mt-10'>The U.S. National Team in FC25</h2>
                <p className='mb-4'>
                    While the U.S. national team does not have as many global superstars as some other nations, it is made up of talented and promising players who can thrive in FC25. Christian Pulisic has one of the best attacking cards in the game, and it’s no surprise that he's also a standout in Serie A. His card is loaded with pace, dribbling, and finishing, making him a top choice for anyone looking to strengthen their attack.

Moving on to defense, Antonee Robinson’s card stands out with impressive speed and defensive stats, making him an excellent option for anyone who needs a reliable left-back. Meanwhile, Sergino Dest brings flair and creativity to the game, and his right-back card is perfect for players who want to build up attacks from the back.

And don’t forget about Weston McKennie. As a box-to-box midfielder, McKennie’s card provides strength and physicality, making him a fantastic choice to control the midfield.

These USMNT players are sure to feature in plenty of Ultimate Team starter squads, so if you're looking to build a strong squad, these are definitely the players to pick. Be sure to stay updated for more FIFA news, and happy gaming!
                </p>


               
          
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {/* Sample product 1 */}
                    <div className='bg-white p-6 border rounded-lg shadow-md'>
    <img src='https://m.media-amazon.com/images/I/81mm+VudgaL._AC_UY327_FMwebp_QL65_.jpg' alt='EA SPORTS FC 25 - PlayStation 5' className='w-full h-[200px] object-cover mb-4' />
    <h3 className='text-xl font-semibold text-[#020617] mb-2'>EA SPORTS FC 25 - PlayStation 5</h3>
    <p className='text-gray-500'>by Electronic Arts.</p>
    <p className='text-xl font-bold text-[#1e40af] mt-4'>$29.94</p>
    <a href='https://amzn.to/3XbuBhI' target='_blank' rel='noopener noreferrer'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-4 w-full'>
            Buy on Amazon
        </button>
    </a>
</div>


                </div>
            </div>

             
        </div>
    );
};

export default Imga;

