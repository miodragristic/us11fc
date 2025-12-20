import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'toronto-fc' }) => {
  const players = [
    // { name: 'Federico Bernadeski', image: 'https://milanreports.com/wp-content/uploads/2023/08/Downloader.la-64ce27c1e1eb7.jpg', slug: './bernardeski' },
    { name: 'Djordje Mihailovic', image: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/6057277724001/81fbb3c7-8451-4448-94bc-6b9fefe1fd24/fcb23ad0-8a30-46c2-8c37-6406f1dc0142/1280x720/match/image.jpg', slug: './mihailovic' },
    { name: 'Lorenzo Insigne', image: 'https://dynamo.kiev.ua/media/posts/2023/01/11/charlotte-fc-v-toronto-fc.jpg', slug: './insigne' },
    { name: 'Kevin Long', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fQLbiFBhOvoE0UYSOPxxi_VERQ0zX3o9MA&s', slug: './kevinlong' },
    { name: 'Jonathan Osorio', image: 'https://cdn1.deepdaledigest.com/uploads/10/2022/11/GettyImages-1411935788-750x500.jpg', slug: './osorio' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/toronto-fc/${player.slug}`}
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

const TorontoFC = () => {
  const items = [
    {
      "title": "Men's Toronto FC Federico Bernardeschi adidas White 2024 GTA Kit Replica Player Jersey",
      "price": "$101.24",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-federico-bernardeschi-white-toronto-fc-2024-gta-kit-replica-player-jersey_ss5_p-202853685+pv-1+u-rcupfzgff6hrufpicreh+v-sorpqq8rog94o44zl8q2.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRbakK"
    },
    {
      "title": "Men's Toronto FC adidas White 2024 GTA Kit Replica Jersey",
      "price": "$69.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-white-toronto-fc-2024-gta-kit-replica-jersey_ss5_p-201102339+pv-1+u-qr7crpvoajravp4hrcfh+v-avneoacewfz8wr9jdsd0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/K0ONYv"
    },
    {
      "title": "Men's Toronto FC adidas Red 2025 Club Kit Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men's Jerseys",
      "availability": "regular price",
      "link": "https://mlsstore.i8h2.net/mOjmky",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-red-toronto-fc-2025-club-kit-authentic-jersey_ss5_p-202644598+pv-1+u-g1gr2zkmwbvs2m2xa3bz+v-rvf5vxfedajr0xyq5zxi.jpg?_hv=2&w=900"
    },
    {
      "title": "Men's Toronto FC adidas Red 2025 Club Kit Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-red-toronto-fc-2025-club-kit-authentic-custom-jersey_ss5_p-202698433+pv-1+u-t5dmcd2s3bzfuxwhxwmr+v-rixkdf5sxonmflgzaodh.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzmjGq"
    },
    {
      "title": "Men's Toronto FC adidas Red 2025 Club Kit Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-red-toronto-fc-2025-club-kit-replica-jersey_ss5_p-202644714+pv-1+u-rgdgdgz8k5aun2fbgoqh+v-hbcnp4seq6lt6mdljbq3.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9LnYBY"
    },
    {
      "title": "Men's Toronto FC adidas Red 2025 Travel Pullover Hoodie",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Men's Hoodies",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-red-toronto-fc-2025-travel-pullover-hoodie_ss5_p-201657330+pv-1+u-ulcvleaqfutelnjunof3+v-cpb88lryqndfisnx0nol.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9qPx"
    },
    {
      "title": "Men's Toronto FC Federico Bernardeschi adidas White 2024 GTA Kit Authentic Player Jersey",
      "price": "$146.24",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-federico-bernardeschi-white-toronto-fc-2024-gta-kit-authentic-player-jersey_ss5_p-202853684+pv-1+u-vnlsalzhcamdp4dgvzeo+v-6mpksdv7pu9zg9ykewok.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOjXZq"
    },
    {
      "title": "Youth Toronto FC adidas Red 2025 Club Kit Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Youth Jerseys",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/youth-adidas-red-toronto-fc-2025-club-kit-replica-jersey_ss5_p-202649410+pv-1+u-qli756lmue2wb7i7nqjx+v-85f7m2divbu489k0qfua.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKONY6"
    },
    {
      "title": "Men's Toronto FC Richie Laryea adidas White 2024 GTA Kit Authentic Player Jersey",
      "price": "$146.24",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-richie-laryea-white-toronto-fc-2024-gta-kit-authentic-player-jersey_ss5_p-202853682+pv-1+u-z0yyy7lunmiwjretg4et+v-kwj5unom7hsiu752modq.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19yNK6"
    },
    {
      "title": "Men's Toronto FC adidas White 2024 GTA Kit Authentic Custom Jersey",
      "price": "$146.24",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "availability": "with code",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-white-toronto-fc-2024-gta-kit-authentic-custom-jersey_ss5_p-201113158+pv-1+u-r2ih0busujer7ulqni2j+v-hdpcdfhzfjyyo0898xsz.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/JKONYe"
    },
    {
      "title": "Men's Toronto FC adidas Red 2025 Club Kit Replica Custom Jersey",
      "price": "$134.99",
      "originalPrice": "",
      "category": "Men's Jerseys",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-red-toronto-fc-2025-club-kit-replica-custom-jersey_ss5_p-202708346+pv-1+u-ankoauutdb5yf8tokawg+v-ls7rdnnzrz2fzmfjszj9.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxAXRE"
    },
    {
      "title": "Men's Toronto FC Richie Laryea adidas Red 2025 Club Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "",
      "category": "Men's Jerseys",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-richie-laryea-red-toronto-fc-2025-club-kit-authentic-player-jersey_ss5_p-202853674+pv-1+u-i8i6jyqcworbndhmychv+v-fvah06vyatwoo8cxw9cv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqdL9"
    },
    {
      "title": "Men's Toronto FC Jonathan Osorio adidas Red 2025 Club Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "",
      "category": "Men's Jerseys",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-jonathan-osorio-red-toronto-fc-2025-club-kit-authentic-player-jersey_ss5_p-202853670+pv-1+u-v1mqowbnw9vjwb57lr0m+v-s7puoiacq5smjkyrcqp9.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPdX6"
    },
    {
      "title": "Men's Toronto FC adidas White 2024 GTA Kit Authentic Jersey",
      "price": "$119.99",
      "originalPrice": "$159.99",
      "category": "Men's Jerseys",
      "availability": "with code",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-white-toronto-fc-2024-gta-kit-authentic-jersey_ss5_p-201101852+pv-1+u-9d5ukirtfhintc9oa1ps+v-jwkwnbml22t4glp5rfr8.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yaOJ"
    },
    {
      "title": "Youth Toronto FC adidas Red 2025 Club Kit Replica Custom Jersey",
      "price": "$114.99",
      "originalPrice": "",
      "category": "Youth Jerseys",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/youth-adidas-red-toronto-fc-2025-club-kit-replica-custom-jersey_ss5_p-202708454+pv-1+u-hqhj4imt8x3yfifwxcuv+v-9xpc5cgdt36wsnqqsxh8.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6ynZqG"
    },
    {
      "title": "Men's Toronto FC Richie Laryea adidas White 2024 GTA Kit Replica Player Jersey",
      "price": "$101.24",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "with code",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-richie-laryea-white-toronto-fc-2024-gta-kit-replica-player-jersey_ss5_p-202853683+pv-1+u-4mre0qkbm91c6hhg6fpf+v-moo7hjzqw2pzv1y5ahm0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRbzoj"
    },
    {
      "title": "Men's Toronto FC Lorenzo Insigne adidas White 2024 GTA Kit Replica Player Jersey",
      "price": "$101.24",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "availability": "with code",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-lorenzo-insigne-white-toronto-fc-2024-gta-kit-replica-player-jersey_ss5_p-201206449+pv-1+u-hdjr55wynh7edp36fefa+v-0nwz4ohttx7oeevchp9n.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrdbv"
    },
    {
      "title": "Men's Toronto FC Richie Laryea adidas Red 2025 Club Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "",
      "category": "Men's Jerseys",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/toronto-fc/mens-adidas-richie-laryea-red-toronto-fc-2025-club-kit-replica-player-jersey_ss5_p-202853675+pv-1+u-nfrto5aevomweheyypgt+v-l6tcfparv50wnfmrepby.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9LnoQ3"
    }
    
  ]
  
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Toronto FC</h1>
        <div className='mb-6'>
          <img
            src='/Toronto.png'
            alt='Toronto' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
        <div className='flex gap-4 mb-8 justify-center'>
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
        </div>

        {/* Club Information */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Club Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Toronto FC</li>
            <li><strong>Nickname(s):</strong> The Reds</li>
            <li><strong>Founded:</strong> 2005</li>
            <li><strong>Stadium:</strong> BMO Field, Toronto, Ontario</li>
            <li><strong>Capacity:</strong> 30,000</li>
            <li><strong>Owner:</strong> Maple Leaf Sports & Entertainment</li>
            <li><strong>Head Coach:</strong> Robin Fraser</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Success</h2>
          <p>
            Toronto FC is one of the most successful clubs in Major League Soccer history, having won the MLS Cup in 2017 and establishing itself as a powerhouse in the league. Founded in 2005, the team has quickly become a fan favorite, known for its exciting style of play and success on the field.
          </p>
          <p>
            Playing at the state-of-the-art BMO Field, Toronto FC boasts a loyal and passionate fan base.
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

export default TorontoFC;
