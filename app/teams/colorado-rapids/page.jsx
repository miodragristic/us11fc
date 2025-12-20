import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = ({ teamSlug = 'colorado-rapids' }) => {
  const players = [
    { name: 'Keegan Rosenberry', image: 'https://burgundywave.com/wp-content/uploads/2023/09/EDP30279.jpg', slug: './rosenberry' },
    // { name: 'Djordje Mihailovic', image: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/6057277724001/81fbb3c7-8451-4448-94bc-6b9fefe1fd24/fcb23ad0-8a30-46c2-8c37-6406f1dc0142/1280x720/match/image.jpg', slug: './mihailovic' },
    { name: 'Andreas Maxsø', image: 'https://www.tipsbladet.dk/wp-content/uploads/1970/01/2XDKEGR-scaled.jpg', slug: './maxso' },
    // { name: 'Kévin Cabral', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-col/wfv1nkbvlqg9xqglkfzq.jpg', link: './cabral' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/colorado-rapids/${player.slug}`}
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

const ColoradoRapids = () => {
  const items = [
    {
      "title": "Men's Colorado Rapids Sport Design Sweden Mint City Soul Oversized T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-sport-design-sweden-mint-colorado-rapids-city-soul-oversized-t-shirt_ss5_p-202666832+pv-1+u-aj0oz8i6ygse3j75epkb+v-49ziqgd3h8zv1x7h2tqq.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/POVLBe"
    },
    {
      "title": "Youth Colorado Rapids adidas Green 2025 Headwaters Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Kids Jerseys",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/youth-adidas-green-colorado-rapids-2025-headwaters-replica-jersey_ss5_p-202658580+pv-1+u-ujmnl06vviq1gosiqf5v+v-hqcfrl93appibdiqclsb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxYrQO"
    },
    {
      "title": "Men's Colorado Rapids Charcoal Jersey Hook Hockey Pullover Hoodie",
      "price": "$94.99",
      "originalPrice": "$94.99",
      "category": "Sweatshirts",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-charcoal-colorado-rapids-jersey-hook-hockey-pullover-hoodie_ss5_p-202666865+u-k7eu9d1tpuvxvziyzocc+v-thj27i1lo96pjopfzfqa.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/gO6zrA"
    },
    {
      "title": "Youth Colorado Rapids Outerstuff Burgundy Stalwart Defender T-Shirt",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Kids T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/youth-outerstuff-burgundy-colorado-rapids-stalwart-defender-t-shirt_ss5_p-201875231+pv-1+u-p0qnoxkmbckwxjyckrcp+v-kllqiztgrr1lefahbrvr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09jrnR"
    },
    {
      "title": "Men's Colorado Rapids adidas Green 2025 Headwaters Replica Custom Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-adidas-green-colorado-rapids-2025-headwaters-replica-custom-jersey_ss5_p-202709905+pv-1+u-twpohtapr92bmfh1pgay+v-xnrgha6txicfcdhefnir.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6ydaxq"
    },
    {
      "title": "Men's Colorado Rapids Fanatics Burgundy Iconic Quarter-Zip Jacket",
      "price": "$29.99",
      "originalPrice": "$41.99",
      "category": "Jackets",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-fanatics-burgundy-colorado-rapids-iconic-quarter-zip-jacket_ss5_p-4647909+pv-1+u-y5qi56jlp69tw8vy3m0s+v-x0bigqnogowcth6a9evt.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1EoQO"
    },
    {
      "title": "Men's Colorado Rapids adidas Green 2025 Headwaters Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-adidas-green-colorado-rapids-2025-headwaters-replica-jersey_ss5_p-202652742+pv-1+u-ptyh0qov1wcafoqpngds+v-uaxfbkk8w1ew9dihostv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xL5xXk"
    },
    {
      "title": "Men's Colorado Rapids Fanatics Cream Tempo Corduroy Snapback Hat",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Hats",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-fanatics-cream-colorado-rapids-tempo-corduroy-snapback-hat_ss5_p-201747607+pv-1+u-rmsne923xvq3p2yl6tqm+v-uo6cbdmvwpzitf07hdps.jpg?_hv=2&w=900",
      "link": "http://mlsstore.i8h2.net/POVLY6"
    },
    {
      "title": "Men's Colorado Rapids New Era Burgundy Jersey Hook Cuff Knit Hat with Pom",
      "price": "$27.99",
      "originalPrice": "$27.99",
      "category": "Hats",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-new-era-burgundy-colorado-rapids-jersey-hook-cuff-knit-hat-with-pom_ss5_p-201155097+pv-1+u-aewpelxui7xkuhbvcatx+v-o7xxvm1hacbefp4ck0nd.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/POVLY6"
    },
    {
      "title": "Men's Colorado Rapids New Era White 2025 Jersey Hook 9SEVENTY Stretch-Snap Hat",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Hats",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-new-era-white-colorado-rapids-2025-jersey-hook-9seventy-stretch-snap-hat_ss5_p-202216444+pv-1+u-jzfuuw75abzqfn198mmx+v-mlubqzhudu0vpmhldcy3.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmnPo5"
    },
    {
      "title": "Colorado Rapids Green 2025 Jersey Hook Scarf",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Scarves",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/green-colorado-rapids-2025-jersey-hook-scarf_ss5_p-202840853+u-ktphmulphbhshosnakhz+v-xmk84kywglhgdqwgntqb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnyWe9"
    },
    {
      "title": "Men's Colorado Rapids Fanatics Burgundy Elevated Speed Flex Hat",
      "price": "$19.99",
      "originalPrice": "$27.99",
      "category": "Hats",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-fanatics-burgundy-colorado-rapids-elevated-speed-flex-hat_pi2995000_altimages_ff_2995608alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEenGX"
    },
    // {
    //   "title": "Men's Colorado Rapids New Era Black 2024 Kick Off Collection Golfer Snapback Hat",
    //   "price": "$34.99",
    //   "originalPrice": "$34.99",
    //   "category": "Hats",
    //   "imageUrl": "",
    //   "link": ""
    // },
    // {
    //   "title": "Men's Colorado Rapids New Era White 2025 Jersey Hook Cuffed Knit Hat with Pom",
    //   "price": "$29.99",
    //   "originalPrice": "$29.99",
    //   "category": "Hats",
    //   "imageUrl": "",
    //   "link": ""
    // },
    // {
    //   "title": "Sport Design Sweden Colorado Rapids Youth Light Blue Starting Lineup Home T-Shirt",
    //   "price": "$34.99",
    //   "originalPrice": "$34.99",
    //   "category": "Kids T-Shirts",
    //   "imageUrl": "",
    //   "link": ""
    // },
    {
      "title": "Men's Colorado Rapids adidas Green 2025 Headwaters Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/colorado-rapids/mens-adidas-green-colorado-rapids-2025-headwaters-authentic-jersey_ss5_p-202652660+pv-1+u-ucua6armdxjdpddyhexs+v-oik0ev53j5ndfq03cdfx.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeyE2n"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Colorado Rapids</h1>
        <div className='mb-6'>
          <img
            src='/Colorado.png'
            alt='Colorado Rapids' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
          <a 
            href="https://ticketnetwork.lusg.net/aOj0NQ"
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
            <li><strong>Full Name:</strong> Colorado Rapids</li>
            <li><strong>Nickname(s):</strong> The Rapids</li>
            <li><strong>Founded:</strong> 1996</li>
            <li><strong>Stadium:</strong> Dick's Sporting Goods Park, Commerce City, Colorado</li>
            <li><strong>Capacity:</strong> 18,000</li>
            <li><strong>Owner:</strong> Kroenke Sports Enterprises</li>
            <li><strong>Head Coach:</strong> Chris Armas</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Strong Legacy in the Mile High City</h2>
          <p>
            The Colorado Rapids are one of the founding members of Major League Soccer, established in 1996. With a passionate fan base and a rich history in the league, the Rapids are a proud member of the MLS family.
          </p>
          <p>
            Playing at the state-of-the-art Dick's Sporting Goods Park, the Rapids continue to be one of the most consistent teams in MLS, known for their hard-working mentality and commitment to developing young talent.
          </p>
          <p>
            With standout players like Diego Rubio and Jack Price, the team is well-equipped to challenge for the league title and remain competitive for years to come.
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

export default ColoradoRapids;
