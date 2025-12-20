import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = ({ teamSlug = 'charlotte' }) => {
  const players = [
    { name: 'Ashley Westwoods', image: 'https://www.qcnews.com/wp-content/uploads/sites/109/2024/05/GettyImages-2152987244.jpg', slug: './westwoods' },
    // { name: 'Karol Świderski', image: 'https://www.goal.pl/wp-content/uploads/2024/10/karol-swiderski-1.jpg', slug: './swiderski' },
    { name: 'Tim Ream', image: 'https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2175381685-1024x721.jpg', slug: './ream' },
    { name: 'Liel Abada', image: 'https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_900/v1/media/gmg/XYANLDQB2NDYPCMTNDRVN75J64.jpg?_a=DAJAUVWIZAAA', slug: './abada' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/charlotte/${player.slug}`}
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

const CharlotteFC = () => {
  const items = [
    { "id": 1, "title": "Men's Charlotte FC adidas Black 2025 Fortress Kit Authentic Jersey", "price": "$149.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-black-charlotte-fc-2025-fortress-kit-authentic-jersey_ss5_p-202652657+u-mdhtpdooxasksaeiwgao+v-ritrwloqfmd2i3vwm2la.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-black-2025-fortress-kit-authentic-jersey/t-87206043+p-80778017490811+z-8-3047227005?_ref=p-SRP:m-GRID:i-r0c0:po-0" },
    { "id": 2, "title": "Men's Charlotte FC adidas Black 2025 Fortress Kit Authentic Custom Jersey", "price": "$194.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-black-charlotte-fc-2025-fortress-kit-authentic-custom-jersey_ss5_p-202709828+u-86hwyp7swiq49ezamamx+v-0bpamjdnovafflrwqzlm.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-black-2025-fortress-kit-authentic-custom-jersey/t-65759376+p-35882429775515+z-8-155414585?_ref=p-SRP:m-GRID:i-r0c1:po-1" },
    { "id": 3, "title": "Men's Charlotte FC adidas Black 2025 Fortress Kit Replica Jersey", "price": "$99.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-black-charlotte-fc-2025-fortress-kit-replica-jersey_ss5_p-202652740+u-wpg5uilgbpvf2s8yswya+v-xjb3pv6gppcp9b0tjc1g.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-black-2025-fortress-kit-replica-jersey/t-10860498+p-029924402768820+z-9-3324667214?_ref=p-SRP:m-GRID:i-r0c2:po-2" },
    { "id": 4, "title": "Youth Charlotte FC adidas Black 2025 Fortress Kit Replica Jersey", "price": "$79.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/youth-adidas-black-charlotte-fc-2025-fortress-kit-replica-jersey_ss5_p-202658578+u-c05d7ykxqpnimnv7akz7+v-kxdskooed4cvzvda4plo.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/youth-charlotte-fc-adidas-black-2025-fortress-kit-replica-jersey/t-10196098+p-914479398397684+z-9-2132074831?_ref=p-SRP:m-GRID:i-r1c0:po-3" },
    { "id": 5, "title": "Women's Charlotte FC adidas Black 2025 Fortress Kit Replica Jersey", "price": "$99.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/womens-adidas-black-charlotte-fc-2025-fortress-kit-replica-jersey_ss5_p-202658088+u-bcwvujm0inq11jgtruhh+v-6mo5uw9ehgev3xgqgl6y.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/womens-charlotte-fc-adidas-black-2025-fortress-kit-replica-jersey/t-98759343+p-79997939167772+z-8-2119229679?_ref=p-SRP:m-GRID:i-r1c1:po-4" },
    { "id": 6, "title": "Men's Charlotte FC adidas Black 2025 Fortress Kit Replica Custom Jersey", "price": "$134.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-black-charlotte-fc-2025-fortress-kit-replica-custom-jersey_ss5_p-202709903+u-bgl3nmz2ktlgrzhmhhtk+v-29dnpetxdezg2jck0lsk.jpg?_hv=2&w=340", "link": "https://mlsstore.i8h2.net/e1ENAr" },
    { "id": 7, "title": "Youth Charlotte FC adidas Black 2025 Fortress Kit Replica Custom Jersey", "price": "$114.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/youth-adidas-black-charlotte-fc-2025-fortress-kit-replica-custom-jersey_ss5_p-202709968+u-5oj7y5zeilmsizq7scbb+v-kzhoeqljldewvqpkev5n.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/youth-charlotte-fc-adidas-black-2025-fortress-kit-replica-custom-jersey/t-10318287+p-132279636610096+z-9-621955559?_ref=p-SRP:m-GRID:i-r2c0:po-6" },
    { "id": 8, "title": "Men's Charlotte FC adidas Purple 2023 Crown Jewel Kit Authentic Jersey", "price": "$39.99 (discounted from $159.99)", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-purple-charlotte-fc-2023-crown-jewel-kit-authentic-jersey_ss5_p-5273520+u-1zw3vezsdqaqf9cz9ue1+v-chcn2dvoiyendgxfanvn.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-purple-2023-crown-jewel-kit-authentic-jersey/t-43089332+p-9491295894914+z-9-4109628864?_ref=p-SRP:m-GRID:i-r2c1:po-7" },
    { "id": 9, "title": "Men's Charlotte FC adidas Blue 2024 The Carolina Kit: Explore Replica Jersey", "price": "$99.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-blue-charlotte-fc-2024-the-carolina-kit:-explore-replica-jersey_ss5_p-201093752+u-b9iharjvpkoqeedruy5x+v-ejdut6i2ohtdmcxaeh0y.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-blue-2024-the-carolina-kit:-explore-replica-jersey/t-32192632+p-807778990969064+z-9-2224775332?_ref=p-SRP:m-GRID:i-r2c2:po-8" },
    { "id": 10, "title": "Women's Charlotte FC adidas Purple 2023 Crown Jewel Kit Replica Jersey", "price": "$19.99 (discounted from $99.99)", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-purple-charlotte-fc-2023-crown-jewel-kit-replica-jersey_pi5273000_ff_5273759-faade72942cb29300cd6_full.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-purple-2023-crown-jewel-kit-replica-jersey/t-10311532+p-5068968196160+z-9-1350760317?_ref=p-SRP:m-GRID:i-r3c0:po-9" },
    { "id": 11, "title": "Men's Charlotte FC adidas Blue 2024 The Carolina Kit: Explore Authentic Jersey", "price": "$149.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-blue-charlotte-fc-2024-the-carolina-kit:-explore-authentic-jersey_ss5_p-202644573+u-wdhfz0lnexay289dli4i+v-tfnp3hpuwql1hmmerizq.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-blue-2024-the-carolina-kit:-explore-authentic-jersey/t-43089376+p-687702397159972+z-9-4268191496?_ref=p-SRP:m-GRID:i-r3c1:po-10" },
    { "id": 12, "title": "Men's Charlotte FC adidas Blue 2024 The Carolina Kit: Explore Authentic Custom Jersey", "price": "$194.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-adidas-blue-charlotte-fc-2024-the-carolina-kit:-explore-authentic-custom-jersey_ss5_p-202698408+u-ukl0poszo9muk8ppcehp+v-wzulwievcle2wmhvtvxf.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-blue-2024-the-carolina-kit:-explore-authentic-custom-jersey/t-21314887+p-357757626575632+z-9-250842358?_ref=p-SRP:m-GRID:i-r3c2:po-11" },
    { "id": 13, "title": "Men's Charlotte FC Cutter & Buck Blue Coastline Epic Comfort Eco Recycled Long Sleeve Hoodie T-Shirt", "price": "$74.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/womens-adidas-purple-charlotte-fc-2023-crown-jewel-kit-replica-jersey_pi5274000_ff_5274086-5901a7988bdfb252e111_full.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/womens-charlotte-fc-adidas-purple-2023-crown-jewel-kit-replica-jersey/t-87311543+p-052485933369+z-8-95534938?_ref=p-SRP:m-GRID:i-r4c0:po-12" },
    { "id": 14, "title": "Men's Charlotte FC Fanatics Gray Team Shorts", "price": "$29.99 (discounted from $34.99)", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-cutter-and-buck-blue-charlotte-fc-coastline-epic-comfort-eco-recycled-long-sleeve-hoodie-t-shirt_ss5_p-202727015+u-zxhjzjh9bay7qpo9iyd9+v-iw7fbr8cqdsvb4yroj9u.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-cutter-and-buck-blue-coastline-epic-comfort-eco-recycled-long-sleeve-hoodie-t-shirt/t-43207110+p-805579851385432+z-9-1991513589?_ref=p-SRP:m-GRID:i-r4c1:po-13" },
    { "id": 15, "title": "Men's Charlotte FC adidas Black 2025 Travel Pullover Hoodie", "price": "$79.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens-fanatics-gray-charlotte-fc-team-shorts_ss5_p-5020653+u-dlbxad1nqq7yqzrlacdm+v-ibccgo6emxrk6gydfdbe.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-fanatics-gray-team-shorts/t-10201565+p-0511808806164+z-9-3673221434?_ref=p-SRP:m-GRID:i-r4c2:po-14" },
    { "id": 16, "title": "Men's Charlotte FC New Era Black 2025 Jersey Hook 9SEVENTY Stretch-Snap Hat", "price": "$39.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/youth-outerstuff-black-charlotte-fc-stalwart-defender-t-shirt_ss5_p-201875228+u-xoih0yvvnvlcoycuuq8l+v-przt0rzceu301i7csguc.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/youth-charlotte-fc-outerstuff-black-stalwart-defender-t-shirt/t-10865909+p-026634207405303+z-9-1914324826?_ref=p-SRP:m-GRID:i-r5c0:po-15" },
    { "id": 17, "title": "Charlotte FC WinCraft 2-Sided 12'' x 18'' Applique Garden Flag", "price": "$21.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/womens-adidas-blue-charlotte-fc-2024-the-carolina-kit:-explore-replica-jersey_ss5_p-201099302+u-93rrbgjrfds2obpczypm+v-j0oaslvrtnakkzfj1def.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/womens-charlotte-fc-adidas-blue-2024-the-carolina-kit:-explore-replica-jersey/t-10754809+p-355556333232476+z-9-3404739363?_ref=p-SRP:m-GRID:i-r5c1:po-16" },
    { "id": 18, "title": "Men's Charlotte FC adidas Green 2025 Goalkeeper Jersey", "price": "$119.99", "imageUrl": "https://images.footballfanatics.com/charlotte-fc/mens%C2%A0adidas-green-charlotte-fc-2025-goalkeeper-jersey_ss5_p-201671752+u-zsxaoi5jxpoh3uy9avms+v-11qtn8d1dl1edmeg791n.jpg?_hv=2&w=340", "link": "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-green-2025-goalkeeper-jersey/t-10973798+p-460023846356845+z-9-2898977987?_ref=p-SRP:m-GRID:i-r5c2:po-17" }
  ]


  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Charlotte</h1>
        <div className='mb-6'>
          <img
            src='/charlotte.png'
            alt='Charlotte FC' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/GKOvKB"
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
            <li><strong>Full Name:</strong> Charlotte Football Club</li>
            <li><strong>Nickname(s):</strong> The Crown</li>
            <li><strong>Founded:</strong> December 17, 2019</li>
            <li><strong>Stadium:</strong> Bank of America Stadium, Charlotte, North Carolina</li>
            <li><strong>Capacity:</strong> 74,867</li>
            <li><strong>Owners:</strong> David Tepper</li>
            <li><strong>Head Coach:</strong> Dean Smith</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Rising Star in MLS</h2>
          <p>
            Charlotte FC is a relatively new football club, having joined MLS in 2022. The team quickly gained a passionate fanbase and is known for its vibrant atmosphere during matches.
          </p>
          <p>
            With a focus on building a competitive squad, Charlotte FC has attracted talented players and experienced coaches. The club's ambition is to not only compete in the league but also to establish itself as a strong presence in American soccer.
          </p>
          <p>
            Charlotte's location and the growing interest in soccer in the region make it an exciting place for both players and fans alike. The future looks bright as they aim for success both on and off the pitch.
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

export default CharlotteFC;
