import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SanDiegoLogo from '../../../public/posters/SD.png';

const MLSBlog = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#020617] mb-8 mt-16 lg:mt-10">
          MLS: Past, Present, and Future
        </h1>

        {/* Glavna velika slika */}
        <div className="mb-4">
          <Image
            src="https://images.unsplash.com/photo-1653014741491-ff4c23be99be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="San Diego"
            width={1974}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />

          <div className="mt-2 text-sm text-gray-600">
            <span>By Mio Ristic | Dec 24, 2024</span>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/download-page"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg inline-block"
            >
              Download eBook
            </Link>
          </div>
        </div>

        

        <h2 className="text-3xl font-semibold text-[#020617] mb-8">The Beginnings</h2>
        <p className="mb-4">
          Major League Soccer (MLS) began in 1996 as part of FIFA's condition for the U.S. hosting the 1994 World Cup...
        </p>
        <p className="mb-4">
          Despite these challenges, key players like Landon Donovan, Cobi Jones, and international stars...
        </p>

        <h2 className="text-3xl font-semibold text-[#020617] mb-8">The Present: A Global Attraction</h2>
        <p className="mb-4">
          Fast forward to 2024, and MLS has become one of the fastest-growing soccer leagues in the world...
        </p>
        <p className="mb-4">
          Teams now boast a mix of experienced international stars and homegrown talents...
        </p>

        <h2 className="text-3xl font-semibold text-[#020617] mb-12">The Future: Ambition and Growth</h2>
        <p className="mb-4">
          The future of MLS looks brighter than ever...
        </p>
        <p className="mb-4">
          Technological innovations, such as improved VAR systems and enhanced fan engagement tools...
        </p>
        <p className="mb-4">
          However, challenges remain...
        </p>

        <h2 className="text-2xl font-semibold text-[#020617] mb-7">Conclusion</h2>
        <p className="mb-4">
          MLS has transformed from a fledgling league into a global soccer force...
        </p>
      </div>
    </div>
  );
};

export default MLSBlog;
