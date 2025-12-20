

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

 

const Blog = () => {
  const blogPosts = [
    {
        id: 2,
        title: "Top MLS Players in EA SPORTS FC 26",
        author: "Mio Ristic",
        date: "September 30, 2025",
        excerpt: "Discover the best MLS players in EA SPORTS FC 26 – from Lionel Messi at Inter Miami to Heung Min Son at LAFC. Ratings, stats, and club overviews.",
        imageUrl: "https://www.donanimhaber.com/cache-v2/?t=20250721183450&width=-1&text=0&path=https://www.donanimhaber.com/images/images/haber/194076/fc-26-icin-turkce-dublajli-fragmani-paylasildi-iste-video194076_0.jpg",
        slug: "fc26"  // add this
      },
      {
        id: 1,
        title: 'MLS in FC25',
        author: 'Mio Ristic',
        date: 'July 1, 2024',
        excerpt: 'FC25 – Overview, MLS Clubs, and U.S. National Team.',
        imageUrl: 'https://drop-assets.ea.com/images/1BY2V24NDqyjYKlDV8mJrx/ff63d00bb5bf24ad0c1b87adcd0e2771/EA_FC25_Standard_KeyArt_16-9_3840x2160.jpg?im=AspectCrop=(16,9),xPosition=0.5384114583333334,yPosition=0.538425925925926&q=85&w=1280',
        slug: 'fc25',
      },
  
    
  ];

  const [visiblePosts, setVisiblePosts] = useState(blogPosts.slice(0, 6));

  const loadMorePosts = () => {
    const nextPosts = blogPosts.slice(visiblePosts.length, visiblePosts.length + 6);
    setVisiblePosts((prev) => [...prev, ...nextPosts]);
  };

  return (
    <>
      

      <div className="w-full min-h-screen bg-white">
        <div className="max-w-6xl mx-auto py-12 px-4">
          <h1 className="text-5xl font-bold text-[#020617] mb-12">Gaming</h1>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <Link
                key={post.id}
                href={`/gaming/${post.slug}`}
                className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition duration-300"
                    unoptimized={typeof post.imageUrl === 'string' && post.imageUrl.startsWith('http')}
                    priority={post.id === 19}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold group-hover:text-blue-600 transition duration-300">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-1">{post.author} | {post.date}</p>
                  <p className="text-gray-700">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          {visiblePosts.length < blogPosts.length && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={loadMorePosts}
                className="cursor-pointer text-white bg-[#020617] px-6 py-3 rounded-lg hover:bg-transparent hover:text-[#020617] border-2 border-transparent hover:border-[#020617] transition duration-500"
              >
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
