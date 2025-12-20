import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'seattle-sounders' }) => {
  const players = [
    { name: 'Jordan Morris', image: 'https://assets.goal.com/images/v3/getty-2090010997/crop/MM5DENBQGA5DCNRQGE5G433XMU5DKNRWHIYTAMA=/GettyImages-2090010997.jpg?auto=webp&format=pjpg&width=3840&quality=60', slug: './morris' },
    { name: 'Pedro de la Vega', image: 'https://cdn.seattlesports.com/sea710/wp-content/uploads/2024/01/GettyImages-1291846531.jpg', slug: './delavega' },
    { name: 'Albert Rusnák', image: 'https://sports.mynorthwest.com/wp-content/uploads/2024/06/Seattle-Sounders-Albert-Rusnak-controls-ball-Getty-900.jpg', slug: './rusnak' },
    { name: 'Cristian Roldan', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVBB6pHSdOyooVNbUjLO6ekf3Vpk7q5fBfg&s', slug: './roldan' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/seattle-sounders/${player.slug}`}
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

const Seattle = () => {
  const items = [
    {
      "title": "Men's Seattle Sounders FC adidas Blue 2025 The Salish Sea Kit Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-blue-seattle-sounders-fc-2025-the-salish-sea-kit-authentic-jersey_ss5_p-202652679+pv-1+u-jqchml2swjytzl1bfxfg+v-igorwaxomthpd1imqzls.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1e5G1"
    },
    {
      "title": "Men's Seattle Sounders FC adidas Blue 2025 The Salish Sea Kit Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-blue-seattle-sounders-fc-2025-the-salish-sea-kit-authentic-custom-jersey_ss5_p-202709850+pv-1+u-pzdzkwskv6topp5pkljd+v-zel1ixott0jcdgtdmqfg.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxAvW6"
    },
    {
      "title": "Men's Seattle Sounders FC adidas Blue 2025 The Salish Sea Kit Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-blue-seattle-sounders-fc-2025-the-salish-sea-kit-replica-jersey_ss5_p-202652755+pv-1+u-x5ewfdng2qrhba8q1fmj+v-txvvsdopbaos21tqrzsg.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxP5k0"
    },
    {
      "title": "Men's Seattle Sounders FC Sport Design Sweden Navy City Soul Oversized T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-sport-design-sweden-navy-seattle-sounders-fc-city-soul-oversized-t-shirt_ss5_p-202666828+pv-1+u-b7gx4svpzdjscofzt2rl+v-1jeu6g3kezs0hvqlf9lp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/K0OvA7"
    },
    {
      "title": "Men's Seattle Sounders FC adidas Aqua 2025 Travel Pullover Hoodie",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Men's Hoodies",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-aqua-seattle-sounders-fc-2025-travel-pullover-hoodie_ss5_p-201657327+pv-1+u-8vkzvteqdxvozayoerut+v-xoh0yxqsgzk1zarkb6q1.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyOZr5"
    },
    {
      "title": "Youth Seattle Sounders FC adidas Blue 2025 The Salish Sea Kit Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Youth Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/youth-adidas-blue-seattle-sounders-fc-2025-the-salish-sea-kit-replica-jersey_ss5_p-202658593+pv-1+u-grzprcsejocl4dawkpzi+v-2jjzfa63fxckqzm2jyvs.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9130"
    },
    {
      "title": "Women's Seattle Sounders FC adidas Blue 2025 The Salish Sea Kit Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Women's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/womens-adidas-blue-seattle-sounders-fc-2025-the-salish-sea-kit-replica-jersey_ss5_p-202658103+pv-1+u-onbojsqkz8qfx2qysulg+v-mcchmhabkghmqegq1mq2.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjAvr6"
    },
    {
      "title": "Men's Seattle Sounders FC New Era Light Blue Color Pack 9FORTY A-Frame Adjustable Trucker Hat",
      "price": "$32.99",
      "originalPrice": "$32.99",
      "category": "Men's Hats",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-new-era-light-blue-seattle-sounders-fc-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948615+pv-1+u-hfwtdnja0wrweqkrcgkq+v-ehiqoqxhmpkmwdlapcfu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/PORv9R"
    },
    {
      "title": "Men's Seattle Sounders FC Sport Design Sweden Cream Everyday Relaxed T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-sport-design-sweden-cream-seattle-sounders-fc-everyday-relaxed-t-shirt_ss5_p-202666804+pv-1+u-qkxfyu4egbprj3k0hnjd+v-t4nzfofrzqkrlpxykcbv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19yMLz"
    },
    {
      "title": "Men's Seattle Sounders FC adidas Blue 2025 The Salish Sea Kit Replica Custom Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-blue-seattle-sounders-fc-2025-the-salish-sea-kit-replica-custom-jersey_ss5_p-202709918+pv-1+u-oakc5zybr9nyoz1n5fnm+v-3umwxorzuyepxdlnuorg.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6Lv1z"
    },
    {
      "title": "Youth Seattle Sounders FC adidas Blue 2025 The Salish Sea Kit Replica Custom Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/youth-adidas-blue-seattle-sounders-fc-2025-the-salish-sea-kit-replica-custom-jersey_ss5_p-202709983+pv-1+u-ufzijzki5rwomp5escf8+v-nyvwbs2pvfqzdbkqxwui.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yM7N"
    },
    {
      "title": "Seattle Sounders FC 2025 Jersey Hook Scarf",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Accessories",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/seattle-sounders-fc-2025-jersey-hook-scarf_ss5_p-202815771+u-fcuyufnh2bjfz3owzfje+v-zyc9ucf2pva2zjhyjqqw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/2ayLqA"
    },
    {
      "title": "Men's Seattle Sounders FC Fanatics Black True Classic Flex Hat",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Men's Hats",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-fanatics-black-seattle-sounders-fc-true-classic-flex-hat_ss5_p-202684364+pv-1+u-xp6wwjkenr2pkpyxe0al+v-ktfsv3y6f3cjtidogyel.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/4GyxD3"
    },
    {
      "title": "Men's Seattle Sounders FC Sport Design Sweden Navy Game Day Relaxed T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens%C2%A0sport-design-sweden-navy-seattle-sounders-fc-game-day-relaxed-t-shirt_ss5_p-202666755+pv-1+u-8b76y2elnb9cdrm1ie5t+v-3xodyv9bn6guki5rxecc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOjJqO"
    },
    {
      "title": "Men's Seattle Sounders FC adidas Red 2024 The Bruce Lee Kit Replica Jersey",
      "price": "$69.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "as of 02/10/2024",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-red-seattle-sounders-fc-2024-the-bruce-lee-kit-replica-jersey_ss5_p-201102336+pv-1+u-diwn7lpuqeoz3pnyivfm+v-f9bcou2e13d2yqd9slut.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19yMBz"
    },
    {
      "title": "Men's Seattle Sounders FC Jordan Morris adidas Blue 2025 The Salish Sea Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "Most Popular in Jerseys",
      "imageUrl": "https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-jordan-morris-blue-seattle-sounders-fc-2025-the-salish-sea-kit-authentic-player-jersey_ss5_p-202900593+pv-1+u-ouksmx2pffnue9eszv9h+v-ajn0apkfyyguvauxfkj1.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45gDW"
    }
  ];
  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
        <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Seattle Sounders FC</h1>
        <div className='mb-6'>
          <img
            src='/Seattle.png'
            alt='Seattle' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/55yV7b"
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
            <li><strong>Full Name:</strong> Seattle Sounders Football Club</li>
            <li><strong>Nickname(s):</strong> The Sounders</li>
            <li><strong>Founded:</strong> 2007</li>
            <li><strong>Stadium:</strong> Lumen Field, Seattle, Washington</li>
            <li><strong>Capacity:</strong> 68,740</li>
            <li><strong>Owner:</strong> Seattle Sounders FC Ownership Group</li>
            <li><strong>Head Coach:</strong> Brian Schmetzer</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Excellence</h2>
          <p>
            Seattle Sounders FC is a prominent club in Major League Soccer, celebrated for its devoted fan base and competitive achievements. Established in 2007, the club has quickly made a name for itself with remarkable performances and community engagement.
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

export default Seattle;
