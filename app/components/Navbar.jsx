'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaXmark } from 'react-icons/fa6';
 

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[150px] flex justify-between items-center px-20 bg-black z-50 font-bold">
      {/* Logo */}
      <div>
        <Link href="/" passHref>
          <Image src="/logo11.png" alt="Logo Image" width={189} height={80} style={{ cursor: 'pointer' }} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex">
          {['/blog', '/teams', '/supplements', '/gaming', '/contact'].map((path, index) => (
            <li key={index} className="relative text-white font-sans text-lg px-4 group">
              <Link href={path} className="relative">
                {path.replace('/', '').toUpperCase()}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className="md:hidden text-white z-50 cursor-pointer">
        {!nav ? <FaBars size={30} /> : <FaXmark size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul className={`${nav ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-[#020617] flex-col justify-center items-center text-white z-40`}>
        {[
          { path: '/', label: 'HOME' },
          { path: '/blog', label: 'BLOG' },
          { path: '/teams', label: 'TEAMS' },
          { path: '/supplements', label: 'SUPPLEMENTS' },
          { path: '/gaming', label: 'GAMING' },
          { path: '/contact', label: 'CONTACT' },
        ].map(({ path, label }, index) => (
          <li key={index} className="py-6 text-4xl">
            <Link href={path} onClick={handleClick}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;