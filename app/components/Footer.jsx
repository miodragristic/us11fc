import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-4'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-sm'>&copy; {new Date().getFullYear()} US11. All rights reserved.</p>
          <div className='flex'>
            <a href='https://www.youtube.com/@us11fc' className='text-sm hover:underline mx-2' aria-label='YouTube'>
              <FaYoutube size={20} />
            </a>
            <a href='https://www.instagram.com/us11fc/' className='text-sm hover:underline mx-2' aria-label='Instagram'>
              <FaInstagram size={20} />
            </a>
            <a href='https://www.facebook.com/profile.php?id=61565465891580' className='text-sm hover:underline mx-2' aria-label='Facebook'>
              <FaFacebook size={20} />
            </a>
            <a href='https://www.tiktok.com/@us11fc' className='text-sm hover:underline mx-2' aria-label='TikTok'>
              <FaTiktok size={20} />
            </a>
            <a href='https://x.com/US11FC' className='text-sm hover:underline mx-2' aria-label='Twitter'>
              <FaTwitter size={20} />
            </a>
            <a href='https://www.linkedin.com/company/us11' className='text-sm hover:underline mx-2' aria-label='LinkedIn'>
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        <div className='text-center text-xs text-gray-400'>
          <p>
          This site is for promoting products available on
            <a href='https://www.mlsstore.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'> MLS Store</a> & 
            <a href='https://www.amazon.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'> Amazon</a>. 
            We are not officially affiliated with MLS, its clubs, Amazon, or their subsidiaries. All logos, images, and trademarks are the property of their respective owners and are used solely for promotional purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

