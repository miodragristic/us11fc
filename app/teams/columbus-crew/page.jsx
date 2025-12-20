import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    // { name: 'Rudy Camacho', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-clb/l2djl0j1qg9jgrt9z8kx.jpg', link: './LucasZelarayan' },
    // { name: 'Cucho Hernández', image: 'https://as01.epimg.net/img/especiales/futbol/2023/top10mls/cucho/frame3h.jpg', link: './CuchoHernandez' },
    { name: 'Diego Rossi', image: 'https://images.supersport.com/media/5wfgo22m/diego-rossi-celebrating-2024-g-1200.jpg?width=1920&quality=90&format=webp', slug: './rossi' },
    { name: 'Darlington Nagbe', image: 'https://wallpapers.com/images/hd/darlington-nagbe-mls-medically-cleared-cy1tf00pgqbg7a3o.jpg', slug: './nagbe' },
   
  ];



  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/columbus-crew/${player.slug}`}
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

const ColumbusCrew = () => {
  const items = [
    {
      "title": "Youth Columbus Crew adidas Black 2025 The Goosebumps Kit Replica Custom Jersey",
      "price": "$114.99",
      "category": "Kids Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/youth-adidas-black-columbus-crew-2025-the-goosebumps-kit-replica-custom-jersey_ss5_p-202709971+pv-1+u-acgq8hwc0i3qxihnenui+v-ode5arv7v11upfuxnqlu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmORja"
    },
    {
      "title": "Men's Columbus Crew adidas Black 2025 The Goosebumps Kit Replica Jersey",
      "price": "$99.99",
      "category": "Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-adidas-black-columbus-crew-2025-the-goosebumps-kit-replica-jersey_ss5_p-202652743+pv-1+u-999ybxcjkvvnistr0nx9+v-hlxgah3ixchd062h2npk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/2aMezO"
    },
    {
      "title": "Men's Columbus Crew adidas Originals Black Culturewear Collection Full-Zip Track Jacket",
      "price": "$109.99",
      "category": "Jackets",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-adidas-originals-black-columbus-crew-culturewear-collection-full-zip-track-jacket_ss5_p-201658633+pv-1+u-oxtpspjfz5rihzm3lgrf+v-tfg618chpertzqfpghxb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yq9vK2"
    },
    {
      "title": "Men's Columbus Crew adidas Black 2025 The Goosebumps Kit Authentic Jersey",
      "price": "$149.99",
      "category": "Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-adidas-black-columbus-crew-2025-the-goosebumps-kit-authentic-jersey_ss5_p-202652661+pv-1+u-4le5kdfl2g3qmvzzxlen+v-ddfcdg721pqvqfn4raal.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzZvKy"
    },
    {
      "title": "Youth Columbus Crew adidas Black 2025 The Goosebumps Kit Replica Jersey",
      "price": "$79.99",
      "category": "Kids Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/youth-adidas-black-columbus-crew-2025-the-goosebumps-kit-replica-jersey_ss5_p-202658581+pv-1+u-1uz1kkv8mrwzuizlxghd+v-agy7jvazbganmuycu6fj.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kOZvKN"
    },
    {
      "title": "Youth Columbus Crew Rock Em Socks Three-Pack Crew Socks Set",
      "price": "$54.99",
      "category": "Accessories",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/youth-rock-em-socks-columbus-crew-three-pack-crew-socks-set_ss5_p-200596163+pv-1+u-hjjz0djybwwxxpn1yahj+v-yxqkfsknj0fno1c0gzrr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19RkYd"
    },
    {
      "title": "Columbus Crew Rock Em Socks Three-Pack Crew Socks Set",
      "price": "$54.99",
      "category": "Accessories",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/youth-rock-em-socks-columbus-crew-three-pack-crew-socks-set_ss5_p-200596163+pv-1+u-hjjz0djybwwxxpn1yahj+v-yxqkfsknj0fno1c0gzrr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/bO2KBx"
    },
    {
      "title": "Men's Columbus Crew Black Color Slider Pullover Hoodie",
      "price": "$39.99",
      "originalPrice": "$74.99",
      "category": "Sweatshirts",
      "shipping": "Ships Free",
      "discount": "Reduced Price",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-black-columbus-crew-color-slider-pullover-hoodie_ss5_p-201089042+pv-1+u-su2a1x7fldq415dyyo72+v-mpo5zwvt7i9lhzuvc6cw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOnvzK"
    },
    {
      "title": "Men's Columbus Crew Fanatics Black Red Card Transitional Pullover Hoodie",
      "price": "$59.99",
      "category": "Men Sweatshirts",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-fanatics-black-columbus-crew-red-card-transitional-pullover-hoodie_ss5_p-201747259+pv-1+u-kcmujuqzumvoney63ujo+v-gfwhhizqfv8wktjr9gex.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOZvmX"
    },
    {
      "title": "Men's Columbus Crew Stadium Essentials Black Compete Quarter-Zip Jacket",
      "price": "$89.99",
      "category": "Men Sweatshirts",
      "shipping": "Ships Free",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-stadium-essentials-black-columbus-crew-compete-quarter-zip-jacket_ss5_p-202156254+pv-1+u-bhdo3esmmyjrkv1p39ij+v-padfqiywr0zafmp4wdbt.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55YGNL"
    },
  //   {
  //     "title": "Men's Columbus Crew Fanatics Heather Gray Low Block Trucker Adjustable Hat",
  //     "price": "$29.99",
  //     "category": "Hats",
  //     "shipping": "Ships Free",
  //     "availability": "Ready To Ship",
  //     "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-fanatics-heather-gray-columbus-crew-low-block-trucker-adjustable-hat_ss5_p-201747552+pv-1+u-4ksfthixarshftcujfzm+v-ftawsijhwflpedmuazhj.jpg?_hv=2&w=900",
  //     "link": "https://mlsstore.i8h2.net/jeZ4d0"
  //   },
  //   {
  //     "title": "Sport Design Sweden Columbus Crew Youth Black Starting Lineup Home T-Shirt",
  //     "price": "$34.99",
  //     "category": "Kids T-Shirts",
  //     "shipping": "Ships Free",
  //     "availability": "Ready To Ship",
  //     "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-fanatics-heather-gray-columbus-crew-low-block-trucker-adjustable-hat_ss5_p-201747552+pv-1+u-4ksfthixarshftcujfzm+v-ftawsijhwflpedmuazhj.jpg?_hv=2&w=900",
  //     "link": "https://mlsstore.i8h2.net/jeZ4d0"
  //   },
  //   {
  //     "title": "Men's Columbus Crew Stadium Essentials Black Half-Time 2-Hit Pullover Sweatshirt",
  //     "price": "$79.99",
  //     "category": "Men Sweatshirts",
  //     "shipping": "Ships Free",
  //     "availability": "Ready To Ship",
  //     "imageUrl": "URL_SLIKE_13",
  //     "link": "URL_PROIZVODA_13"
  //   },
  //   {
  //     "title": "Women's Columbus Crew Gameday Couture White Crewneck Drop Shoulder Sweatshirt",
  //     "price": "$55.99",
  //     "category": "Women Sweatshirts",
  //     "shipping": "Ships Free",
  //     "imageUrl": "URL_SLIKE_14",
  //     "link": "URL_PROIZVODA_14"
  //   },
  //   {
  //     "title": "Men's Columbus Crew Gold Hometown Oversized Pullover Hoodie",
  //     "price": "$84.99",
  //     "category": "Sweatshirts",
  //     "shipping": "Ships Free",
  //     "availability": "Ready To Ship",
  //     "imageUrl": "URL_SLIKE_15",
  //     "link": "URL_PROIZVODA_15"
  //   },
  //   {
  //     "title": "Men's Columbus Crew New Era Black 2025 Jersey Hook 9FORTY M-Crown Adjustable Hat",
  //     "price": "$34.99",
  //     "category": "Hats",
  //     "shipping": "Ships Free",
  //     "availability": "Ready To Ship",
  //     "imageUrl": "URL_SLIKE_16",
  //     "link": "URL_PROIZVODA_16"
  //   },
  //   {
  //     "title": "Columbus Crew 2025 Jersey Hook Scarf",
  //     "price": "$34.99",
  //     "category": "Accessories",
  //     "shipping": "Ships Free",
  //     "availability": "Ready To Ship",
  //     "imageUrl": "URL_SLIKE_17",
  //     "link": "URL_PROIZVODA_17"
  //   },
  //   {
  //     "title": "Men's Columbus Crew Black Victory Arch T-Shirt",
  //     "price": "$34.99",
  //     "category": "T-Shirts",
  //     "shipping": "Ships Free",
  //     "imageUrl": "URL_SLIKE_18",
  //     "link": "URL_PROIZVODA_18"
  //   }
   ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Columbus Crew</h1>
      <div className='mb-6'>
          <img
            src='/Columbus.png'
            alt='Colorado Rapids' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className='flex gap-4 mb-8 justify-center'>
          <a 
            href="https://ticketnetwork.lusg.net/JKOxkN"
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
            <li><strong>Full Name:</strong> Columbus Crew SC</li>
            <li><strong>Nickname(s):</strong> The Black & Gold</li>
            <li><strong>Founded:</strong> 1994</li>
            <li><strong>Stadium:</strong> Lower.com Field, Columbus, Ohio</li>
            <li><strong>Capacity:</strong> 20,000</li>
            <li><strong>Owner:</strong> Haslam Sports Group</li>
            <li><strong>Head Coach:</strong> Wilfried Nancy</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Rich Tradition in MLS</h2>
          <p>
            Columbus Crew SC has been a staple of Major League Soccer since its founding in 1994. The team has a long and storied history, with multiple MLS Cup championships and a passionate fan base that is one of the most dedicated in the league.
          </p>
          <p>
            Known for their exciting attacking style and commitment to developing talent, Columbus Crew is a club with both a rich history and a bright future ahead. With star players like Lucas Zelarayán and Cucho Hernández leading the charge, the Crew continue to be a force to be reckoned with in MLS.
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

export default ColumbusCrew;
