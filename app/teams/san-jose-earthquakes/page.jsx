import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'san-jose-earthquakes' }) => {
  const players = [
    { name: 'Cristian Espinoza', image: 'https://www.bssnews.net/assets/news_photos/2023/05/07/image-124146-1683436293.jpg', slug: './espinoza' },
    { name: 'Cristian Arango', image: 'https://images.supersport.com/media/30sd15ex/cristian-arango-1200g.jpg?width=1920&quality=90&format=webp', slug: './arango' },
    // { name: 'Carlos Gruezo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrAixITzt_8NqTyu6Ya42MbQGtaqqyO40sg&s', link: './gruezo' },
    // { name: 'Amahl Pellegrino', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-sje/wwkldep6icahfxxj2bzs.jpg', link: './TannerBeason' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/san-jose-earthquakes/${player.slug}`}
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

const SanJoseEarthquakes = () => {
  const items = [
    {
      "title": "Men's San Jose Earthquakes adidas Black 2025 Headliner Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/mens-adidas-black-san-jose-earthquakes-2025-headliner-authentic-jersey_ss5_p-202644594+pv-1+u-fmdgdb4leizum27udntm+v-na2207mzke9pne7gxyag.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxAvQO"
    },
    {
      "title": "Youth San Jose Earthquakes Outerstuff Black Stalwart Defender T-Shirt",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Youth T-Shirts",
      "shipping": "",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/youth-outerstuff-black-san-jose-earthquakes-stalwart-defender-t-shirt_ss5_p-201875227+pv-1+u-0eezxnw9f1oar8jf6xdz+v-wwqj5u7azpt28op7kij8.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqerA"
    },
    {
      "title": "Men's San Jose Earthquakes adidas Black 2025 Headliner Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/mens-adidas-black-san-jose-earthquakes-2025-headliner-replica-jersey_ss5_p-202792756+pv-1+u-qif0szawjsqksxns5bp0+v-fpbdbg6lxvgpesyr4wqc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yMnR"
    },
    {
      "title": "Women's San Jose Earthquakes Fanatics Blue/Black Iconic Raglan Full-Zip Hoodie",
      "price": "$35.99",
      "originalPrice": "$59.99",
      "category": "Women's Hoodies",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/womens-fanatics-blue/black-san-jose-earthquakes-iconic-raglan-full-zip-hoodie_ss5_p-201198333+pv-1+u-qqu6gpxv8ofxwrq6gic4+v-luvcvvrsl5cyfy7vfsmi.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6ynQxq"
    },
    {
      "title": "Men's San Jose Earthquakes Fanatics Royal/Black Striker Long Sleeve T-Shirt",
      "price": "$33.99",
      "originalPrice": "$44.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/mens-fanatics-royal/black-san-jose-earthquakes-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372673-60caa306c36ea49577fbalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/RGZNLN"
    },
    {
      "title": "Men's San Jose Earthquakes New Era Gray Active 9TWENTY Adjustable Hat",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Men's Hats",
      "shipping": "",
      "availability": "Almost Gone! Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/mens-new-era-gray-san-jose-earthquakes-active-9twenty-adjustable-hat_ss5_p-200394546+pv-1+u-cannzamst9coarcrq5ly+v-ejtnuoupqnrbqyx4pwer.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOkPDj"
    },
    {
      "title": "Men's San Jose Earthquakes New Era Black 2025 Kickoff 59FIFTY Fitted Hat",
      "price": "$41.99",
      "originalPrice": "$41.99",
      "category": "Men's Hats",
      "shipping": "",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/mens-new-era-black-san-jose-earthquakes-2025-kickoff-59fifty-fitted-hat_ss5_p-202427728+pv-1+u-gjocroa72obioi0lsvjl+v-fbhklyjb2rar8cstk7ey.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yqjPO3"
    },
    {
      "title": "Men's San Jose Earthquakes New Era Black 2025 Kickoff 9TWENTY Adjustable Hat",
      "price": "$27.99",
      "originalPrice": "$27.99",
      "category": "Men's Hats",
      "shipping": "",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/mens-new-era-black-san-jose-earthquakes-2025-kickoff-9twenty-adjustable-hat_ss5_p-202427751+pv-1+u-eegh9mpsmxng1sbara2u+v-zlcnldjzvzkq23ne4jmy.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2vkq"
    },
    {
      "title": "Men's San Jose Earthquakes adidas White Replica Away Jersey",
      "price": "$39.99",
      "originalPrice": "$89.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "Reduced",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/mens-adidas-white-san-jose-earthquakes-replica-away-jersey_pi4091000_altimages_ff_4091026-718b6f5ad70fbff16732alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raLq0v"
    },
    {
      "title": "Men's San Jose Earthquakes Black Shielded T-Shirt",
      "price": "$17.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "Reduced",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/mens-black-san-jose-earthquakes-shielded-t-shirt_pi5107000_altimages_ff_5107218-ed6aa797c237b4819c7aalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/PORvAe"
    },
    {
      "title": "Men's San Jose Earthquakes Mitchell & Ness Orange Throwback Logo Snapback Hat",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Men's Hats",
      "shipping": "",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/mens-mitchell-and-ness-orange-san-jose-earthquakes-throwback-logo-snapback-hat_ss5_p-5338407+pv-1+u-vcx6tbg9badg3r5rmiuf+v-jy0wtetjb786vj5ij0n0.jpg?_hv=2&w=900d",
      "link": "https://mlsstore.i8h2.net/kO91kL"
    },
    {
      "title": "Men's San Jose Earthquakes New Era Tan Active 9TWENTY Adjustable Hat",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Men's Hats",
      "shipping": "",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/mens%C2%A0new-era-tan-san-jose-earthquakes-active-9twenty-adjustable-hat_ss5_p-202314645+pv-1+u-oocikas1oans4ttz4qm4+v-f9bdsgv090gkkeenqa9d.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKO4om"
    },
    {
      "title": "Men's San Jose Earthquakes White Away Authentic Jersey",
      "price": "$64.99",
      "originalPrice": "$129.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/mens-adidas-white-san-jose-earthquakes-away-authentic-jersey_pi4091000_altimages_ff_4091004-ca791a342fc69b63f52falt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/JKOvoq"
    },
    {
      "title": "Youth San Jose Earthquakes adidas Black 2025 Headliner Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Youth Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/san-jose-earthquakes/youth-adidas-black-san-jose-earthquakes-2025-headliner-replica-jersey_ss5_p-202792774+pv-5+u-dzhtfrbmxkey0jwtso8t+v-ufwu8stey19y2cuwpc9c.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqeLA"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>San Jose Earthquakes</h1>
        <div className='mb-6'>
          <img
            src='/SJ.png'
            alt='San Jose Earthquakes Logo' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
        <div className='flex gap-4 mb-8 justify-center'>
              <a 
            href="https://ticketnetwork.lusg.net/WyA1On"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            BUY TICKETS
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
            <li><strong>Full Name:</strong> San Jose Earthquakes</li>
            <li><strong>Nickname(s):</strong> The Quakes</li>
            <li><strong>Founded:</strong> 1994</li>
            <li><strong>Stadium:</strong> PayPal Park, San Jose, California</li>
            <li><strong>Capacity:</strong> 18,000</li>
            <li><strong>Owner:</strong> Earthquakes Soccer, LLC</li>
            <li><strong>Head Coach:</strong> Bruce Arena</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Rich Legacy in Silicon Valley</h2>
          <p>
            Founded in 1994, San Jose Earthquakes is one of Major League Soccer's most iconic teams, boasting a passionate fanbase in the heart of Silicon Valley. Known for their fast-paced, attacking style of play, the Quakes are always a team to watch.
          </p>
          <p>
            With a home at PayPal Park, the club has grown both on and off the field, building a strong squad with players like Cristian Espinoza, Jeremy Ebobisse, and Jackson Yueill. The Quakes are committed to competing for MLS championships and continuing their proud tradition in the league.
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

export default SanJoseEarthquakes;
