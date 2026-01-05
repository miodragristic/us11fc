'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSTransfers2025() {
const [currentUrl, setCurrentUrl] = useState('');

useEffect(() => {
if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
}, []);

const handleCopyLink = () => {
if (navigator?.clipboard) {
navigator.clipboard.writeText(currentUrl);
alert('✅ Link copied to clipboard!');
}
};

const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS Transfers 2025/26: Biggest Moves and Roster Updates')}`;
const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

return ( <article className="w-full min-h-screen bg-white text-[#020617]"> <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">


    {/* HEADER */}
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
        MLS Transfers 2025/26: Biggest Moves and Roster Updates
      </h1>
      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
        <span>Mio Ristić</span>
        <span>•</span>
        <time dateTime="2025-12-05">December 5, 2025</time>
      </div>

      {/* SHARE BUTTONS */}
      <div className="flex items-center gap-4 mt-4">
        <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
        <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
        <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
        <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
      </div>
    </header>

    {/* FEATURE IMAGE */}
    <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
      <Image
        src="https://assets.goal.com/images/v3/getty-2223853224/crop/MM5DCOBQHA5DCMBRG45G433XMU5DCMZXHA5DCMBX/GettyImages-2223853224.jpg?auto=webp&format=pjpg&width=3840&quality=60"
        alt="MLS Transfers 2025/26 overview image"
        width={1018}
        height={420}
        className="w-full h-[420px] object-cover object-center"
        priority
      />
      <figcaption className="text-xs text-gray-400 px-3 py-2">
        Creator: Minas Panagiotakis 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
      </figcaption>
    </figure>

    {/* ARTICLE CONTENT */}
    <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
      <p>As MLS clubs prepare for the 2026 season, the transfer market has already brought several significant moves and roster updates. Here’s a breakdown of the most important transfers, followed by a concise overview of other key changes.</p>

      <h2 className="text-3xl font-bold mt-10 mb-4">🔝 Top 5 Most Significant MLS Transfers / Extensions</h2>
      <ul>
        <li><strong>Lionel Messi</strong> extends Inter Miami contract through 2028. A huge boost for Inter Miami and MLS visibility.</li>
        <li><strong>Philadelphia Union</strong> acquire Ezekiel Alladoh for a record fee. Expected to make immediate impact in attack.</li>
        <li><strong>LAFC</strong> signs Hugo Lloris to a contract extension. Secures top goalkeeper and leadership for the club.</li>
        <li><strong>FC Cincinnati</strong> permanently acquire Brenner from Udinese. Adds instant firepower to the attack.</li>
        <li><strong>Chicago Fire</strong> permanently acquire André Franco from Porto. Strengthens attacking options for 2026.</li>
      </ul>

      <h2 className="text-3xl font-bold mt-10 mb-4">📋 Other Notable Roster Updates</h2>
      <h3 className="text-2xl font-semibold mt-6 mb-2">Contract Extensions / Returns</h3>
      <ul>
        <li>LAFC: Ryan Hollingshead, Timothy Tillman, Nathan Ordaz, Sergi Palencia</li>
        <li>Inter Miami: Yannick Bright, David Ruíz, Noah Allen</li>
        <li>New York City FC: Matt Freese</li>
        <li>Chicago Fire: Chris Mueller, Jeffrey Gal, Jonathan Dean</li>
        <li>San Jose Earthquakes: Daniel Munie, Preston Judd</li>
        <li>Real Salt Lake: DeAndre Yedlin</li>
        <li>Austin FC: Brad Stuver</li>
        <li>St. Louis CITY: Roman Bürki</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">New Signings / Acquisitions</h3>
      <ul>
        <li>Nashville SC: Maxwell Woledzi (defender, Ghana)</li>
        <li>Chicago Fire: Mbekezeli Mbokazi (defender, South Africa), Anton Salétros (midfielder, Sweden)</li>
        <li>Austin FC: Ervin Torres (homegrown midfielder)</li>
        <li>Sporting Kansas City: Cielo Tschantret (homegrown midfielder)</li>
        <li>CF Montréal: Félix Samson (homegrown defender)</li>
        <li>DC United: Oscar Avilez (homegrown forward)</li>
        <li>San Diego FC: Oscar Verhoeven, Luca Bombino (permanent transfers)</li>
        <li>Orlando City: Wilder Cartagena</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Departures / Options Declined / Retirements</h3>
      <ul>
        <li>Philadelphia Union: Mikael Uhre</li>
        <li>LA Galaxy: Fagúndez in talks, Nascimento returns</li>
        <li>NYC FC: Justin Haak, Maxi Moralez</li>
        <li>Colorado Rapids: Andreas Maxsø option declined</li>
        <li>DC United: Christian Benteke option declined</li>
        <li>Austin FC: Julio Cascante, Diego Rubio</li>
        <li>Toronto FC: Sean Johnson option declined</li>
        <li>San Jose Earthquakes: Cristian Espinoza</li>
        <li>Seattle Sounders: Stefan Frei, Paul Rothrock</li>
        <li>Atlanta United: Brooks Lennon</li>
        <li>Orlando City: Pedro Gallese, César Araújo</li>
        <li>Inter Miami: Sergio Busquets and Jordi Alba retire</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Internal Updates / Negotiations</h3>
      <ul>
        <li>Minnesota United: St. Clair, Lod in talks; Joaquín Pereyra contract extension</li>
        <li>Charlotte FC: Wilfried Zaha & Pep Biel remain for 2026; Brandt Bronico contract extension</li>
        <li>Portland Timbers: Crépeau enters free agency, Chara returns</li>
        <li>Columbus Crew: Steven Moreira, Jacen Russell-Rowe options exercised</li>
        <li>FC Dallas: Sebastian Lletget & Pedrinho depart</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Internal Updates / Negotiations</h3>
      <ul>
        <li>Minnesota United: St. Clair, Lod in talks; Joaquín Pereyra contract extension</li>
        <li>Charlotte FC: Wilfried Zaha & Pep Biel remain for 2026; Brandt Bronico contract extension</li>
        <li>Portland Timbers: Crépeau enters free agency, Chara returns</li>
        <li>Columbus Crew: Steven Moreira, Jacen Russell-Rowe options exercised</li>
        <li>FC Dallas: Sebastian Lletget & Pedrinho depart</li>
      </ul>

     
    </section>

    <p>MLS 2026 promises a season of major signings, high-profile contract extensions, and the arrival of European stars, ensuring excitement both on and off the pitch for fans across North America.</p>

    {/* FOOTER */}
    <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="text-sm text-gray-600">
        <p>Published: December 5, 2025</p>
        <p>Author: Mio Ristić</p>
      </div>
      <div className="flex gap-2">
        <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
      </div>
    </footer>
  </div>
</article>


);
}
