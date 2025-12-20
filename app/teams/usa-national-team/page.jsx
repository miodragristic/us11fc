import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = ({ teamSlug = 'usa-national-team' }) => {
  const players = [
    { name: 'Christian Pulisic', image: 'https://media.bleacherreport.com/image/upload/v1642803493/c6tcjkzmqnb1iphp4dik.jpg', slug: './pulisic' },
    { name: 'Giovanni Reyna', image: 'https://static01.nyt.com/athletic/uploads/wp/2020/05/08030603/Reyna-USA-scaled.jpg', slug: './gio' },
    { name: 'Weston McKennie', image: 'https://cdn1.intermiami.news/uploads/52/2024/07/GettyImages-2160612538-1140x752.jpg', slug: './mckennie' },
    { name: 'Tyler Adams', image: 'https://cdn1.leedsunited.news/uploads/5/2022/11/GettyImages-1244973081-1024x682.jpg', slug: './adams' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/usa-national-team/${player.slug}`}
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

const USNationalTeam = () => {
  const items = [
    {
      "title": "Men's Team USA Antigua Heather Charcoal Fortune Quarter-Zip Pullover Jacket",
      "price": "$124.99",
      "originalPrice": "$124.99",
      "category": "Men's Jackets",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mens-antigua-heather-charcoal-usmnt-fortune-quarter-zip-pullover-jacket_pi5101000_ff_5101720-621e269a7d520a0d809e_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/raL5nj"
    },
    {
      "title": "Men's Team USA Antigua Heather Navy Fortune Quarter-Zip Pullover Jacket",
      "price": "$124.99",
      "originalPrice": "$124.99",
      "category": "Men's Jackets",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mens-antigua-heather-navy-usmnt-fortune-quarter-zip-pullover-jacket_pi5101000_ff_5101721-e9179ae492604215efc0_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9x00"
    },
    {
      "title": "Men's USMNT 5th & Ocean by New Era Gray Adventure Raglan Long Sleeve Hooded T-Shirt",
      "price": "$59.99",
      "originalPrice": "$59.99",
      "category": "Men's T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens%C2%A05th-and-ocean-by-new-era-gray-usmnt-adventure-raglan-long-sleeve-hooded-t-shirt_ss5_p-201883832+pv-1+u-hckqnub5i0netlgcbtbu+v-mf408e79kjpzznwfnupp.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6LgQK"
    },
    {
      "title": "Men's USMNT 5th & Ocean by New Era Navy Gameday Long Sleeve T-Shirt",
      "price": "$44.99",
      "originalPrice": "$44.99",
      "category": "Men's T-Shirts",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens%C2%A05th-and-ocean-by-new-era-navy-usmnt-gameday-long-sleeve-t-shirt_ss5_p-201883830+pv-1+u-dqa2tgptbjtfooodi3dm+v-mwec5klj3oxiqrkuxocr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPJN0"
    },
    {
      "title": "Youth USMNT Navy/Red Stalwart Defender T-Shirt",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Youth T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/youth-navy/red-usmnt-stalwart-defender-t-shirt_ss5_p-201875233+pv-1+u-kz6rhl6l21g3svw8ttxc+v-lgma8m0arlrcmuaodyad.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6yn4eQ"
    },
    {
      "title": "United States of America Unsigned Fanatics Authentic 30\" x 48\" Stretched Original Canvas Flag Art - Hand Painted by Artist Charlie Turano III - Limited Edition 1 of 1",
      "price": "$1,999.99",
      "originalPrice": "$1,999.99",
      "category": "Art",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/usmnt/united-states-of-america-unsigned-30-x-48-stretched-original-canvas-flag-art-hand-painted-by-artist-charlie-turano-iii-limited-edition-1-of-1_pi5264000_altimages_ff_5264235-85de9086f2542e545c6calt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/3Jy4er"
    },
    {
      "title": "Men's USMNT Antigua Navy Tribute Quarter-Zip Pullover Top",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Men's Sweatshirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mens-antigua-navy-usmnt-tribute-quarter-zip-pullover-top_pi5101000_ff_5101770-5875f245392e564d5d8a_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2rmM"
    },
    {
      "title": "Men's USMNT Concepts Sport Tan Team Stripe Shorts",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's Shorts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mens-concepts-sport-tan-usmnt-team-stripe-shorts_ss5_p-5172769+u-5ajpvffukf2sf2t3w2zd+v-xdrjslfzllj3fblpeqm2.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjAkya"
    },
    {
      "title": "Men's USMNT Antigua Navy/Charcoal Team Quarter-Zip Pullover Top",
      "price": "$104.99",
      "originalPrice": "$104.99",
      "category": "Men's Jackets",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/mens-antigua-navy/charcoal-usmnt-team-quarter-zip-pullover-top_pi5101000_ff_5101765-b4e3280f347785db46ee_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1em11"
    },
    {
      "title": "Men's USMNT Antigua Charcoal/Silver Team Quarter-Zip Pullover Top",
      "price": "$104.99",
      "originalPrice": "$104.99",
      "category": "Men's Jackets",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/mens-antigua-charcoal/silver-usmnt-team-quarter-zip-pullover-top_pi5101000_ff_5101764-4d343e0c321b618b8c46_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19y49D"
    },
    {
      "title": "Men's USMNT New Era Heather Gray 9SEVENTY COOLERA Stretch-Snap Adjustable Hat",
      "price": "$35.99",
      "originalPrice": "$35.99",
      "category": "Men's Hats",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens-new-era-heather-gray-usmnt-9seventy-coolera-stretch-snap-adjustable-hat_ss5_p-201130244+pv-1+u-8wzxcjedvjgujayeezeg+v-x4zswvnztuyb4n8wjoao.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyAVyJ"
    },
    {
      "title": "Men's USMNT 5th & Ocean by New Era White Gameday T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens%C2%A05th-and-ocean-by-new-era-white-usmnt-gameday-t-shirt_ss5_p-201883829+pv-1+u-x5sw4kpdfquxrjved8kx+v-ezox5eaxzasfzforhavy.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/RGZeGX"
    },
    {
      "title": "Men's USMNT Antigua White Spark Polo",
      "price": "$44.99",
      "originalPrice": "$44.99",
      "category": "Men's Polos",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mens-antigua-white-usmnt-spark-polo_pi5101000_ff_5101763-831c0d969cb9e3da737c_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2rAM"
    },
    {
      "title": "Youth USMNT Outerstuff Navy Nifty Netminder Long Sleeve T-Shirt",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Youth T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/youth-outerstuff-navy-usmnt-nifty-netminder-long-sleeve-t-shirt_ss5_p-201875249+pv-1+u-p46wjwrmmjekdutor0eh+v-lmwaynqnzzcd0bjfmwjw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyO4y5"
    },
    {
      "title": "Men's USMNT 5th & Ocean by New Era Navy Sleeveless Leisure T-Shirt",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens%C2%A05th-and-ocean-by-new-era-navy-usmnt-sleeveless-leisure-t-shirt_ss5_p-201883833+pv-1+u-yewubo8gc2v516ahkzs9+v-lxfusjufiyzk4yomwpmd.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQqeM"
    },
    {
      "title": "Men's USMNT Antigua Navy Field Ditsy Polo",
      "price": "$84.99",
      "originalPrice": "$84.99",
      "category": "Men's Polos",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens%C2%A0antigua-navy-usmnt-field-ditsy-polo_ss5_p-202602894+pv-1+u-ek78wwmxtwqgap8lhr3j+v-yui68mda4apfelegzr0t.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLr1Jy"
    },
    {
      "title": "Men's US Soccer Heather Gray Radiating Victory T-Shirt",
      "price": "$17.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens-heather-gray-us-soccer-radiating-victory-t-shirt_ss5_p-200582058+pv-1+u-q6bayxaqmn8amjpzgy1z+v-bo6fpabpyfvttdadxd0t.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55y4k1"
    },
    {
      "title": "Men's USMNT Levelwear Navy Rise Patch Flex Hat",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's Hats",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens-levelwear-navy-usmnt-rise-patch-flex-hat_ss5_p-201660192+pv-1+u-quttczlarsxihqqqnfzp+v-fletch4x02nik3prsnkh.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19y4Gz"
    },
    {
      "title": "Men's USMNT Levelwear Royal Richmond T-Shirt",
      "price": "$46.99",
      "originalPrice": "$46.99",
      "category": "Men's T-Shirts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mens-levelwear-royal-usmnt-richmond-t-shirt_ss5_p-201570588+u-iy4gpl3unk0hyjavrlto+v-s5klzbkw21mpyixsexge.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPJzG"
    },
    // {
    //   "title": "Newborn & Infant USMNT Red Field Player Bodysuit",
    //   "price": "$19.99",
    //   "originalPrice": "$19.99",
    //   "category": "Infant Rompers",
    //   "availability": "almost gone",
    //   "imageUrl": "",
    //   "link": ""
    // },
    {
      "title": "Men's USMNT New Era Navy Patch Golfer Adjustable Hat",
      "price": "$36.99",
      "originalPrice": "$36.99",
      "category": "Men's Hats",
      "availability": "almost gone",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens-new-era-navy-usmnt-patch-golfer-adjustable-hat_ss5_p-200030350+pv-1+u-zcjeakiyxdnnagh7g7ds+v-zkwqlymyggvy1fntpaav.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/RGZe0v"
    },
    {
      "title": "Men's USMNT Levelwear White Rise Patch Flex Hat",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's Hats",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens-levelwear-white-usmnt-rise-patch-flex-hat_ss5_p-201660190+pv-1+u-ktvwonwkzdzkhn65nij8+v-0ag9tphuycgxyobdhtwd.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/N9RjG1"
    },
    {
      "title": "Men's USMNT Concepts Sport Oatmeal Mainstream Terry Shorts",
      "price": "$44.99",
      "originalPrice": "$44.99",
      "category": "Men's Shorts",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/mens-concepts-sport-oatmeal-usmnt-mainstream-terry-shorts_ss5_p-200947254+u-ubscyawrnqqhqwiekuql+v-y6vqaprkevm4jt0h4c92.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/7anYb5"
    },
    {
      "title": "Women's USWNT Concepts Sport Red Quest Knit Capri Pants",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Women's Pants",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/womens-concepts-sport-red-uswnt-quest-knit-capri-pants_pi5300000_ff_5300096-b40396a718f816fed981_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1emRQ"
    },
    {
      "title": "Men's USMNT New Era Navy Throwback Ringer T-Shirt",
      "price": "$36.99",
      "originalPrice": "$36.99",
      "category": "men's Pants",
      "availability": "available",
      "imageUrl": "https://images.footballfanatics.com/usmnt/mens-new-era-navy-usmnt-throwback-ringer-t-shirt_ss5_p-5001935+pv-1+u-pupjtfjukkgo28jlel82+v-bowuvvjbrsqhurzeg4t9.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/POR56N"
    }
    
    
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>USA National Team</h1>
        <div className='mb-6'>
          <img
            src='/Usa.png'
            alt='Usa National Team' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
        {/* <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/vPQ7Z3"
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
        </div> */}

        {/* Club Information */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Team Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> United States Men's National Team</li>
            <li><strong>Nickname(s):</strong> The Yanks, The Stars and Stripes</li>
            <li><strong>Founded:</strong> 1913</li>
            <li><strong>Stadium:</strong> Various (Home games across the United States)</li>
            <li><strong>Manager:</strong> Mauricio Pochettino</li>
            <li><strong>FIFA Ranking:</strong> #15 (as of 2023)</li>
            <li><strong>Confederation:</strong> CONCACAF</li>
            <li><strong>World Cup Appearances:</strong> 11</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Stars and Stripes on the World Stage</h2>
          <p>
            The United States Men's National Team (USMNT) is one of the most well-known soccer teams in the world, with a rich history of participation in major tournaments like the FIFA World Cup and CONCACAF Gold Cup. Despite being traditionally seen as an underdog in the world of soccer, the USMNT continues to grow in stature and has produced some of the most exciting young talent in the game.
          </p>
          <p>
            With players like Christian Pulisic, Giovanni Reyna, and Weston McKennie, the team has some of the brightest stars in world soccer. The USMNT is committed to playing an exciting, fast-paced style of soccer, with an emphasis on developing young, homegrown talent.
          </p>
          <p>
            Whether it's in World Cup qualification or international friendlies, the USMNT continues to engage its passionate fan base across the country and strives to make its mark on the world stage.
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

export default USNationalTeam;
