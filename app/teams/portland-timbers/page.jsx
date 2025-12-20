import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'portland-timbers' }) => {
  const players = [
    { name: 'Kamal Miller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OBTzPwXJxDw2RoBTT0Dar4Hkhlwac4hafA&s', slug: './kamal' },
    { name: 'Diego Chará', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvPs48qADU-UwzRq223yrcFLu4lA2db6cfQ&s', slug: './chara' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/portland-timbers/${player.slug}`}
            className="group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={player.image}
              alt={player.name}
              className="h-64 w-full object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold text-center text-[#020617]">{player.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

const blogPosts = [
  {
  "id": 1,
  "title": "Portland Timbers & Felipe Mora Get Groove Back in Wild Card Win",
  "author": "Mio Ristić",
  "date": "October 23, 2025",
  "excerpt": "Felipe Mora’s brace powered Portland Timbers past Real Salt Lake 3–1 in the 2025 MLS Wild Card match. Read the full playoff recap on US11.",
  "imageUrl": "https://cloudfront-us-east-1.images.arcpublishing.com/prisachile/IDRGQPSWNJAULE3CHLPZVD3FGM.jpg",
  "slug": "portland-real-playoffs"
},
];

const PortlandTimbers = () => {
  const items = [
    {
      "title": "Men's Portland Timbers adidas Green 2025 Forever Green & Gold Authentic Jersey",
      "price": "$149.99",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/mens-adidas-green-portland-timbers-2025-forever-green-and-gold-authentic-jersey_ss5_p-202644592+pv-1+u-ppgdcqni2qlx97sqnjnj+v-95zckjcpmjsrqud7wdp2.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQGzv"
    },
    {
      "title": "Women's Portland Timbers adidas Green 2025 Forever Green & Gold Replica Jersey",
      "price": "$99.99",
      "imageUrl": "https://images.footballfanatics.com/portland-timbers/womens-adidas-green-portland-timbers-2025-forever-green-and-gold-replica-jersey_ss5_p-202649349+pv-1+u-gflt5rdmfg0dufnbc9s8+v-qlhlia2fqn9wljzwu85g.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/JKOvLr"
    },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Portland Timbers</h1>

        <div className='mb-6'>
          <img src='/Portland.png' alt='Portland Timbers' className='w-full h-[400px] object-cover rounded-lg shadow-md' />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
          <a href="https://ticketnetwork.lusg.net/9LnXMY" target="_blank" rel="noopener noreferrer" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'>
            BUY TICKETS
          </a>
          <a href="https://example.com/find-hotel" className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'>
            HOTELS NEAR THE STADIUM
          </a>
        </div>

        {/* Club Information */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Club Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Portland Timbers</li>
            <li><strong>Nickname(s):</strong> The Timbers</li>
            <li><strong>Founded:</strong> 2009</li>
            <li><strong>Stadium:</strong> Providence Park, Portland, Oregon</li>
            <li><strong>Capacity:</strong> 25,218</li>
            <li><strong>Owner:</strong> Merritt Paulson</li>
            <li><strong>Head Coach:</strong> Phil Neville</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Club History */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Passion and Tradition</h2>
          <p>The Portland Timbers are one of the most passionate teams in Major League Soccer, backed by the legendary "Timbers Army" fan base...</p>
          <p>Playing at Providence Park, the club embodies the heart and soul of Portland...</p>
        </div>

        {/* Trending Players */}
        <TrendingPlayers />

        {/* BLOG SECTION */}
        <div className="bg-white py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-[#020617] mb-8 text-center">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-green-600 transition duration-300">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.author} | {post.date}</p>
                    <p className="text-gray-700 mt-2 flex-grow">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Shop Section */}
        <h2 className='text-4xl sm:text-6xl font-bold text-[#020617] mt-16 mb-4'>Shop</h2>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map((item) => (
            <div key={item.title} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a href={item.link} target='_blank' rel='noopener noreferrer' className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
                  Buy Now <FaShoppingCart className='inline ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PortlandTimbers;

