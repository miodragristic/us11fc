import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'new-york-red-bulls' }) => {
  const players = [
    { name: 'Emil Forsberg', image: 'https://nypost.com/wp-content/uploads/sites/2/2023/11/GettyImages-1781603559.jpg', slug: './forsberg' },
    { name: 'Lewis Morgan', image: 'https://worldfootballindex.com/wp-content/uploads/2022/06/Lewis-Morgan-New-York-Red-Bulls.jpg', slug: './morgan' },
    // { name: 'Dante Vanzeir', image: 'https://www.ligaportal.at/international/images/sid/202315/0ca391f3ea127efd9aae3f089d8eb83f2d68a47e.jpg', link: './CristianCasseres' },
    { name: 'Eric Maxim Choupo-Moting', image: 'https://afrosportnow.com/wp-content/uploads/2023/12/GettyImages-1446328647-scaled.jpg', slug: './moting' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/new-york-red-bulls/${player.slug}`}
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

const NYRedBulls = () => {
  const items = [
    {
      "title": "Men's New York Red Bulls Sport Design Sweden Cream Everyday Relaxed T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-sport-design-sweden-cream-new-york-red-bulls-everyday-relaxed-t-shirt_ss5_p-202666797+pv-1+u-gmrlzaadmsovasoysefm+v-n1appqp58h3d26cyrd27.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yXr3"
    },
    {
      "title": "Men's New York Red Bulls New Era Black 2025 Kickoff 9TWENTY Adjustable Hat",
      "price": "$27.99",
      "originalPrice": "$27.99",
      "category": "Hats",
      "shipping": "Ready To Ship",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-new-era-black-new-york-red-bulls-2025-kickoff-9twenty-adjustable-hat_ss5_p-202427754+pv-1+u-d6nijcbpskzzmx1xomte+v-gx0vsy5nr6szouuveruf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/RGZYx7"
    },
    {
      "title": "Men's New York Red Bulls adidas Tan 2025 Stone Kit Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-adidas-tan-new-york-red-bulls-2025-stone-kit-authentic-jersey_ss5_p-202652672+pv-1+u-f2zaep38lvkhx6t3xigo+v-kn46zdf2vil5stnz3t3q.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2o4P"
    },
    {
      "title": "Men's New York Red Bulls Black Core Smoke Pullover Hoodie",
      "price": "$34.99",
      "originalPrice": "$64.99",
      "category": "Sweatshirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-black-new-york-red-bulls-core-smoke-pullover-hoodie_pi3306000_altimages_ff_3306562alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrXBk"
    },
    {
      "title": "Men's New York Red Bulls adidas Yellow 2023 Daniel Patrick Kit Authentic Jersey",
      "price": "$39.99",
      "originalPrice": "$159.99",
      "category": "Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-adidas-yellow-new-york-red-bulls-2023-daniel-patrick-kit-authentic-jersey_pi5275000_altimages_ff_5275745-816017c8aeccb864b7dealt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9Q5M"
    },
    {
      "title": "Men's New York Red Bulls adidas Gray 2025 Travel Shorts",
      "price": "$64.99",
      "originalPrice": "$64.99",
      "category": "Shorts",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-adidas-gray-new-york-red-bulls-2025-travel-shorts_ss5_p-201657382+pv-1+u-ycjcuxigfukifgorlac5+v-njiimpzqosoax1ehxfjf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/PORYoq"
    },
    {
      "title": "Men's New York Red Bulls Black Hometown Oversized Pullover Hoodie",
      "price": "$84.99",
      "originalPrice": "$84.99",
      "category": "Sweatshirts",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-black-new-york-red-bulls-hometown-oversized-pullover-hoodie_ss5_p-202666858+pv-1+u-3r6o2xjokxh9qekggwrn+v-6keztmv5jc7pdbrbuduu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19yo6B"
    },
    {
      "title": "Men's New York Red Bulls Sport Design Sweden Khaki City Soul Oversized T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-sport-design-sweden-khaki-new-york-red-bulls-city-soul-oversized-t-shirt_ss5_p-202666825+pv-1+u-jb5edrxcjvngccsfojml+v-inkxdohcgq8ijsudndaf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yqjEay"
    },
    {
      "title": "Youth New York Red Bulls Black Unbeatable Pullover Hoodie",
      "price": "$54.99",
      "originalPrice": "$54.99",
      "category": "Youth Sweatshirts",
      "shipping": "Ready To Ship",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/youth-black-new-york-red-bulls-unbeatable-pullover-hoodie_ss5_p-201875267+pv-1+u-rajobxz1z5sdnbow0cvn+v-ma9xtoln9qlotjmqwe2h.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/PORYeq"
    },
    {
      "title": "Men's New York Red Bulls Fanatics Red Sitter Snapback Hat",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Hats",
      "shipping": "Ready To Ship",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-fanatics-red-new-york-red-bulls-sitter-snapback-hat_ss5_p-201747479+pv-1+u-xvhknln5f4i5ostj8ays+v-pll4d2khjgy1itj0ngkr.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOjYbQ"
    },
    {
      "title": "Men's New York Red Bulls Heathered Gray Logo T-Shirt",
      "price": "$17.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-heathered-gray-new-york-red-bulls-logo-t-shirt_pi4735000_altimages_ff_4735656-17f2f5185049ee5b7f8dalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45PxY"
    },
    {
      "title": "Men's New York Red Bulls adidas Tan 2025 Stone Kit Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-adidas-tan-new-york-red-bulls-2025-stone-kit-replica-jersey_ss5_p-202652751+pv-1+u-qoxfbownrnqvazi0gnsz+v-rxvswutlqemcgjnlbluy.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/bOPv66"
    },
    {
      "title": "Men's New York Red Bulls New Era Gray 2025 Jersey Hook 9FORTY M-Crown Adjustable Hat",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Hats",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-new-era-gray-new-york-red-bulls-2025-jersey-hook-9forty-m-crown-adjustable-hat_ss5_p-202216483+pv-1+u-8atyyzu9fo097iv8rpxq+v-hdehtviyetvltxpv4vji.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRb4Eq"
    },
    {
      "title": "Men's New York Red Bulls Navy Shielded T-Shirt",
      "price": "$17.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-navy-new-york-red-bulls-shielded-t-shirt_pi2876000_altimages_ff_2876311alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKOoAO"
    },
    {
      "title": "Men's New York Red Bulls Black Logo T-Shirt",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-black-new-york-red-bulls-logo-t-shirt_pi4735000_altimages_ff_4735655-7ee6014e0763b3ee9a3dalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9QDv"
    },
    {
      "title": "Women's New York Red Bulls Fanatics Red Faded Script Pullover Hoodie",
      "price": "$39.99",
      "originalPrice": "$59.99",
      "category": "Women's Sweatshirts",
      "shipping": "",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/womens-fanatics-red-new-york-red-bulls-faded-script-pullover-hoodie_pi3408000_altimages_ff_3408140-9df012f70848962cbc47alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnOeq0"
    },
    {
      "title": "Men's New York Red Bulls Fanatics Red Red Card Transitional Pullover Hoodie",
      "price": "$59.99",
      "originalPrice": "$59.99",
      "category": "Sweatshirts",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/mens-fanatics-red-new-york-red-bulls-red-card-transitional-pullover-hoodie_ss5_p-201747262+pv-1+u-qhejm7n4ie6uaiaterm8+v-pm6mlrps267cruv36t2w.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQ1eW"
    },
    {
      "title": "Youth New York Red Bulls adidas Tan 2025 Stone Kit Replica Custom Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Kids Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/new-york-red-bulls/youth-adidas-tan-new-york-red-bulls-2025-stone-kit-replica-custom-jersey_ss5_p-202709979+pv-1+u-fgiuq9l2vjtzihhskic0+v-9pkg7iyt7mfqi6canmkd.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjAzV9"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
       <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>New York Red Bulls</h1>
        <div className='mb-6'>
          <img
            src='/rb.png'
            alt='Red Bulls Logo' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/VxAGZJ"
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
            <li><strong>Full Name:</strong> New York Red Bulls</li>
            <li><strong>Nickname(s):</strong> The Red Bulls</li>
            <li><strong>Founded:</strong> 1994</li>
            <li><strong>Stadium:</strong> Red Bull Arena, Harrison, New Jersey</li>
            <li><strong>Capacity:</strong> 25,000</li>
            <li><strong>Owner:</strong> Red Bull GmbH</li>
            <li><strong>Head Coach:</strong> Sandro Schwarz</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Passion and Performance</h2>
          <p>
            The New York Red Bulls are one of Major League Soccer's most recognizable franchises, with a legacy rooted in their commitment to excellence on and off the pitch. Founded in 1994 as the MetroStars, the team was rebranded in 2006 under the ownership of Red Bull GmbH, and has since become one of the league's most successful and iconic clubs.
          </p>
          <p>
            Red Bull Arena in Harrison, New Jersey, has been their home since 2010, providing an electric atmosphere for fans and players alike. The team boasts passionate supporters and a competitive spirit that has led to several playoff appearances and an MLS Supporters' Shield.
          </p>
          <p>
            With standout players like Lewis Morgan, Patryk Klimala, and Cristian Cásseres Jr., the Red Bulls continue to be a powerhouse in MLS and a club with a rich history of success.
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

export default NYRedBulls;
