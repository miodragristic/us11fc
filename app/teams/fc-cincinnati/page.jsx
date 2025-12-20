import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = ({ teamSlug = 'fc-cincinnati' }) => {
  const players = [
    // { name: 'Luciano Acosta', image: 'https://cdn1.vamofutebol.com/uploads/5/2025/01/GettyImages-2158493614-750x600.jpg', slug: './acosta' },
    // { name: 'Yuya Kubo', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-cin/uytbwhct3jfeq9zktz2i.jpg', link: './kubo' },
    // { name: 'Nick Hagglund', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-cin/xge6f8ofdoow2lgndvtm.jpg', link: './hagglund' },
    { name: 'Miles Robinson', image: 'https://cnycentral.com/resources/media/f1b98a83-5413-4c14-9dad-1bbf564db28e-GettyImages21568536601.jpg', slug: './milesrobinson' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/fc-cincinnati/${player.slug}`}
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

const FCCincinnati = () => {
  const items = [
    {
      "title": "Men's FC Cincinnati adidas Blue 2025 Orange and Blue Legacy Kit Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-adidas-blue-fc-cincinnati-2025-orange-and-blue-legacy-kit-authentic-custom-jersey_ss5_p-202698413+pv-1+u-hispoux2wwhe61cs3mhq+v-nternmvivefpboc0ftgy.jpg?_hv=2&w=900",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-adidas-blue-2025-orange-and-blue-legacy-kit-authentic-custom-jersey/t-10575477+p-35330295219960+z-8-1022979804?_ref=p-SRP:m-GRID:i-r0c0:po-0"
    },
    {
      "title": "Youth FC Cincinnati adidas Blue 2025 Orange and Blue Legacy Kit Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Kids Jerseys",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/youth-adidas-blue-fc-cincinnati-2025-orange-and-blue-legacy-kit-replica-jersey_ss5_p-202649401+pv-1+u-wcjr8l1brh6fclm5glgb+v-s2j3rd3ufbmceiqyutu7.jpg?_hv=2&w=900",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/youth-fc-cincinnati-adidas-blue-2025-orange-and-blue-legacy-kit-replica-jersey/t-10240911+p-029980737121521+z-9-2505727033?_ref=p-SRP:m-GRID:i-r0c1:po-1"
    },
    {
      "title": "Men's FC Cincinnati New Era Tan Active 9TWENTY Adjustable Hat",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Hats",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens%C2%A0new-era-tan-fc-cincinnati-active-9twenty-adjustable-hat_ss5_p-202314661+u-fud3egjugt57v2oegung+v-ojy8o0jfqlr9ke5asbyp.jpg?_hv=2&w=400",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-new-era-tan-active-9twenty-adjustable-hat/t-21248788+p-359979586737889+z-9-4159064721?_ref=p-SRP:m-GRID:i-r0c2:po-2"
    },
    {
      "title": "Men's FC Cincinnati adidas Blue 2025 Orange and Blue Legacy Kit Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-adidas-blue-fc-cincinnati-2025-orange-and-blue-legacy-kit-replica-jersey_ss5_p-202644705+u-wwfzmn12rc4hl0r5cxfd+v-y9f2uofudcrnyeg2fcyf.jpg?_hv=2&w=400",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-adidas-blue-2025-orange-and-blue-legacy-kit-replica-jersey/t-43242166+p-795524397148127+z-9-1301522098?_ref=p-SRP:m-GRID:i-r1c0:po-3"
    },
    {
      "title": "Men's FC Cincinnati adidas Blue 2025 Orange and Blue Legacy Kit Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-adidas-blue-fc-cincinnati-2025-orange-and-blue-legacy-kit-authentic-jersey_ss5_p-202644578+pv-1+u-wnvypynisdq8jgwhp2i8+v-kdbzgupiulws5a92hbx4.jpg?_hv=2&w=900",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-adidas-blue-2025-orange-and-blue-legacy-kit-authentic-jersey/t-10020977+p-807768516015678+z-9-1971101910?_ref=p-SRP:m-GRID:i-r1c1:po-4"
    },
    {
      "title": "Men's FC Cincinnati Fanatics Blue Injury Time Baseball Jersey",
      "price": "$59.99",
      "originalPrice": "$59.99",
      "category": "Baseball Jersey",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-fanatics-blue-fc-cincinnati-injury-time-baseball-jersey_ss5_p-201747332+u-kbxgkpqifv9yogj3ikvb+v-o7blruaofkmf5kwlogao.jpg?_hv=2&w=400",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-fanatics-blue-injury-time-baseball-jersey/t-32793200+p-916623747174605+z-9-3628552592?_ref=p-SRP:m-GRID:i-r2c0:po-6"
    },
    {
      "title": "Men's FC Cincinnati Black Forever Lucky T-Shirt",
      "price": "$17.99",
      "originalPrice": "$34.99",
      "category": "T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-black-fc-cincinnati-forever-lucky-t-shirt_ss5_p-3397817+u-sdnztxa7nqjbrpgtvgz5+v-f8xwblaoxnclip2xulmc.jpg?_hv=2&w=400",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-black-forever-lucky-t-shirt/t-21351011+p-0369092931679+z-9-2393266464?_ref=p-SRP:m-GRID:i-r2c2:po-8"
    },
    {
      "title": "Men's FC Cincinnati Heather Gray Victory Arch Pullover Hoodie",
      "price": "$34.99",
      "originalPrice": "$64.99",
      "category": "Sweatshirts",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-heather-gray-fc-cincinnati-victory-arch-pullover-hoodie_pi3324000_ff_3324931-78d06a219c7aeffaec10c_full.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/AP35Y1https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-heather-gray-victory-arch-pullover-hoodie/t-10351044+p-3625800409702+z-9-1634254895?_ref=p-SRP:m-GRID:i-r3c0:po-9https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-heather-gray-victory-arch-pullover-hoodie/t-10351044+p-3625800409702+z-9-1634254895?_ref=p-SRP:m-GRID:i-r3c0:po-9"
    },
    {
      "title": "Men's FC Cincinnati Fanatics Blue Stoppage Time Striker T-Shirt",
      "price": "$54.99",
      "originalPrice": "$54.99",
      "category": "T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-fanatics-blue-fc-cincinnati-stoppage-time-striker-t-shirt_ss5_p-201747279+u-ue3irlteotcer0kwpwed+v-twa2gmcwulq4j1mt302t.jpg?_hv=2&w=400",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-fanatics-blue-stoppage-time-striker-t-shirt/t-21790933+p-462256183774449+z-9-2713659459?_ref=p-SRP:m-GRID:i-r3c1:po-10"
    },
    {
      "title": "Men's FC Cincinnati 500 Level Royal All For Cincy State Pullover Hoodie",
      "price": "$69.99",
      "originalPrice": "$69.99",
      "category": "Hoodies",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-500-level-royal-fc-cincinnati-all-for-cincy-state-pullover-hoodie_ss5_p-201463011+u-j8ridljlzmrfz77e9vzi+v-ipyiepn54m2tsmqfyfoy.jpg?_hv=2&w=400",
      "link": "https://www.mlsstore.com/en/fc-cincinnati/mens-fc-cincinnati-500-level-royal-all-for-cincy-state-pullover-hoodie/t-10353299+p-462212376270144+z-9-3862548247?_ref=p-SRP:m-GRID:i-r3c2:po-11"
    }
  ]  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>FC Cincinnati</h1>
        <div className='mb-6'>
          <img
            src='/Cincinnati.png'
            alt='Cincinnati FC' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/LKOQ0O"
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
            <li><strong>Full Name:</strong> FC Cincinnati</li>
            <li><strong>Nickname(s):</strong> The Orange and Blue</li>
            <li><strong>Founded:</strong> 2015</li>
            <li><strong>Stadium:</strong> TQL Stadium, Cincinnati, Ohio</li>
            <li><strong>Capacity:</strong> 26,000</li>
            <li><strong>Owner:</strong> Carl H. Lindner III</li>
            <li><strong>Head Coach:</strong> Pat Noonan</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Rising Force in MLS</h2>
          <p>
            FC Cincinnati has quickly become one of the most exciting teams in Major League Soccer. Established in 2015, the club has embraced the passionate soccer culture of the Cincinnati area and built a growing fan base. The team plays at the state-of-the-art TQL Stadium, offering an incredible matchday atmosphere.
          </p>
          <p>
            With standout players like Luciano Acosta and Brenner, FC Cincinnati is making its mark both in the league and in the city. The club continues to strive for success, with hopes of clinching the MLS Cup in the near future.
          </p>
          <p>
            Whether it's their fast-paced style of play or their deep community roots, FC Cincinnati is a team that embodies the spirit of Major League Soccer.
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

export default FCCincinnati;
