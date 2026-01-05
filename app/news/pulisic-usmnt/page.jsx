import React from 'react';
import Link from 'next/link';

const PulisicGoldCupBlog = () => {
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
                <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
                    Christian Pulisic Breaks Silence: Gold Cup Absence, USMNT Loyalty & Donovan Drama
                </h1>
                <img
          src='https://nbcsports.brightspotcdn.com/dims4/default/c66b13c/2147483647/strip/false/crop/3998x2665+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fb7%2F18%2F3f8af10e4981bf8fb496e4dd26fd%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2178153810' 
          alt='Hirving Chucky Lozano scoring for San Diego FC'
          className='w-full h-[400px] object-cover rounded-lg shadow-md'
        />

                <div className="mb-4">
                    

                    <div className="mt-2 text-sm text-gray-600">
                        <span>By: Mio Ristić | US11 | June 12, 2025 | Creator: John Dorton/ISI Photos/USSF 
| 
Credit: Getty Images
Copyright: 2024 John Dorton/ISI Photos/USSF</span>
                    </div>
                    <div className='mt-4 text-center'>
                        <Link href="/teams/usa-national-team">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">
                                Visit USMNT
                            </button>
                        </Link>
                    </div>
                </div>

                <p className="mb-4">
                    In a revealing interview on CBS Sports' <em>Golazo America</em> podcast, Christian Pulisic addressed the controversy surrounding his absence from the 2025 CONCACAF Gold Cup. With critics—including USMNT legends Landon Donovan and Tim Howard—questioning his commitment, the AC Milan star finally broke his silence.
                </p>

                <p className="mb-4">
                    Pulisic explained that after a demanding season of 50+ matches across club and country, he needed time to mentally and physically recover. Although he wanted to participate in friendlies leading into the Gold Cup, the coaching staff chose to proceed with the tournament roster only. “I didn’t understand it, but I respected the decision,” he said.
                </p>

                <p className="mb-4">
                    The tension escalated when Donovan and Howard publicly criticized his decision. Pulisic didn’t mince words, calling the comments “way out of line,” particularly disappointed by Donovan, who had shown private support before changing tone publicly. “That hurt,” Pulisic admitted, revealing a sense of betrayal.
                </p>

                <p className="mb-4">
                    Despite the noise, Pulisic reiterated his full dedication to the national team and their 2026 World Cup campaign. “One good performance and people forget,” he noted with confidence, signaling his readiness to lead the squad moving forward.
                </p>

                <p className="mb-4">
                    This situation raises larger questions: how much public pressure should current players face from retired stars? Are modern players expected to sacrifice rest at all costs, or does athlete wellness take precedence in today’s game?
                </p>

                <p className="mb-4">
                    With key matches on the horizon and the 2026 World Cup looming, the focus now turns to performance, chemistry, and leadership. Pulisic made one thing clear—he's not going anywhere.
                </p>
                <iframe
                        width="100%"
                        height="400"
                        className="rounded-lg shadow-md"
                        src="https://www.youtube.com/embed/jASLOqjJKnU"
                        title="Christian Pulisic on Golazo America"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                <p className="mt-10 italic text-gray-500 text-sm">
                    It's no longer just about showing up — it's about showing strength in the face of doubt.
                </p>
                
            </div>
        </div>
    );
};

export default PulisicGoldCupBlog;
