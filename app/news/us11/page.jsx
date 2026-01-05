import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import Us11 from '../../../public/11.png';

const Imga = () => {
    return (
        <div className='w-full min-h-screen bg-white'>
            <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-8 mt-16 lg:mt-10'>
                    Welcome to US11: Your Hub for Everything Soccer
                </h1>
                <div className='mb-4'>
                    <Image 
                        src={Us11}
                        alt='Us11' 
                        className='w-full h-[400px] object-cover rounded-lg shadow-md'
                        style={{ maxHeight: '400px', objectFit: 'cover' }} 
                    />
                    <div className="mt-2 text-sm text-gray-600">
                        <span>By Mio Ristic | Dec 24, 2024</span>
                    </div>
                </div>

                <h2 className='text-3xl font-semibold text-[#020617] mb-12'>
                    Stay Informed with Our Blogs
                </h2>
                <p className='mb-4'>
                    At US11, we live and breathe soccer. Our mission is simple: to connect, inform, and inspire soccer enthusiasts across the United States, Canada, and beyond...
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Stay Informed with Our Blogs
                </h3>
                <p className='mb-4'>
                    Our blog is your go-to source for all things soccer. Whether you’re looking for the latest news, in-depth analysis, or a trip down memory lane with retro content, we’ve got you covered.
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Youth Development and Support
                </h3>
                <p className='mb-4'>
                    We believe in nurturing the next generation of soccer stars...
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Gaming Meets Soccer
                </h3>
                <p className='mb-4'>
                    For gamers who love soccer, US11 is your ultimate companion...
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-7'>
                    Shop the Best Soccer Merchandise
                </h3>
                <p className='mb-4'>
                    We’ve curated an exclusive collection of soccer gear for fans and players alike...
                </p>
            </div>

            
        </div>
    );
};

export default Imga;
