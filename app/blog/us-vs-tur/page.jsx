import React from 'react';
import Link from 'next/link';

const USMNTvsTurkeyBlog = () => {
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
                <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
                    USMNT Scores Early but Falls to Turkey – Friendly Loss Sparks Concern
                </h1>

                <div className="mb-4">
                    <img
                        src="https://assets.goal.com/images/v3/getty-2193998658/crop/MM5DIMRUG45DEMZYHE5G433XMU5DAORSGIYQ====/GettyImages-2193998658.jpg"
                        alt="USMNT vs Turkey match"
                        className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    />
                    <div className="mt-2 text-sm text-gray-600">
                        <span>By: Mio Ristić | US11 | June 8, 2025 | Creator: CHRIS ARJOON | Credit: AFP via Getty Images | Copyright: AFP or licensors</span>
                    </div>
                    <div className='mt-4 text-center'>
                        <Link href="/teams/usa-national-team">
                        <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer"
>
  Visit USMNT
</button>
                        </Link>
                    </div>
                </div>
                

                <p className="mb-4">
                    The U.S. Men’s National Team started their rainy friendly against Turkey with a bang, as Jack McGlynn scored within the first minute. The young midfielder curled a sublime left-footed shot past Turkey’s goalkeeper Berke Özer, marking the fastest goal the U.S. has scored in a friendly since 2021. It was a promising start for a revamped squad under coach Mauricio Pochettino, who was experimenting with new players after a disappointing Nations League campaign in March.
                </p>

                <p className="mb-4">
                    However, the early lead was short-lived. Defensive lapses and inexperience quickly cost the Americans, as Turkey struck twice in quick succession — goals from Arda Güler and Kerem Aktürkoğlu came just 2 minutes and 20 seconds apart in the first half. Both goals stemmed from moments of confusion and error in the U.S. defense, highlighting growing pains in a squad featuring several newcomers.
                </p>

                <p className="mb-4">
                    Pochettino made eight changes from the previous Nations League lineup, fielding a much younger side with players like defender Alex Freeman and goalkeeper Matt Freese making their international debuts. While there were flashes of potential from these new faces, the overall cohesion was lacking. The defense struggled to organize itself against a sharp and motivated Turkish team, which pressed aggressively and capitalized on mistakes.
                </p>

                <p className="mb-4">
                    This loss marked the third consecutive defeat for the USMNT under Pochettino, adding pressure on the coach to find a winning formula ahead of the 2026 FIFA World Cup, which the U.S. will co-host. With less than a year remaining, these friendlies take on greater importance as opportunities to build chemistry and test tactical approaches.
                </p>

                <p className="mb-4">
                    Looking ahead, the U.S. will face Switzerland in another friendly match in Nashville on June 11 before opening their Concacaf Gold Cup campaign against Trinidad and Tobago on June 15. These upcoming fixtures will be crucial for Pochettino to solidify his core squad and work out defensive weaknesses exposed by Turkey.
                </p>

                <p className="mb-4">
                    While the scoreline was disappointing, the match also provided valuable insights into the team's depth and potential. The USMNT must quickly learn from these mistakes to avoid further setbacks as the World Cup approaches. This is no longer just about friendlies — it’s about building identity and resilience for the biggest stage in world football.
                </p>

                <p className="mt-10 italic text-gray-500 text-sm">
                    It’s not just about friendlies anymore — it’s about finding identity before 2026.
                </p>
            </div>
        </div>
    );
};

export default USMNTvsTurkeyBlog;
