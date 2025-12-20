import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Chris Mueller', image: 'https://wgntv.com/wp-content/uploads/sites/5/2023/02/gettyimages-1416710153-594x594-1.jpg', slug: 'mueller' },
    { name: 'Brian Gutiérrez', image: 'https://cdn1.unitedinfocus.com/uploads/14/2023/06/GettyImages-1493904261-scaled.jpg', slug: 'gutierrez' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/chicago-fire/${player.slug}`}
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

const blogPosts = [
  {
    id: 73,
    title: "Chicago Fire Blaze Past Orlando in Wild Card Clash",
    author: "Mio Ristić",
    date: "October 23, 2025",
    excerpt: "Chicago Fire defeated Orlando City 3–1 in the 2025 MLS Wild Card match, with Brian Gutiérrez and Hugo Cuypers leading the charge. Read the full match report on US11.",
    imageUrl: "https://cdn.wsn.com/filters:format(webp)/filters:no_upscale()/fit-in/1200x585/1745997572/chicago-fire-fc-vs-orlando-city-sc-2025-05-03.jpg",
    slug: "chicago-orlando-playoffs"
  },
];


const ChicagoFire = () => {
  const items = [
    { id: 1, title: 'Men\'s Chicago Fire adidas White 2024 A Kit For All Authentic Jersey', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-adidas-white-chicago-fire-2024-a-kit-for-all-authentic-jersey_ss5_p-201176885+u-gwgmhdijt3sgz33lnugg+v-lclsfgv1nhawxjk9nq4m.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-adidas-white-2024-a-kit-for-all-authentic-jersey/t-14129042+p-915589285270+z-6-2422741748?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$74.99' },
    { id: 2, title: 'Men\'s Chicago Fire adidas Light Blue 2025 The Municipal Kit Authentic Jersey', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-adidas-light-blue-chicago-fire-2025-the-municipal-kit-authentic-jersey_ss5_p-202652658+u-sotkmx7dodfovjiayqca+v-xrvfezkvr8tfwmltjrev.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-adidas-light-blue-2025-the-municipal-kit-authentic-jersey/t-36678997+p-468802847280916+z-9-2845980003?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$149.99' },
    { id: 3, title: 'Men\'s Chicago Fire Navy Team Hometown Collection T-Shirt', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-navy-chicago-fire-team-hometown-collection-t-shirt_pi5281000_ff_5281691-f827290852ab6e4d375e_full.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-navy-team-hometown-collection-t-shirt/t-36237875+p-4979977839764+z-9-2971905418?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$17.99' },
    { id: 4, title: 'Men\'s Chicago Fire 500 Level Red Distressed Primary Logo Pullover Hoodie', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-500-level-red-chicago-fire-distressed-primary-logo-pullover-hoodie_ss5_p-201462935+u-lsypm5pukpfpbxq4yihh+v-0a6q2fguduzxylnilvlq.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-500-level-red-distressed-primary-logo-pullover-hoodie/t-36231219+p-799967480691256+z-9-2118345980?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$69.99' },
    { id: 5, title: 'Women\'s Chicago Fire Fanatics Red/Navy Iconic Raglan Full-Zip Hoodie', imageUrl: 'https://images.footballfanatics.com/chicago-fire/womens-fanatics-red/navy-chicago-fire-iconic-raglan-full-zip-hoodie_ss5_p-201198336+u-3idouhshgy3zo23iee1v+v-6iz5bymqw9gxigrfl1bk.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/womens-chicago-fire-fanatics-red/navy-iconic-raglan-full-zip-hoodie/t-36127808+p-806634902164643+z-9-1047020719?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$29.99' },
    { id: 6, title: 'Youth Chicago Fire Outerstuff Red Stalwart Defender T-Shirt', imageUrl: 'https://images.footballfanatics.com/chicago-fire/youth-outerstuff-red-chicago-fire-stalwart-defender-t-shirt_ss5_p-201875230+u-3vdziwrrmnw83nqk3fgx+v-pdiq8noz8lxczvifn3ir.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/youth-chicago-fire-outerstuff-red-stalwart-defender-t-shirt/t-69348997+p-24220131291519+z-8-1427284344?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$31.99' },
    { id: 7, title: 'Men\'s Chicago Fire Fanatics Navy Alpha Adjustable Hat', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-fanatics-navy-chicago-fire-alpha-adjustable-hat_ss5_p-202683046+u-3zcwrq9f3me9yne8xmoj+v-kg7vxe0epq8rwaai1zoe.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-fanatics-navy-alpha-adjustable-hat/t-14908920+p-139935061992134+z-9-3732243622?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$27.99' },
    { id: 8, title: 'Men\'s Chicago Fire Red \'97 Ringer T-Shirt', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-red-chicago-fire-97-ringer-t-shirt_ss5_p-201297390+u-qypuufzjpdfhrcxxmffq+v-uo0ig9r6xeyzoinilk1c.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-red-97-ringer-t-shirt/t-36890164+p-680012577674670+z-9-422001048?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$39.99' },
    { id: 9, title: 'Men\'s Chicago Fire Sport Design Sweden Tan City Soul Oversized T-Shirt', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-sport-design-sweden-tan-chicago-fire-city-soul-oversized-t-shirt_ss5_p-202666835+u-7usl6xldosvj2oel1lto+v-pgj2gmrqehmabnlopp4d.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-red-97-ringer-t-shirt/t-36890164+p-680012577674670+z-9-422001048?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$39.99' },
    { id: 10, title: 'Men\'s Chicago Fire New Era White 2025 Jersey Hook 9FORTY M-Crown Adjustable Hat', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-new-era-white-chicago-fire-2025-jersey-hook-9forty-m-crown-adjustable-hat_ss5_p-202216504+u-beofxykgkzbmotsjw5wb+v-ydvozqhebtjgoucwwwro.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-new-era-white-hat', price: '$34.99' },
    { id: 11, title: 'Men\'s Chicago Fire Fanatics Red Logo Quarter-Zip Top', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-fanatics-red-chicago-fire-logo-quarter-zip-top_ss5_p-5020692+u-tr47kkmh9auc94cn3awh+v-lckcefdqh52zbczxh1kq.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-sport-design-sweden-tan-city-soul-oversized-t-shirt/t-58672397+p-79994695281454+z-8-4087530419?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$39.99' },
    { id: 12, title: 'Men\'s Chicago Fire New Era Black 2025 Kickoff 9TWENTY Adjustable Hat', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-new-era-black-chicago-fire-2025-kickoff-9twenty-adjustable-hat_ss5_p-202427769+u-gglzsxmofzklgrzvhayo+v-njgaoaz6dzpcfuy87xrl.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-new-era-white-2025-jersey-hook-9forty-m-crown-adjustable-hat/t-25904542+p-130024570184798+z-9-2684062084?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$27.99' },
    { id: 13, title: 'Chicago Fire Two-Tone Scarf', imageUrl: 'https://images.footballfanatics.com/chicago-fire/chicago-fire-two-tone-scarf_ss5_p-201166568+u-mjqy9cnhgnbhcphywhrf+v-1e7oybutvbj2mljysjme.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-fanatics-red-logo-quarter-zip-top/t-69890119+p-612235221750+z-8-4164068100?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$39.99' },
    { id: 14, title: 'Men\'s Chicago Fire adidas Red 2024 Return To Red Replica Jersey', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-adidas-red-chicago-fire-2025-travel-pullover-hoodie_ss5_p-201657345+u-1eoibq1cruu7lrri5ont+v-5xupjtzaej2ax5p7q8mu.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-new-era-black-2025-kickoff-9twenty-adjustable-hat/t-25677853+p-809991480229926+z-9-1561811677?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$99.99' },
    { id: 15, title: 'Men\'s Chicago Fire New Era Light Blue Color Pack 9FORTY A-Frame Adjustable Trucker Hat', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-adidas-red-chicago-fire-2024-return-to-red-replica-jersey_ss5_p-201093753+u-d8his5twwpr7cuen5uu2+v-egbxdjjvzaljfwnzywqr.jpg?_hv=2&w=400', link: 'https://www.mlsstore.com/en/chicago-fire/chicago-fire-two-tone-scarf/t-14781242+p-915534569573639+z-9-3123318691?_ref=p-SRP:m-GRID:i-r0c0:po-0', price: '$32.99' },
    // { id: 16, title: 'Men\'s Chicago Fire  New Era Tan Active 9TWENTY Adjustable Hat', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-new-era-light-blue-chicago-fire-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948604+u-jb8pxrcpi0fi1dgjwwyc+v-bcqpi0d4auue9zyt3bjl.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-new-era-tan-hat', price: '$31.99' },
    // { id: 17, title: 'Men\'s Chicago Fire Sport Design Sweden White Game Day Relaxed T-Shirt', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens%C2%A0new-era-tan-chicago-fire-active-9twenty-adjustable-hat_ss5_p-202314655+u-umyptvnfjywcfukt83yx+v-jxz2shiufjqmg7utmj2m.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-sport-design-white-tshirt', price: '$39.99' },
    // { id: 18, title: 'Men\'s Chicago Fire New Era Cream 2025 Kickoff Snapback Golfer Hat', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens%C2%A0sport-design-sweden-white-chicago-fire-game-day-relaxed-t-shirt_ss5_p-202666758+u-xd2k2tcrfjxgbspgch3d+v-3npncrtfpmh4vxpjalfx.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-new-era-cream-hat', price: '$34.99' },
    // { id: 19, title: 'Men\'s Chicago Fire Cream \'90s Heavyweight Relaxed T-Shirt', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens%C2%A0new-era-cream-chicago-fire-2025-kickoff-snapback-golfer-hat_ss5_p-202514197+u-vxgjwmru7pghddeekzad+v-sirfaplofdokwqtz2bwi.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-cream-90s-tshirt', price: '$39.99' },
    // { id: 20, title: 'Chicago Fire Primary Scarf', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-cream-chicago-fire-90s-heavyweight-relaxed-t-shirt_ss5_p-200860251+u-eyw4ldwly4odkclofzep+v-jjrw912b1meb9ixzvoqc.jpg?_hv=2&w=400', link: 'https://www.amazon.com/chicago-fire-primary-scarf', price: '$34.99' },
  ];

 return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Chicago Fire</h1>
        <div className='mb-6'>
          <img src='/Chicago.png' alt='Chicago Fire FC' className='w-full h-[400px] object-cover rounded-lg shadow-md' />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
          <a href="https://ticketnetwork.lusg.net/yqj7Zy" target="_blank" rel="noopener noreferrer" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'>
            BUY TICKETS
          </a>
          <a href="https://example.com/find-hotel" className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'>
            HOTELS NEAR THE STADIUM
          </a>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Club Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Chicago Fire Football Club</li>
            <li><strong>Nickname(s):</strong> The Fire</li>
            <li><strong>Founded:</strong> 1997</li>
            <li><strong>Stadium:</strong> Soldier Field, Chicago, Illinois</li>
            <li><strong>Capacity:</strong> 61,500</li>
            <li><strong>Owner:</strong> Joe Mansueto</li>
            <li><strong>Head Coach:</strong> Gregg Berhalter</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Passion</h2>
          <p>Chicago Fire FC is a proud member of Major League Soccer, known for its passionate fan base and rich history...</p>
          <p>Over the years, the Fire have been home to many talented players...</p>
          <p>The Fire aims to captivate both local fans and the broader soccer community...</p>
        </div>

        {/* Trending Players */}
        <TrendingPlayers />

       <div className="bg-white py-16">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-5xl font-bold text-[#020617] mb-8 text-center">Blog</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`} // <--- vodi na blog
          className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full"
        >
          <div className="relative w-full h-48">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition duration-300">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.author} | {post.date}</p>
            <p className="text-gray-700 mt-2 flex-grow">{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>


        {/* Shop Section */}
        <h2 className='text-4xl sm:text-6xl font-bold text-[#020617] mt-16 mb-4'>Shop</h2>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map((item) => (
            <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a href={item.link} target='_blank' rel='noopener noreferrer' className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
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

export default ChicagoFire;
