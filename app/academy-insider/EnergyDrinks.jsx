import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaShoppingCart } from 'react-icons/fa';

// Energy Drink items with added price and description
const generateEnergyDrinkItems = () => {
  return [
    { 
      id: 1, 
      title: "Amazon Brand - Solimo Red Energy Drink", 
      price: "$34.99", // Price for the product
      description: "Sugar-Free, Vegan, Low-Calorie, 16 fl oz per can. Available in two flavors.",
      link: "./EnergyDrink1", 
      imageUrl: "/path/to/solimo-red-energy-drink.jpg" // Placeholder for image URL
    },
    { 
      id: 2, 
      title: "Cellucor C4 Ultimate | Pre Workout Energy Drink", 
      price: "$34.99", 
      description: "Sugar-Free with 300mg Caffeine, ideal pre-workout energy drink. 16 fl oz per can.",
      link: "./EnergyDrink2", 
      imageUrl: "/path/to/cellucor-c4-ultimate.jpg" // Placeholder for image URL
    },
    { 
      id: 3, 
      title: "CELSIUS Sparkling Strawberry Lemonade", 
      price: "$24.99", 
      description: "Functional Energy Drink with Essential Energy formula. 12 fl oz per can, great taste.",
      link: "./EnergyDrink3", 
      imageUrl: "/path/to/celsius-sparkling-strawberry.jpg" // Placeholder for image URL
    },
    { 
      id: 4, 
      title: "Bang Energy - Candy Apple Crisp", 
      price: "$26.37", 
      description: "Sugar-Free energy drink, perfect for a quick energy boost with great flavors. 16 fl oz.",
      link: "./EnergyDrink4", 
      imageUrl: "/path/to/bang-candy-apple-crisp.jpg" // Placeholder for image URL
    },
    { 
      id: 5, 
      title: "5-hour ENERGY Shot, Regular Strength Grape", 
      price: "$53.99", 
      description: "Quick energy shot for when you need a boost. 1.93 fl oz per shot, pack of 24.",
      link: "./EnergyDrink5", 
      imageUrl: "/path/to/5-hour-energy-grape.jpg" // Placeholder for image URL
    },
    { 
      id: 6, 
      title: "Reign Total Body Fuel, White Gummy Bear", 
      price: "$23.76", 
      description: "Fitness & Performance drink with natural caffeine. 16 fl oz per can, pack of 12.",
      link: "./EnergyDrink6", 
      imageUrl: "/path/to/reign-white-gummy-bear.jpg" // Placeholder for image URL
    }
  ];
};

const EnergyDrinks = () => {
  const items = generateEnergyDrinkItems();

  return (
    <div name='energy-drinks' className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Energy Drinks for Peak Performance</h1>

           {/* Text Section for Energy Drinks */}
           <section className='mt-8'>
          <h2 className='text-2xl sm:text-4xl font-bold text-[#020617] mb-4'>
            Discover the Best Energy Drinks for Your Performance
          </h2>
          <p className='text-lg text-[#020617] mb-4'>
            Our energy drinks are formulated to help you stay focused, energized, and ready to tackle any challenge. Whether you're gearing up for a workout, a long day at the office, or an intense gaming session, we've got the right drink for you. Check out our collection and boost your energy to the next level!
          </p>
        </section>



        {/* Energy Drink Product Grid */}
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
              <div className='relative overflow-hidden bg-gray-200 h-48'>
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className='object-contain w-full h-full group-hover:scale-105 transition duration-300' 
                />
              </div>
              <div className='p-4'>
                {/* Title of the product */}
                <h3 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>{item.title}</h3>
                {/* Description of the product */}
                <p className='text-gray-600 text-sm mt-2'>{item.description}</p>
                {/* Price of the product */}
                <p className='text-xl font-semibold text-gray-900 mt-2'>{item.price}</p>
                <a 
                  href={item.link} 
                  rel='noopener noreferrer' 
                  className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-4'>
                  Buy Now <FaShoppingCart className='inline-block ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>

     

      </div>

      {/* Social Media Icons */}
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

export default EnergyDrinks;
