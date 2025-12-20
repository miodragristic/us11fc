import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'new-england-revolution' }) => {
  const players = [
    { name: 'Leonardo Campana', image: 'https://cdn1.intermiami.news/uploads/52/2024/06/GettyImages-2155044985-1140x776.jpg', slug: './campana' },
    { name: 'Carles Gil', image: 'https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/09/carles.jpg', slug: './gil' },
    { name: 'Luca Langoni ', image: 'https://cdn1.intermiami.news/uploads/52/2024/09/GettyImages-2172110695-1024x685.jpg', slug: './langoni' },
    { name: 'Matt Polster', image: 'https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/04/New-England-Revolution-midfielder-Matt-Polster-gets-past.jpg', slug: './polster' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/new-england-revolution/${player.slug}`}
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

const NewEnglandRevolution = () => {
  const items = [
      {
        "title": "Youth New England Revolution adidas White 2025 Eastern White Pine x Flag of New England Replica Custom Jersey",
        "price": "$114.99",
        "originalPrice": "$114.99",
        "category": "Youth Jersey",
        "shipping": "Ships Free",
        "availability": "In Stock",
        "imageUrl": "https://images.footballfanatics.com/new-england-revolution/youth-adidas-white-new-england-revolution-2025-eastern-white-pine-x-flag-of-new-england-replica-custom-jersey_ss5_p-202709978+pv-1+u-8twemd6gyym1vdeshv7d+v-1are9hxdwjhsp4fb61vn.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/19yyR9"
      },
      {
        "title": "Men's New England Revolution adidas White 2025 Eastern White Pine x Flag of New England Replica Custom Jersey",
        "price": "$134.99",
        "originalPrice": "$134.99",
        "category": "Men's Jersey",
        "shipping": "Ships Free",
        "availability": "In Stock",
        "imageUrl": "https://images.footballfanatics.com/new-england-revolution/mens-adidas-white-new-england-revolution-2025-eastern-white-pine-x-flag-of-new-england-replica-custom-jersey_ss5_p-202709913+pv-1+u-2sjbokb8lypstx9a5ovq+v-d1ad5dolfhjeu2mvrd7m.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/XmGGOX"
      },
      {
        "title": "Men's New England Revolution adidas White 2025 Eastern White Pine x Flag of New England Authentic Jersey",
        "price": "$149.99",
        "originalPrice": "$149.99",
        "category": "Men's Jersey",
        "shipping": "Ships Free",
        "availability": "In Stock",
        "imageUrl": "https://images.footballfanatics.com/new-england-revolution/mens-adidas-white-new-england-revolution-2025-eastern-white-pine-x-flag-of-new-england-authentic-jersey_ss5_p-202652670+pv-1+u-v9wjhxafx1vg5vwivz1q+v-ukxuclglilhsrn5an4rq.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/EEOOJ2"
      },
      {
        "title": "Youth New England Revolution adidas White 2025 Eastern White Pine x Flag of New England Replica Jersey",
        "price": "$79.99",
        "originalPrice": "$79.99",
        "category": "Youth Jersey",
        "shipping": "Ships Free",
        "availability": "In Stock",
        "imageUrl": "https://images.footballfanatics.com/new-england-revolution/youth-adidas-white-new-england-revolution-2025-eastern-white-pine-x-flag-of-new-england-replica-jersey_ss5_p-202658588+pv-1+u-9t7xhigxowtfy9szmxxp+v-wmi3qbqnnofhooraikec.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/55yyY2"
      },
      {
        "title": "Men's New England Revolution adidas White 2025 Eastern White Pine x Flag of New England Replica Jersey",
        "price": "$99.99",
        "originalPrice": "$99.99",
        "category": "Men's Jersey",
        "shipping": "Ships Free",
        "availability": "In Stock",
        "imageUrl": "https://images.footballfanatics.com/new-england-revolution/mens-adidas-white-new-england-revolution-2025-eastern-white-pine-x-flag-of-new-england-replica-jersey_ss5_p-202652750+pv-1+u-l7raax5oo0uw5v518v3w+v-mv47pl0hatd9rn1ksg8r.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/GKOOOm"
      },
      {
        "title": "Youth New England Revolution Navy Unbeatable Pullover Hoodie",
        "price": "$54.99",
        "originalPrice": "$54.99",
        "category": "Youth Apparel",
        "shipping": "Ships Free",
        "availability": "Ready To Ship",
        "imageUrl": "https://images.footballfanatics.com/new-england-revolution/youth-navy-new-england-revolution-unbeatable-pullover-hoodie_ss5_p-201875268+pv-1+u-izvfq02zu8g6gm90gshw+v-dlzvcv6ymqmwu11ywjhj.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/o4555O"
      },
      {
        "title": "Men's New England Revolution adidas White 2025 Eastern White Pine x Flag of New England Authentic Custom Jersey",
        "price": "$194.99",
        "originalPrice": "$194.99",
        "category": "Men's Jersey",
        "shipping": "Ships Free",
        "availability": "In Stock",
        "imageUrl": "https://images.footballfanatics.com/new-england-revolution/mens-adidas-white-new-england-revolution-2025-eastern-white-pine-x-flag-of-new-england-authentic-custom-jersey_ss5_p-202709841+pv-1+u-fpz7bedmo1yl93furfbs+v-uf8igauuhlejuxiidfnx.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/4Gyyyn"
      },
      {
        "title": "Men's New England Revolution adidas White Away 2025 Eastern White Pine X Flag of New England Authentic Shorts",
        "price": "$59.99",
        "originalPrice": "$59.99",
        "category": "Men's Shorts",
        "shipping": "Ships Free",
        "availability": "Ready To Ship",
        "imageUrl": "https://images.footballfanatics.com/new-england-revolution/mens-adidas-white-new-england-revolution-away-2025-eastern-white-pine-x-flag-of-new-england-authentic-shorts_ss5_p-201672871+pv-1+u-baaa3msdiqcseyzdsnmx+v-tzvyhjdgyitllntym97v.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/9Lnnn5"
      },
      {
        "title": "Women's New England Revolution adidas White 2025 Eastern White Pine x Flag of New England Replica Custom Jersey",
        "price": "$134.99",
        "originalPrice": "$134.99",
        "category": "Women's Jersey",
        "shipping": "Ships Free",
        "availability": "In Stock",
        "imageUrl": "https://images.footballfanatics.com/new-england-revolution/womens-adidas-white-new-england-revolution-2025-eastern-white-pine-x-flag-of-new-england-replica-custom-jersey_ss5_p-202709934+pv-1+u-brvlcqnlvblmxi2aitlc+v-t5s5jyvsc6gnfh9ivrap.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/e1eeeO"
      },
      {
        "title": "Women's New England Revolution adidas White 2025 Eastern White Pine x Flag of New England Replica Jersey",
        "price": "$99.99",
        "originalPrice": "$99.99",
        "category": "Women's Jersey",
        "shipping": "Ships Free",
        "availability": "In Stock",
        "imageUrl": "https://images.footballfanatics.com/new-england-revolution/womens-adidas-white-new-england-revolution-2025-eastern-white-pine-x-flag-of-new-england-replica-jersey_ss5_p-202658098+pv-1+u-z2hq8wy97ujrs71umo7q+v-eeeblh8udx8ecblbhpjq.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/QjAA2Y"
      },
      {
        "title": "Men's New England Revolution New Era Gray Color Pack 9FORTY A-Frame Adjustable Trucker Hat",
        "price": "$32.99",
        "originalPrice": "$32.99",
        "category": "Accessories",
        "shipping": "Ships Free",
        "availability": "Ready To Ship",
        "imageUrl": "https://images.footballfanatics.com/new-england-revolution/mens-new-era-gray-new-england-revolution-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948610+pv-1+u-r2axml4dqsyxvfymqhbl+v-yhcad835plr2uerj954r.jpg?_hv=2&w=900",
        "link": "https://mlsstore.i8h2.net/raLLJG"
      },
      // {
      //   "title": "Youth New England Revolution Outerstuff Navy Stalwart Defender T-Shirt",
      //   "price": "$31.99",
      //   "originalPrice": "$31.99",
      //   "category": "Youth Apparel",
      //   "shipping": "Ships Free",
      //   "availability": "Ready To Ship",
      //   "imageUrl": "https://images.footballfanatics.com/new-england-revolution/mens-new-era-gray-new-england-revolution-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948610+pv-1+u-r2axml4dqsyxvfymqhbl+v-yhcad835plr2uerj954r.jpg?_hv=2&w=900",
      //   "link": "https://mlsstore.i8h2.net/e1eekg"
      // }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
       <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>New England Revolution</h1>
        <div className='mb-6'>
          <img
            src='/NE.png'
            alt='New England Revolution' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/DyO2QG"
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
            <li><strong>Full Name:</strong> New England Revolution</li>
            <li><strong>Nickname(s):</strong> The Revs</li>
            <li><strong>Founded:</strong> 1996</li>
            <li><strong>Stadium:</strong> Gillette Stadium, Foxborough, Massachusetts</li>
            <li><strong>Capacity:</strong> 65,000</li>
            <li><strong>Owner:</strong> Robert Kraft</li>
            <li><strong>Head Coach:</strong> Bruce Arena</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Proud Legacy in the MLS</h2>
          <p>
            New England Revolution is one of the founding teams of Major League Soccer, established in 1996. The team has a rich history and is well-known for its passionate fanbase and competitive spirit.
          </p>
          <p>
            Playing at the iconic Gillette Stadium, the Revolution have a tradition of fighting hard for every point. Under the guidance of Bruce Arena, the team has consistently been one of the top contenders in the league.
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

export default NewEnglandRevolution;
