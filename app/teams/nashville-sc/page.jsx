import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
 

const TrendingPlayers = ({ teamSlug = 'nashville-sc' }) => {
  const players = [
   
    { name: 'Walker Zimmerman', image: 'https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju', slug: './zimmerman' },
    
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/nashville-sc/${player.slug}`}
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

const blogPosts = [
  {
    id: 20,
    title: 'Walker Zimmerman Is Back',
    author: 'Mio Ristic',
    date: 'May 26, 2025',
    excerpt: 'After a period sidelined by injury, Walker Zimmerman returns to strengthen Nashville SC’s defense.',
    imageUrl: 'https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju',
    link: '/blog/zimmerman-is-back',
   }
  ]

 

const NashvilleSC = () => {
  const items = [
    {
      "title": "Men's Nashville SC Sport Design Sweden Cream Game Day Relaxed T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men T-Shirts",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens%C2%A0sport-design-sweden-cream-nashville-sc-game-day-relaxed-t-shirt_ss5_p-202666745+pv-1+u-26iv086c6rjnzayz1ud8+v-jtyce1awffuhqisfuupp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqWqA"
    },
    {
      "title": "Men's Nashville SC adidas Black 2023 Man In Black Kit Replica Jersey",
      "price": "$29.99",
      "originalPrice": "$99.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Most Popular in Nashville SC",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-black-nashville-sc-2023-man-in-black-kit-replica-jersey_pi5273000_ff_5273770-9a9ba13f5c9c484b448a_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEOZO2"
    },
    {
      "title": "Men's Nashville SC adidas Black 2023 Man In Black Kit Authentic Jersey",
      "price": "$62.99",
      "originalPrice": "$159.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Most Popular in Jerseys",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-black-nashville-sc-2023-man-in-black-kit-authentic-jersey_ss5_p-5273531+pv-1+u-089v693lfbum3ur6mgmc+v-x2gmkixtdqjhl0g11ctd.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/N9R6RV"
    },
    {
      "title": "Men's Nashville SC New Era Gray Color Pack 9FORTY A-Frame Adjustable Trucker Hat",
      "price": "$32.99",
      "originalPrice": "$32.99",
      "category": "Hats",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-new-era-gray-nashville-sc-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948620+pv-1+u-5rodw5znbhqfqqd5kqwx+v-l6yl6jbqcwyt1k7u0529.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzm2mY"
    },
    {
      "title": "Youth Nashville SC Outerstuff Navy Stalwart Defender T-Shirt",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Youth T-Shirts",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
            "imageUrl": "https://images.footballfanatics.com/nashville-sc/youth-outerstuff-navy-nashville-sc-stalwart-defender-t-shirt_ss5_p-201875223+pv-1+u-ntclsgkji8ql7imjqoy4+v-notgdzap2pukayimf8si.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjA6Ao"
    },
    {
      "title": "Men's Nashville SC adidas Navy 2025 The Heart Of Nashville Kit Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Most Popular in Men Jerseys",
            "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-navy-nashville-sc-2025-the-heart-of-nashville-kit-authentic-custom-jersey_ss5_p-202709840+pv-1+u-d8cmbrztqxbnujpbkr1p+v-daykbbe5dewxkihagzyb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9o9L"
    },
    {
      "title": "Youth Nashville SC adidas Navy 2025 The Heart of Nashville Kit Replica Custom Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/youth-adidas-navy-nashville-sc-2025-the-heart-of-nashville-kit-replica-custom-jersey_ss5_p-202709977+pv-1+u-zhlhptzouhk3ehc4cffw+v-pwywyzluztvamgbxyq1f.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnO2Ry"
    },
    {
      "title": "Men's Nashville SC Fanatics Black Stealth Flex Hat",
      "price": "$22.99",
      "originalPrice": "$29.99",
      "category": "Hats",
      "shipping": "Ships Free",
      "availability": "Most Popular in Hats",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-fanatics-black-nashville-sc-stealth-flex-hat_ss5_p-200211781+pv-1+u-vypytrhgd4i8ciywrutg+v-jjtc4nwm6m3r59tsb30w.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6yngVq"
    },
    {
      "title": "Men's Nashville SC New Era Navy Color Pack A-Frame 59FIFTY Fitted Hat",
      "price": "$44.99",
      "originalPrice": "$44.99",
      "category": "Hats",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-new-era-navy-nashville-sc-color-pack-a-frame-59fifty-fitted-hat_ss5_p-201948540+pv-1+u-engjhadpklaq5ipnfqf9+v-mrjph5lczuz4jb4x5dfx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55y7Kn"
    },
    {
      "title": "Men's Nashville SC Sport Design Sweden Charcoal Everyday Relaxed T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men T-Shirts",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-sport-design-sweden-charcoal-nashville-sc-everyday-relaxed-t-shirt_ss5_p-202666794+pv-1+u-mtxhumlnvmgaztztmbh9+v-wjrjyq4qnycvjzvtbouo.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APnEBR"
    },
    {
      "title": "Women's Nashville SC adidas Yellow 2024 The 615 Kit Replica Jersey",
      "price": "$49.99",
      "originalPrice": "$99.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/womens-adidas-yellow-nashville-sc-2024-the-615-kit-replica-jersey_ss5_p-201099312+pv-1+u-ne36fpmfcjjwrz7rlduq+v-o5vvcrhdvkj2euia79v0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6LyqR"
    },
    {
      "title": "Men's Nashville SC Sport Design Sweden Navy Hometown T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men T-Shirts",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens%C2%A0sport-design-sweden-navy-nashville-sc-hometown-t-shirt_ss5_p-202666844+pv-1+u-86ip04p2cetjqst0hguo+v-t3cpnqsmlj5nlt27rosz.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyAGg3"
    },
    {
      "title": "Women's Nashville SC Gameday Couture Gray Tackle Titan Oversized Snow Wash T-Shirt",
      "price": "$44.99",
      "originalPrice": "$44.99",
      "category": "Women T-Shirts",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/womens-gameday-couture-gray-nashville-sc-tackle-titan-oversized-snow-wash-t-shirt_ss5_p-202369955+pv-1+u-umpkvcrziyydxftt6haz+v-v3filp6wkxt3fejlwqul.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOk7eQ"
    },
    {
      "title": "Youth Nashville SC Hany Mukhtar adidas Navy 2025 The Heart of Nashville Kit Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/youth-adidas-hany-mukhtar-navy-nashville-sc-2025-the-heart-of-nashville-kit-replica-player-jersey_ss5_p-202842108+pv-1+u-uiwwpcgl8riwrxs58cck+v-muw2fc4hhtfcb4sxpcvz.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/7anJd3"
    },
    {
      "title": "Men's Nashville SC adidas Navy 2025 The Heart of Nashville Kit Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-navy-nashville-sc-2025-the-heart-of-nashville-kit-replica-jersey_ss5_p-202652749+pv-1+u-2bcrc9sq7far2umsr9fe+v-6urbygrr4zerdyzhzmjv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyOkqy"
    },
    {
      "title": "Men's Nashville SC Walker Zimmerman adidas Navy 2025 The Heart of Nashville Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-walker-zimmerman-navy-nashville-sc-2025-the-heart-of-nashville-kit-replica-player-jersey_ss5_p-202842098+pv-1+u-rrpb3siqbikzvtebvotw+v-zvxygw5saqhx5ptg7lzf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQO5n"
    },
    {
      "title": "Women's Nashville SC adidas Navy 2025 The Heart of Nashville Kit Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/womens-adidas-navy-nashville-sc-2025-the-heart-of-nashville-kit-replica-jersey_ss5_p-202658097+pv-1+u-kq10ztdciazfy8m7aaty+v-hlvqsbzjgh3v5jjmwp3q.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9okM"
    },
    {
      "title": "Men's Nashville SC adidas Navy 2025 The Heart Of Nashville Kit Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-navy-nashville-sc-2025-the-heart-of-nashville-kit-authentic-jersey_ss5_p-202652669+pv-1+u-tubrc4uty1sqpacjsbkd+v-d3zk3qn3h7qiewlvzjmr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APnEAR"
    },
    {
      "title": "Men's Nashville SC Hany Mukhtar adidas Navy 2025 The Heart of Nashville Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/nashville-sc/mens-adidas-hany-mukhtar-navy-nashville-sc-2025-the-heart-of-nashville-kit-authentic-player-jersey_ss5_p-202842105+pv-1+u-vjuqsbiaud732i7nbfvb+v-ec3xjacapglkkypdfcyp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXP2Ax"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
       <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Nashville SC</h1>
        <div className='mb-6'>
          <img
            src='/Nashville.png'
            alt='Nashville' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/K0ODJv"
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
            <li><strong>Full Name:</strong> Nashville SC</li>
            <li><strong>Nickname(s):</strong> The Boys in Gold</li>
            <li><strong>Founded:</strong> 2018</li>
            <li><strong>Stadium:</strong> GEODIS Park, Nashville, Tennessee</li>
            <li><strong>Capacity:</strong> 30,000</li>
            <li><strong>Owner:</strong> John Ingram</li>
            <li><strong>Head Coach:</strong> B. J. Callaghan</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A New Force in MLS</h2>
          <p>
            Nashville SC is one of the youngest clubs in Major League Soccer, having been established in 2018. Despite its relative youth, the club has quickly made an impact in the league, capturing the hearts of fans across Nashville and beyond.
          </p>
          <p>
            Playing at the state-of-the-art GEODIS Park, Nashville SC has built a passionate and loyal fanbase. Known for its rock-solid defense and tactical play, the team is a serious contender in every match it plays.
          </p>
          <p>
            With star players like Hany Mukhtar and Walker Zimmerman, Nashville SC is poised to continue its rise in MLS. The team aims to challenge for championships and create a lasting legacy in Nashville.
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

export default NashvilleSC;
