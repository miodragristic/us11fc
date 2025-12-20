import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'real-salt-lake' }) => {
  const players = [
    // { name: 'Axel Kei', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-real/yztd1gjeqfcgknmkmxfq.jpg', link: './AlbertRusnak' },
    // { name: 'Diogo Gonçalves', image: 'https://www.shutterstock.com/editorial/image-editorial/MfT5Q441N2z0Ue42MzI5NTA=/match-between-real-salt-lake-portland-timbers-220nw-14733382i.jpg', link: './DamirKreilach' },
    { name: 'Pablo Ruiz', image: 'https://bookingagentinfo.com/wp-content/uploads/2023/12/Pablo-Ruiz-1.jpg', slug: './pablo' },
    { name: 'Diego Luna', image: 'https://www.abc4.com/wp-content/uploads/sites/4/2024/07/GettyImages-2157934329.jpg', slug: './luna' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/real-salt-lake/${player.slug}`}
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

const RealSaltLake = () => {
  const items = [
    {
      "title": "Men's Real Salt Lake Sport Design Sweden Tan Everyday Relaxed T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/mens-sport-design-sweden-tan-real-salt-lake-everyday-relaxed-t-shirt_ss5_p-202666802+pv-1+u-azyjmwklvs1cvjn9kfax+v-a827u5bxecllojbnvvfq.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raLqLR"
    },
    {
      "title": "Men's Real Salt Lake adidas White 2025 Grid City Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/mens-adidas-white-real-salt-lake-2025-grid-city-replica-jersey_ss5_p-202652753+pv-1+u-8dlwbqyh0p4psltoazz6+v-4bmqilmpr9xpyurbmmtm.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQGQ0"
    },
    {
      "title": "Men's Real Salt Lake Navy Team Hometown Collection T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/mens-navy-real-salt-lake-team-hometown-collection-t-shirt_pi5281000_altimages_ff_5281746-27fb61085e42b763ba6balt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55yDyN"
    },
    {
      "title": "Youth Real Salt Lake adidas White 2025 Grid City Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Youth Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/youth-adidas-white-real-salt-lake-2025-grid-city-replica-jersey_ss5_p-202658591+pv-1+u-sntaiwjfpimjetsyh6lq+v-9mjxeszuprmlrkox0ond.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APn1n7"
    },
    {
      "title": "Men's Real Salt Lake adidas White 2025 Grid City Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/mens-adidas-white-real-salt-lake-2025-grid-city-authentic-jersey_ss5_p-202652675+pv-1+u-5oitbs5xzmklso7nqrux+v-bu12aiyg35lg7sdwoahl.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKO4OL"
    },
    {
      "title": "Men's Real Salt Lake New Era Gray Color Pack Two-Tone 9FIFTY Snapback Hat",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Hats",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/mens-new-era-gray-real-salt-lake-color-pack-two-tone-9fifty-snapback-hat_ss5_p-201948581+pv-1+u-87zrccpoz4peymf0gruu+v-xiyehqohc9lvebvu7pkp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxAvAE"
    },
    {
      "title": "Men's Real Salt Lake New Era Gray Color Pack 9FORTY A-Frame Adjustable Trucker Hat",
      "price": "$32.99",
      "originalPrice": "$32.99",
      "category": "Hats",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/mens-new-era-gray-real-salt-lake-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948603+pv-1+u-qnar7pqind53ibac11ck+v-r6nyqtkxguza4gdfbf77.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45g5m"
    },
    {
      "title": "Men's Real Salt Lake New Era Navy Color Pack A-Frame 59FIFTY Fitted Hat",
      "price": "$44.99",
      "originalPrice": "$44.99",
      "category": "Hats",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/mens-new-era-navy-real-salt-lake-color-pack-a-frame-59fifty-fitted-hat_ss5_p-201948561+pv-1+u-cew6d64nnuvt0jizu3ho+v-j4cjh248ujtqfanbhuii.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxP5P6"
    },
    {
      "title": "Men's Real Salt Lake New Era Tan Active 9TWENTY Adjustable Hat",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Hats",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/mens%C2%A0new-era-tan-real-salt-lake-active-9twenty-adjustable-hat_ss5_p-202314650+pv-1+u-poo7a2ewqpbjybylqjoi+v-nqbuxx49pfjm8csoq2ay.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEOgRK"
    },
    {
      "title": "Men's Real Salt Lake Fanatics Black Fundamentals Stealth T-Shirt",
      "price": "$19.99",
      "originalPrice": "$29.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "Reduced",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/mens-fanatics-black-real-salt-lake-fundamentals-stealth-t-shirt_ss5_p-201167542+pv-1+u-vhnhopipj7myameky43k+v-xeimaml9rhmn81tghahw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yqjP4W"
    },
    {
      "title": "Anderson Julio Real Salt Lake Autographed Fanatics Authentic Match-Used #29 Gold adidas Jersey from the 2024 MLS Season - Size S",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Men's Jerseys",
      "shipping": "Almost Gone!",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/anderson-julio-real-salt-lake-autographed-match-used-number-29-red-adidas-jersey-from-the-2024-mls-season-size-s_ss5_p-202767448+pv-1+u-qukydmjewtxk2uctq9dp+v-epf7wehnj5of8b7tg37r.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXPZgX"
    },
    {
      "title": "Andrew Brody Real Salt Lake Autographed Fanatics Authentic Match-Used #2 Red adidas Jersey from the 2024 MLS Season - Size S",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Men's Jerseys",
      "shipping": "Almost Gone!",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/real-salt-lake/andrew-brody-real-salt-lake-autographed-match-used-number-2-gold-adidas-jersey-from-the-2024-mls-season-size-s_ss5_p-202767454+pv-1+u-p1kalmrz7hazmbrinmcv+v-bezbkue5zc4jqodimtcu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/bOPr5k"
    }
  ]
  ;
  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
       <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Real Salt Lake</h1>
        <div className='mb-6'>
          <img
            src='/Real.png'
            alt='Real' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/PORPrM"
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
            <li><strong>Full Name:</strong> Real Salt Lake</li>
            <li><strong>Nickname(s):</strong> RSL</li>
            <li><strong>Founded:</strong> 2005</li>
            <li><strong>Stadium:</strong> Rio Tinto Stadium, Sandy, Utah</li>
            <li><strong>Capacity:</strong> 20,213</li>
            <li><strong>Owner:</strong> Dell Loy Hansen</li>
            <li><strong>Head Coach:</strong> Pablo Mastroeni</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>


        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Proud Legacy in Utah</h2>
          <p>
            Real Salt Lake has been a significant part of Major League Soccer since 2005. Known for their solid defense and passionate fanbase, RSL has enjoyed significant success, including an MLS Cup victory in 2009 and a strong presence in the playoffs over the years.
          </p>
          <p>
            The club plays at the stunning Rio Tinto Stadium in Sandy, Utah, where their dedicated supporters fill the stands and create an incredible atmosphere. With standout players like Albert Rusnák and Damir Kreilach, RSL has maintained a competitive edge in the MLS.
          </p>
          <p>
            The club prides itself on developing homegrown talent and maintaining a competitive roster to challenge for top honors in Major League Soccer.
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

export default RealSaltLake;
