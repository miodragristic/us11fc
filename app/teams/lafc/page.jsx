import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = () => {
  const players = [
    { name: 'Denis Bouanga', image: 'https://cdn1.rangersnews.uk/uploads/24/2023/03/GettyImages-1246857078-1140x760.jpg', slug: './bouanga' },
    { name: 'Hugo Lloris', image: 'https://cdn1.thespurs.news/uploads/36/2024/02/GettyImages-2003725135-1140x760.jpg', slug: './lloris' },
    { name: 'Cristian Olivera', image: 'https://cdn1.vamofutebol.com/uploads/5/2025/01/GettyImages-2153266577-1140x760.jpg', slug: './olivera' },
    { name: 'Heung-Min Son', image: 'https://assets.goal.com/images/v3/getty-2229316055/crop/MM5DGNBTHA5DCOJTGQ5G433XMU5DAORRG44Q====/GettyImages-2229316055.jpg?auto=webp&format=pjpg&width=1920&quality=60', slug: './son' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/lafc/${player.slug}`}
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

const LAFC = () => {
  const items = [
    {
      "title": "Men's LAFC adidas Black 2024 Primary Authentic Jersey",
      "price": "$74.99",
      "originalPrice": "$159.99",
      "category": "Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-black-lafc-2024-primary-authentic-jersey_ss5_p-201092078+pv-1+u-fv9t2orchosjjnwluulu+v-d461j6hkn00cwdf1ry8i.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOjxkW"
    },
    {
      "title": "Men's LAFC New Era Black Icon 59FIFTY Fitted Hat",
      "price": "$26.99",
      "originalPrice": "$44.99",
      "category": "LAFC",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-new-era-black-lafc-icon-59fifty-fitted-hat_pi3275000_altimages_ff_3275871alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqAVr"
    },
    {
      "title": "Men's LAFC adidas Black 2019 Primary Authentic Jersey",
      "price": "$49.99",
      "originalPrice": "$119.99",
      "category": "Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-black-lafc-2019-primary-authentic-jersey_ss5_p-202258865+pv-1+u-eattxsxmbulkwzekopxd+v-7n4djj9zuhknlsfulshc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyA6LP"
    },
    {
      "title": "Women's LAFC New Era Black Script 9TWENTY Adjustable Hat",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Women Hats",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/womens%C2%A0new-era-black-lafc-script-9twenty-adjustable-hat_ss5_p-201948639+pv-1+u-afl28aqmgvv7ifkl1ps4+v-2ikmkdi85ps4dzkgmrpw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/RGZOX9"
    },
    {
      "title": "Women's LAFC adidas Black 2024 Primary Replica Jersey",
      "price": "$49.99",
      "originalPrice": "$99.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/womens-adidas-black-lafc-2024-primary-replica-jersey_ss5_p-201241508+pv-1+u-wt7fry1yoe8lb2yu4wft+v-anc0klegwygqoblydduq.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/7anG7A"
    },
    {
      "title": "Men's LAFC Black Team Hometown Collection Pullover Hoodie",
      "price": "$39.99",
      "originalPrice": "$74.99",
      "category": "Sweatshirts",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-black-lafc-team-hometown-collection-pullover-hoodie_ss5_p-5281771+pv-1+u-c7ocg2xdnsotqsdlokrz+v-wyuvhoysfz06bkwu4pwa.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raLz3Q"
    },
    {
      "title": "Men's LAFC New Era Black Icon 9TWENTY Adjustable Hat",
      "price": "$27.99",
      "originalPrice": "$27.99",
      "category": "Hats",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-new-era-black-lafc-icon-9twenty-adjustable-hat_pi3555000_altimages_ff_3555103-61c874092223facd7122alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjANrA"
    },
    {
      "title": "Unisex LAFC Fanatics Black LA Strong T-Shirt",
      "price": "$35.00",
      "originalPrice": "$35.00",
      "category": "T-Shirts",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/unisex-fanatics-black-lafc-la-strong-t-shirt_ss5_p-202756566+pv-1+u-ov8jf4yr4cf3ig0ixidg+v-cna6uykrpbjnavock0gb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOjxmZ"
    },
    {
      "title": "Men's LAFC Black Primary Logo II T-Shirt",
      "price": "$17.99",
      "originalPrice": "$34.99",
      "category": "T-Shirts",
      "shipping": null,
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-black-lafc-primary-logo-ii-t-shirt_ss5_p-2950106+pv-1+u-lysyt2gbmwdlghqpmzfv+v-iemw6bqhsqhlcptncrly.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmGLAa"
    },
    {
      "title": "Men's LAFC adidas Originals White/Gold Centennial 85 Low Basketball Shoes",
      "price": "$109.99",
      "originalPrice": "$109.99",
      "category": "Shoes",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-originals-white/gold-lafc-centennial-85-low-basketball-shoes_ss5_p-201671425+pv-1+u-bji7hoe5ccjpkayelfcv+v-sf82driziseifwewaiq3.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yx7V"
    },
    {
      "title": "Men's LAFC adidas White 2025 Secondary Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-white-lafc-2025-secondary-authentic-jersey_ss5_p-202652667+pv-1+u-wzrlfrzoakelkphn9zt0+v-36szgkyjwf16xtnnzcta.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/3Jy9xB"
    },
    {
      "title": "Men's LAFC adidas Green 2023 Smokescreen Replica Jersey",
      "price": "$27.99",
      "originalPrice": "$99.99",
      "category": "Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/mens-adidas-green-lafc-2023-smokescreen-replica-jersey_pi5273000_ff_5273768-e3c1f862a9d81fcf8dfa_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOk9gK"
    },
    {
      "title": "Women's LAFC Gameday Couture Gray Faded Wash Pullover Sweatshirt",
      "price": "$59.99",
      "originalPrice": "$59.99",
      "category": "Women Sweatshirts",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/lafc/womens-gameday-couture-gray-lafc-faded-wash-pullover-sweatshirt_pi5078000_ff_5078962-b32a361e72ba96ecf05f_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1erXj"
    }
  ]
  
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Los Angeles FC</h1>
      <div className='mb-6'>
          <img
            src='/Lafc.png'
            alt='LAFC' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/dOkmRy"
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
            <li><strong>Full Name:</strong> Los Angeles FC</li>
            <li><strong>Nickname(s):</strong> LAFC, The Black & Gold</li>
            <li><strong>Founded:</strong> 2014</li>
            <li><strong>Stadium:</strong> BMO Stadium, Los Angeles, California</li>
            <li><strong>Capacity:</strong> 22,000</li>
            <li><strong>Owner:</strong> LAFC Ownership Group</li>
            <li><strong>Head Coach:</strong> Steve Cherundolo</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

         {/* Additional Text */}
         <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A New Era in Los Angeles</h2>
          <p>
            Los Angeles FC is one of the newest teams in Major League Soccer, founded in 2014. Despite being a relatively new club, LAFC has already made a huge impact in the league, attracting international talent, a passionate fanbase, and producing some of the most exciting soccer in MLS.
          </p>
          <p>
            The club plays at the state-of-the-art BMO Stadium in downtown Los Angeles, a venue that reflects the team’s modern approach to the game. With world-class players like Carlos Vela and Diego Rossi, LAFC is always a contender for MLS Cup titles.
          </p>
          <p>
            LAFC's mission is to represent Los Angeles both on and off the field, embracing the city's diversity, culture, and passion for soccer. The team's relentless attacking play and commitment to high-quality soccer make them one of the most exciting teams to watch in MLS.
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

export default LAFC;
