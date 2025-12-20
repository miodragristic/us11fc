import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Alexey Miranchuk', image: 'https://gray-wgcl-prod.gtv-cdn.com/resizer/v2/2WGWYC52NZAUTKQLETZRJDSRGU.jpg?auth=70a049cd83c40d2b50f4dd4a91edf89a30633b4a5093f1c100380a48b6a9ae13&width=1600&height=900&smart=true', slug: 'miranchuk' },
    // { name: 'Derrick Williams', image: 'https://thepeachreview.com/wp-content/uploads/2024/11/Derrick-Williams_2-ATLUTD.jpg', slug: 'williams' },
    // { name: 'Edwin Mosquera', image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5a88ffa2-c8ac-415e-814a-4a11dfde286d_2837x1897.jpeg', slug: 'mosquera' },
    { name: 'Jamal Thiaré', image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c480357-382f-40b7-8355-34ac16169374_4092x2728.jpeg', slug: 'thiare' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/atlanta-united/${player.slug}`}
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


const Atlanta = () => {
    const items = [
        { "id": 1, "title": "Men's Atlanta United FC adidas Black 2023 The 17s' Kit Authentic Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2023-the-17s-kit-authentic-jersey_pi5272000_ff_5272914-450677b70abb328ba8e0_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/qzyvXy", "price": "$39.99" },
        { "id": 2, "title": "Men's Atlanta United FC adidas Black 2025 The Connector Authentic Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2025-the-connector-authentic-jersey_ss5_p-202644571+u-7vncamcipaipxdxyyn0c+v-55ym6cyzrf9sowyyfqda.png?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/PObgNY", "price": "$149.99" },
        { "id": 3, "title": "Men's Atlanta United FC adidas Black 2023 The 17s' Kit Replica Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2023-the-17s-kit-replica-jersey_pi5273000_ff_5273006-fe099db52068a8d6a49e_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/JK2Aaa", "price": "$19.99" },
        { "id": 4, "title": "Men's Atlanta United FC adidas Black 2025 The Connector Authentic Custom Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2025-the-connector-authentic-custom-jersey_ss5_p-202698406+u-s73m7eeenwcd9wknqzhn+v-aits2pp8ootj0fsghdp6.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/6yE1Kr", "price": "$194.99" },
        { "id": 5, "title": "Men's Atlanta United FC adidas Red 2025 Travel Pullover Hoodie", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-red-atlanta-united-fc-2025-travel-pullover-hoodie_ss5_p-201657341+u-i4mouqkzvzhgobxtfdtp+v-zlfshzcizov0moaiyddi.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/MAbVxK", "price": "$79.99" },
        { "id": 6, "title": "Men's Atlanta United FC adidas Black 2025 The Connector Replica Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2025-the-connector-replica-jersey_ss5_p-202644701+u-wqbz3hkr7oxglp15udwh+v-nwmw8kk2sxjjthygzno9.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/mOGv3X", "price": "$99.99" },
        { "id": 7, "title": "Unisex Atlanta United FC Live Breathe Futbol Red Connector Collection Knitted Long Sleeve Polo", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/unisex-live-breathe-futbol-red-atlanta-united-fc-connector-collection-knitted-long-sleeve-polo_ss5_p-202323590+u-keemoh1xrwscfjnrsm9g+v-qehq50mc4cx4tesel5kz.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/mOGv3X", "price": "$129.99" },
        { "id": 8, "title": "Women's Atlanta United FC adidas Black 2023 The 17s' Kit Replica Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/womens-adidas-black-atlanta-united-fc-2023-the-17s-kit-replica-jersey_pi5273000_ff_5273082-5f8800c7acbe9e537734_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/raXy3R", "price": "$19.99" },
        { "id": 9, "title": "Youth Atlanta United FC adidas Black 2025 The Connector Replica Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/youth-adidas-black-atlanta-united-fc-2025-the-connector-replica-jersey_ss5_p-202649398+u-nlelzpchkuno2opdlalv+v-sashthuees7xc0d4d2f9.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/PObg9Y", "price": "$79.99" },
        { "id": 10, "title": "Women's Atlanta United FC adidas Black 2025 The Connector Replica Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/womens-adidas-black-atlanta-united-fc-2025-the-connector-replica-jersey_ss5_p-202649341+u-gw6b3vdfc4cy3lwazkq6+v-6vlvqg8u0uzffqjudwnr.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/LK21qY", "price": "$99.99" },
        { "id": 11, "title": "Men's Atlanta United FC adidas Green 2024 One Planet Pre-Match Top", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-green-atlanta-united-fc-2024-one-planet-pre-match-top_ss5_p-201195886+u-qzrsif1jix4ueg2siiyj+v-ipavzibylbzh2saskrrl.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/raXy33", "price": "$19.99" },
        { "id": 12, "title": "Unisex Atlanta United FC Live Breathe Futbol Black Connector Collection Full-Zip Track Jacket", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/unisex-live-breathe-futbol-black-atlanta-united-fc-connector-collection-full-zip-track-jacket_ss5_p-202323588+u-f7x43ftme5mvr4wdzitg+v-c2hcsrvtc8ye2fttvlw3.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/e1N2Mz", "price": "$109.99" },
        { "id": 13, "title": "Men's Atlanta United FC Fanatics Red Iconic Team Chant T-Shirt", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-fanatics-red-atlanta-united-fc-iconic-team-chant-t-shirt_ss5_p-201198306+u-q70vaqrpcnaxzwoek7b9+v-gncnomhg2rxdspj3rrde.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/VxNKeE", "price": "$19.99" },
        { "id": 14, "title": "Men's Atlanta United FC Fanatics Red Iconic Defender Polo", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-fanatics-red-atlanta-united-fc-iconic-defender-polo_pi3598000_ff_3598187-b5de1b612bf51f9239dc_full.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/atlanta-united-fc/mens-atlanta-united-fc-fanatics-red-iconic-defender-polo/t-14783441+p-2561215323538+z-9-1677156341?_ref=p-SRP:m-GRID:i-r4c2:po-14", "price": "$29.99" },
        { "id": 15, "title": "Youth Atlanta United FC adidas Black 2023 The 17s' Kit Replica Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/youth-adidas-black-atlanta-united-fc-2023-the-17s-kit-replica-jersey_pi5273000_ff_5273251-4e7a456ee283efed960d_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/XmNRAg", "price": "$39.99" },
        { "id": 16, "title": "Women's Atlanta United FC Fanatics Red/Black Iconic Raglan Full-Zip Hoodie", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/womens-fanatics-red/black-atlanta-united-fc-iconic-raglan-full-zip-hoodie_ss5_p-201198334+u-btnaad5lzvsfmon5zbkn+v-tfpuhrizkouzujv1ujdg.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/o4Ov3m", "price": "$39.99" },
        { "id": 17, "title": "Men's Atlanta United FC adidas Black Home 2025 The Connector Authentic Shorts", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-home-2025-the-connector-authentic-shorts_ss5_p-201672882+u-jaq87lpj8esn62i02vbb+v-qf95yg8uayuy6krpx07o.jpg?_hv=2&w=340", "link": "https://www.example.com/product17", "price": "$59.99" },
        { "id": 18, "title": "Men's Atlanta United FC Black Club Logo T-Shirt", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-black-atlanta-united-fc-club-logo-t-shirt_ss5_p-200133856+u-lcs92ey5cjmq0c2j4idx+v-al5wd9pjqy0rzitjwata.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/BnP9Jq", "price": "$27.99" },
        { "id": 19, "title": "Men's Atlanta United FC New Era Black Labeled 9SEVENTY Trucker Stretch-Snap Adjustable Hat", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-new-era-black-atlanta-united-fc-labeled-9seventy-trucker-stretch-snap-adjustable-hat_ss5_p-201130258+u-bhygvwxftntjopuamfqu+v-576o9mho4iw5mhufkmpy.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/WyNzrX", "price": "$34.99" },
        { "id": 20, "title": "Unisex Atlanta United FC Fanatics Black Super Soft Pullover Crew Sweatshirt", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/unisex-fanatics-black-atlanta-united-fc-super-soft-pullover-crew-sweatshirt_ss5_p-5128891+u-xarkrz8e43ldjwftbuba+v-4yewhhsqqaeurikr5kqe.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/nXyvxX", "price": "$99.99" },
        { "id": 21, "title": "Youth Atlanta United FC adidas Black 2025 The Connector Replica Custom Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/youth-adidas-black-atlanta-united-fc-2025-the-connector-replica-custom-jersey_ss5_p-202708442+u-gd2v262bse8s45ysm6pz+v-lpkfbwa7pl380xynnzjd.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/6yE1LG", "price": "$114.99" },
        { "id": 22, "title": "Men's Atlanta United FC adidas Black Ultraboost x COPA Running Shoe", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-ultraboost-x-copa-running-shoe_pi4578000_ff_4578618-2f28d9f03ccdd6af31d7_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/3JEaWd", "price": "$95.99" },
        { "id": 23, "title": "Men's Atlanta United FC adidas Light Blue 2024 The Resurgens Kit Authentic Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-light-blue-atlanta-united-fc-2024-the-resurgens-kit-authentic-jersey_ss5_p-202652655+u-ggxvjhjo4wzwyiv5u0oh+v-xvzjhp5z1x7763soetth.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/3JEaWd", "price": "$149.99" },
        // { "id": 24, "title": "Toddler Atlanta United FC adidas Light Blue 2024 AEROREADY Team Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-light-blue-atlanta-united-fc-2024-the-resurgens-kit-authentic-jersey_ss5_p-202652655+u-ggxvjhjo4wzwyiv5u0oh+v-xvzjhp5z1x7763soetth.jpg?_hv=2&w=340", "link": "https://www.example.com/product24", "price": "$49.99" },
        // { "id": 25, "title": "Men's Atlanta United FC New Era Black/Red 2025 Jersey Hook 9SEVENTY Stretch-Snap Adjustable Hat", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/toddler-adidas-light-blue-atlanta-united-fc-2024-aeroready%C2%A0team%C2%A0jersey_ss5_p-200500702+u-1cjhzmqvfipsybef4mqj+v-pcdpxyxgi9vys5jmbmgn.jpg?_hv=2&w=340", "link": "https://www.example.com/product25", "price": "$39.99" },
        // { "id": 26, "title": "Women's Atlanta United FC Gameday Couture Gray Oversized Mini Rhinestone Classic T-Shirt", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-new-era-black/red-atlanta-united-fc-2025-jersey-hook-9seventy-stretch-snap-hat_ss5_p-202216442+u-jin4x9pzaunsiuxnv7n6+v-rjltbf2uxqnxxda31w7h.jpg?_hv=2&w=340", "link": "https://www.example.com/product26", "price": "$59.99" },
        // { "id": 27, "title": "Women's Atlanta United FC Fanatics Black Logo V-Neck T-Shirt", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/womens%C2%A0gameday-couture-gray-atlanta-united-fc-oversized-mini-rhinestone-classic-t-shirt_ss5_p-202772638+u-b8vewmuw8nm84dpugtiv+v-ivc8zsa8nlg2s3goexrb.jpg?_hv=2&w=340", "link": "https://www.example.com/product27", "price": "$19.99" },
        // { "id": 28, "title": "Men's Atlanta United FC Red Club Logo T-Shirt", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/womens-fanatics-black-atlanta-united-fc-logo-v-neck-t-shirt_ss5_p-201167509+u-kksondlqm6tqdsagvsoq+v-8gpxf0qrudxr0kmv10lq.jpg?_hv=2&w=340", "link": "https://www.example.com/product28", "price": "$27.99" },
        // { "id": 29, "title": "Men's Atlanta United FC adidas Light Blue 2024 The Resurgens Kit Replica Jersey", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-red-atlanta-united-fc-club-logo-t-shirt_ss5_p-200133854+u-qihllwdffj5w39nncgrs+v-rzxewizobriuveyuwjzb.jpg?_hv=2&w=340", "link": "https://www.example.com/product29", "price": "$99.99" },
        // { "id": 30, "title": "Men's Atlanta United FC 500 Level Black Hometown Pullover Hoodie", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-light-blue-atlanta-united-fc-2024-the-resurgens-kit-replica-jersey_ss5_p-201102327+u-cdxkt35obtxuzipdf6h9+v-rfx5v00foazp1yivjpkb.jpg?_hv=2&w=340", "link": "https://www.example.com/product30", "price": "$69.99" }
      
      
    ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Atlanta United FC</h1>
        <div className='mb-6'>
          <img
            src='/atlantaposter.png'
            alt='Atlanta United FC' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
          <a
            href="https://ticketnetwork.lusg.net/raL7aG"
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

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Club Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Atlanta United Football Club</li>
            <li><strong>Nickname(s):</strong> The Five Stripes</li>
            <li><strong>Founded:</strong> April 16, 2014</li>
            <li><strong>Stadium:</strong> Mercedes-Benz Stadium, Atlanta, Georgia</li>
            <li><strong>Capacity:</strong> 73,000</li>
            <li><strong>Owners:</strong> Arthur Blank</li>
            <li><strong>Head Coach:</strong> Ronny Deila</li>
          </ul>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Rise on the Football Horizon</h2>
          <p>
            Atlanta United FC is a professional soccer club based in Atlanta, Georgia. Known for its passionate fan base and strong performances, Atlanta United has become a staple in MLS, achieving significant milestones, including winning the MLS Cup in 2018.
          </p>
        </div>

        <TrendingPlayers />

        <h2 className='text-4xl sm:text-6xl font-bold text-[#020617] mt-16 mb-4'>Shop</h2>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map((item) => (
            <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
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

export default Atlanta;
