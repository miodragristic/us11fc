import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
    const players = [
      // { name: 'Sebastián Driussi', image: 'https://cdn1.primerafutbol.com/uploads/18/2025/01/GettyImages-1258342953-1140x760.jpg', link: '/driussi' },
      // { name: 'Alex Ring', image: 'https://wallpapers.com/images/hd/austin-fc-midfielder-alexander-ring-ujchcirnu7ajtdke.jpg', slug: 'ring' },
      // { name: 'Ethan Finlay', image: 'https://s.hdnux.com/photos/01/37/10/55/24939376/3/rawImage.jpg', slug: 'finlay' },
      // { name: 'Gyasi Zardes', image: 'https://austinmonthly.wppcdn.com/wp-content/uploads/2023/02/ATXFC_20221120_ZardesPortraits_JG108141-1246x700.jpg', slug: 'zardes' },
    ];

    return (
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {players.map((player) => (
            <Link
              key={player.slug}
              href={`/teams/austin-fc/${player.slug}`}
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

const Austin = () => {
    const items =  [
        { "id": 1, "title": "Men's Austin FC adidas Green 2025 The Heartbeat Kit Authentic Jersey", "price": "$149.99", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-adidas-green-austin-fc-2025-the-heartbeat-kit-authentic-jersey_ss5_p-202644572+u-yquw8dh5zovbn1qhd7ba+v-ao7ebbr8brogqcboxrbf.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-adidas-green-2025-the-heartbeat-kit-authentic-jersey/t-32140053+p-575546398282882+z-9-966649890?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 2, "title": "Men's Austin FC adidas Green 2023 Las Voces Kit Replica Jersey", "price": "$19.99 (discounted from $99.99)", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-adidas-green-austin-fc-2023-las-voces-kit-replica-jersey_pi5273000_ff_5273007-4a10aeddc255f819c524_full.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-adidas-green-2023-las-voces-kit-replica-jersey/t-10814419+p-9479301488558+z-9-2445344912?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 3, "title": "Men's Austin FC adidas Green 2023 Las Voces Kit Authentic Jersey", "price": "$39.99 (discounted from $159.99)", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-adidas-green-austin-fc-2023-las-voces-kit-authentic-jersey_pi5272000_ff_5272915-578f88acd1f46f877c55_full.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-adidas-green-2023-las-voces-kit-authentic-jersey/t-32697731+p-7268630232678+z-9-1453173388?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 4, "title": "Men's Austin FC adidas Tan 2024 The Armadillo Kit Replica Jersey", "price": "$69.99 (discounted from $99.99)", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-adidas-tan-austin-fc-2024-the-armadillo-kit-replica-jersey_ss5_p-201102328+u-v9qvpl5khtljon9ihrth+v-zd4exxjwhtmmz5l7hvj2.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-adidas-tan-2024-the-armadillo-kit-replica-jersey/t-21929908+p-687790568813517+z-9-1448155650?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 5, "title": "Youth Austin FC adidas Green 2025 The Heartbeat Kit Replica Jersey", "price": "$79.99", "imageUrl": "https://images.footballfanatics.com/austin-fc/youth-adidas-green-austin-fc-2025-the-heartbeat-kit-replica-jersey_ss5_p-202649399+u-qi5r35yurserqrc7bz8l+v-rfmm0bleimx7sgeo5ve1.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/youth-austin-fc-adidas-green-2025-the-heartbeat-kit-replica-jersey/t-21037708+p-572257068243596+z-9-1658848274?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 6, "title": "Men's Austin FC adidas Green 2025 The Heartbeat Kit Replica Jersey", "price": "$99.99", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-adidas-green-austin-fc-2025-the-heartbeat-kit-replica-jersey_ss5_p-202644702+u-lbguthxsocydpypitrz5+v-m0yuy3407inzwlylnjts.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-adidas-green-2025-the-heartbeat-kit-replica-jersey/t-32810075+p-689924845937082+z-9-936654307?_ref=p-SRP:m-GRID:i-r0c1:po-1" },
        { "id": 7, "title": "Men's Austin FC adidas Green 2025 The Heartbeat Kit Authentic Custom Jersey", "price": "$194.99", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-adidas-green-austin-fc-2025-the-heartbeat-kit-authentic-custom-jersey_ss5_p-202698407+u-mpsperbkfuanjkavt30w+v-lrcjjinusox8tyh3rd5k.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-adidas-green-2025-the-heartbeat-kit-authentic-custom-jersey/t-21580020+p-579902400986657+z-9-3479080895?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 8, "title": "Men's Austin FC adidas Tan 2024 The Armadillo Kit Authentic Jersey", "price": "$149.99", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-adidas-tan-austin-fc-2024-the-armadillo-kit-authentic-jersey_ss5_p-202652656+u-np5hqdn4jmaspcrl0ifh+v-hkgb2kgzwitkajdtpgxc.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-adidas-tan-2024-the-armadillo-kit-authentic-jersey/t-10927731+p-352213289468743+z-9-3454904541?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 9, "title": "Women's Austin FC adidas Green 2025 The Heartbeat Kit Replica Jersey", "price": "$99.99", "imageUrl": "https://images.footballfanatics.com/austin-fc/womens-adidas-green-austin-fc-2025-the-heartbeat-kit-replica-jersey_ss5_p-202649342+u-rjfy5frxlk4tdruinzl3+v-dljsnaclybogl3fopzca.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/womens-austin-fc-adidas-green-2025-the-heartbeat-kit-replica-jersey/t-32813319+p-462235621543625+z-9-4008160176?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 10, "title": "Men's Austin FC adidas Black 2024 Hispanic Heritage Pre-Match Top", "price": "$29.99 (discounted from $69.99)", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-adidas-black-austin-fc-2024-pride-pre-match-top_ss5_p-200838483+u-cbnzvgv4yx37ppgjhfwq+v-lwieuwp3jsbjjsl9tcnb.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/MABWvP" },
        { "id": 11, "title": "Youth Austin FC adidas Green 2025 The Heartbeat Kit Replica Custom Jersey", "price": "$114.99", "imageUrl": "https://images.footballfanatics.com/austin-fc/youth-adidas-green-austin-fc-2025-the-heartbeat-kit-replica-custom-jersey_ss5_p-202708443+u-sn2ko5qoplfrndj0hvjy+v-1wmnbugyhkwbcqrnbyxw.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/youth-austin-fc-adidas-green-2025-the-heartbeat-kit-replica-custom-jersey/t-10252286+p-797757305597565+z-9-3643494172?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        // { "id": 12, "title": "Toddler Austin FC adidas Cream 2024 AEROREADY Team Jersey", "price": "$49.99", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2023-the-17s-kit-authentic-jersey_pi5272000_ff_5272914-450677b70abb328ba8e0_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/qzyvXy" },
        { "id": 13, "title": "Unisex Austin FC Fanatics Black Super Soft Pullover Crew Sweatshirt", "price": "$49.99 (discounted from $99.99)", "imageUrl": "https://images.footballfanatics.com/austin-fc/unisex-fanatics-black-austin-fc-super-soft-pullover-crew-sweatshirt_ss5_p-5128893+u-k5ui09wx3knq0eqcvj8r+v-dcx9s9eou9hhjh5iurxx.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/unisex-austin-fc-fanatics-black-super-soft-pullover-crew-sweatshirt/t-21477719+p-6189461964985+z-9-4037362703?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 14, "title": "Unisex Austin FC Fanatics Black Elements Super Soft Fleece Pullover Hoodie", "price": "$59.99 (discounted from $109.99)", "imageUrl": "https://images.footballfanatics.com/austin-fc/unisex-fanatics-black-austin-fc-elements-super-soft-fleece-pullover-hoodie_ss5_p-5128881+u-krmomeip8lfyos1scavx+v-am8jlxoqaa1qxodfippq.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/unisex-austin-fc-fanatics-black-elements-super-soft-fleece-pullover-hoodie/t-21691186+p-1645803186533+z-9-3597097179?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 15, "title": "Men's Austin FC Fanatics Black Golden Goal T-Shirt", "price": "$39.99", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-fanatics-black-austin-fc-golden-goal-t-shirt_ss5_p-201747196+u-jevlyvfgfc5jibu7bxe5+v-rwdzjo430esrwbvlwiol.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-fanatics-black-golden-goal-t-shirt/t-32703397+p-577701741529469+z-9-1429536723?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 16, "title": "Men's Austin FC Fanatics White Long Sleeve T-Shirt", "price": "$29.99 (discounted from $34.99)", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-fanatics-white-austin-fc-long-sleeve-t-shirt_ss5_p-201198293+u-dbuhh2zrpsefmbeppbcw+v-veaagwmv2rz6jz52kuq1.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-fanatics-white-long-sleeve-t-shirt/t-21366653+p-803334125497429+z-9-997860019?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 17, "title": "Men's Austin FC New Era Green Color Pack 9FORTY A-Frame Adjustable Trucker Hat", "price": "$32.99", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-new-era-green-austin-fc-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948623+u-u4uhqy6fkfmjpdrddyk0+v-5gbaijc0soztgdd3uygb.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-new-era-green-color-pack-9forty-a-frame-adjustable-trucker-hat/t-10588831+p-023301984819771+z-9-1808891455?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        // { "id": 18, "title": "Austin FC Green 2024 Jersey Hook Scarf", "price": "$34.99", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2023-the-17s-kit-authentic-jersey_pi5272000_ff_5272914-450677b70abb328ba8e0_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/qzyvXy" },
        { "id": 19, "title": "Women's Austin FC adidas Green 2023 Las Voces Kit Replica Jersey", "price": "$34.99 (discounted from $99.99)", "imageUrl": "https://images.footballfanatics.com/austin-fc/womens-adidas-green-austin-fc-2023-las-voces-kit-replica-jersey_ss5_p-5273083+u-f9ummuoycyjdidcbm50j+v-xqt2xvcamhppwabx71pl.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/womens-austin-fc-adidas-green-2023-las-voces-kit-replica-jersey/t-10693353+p-4902850388644+z-9-1308574476?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 20, "title": "Men's Austin FC Brandon Vazquez adidas Green 2025 The Heartbeat Kit Authentic Player Jersey", "price": "$194.99", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-adidas-brandon-vazquez-green-austin-fc-2025-the-heartbeat-kit-authentic-player-jersey_ss5_p-202840177+u-9ylxn8ntxr0ujs2bk0th+v-yxwdiizvduerx1cw1uto.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-brandon-vazquez-adidas-green-2025-the-heartbeat-kit-authentic-player-jersey/t-21816664+p-914491081588353+z-9-297409859?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 21, "title": "Men's Austin FC New Era Black 9SEVENTY COOLERA Stretch-Snap Adjustable Hat", "price": "$39.99", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-new-era-black-austin-fc-2025-jersey-hook-9seventy-stretch-snap-hat_ss5_p-202216440+u-a3u54ziwthsiireyofvu+v-dzclip1mbkq8vkgavzbi.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-new-era-black-9seventy-coolera-stretch-snap-adjustable-hat/t-21585531+p-809956671444427+z-9-74759403?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 22, "title": "Men's Austin FC adidas Black Home 2025 The Heartbeat Kit Authentic Shorts", "price": "$59.99", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-adidas-black-austin-fc-home-2025-the-heartbeat-kit-authentic-shorts_ss5_p-201672883+u-kunomuy41pgpc8h3y62y+v-d2moujbvgpurqznmynkn.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-adidas-black-home-2025-the-heartbeat-kit-authentic-shorts/t-21362242+p-574490406380015+z-9-2806409744?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        { "id": 23, "title": "Men's Austin FC adidas Black 2024 Pride Pre-Match Top", "price": "$19.99 (discounted from $69.99)", "imageUrl": "https://images.footballfanatics.com/austin-fc/mens-adidas-black-austin-fc-2024-pride-pre-match-top_ss5_p-200838483+u-cbnzvgv4yx37ppgjhfwq+v-lwieuwp3jsbjjsl9tcnb.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/austin-fc/mens-austin-fc-adidas-black-2024-pride-pre-match-top/t-10033386+p-57006631259411+z-8-1433582739?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
        // { "id": 24, "title": "Toddler Austin FC Green Charming Dude Top & Short Set", "price": "$44.99", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2023-the-17s-kit-authentic-jersey_pi5272000_ff_5272914-450677b70abb328ba8e0_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/qzyvXy" },
        // { "id": 25, "title": "Men's Austin FC Fanatics Black Mid Goal Long Sleeve T-Shirt", "price": "$49.99", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2023-the-17s-kit-authentic-jersey_pi5272000_ff_5272914-450677b70abb328ba8e0_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/qzyvXy" },
        // { "id": 26, "title": "Unisex Austin FC Fanatics Gray Elements Super Soft Short Sleeve T-Shirt", "price": "$29.99 (sniženo sa $54.99)", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2023-the-17s-kit-authentic-jersey_pi5272000_ff_5272914-450677b70abb328ba8e0_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/qzyvXy" },
        // { "id": 27, "title": "Men's Austin FC Fanatics Black Libero Trucker Adjustable Hat", "price": "$29.99", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2023-the-17s-kit-authentic-jersey_pi5272000_ff_5272914-450677b70abb328ba8e0_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/qzyvXy" },
        // { "id": 28, "title": "Men's Austin FC Cream '90s Heavyweight Relaxed T-Shirt", "price": "$39.99", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2023-the-17s-kit-authentic-jersey_pi5272000_ff_5272914-450677b70abb328ba8e0_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/qzyvXy" },
        // { "id": 29, "title": "Men's Austin FC New Era Black Corduroy Golfer Adjustable Hat", "price": "$38.99", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2023-the-17s-kit-authentic-jersey_pi5272000_ff_5272914-450677b70abb328ba8e0_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/qzyvXy" },
        // { "id": 30, "title": "Men's Austin FC New Era Black 2025 Jersey Hook 9FORTY M-Crown Adjustable Hat", "price": "$34.99", "imageUrl": "https://images.footballfanatics.com/atlanta-united-fc/mens-adidas-black-atlanta-united-fc-2023-the-17s-kit-authentic-jersey_pi5272000_ff_5272914-450677b70abb328ba8e0_full.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/qzyvXy" }
    
    
    ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Austin FC</h1>
        <div className='mb-6'>
          <img
            src='/Austinposter.png'
            alt='Austin FC' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

          {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
          <div className='flex gap-4 mb-8 justify-center'>
        <a
            href="https://ticketnetwork.lusg.net/9LnXLQ"
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
            <li><strong>Full Name:</strong> Austin FC</li>
            <li><strong>Nickname(s):</strong> The Verde</li>
            <li><strong>Founded:</strong> 2018</li>
            <li><strong>Stadium:</strong> Q2 Stadium, Austin, Texas</li>
            <li><strong>Capacity:</strong> 20,500</li>
            <li><strong>Owners:</strong> Anthony Precourt</li>
            <li><strong>Head Coach:</strong> Nico Estévez</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Rising in the Soccer Scene</h2>
          <p>
            Austin FC is a professional soccer club based in Austin, Texas, founded in 2018. The club has quickly established itself as a competitive force in Major League Soccer, backed by a passionate local fan base.
          </p>
          <p>
            The team is known for its commitment to community engagement and creating a vibrant matchday experience. With a strong focus on player development, Austin FC aims to build a sustainable soccer culture in the region.
          </p>
          <p>
            As Austin FC continues to grow, the club is poised to make a significant impact in the league and inspire the next generation of soccer players.
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

export default Austin;
