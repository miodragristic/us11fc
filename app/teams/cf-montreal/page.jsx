import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';


const TrendingPlayers = ({ teamSlug = 'cf-montreal' }) => {
  const players = [
    { name: 'Samuel Piette', image: 'https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/11/Canada-Mens-Soccer-Team-Player-Samuel-Piette-in-2019.jpg', slug: './piette' },
    // { name: 'Kwadwo Opoku', image: 'data:image/jpeg;base64,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', link: './ZacharyBraultGuillard' },
    { name: 'Caden Clark', image: 'https://cdn.wsn.com/filters:format(webp)/fit-in/1200x630/1727245998/cf-montreal-vs-san-jose-2024-09-28.jpg', slug: './clark' },
    // { name: 'Giacomo Vrioni', image: 'data:image/jpeg;base64,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', link: './ClementDiop' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/cf-montreal/${player.slug}`}
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


const CFMontreal = () => {
  const items = [
    {
      "title": "Men's CF Montreal adidas Blue 2025 Montréal Original Replica Custom Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-replica-custom-jersey_ss5_p-202708336+pv-1+u-s47uatalgbz7yd4duina+v-1x9kpdrieokjwadlmmkx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnO2x1"
    },
    {
      "title": "Men's CF Montreal adidas Blue 2025 Montréal Original Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-replica-jersey_ss5_p-202644704+pv-1+u-8ymynd3eldg4t8tswqiz+v-kkkca8zqicf2mclezn0s.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEOZ9P"
    },
    {
      "title": "Men's CF Montreal adidas Blue 2025 Montréal Original Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-authentic-jersey_ss5_p-202644575+pv-1+u-wew2iiyrgi2xvxemoa4j+v-0jdpq5htjrfrgtzdrayi.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/OeOmnQ"
    },
    {
      "title": "Men's CF Montreal Prince Owusu adidas Blue 2025 Montréal Original Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-prince-owusu-blue-cf-montreal-2025-montr%C3%A9al-original-authentic-player-jersey_ss5_p-202840201+pv-1+u-darh6reowie9vewonufg+v-fgygyjti3l8fihympalb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOk7LM"
    },
    {
      "title": "Youth CF Montreal adidas Blue 2025 Montréal Original Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Kids Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/youth-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-replica-jersey_ss5_p-202649400+pv-1+u-f8crspuj9bcvdbdurzjh+v-1etpcqakelpqzujadnzk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2N5J"
    },
    {
      "title": "Men's CF Montreal Samuel Piette adidas Blue 2025 Montréal Original Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-samuel-piette-blue-cf-montreal-2025-montr%C3%A9al-original-authentic-player-jersey_ss5_p-202840193+pv-1+u-hsnye752vdgphwmi1ky7+v-tqvv6hlaj41otusjljcb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9LnJMy"
    },
    {
      "title": "Youth CF Montreal adidas Blue 2025 Montréal Original Replica Custom Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Kids Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/youth-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-replica-custom-jersey_ss5_p-202708444+pv-1+u-xbupo7aeefonzuyswqsn+v-ior7odj37jafvlnxjge0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1eArj"
    },
    {
      "title": "Women's CF Montreal adidas Blue 2025 Montréal Original Replica Custom Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/womens-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-replica-custom-jersey_ss5_p-202708385+pv-1+u-wkvjpky7njjcmwjheyax+v-tbxnhlmnviixlqkrtqca.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxA6b3"
    },
    {
      "title": "Men's CF Montreal Giacomo Vrioni adidas Blue 2025 Montréal Original Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/mens-adidas-giacomo-vrioni-blue-cf-montreal-2025-montr%C3%A9al-original-replica-player-jersey_ss5_p-202840198+pv-1+u-nsvi3rindoezcdcalrwl+v-dxahfhuuvmkdnjn6afov.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnO2zL"
    },
    {
      "title": "Men's CF Montreal adidas Blue 2025 Montréal Original Replica Custom Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/womens-adidas-caden-clark-blue-cf-montreal-2025-montr%C3%A9al-original-replica-player-jersey_ss5_p-202840191+pv-1+u-nrd89okxoq6en98wptlk+v-ghqshuv88y7sdgqk4f8i.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyAG6M"
    },
    {
      "title": "Women's CF Montreal adidas Blue 2025 Montréal Original Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Woman Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/cf-montreal/womens-adidas-blue-cf-montreal-2025-montr%C3%A9al-original-replica-jersey_ss5_p-202649343+pv-1+u-uwx0qsdlw4bcjgfkdve0+v-6ftruhpgkkysrt4y119q.jpg?_hv=2&w=900E",
      "link": "https://mlsstore.i8h2.net/mOj22X"
    },
    // {
    //   "title": "Men's CF Montreal adidas Blue 2025 Montréal Original Authentic Jersey",
    //   "price": "$149.99",
    //   "originalPrice": "$149.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal Prince Owusu adidas Blue 2025 Montréal Original Authentic Player Jersey",
    //   "price": "$194.99",
    //   "originalPrice": "$194.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Youth CF Montreal adidas Blue 2025 Montréal Original Replica Jersey",
    //   "price": "$79.99",
    //   "originalPrice": "$79.99",
    //   "category": "Kids Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal Samuel Piette adidas Blue 2025 Montréal Original Authentic Player Jersey",
    //   "price": "$194.99",
    //   "originalPrice": "$194.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Youth CF Montreal adidas Blue 2025 Montréal Original Replica Custom Jersey",
    //   "price": "$114.99",
    //   "originalPrice": "$114.99",
    //   "category": "Kids Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Women's CF Montreal adidas Blue 2025 Montréal Original Replica Custom Jersey",
    //   "price": "$134.99",
    //   "originalPrice": "$134.99",
    //   "category": "Women Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal Giacomo Vrioni adidas Blue 2025 Montréal Original Replica Player Jersey",
    //   "price": "$134.99",
    //   "originalPrice": "$134.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Women's CF Montreal Caden Clark adidas Blue 2025 Montréal Original Replica Player Jersey",
    //   "price": "$134.99",
    //   "originalPrice": "$134.99",
    //   "category": "Women Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal Caden Clark adidas Blue 2025 Montréal Original Replica Player Jersey",
    //   "price": "$134.99",
    //   "originalPrice": "$134.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal Giacomo Vrioni adidas Light Blue 2024 Montréal Original Authentic Player Jersey",
    //   "price": "$194.99",
    //   "originalPrice": "$194.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal Samuel Piette adidas Blue 2025 Montréal Original Replica Player Jersey",
    //   "price": "$134.99",
    //   "originalPrice": "$134.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Women's CF Montreal Samuel Piette adidas Blue 2025 Montréal Original Replica Player Jersey",
    //   "price": "$134.99",
    //   "originalPrice": "$134.99",
    //   "category": "Women Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Women's CF Montreal Prince Owusu adidas Blue 2025 Montréal Original Replica Player Jersey",
    //   "price": "$134.99",
    //   "originalPrice": "$134.99",
    //   "category": "Women Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal Caden Clark adidas Blue 2025 Montréal Original Authentic Player Jersey",
    //   "price": "$194.99",
    //   "originalPrice": "$194.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal Prince Owusu adidas Light Blue 2024 Montréal Original Authentic Player Jersey",
    //   "price": "$194.99",
    //   "originalPrice": "$194.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Women's CF Montreal Giacomo Vrioni adidas Blue 2025 Montréal Original Replica Player Jersey",
    //   "price": "$134.99",
    //   "originalPrice": "$134.99",
    //   "category": "Women Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal Caden Clark adidas Light Blue 2024 Montréal Original Authentic Player Jersey",
    //   "price": "$194.99",
    //   "originalPrice": "$194.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Youth CF Montreal Caden Clark adidas Blue 2025 Montréal Original Replica Player Jersey",
    //   "price": "$114.99",
    //   "originalPrice": "$114.99",
    //   "category": "Kids Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Women's CF Montreal adidas Blue 2025 Montréal Original Replica Jersey",
    //   "price": "$99.99",
    //   "originalPrice": "$99.99",
    //   "category": "Women Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal adidas Blue 2025 Montréal Original Authentic Custom Jersey",
    //   "price": "$194.99",
    //   "originalPrice": "$194.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal Prince Owusu adidas Blue 2025 Montréal Original Replica Player Jersey",
    //   "price": "$134.99",
    //   "originalPrice": "$134.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Youth CF Montreal Samuel Piette adidas Blue 2025 Montréal Original Replica Player Jersey",
    //   "price": "$114.99",
    //   "originalPrice": "$114.99",
    //   "category": "Kids Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal Giacomo Vrioni adidas Blue 2025 Montréal Original Authentic Player Jersey",
    //   "price": "$194.99",
    //   "originalPrice": "$194.99",
    //   "category": "Men Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Youth CF Montreal Giacomo Vrioni adidas Blue 2025 Montréal Original Replica Player Jersey",
    //   "price": "$114.99",
    //   "originalPrice": "$114.99",
    //   "category": "Kids Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Youth CF Montreal Prince Owusu adidas Blue 2025 Montréal Original Replica Player Jersey",
    //   "price": "$114.99",
    //   "originalPrice": "$114.99",
    //   "category": "Kids Jerseys",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal Heather Gray The Game Is Everything Personalized Any Name & Number T-Shirt",
    //   "price": "$39.99",
    //   "originalPrice": "$39.99",
    //   "category": "Men Apparel",
    //   "shipping": "Ships Free",
    //   "availability": "",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal New Era Light Blue Color Pack 9FORTY A-Frame Adjustable Trucker Hat",
    //   "price": "$32.99",
    //   "originalPrice": "$32.99",
    //   "category": "Men Hats",
    //   "shipping": "Ships Free",
    //   "availability": "Ready To Ship",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // },
    // {
    //   "title": "Men's CF Montreal New Era Black 2025 Kickoff 9TWENTY Adjustable Hat",
    //   "price": "$27.99",
    //   "originalPrice": "$27.99",
    //   "category": "Men Hats",
    //   "shipping": "Ships Free",
    //   "availability": "Ready To Ship",
    //   "imageUrl": "URL_TO_IMAGE_HERE",
    //   "link": "URL_TO_PRODUCT_PAGE_HERE"
    // }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>CF Montreal</h1>
        <div className='mb-6'>
          <img
            src='/Montreal.png'
            alt='Montreal' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/3JyGjy"
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
            <li><strong>Full Name:</strong> CF Montreal</li>
            <li><strong>Nickname(s):</strong> The Impact</li>
            <li><strong>Founded:</strong> 2012</li>
            <li><strong>Stadium:</strong> Saputo Stadium, Montreal, Quebec</li>
            <li><strong>Capacity:</strong> 20,801</li>
            <li><strong>Owner:</strong> Joey Saputo</li>
            <li><strong>Head Coach:</strong> Laurent Courtois</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Passion and Pride</h2>
          <p>
            CF Montreal, previously known as the Montreal Impact, is a major force in Canadian soccer. Founded in 2012, the club has made a name for itself in Major League Soccer, combining passionate fan support with a dedication to developing top-tier talent.
          </p>
          <p>
            Playing at the iconic Saputo Stadium, the team embodies the spirit of Montreal. Known for its fierce rivalry with Toronto FC and its ever-growing fanbase, CF Montreal is a club that celebrates the city’s multicultural essence and sports culture.
          </p>
          <p>
            With stars like Romell Quioto and Victor Wanyama, the team is continually striving for excellence, and fans eagerly await more historic moments as the club looks to bring home more trophies in the near future.
          </p>
        </div>

        {/* Trending Players Section */}
        <TrendingPlayers />
        <h2 className='text-4xl sm:text-6xl font-bold text-[#020617] mt-16 mb-4'>Shop</h2>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map((item, index) => (
  <div key={`${item.title}-${index}`} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
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

export default CFMontreal;
