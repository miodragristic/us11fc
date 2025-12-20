import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'san-diego' }) => {
  const players = [
    { name: 'Hirving Lozano', image: 'https://images.supersport.com/media/e2dcgfwj/hirving-lozano-220924-celebrates-g-1050.jpg?width=1920&quality=90&format=webp', slug: './lozano' },
    { name: 'Marcus Ingvartsen', image: 'https://arnason.synology.me/billedearkiv/billeder/140px/2023/08/20230827_6318/917310_sgf8ym.jpg', slug: './ingvartsen' },
    { name: 'Paddy McNair', image: 'https://cdn1.rangersnews.uk/uploads/24/2024/05/GettyImages-2137821648-1140x793.jpg', slug: './mcnair' },
  ];



  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/san-diego/${player.slug}`}
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

const SanDiegoFC = () => {
  const items = [
    {
      "title": "Men's San Diego FC adidas Navy 2025 State of Flow Authentic Jersey",
      "price": "$159.99",
      "originalPrice": "$159.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-adidas-navy-san-diego-fc-2025-state-of-flow-authentic-jersey_ss5_p-202580390+pv-1+u-cmpkub21hbmne9slf8ax+v-lbbeda6jzxqts476jhvk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQYq5"
    },
    {
      "title": "Men's San Diego FC adidas Navy 2025 State of Flow Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-adidas-navy-san-diego-fc-2025-state-of-flow-replica-jersey_ss5_p-202580623+pv-1+u-ngpxat06s8dcwvbd5xk4+v-6tztuqy9kkmave7t3ps8.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzmYPL"
    },
    {
      "title": "Men's San Diego FC Navy Tahiti Adjustable Hat",
      "price": "$47.99",
      "originalPrice": "$47.99",
      "category": "Men's Hats",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-navy-san-diego-fc-tahiti-adjustable-hat_ss5_p-202622574+pv-1+u-fbe0pvqhgxkkvxzpg7v4+v-2hgpjnpsba1tlntmpuwf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKO7vL"
    },
    {
      "title": "Men's San Diego FC Fanatics Navy Injury Time Baseball Jersey",
      "price": "$59.99",
      "originalPrice": "$59.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-fanatics-navy-san-diego-fc-injury-time-baseball-jersey_ss5_p-201747335+pv-1+u-yvycz7doily87xvhjp0s+v-qcquo538ziykybbb31ml.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6L7Zk"
    },
    {
      "title": "Men's San Diego FC adidas White 2025 Woven Into One Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-adidas-white-san-diego-fc-2025-woven-into-one-authentic-jersey_ss5_p-202652676+pv-1+u-2t00snd1k9mdx0x6mxmr+v-u0hdpyxdsw6pmfot4ims.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yVWJ"
    },
    {
      "title": "Men's San Diego FC New Era Navy Color Pack A-Frame 59FIFTY Fitted Hat",
      "price": "$44.99",
      "originalPrice": "$44.99",
      "category": "Men's Hats",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-new-era-navy-san-diego-fc-color-pack-a-frame-59fifty-fitted-hat_ss5_p-201948541+pv-1+u-jbwxaohqbrlfatrbxslw+v-awaxxi5ewfzskehmymks.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9YeL"
    },
    {
      "title": "Men's San Diego FC adidas Navy 2025 Travel Pullover Hoodie",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Men's Sweatshirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-adidas-navy-san-diego-fc-2025-travel-pullover-hoodie_ss5_p-201657332+pv-1+u-43pr8xumvzz6ocawmhqp+v-aqiajpcmwrzbwxcf1cez.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6L79X"
    },
    {
      "title": "Men's San Diego FC adidas Navy/White 2025 Anthem Reversible Full-Zip Jacket",
      "price": "$109.99",
      "originalPrice": "$109.99",
      "category": "Men's Jackets",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-adidas-navy/white-san-diego-fc-2025-anthem-reversible-full-zip-jacket_ss5_p-201657235+pv-1+u-jltv7seybd3a8exgymsz+v-7wu5towh6oen0qwstpoa.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yVLR"
    },
    {
      "title": "Men's San Diego FC Fanatics Navy Red Card Transitional Pullover Hoodie",
      "price": "$59.99",
      "originalPrice": "$59.99",
      "category": "Men's Sweatshirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-fanatics-navy-san-diego-fc-red-card-transitional-pullover-hoodie_ss5_p-201747251+pv-1+u-nays3a6ueqc8tiw7mz8u+v-r39luobxgueup0aaq93c.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/JKO73q"
    },
    {
      "title": "Men's San Diego FC adidas Navy 2025 State of Flow Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/mens-adidas-navy-san-diego-fc-2025-state-of-flow-authentic-custom-jersey_ss5_p-202587494+pv-1+u-nytbp56s0qjnzri0q2h3+v-fvg950oj9loczrtovxwp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45Y2O"
    },
    {
      "title": "San Diego FC Ruffneck Scarves Blue Community Colors Summer Scarf",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Accessories",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/ruffneck-scarves-blue-san-diego-fc-community-colors-summer-scarf_ss5_p-200746099+pv-1+u-dlpi903yu40nnj40vzaa+v-cnexokfpkiklahvublze.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPYQr"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>San Diego FC</h1>
        <div className='mb-6'>
          <img
            src='/SD.png'
            alt='San Diego FC Logo' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className='flex gap-4 mb-8 justify-center'>
        <a
            href="https://ticketnetwork.lusg.net/qzm7Eb"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            BUY TICKET
          </a>
          <a 
            href="https://example.com/find-hotel" 
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            HOTELS NEAR THE STADIUM
          </a>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Club Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> San Diego FC</li>
            <li><strong>Nickname(s):</strong> The Waves</li>
            <li><strong>Founded:</strong> 2023</li>
            <li><strong>Stadium:</strong> Snapdragon Stadium, San Diego, California</li>
            <li><strong>Capacity:</strong> 35,000</li>
            <li><strong>Owner:</strong> Mohamed Mansour</li>
            <li><strong>Head Coach:</strong> Mikey Varas</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A New Era in San Diego</h2>
          <p>
            San Diego FC is the latest addition to Major League Soccer, bringing top-level soccer to the vibrant city of San Diego. With a focus on community engagement and world-class talent, the club aims to make a significant impact on and off the pitch.
          </p>
          <p>
            Playing at the state-of-the-art Snapdragon Stadium, the club is ready to provide fans with unforgettable experiences. Star player Hirving Lozano leads the charge, promising exciting performances and inspiring the next generation of soccer players.
          </p>
        </div>

        <TrendingPlayers />

        <h2 className='text-4xl sm:text-6xl font-bold text-[#020617] mt-16 mb-4'>Shop</h2>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map((item) => (
          <div key={item.title} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                >
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

export default SanDiegoFC;
