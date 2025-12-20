import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPlayers = () => {
  const players = [
    { name: 'Robin Jansson', image: 'https://cdn1.sheffieldwednesday.news/uploads/8/2024/07/GettyImages-2160330033-1024x683.jpg', slug: './jansson' },
    { name: 'Luis Muriel', image: 'https://icdn.sempremilan.com/wp-content/uploads/2021/12/ssc-napoli-v-atalanta-bc-serie-a-1.jpg', slug: './muriel' },
    // { name: 'Martín Ojeda', image: 'data:image/jpeg;base64,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', link: './ErcanKara' },
    // { name: 'Ramiro Enrique', image: 'data:image/jpeg;base64,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', link: './KyleSmith' },
  ];


  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/orlando-city/${player.slug}`}
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

const OrlandoCity = () => {
  const items = [
    {
      "title": "Men's Orlando City SC adidas Purple 2024 Legacy Kit Replica Jersey",
      "price": "$49.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-adidas-purple-orlando-city-sc-2024-legacy-kit-replica-jersey_ss5_p-201102333+pv-1+u-zns3ucbkikg9jsefvntv+v-vljcenczpi9onmo8a6g2.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APnajj"
    },
    {
      "title": "Men's Orlando City SC adidas Purple 2025 Perfect Storm Replica Custom Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-adidas-purple-orlando-city-sc-2025-perfect-storm-replica-custom-jersey_ss5_p-202708341+pv-1+u-qhrrta7t52fhupl5bvni+v-r5dd7xiuzz89d2modt1y.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqNGr"
    },
    {
      "title": "Men's Orlando City SC adidas Purple 2025 Perfect Storm Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-adidas-purple-orlando-city-sc-2025-perfect-storm-authentic-jersey_ss5_p-202644590+pv-1+u-ajiqlzqrc2cnvnd87vba+v-zquxp205qfvsbltc72gy.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyAKNP"
    },
    {
      "title": "Men's Orlando City SC New Era White 2025 Jersey Hook 9FORTY M-Crown Adjustable Hat",
      "price": "$34.99",
      "originalPrice": "$34.99",
      "category": "Men's Hats",
      "shipping": "",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-new-era-white-orlando-city-sc-2025-jersey-hook-9forty-m-crown-adjustable-hat_ss5_p-202216485+pv-1+u-l2p3pbd4or6ttgjkw9jf+v-6lrojc6o5hogwpkooxau.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/4GyKE9"
    },
    {
      "title": "Men's Orlando City SC New Era Purple Color Pack 9FORTY A-Frame Adjustable Trucker Hat",
      "price": "$32.99",
      "originalPrice": "$32.99",
      "category": "Men's Hats",
      "shipping": "",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-new-era-purple-orlando-city-sc-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948613+pv-1+u-prv4glmeiligeg7k4irw+v-8mdbgs7qqc7x56wvi1h9.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yqjLkV"
    },
    {
      "title": "Men's Orlando City SC adidas Silver 2025 Training Jersey",
      "price": "$54.99",
      "originalPrice": "$54.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens%C2%A0adidas-silver-orlando-city-sc-2025-training-jersey_ss5_p-201662796+pv-1+u-mlv5axhjyzssad8wps6k+v-igkekvpniviznpwshgkt.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzmNy5"
    },
    {
      "title": "Men's Orlando City SC adidas Purple 2025 Perfect Storm Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-adidas-purple-orlando-city-sc-2025-perfect-storm-authentic-custom-jersey_ss5_p-202698425+pv-1+u-7ef4xvrbvf71upctucw9+v-tvzizstalxau4hw8zj92.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQ2ye"
    },
    {
      "title": "Men's Orlando City SC Fanatics Heather Gray Low Block Trucker Adjustable Hat",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Men's Hats",
      "shipping": "",
      "availability": "Almost Gone! Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-fanatics-heather-gray-orlando-city-sc-low-block-trucker-adjustable-hat_ss5_p-201747543+pv-1+u-ypjowtszyhjlyphsr3to+v-ggqjtcbq1r8xafbyptoj.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1eBEr"
    },
    {
      "title": "Men's Orlando City SC White Americana Patriotic Club T-Shirt",
      "price": "$17.99",
      "originalPrice": "$34.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-white-orlando-city-sc-americana-patriotic-club-t-shirt_pi3574000_altimages_ff_3574503-549537ac05ece08ec7dealt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPqbO"
    },
    {
      "title": "Men's Orlando City SC adidas Purple 2025 Perfect Storm Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men's Jerseys",
      "shipping": "",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens-adidas-purple-orlando-city-sc-2025-perfect-storm-replica-jersey_ss5_p-202644709+pv-1+u-sig2uwghxdhdd8tqzmzj+v-kfvznfphhqodyknpvpub.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQbjd"
    },
    {
      "title": "Men's Orlando City SC adidas Purple Local Wrap T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "Men's T-Shirts",
      "shipping": "",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens%C2%A0adidas-purple-orlando-city-sc-local-wrap-t-shirt_ss5_p-201664411+pv-1+u-w33mlyfanrexhqgbfawv+v-a9arquhit5gmq0r3tawl.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRbonJ"
    },
    {
      "title": "Men's Orlando City SC New Era Tan Active 9TWENTY Adjustable Hat",
      "price": "$31.99",
      "originalPrice": "$31.99",
      "category": "Men's Hats",
      "shipping": "",
      "availability": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/orlando-city-sc/mens%C2%A0new-era-tan-orlando-city-sc-active-9twenty-adjustable-hat_ss5_p-202314666+pv-1+u-s0c0irvuns0asqmjzjov+v-5yvuo7htcrn2njtvt4j2.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/7anxOA"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
       <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Orlando City SC</h1>
        <div className='mb-6'>
          <img
            src='/Orlando.png'
            alt='Orlando City SC' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/6ynJPE"
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
            <li><strong>Full Name:</strong> Orlando City Soccer Club</li>
            <li><strong>Nickname(s):</strong> The Lions</li>
            <li><strong>Founded:</strong> 2010</li>
            <li><strong>Stadium:</strong> Exploria Stadium, Orlando, Florida</li>
            <li><strong>Capacity:</strong> 25,500</li>
            <li><strong>Owner:</strong> Flávio Augusto da Silva</li>
            <li><strong>Head Coach:</strong> Oscar Pareja</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Rising Force in Florida</h2>
          <p>
            Orlando City SC is one of the most exciting teams in Major League Soccer, known for its passionate fan base, electric atmosphere at Exploria Stadium, and rising success in MLS. Founded in 2010, Orlando City quickly became a beloved team in Florida, with supporters who create an unforgettable matchday experience.
          </p>
          <p>
            As Orlando City strives for MLS Cup glory, their fans remain steadfast and dedicated, making them one of the most exciting teams to support in MLS.
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

export default OrlandoCity;
