import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'philadelphia-union' }) => {
  const players = [
    // { name: 'Alejandro Bedoya', image: 'https://975thefanatic.com/wp-content/uploads/sites/16/2024/02/GettyImages-1403738171.jpg', link: './AlejandroBedoya' },
    // { name: 'Dániel Gazdag', image: 'https://cdn1.sheffieldwednesday.news/uploads/8/2024/01/GettyImages-1783261309-1140x760.jpg', link: './DanielGazdag' },
    // { name: 'Jeremy Rafanello', image: 'data:image/jpeg;base64,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', link: './AlejandroBedoya' },
    { name: 'Mikael Uhre', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5qu95-49m4uxGDX5Z3qfQj1pRZduVQQsrg&s', slug: './uhre' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/philadelphia-union/${player.slug}`}
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

const PhiladelphiaUnion = () => {
  const items = [
    {
      "title": "Youth Philadelphia Union adidas Blue 2025 The Voltage Kit Replica Custom Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Kids Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/youth-adidas-blue-philadelphia-union-2025-the-voltage-kit-replica-custom-jersey_ss5_p-202709980+pv-1+u-nzuemkcwamxejerqgtpa+v-xpyos4c87rjkyfkiclzg.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEOWJQ"
    },
    {
      "title": "Men's Philadelphia Union adidas Navy 2024 The XV Kit Replica Custom Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-adidas-navy-philadelphia-union-2024-the-xv-kit-replica-custom-jersey_ss5_p-201110903+pv-1+u-xf3yd0zdd1ssuto96fzo+v-ess1kld9p176szr4g3iu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/bOP0Pb"
    },
    {
      "title": "Youth Philadelphia Union adidas Blue 2025 The Voltage Kit Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/youth-adidas-blue-philadelphia-union-2025-the-voltage-kit-replica-jersey_ss5_p-202658590+pv-1+u-ccg8zfb7bx4lgb79tu1w+v-dkyygczjjgwsufxc3o7g.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/OeOWOr"
    },
    {
      "title": "Men's Philadelphia Union Heathered Gray Logo T-Shirt",
      "price": "$17.99",
      "originalPrice": "$34.99",
      "category": "Philadelphia Union",
      "shipping": "",
      "availability": "as of 02/17/2022",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-heathered-gray-philadelphia-union-logo-t-shirt_pi4735000_altimages_ff_4735661-ad8dadc0775771ef582falt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/RGZWZR"
    },
    {
      "title": "Men's Philadelphia Union Stadium Essentials Navy Compete Quarter-Zip Jacket",
      "price": "$89.99",
      "originalPrice": "$89.99",
      "category": "Sweatshirts",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-stadium-essentials-navy-philadelphia-union-compete-quarter-zip-jacket_ss5_p-202155740+pv-1+u-aoj64mjwdlex3izg7hxb+v-l9f2sqaznq0ncbo2jz36.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/4Gyqyr"
    },
    {
      "title": "Men's Philadelphia Union Sport Design Sweden Cream 2025 Jersey Hook Relaxed Pullover Hoodie",
      "price": "$89.99",
      "originalPrice": "$89.99",
      "category": "Philadelphia Union",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-sport-design-sweden-cream-philadelphia-union-2025-jersey-hook-relaxed-pullover-hoodie_ss5_p-202666227+pv-1+u-fly2tsu1oss5dlaqdjb6+v-ugsm9br2aaxqtr3djqcv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOkEk7"
    },
    {
      "title": "Men's Philadelphia Union adidas Navy 2025 Travel Pullover Hoodie",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Sweatshirts",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-adidas-navy-philadelphia-union-2025-travel-pullover-hoodie_ss5_p-201657323+pv-1+u-c2e70qcd4uscax6uao0t+v-y1xqooy8ejxq0r59ldab.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yqjBjb"
    },
    {
      "title": "Men's Philadelphia Union adidas Navy 2024 Primary Authentic Blank Jersey",
      "price": "$114.99",
      "originalPrice": "$159.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "as of 08/05/2024",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-adidas-navy-philadelphia-union-2024-primary-authentic-blank-jersey_ss5_p-202073216+pv-1+u-xwiuje7p7vqgvg15sorc+v-tggqe6ga9kitwwod2puw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRb0bB"
    },
    {
      "title": "Youth Philadelphia Union Outerstuff Navy Stalwart Defender T-Shirt",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Kids T-Shirts",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/youth-outerstuff-navy-philadelphia-union-stalwart-defender-t-shirt_ss5_p-201875247+pv-1+u-ychzmtwuxgo437h3ds0c+v-jnmb5bwii7elxidqfyyf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOj0ja"
    },
    {
      "title": "Men's Philadelphia Union Sport Design Sweden Navy 2025 Jersey Hook Relaxed Fit Long Sleeve T-Shirt",
      "price": "$44.99",
      "originalPrice": "$44.99",
      "category": "Men's T-Shirts",
      "shipping": "Ready To Ship",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-sport-design-sweden-navy-philadelphia-union-2025-jersey-hook-relaxed-fit-long-sleeve-t-shirt_ss5_p-202666241+u-tpq9xztdxzpdtpbkznd0+v-uqjccjlydccoolk8xlmr.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/LKOWOo"
    },
    {
      "title": "Men's Philadelphia Union Cavan Sullivan Navy Authentic Stack Name & Number T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-cavan-sullivan-navy-philadelphia-union-authentic-stack-name-and-number-t-shirt_ss5_p-202772332+pv-1+u-a1wmmmfwy2cuvx3ftjtj+v-juu3kudngs18g9hoqvt6.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrRrR"
    },
    {
      "title": "Men's Philadelphia Union adidas Blue 2025 The Voltage Kit Replica Custom Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-adidas-blue-philadelphia-union-2025-the-voltage-kit-replica-custom-jersey_ss5_p-202709915+pv-1+u-dkvq9pkdyzcz7vobhdso+v-ki9ecqyea8jwpruz3jih.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyOJOa"
    },
    {
      "title": "Men's Philadelphia Union Navy Team Chant T-Shirt",
      "price": "$17.99",
      "originalPrice": "$34.99",
      "category": "T-Shirts",
      "shipping": "",
      "availability": "as of 08/31/2022",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-navy-philadelphia-union-team-chant-t-shirt_pi5066000_altimages_ff_5066728-a67b4c470d48f77d17bdalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1ebeX"
    },
    {
      "title": "Men's Philadelphia Union New Era Tan Active 9TWENTY Adjustable Hat",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Hats",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens%C2%A0new-era-tan-philadelphia-union-active-9twenty-adjustable-hat_ss5_p-202314654+pv-1+u-hy1pwroiqqd6wqybmhwk+v-sorchrwvzlnmxhbikpzk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrRrd"
    },
    {
      "title": "Youth Philadelphia Union Navy Unbeatable Pullover Hoodie",
      "price": "$54.99",
      "originalPrice": "$54.99",
      "category": "Kids Sweatshirts",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/youth-navy-philadelphia-union-unbeatable-pullover-hoodie_ss5_p-201875265+pv-1+u-s9nqfenqa0dwx21ye4fd+v-janoqtacl9mh24tloltu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjAWAM"
    },
    {
      "title": "Youth Philadelphia Union Blue Field General Track Full-Zip Jacket",
      "price": "$59.99",
      "originalPrice": "$59.99",
      "category": "Jackets",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/youth-blue-philadelphia-union-field-general-track-full-zip-jacket_ss5_p-201875318+pv-1+u-ngiqivcg80xyoplgughe+v-ace06sz5plmlnlmvijr2.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APnGnx"
    },
    {
      "title": "Men's Philadelphia Union Fanatics Heather Gray Low Block Trucker Adjustable Hat",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Hats",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-fanatics-heather-gray-philadelphia-union-low-block-trucker-adjustable-hat_ss5_p-201747542+pv-1+u-lhmq5rkxu7uj4ig5vjhv+v-ajvrlhqol8iprit4uoj7.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19yVya"
    },
    {
      "title": "Men's Philadelphia Union adidas Blue 2025 The Voltage Kit Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-adidas-blue-philadelphia-union-2025-the-voltage-kit-replica-jersey_ss5_p-202652752+pv-1+u-nb2nsow6h2z2fqzxh0dm+v-mwp7lzc5kehmfpkucyhr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6LRYQ"
    },
    {
      "title": "Men's Philadelphia Union Sport Design Sweden Cream 2025 Jersey Hook Relaxed T-Shirt",
      "price": "$44.99",
      "originalPrice": "$44.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-sport-design-sweden-cream-philadelphia-union-2025-jersey-hook-relaxed-t-shirt_ss5_p-202666223+pv-1+u-8ndhe8pw0zepkspgwvmz+v-sxaob4fzxnze3lsmue2y.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45Bon"
    },
    {
      "title": "Men's Philadelphia Union Navy Primary Logo T-Shirt",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-navy-philadelphia-union-primary-logo-t-shirt_pi2950000_altimages_ff_2950113alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyA02G"
    },
    {
      "title": "Men's Philadelphia Union Mitchell & Ness Black Perfect Strapback Adjustable Hat",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Hats",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-mitchell-and-ness-black-philadelphia-union-perfect-strapback-adjustable-hat_ss5_p-202312557+pv-1+u-vfugxzd2xjpcfp8ezuww+v-95cmlp8ng3r56351rvul.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/bOP0jP"
    },
    {
      "title": "Women's Philadelphia Union Heather Navy Distressed Vintage Primary Tri-Blend T-Shirt",
      "price": "$19.99",
      "originalPrice": "$39.99",
      "category": "Women T-Shirts",
      "shipping": "",
      "availability": "as of 05/21/2024",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/womens-heather-navy-philadelphia-union-distressed-vintage-primary-tri-blend-t-shirt_ss5_p-5145917+pv-1+u-cx6lmvdhdpaaylf8pcyz+v-d4f5894kvfoxejhblyoo.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/RGZW2a"
    },
    {
      "title": "Men's Philadelphia Union Black Team Script Relaxed T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "T-Shirts",
      "shipping": "Ready To Ship",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-black-philadelphia-union-team-script-relaxed-t-shirt_ss5_p-202666791+pv-1+u-fsqwjgojady75sprivrd+v-w3x979iwfv2mzyxe2wio.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQOEO"
    },
    {
      "title": "Men's Philadelphia Union adidas Blue 2025 The Voltage Kit Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/philadelphia-union/mens-adidas-blue-philadelphia-union-2025-the-voltage-kit-authentic-custom-jersey_ss5_p-202709845+pv-1+u-uihnk2qb2eeyyjthyzda+v-oechqtzy05qchjchrigt.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/4GyqgM"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
       <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Philadelphia Union</h1>
        <div className='mb-6'>
          <img
            src='/Union.png'
            alt='Union' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/qzm7Eq"
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
            <li><strong>Full Name:</strong> Philadelphia Union</li>
            <li><strong>Nickname(s):</strong> The U</li>
            <li><strong>Founded:</strong> 2008</li>
            <li><strong>Stadium:</strong> Subaru Park, Chester, Pennsylvania</li>
            <li><strong>Capacity:</strong> 18,500</li>
            <li><strong>Owner:</strong> Keystone Sports & Entertainment</li>
            <li><strong>Head Coach:</strong> Bradley Carnell</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Growing Power in the East</h2>
          <p>
            Philadelphia Union has established itself as a formidable force in Major League Soccer since its founding in 2008. With a dedicated fan base and a strong emphasis on player development, the Union has become one of the top teams in the Eastern Conference.
          </p>
          <p>
            Playing at Subaru Park, the team has a loyal following and an exciting attacking style of play, led by stars like Alejandro Bedoya, Gazdag Dániel, and Jack Elliott.
          </p>
          <p>
            The Union's focus on building a competitive squad and developing homegrown talent continues to shape their future success. As they continue to grow, they are sure to make their mark on MLS and challenge for league titles in the years to come.
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

export default PhiladelphiaUnion;
