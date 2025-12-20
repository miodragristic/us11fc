import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'new-york-red-bulls' }) => {
  const players = [
    { name: 'Maxi Moralez', image: 'https://cdn.eleco.com.ar/media/2022/12/deportes_32.jpg', slug: './moralez' },
    { name: 'Santiago Rodríguez', image: 'https://assets.goal.com/images/v3/getty-2150744981/crop/MM5DGOBYHA5DEMJYG45G433XMU5DOMBSHIYTANQ=/GettyImages-2150744981.jpg', slug: './santiago' },
    { name: 'Monsef Bakrar', image: 'https://www.telegram.hr/wp-content/uploads/2024/12/monsef-bakrar.jpg', slug: './bakrar' },
    // { name: 'Julián Fernández', image: 'data:image/jpeg;base64,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', link: './JamesSands' },
  ];



  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/nycfc/${player.slug}`}
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

const NYCFC = () => {
  const items = [
    {
      "title": "Men's New York City FC adidas Light Blue 2025 The Excelsior Kit Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "Most Popular in Jerseys",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-adidas-light-blue-new-york-city-fc-2025-the-excelsior-kit-authentic-jersey_ss5_p-202644588+pv-1+u-dwdwunzsltswgzqfljnw+v-vfgmet8vo1v2qb2vvfgi.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yqjEX2"
    },
    {
      "title": "Men's New York City FC Sport Design Sweden Navy Hat Trick Hockey Pullover Hoodie",
      "price": "$94.99",
      "originalPrice": "$94.99",
      "category": "Men's Hoodies",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens%C2%A0sport-design-sweden-navy-new-york-city-fc-hat-trick-hockey-pullover-hoodie_ss5_p-202666869+pv-1+u-hrncblfgjv1ztivqg9gn+v-2gneza6dxjwurvehlymr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzmkay"
    },
    {
      "title": "Youth New York City FC Navy/Light Blue Stalwart Defender T-Shirt",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Youth T-Shirts",
      "shipping": "Ready To Ship",
      "availability": "Most Popular in New York City FC",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/youth-navy/light-blue-new-york-city-fc-stalwart-defender-t-shirt_ss5_p-201875246+pv-1+u-six63vpz3yjfgdmoovzm+v-beg8proaz9c1fqc2sctw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjAzMA"
    },
    {
      "title": "Youth New York City FC adidas Light Blue 2025 The Excelsior Kit Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Youth Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/youth-adidas-light-blue-new-york-city-fc-2025-the-excelsior-kit-replica-jersey_ss5_p-202649404+pv-1+u-deynuppy95yxksfvefgi+v-jlpdgwzslrptq8e35aep.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKOoMY"
    },
    {
      "title": "Men's New York City FC New Era Black 2025 Kickoff 9TWENTY Adjustable Hat",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Men's Hats",
      "shipping": "Ready To Ship",
      "availability": "Most Popular in Hats",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-new-era-black-new-york-city-fc-2025-kickoff-9twenty-adjustable-hat_ss5_p-202514201+pv-1+u-gkszmiogbaloo2o378ho+v-0wc0db9nerrlxmakgr1t.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXPjYX"
    },
    {
      "title": "Men's New York City FC adidas Black 2024 24/7 Kit Authentic Jersey",
      "price": "$159.99",
      "originalPrice": "$159.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "Most Popular in Jerseys",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-adidas-black-new-york-city-fc-2024-24/7-kit-authentic-jersey_ss5_p-201101846+pv-1+u-gp2fdnsj1ov11mdhl2aq+v-fdwq2qata3nhzgljtk8z.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/2ayXZQ"
    },
    {
      "title": "Men's New York City FC Heathered Gray Logo T-Shirt",
      "price": "$17.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "Most Popular in Men T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-heathered-gray-new-york-city-fc-logo-t-shirt_pi4735000_altimages_ff_4735653-3dba106ee9d1add148f4alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOk3Yk"
    },
    {
      "title": "Youth New York City FC Blue Unbeatable Pullover Hoodie",
      "price": "$54.99",
      "originalPrice": "$54.99",
      "category": "Youth Hoodies",
      "shipping": "Ready To Ship",
      "availability": "Most Popular in Kids Sweatshirts",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/youth-blue-new-york-city-fc-unbeatable-pullover-hoodie_ss5_p-201875264+pv-1+u-fhwah8hde3sri4ntctzf+v-kwdkcuvzkyovcftkglcm.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRb47j"
    },
    {
      "title": "Men's New York City FC adidas Navy 2025 Travel Pants",
      "price": "$74.99",
      "originalPrice": "$74.99",
      "category": "Men's Pants",
      "shipping": "Ready To Ship",
      "availability": "Most Popular in Pants",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-adidas-navy-new-york-city-fc-2025-travel-pants_ss5_p-201657351+pv-1+u-3clziyb5zvfhgxdixht2+v-vy5r2txfqqnnfalaunbi.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKOo7Y"
    },
    {
      "title": "New York City FC 50\" x 60\" City Spotlight Royal Plush Blanket",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Home & Accessories",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/new-york-city-fc-50-x-60-city-spotlight-royal-plush-blanket_ss5_p-200823153+pv-1+u-mskmsgyp8eflrvhehjaj+v-nqlxeszowjhvrmszs31m.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9Lnx03"
    },
    {
      "title": "Men's New York City FC Navy Team Hometown Collection T-Shirt",
      "price": "$19.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "Most Popular in Men T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-navy-new-york-city-fc-team-hometown-collection-t-shirt_pi5281000_altimages_ff_5281744-3af26b550435ffd5de42alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9QYd"
    },
    {
      "title": "Men's New York City FC New Era Tan Active 9TWENTY Adjustable Hat",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Men's Hats",
      "shipping": "Ready To Ship",
      "availability": "Most Popular in Hats",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens%C2%A0new-era-tan-new-york-city-fc-active-9twenty-adjustable-hat_ss5_p-202314648+pv-1+u-pr90cpmj9biztn9v60x5+v-ewusmgdrdn0vihegebcu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPXY6"
    },
    {
      "title": "Men's New York City FC adidas Navy 2025 Travel Pullover Hoodie",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Men's Hoodies",
      "shipping": "Ready To Ship",
      "availability": "Most Popular in Sweatshirts",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-adidas-navy-new-york-city-fc-2025-travel-pullover-hoodie_ss5_p-201657320+pv-1+u-ss7kiekkcjeg8xmbj0ay+v-hcfgz82m3pnuw3zsvmb0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/2ayX4Q"
    },
    {
      "title": "Men's New York City FC New Era Sky Blue/Navy 2025 Jersey Hook 9SEVENTY Stretch-Snap Hat",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's Hats",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-new-era-sky-blue/navy-new-york-city-fc-2025-jersey-hook-9seventy-stretch-snap-hat_ss5_p-202216429+pv-1+u-oclvvajyfemzdkdnbsyl+v-coajzzlva9lo7aoav3bz.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQ1Aj"
    },
    {
      "title": "Men's New York City FC adidas Light Blue 2025 Jersey Hook AEROREADY T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "Ready To Ship",
      "availability": "Most Popular in Men T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-new-era-sky-blue/navy-new-york-city-fc-2025-jersey-hook-9seventy-stretch-snap-hat_ss5_p-202216429+pv-1+u-oclvvajyfemzdkdnbsyl+v-coajzzlva9lo7aoav3bz.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQ1Aj"
    },
    {
      "title": "Men's New York City FC Black Hometown Oversized Pullover Hoodie",
      "price": "$84.99",
      "originalPrice": "$84.99",
      "category": "Men's Hoodies",
      "shipping": "Ready To Ship",
      "availability": "Most Popular in Sweatshirts",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-adidas-light-blue-new-york-city-fc-2025-jersey-hook-aeroready-t-shirt_ss5_p-201664631+pv-1+u-p4aczineetfeelanpp8k+v-q5evrcdff5gylykwltlr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2oro"
    },
    {
      "title": "Men's New York City FC Fanatics Sky Blue Free Kick Woven Quarter-Zip Hoodie Jacket",
      "price": "$89.99",
      "originalPrice": "$49.99",
      "category": "Toddler Hoodies",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/mens-fanatics-sky-blue-new-york-city-fc-free-kick-woven-quarter-zip-hoodie-jacket_ss5_p-201747227+pv-1+u-bmjreky7u48wqwbgkmxv+v-rdywxrvi6twmqluaq7n0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raLe53"
    },
    {
      "title": "Youth New York City FC adidas Light Blue 2025 The Excelsior Kit Replica Custom Jersey",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "shipping": "Ready To Ship",
      "availability": "Most Popular in Men T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/new-york-city-fc/youth-adidas-light-blue-new-york-city-fc-2025-the-excelsior-kit-replica-custom-jersey_ss5_p-202708448+pv-1+u-ctymkjkh5v3w962gu674+v-ew9jn1dxar8613zhewqj.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1eJmz"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
       <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>New York City FC</h1>
        <div className='mb-6'>
          <img
            src='/nyc.png'
            alt='New York City FC' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/jeQvzb"
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

     {/* Club Information */}
     <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Club Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> New York City Football Club</li>
            <li><strong>Nickname(s):</strong> NYCFC</li>
            <li><strong>Founded:</strong> 2013</li>
            <li><strong>Stadium:</strong> Yankee Stadium, The Bronx, New York City</li>
            <li><strong>Capacity:</strong> 33,000</li>
            <li><strong>Owner:</strong> City Football Group</li>
            <li><strong>Head Coach:</strong> Pascal Jansen</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Modern Force in MLS</h2>
          <p>
            New York City FC, founded in 2013, has quickly become one of Major League Soccer's premier clubs. Playing in the iconic Yankee Stadium, the club draws inspiration from the diverse energy of the city.
          </p>
          <p>
            Under the guidance of Nick Cushing and with key players like Taty Castellanos and Santiago Rodríguez, NYCFC is one of the top teams in MLS, having recently claimed the MLS Cup in 2021.
          </p>
          <p>
            Whether through dynamic attacking play or gritty team effort, NYCFC continues to be a favorite in the league, bringing exciting soccer to the Big Apple.
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

export default NYCFC;
