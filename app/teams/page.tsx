'use client';


import Image from 'next/image';
import Head from 'next/head';

const generateTeams = () => [
  { id: 1, title: "Inter Miami", imageUrl: "/logos/Inter_Miami_CF_logo.svg.png", slug: "inter-miami" },
  { id: 2, title: "Atlanta United", imageUrl: "/logos/Atlanta_MLS.svg.png", slug: "atlanta-united" },
  { id: 3, title: "Austin FC", imageUrl: "/logos/Austin_FC_logo.svg.png", slug: "austin-fc" },
  { id: 4, title: "Charlotte", imageUrl: "/logos/Charlotte_FC_logo.svg.png", slug: "charlotte" },
  { id: 5, title: "Chicago Fire", imageUrl: "/logos/Chicago_Fire_logo,_2021.svg.png", slug: "chicago-fire" },
  { id: 6, title: "FC Cincinnati", imageUrl: "/logos/FC_Cincinnati_primary_logo_2018.svg.png", slug: "fc-cincinnati" },
  { id: 7, title: "Colorado Rapids", imageUrl: "/logos/Colorado_Rapids_logo.svg.png", slug: "colorado-rapids" },
  { id: 8, title: "Columbus Crew", imageUrl: "/logos/Columbus_Crew_logo_2021.svg.png", slug: "columbus-crew" },
  { id: 9, title: "D.C. United", imageUrl: "/logos/D.C._United_logo_(2016).svg.png", slug: "dc-united" },
  { id: 10, title: "FC Dallas", imageUrl: "/logos/FC_Dallas_logo.svg.png", slug: "fc-dallas" },
  { id: 11, title: "Houston Dynamo", imageUrl: "/logos/Houston_Dynamo_FC_logo.svg.png", slug: "houston-dynamo" },
  { id: 12, title: "Sporting Kansas City", imageUrl: "/logos/Sporting_Kansas_City_logo.svg.png", slug: "sporting-kansas-city" },
  { id: 13, title: "LA Galaxy", imageUrl: "/logos/Los_Angeles_Galaxy_logo.svg.png", slug: "la-galaxy" },
  { id: 14, title: "LAFC", imageUrl: "/logos/Los_Angeles_Football_Club.svg.png", slug: "lafc" },
  { id: 15, title: "Minnesota United", imageUrl: "/logos/Minnesota_United_FC_(MLS)_Primary_logo.svg.png", slug: "minnesota-united" },
  { id: 16, title: "CF Montreal", imageUrl: "/logos/CF_Montreal_logo_2023.svg.png", slug: "cf-montreal" },
  { id: 17, title: "Nashville SC", imageUrl: "/logos/Nashville_SC_logo,_2020.svg.png", slug: "nashville-sc" },
  { id: 18, title: "New England Revolution", imageUrl: "/logos/New_England_Revolution_(2021)_logo.svg.png", slug: "new-england-revolution" },
  { id: 19, title: "NYCFC", imageUrl: "/logos/New_York_City_FC.svg.png", slug: "nycfc" },
  { id: 20, title: "New York Red Bulls", imageUrl: "/logos/New_York_Red_Bulls_logo.svg.png", slug: "new-york-red-bulls" },
  { id: 21, title: "Orlando City", imageUrl: "/logos/Orlando_City_2014.svg.png", slug: "orlando-city" },
  { id: 22, title: "Philadelphia Union", imageUrl: "/logos/Philadelphia_Union_2018_logo.svg.png", slug: "philadelphia-union" },
  { id: 23, title: "Portland Timbers", imageUrl: "/logos/Portland_Timbers_logo.svg.png", slug: "portland-timbers" },
  { id: 24, title: "Real Salt Lake", imageUrl: "/logos/Real_Salt_Lake_2010.svg.png", slug: "real-salt-lake" },
  { id: 25, title: "San Jose Earthquakes", imageUrl: "/logos/San_Jose_Earthquakes_2014.svg.png", slug: "san-jose-earthquakes" },
  { id: 26, title: "Seattle Sounders", imageUrl: "/logos/Seattle_Sounders_logo.svg.png", slug: "seattle-sounders" },
  { id: 27, title: "Toronto FC", imageUrl: "/logos/Toronto_FC_Logo.svg.png", slug: "toronto-fc" },
  { id: 28, title: "Vancouver Whitecaps", imageUrl: "/logos/Vancouver_Whitecaps_FC_logo.svg.png", slug: "vancouver-whitecaps" },
  { id: 29, title: "St. Louis City SC", imageUrl: "/logos/St._Louis_City_SC_logo.svg.png", slug: "st-louis-city-sc" },
  { id: 30, title: "San Diego", imageUrl: "/logos/San_Diego_FC_logo.svg.png", slug: "san-diego" },
  { id: 31, title: "USA National Team", imageUrl: "/logos/United_States_Soccer_Federation_logo_2016.svg.png", slug: "usa-national-team" },
  { id: 32, title: "Mexico National Team", imageUrl: "/logos/Mexico_national_football_team_crest.svg.png", slug: "mexico-national-team" },
];

const Teams = () => {
  const items = generateTeams();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Trending Teams | SoccerHub</title>
        <meta name="description" content="Browse trending football teams including MLS and National Teams. Discover logos and team info." />
      </Head>

      <div id="teams" className="w-full min-h-screen bg-white pt-[1px]">
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
          <h1 className="text-4xl sm:text-7xl font-bold text-[#020617] mb-4">Trending Teams</h1>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="font-bold text-black-900 dark:black-white group-hover:text-blue-600 transition duration-300">
                <div className="relative overflow-hidden bg-gray-200 h-48">
                 <Image
  src={item.imageUrl}
  alt={item.title}
  width={500}
  height={500}
  className="object-contain object-top w-full h-full group-hover:scale-105 transition duration-300"
/>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition duration-300">{item.title}</h3>
                  <a
                    href={`/teams/${item.slug}`}
                    rel="noopener noreferrer"
                    className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Visit
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={scrollToTop}
              className="text-white bg-[#020617] group border-2 border-transparent px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-[#020617] hover:text-[#020617] rounded-lg transition duration-500 ease-in-out transform hover:scale-105"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
