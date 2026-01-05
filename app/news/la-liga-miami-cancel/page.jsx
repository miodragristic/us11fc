'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LaLigaMiamiCancelBlog() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('✅ Link copied to clipboard!');
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('La Liga Cancels Miami Match: Was It a Mistake in the Idea or Execution?')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Canceled: La Liga’s Barcelona vs Villarreal Match, Was It a Mistake in the Idea or Execution?
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-10-22">October 22, 2025</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition" aria-label="Share on Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition" aria-label="Share on Twitter">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition" aria-label="Share on WhatsApp">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition" aria-label="Copy Link">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://getfootballnewsspain.com/wp-content/uploads/2024/11/fc-barcelona-v-rcd-espanyol-de-barcelona-la-liga-ea-sports-8.jpg"
            alt="La Liga Miami Match Cancel"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
           Creator: Alex Caparros 
| 
Credit: Getty Images
Copyright: 2024 Getty Images
          </figcaption>
        </figure>

        {/* CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>
            La Liga has officially canceled the planned Barcelona vs Villarreal match in Miami, scheduled for December 2025. The decision comes after weeks of uncertainty, opposition from clubs, players, and sports institutions, leaving fans and analysts wondering—was the problem the idea itself or the way it was executed?
          </p>
          <p>
            The Miami match was part of La Liga’s long-term strategy to expand Spanish football in the U.S. and attract a global audience. On paper, the idea made sense: international exposure offers millions of potential new fans and significant commercial opportunities. However, the project faced serious challenges from the start.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Club and Player Opposition
          </h2>
          <p>
            Real Madrid led the protests, sending formal letters to Spain’s Higher Sports Council, arguing that holding a league match abroad would “adulterate the competition” and provide unfair advantages to certain teams. Villarreal, set as the home team, would likely have lost the home advantage due to Barcelona’s massive global fanbase. Players also expressed their disagreement, while fans held banners reading, “Our League, Our Home.”
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Logistical Challenges
          </h2>
          <p>
            U.S.-based promoter Relevent stated that there was insufficient time to organize such a large-scale event properly. Selling tickets without a confirmed match date would have been irresponsible, making the execution nearly impossible under current circumstances.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Conclusion
          </h2>
          <p>
            While the idea of expanding La Liga internationally was innovative and strategically sound, the main mistake was in execution, not concept. Poor timing, inadequate planning, and insufficient coordination with clubs and players made this ambitious project unfeasible in the short term.
          </p>
          <p>
            La Liga remains committed to growing Spanish football globally, learning from this setback, and continuing efforts to bring La Liga to new international markets while maintaining competitive integrity.
          </p>

          {/* AFFILIATE PRODUCTS */}
          <section className="my-12">
            <h2 className="text-3xl font-bold text-[#020617] mb-6 tracking-tight">
              Shop Barcelona Gear
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Product 1 */}
              <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <Image
                  src="https://fanatics.frgimages.com/barcelona/mens-nike-lamine-yamal-blue-barcelona-2025/26-replica-player-jersey_ss5_p-203284529+pv-1+u-egcn4pkk9yugwdxafypr+v-9yopybyijyh7ysmfxoob.jpg?_hv=2&w=1018"
                  alt="Barcelona Home Jersey 2025/26"
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Barcelona Home Jersey 2025/26</h3>
                  <p className="text-gray-600 mb-4">$129.99</p>
                  <a
                    href="https://fanatics.93n6tx.net/EEBJyQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-[blue] text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#020617] hover:border hover:border-[#020617] transition"
                  >
                    Buy Now
                  </a>
                </div>
              </div>

              {/* Product 2 */}
              <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <Image
                  src="https://fanatics.frgimages.com/barcelona/mens-nike-orange-barcelona-2025/26-third-replica-jersey_ss5_p-203294032+pv-1+u-1q7vtfkigkjnus9isua1+v-ngkwm1wjgiphgaladozs.jpg?_hv=2&w=1018"
                  alt="Barcelona Away Jersey 2025"
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Barcelona Nike 2025/26 Third Replica Jersey - Orange</h3>
                  <p className="text-gray-600 mb-4">$129.99</p>
                  <a
                    href="https://fanatics.93n6tx.net/MAOyB2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-[blue] text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#020617] hover:border hover:border-[#020617] transition"
                  >
                    Buy Now
                  </a>
                </div>
              </div>

              {/* Product 3 */}
              <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <Image
                  src="https://fanatics.frgimages.com/barcelona/mens-nike-yellow-barcelona-2022/23-fourth-vapor-match-authentic-jersey_pi5291000_altimages_ff_5291957-bd7d6888d74962cbc546alt1_full.jpg?_hv=2&w=1018"
                  alt="Barcelona Third Jersey 2025"
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Barcelona Nike 2022/23 Fourth Vapor Match Authentic Jersey - Yellow</h3>
                  <p className="text-gray-600 mb-4">$113.99</p>
                  <a
                    href="https://fanatics.93n6tx.net/Z6aBKg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-[blue] text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#020617] hover:border hover:border-[#020617] transition"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: October 22, 2025</p>
            <p>Author: Mio Ristić</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
