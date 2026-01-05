import React from 'react';
import Link from 'next/link';

const SeattleVsBotafogoRecap = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
          Seattle Sounders Show Heart, but Fall 2-1 to Botafogo in Club World Cup Debut
        </h1>

        <div className="mb-4">
          <img
            src="https://assets.goal.com/images/v3/getty-2220334930/crop/MM5DENZVGU5DCNJVGA5G433XMU5DGMBVHI3DE===/GettyImages-2220334930.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt='MLS Jerseys'
          className='w-full h-[400px] object-cover rounded-lg shadow-md'
          style={{ objectPosition: 'center 20%' }}
          />
          <div className="mt-2 text-sm text-gray-600">
            <span>By: Mio Ristić | US11 | June 16, 2025 | Creator: Buda Mendes 
| 
Credit: Getty Images
Copyright: 2025 Getty Images</span>
          </div>
          <div className="mt-4 text-center">
            <Link href="/teams/seattle-sounders">
              <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">
                Visit Seattle Sounders
              </button>
            </Link>
          </div>
        </div>

        <p className="mb-4">
          Seattle Sounders FC may have lost their opening match of the 2025 FIFA Club World Cup, but their determination and second-half grit left fans with reason to hope. In front of a packed Lumen Field, Seattle battled hard but ultimately suffered a 2-1 defeat to Brazilian powerhouse Botafogo.
        </p>

        <p className="mb-4">
          Botafogo took control in the first half with two well-placed headers. <strong>Jair Cunha</strong> opened the scoring in the 28th minute with a powerful finish, followed by <strong>Igor Jesus</strong>, who doubled the lead just before halftime (44’).
        </p>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">🔥 Roldan Sparks Comeback Effort</h2>
        <p className="mb-4">
          The Sounders refused to give in. Led by veteran energy and home crowd momentum, Seattle came out with purpose after the break. Their pressure paid off in the 75th minute when <strong>Cristian Roldan</strong> reacted fastest to a recycled set piece, heading home and igniting belief across the stadium.
        </p>

        <p className="mb-4">
          Seattle outshot Botafogo 23-12, and the wave of momentum nearly carried them to an equalizer.
        </p>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">⚡ De la Vega’s Golden Chance</h2>
        <p className="mb-4">
          One of Seattle’s best chances came moments after the goal. <strong>Luciano De la Vega</strong> broke through and unleashed a rocket from the edge of the box — just inches wide. The crowd gasped, knowing that had the shot been a few centimeters to the left, the story might’ve ended differently.
        </p>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">🔜 Looking Ahead: Atlético Awaits</h2>
        <p className="mb-4">
          Head coach Brian Schmetzer praised his team’s second-half performance, calling it “the heart of Seattle.” But moral victories won’t count in Group B. With <strong>Atlético Madrid</strong> and <strong>Paris Saint-Germain</strong> up next, the Sounders will need more than belief — they’ll need results.
        </p>

        <p className="mb-4">
          Still, if Sunday night showed anything, it’s that this Seattle squad has the guts to compete with the world’s best. Now, they’ll aim to turn heart into history.
        </p>

        <p className="mt-8 italic text-gray-500 text-sm">
          Seattle faces Atlético Madrid on Thursday in what could be a defining match in their Club World Cup journey.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-[#020617] mb-4">🎥 Highlights: Seattle Sounders vs Botafogo</h2>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
              className="w-full h-96 rounded-lg shadow-md"
              src="https://www.youtube.com/embed/Frhk5wjfDpk"
              title="Seattle vs Botafogo Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeattleVsBotafogoRecap;
