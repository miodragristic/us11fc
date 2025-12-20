import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    {
      name: 'Lionel Messi',
      image: 'https://en.nogomania.com/GetFile.ashx?id=271175',
      path: 'messi',
    },
    {
      name: 'Luis Suarez',
      image: 'https://en.nogomania.com/GetFile.ashx?id=259742',
      path: 'suarez',
    },
    {
      name: 'Sergio Busquets',
      image: 'https://cdn1.intermiami.news/uploads/52/2024/05/GettyImages-2153690433-1140x760.jpg',
      path: 'busquets',
    },
    {
      name: 'Jordi Alba',
      image: 'https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2181071294-750x500.jpg',
      path: 'alba',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.path}
            href={`/teams/inter-miami/${player.path}`}
            className="group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={player.image}
              alt={player.name}
              className="h-64 w-full object-cover mb-4 rounded-lg"
              style={{ objectPosition: 'center 2%' }}
            />
            <h3 className="text-lg font-semibold text-center text-[#020617]">{player.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

// 📰 Blog posts
const blogPosts = [
  {
  "id": 2,
  "title": "Inter Miami Cruise Past Nashville in Dominant Playoff Victory",
  "author": "Mio Ristić",
  "date": "October 25, 2025",
  "excerpt": "Lionel Messi led Inter Miami CF to a commanding 3–1 playoff win over Nashville SC in the Audi 2025 MLS Cup Playoffs. Read the full recap, goals, and highlights on US11.",
  "imageUrl": "https://brobible.com/wp-content/uploads/2023/08/lionel-messi-taking-a-corner-kick-for-inter-miami.jpg",
  "slug": "inter-miami-nashville"
},

    {
  "id": 1,
  "title": "Lionel Messi Extends Inter Miami Contract Through 2028",
  "author": "Mio Ristić",
  "date": "October 25, 2025",
  "excerpt": "Lionel Messi stays with Inter Miami CF until 2028, continuing his legendary MLS career. Read the full story and what to expect in Miami.",
  "imageUrl": "https://cyprus-mail.com/image/s1100x733/fill/webp/path/wp-content/uploads/2023/07/messi.jpg",
  "slug": "messi-inter-miami-extension"
},
];

const Inter = () => {
  const items = [
    { id: 1, title: "Men's Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-authentic-player-jersey_ss5_p-202860048+u-90c1ap4gywaxy53ptq00+v-yujii65dkxwfdeedytbp.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/XmNXL3', price: '$194.99' },
    { id: 2, title: "Youth Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-201677367+u-hrow2y8rhvpwrddyelhp+v-dftko5xtuap5eeoanmxy.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/zx42eG', price: '$109.99' },
    { id: 3, title: "Men's Inter Miami CF Lionel Messi adidas Black 2025 The Fortitude Kit Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-authentic-player-jersey_ss5_p-202594033+u-knqnh7w92m4datnj7vqo+v-ouhd9owk3afqcevad5fn.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/Oebm9P', price: '$194.99' },
  ];

  return (
    <div className="w-full min-h-screen bg-white pt-[1px]">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#020617] mb-4">Inter Miami CF</h1>
        <div className="mb-6">
          <img src="/interlogo.png" alt="Inter Miami" className="w-full h-[400px] object-cover rounded-lg shadow-md" />
        </div>

        <div className="flex gap-4 mb-8 justify-center">
          <a
            href="https://ticketnetwork.lusg.net/qzmP9b"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            BUY TICKET
          </a>
          <a
            href="https://www.booking.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            HOTELS NEAR THE STADIUM
          </a>
        </div>

        {/* Club Info */}
        <div className="text-[#020617] mb-8">
          <h2 className="text-2xl font-semibold mb-2">Club Information</h2>
          <ul className="list-disc list-inside">
            <li><strong>Full Name:</strong> Club Internacional de Fútbol Miami</li>
            <li><strong>Nickname(s):</strong> The Herons, Vice City</li>
            <li><strong>Founded:</strong> January 29, 2018</li>
            <li><strong>Stadium:</strong> Chase Stadium, Fort Lauderdale, Florida</li>
            <li><strong>Capacity:</strong> 21,550</li>
            <li><strong>Owners:</strong> David Beckham, Jorge Mas, Jose Mas</li>
            <li><strong>President:</strong> David Beckham</li>
            <li><strong>Head Coach:</strong> Javier Mascherano</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* History */}
        <div className="text-[#020617] mb-8">
          <h2 className="text-2xl font-semibold mb-2">Rise on the Football Horizon</h2>
          <p>
            Inter Miami CF, founded in 2018, quickly became one of the most exciting clubs in North America.
            The presence of global icons like Lionel Messi, Luis Suarez, Jordi Alba, and Sergio Busquets has
            elevated the club’s status to worldwide recognition.
          </p>
          <p>
            With a strong ownership group led by David Beckham, Inter Miami represents the future of football
            in the United States—blending passion, flair, and global influence.
          </p>
        </div>

        {/* Trending Players */}
        <TrendingPlayers />

        {/* Blog Section */}
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
                    <h3 className="text-xl font-bold mb-1 group-hover:text-pink-600 transition duration-300">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.author} | {post.date}</p>
                    <p className="text-gray-700 mt-2 flex-grow">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Shop Section */}
        <h2 className="text-4xl sm:text-6xl font-bold text-[#020617] mt-16 mb-4">Shop</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img className="w-full h-64 object-cover" src={item.imageUrl} alt={item.title} />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-[#020617]">{item.title}</h3>
                <p className="text-gray-600">{item.price}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Buy Now <FaShoppingCart className="inline ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inter;
