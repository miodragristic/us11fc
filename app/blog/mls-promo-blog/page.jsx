'use client';

import React from 'react';

const MLS25OffPromoBlog = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-3xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Get 25% Off MLS Gear with This Promo Code
        </h1>

        <div className="w-full h-[400px] rounded-lg shadow-md overflow-hidden relative">
          <img
            src="https://www.mlsstore.com/content/ws/all/1f418ebe-8a12-4321-b98f-b96446a0b0cd__1200X890.jpg?w=1200"
            alt="MLS Discount"
            className="w-full h-full object-cover object-center transform scale-130"
          />
        </div>

        <div className='mb-4 text-sm text-gray-600'>
          <p>By: Mio Ristić | July 25, 2025</p>
          <p className='mt-1 text-xs text-gray-400'>Image © MLS Official Site</p>
        </div>

        <div className='space-y-4 mb-10 text-[#020617] text-lg'>
          <p className='text-2xl font-semibold'>🎉 Want to save on your next MLS gear pickup?</p>
          <p>
            You can now get <strong>25% off selected MLS gear with a promo code</strong> for a limited time. It’s an easy way to save whether you’re upgrading your kit for match day, picking up a gift, or grabbing the jersey you’ve been eyeing.
          </p>

          <h2 className='text-xl font-semibold mt-6'>✅ How it works</h2>

          {/* 👇 Dugme za kopiranje koda */}
          <button 
            onClick={() => navigator.clipboard.writeText('25MLS')}
            className="mt-2 mb-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition cursor-pointer"
          >
            Copy Code: 25MLS
          </button>

          <ul className='list-disc list-inside ml-4'>
            <li>Promo code is required on some products during checkout.</li>
            <li>Discount may appear on the product page or in your cart once the code is applied.</li>
            <li>Applies only to the product price (excludes shipping, taxes, fees).</li>
            <li>Excludes gift cards and some limited-release, auction, and premium products.</li>
          </ul>

          <h2 className='text-xl font-semibold mt-6'>🛒 How to claim your 25% off</h2>
          <ul className='list-decimal list-inside ml-4'>
            <li>Add eligible products to your cart.</li>
            <li>Enter the promo code at checkout.</li>
            <li>Confirm that the discount is applied before completing payment.</li>
          </ul>

          <p>
            Free shipping promotions (if available) apply in select regions within the US but may exclude heavy or bulky items.
          </p>
          <p>
            <strong>Don’t wait too long — this offer is live for a limited time only!</strong>
          </p>
        </div>

        <div className='text-center mt-8'>
          <a
            href='https://mlsstore.i8h2.net/LKrzJY'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition'
          >
            Shop Now and Save 25%
          </a>
        </div>

        <div className='text-center mt-10'>
          <p className='text-sm text-gray-600'>Stay updated on future drops and MLS gear at US11</p>
          <p className='text-sm text-gray-600'>#MLS #Discount #PromoCode #US11</p>
        </div>
      </div>
    </div>
  );
};

export default MLS25OffPromoBlog;
