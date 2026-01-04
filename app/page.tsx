'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  imagePosition?: string;
}

const TrendingPlayers = () => {
  const players = [
    { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', link: '/teams/inter-miami/messi' },
    { name: 'Heung-Min Son', image: 'https://assets.goal.com/images/v3/getty-2229316055/crop/MM5DGNBTHA5DCOJTGQ5G433XMU5DAORRG44Q====/GettyImages-2229316055.jpg?auto=webp&format=pjpg&width=1920&quality=60', link: '/teams/lafc/son' },
    { name: 'Thomas Muller', image: 'https://assets.goal.com/images/v3/getty-2230148654/crop/MM5DIMRWGY5DENBQGA5G433XMU5DAORSGIZA====/GettyImages-2230148654.jpg?auto=webp&format=pjpg&width=1920&quality=60', link: '/teams/vancouver-whitecaps/muller' },
    { name: 'Luis Suarez', image: 'https://en.nogomania.com/GetFile.ashx?id=259742', link: '/teams/inter-miami/suarez' },
    { name: 'Christian Pulisic', image: 'https://media.bleacherreport.com/image/upload/v1642803493/c6tcjkzmqnb1iphp4dik.jpg', link: '/teams/usa-national-team/pulisic' },
    { name: 'Marco Reus', image: 'https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148', link: '/teams/la-galaxy/reus' },
    { name: 'Jordan Morris', image: 'https://assets.goal.com/images/v3/getty-2090010997/crop/MM5DENBQGA5DCNRQGE5G433XMU5DKNRWHIYTAMA=/GettyImages-2090010997.jpg?auto=webp&format=pjpg&width=3840&quality=60', link: '/teams/seattle-sounders/morris' },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
        {players.map((player) => (
          <Link
            key={player.name}
            href={player.link}
            className="group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={player.image}
              alt={player.name}
              className="h-64 w-full object-cover mb-4 rounded-lg"
              style={{ objectPosition: 'center 2%' }}
            />
            <h3 className="text-lg font-semibold text-center text-[#020617]">
              {player.name}
            </h3>
          </Link>
        ))}
      </div>

      <div ref={scrollRef} className="hidden lg:flex overflow-x-auto space-x-6 pb-4">
        {players.map((player) => (
          <Link
            key={player.name}
            href={player.link}
            className="flex-shrink-0 w-1/4 group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={player.image}
              alt={player.name}
              className="h-64 w-full object-cover mb-4 rounded-lg"
              style={{ objectPosition: 'center 2%' }}
            />
            <h3 className="text-lg font-semibold text-center text-[#020617]">{player.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

// News JSON
const blogPosts: Post[] = [
  {
    id: 103,
    title: "MLS Transfers 2025/26: Biggest Moves and Roster Updates",
    author: "Mio Ristić",
    date: "December 6, 2025",
    excerpt: "A complete overview of the biggest MLS transfers, contract extensions, and roster changes ahead of the 2026 season, including Messi, Lloris, Brenner, and more.",
    imageUrl: "https://assets.goal.com/images/v3/getty-2223853224/crop/MM5DCOBQHA5DCMBRG45G433XMU5DCMZXHA5DCMBX/GettyImages-2223853224.jpg",
    link: "/blog/mls-transfers-2025"
  },
  {
    id: 102,
    title: "USMNT in Group D: Challenges and Chances for World Cup 2026",
    author: "Mio Ristić",
    date: "December 5, 2025",
    excerpt: "A deep dive into the USMNT's opponents in Group D, tactical insights, and what fans can expect in the 2026 World Cup.",
    imageUrl: "https://assets.goal.com/images/v3/blt72949e9c276641f4/crop/MM5DGOBYGE5DEMJYGM5G433XMU5DAORSGAZA====/GettyImages-2246882882.jpg",
    link: "/blog/usa-world-cup"
  },
  {
"id": 100,
"title": "Cristiano Ronaldo Is Coming to Atlanta: Georgia Prepares for a Football Spectacle",
"author": "Mio Ristić",
"date": "December 3, 2025",
"excerpt": "Ronaldo heads to Atlanta for the USMNT friendly against Portugal on March 31, 2026. Fans can witness one of football’s greatest players live at Mercedes-Benz Stadium.",
"imageUrl": "https://assets.goal.com/images/v3/getty-2233954657/crop/MM5DEMZTGY5DCMZRGQ5G433XMU5DEMBQG45DS===/GettyImages-2233954657.jpg?auto=webp&format=pjpg&width=3840&quality=60",
"link": "/blog/ronaldo-in-atlanta"
}
,
  
];

// Jerseys Blog JSON
const jerseysBlogPosts: Post[] = [
  {
      "id": 59,
      "title": "MLS Third Kit 2025: Retro Jerseys You Need in Your Collection",
      "author": "Mio Ristić",
      "date": "September 9, 2025",
      "excerpt": "Discover the best MLS third kits of 2025 – retro-inspired jerseys from Inter Miami, Seattle Sounders, LAFC, Columbus Crew, and more. Perfect for fans and collectors.",
      "imageUrl": "https://www.mlsstore.com/content/ws/all/0c171420-bd12-42f9-9806-1480b7ee4367__548X893.jpg?w=548",
      "link": "/blog/mls-third-kit-2025"
    },
     {
      "id": 41,
      "title": "Inter Miami 2025 \"Riptide\" Jersey – The Wave You Don’t Want to Miss",
      "author": "Mio Ristić",
      "date": "June 14, 2025",
      "excerpt": "Discover the bold new Inter Miami 2025 Riptide Third Kit inspired by Miami Blue waves and Messi’s magic. Official jersey, gear, and where to buy.",
      "imageUrl": "https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/mls/cw1sc4jlftyqxpshxuk5.jpg",
      "link": "/blog/inter-blue-kit"
    },
    {
      id: 19,
      title: 'Top 10 MLS Jerseys of 2024',
      author: 'Mio Ristic',
      date: 'April 23, 2025',
      excerpt: 'Style, Passion & a Bit of Magic',
      imageUrl: 'https://images.supersport.com/media/0adn4b1p/lionel-messi-24-12-g-1200.jpg?width=1920&quality=90&format=webp',
      link: '/blog/top-mls-jersey2024',
    },
];

// Hall of Fame JSON
const hallOfFamePosts: Post[] = [
  {
  id: 86,
  title: "MLS Hall of Fame: David Beckham — The Player Who Changed Football’s Geography",
  author: "Mio Ristić",
  date: "January 6, 2026",
  excerpt: "David Beckham's move to LA Galaxy in 2007 transformed MLS, elevating the league’s global profile and leaving a lasting legacy.",
  imageUrl: "https://i.ibb.co/kVfLGrpP/david-beckham-soccer-field-22396823.webp",
  imagePosition: "10% 5%", // sada TS ovo prepoznaje
  link: "blog/mls-hall-of-fame/david-beckham"
},
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroItems = [
    {
      title: "Top 10 Things We Will Remember",
      subtitle: "From the 2025 MLS Season",
      imageUrl: "https://assets.goal.com/images/v3/getty-2202000448/crop/MM5DEMJZGI5DCMRTGM5G433XMU5DCMJYHIZDK===/GettyImages-2202000448.jpg",
      link: "/blog/top-10-mls-2025",
    },
    {
      title: "2025 Champions",
      subtitle: "Shop Now",
      imageUrl: "https://www.mlsstore.com/content/ws/all/9fde580b-fd2e-4c86-bc02-0dd5c9a5b12f__2400X1176.jpg?w=2400",
      link: "https://mlsstore.i8h2.net/QjBXrY",
    },
  ];

  const staffPicks = [
    {
      name: "Lionel Messi Inter Miami CF adidas Youth 2025 The Fortitude Kit Replica Player Jersey - Black",
      price: "$109.99",
      image: "https://fanatics.frgimages.com/inter-miami-cf/youth-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-201604870+pv-1+u-mgihjk9ywffxfwjtkbrl+v-5p4ohbnddixdv7gyxn48.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/Qj7Dya",
    },
    {
      name: "Lionel Messi Inter Miami CF adidas Originals Youth 2025 Third Replica Player Jersey - Blue",
      price: "$109.99",
      image: "https://fanatics.frgimages.com/inter-miami-cf/youth-adidas-originals-lionel-messi-blue-inter-miami-cf-2025-third-replica-player-jersey_ss5_p-202462095+pv-1+u-ynteuvrrspb5ek9qkbrx+v-klfcxvmjcrzrekd0j9ue.jpg?_hv=2&w=1018",
      link: "https://www.fanatics.com/mls/inter-miami-cf/lionel-messi-inter-miami-cf-adidas-originals-youth-2025-third-replica-player-jersey-blue/o-3555+t-21474441+p-2422463797239+z-9-3173708973?_ref=p-XLP:m-LD:pi-SOCCER_XLP_CAROUSEL:i-r0c2:po-2",
    },
    {
      name: "Christian Pulisic AC Milan Puma 2025/26 Home Replica Player Jersey - Red",
      price: "$134.99",
      image: "https://fanatics.frgimages.com/ac-milan/mens-puma-christian-pulisic-red-ac-milan-2025/26-home-replica-player-jersey_ss5_p-203151178+pv-1+u-er1btbt7mp3rzbnzbc8c+v-roiui1cm4q80cwatqrz9.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/4G4WLZ",
    },
    {
      name: "Lamine Yamal Barcelona Nike 2025/26 Replica Player Jersey - Blue",
      price: "$129.99",
      image: "https://fanatics.frgimages.com/barcelona/mens-nike-lamine-yamal-blue-barcelona-2025/26-replica-player-jersey_ss5_p-203284529+pv-1+u-egcn4pkk9yugwdxafypr+v-9yopybyijyh7ysmfxoob.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/4GX9G0",
    },
    {
      name: "Lamine Yamal Barcelona Nike Youth 2025/26 Away Stadium Replica Jersey - Gold",
      price: "$114.99",
      image: "https://fanatics.frgimages.com/barcelona/youth-nike-lamine-yamal-gold-barcelona-2025/26-away-stadium-replica-jersey_ss5_p-203336005+pv-1+u-5ha2rhncky9c4bvfgydm+v-umguisys7a3vzdlecyg8.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/K07b07",
    },
    {
      name: "Jude Bellingham Real Madrid adidas 2025/26 Home Replica Jersey - White",
      price: "$134.99",
      image: "https://fanatics.frgimages.com/real-madrid/mens-adidas-jude-bellingham-white-real-madrid-2025/26-home-replica-jersey_ss5_p-203133325+pv-1+u-8y839qsuhqg7lfvmfaes+v-lnvrnkzo9datsjzfrvja.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/EE4ZG4",
    },
    {
      name: "adidas 2026 FIFA World Cup Pro Soccer Ball",
      price: "$169.99",
      image: "https://fanatics.frgimages.com/fifa-world-cup-gear/adidas-2026-fifa-world-cup-pro-soccer-ball_ss5_p-202753932+pv-1+u-uioraphtnaputjyep8cm+v-5vubzbfxseqln05alds1.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/qzYMzb",
    },
    {
      name: "USMNT Nike 2025 Away Replica Jersey - Navy",
      price: "$104.99",
      image: "https://fanatics.frgimages.com/usmnt/mens-nike-navy-usmnt-2025-away-replica-jersey_ss5_p-202297013+pv-1+u-f9wal9lduvhdzyrsu8xw+v-p6kn5elckajdhcsojmpr.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/9L0kL4",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroItems.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + heroItems.length) % heroItems.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % heroItems.length);

  const currentItem = heroItems[currentIndex];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[700px]">
        <a
          href={currentItem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full relative"
        >
          <Image
            src={currentItem.imageUrl}
            alt={currentItem.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center 10%"
            className="brightness-75 transition-opacity duration-700"
          />
          <span className="absolute top-2 right-4 text-xs text-white/80 z-10">Credit: US11</span>
          <div className="absolute inset-0 flex flex-col justify-end items-center pb-20 px-6 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{currentItem.title}</h1>
            <p className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{currentItem.subtitle}</p>
          </div>
        </a>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition z-20">‹</button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition z-20">›</button>
      </div>

      {/* Staff Picks Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-[#020617] mb-12 text-center">Staff Picks</h2>
          <div className="overflow-x-auto pb-4 flex space-x-6">
            {staffPicks.map((shirt) => (
              <a
                key={shirt.name}
                href={shirt.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <img
                  src={shirt.image}
                  alt={shirt.name}
                  className="rounded-t-2xl h-72 w-full object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-[#020617] mb-2">{shirt.name}</h3>
                  <p className="text-blue-600 font-bold text-xl">{shirt.price}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="https://fanatics.93n6tx.net/Vx7PO6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#020617] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#020617] hover:border-[#020617] border-2 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              View All Shirts
            </a>
          </div>
        </div>
      </div>

      <TrendingPlayers />

      {/* News Section */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-[#020617] mb-8 text-center">News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link href={post.link} key={post.id} className="h-full">
                <div className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition duration-300">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.author} | {post.date}</p>
                    <p className="text-gray-700 mt-2 flex-grow">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/news" className="cursor-pointer text-white bg-[#020617] px-6 py-3 rounded-lg hover:bg-transparent hover:text-[#020617] border-2 border-transparent hover:border-[#020617] transition duration-500">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Jerseys Blog Section */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-[#020617] mb-8 text-center">Jerseys Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jerseysBlogPosts.map((post) => (
              <Link href={post.link} key={post.id} className="h-full">
                <div className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition duration-300">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.author} | {post.date}</p>
                    <p className="text-gray-700 mt-2 flex-grow">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/blog/jerseys" className="cursor-pointer text-white bg-[#020617] px-6 py-3 rounded-lg hover:bg-transparent hover:text-[#020617] border-2 border-transparent hover:border-[#020617] transition duration-500">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* MLS Hall of Fame Section */}
<div className="bg-white py-16">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-5xl font-bold text-[#020617] mb-8 text-center">MLS Hall of Fame</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hallOfFamePosts.map((post) => (
        <Link href={post.link} key={post.id} className="h-full">
          <div className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
            <div className="relative w-full h-48">
  <Image
    src={post.imageUrl}
    alt={post.title}
    fill
    style={{
      objectFit: 'cover',
      objectPosition: post.imagePosition || '50% 50%', // ovo će pomeriti glavu na gore
    }}
    className="group-hover:scale-105 transition-transform duration-300"
    unoptimized={true} // zbog eksternih linkova
  />
</div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition duration-300">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.author} | {post.date}</p>
              <p className="text-gray-700 mt-2 flex-grow">{post.excerpt}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>

          <div className="flex justify-center mt-8">
            <Link href="/blog/mls-hall-of-fame" className="cursor-pointer text-white bg-[#020617] px-6 py-3 rounded-lg hover:bg-transparent hover:text-[#020617] border-2 border-transparent hover:border-[#020617] transition duration-500">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-16 text-center mt-16">
        <h2 className="text-4xl font-bold mb-4">Stay Updated with US11</h2>
        <p className="text-lg mb-8">Subscribe to our newsletter and never miss an MLS update</p>
        <Link
          href="/newsletter"
          className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out inline-block"
        >
          Subscribe to Newsletter
        </Link>
      </div>
    </>
  );
}
