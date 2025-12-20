'use client';

import React from 'react';

const MLSFC26Blog = () => {
  const players = [
    { name: "Lionel Messi", team: "Inter Miami CF", pos: "RW", ovr: 86, imageUrl: "https://ratings-images-prod.pulse.ea.com/FC26/components/items/158023_en.webp" },
    { name: "Heung Min Son", team: "LAFC", pos: "LW", ovr: 85, imageUrl: "https://ratings-images-prod.pulse.ea.com/FC26/components/items/200104_en.webp"},
    { name: "Rodrigo De Paul", team: "Inter Miami CF", pos: "CM", ovr: 84, imageUrl: "https://ratings-images-prod.pulse.ea.com/FC26/components/items/212616_en.webp" },
    { name: "Thomas Müller", team: "Whitecaps FC", pos: "CAM", ovr: 80, imageUrl: "https://ratings-images-prod.pulse.ea.com/FC26/components/items/189596_en.webp" },
    { name: "Riqui Puig", team: "LA Galaxy", pos: "CM", ovr: 80, imageUrl: "https://ratings-images-prod.pulse.ea.com/FC26/components/items/242816_en.webp" },
    { name: "Sergio Busquets", team: "Inter Miami CF", pos: "CDM", ovr: 80, imageUrl: "https://ratings-images-prod.pulse.ea.com/FC26/components/items/189511_en.webp" },
    { name: "Evander", team: "FC Cincinnati", pos: "CAM", ovr: 79, imageUrl: "https://ratings-images-prod.pulse.ea.com/FC26/components/items/234505_en.webp" },
    { name: "Denis Bouanga", team: "LAFC", pos: "LW", ovr: 79, imageUrl: "https://ratings-images-prod.pulse.ea.com/FC26/components/items/225951_en.webp" },
    { name: "Hany Mukhtar", team: "Nashville SC", pos: "CAM", ovr: 79, imageUrl: "https://ratings-images-prod.pulse.ea.com/FC26/components/items/210021_en.webp" },
    { name: "Marco Reus", team: "LA Galaxy", pos: "CAM", ovr: 79, imageUrl: "https://ratings-images-prod.pulse.ea.com/FC26/components/items/188350_en.webp" }
  ];

  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-8 mt-16 lg:mt-10'>
          Top MLS Players in FC26
        </h1>

        <img
          src='https://www.donanimhaber.com/cache-v2/?t=20250721183450&width=-1&text=0&path=https://www.donanimhaber.com/images/images/haber/194076/fc-26-icin-turkce-dublajli-fragmani-paylasildi-iste-video194076_0.jpg'
          alt='MLS FC26 Key Art'
          className='w-full h-[400px] object-cover rounded-lg shadow-md'
          style={{ objectPosition: 'center 20%' }}
        />

<div className='mt-2 text-sm text-gray-600'>
  <span>Mio Ristić | September 2025 | EA Games</span>
</div>

        <div className='mt-4 text-center'>
          <a
            href="https://amzn.to/474KdIY"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer inline-block"
          >
            Buy FC26 on Amazon
          </a>
        </div>

        <div className='space-y-8 mt-10'>
          <h2 className='text-3xl font-semibold text-[#020617]'>Top 10 MLS Players in FC26</h2>
          {players.map((player, index) => (
            <div key={index} className='border-b border-gray-300 pb-4 mb-4'>
              <h3 className='text-2xl font-semibold text-[#020617]'>{index + 1}. {player.name}</h3>
              {player.imageUrl && (
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className='w-40 h-auto my-4 rounded-md shadow-md'
                />
              )}
              <p className='text-gray-700 mb-2'>Team: {player.team}</p>
              <p className='text-gray-700 mb-2'>Position: {player.pos}</p>
              <p className='text-gray-700 mb-2'>Overall Rating: {player.ovr}</p>
            </div>
          ))}
        </div>

        <div className='mt-10'>
          <h2 className='text-3xl font-semibold text-[#020617]'>MLS Clubs Overview in FC26</h2>
          <p className='mb-4'>
            MLS clubs in FC26 feature incredible rosters with a mix of world-class stars and emerging talents. Inter Miami CF dominates with Lionel Messi leading the charge, while LAFC, LA Galaxy, and Whitecaps FC all have competitive lineups to excite fans and gamers alike.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8'>
          <div className='bg-white p-6 border rounded-lg shadow-md'>
            <img
              src='https://m.media-amazon.com/images/I/51SvHZ7O6CL._SX342_SY445_QL70_FMwebp_.jpg'
              alt='EA SPORTS FC 26 - PlayStation 5'
              className='w-full h-[200px] object-cover mb-4'
            />
            <h3 className='text-xl font-semibold text-[#020617] mb-2'>EA SPORTS FC 26 - PlayStation 5</h3>
            <p className='text-gray-500'>by Electronic Arts</p>
            <p className='text-xl font-bold text-[#1e40af] mt-4'>$69.00</p>
            <a
              href='https://amzn.to/474KdIY'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-4 w-full cursor-pointer inline-block text-center'
            >
              Buy on Amazon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLSFC26Blog;
