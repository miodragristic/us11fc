import React from 'react';
import Link from 'next/link';
 


const VargasGriezmannMoment = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
          Obed Vargas Meets Griezmann: A Dream Fulfilled at the Club World Cup
        </h1>

        <div className="mb-4">
          <img
            src="https://assets.goal.com/images/v3/getty-2207507396/crop/MM5DENZXHA5DCNJWGM5G433XMU5DAORRGQ2Q====/GettyImages-2207507396.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Obed Vargas meets Antoine Griezmann"
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-sm text-gray-600">
            <span>By: Mio Ristic | US11FC | June 20, 2025 | Creator: Judit Cartiel 
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
          <strong>SEATTLE, WA —</strong> Amid the intensity of the Club World Cup group stage and Seattle Sounders' valiant fight against Atlético Madrid, a heartwarming moment stole the spotlight after the final whistle.
        </p>

        <p className="mb-4">
          18-year-old Obed Vargas, one of Seattle’s brightest young stars, finally met the player he has long admired — Antoine Griezmann. The moment captured after the match showed Vargas smiling ear-to-ear as he exchanged words and posed for a photo with the French superstar.
        </p>

        <p className="mb-4">
          For Vargas, born in Anchorage, Alaska and raised through the Sounders’ academy, Griezmann has always been a footballing role model. Their post-match exchange was brief, but meaningful — a reminder that the beautiful game isn’t just about goals and points, but also about connection and inspiration.
        </p>

        <p className="mb-6">
          Griezmann, known for his approachable personality, made time to speak with Vargas, share a hug, and offer a few words of encouragement. It was a full-circle moment for the young midfielder who just a few years ago was watching Griezmann lift the World Cup — and now stood beside him as an opponent on football’s biggest club stage.
        </p>
        <div className="flex justify-center my-8">
  <iframe
    width="360"
    height="640"
    src="https://www.youtube.com/embed/_OIBHCQg7lg"
    title="YouTube Shorts Embed"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="rounded-lg shadow-lg"
  ></iframe>
</div>

        <blockquote className="border-l-4 border-green-700 pl-4 italic text-gray-800 mb-6">
          “It’s a moment I’ll never forget. I’ve looked up to him for so long. To share the field and then get to talk to him — it’s surreal,” Vargas told reporters after the match.
        </blockquote>

        <p className="mb-4">
          While Seattle may be on the brink of elimination, moments like these remind fans and players alike why the Club World Cup matters — not just for trophies, but for dreams coming true.
        </p>

        <p className="mt-10 italic text-gray-500 text-sm">
          Football writes its own stories — and for Obed Vargas, this chapter was unforgettable.
        </p>
        
      </div>
    </div>
  );
};

export default VargasGriezmannMoment;
