import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = () => {
  const players = [
    {
      name: 'Hirving Lozano',
      image: 'https://images.supersport.com/media/e2dcgfwj/hirving-lozano-220924-celebrates-g-1050.jpg?width=1920&quality=90&format=webp',
      slug: 'lozano',
    },
    {
      name: 'Edson Álvarez',
      image: 'https://westhamblog.co.uk/wp-content/uploads/2024/06/mexico-v-brazil-international-friendly-scaled.jpg',
      slug: 'edsonalvarez',
    },
    {
      name: 'Orbelín Pineda',
      image: 'https://www.365scores.com/es/news/wp-content/uploads/2024/06/GettyImages-1477262240-1024x683.jpg',
      slug: 'pineda',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => {
          const resolvedTeamSlug = player.slug === 'lozano' ? 'san-diego' : 'mexico-national-team';

          return (
            <Link
              key={player.slug}
              href={`/teams/${resolvedTeamSlug}/${player.slug}`}
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
          );
        })}
      </div>
    </div>
  );
};

const MexicoNationalTeam = () => {
  const items = [
    {
      "title": "Men's Mexico National Team adidas Black 2025 Third Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men's Jerseys",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-black-mexico-national-team-2025-third-authentic-jersey_ss5_p-202920632+pv-1+u-girgctyndvhamcgvk0ys+v-ciqsfj2tp7xm7u8mbjg5.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WydjjX"
    },
    {
      "title": "Men's Mexico National Team adidas Originals Black 2025 Third Jersey Culturewear Full-Zip Track Jacket",
      "price": "$109.99",
      "originalPrice": "$109.99",
      "category": "Men's Jackets",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-originals-black-mexico-national-team-2025-third-jersey-culturewear-full-zip-track-jacket_ss5_p-201677338+pv-1+u-7nwzoteid0a70ngglzmz+v-uqcrrjghahoyekabcaq4.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09y4OJ"
    },
    {
      "title": "Unisex Mexico National Team adidas Originals Black 2025 Third Jersey Team Soccer Shoes",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Unisex Shoes",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/unisex-adidas-originals-black-mexico-national-team-2025-third-jersey-team-soccer-shoes_ss5_p-201676905+pv-1+u-6tn6at0wru24qgdonhhk+v-yiuxzbaucxqel47fukdm.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/OeOP5n"
    },
    {
      "title": "Men's Mexico National Team adidas Black 2025 Third Authentic Jersey",
      "price": "$184.99",
      "originalPrice": "$184.99",
      "category": "Men's Jerseys",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-black-mexico-national-team-2025-third-authentic-jersey_ss5_p-202936294+pv-1+u-gcs9uomsks9ugobm2lc4+v-fbvmyta0xdrlqnp7sl1a.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/4Gy4Ko"
    },
    {
      "title": "Youth Mexico National Team adidas Black 2025 Third Authentic Custom Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Youth Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/youth-adidas-black-mexico-national-team-2025-third-authentic-custom-jersey_ss5_p-202936318+pv-1+u-cokv7liwaxfybmxyowkz+v-9b94s4hqre4xfpd1mbek.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2rjo"
    },
    {
      "title": "Men's Mexico National Team adidas Black 2025 Third Jersey DNA Graphic T-Shirt",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Men's T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-black-mexico-national-team-2025-third-jersey-dna-graphic-t-shirt_ss5_p-201692945+pv-1+u-85mvk3bcxrw5opweu027+v-mdvouo7hqwuze2cy2hsu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOjQb1"
    },
    {
      "title": "Men's Mexico National Team adidas Originals Black 2025 Third Jersey Culturewear Track Pants",
      "price": "$89.99",
      "originalPrice": "$89.99",
      "category": "Men's Pants",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-originals-black-mexico-national-team-2025-third-jersey-culturewear-track-pants_ss5_p-201677341+pv-1+u-e72orolbwsbbysqrjm61+v-mi3edt8mdwm42p6hvml1.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raL5b3"
    },
    {
      "title": "Youth Mexico National Team adidas Black 2025 Third Authentic Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Youth Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/youth-adidas-black-mexico-national-team-2025-third-authentic-jersey_ss5_p-202920635+pv-1+u-qccu3ea76kauefmkwmv6+v-3yr2jg04zmw5mb087rmf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyO412"
    },
    {
      "title": "Men's Mexico National Team adidas Black/Gold 2025 Third Jersey Soccer Ball",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Men's Soccer Balls",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-black/gold-mexico-national-team-2025-third-jersey-soccer-ball_ss5_p-201638117+pv-1+u-cggmvhtjpe5rus2izv1o+v-s1qjmz5d7xdluzmshgdx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9xbL"
    },
    {
      "title": "Youth Mexico National Team adidas Green 2024 Away Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Youth Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/youth-adidas-green-mexico-national-team-2024-away-replica-jersey_ss5_p-201306535+pv-1+u-j7nsk1ff4u89lomuk0at+v-4pak8vasb6v3ilbfvcys.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/JKODWq"
    },
    {
      "title": "Men's Mexico National Team adidas Originals Black 2025 Third Jersey Culturewear Graphic T-Shirt",
      "price": "$54.99",
      "originalPrice": "$54.99",
      "category": "Men's T-Shirts",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-originals-black-mexico-national-team-2025-third-jersey-culturewear-graphic-t-shirt_ss5_p-201677335+pv-1+u-zpownsb6t0oecy8csloe+v-swdkswkzvtgaa9aaecit.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQAOv"
    },
    {
      "title": "Men's Mexico National Team Raul Jimenez adidas Black 2025 Third Authentic Player Jersey",
      "price": "$184.99",
      "originalPrice": "$184.99",
      "category": "Men's Jerseys",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-raul-jimenez-black-mexico-national-team-2025-third-authentic-player-jersey_ss5_p-202964138+pv-1+u-a6kfmpytm8dgevy1qrth+v-espp8b7hkqgkhwwcjcos.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRbZ0P"
    },
    {
      "title": "Men's Mexico National Team adidas Black 2025 Third Jersey Shorts",
      "price": "$59.99",
      "originalPrice": "$59.99",
      "category": "Men's Shorts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-black-mexico-national-team-2025-third-jersey-shorts_ss5_p-201701257+pv-1+u-ms3clu9l4frndtdhp0ln+v-ogil7yyoz3gwvdnu1nlu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxA1dO"
    },
    {
      "title": "Unisex Mexico National Team adidas Originals Black 2025 Third Jersey Culturewear Dad Adjustable Hat",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Unisex Hats",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/unisex-adidas-originals-black-mexico-national-team-2025-third-jersey-culturewear-dad-adjustable-hat_ss5_p-201677346+pv-1+u-kruo5odgyj9xzsr5zqf1+v-a774ttwe8aofmadjw17m.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45rJO"
    },
    {
      "title": "Men's Mexico National Team adidas Green 2024 Away Replica Custom Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-green-mexico-national-team-2024-away-replica-custom-jersey_ss5_p-201366746+pv-1+u-q39fmirlswswhyol6ln2+v-ev2usbegl6iebogwjaxx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXPmVA"
    },
    {
      "title": "Men's Mexico National Team Burgundy Sublimated Leisure Shorts",
      "price": "$47.99",
      "originalPrice": "$47.99",
      "category": "Men's Shorts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-burgundy-mexico-national-team-sublimated-leisure-shorts_ss5_p-201078012+pv-1+u-rh0yszjribtpk04ndpfs+v-ieoyg1xem0wsh8etn0la.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQAmv"
    },
    {
      "title": "Youth Mexico National Team adidas Burgundy 2024 Home Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Youth Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/youth-adidas-burgundy-mexico-national-team-2024-home-replica-jersey_ss5_p-201306401+pv-1+u-3epqkrk41lxrksm4ai2g+v-tjo7vbef0coprx1rhyoo.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2rEq"
    },
    {
      "title": "Men's Mexico National Team adidas Green 2024 Away Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mexico-national-team/mens-adidas-green-mexico-national-team-2024-away-replica-jersey_ss5_p-201306532+pv-1+u-xmg4aybkxfsbcwjvx2zl+v-qb8fz5fdme7hcwxitozj.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzmPoY"
    },
    
  // {
  //   "title": "Men's Mexico National Team adidas Black 2025 Third Authentic Jersey",
  //   "price": "$149.99",
  //   "originalPrice": "$149.99",
  //   "category": "Men's Jerseys",
  //   "availability": "almost gone",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Originals Black 2025 Third Jersey Culturewear Full-Zip Track Jacket",
  //   "price": "$109.99",
  //   "originalPrice": "$109.99",
  //   "category": "Men's Jackets",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Unisex Mexico National Team adidas Originals Black 2025 Third Jersey Team Soccer Shoes",
  //   "price": "$99.99",
  //   "originalPrice": "$99.99",
  //   "category": "Unisex Shoes",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Black 2025 Third Authentic Jersey",
  //   "price": "$184.99",
  //   "originalPrice": "$184.99",
  //   "category": "Men's Jerseys",
  //   "availability": "almost gone",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Youth Mexico National Team adidas Black 2025 Third Authentic Custom Jersey",
  //   "price": "$134.99",
  //   "originalPrice": "$134.99",
  //   "category": "Youth Jerseys",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Black 2025 Third Jersey DNA Graphic T-Shirt",
  //   "price": "$29.99",
  //   "originalPrice": "$29.99",
  //   "category": "Men's T-Shirts",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Originals Black 2025 Third Jersey Culturewear Track Pants",
  //   "price": "$89.99",
  //   "originalPrice": "$89.99",
  //   "category": "Men's Pants",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Youth Mexico National Team adidas Black 2025 Third Authentic Jersey",
  //   "price": "$99.99",
  //   "originalPrice": "$99.99",
  //   "category": "Youth Jerseys",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Black/Gold 2025 Third Jersey Soccer Ball",
  //   "price": "$29.99",
  //   "originalPrice": "$29.99",
  //   "category": "Soccer Ball",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Youth Mexico National Team adidas Green 2024 Away Replica Jersey",
  //   "price": "$79.99",
  //   "originalPrice": "$79.99",
  //   "category": "Youth Jerseys",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Originals Black 2025 Third Jersey Culturewear Graphic T-Shirt",
  //   "price": "$54.99",
  //   "originalPrice": "$54.99",
  //   "category": "Men's T-Shirts",
  //   "availability": "almost gone",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team Raul Jimenez adidas Black 2025 Third Authentic Player Jersey",
  //   "price": "$184.99",
  //   "originalPrice": "$184.99",
  //   "category": "Men's Jerseys",
  //   "availability": "almost gone",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Black 2025 Third Jersey Shorts",
  //   "price": "$59.99",
  //   "originalPrice": "$59.99",
  //   "category": "Men's Shorts",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Unisex Mexico National Team adidas Originals Black 2025 Third Jersey Culturewear Dad Adjustable Hat",
  //   "price": "$34.99",
  //   "originalPrice": "$34.99",
  //   "category": "Unisex Hats",
  //   "availability": "almost gone",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Green 2024 Away Replica Custom Jersey",
  //   "price": "$134.99",
  //   "originalPrice": "$134.99",
  //   "category": "Men's Jerseys",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team Burgundy Sublimated Leisure Shorts",
  //   "price": "$47.99",
  //   "originalPrice": "$47.99",
  //   "category": "Men's Shorts",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Youth Mexico National Team adidas Burgundy 2024 Home Replica Jersey",
  //   "price": "$79.99",
  //   "originalPrice": "$79.99",
  //   "category": "Youth Jerseys",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Green 2024 Away Replica Jersey",
  //   "price": "$99.99",
  //   "originalPrice": "$99.99",
  //   "category": "Men's Jerseys",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Unisex Mexico National Team adidas Originals Black 2025 Third Jersey Culturewear Bucket Hat",
  //   "price": "$34.99",
  //   "originalPrice": "$34.99",
  //   "category": "Unisex Hats",
  //   "availability": "almost gone",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Youth Mexico National Team adidas Black 2025 Third Jersey DNA Graphic T-Shirt",
  //   "price": "$24.99",
  //   "originalPrice": "$24.99",
  //   "category": "Youth T-Shirts",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Kelly Green Culture Bar T-Shirt",
  //   "price": "$34.99",
  //   "originalPrice": "$34.99",
  //   "category": "Men's T-Shirts",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Green 2024 Away Replica Long Sleeve Jersey",
  //   "price": "$109.99",
  //   "originalPrice": "$109.99",
  //   "category": "Men's Jerseys",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team Green Crest Full-Zip Hoodie",
  //   "price": "$39.99",
  //   "originalPrice": "$74.99",
  //   "category": "Men's Hoodies & Sweatshirts",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Burgundy 2024 Home Replica Jersey",
  //   "price": "$99.99",
  //   "originalPrice": "$99.99",
  //   "category": "Men's Jerseys",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Burgundy 2024 Home Authentic Jersey",
  //   "price": "$149.99",
  //   "originalPrice": "$149.99",
  //   "category": "Men's Jerseys",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Green 2024 Training Quarter-Zip Top",
  //   "price": "$74.99",
  //   "originalPrice": "$74.99",
  //   "category": "Men's Sweatshirts",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Men's Mexico National Team adidas Black Team Fleece Pullover Sweatshirt",
  //   "price": "$59.99",
  //   "originalPrice": "$59.99",
  //   "category": "Men's Sweatshirts",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Toddler Mexico National Team adidas Burgundy 2024 Home Mini Kit",
  //   "price": "$69.99",
  //   "originalPrice": "$69.99",
  //   "category": "Toddler Rompers",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // },
  // {
  //   "title": "Youth Mexico National Team Raul Jimenez adidas Black 2025 Third Authentic Player Jersey",
  //   "price": "$134.99",
  //   "originalPrice": "$134.99",
  //   "category": "Youth Jerseys",
  //   "availability": "available",
  //   "imageUrl": "",
  //   "link": ""
  // }
]

  
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Mexico National Team</h1>
        <div className='mb-6'>
          <img
            src='/Mexico.png'
            alt='Mexico' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
        {/* <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/vPQ7Z3"
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
        </div> */}

        {/* Team Information */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Team Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Mexico National Football Team</li>
            <li><strong>Nickname(s):</strong> El Tri</li>
            <li><strong>Founded:</strong> 1927</li>
            <li><strong>Stadium:</strong> Estadio Azteca, Mexico City, Mexico</li>
            <li><strong>Manager:</strong> Javier Aguirre</li>
            <li><strong>FIFA Ranking:</strong> #12 (as of 2023)</li>
            <li><strong>Confederation:</strong> CONCACAF</li>
            <li><strong>World Cup Appearances:</strong> 16 (as of 2022)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Excellence</h2>
          <p>
            The Mexico National Football Team, known as El Tri, is one of the most successful and respected teams in the world. With a rich history dating back to 1927, Mexico has been a dominant force in CONCACAF and a regular contender in World Cups.
          </p>
          <p>
            The team's legendary players such as Hirving Lozano, Raul Jimenez, and Edson Alvarez have earned Mexico a reputation for attacking football and passionate performances. Their qualification for every World Cup since 1994 highlights their consistency and talent.
          </p>
          <p>
            Mexico has always been a favorite to go far in international tournaments, and their performances on the global stage continue to captivate millions of fans.
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

export default MexicoNationalTeam;
