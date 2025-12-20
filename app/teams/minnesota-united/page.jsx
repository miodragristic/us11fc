import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'minnesota-united' }) => {
  const players = [
    { name: 'Robin Lod', image: 'https://www.sportti.com/wp-content/uploads/2024/02/robin_lod_2023_minnesota.jpg', slug: './lod' },
    // { name: 'Franco Fragapane', image: 'https://northlandsoccer.com/wp-content/uploads/2023/05/2023.05.09_MINvPHL_USOC_0011_LAKE0231.jpg', link: './fragapane' },
    // { name: 'Teemu Pukki', image: 'https://www.sportti.com/wp-content/uploads/2024/03/teemu_pukki_2024maalis_minnesota.jpg', link: './pukki' },
    // { name: 'Kelvin Yeboah', image: 'data:image/jpeg;base64,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', link: './DayneStClair' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/minnesota-united/${player.slug}`}
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

const MinnesotaUnited = () => {
  const items = [
    {
      "title": "Men's Minnesota United FC adidas Light Blue 2025 Travel Pullover Hoodie",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Hoodies",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-light-blue-minnesota-united-fc-2025-travel-pullover-hoodie_ss5_p-201657317+pv-1+u-s520oysvkgx4xerm2sn5+v-ic1g9jiuy3gjgwxdzksu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjANBa"
    },
    {
      "title": "Men's Minnesota United FC Sport Design Sweden Tan Everyday Relaxed T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "T-Shirts",
      "shipping": "Ships Free",
      "availability": "Almost Gone! Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-sport-design-sweden-tan-minnesota-united-fc-everyday-relaxed-t-shirt_ss5_p-202666798+pv-1+u-zoek0gwmp19ds7ybseap+v-9lbgyt3rknrd4odh3x1j.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQnPM"
    },
    {
      "title": "Men's Minnesota United FC Sport Design Sweden Charcoal City Soul Oversized T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "T-Shirts",
      "shipping": "Ships Free",
      "availability": "Almost Gone! Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-sport-design-sweden-charcoal-minnesota-united-fc-city-soul-oversized-t-shirt_ss5_p-202666824+pv-1+u-77alz99r9qkckjfxalfu+v-rkplxlnu3yijztcfpl9g.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKO0xn"
    },
    {
      "title": "Youth Minnesota United FC Kelvin Yeboah adidas Blue 2025 CONVERGENCE Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Kids Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/youth-adidas-kelvin-yeboah-blue-minnesota-united-fc-2025-convergence-replica-player-jersey_ss5_p-202841081+pv-1+u-iv7jr83hkbqx1gxknq2u+v-woalcc8lcyfxxaw9427s.jpg?_hv=2&w=900",
      "link": "hhttps://mlsstore.i8h2.net/mOjXL7"
    },
    {
      "title": "Youth Minnesota United FC adidas Blue 2025 CONVERGENCE Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Kids Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/youth-adidas-blue-minnesota-united-fc-2025-convergence-replica-jersey_ss5_p-202658586+pv-1+u-i4aepyqtwnxkiira1fx1+v-fgt692pxn1x9e3kccpfj.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXPRqV"
    },
    {
      "title": "Men's Minnesota United FC adidas Blue 2025 CONVERGENCE Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-blue-minnesota-united-fc-2025-convergence-authentic-jersey_ss5_p-202652668+pv-1+u-iuvnun5goxhid4q3gsmh+v-uwwq04iuxi2w5ipzy7f3.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOjXL7"
    },
    {
      "title": "Men's Minnesota United FC Fanatics Black Red Card Transitional Pullover Hoodie",
      "price": "$59.99",
      "originalPrice": "$59.99",
      "category": "Hoodies",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-fanatics-black-minnesota-united-fc-red-card-transitional-pullover-hoodie_ss5_p-201747254+pv-1+u-cxnqnitb8xch2oc7c1kh+v-8s33tcc6lx5zpji9ne0t.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQ4G3"
    },
    {
      "title": "Youth Minnesota United FC Outerstuff Black Stalwart Defender T-Shirt",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Kids T-Shirts",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/youth-outerstuff-black-minnesota-united-fc-stalwart-defender-t-shirt_ss5_p-201875226+pv-1+u-6qtepeyjrf565m5j0xi6+v-mw8upg46g3ryaqs1q4ed.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2DGM"
    },
    {
      "title": "Minnesota United FC Primary Scarf",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Scarves",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/minnesota-united-fc-primary-scarf_ss5_p-201302930+u-kxdntm4v7nmhflfosoaf+v-ygzoighgqgnutzv67py4.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOjX97"
    },
    {
      "title": "Men's Minnesota United FC New Era Light Blue Color Pack Two-Tone 9FIFTY Snapback Hat",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Hats",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-new-era-light-blue-minnesota-united-fc-color-pack-two-tone-9fifty-snapback-hat_ss5_p-201948569+pv-1+u-u1oxkoemxt5p0cmsmjsn+v-oikcz37gccvcp8h3zaxc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9aL0"
    },
    {
      "title": "Sport Design Sweden Minnesota United FC Youth Light Blue Starting Lineup Home T-Shirt",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Kids T-Shirts",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/youth%C2%A0sport-design-sweden-light-blue-minnesota-united-fc-starting-lineup-home-t-shirt_ss5_p-202666937+pv-1+u-qjtwxxmla660mvjc7bio+v-h5xbcawchw9hzabesb35.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55yMO1"
    },
    {
      "title": "Men's Minnesota United FC adidas White 2023 The Northern Lights Kit Authentic Jersey",
      "price": "$74.99",
      "originalPrice": "$159.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-white-minnesota-united-fc-2023-the-northern-lights-kit-authentic-jersey_pi5273000_altimages_ff_5273530-e46646583be1e64cdfb2alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKO0r2"
    },
    {
      "title": "Men's Minnesota United FC Gray Official Logo Pullover Hoodie",
      "price": "$34.99",
      "originalPrice": "$64.99",
      "category": "Hoodies",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-gray-minnesota-united-fc-official-logo-pullover-hoodie_pi5104000_altimages_ff_5104112-cad459a45c85e9a48cfaalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqAyX"
    },
    {
      "title": "Minnesota United FC HD Knit Scarf - Blue",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Scarves",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/minnesota-united-fc-hd-knit-scarf-blue_pi3522000_altimages_ff_3522890-684e98a244fe394c99bbalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyA6Be"
    },
    {
      "title": "Men's Minnesota United FC Fanatics Black Libero Trucker Adjustable Hat",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Hats",
      "shipping": "Ships Free",
      "availability": "Almost Gone! Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-fanatics-black-minnesota-united-fc-libero-trucker-adjustable-hat_ss5_p-201747625+pv-1+u-iml6ol0dzbnsaudnl0qs+v-ptjemx7jtui8qseevgsd.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6ynP2m"
    },
      {
        "title": "Women's Minnesota United FC Gameday Couture Charcoal Fleece Pullover Sweatshirt",
        "price": "$53.99",
        "originalPrice": "$53.99",
        "category": "Sweatshirts",
        "shipping": "Ships Free",
        "availability": "",
        "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/womens-gameday-couture-charcoal-minnesota-united-fc-fleece-pullover-sweatshirt_ss5_p-200741252+pv-1+u-7tkunzvbaw7yinwvrdyh+v-2sps2ot2fw23kguwj0xq.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/xLrNEy"
      },
      {
        "title": "Men's Minnesota United FC adidas Black 2024 Starry Night Authentic Custom Jersey",
        "price": "$194.99",
        "originalPrice": "$194.99",
        "category": "Men Jerseys",
        "shipping": "Ships Free",
        "availability": "",
        "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-black-minnesota-united-fc-2024-starry-night-authentic-custom-jersey_ss5_p-202698420+pv-1+u-vko9lzwdzlxvi999z1lm+v-n3mm6blfpkxqmvwczhf6.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/kO9ogV"
      }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Minnesota United FC</h1>
        <div className='mb-6'>
          <img
            src='/Minnesota.png'
            alt='Minnesota' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/xLr7nO"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            BUY TICKET
          </a>
          <a 
            href="https://ticketnetwork.lusg.net/BnO6x0" 
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            HOTELS NEAR THE STADIUM
          </a>
        </div>

        {/* Club Information */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Club Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Minnesota United FC</li>
            <li><strong>Nickname(s):</strong> The Loons</li>
            <li><strong>Founded:</strong> 2010</li>
            <li><strong>Stadium:</strong> Allianz Field, Saint Paul, Minnesota</li>
            <li><strong>Capacity:</strong> 19,400</li>
            <li><strong>Owner:</strong> Minnesota United FC Ownership Group</li>
            <li><strong>Head Coach:</strong> Eric Ramsay</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

         {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Team with a Strong Identity</h2>
          <p>
            Minnesota United FC, commonly known as the Loons, is a Major League Soccer team based in Saint Paul, Minnesota. The team was founded in 2010 and has quickly become a key part of the state's sports culture. 
          </p>
          <p>
            Playing at Allianz Field, the team has made a name for itself with its passionate fanbase and distinctive identity. The Loons are recognized for their tough, resilient play and their commitment to building a competitive squad with players like Robin Lod and Emmanuel Reynoso.
          </p>
          <p>
            As the team continues to grow, Minnesota United FC aims to become a perennial contender in MLS, with the goal of winning trophies and continuing to build a strong soccer culture in the Twin Cities area.
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

export default MinnesotaUnited;
