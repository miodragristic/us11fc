import React from 'react';
import Link from 'next/link';

const InterMiamiVsPSGTicketPromo = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
          Buy Tickets: Inter Miami CF vs Paris Saint-Germain – FIFA Club World Cup 2025 Knockout Clash
        </h1>

        <div className="mb-4">
          <img
            src="https://www.observerbd.com/2025/06/25/ob_1750825385.jpg"
            alt="Inter Miami vs PSG"
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
            style={{ objectPosition: 'center' }}
          />
          <div className="mt-2 text-sm text-gray-600">
            <span>By: Mio Ristic | US11 | June 24, 2025 | Creator: Sebastian Frej 
| 
Credit: Getty Images
Copyright: 2025 Sebastian Frej</span>
          </div>
          <div className="mt-4 text-center">
          <Link href="/teams/inter-miami">
            <button className="bg-pink-500 hover:bg-pink-600 text-black font-bold py-2 px-4 rounded-lg cursor-pointer">
  Visit Inter Miami
</button>
            </Link>
          </div>
        </div>

        <p className="mb-4">
          Witness one of the biggest showdowns of the FIFA Club World Cup 2025 as Lionel Messi and Inter Miami CF take on European giants Paris Saint-Germain in a high-stakes Round of 16 battle. The match is set for Sunday, June 29 at the iconic Mercedes-Benz Stadium in Atlanta.
        </p>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">🔥 Messi Faces Former Club</h2>
        <p className="mb-4">
          After a dramatic group stage campaign, Inter Miami have made history by becoming the first MLS club to reach the knockout rounds. Now, Messi will go head-to-head with his former team PSG, where he played from 2021 to 2023.
        </p>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">🏟️ Match Details</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Date:</strong> Sunday, June 29, 2025</li>
          <li><strong>Time:</strong> 12:00 PM ET / 9:00 AM PT</li>
          <li><strong>Venue:</strong> Mercedes-Benz Stadium, Atlanta, Georgia</li>
          <li><strong>Round:</strong> FIFA Club World Cup 2025 – Round of 16</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#020617] mb-4">🎫 Why You Should Attend</h2>
        <p className="mb-4">
          This is not just a match – it's a moment in football history. With a potential quarterfinal showdown against Flamengo or Bayern Munich on the horizon, every moment matters. Experience the electric atmosphere, the world-class talent, and the unforgettable drama live.
        </p>

        <div className="text-center my-8">
          <Link href="https://ticketnetwork.lusg.net/mO1OXD">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg text-lg cursor-pointer">
              🎟️ Buy Tickets Now
            </button>
          </Link>
        </div>

        <div className="flex justify-center my-8">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/2aA0_1kTfIc"
            title="Inter Miami CF vs Palmeiras Recap"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="mb-4 text-gray-600 text-sm">
          Updated June 24, 2025 | Source: FIFA / US11 FC
        </p>
      </div>
    </div>
  );
};

export default InterMiamiVsPSGTicketPromo;
