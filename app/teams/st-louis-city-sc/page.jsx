import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'st-louis-city-sc' }) => {
  const players = [
    { name: 'João Klauss', image: 'https://assets.goal.com/images/v3/getty-145494572/crop/MM5DCMZWGY5DONRYHJXG653FHIYDUMJVGA======/GettyImages-145494572.jpg?auto=webp&format=pjpg&width=3840&quality=60', slug: './klauss' },
    // { name: 'Tomáš Ostrák', image: 'https://geissblog.koeln/wp-content/uploads/2025/01/carstensen_leihe.webp', link: './ostrak' },
    { name: 'Chris Durkin', image: 'https://s3.amazonaws.com/assets.thisisasn.com/production/attacheds/13170/original/Chris_Durkin_-_ASN_TOP_-_ISI_-_2019_U-20_WC_vs_Ecuador_-_Adam_Nurkiewicz.jpg?1569464355', slug: './durkin' },
    { name: 'Marcel Hartel', image: 'https://cdn.prod.www.11freunde.de/images/b5d24b92-98da-4fc7-b44f-58c371297bb0_w1200_r1_fpx52_fpy50.jpg', slug: './hartel' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/st-louis-city-sc/${player.slug}`}
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

const StLouisCitySC = () => {
  const items = [
    {
      "title": "Men's St. Louis City SC adidas Red 2023 CITY Kit Authentic Jersey",
      "price": "$78.99",
      "originalPrice": "$159.99",
      "category": "Men's Jerseys",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-red-st-louis-city-sc-2023-city-kit-authentic-jersey_pi5229000_altimages_ff_5229599-574f0e87b9fc4f8fd77falt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPMOO"
    },
    {
      "title": "Men's St. Louis City SC Navy Logo T-Shirt",
      "price": "$17.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-navy-st-louis-city-sc-logo-t-shirt_pi4735000_altimages_ff_4735683-196910dafbf8ace3c05balt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yqzM"
    },
    {
      "title": "San Diego FC Fanatics Authentic Framed 13\" x 16\" Inaugural Home Match vs. St. Louis City SC on March 1, 2025 Collage with a Piece of Match-Used Soccer Ball - Limited Edition of 100",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Memorabilia",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/san-diego-fc/san-diego-fc-framed-13-x-16-inaugural-home-match-vs-st-louis-city-sc-on-march-1-2025-collage-with-a-piece-of-match-used-soccer-ball-limited-edition-of-100_ss5_p-202892883+u-cg8pfwlu5gfb2aoasqwv+v-m1ll1lajkkgauhopdnjo.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEOBAP"
    },
    {
      "title": "Men's St. Louis City SC Sport Design Sweden Tan Everyday Relaxed T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-sport-design-sweden-tan-st-louis-city-sc-everyday-relaxed-t-shirt_ss5_p-202666806+pv-1+u-dpglzbg1nuouxxzajif3+v-lfs1yfyuyimuplaljqby.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXPMV6"
    },
    {
      "title": "Youth St. Louis City SC Outerstuff Navy Stalwart Defender T-Shirt",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Youth T-Shirts",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/youth-outerstuff-navy-st-louis-city-sc-stalwart-defender-t-shirt_ss5_p-201875232+pv-1+u-0zkiihjiyhudv99vbrmx+v-wtjanbiz20dt1f6iqrzj.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/bOPXQ9"
    },
    {
      "title": "Women's St. Louis City SC adidas Red 2023 CITY Kit Replica Jersey",
      "price": "$29.99",
      "originalPrice": "$99.99",
      "category": "Women's Jerseys",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/womens-adidas-red-st-louis-city-sc-2023-city-kit-replica-jersey_pi5216000_altimages_ff_5216872-8d5436fd67247868b2dealt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/OeOqEQ"
    },
    {
      "title": "Women's St. Louis City SC Gameday Couture Charcoal Fleece Pullover Sweatshirt",
      "price": "$53.99",
      "originalPrice": "$53.99",
      "category": "Women's Sweatshirts",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/womens-gameday-couture-charcoal-st-louis-city-sc-fleece-pullover-sweatshirt_ss5_p-200741267+pv-1+u-eqpqbea5d9clyl9ena8n+v-wowbvtwbplmhs7qnmaul.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/2ayD7z"
    },
    {
      "title": "Men's St. Louis City SC adidas Red 2023 CITY Kit Replica Jersey",
      "price": "$29.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-red-st-louis-city-sc-2023-city-kit-replica-jersey_pi5216000_altimages_ff_5216864-3d7649368da96aab091falt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQMmd"
    },
    {
      "title": "Men's St. Louis City SC Gray Official Logo Pullover Hoodie",
      "price": "$34.99",
      "originalPrice": "$64.99",
      "category": "Men's Hoodies",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-gray-st-louis-city-sc-official-logo-pullover-hoodie_pi5104000_altimages_ff_5104171-a8431e01fd3c1f3b5253alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/4Gy9M9"
    },
    {
      "title": "Men's St. Louis City SC Navy Custom Team Authentic T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-navy-st-louis-city-sc-custom-team-authentic-t-shirt_ss5_p-202808229+pv-1+u-kywdcx2cx4wmbsj24dcy+v-ezu4pk05pc7e56iowolk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOkBrM"
    },
    {
      "title": "Men's St. Louis City SC White Team Script Relaxed T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-white-st-louis-city-sc-team-script-relaxed-t-shirt_ss5_p-202666789+pv-1+u-llbcdfjiizdbkghqyq8b+v-nkqyh0fukxoql9zzz51p.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/N9RLE7"
    },
    {
      "title": "Men's St. Louis City SC Fanatics Red Libero Trucker Adjustable Hat",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Men's Hats",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-fanatics-red-st-louis-city-sc-libero-trucker-adjustable-hat_ss5_p-201747646+pv-1+u-fvofrb81gizgiyaweg6d+v-yexnaajd2jubrztyocvv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yqjMoV"
    },
    {
      "title": "Men's St. Louis City SC adidas Red 2025 Forever CITY Red Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-red-st-louis-city-sc-2025-forever-city-red-authentic-jersey_ss5_p-202644597+pv-1+u-b6fltysix9s0kxsvr7gg+v-cr8xdwlxbjprm5ayi9hc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRbeKJ"
    },
    {
      "title": "Men's St. Louis City SC adidas Red 2025 Travel Pullover Hoodie",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Men's Hoodies",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-adidas-red-st-louis-city-sc-2025-travel-pullover-hoodie_ss5_p-201657329+pv-1+u-yxuh6girrfnsx90mkrwh+v-eupwxov6xjdxq1reo450.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2OEJ"
    },
    {
      "title": "Men's St. Louis City SC Fanatics Red Blindside T-Shirt",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Men's T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/mens-fanatics-red-st-louis-city-sc-blindside-t-shirt_ss5_p-202688149+pv-1+u-b9ejhb8ul6covtbouylg+v-i1pyqiyzeghsv3iyglln.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/7anPKA"
    },
    {
      "title": "Women's St. Louis City SC adidas White 2024 The Confluence Kit Replica Jersey",
      "price": "$49.99",
      "originalPrice": "$99.99",
      "category": "Women's Jerseys",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/womens-adidas-white-st-louis-city-sc-2024-the-confluence-kit-replica-jersey_ss5_p-201102380+pv-1+u-0wnn1qkycpliebz6xfzw+v-svajca27f8pcemzgaszr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOjM1e"
    },
    // {
    //   "title": "Toddler St. Louis City SC Red Charming Dude Top & Short Set",
    //   "price": "$44.99",
    //   "originalPrice": "$44.99",
    //   "category": "Toddler Sets",
    //   "availability": "available",
    //   "imageUrl": "null",
    //   "link": "null"
    // },
    // {
    //   "title": "St. Louis City SC WinCraft 2-Sided 12'' x 18'' Applique Garden Flag",
    //   "price": "$21.99",
    //   "originalPrice": "$21.99",
    //   "category": "Home & Garden",
    //   "availability": "available",
    //   "imageUrl": "null",
    //   "link": "null"
    // },
    {
      "title": "Youth St. Louis City SC adidas Red 2025 Forever CITY Red Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Youth Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/st-louis-city-sc/youth-adidas-red-st-louis-city-sc-2025-forever-city-red-replica-jersey_ss5_p-202649409+pv-1+u-vkrno4zsgzv1kba69m1j+v-3nin1vliankkv9gn4zap.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnOgk1"
    }    
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>St. Louis City SC</h1>
        <div className='mb-6'>
          <img
            src='/Stl.png'
            alt='Stl' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/bOPEmg"
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
            <li><strong>Full Name:</strong> St. Louis City SC</li>
            <li><strong>Nickname(s):</strong> The City</li>
            <li><strong>Founded:</strong> 2023</li>
            <li><strong>Stadium:</strong> CITYPARK, St. Louis, Missouri</li>
            <li><strong>Capacity:</strong> 22,500</li>
            <li><strong>Owner:</strong> St. Louis CITY SC</li>
            <li><strong>Head Coach:</strong> Olof Mellberg</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A New Era in St. Louis Soccer</h2>
          <p>
            St. Louis City SC is the newest addition to Major League Soccer, having joined the league in 2023. With a state-of-the-art stadium in CITYPARK and a passionate fan base, the team is setting the stage for an exciting new chapter in MLS.
          </p>
          <p>
            Known for its attacking style of play and a strong commitment to local talent, St. Louis City SC is ready to make a mark on the league. With players like Jared Stroud, Indiana Vassilev, and Klaus, the team is poised for success as they embark on their inaugural season.
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

export default StLouisCitySC;
