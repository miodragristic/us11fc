import React from 'react';

const RiptideJerseyBlog = () => {
  const products = [
    {
      title: "Men's Inter Miami CF Lionel Messi adidas Originals Blue 2025 Third Authentic Player Jersey",
      price: "$194.99",
      imageUrl: "https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-lionel-messi-blue-inter-miami-cf-2025-third-authentic-player-jersey_ss5_p-203184855+pv-1+u-3tymtqbn2tkzdatahxr4+v-24co1ls9knmitkefhug5.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/WyKxZX"
    },
    {
      title: "Men's Inter Miami CF Lionel Messi adidas Originals Blue 2025 Third Replica Player Jersey",
      price: "$129.99",
      imageUrl: "https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-lionel-messi-blue-inter-miami-cf-2025-third-replica-player-jersey_ss5_p-202462205+pv-1+u-b4isz5xg1t5ncoabky8p+v-dbxmdma814m7j0mkludq.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/nXb9qX"
    },
    {
      title: "Youth Inter Miami CF Lionel Messi adidas Originals Blue 2025 Third Replica Player Jersey",
      price: "$109.99",
      imageUrl: "https://images.footballfanatics.com/inter-miami-cf/youth-adidas-originals-lionel-messi-blue-inter-miami-cf-2025-third-replica-player-jersey_ss5_p-202462095+pv-1+u-ynteuvrrspb5ek9qkbrx+v-klfcxvmjcrzrekd0j9ue.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/dOZb2k"
    },
    {
      title: "Men's Inter Miami CF adidas Originals Blue 2025 Third Replica Jersey",
      price: "$99.99",
      imageUrl: "https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-blue-inter-miami-cf-2025-third-replica-jersey_ss5_p-203139657+pv-1+u-el0qrzgfgtowyjwd6trh+v-bngtjiecepcg6q7fwnh0.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/YRorXj"
    },
    {
      title: "Women's Inter Miami CF Lionel Messi adidas Originals Blue 2025 Third Replica Player Jersey",
      price: "$129.99",
      imageUrl: "https://images.footballfanatics.com/inter-miami-cf/womens-adidas-originals-lionel-messi-blue-inter-miami-cf-2025-third-replica-player-jersey_ss5_p-202462083+pv-1+u-audr42go5kc5d3vmgnqz+v-sgsw3djrnyqmpcht73bd.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/7axWEQ"
    },
    {
      title: "Men's Inter Miami CF adidas Originals Blue 2025 Third Authentic Jersey with Patch",
      price: "$159.99",
      imageUrl: "https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-blue-inter-miami-cf-2025-third-authentic-jersey-with-patch_ss5_p-203139641+pv-1+u-ufnvywa9xq32iwor4iee+v-rverllhwcbvch7khan2m.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/Dy1jYd"
    },
    {
      title: "Youth Inter Miami CF adidas Originals Blue 2025 Third Replica Jersey",
      price: "$79.99",
      imageUrl: "https://images.footballfanatics.com/inter-miami-cf/youth-adidas-originals-blue-inter-miami-cf-2025-third-replica-jersey_ss5_p-202462106+pv-1+u-ikkk4btsrjxmooztscbd+v-xnoazh0zcagnogfgp4vc.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/rabA93"
    },
    {
      title: "Women's Inter Miami CF adidas Originals Blue 2025 Third Replica Jersey",
      price: "$99.99",
      imageUrl: "https://images.footballfanatics.com/inter-miami-cf/womens-adidas-originals-blue-inter-miami-cf-2025-third-replica-jersey_ss5_p-202462090+pv-1+u-5t0zlrjad0iuhcpaaepg+v-bgzdayb34kmgqg7r78h9.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/APaqd7"
    },
    {
      title: "Men's Inter Miami CF adidas Originals Blue 2025 Third Authentic Custom Jersey",
      price: "$194.99",
      imageUrl: "https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-blue-inter-miami-cf-2025-third-authentic-custom-jersey_ss5_p-203140618+pv-1+u-2ajqiciptrrxgro6wlyv+v-vacibjtxhniewzrdpfsh.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/19OaXm"
    },
    // {
    //   title: "Men's Inter Miami CF adidas Originals Blue 2025 Third Replica Custom Jersey",
    //   price: "$134.99",
    //   imageUrl: "https://link-to-image.jpg",
    //   link: "https://mlsstore.i8h2.net/link-replica-custom"
    // },
    // {
    //   title: "Men's Inter Miami CF adidas Blue/Pink 2025 Third Gazelle Shoes",
    //   price: "$109.99",
    //   imageUrl: "https://link-to-image.jpg",
    //   link: "https://mlsstore.i8h2.net/link-gazelle"
    // },
    // {
    //   title: "Men's Inter Miami CF adidas Blue 2025 Archive Collection Full-Snap Varsity Jacket",
    //   price: "$159.99",
    //   imageUrl: "https://link-to-image.jpg",
    //   link: "https://mlsstore.i8h2.net/link-varsity"
    // },
    // {
    //   title: "Men's Inter Miami CF adidas Blue 2025 Authentic Shorts",
    //   price: "$64.99",
    //   imageUrl: "https://link-to-image.jpg",
    //   link: "https://mlsstore.i8h2.net/link-authentic-shorts"
    // },
    // {
    //   title: "Men's Inter Miami CF adidas Blue 2025 Archive Collection Essential T-Shirt",
    //   price: "$44.99",
    //   imageUrl: "https://link-to-image.jpg",
    //   link: "https://mlsstore.i8h2.net/link-blue-tee"
    // },
    // {
    //   title: "Men's Inter Miami CF adidas Blue 2025 Archive Collection Essential Shorts",
    //   price: "$54.99",
    //   imageUrl: "https://link-to-image.jpg",
    //   link: "https://mlsstore.i8h2.net/link-blue-shorts"
    // },
    // {
    //   title: "Men's Inter Miami CF adidas Pink 2025 Archive Collection T-Shirt",
    //   price: "$39.99",
    //   imageUrl: "https://link-to-image.jpg",
    //   link: "https://mlsstore.i8h2.net/link-pink-tee"
    // },
    // {
    //   title: "Men's Inter Miami CF adidas White 2025 Archive Collection T-Shirt",
    //   price: "$39.99",
    //   imageUrl: "https://link-to-image.jpg",
    //   link: "https://mlsstore.i8h2.net/link-white-tee"
    // },
    // {
    //   title: "Youth Inter Miami CF adidas Pink 2025 Archive Collection T-Shirt",
    //   price: "$34.99",
    //   imageUrl: "https://link-to-image.jpg",
    //   link: "https://mlsstore.i8h2.net/link-youth-pink-tee"
    // }
  ];

  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Inter Miami 2025 "Riptide" Jersey – The Wave You Don’t Want to Miss
        </h1>

        <img
          src="https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/mls/cw1sc4jlftyqxpshxuk5.jpg"
          alt='Riptide Jersey'
          className='w-full h-[400px] object-cover rounded-lg shadow-md'
        />

<div className='mb-4 text-sm text-gray-600'>
  <p>By: Mio Ristić | June 14, 2025</p>
  <p className='mt-1 text-xs text-gray-400'>Image © MLS Official Site</p>
</div>

        <div className='space-y-4 mb-10 text-[#020617] text-lg'>
          <p className='text-2xl font-semibold'>🌊 Miami Blue. Messi. Riptide. The boldest MLS kit yet?</p>
          <p>
            If summer 2025 felt like it needed some extra heat, Inter Miami just delivered it. Meet the Riptide Third Kit — a fierce, ocean-inspired drop from adidas that blends energy, culture, and unstoppable momentum.
            This isn’t just a soccer jersey. It’s a wave of style.
          </p>

          <h2 className='text-xl font-semibold mt-6'>⚡ What is the "Riptide" Kit All About?</h2>
          <p>
            Inspired by the power and unpredictability of ocean currents, the Inter Miami Riptide kit embodies everything the team stands for: fearless play, relentless drive, and bold Miami energy.
            Just like a riptide, this team doesn’t react — it reshapes the game.
          </p>
          <p>
            This third jersey isn’t subtle. It’s a striking Miami Blue base with Pink and White accents, showing up strong both on the pitch and on the streets.
          </p>

          <h2 className='text-xl font-semibold mt-6'>👕 Details That Matter</h2>
          <ul className='list-disc list-inside ml-4'>
            <li>Colorway: Miami Blue, with pink and white detailing</li>
            <li>Sponsor: Royal Caribbean featured front and center</li>
            <li>Design: Iconic two herons crest</li>
            <li>Sleeve Patch: “Freedom to Dream” on select items</li>
            <li>Full Riptide Collection includes: varsity jacket, Gazelle sneakers, tees, shorts</li>
          </ul>
          <p>
            Whether you’re pitchside or poolside, this kit screams Miami culture.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🌍 Be Part of Inter Miami’s Global Moment</h2>
          <p>
            In 2025, Inter Miami isn’t just competing in MLS — they’re making history as they gear up for the FIFA Club World Cup.
            This tournament is a defining moment, and the Riptide jersey is likely to be front and center as the team steps onto the global stage.
          </p>
          <p className='font-semibold'>
            Buying the Riptide jersey isn’t just supporting your club — it’s joining a new identity.
          </p>
          <p>
            This could be the kit that the world remembers when they think of Inter Miami. And if you’re wearing it, you’re not just a fan — you’re part of that story.
          </p>
        </div>

        <div className='grid gap-6 grid-cols-1 md:grid-cols-3 mb-12'>
          {products.map((product, index) => (
            <div
              key={index}
              className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'
            >
              <img className='w-full h-64 object-cover' src={product.imageUrl} alt={product.title} />
              <div className='p-4'>
                <h4 className='font-semibold text-lg text-[#020617]'>{product.title}</h4>
                <p className='text-gray-600'>{product.price}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <h2 className='text-2xl sm:text-3xl font-semibold text-[#020617] mb-6'>🛒 Where to Cop the Riptide Kit</h2>
        <div className='text-[#020617] text-lg space-y-2'>
          <ul className='list-disc list-inside ml-4'>
            <li>Inter Miami CF Official Store @ Chase Stadium</li>
            <li>Miami International Airport, Terminal D (Gates 27–28)</li>
            <li>Royal Caribbean cruises</li>
            <li>adidas flagship stores</li>
            <li><a href="https://mlsstore.i8h2.net/LKrzJY" target="_blank" className='underline text-blue-700'>MLSstore.com</a></li>
          </ul>
          <p><strong>🌎 Global release begins June 14, 2025 — don’t sleep on this.</strong></p>
        </div>

        <div className='text-center mt-10'>
          <p className='text-sm text-gray-600'>Follow more jersey drops and football style at US11</p>
          <p className='text-sm text-gray-600'>#RiptideKit #Messi #InterMiami #MLS2025</p>
        </div>
      </div>
    </div>
  );
};

export default RiptideJerseyBlog;
