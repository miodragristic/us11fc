import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
 

const TrendingPlayers = ({ teamSlug = 'vancouver-whitecaps' }) => {
  const players = [
    // { name: 'Stuart Armstrong', image: 'https://cdn.apollo.audio/one/media/66cd/e06b/1378/6a05/a100/31d9/2X9CRE7.jpg', link: './armstrong' },
    { name: 'Thomas Muller', image: 'https://assets.goal.com/images/v3/getty-2230148654/crop/MM5DIMRWGY5DENBQGA5G433XMU5DAORSGIZA====/GettyImages-2230148654.jpg?auto=webp&format=pjpg&width=1920&quality=60', slug: './muller' },
    { name: 'Andrés Cubas', image: 'https://images.squarespace-cdn.com/content/v1/5262da93e4b068320e3e3494/1656311673001-MA3KT4Y0MCW73OO1XEM1/2022-06-26+Andres+Cubas.jpg', slug: './cubas' },
    { name: 'Ryan Gauld', image: 'https://cdn1.rangersnews.uk/uploads/24/2024/03/GettyImages-1717990663-1140x760.jpg', slug: './gauld' },
    { name: 'Ranko Veselinović', image: 'https://images.squarespace-cdn.com/content/v1/5262da93e4b068320e3e3494/1632715707355-3BU3N34LO87LMCPZSM95/2021-09-10+Ranko+Veselinovi%C4%87.jpg?format=750w', slug: './veselinovic' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/vancouver-whitecaps/${player.slug}`}
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

const VancouverWhitecaps = () => {
  const items = [
    {
      "title": "Men's Vancouver Whitecaps FC adidas Light Blue/Deep Sea Blue 2025 Anthem Reversible Full-Zip Jacket",
      "price": "$109.99",
      "originalPrice": "$109.99",
      "category": "Men's Jackets",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-adidas-light-blue/deep-sea-blue-vancouver-whitecaps-fc-2025-anthem-reversible-full-zip-jacket_ss5_p-201657255+pv-1+u-ugmzkhtbjvkrjv0el5xx+v-2nvowjvugvb0jrtejusi.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOkB3q"
    },
    {
      "title": "Men's Vancouver Whitecaps FC New Era Black 2025 Kickoff 9TWENTY Adjustable Hat",
      "price": "$27.99",
      "originalPrice": "$27.99",
      "category": "Men's Hats",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-new-era-black-vancouver-whitecaps-fc-2025-kickoff-9twenty-adjustable-hat_ss5_p-202427747+pv-1+u-em9gr4irj2ltnw8a44x4+v-rocrsykuys2wxvmf4ydb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yqjMEv"
    },
    {
      "title": "Men's Vancouver Whitecaps FC Navy Stand For Vancouver T-Shirt",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-navy-vancouver-whitecaps-fc-stand-for-vancouver-t-shirt_pi2956000_altimages_ff_2956808alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRbe4m"
    },
    {
      "title": "Men's Vancouver Whitecaps FC Navy Stand For Vancouver Long Sleeve T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's Long Sleeve T-Shirts",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-navy-vancouver-whitecaps-fc-stand-for-vancouver-long-sleeve-t-shirt_pi2956000_altimages_ff_2956809alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2Oo3"
    },
    {
      "title": "Men's Vancouver Whitecaps FC Navy Stand For Vancouver Pullover Hoodie",
      "price": "$64.99",
      "originalPrice": "$64.99",
      "category": "Men's Hoodies",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/vancouver-whitecaps-fc-mens-stand-for-vancouver-pullover-hoodie-navy_pi2956000_altimages_ff_2956741alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOjMrq"
    },
    {
      "title": "Men's Vancouver Whitecaps FC New Era Navy Color Pack A-Frame 59FIFTY Fitted Hat",
      "price": "$44.99",
      "originalPrice": "$44.99",
      "category": "Men's Hats",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-new-era-navy-vancouver-whitecaps-fc-color-pack-a-frame-59fifty-fitted-hat_ss5_p-201948552+pv-1+u-b1s4aqj0hamvifih606d+v-nutr7ltgpnsiku8zaakx.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzmMkj"
    },
    {
      "title": "Men's Vancouver Whitecaps FC Fanatics Deep Sea Blue Iconic Scarf Sleeve Full-Zip Hoodie",
      "price": "$41.99",
      "originalPrice": "$74.99",
      "category": "Men's Hoodies",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-fanatics-deep-sea-blue-vancouver-whitecaps-fc-iconic-scarf-sleeve-full-zip-hoodie_ss5_p-201198328+pv-1+u-2jcdgukem0njmm7mv4d8+v-42w0dgwkc3prh0qyggm9.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raLMe5"
    },
    {
      "title": "Men's Vancouver Whitecaps FC Mitchell & Ness Deep Sea Blue Team Script 2.0 Stretch Snapback Hat",
      "price": "$33.99",
      "originalPrice": "$33.99",
      "category": "Men's Hats",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-mitchell-and-ness-deep-sea-blue-vancouver-whitecaps-fc-team-script-20-stretch-snapback-hat_ss5_p-5338470+pv-1+u-mdedpyg937wxivhsfbpm+v-ywaijnttl7usd3c9k8om.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55yrm9"
    },
    {
      "title": "Men's Vancouver Whitecaps FC Fanatics Light Blue Iconic Strong Stencil T-Shirt",
      "price": "$15.99",
      "originalPrice": "$27.99",
      "category": "Men's T-Shirts",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-fanatics-light-blue-vancouver-whitecaps-fc-iconic-strong-stencil-t-shirt_ss5_p-201198315+pv-1+u-cfd5vsbyekzmfdv6kj3l+v-mo3b9ieodznmrx9ua9xm.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/aOjgYb"
    },
    {
      "title": "Women's Vancouver Whitecaps FC Navy Hometown Collection Stand For Vancouver V-Neck T-Shirt",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Women's T-Shirts",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/womens-navy-vancouver-whitecaps-fc-hometown-collection-stand-for-vancouver-v-neck-t-shirt_pi2956000_altimages_ff_2956737alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/GKOWor"
    },
    {
      "title": "Men's Vancouver Whitecaps FC Fanatics Navy Logo T-Shirt",
      "price": "$19.99",
      "originalPrice": "$29.99",
      "category": "Men's T-Shirts",
      "availability": "discounted",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-fanatics-navy-vancouver-whitecaps-fc-logo-t-shirt_ss5_p-201167536+pv-1+u-fqg7a3zv8xgktxw36oq8+v-rom75zokaex2phftybcj.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxAPVa"
    },
    {
      "title": "Youth Vancouver Whitecaps FC adidas White 2025 The Peak Replica Custom Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/youth-adidas-white-vancouver-whitecaps-fc-2025-the-peak-replica-custom-jersey_ss5_p-202708455+pv-1+u-sxmtzdjqbngicr2nis5u+v-vsuzmeoswlvld4ll8btn.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/JKOnQr"
    },
    {
      "title": "Men's Vancouver Whitecaps FC Navy Custom Team Authentic T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-navy-vancouver-whitecaps-fc-custom-team-authentic-t-shirt_ss5_p-202808235+pv-1+u-6iwuzztk4wapfi4vliiy+v-ox8lsv83eib75oxh4yvf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6La4Q"
    },
    {
      "title": "Men's Vancouver Whitecaps FC adidas White 2025 The Peak Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-adidas-white-vancouver-whitecaps-fc-2025-the-peak-replica-jersey_ss5_p-202644715+pv-1+u-opt4w4epwnrxlqofhofo+v-sltc5jqkrewgahbtqzf4.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOq0NO"
    },
    {
      "title": "Men's Vancouver Whitecaps FC New Era Light Blue Color Pack 9FORTY A-Frame Adjustable Trucker Hat",
      "price": "$32.99",
      "originalPrice": "$32.99",
      "category": "Men's Hats",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-new-era-light-blue-vancouver-whitecaps-fc-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948597+pv-1+u-mr4gyr2enrogtjdidryh+v-97kiwkv949yjgll7b3mf.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPMqe"
    },
    {
      "title": "Men's Vancouver Whitecaps FC adidas Light Blue 2025 Travel Pullover Hoodie",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Men's Hoodies",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-adidas-light-blue-vancouver-whitecaps-fc-2025-travel-pullover-hoodie_ss5_p-201657331+pv-1+u-2sgepu4kpvblttlbe0ni+v-whyxuxk6cvtk2fy6bzhz.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyA5KG"
    },
    {
      "title": "Men's Vancouver Whitecaps FC Royal Shielded Long Sleeve T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's Long Sleeve T-Shirts",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-royal-vancouver-whitecaps-fc-shielded-long-sleeve-t-shirt_pi2876000_altimages_ff_2876364alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yqOP"
    },
    {
      "title": "Men's Vancouver Whitecaps FC White Patriotic Wordmark T-Shirt",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "availability": "regular price",
      "imageUrl": "https://images.footballfanatics.com/vancouver-whitecaps-fc/mens-white-vancouver-whitecaps-fc-patriotic-wordmark-t-shirt_pi3116000_altimages_ff_3116573alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEOBVe"
    }
  ]
    
;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Vancouver Whitecaps</h1>
        <div className='mb-6'>
          <img
            src='/Vancouver.png'
            alt='Vancouver' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/JKOx22"
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
            <li><strong>Full Name:</strong> Vancouver Whitecaps FC</li>
            <li><strong>Nickname(s):</strong> The Caps</li>
            <li><strong>Founded:</strong> 2009</li>
            <li><strong>Stadium:</strong> BC Place, Vancouver, British Columbia</li>
            <li><strong>Capacity:</strong> 22,120</li>
            <li><strong>Owner:</strong> Vancouver Whitecaps FC</li>
            <li><strong>Head Coach:</strong> Jesper Sørensen</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Growing Force in MLS</h2>
          <p>
            Vancouver Whitecaps FC is a Major League Soccer club based in Vancouver, British Columbia, founded in 2009. The team plays their home games at BC Place, a venue that offers one of the best atmospheres in the league.
          </p>
          <p>
            The Whitecaps are known for their fast-paced style of play and their commitment to developing homegrown talent. With key players like Ryan Gauld, Lucas Cavallini, and Cristian Dájome, the team is steadily making a name for itself as a rising force in MLS.
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

export default VancouverWhitecaps;
