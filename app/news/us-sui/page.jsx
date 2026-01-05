import React from 'react';
import Link from 'next/link';

const USMNTvsSwitzerlandRecap = () => {
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
                <h1 className="text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1">
                    U.S. Men's National Team Humiliated by Switzerland – A Wake-Up Call Ahead of 2026
                </h1>

                <div className="mb-4">
                    <img
                        src="https://images.supersport.com/media/ax4dr1pr/mauricio-pochettino-press-25-01-g-1200.jpg?width=1920&quality=90&format=webp"
                        alt="USMNT vs Switzerland"
                        className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    />
                    <div className="mt-2 text-sm text-gray-600">
                        <span>By: Mio Ristić | US11 | June 11, 2025 | Creator: Omar Vega | Credit: Getty Images</span>
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
                    In what was supposed to be a valuable test before the 2026 FIFA World Cup on home soil, the United States Men’s National Team delivered a performance that sent alarms ringing across the country. In front of a stunned crowd in Nashville, the USMNT collapsed in a disastrous first half, conceding four goals to a rampant Swiss side and losing 4-0 — the team’s fourth consecutive defeat and its worst home showing in decades.
                </p>

                <p className="mb-4">
                    Dan Ndoye (13’), Michel Aebischer (23’), Breel Embolo (33’), and Johan Manzambi (36’) tore through the American defense, exposing deep tactical flaws and a lack of cohesion from Mauricio Pochettino’s men. It was a night to forget — but one that cannot be ignored.
                </p>

                <h2 className="text-2xl font-semibold text-[#020617] mb-4">🛑 A First-Half Collapse of Historic Proportions</h2>
                <p className="mb-4">
                    The numbers speak volumes. The U.S. hadn’t conceded four goals in a first half since 1980 — and never before on home soil. Every defensive error was punished: Harriel was beaten on a through ball, Turner spilled a save directly into Embolo’s path, and a miscommunication between Sullivan and Berhalter gifted Manzambi a debut goal.
                </p>
                <p className="mb-4">
                    “It’s easy to judge on one game,” said veteran defender Walker Zimmerman post-match, “but we’ve come back from worse.” The reality, however, is this isn’t about one game — it’s a trend.
                </p>

                <h2 className="text-2xl font-semibold text-[#020617] mb-4">🧠 Pochettino’s Gamble Fails</h2>
                <p className="mb-4">
                    The former PSG and Spurs manager made nine changes from the team that lost 2-1 to Turkey days earlier, fielding a makeshift lineup that lacked leadership, rhythm, and experience. Christian Pulisic, Weston McKennie, Gio Reyna, and other key figures were missing — and it showed.
                </p>
                <p className="mb-4">
                    “It was my decision and the decision didn’t work,” Pochettino admitted candidly. “It’s painful. You don’t want to improve by losing games.”
                </p>

                <h2 className="text-2xl font-semibold text-[#020617] mb-4">⚠️ Growing Pains or Signs of Deeper Trouble?</h2>
                <p className="mb-4">
                    The U.S. has now lost four straight matches for the first time since 2007. The team has not beaten a European opponent in eight consecutive tries. And with the Gold Cup kicking off in days — and the World Cup just over a year away — questions are piling up.
                </p>
                <p className="mb-4">
                    Yes, it’s only a friendly. Yes, big names were missing. But the lack of urgency, poor communication, and sheer disorganization are causes for concern. You don’t expect a World Cup host nation to look this lost — especially not at home.
                </p>

                <h2 className="text-2xl font-semibold text-[#020617] mb-4">🧪 What’s Next? Redemption Starts Now</h2>
                <p className="mb-4">
                    There is no time to sulk. The Gold Cup begins against Trinidad and Tobago, followed by matches against Saudi Arabia and Haiti. Expectations are sky-high. Anything less than winning the tournament will trigger more criticism.
                </p>
                <p className="mb-4">
                    Pochettino remains defiant: “The fans will be there. I have no worries about that.”
                </p>

                <p className="mt-8 italic text-gray-500 text-sm">
                    But confidence isn’t a substitute for performance. If this group hopes to be more than just tournament hosts in 2026 — if they want to contend — the turnaround must begin now. Because on nights like this, belief starts to waver.
                </p>
            </div>
        </div>
    );
};

export default USMNTvsSwitzerlandRecap;
