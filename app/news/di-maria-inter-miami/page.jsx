import React from 'react';

const DiMariaInterMiami = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
          Di María to Inter Miami: The Last Dance or Just Another Flash
        </h1>

        <img
          src="https://dynamo.kiev.ua/media/posts/2024/03/24/GettyImages-2097724773.jpg"
          alt="Ángel Di María"
          className="w-full h-[400px] object-cover rounded-lg shadow-md"
        />

        <div className="mb-10 text-center text-sm text-gray-500">
          <div className="mt-2 text-sm text-gray-600">
            <span>By Mio Ristić | May 2025</span>
          </div>
          <p>
          Creator: Ira L. Black 
Credit: Getty Images
            {/* Možeš staviti i neki drugi izvor ako želiš */}
          </p>
        </div>

        <div className="space-y-6 text-[#020617] text-lg mb-10">
          <p>
            Ángel Di María is on his way out of Benfica, and transfer rumors are increasingly linking him with Inter Miami. The prospect of reuniting with Lionel Messi in MLS is already firing up the imagination of fans.
          </p>
          <p>
            On paper, it sounds like a fairytale. But the pitch doesn’t forgive age—or sentimentality.
          </p>
          <p>
            If this transfer goes through, it would mark another big step in David Beckham’s “Galáctico” vision for the club. But is it a smart move—or a glamorous gamble?
          </p>

          <h2 className="text-xl font-semibold mt-8">What would Inter Miami gain?</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Elite quality:</strong> Even at 36, Di María still boasts top-tier technique, passing, and a lethal left foot. With experience from PSG, Real Madrid, Manchester United, and Juventus, he'd bring a much-needed dose of European sharpness to MLS.
            </li>
            <li>
              <strong>Chemistry with Messi:</strong> The two have played together for years with Argentina, a partnership crowned with a World Cup title in Qatar. Their on-field understanding is immediate—no adjustment period needed.
            </li>
            <li>
              <strong>A marketing explosion:</strong> Another global star in pink would pack the stands, spike jersey sales, and further amplify the club’s global presence. Inter Miami would solidify its role as MLS’s international flagship.
            </li>
          </ol>

          <h2 className="text-xl font-semibold mt-8">But what are the risks?</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Age and fitness:</strong> At 36, Di María is no longer at his physical peak. While still impactful, MLS demands long travel, turf fields, and relentless scheduling—all tough on aging bodies.
            </li>
            <li>
              <strong>Designated Player rule:</strong> MLS clubs are allowed only three Designated Player (DP) contracts—salaries exempt from the cap. Inter Miami already uses all three (Messi, Suárez, Busquets?), meaning room would have to be made for Di María through restructuring or a trade.
            </li>
            <li>
              <strong>Short-term gain, long-term risk:</strong> Di María would likely stay for just one or two seasons. That’s a small window for a costly, high-profile signing. The club must be careful not to neglect youth development and long-term sustainability in pursuit of star power.
            </li>
          </ol>

          <h2 className="text-xl font-semibold mt-8">Context: Titles don’t come from glamour alone</h2>
          <p>
            Inter Miami is currently the MLS’s most glamorous club—but others aren’t sleeping. Teams like LAFC, Seattle Sounders, and FC Cincinnati are winning with consistency, structure, and balance.
          </p>
          <p>
            Di María might bring magic—but without a solid foundation, that magic can fade quickly.
          </p>

          <h2 className="text-xl font-semibold mt-8">Hot take:</h2>
          <p>
            Di María to Inter Miami? It feels more like a “Last Dance” with Messi than a long-term investment.
          </p>
          <p>
            But if everything clicks—the fans are in for a show.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiMariaInterMiami;
