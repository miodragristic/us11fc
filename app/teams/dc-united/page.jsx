import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = ({ teamSlug = 'dc-united' }) => {
  const players = [
    { name: 'Christian Benteke', image: 'https://cdn.mos.cms.futurecdn.net/e8Zxx3N6t3F7Wieg7mQfuM.jpg', slug: './benteke' },
    // { name: 'Dominique Badji', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-dc/det2dl7m2vkyqsege7yt.jpg', link: './TaxiFountas' },
    // { name: 'Jackson Hopkins', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-dc/fn1nle8cbcz4yb6lqnkq.jpg', link: './FelipeMartins' },
    { name: 'Gabriel Pirani', image: 'https://wtop.com/wp-content/uploads/2024/06/GettyImages-2150745016-scaled.jpg', slug: './pirani' },
  ];



  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/dc-united/${player.slug}`}
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

const DCUnited = () => {
  const items = [
    {
      "title": "Men's D.C. United adidas White 2023 The Cherry Blossom Kit Authentic Jersey",
      "price": "$74.99",
      "originalPrice": "$159.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-white-dc-united-2023-the-cherry-blossom-kit-authentic-jersey_pi5273000_altimages_ff_5273525-6005f2e6d940b954b1dcalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxrKnM"
    },
    {
      "title": "Men's D.C. United adidas White 2023 The Cherry Blossom Kit Replica Jersey",
      "price": "$44.99",
      "originalPrice": "$99.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-white-dc-united-2023-the-cherry-blossom-kit-replica-jersey_pi5273000_altimages_ff_5273764-d3f90aaef190d3741ae9alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09A6RV"
    },
    {
      "title": "Men's D.C. United Sport Design Sweden Tan Everyday Relaxed T-Shirt",
      "price": "$29.99",
      "originalPrice": "$39.99",
      "category": "T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-sport-design-sweden-tan-dc-united-everyday-relaxed-t-shirt_ss5_p-202666808+pv-1+u-ke637eb7e3bittauen9z+v-lije7znrfzoddslx6wmx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/3JoKmB"
    },
    {
      "title": "Men's D.C. United adidas Black 2024 The Icon Kit Replica Jersey",
      "price": "$74.99",
      "originalPrice": "$99.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-black-dc-united-2024-the-icon-kit-replica-jersey_ss5_p-201273854+pv-1+u-m2bfvqppd2vuqn7kz9ot+v-zdmukfsjv6njasmk7gqr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLQKO5"
    },
    {
      "title": "Men's D.C. United adidas Natural 2025 The Soul Kit Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-natural-dc-united-2025-the-soul-kit-authentic-jersey_ss5_p-202652662+pv-1+u-imlmx3j13svoe61kmbrd+v-o4jixrqwbxo7xhzwwurr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raOKRR"
    },
    {
      "title": "Youth D.C. United Outerstuff Black Stalwart Defender T-Shirt",
      "price": "$23.99",
      "originalPrice": "$31.99",
      "category": "Kids T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/dc-united/youth-outerstuff-black-dc-united-stalwart-defender-t-shirt_ss5_p-201875234+pv-1+u-dcgcrn2lernyx3rypvhd+v-uhybivdgcxucn8wfqqss.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/bO2B5x"
    },
    {
      "title": "Men's D.C. United adidas Natural 2025 The Soul Kit Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-natural-dc-united-2025-the-soul-kit-replica-jersey_ss5_p-202652744+pv-1+u-tkiktqewnk1ezmanssbk+v-lr7pv4fvzyd5h5gxe3mm.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOgnr9"
    },
    {
      "title": "Women's D.C. United adidas White 2023 The Cherry Blossom Kit Replica Jersey",
      "price": "$19.99",
      "originalPrice": "$99.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/womens-adidas-white-dc-united-2023-the-cherry-blossom-kit-replica-jersey_pi5274000_altimages_ff_5274090-e8be617e4816e8be94f3alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXoKjX"
    },
    {
      "title": "Men's D.C. United adidas Black 2024 The Icon Kit Authentic Jersey",
      "price": "$119.99",
      "originalPrice": "$159.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-black-dc-united-2024-the-icon-kit-authentic-jersey_ss5_p-201092074+pv-1+u-bycn44t9agklncvsb5va+v-derymh0pqepyenrdfpun.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9LO6x3"
    },
    {
      "title": "Youth D.C. United adidas Natural 2025 The Soul Kit Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Kids Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/youth-adidas-natural-dc-united-2025-the-soul-kit-replica-jersey_ss5_p-202658582+pv-1+u-pwvf0zclz4wvidstddvl+v-j7zn1llikmyttljzuvun.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Dyn61d"
    },
    {
      "title": "Men's D.C. United Christian Benteke adidas Black 2024 The Icon Kit Replica Player Jersey",
      "price": "$101.24",
      "originalPrice": "$134.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-christian-benteke-black-dc-united-2024-the-icon-kit-replica-player-jersey_ss5_p-201204985+pv-1+u-pygtwia630xjmonxcwmc+v-wmgsxstyo4qfl3saswjg.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55YdL2"
    },
    {
      "title": "Men's D.C. United Christian Benteke adidas Natural 2025 The Soul Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-christian-benteke-natural-dc-united-2025-the-soul-kit-replica-player-jersey_ss5_p-202900476+pv-1+u-e4zhakq0ixamjklrrc4m+v-yei1rhyffkndzbc2bsnb.jpg?_hv=2&w=900",
      "link": "mlsstore.i8h2.net/zxrKBr"
    },
    {
      "title": "Unisex D.C. United Live Breathe Futbol Black Tekker Half-Zip Anorak Jacket",
      "price": "$112.49",
      "originalPrice": "$149.99",
      "category": "Jackets",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/unisex-live-breathe-futbol-black-dc-united-tekker-half-zip-anorak-jacket_ss5_p-201638121+pv-1+u-t3hs1eyaoqyaauoxau9q+v-81fojhia1wqwib5etkkv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09A61R"
    },
    {
      "title": "Men's D.C. United adidas Natural 2025 The Soul Kit Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-adidas-natural-dc-united-2025-the-soul-kit-authentic-custom-jersey_ss5_p-202709833+pv-1+u-j54eqpu9gns6fsnqnmk9+v-7a7szzxnn1e6geydyeia.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmOaEX"
    },
    {
      "title": "Men's D.C. United Fanatics Black/Red Striker Long Sleeve T-Shirt",
      "price": "$35.99",
      "originalPrice": "$44.99",
      "category": "T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyReEA"
    },
    {
      "title": "Men's FC Dallas Mitchell & Ness Dallas Burn City Full-Snap Satin Jacket",
      "brand": "Mitchell & Ness",
      "team": "FC Dallas / Dallas Burn",
      "color": "Unknown",
      "price": "$149.99",
      "shipsFree": true,
      "status": "Ready To Ship"
    },
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>D.C. United</h1>
        <div className='mb-6'>
          <img
            src='/DC.png'
            alt='Colorado Rapids' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className='flex gap-4 mb-8 justify-center'>
              <a 
            href="https://ticketnetwork.lusg.net/BnO654"
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
            <li><strong>Full Name:</strong> D.C. United</li>
            <li><strong>Nickname(s):</strong> The Black-and-Red</li>
            <li><strong>Founded:</strong> 1996</li>
            <li><strong>Stadium:</strong> Audi Field, Washington, D.C.</li>
            <li><strong>Capacity:</strong> 20,000</li>
            <li><strong>Owner:</strong> Jason Levien and Steve Kaplan</li>
            <li><strong>Head Coach:</strong> Troy Lesesne</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>One of the MLS Powerhouses</h2>
          <p>
            D.C. United is one of the most storied franchises in Major League Soccer. Founded in 1996, the club has been home to some of the league's brightest stars and has won multiple MLS Cup championships. 
          </p>
          <p>
            With passionate supporters and a strong presence in Washington D.C., D.C. United is a team with a proud history. Led by former England international Wayne Rooney as head coach, the team continues to fight for dominance in MLS, with key players like Christian Benteke and Taxi Fountas leading the charge.
          </p>
          <p>
            The team plays at Audi Field, a state-of-the-art venue in the heart of D.C. and remains a fan favorite throughout the league.
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

export default DCUnited;
