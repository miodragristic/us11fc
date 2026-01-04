import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaShoppingCart } from 'react-icons/fa';

// Preworkout items with added price and description
const generatePreworkoutItems = () => {
  return [
    { 
      id: 1, 
      title: "Preworkout Pro 1", 
      price: "$29.99", // price added
      description: "Boost your energy and endurance with Preworkout Pro 1.",
      link: "./Preworkout1", 
      imageUrl: "/path/to/preworkout1.jpg" 
    },
    { 
      id: 2, 
      title: "Preworkout Pro 2", 
      price: "$34.99", // price added
      description: "Enhance focus and strength with Preworkout Pro 2.",
      link: "./Preworkout2", 
      imageUrl: "/path/to/preworkout2.jpg" 
    },
    { 
      id: 3, 
      title: "Preworkout Pro 3", 
      price: "$39.99", // price added
      description: "Maximize performance with Preworkout Pro 3.",
      link: "./Preworkout3", 
      imageUrl: "/path/to/preworkout3.jpg" 
    },
  ];
};

const Preworkout = () => {
  const items = generatePreworkoutItems();

  return (
    <div name='preworkout' className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Choose Your Suplement</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
              <div className='relative overflow-hidden bg-gray-200 h-48'>
                <img src={item.imageUrl} alt={item.title} className='object-contain w-full h-full group-hover:scale-105 transition duration-300' />
              </div>
              <div className='p-4'>
                {/* Title of the product */}
                <h3 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>{item.title}</h3>
                {/* Description of the product */}
                <p className='text-gray-600 text-sm mt-2'>{item.description}</p>
                {/* Price of the product */}
                <p className='text-xl font-semibold text-gray-900 mt-2'>{item.price}</p>
                <a href={item.link} rel='noopener noreferrer' className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-4'>
                  Buy Now <FaShoppingCart className='inline-block ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/' target='_blank'>
              YouTube <FaYoutube size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/' target='_blank'>
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/' target='_blank'>
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/' target='_blank'>
              TikTok <FaTiktok size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Preworkout;
