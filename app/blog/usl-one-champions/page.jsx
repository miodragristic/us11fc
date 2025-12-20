'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

// Komponenta za prikaz Twitter embed
function TwitterEmbed({ tweetUrl }) {
  const ref = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(ref.current);
      } else {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [tweetUrl]);

  return (
    <div ref={ref} className="flex justify-center my-8">
      <blockquote className="twitter-tweet">
        <a href={tweetUrl}></a>
      </blockquote>
    </div>
  );
}

export default function OneKnoxvilleTitleReport() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('One Knoxville Shock the League: A Title Win That Changes Everything')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            One Knoxville Shock the League: A Title Win That Changes Everything
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-11-14">November 14, 2025</time>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/USL_League_One_abbr_light_logo.svg/1920px-USL_League_One_abbr_light_logo.svg.png"
            alt="One Knoxville SC celebrating championship"
            width={1200}
            height={700}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Photo: USL 1
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            If you missed the USL League One Final, you missed a night that felt like a turning point — not just for One Knoxville SC, but for the entire league. Knoxville didn’t just win their first title. They took it with authority, in front of a record crowd, with the kind of performance that screams: This club is officially a powerhouse.
          </p>

          {/* Twitter Embed */}
          <TwitterEmbed tweetUrl="https://x.com/USLLeagueOne/status/1990270045617103306" />

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Here’s what really went down as Knoxville beat Spokane 2–0 for the championship</h2>

          <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2">Knoxville’s Early Punch Set the Tone</h3>
          <p>
            For the second straight year, Spokane walked into a Final and got punched in the mouth right away. Last season it was Omaha. This season? Knoxville did it in the 4th minute, and the stadium exploded.
          </p>
          <p>
            Nico Rosamilia finished a slick move created by Stávros Zarokóstas, and from that moment on, the match belonged to Knoxville. And honestly, this was no surprise — they’ve been one of the best early-game teams all year.
          </p>
          <p><strong>When Knoxville score first, they don’t just win… they dominate.</strong></p>

          <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2">Spokane Worked the Wings, But Knoxville Owned the Moments</h3>
          <p>
            Spokane Velocity didn’t fold. They pushed the game wide, earned 11 corners, and swung in 33 crosses. They asked questions of Knoxville’s back line all night.
          </p>
          <p>
            But Knoxville had all the answers. The center-back pairing of Sivert Haugli and Jordan Skelton played like giants — blocking, clearing, stepping in front of everything. Spokane created half-chances, but Knoxville never let them breathe long enough to turn them into real danger.
          </p>
          <p>
            This is what separates regular teams from champions: the little details. Every second ball. Every clearance. Every defensive read. Knoxville executed all of them like a team that refused to let history slip away.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2">A Historic Season Ends With a Statement</h3>
          <p>
            Knoxville’s season already felt special — new stadium, new energy, new expectations. But under first-year head coach Ian Fuller, it became something bigger.
          </p>
          <p>
            They finished unbeaten at home, with nine straight wins and just eight goals allowed in 18 home matches. That’s not luck. That’s culture.
          </p>
          <p>
            The penalty on Stuart Ritchie? Sure, it’ll be debated. But Kempes Tekiela buried it like a man who knew the trophy was waiting. And after that, Knoxville suffocated Spokane’s comeback hopes. Only two harmless shots allowed in the second half.
          </p>
          <p><strong>Champions don’t panic. They close the door. Knoxville slammed it shut.</strong></p>

          <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2">Final Thoughts</h3>
          <p>
            This wasn’t just a title win. This was a statement. One Knoxville SC officially arrived as a heavyweight. They have the fans. They have the stadium. They have the identity. Now they have the trophy.
          </p>
          <p>
            And if this is the new Knoxville standard… the rest of USL League One is in trouble.
          </p>
        </section>

        {/* Embedded YouTube Video */}
        <section className="my-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Match Highlights</h2>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-md">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Lh-q9SqjmdQ"
              title="One Knoxville SC Title Win Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: November 14, 2025</p>
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
