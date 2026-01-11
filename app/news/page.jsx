

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SanDiegoLogo from '../../public/logos/San_Diego_FC_logo.svg.png';
import Us11 from '../../public/11.png';
 

const Blog = () => {
  const blogPosts = [
    {
  "id": 108,
  "title": "Chucky Lozano Will Not Be Part of San Diego FC Sporting Plans",
  "author": "Mio Ristić",
  "date": "January 10, 2026",
  "excerpt": "San Diego FC confirms Hirving “Chucky” Lozano will not be included in the club’s sporting plans, despite being the team’s second-leading scorer last season.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "chucky-lozano-san-diego-fc"
},
    {
  "id": 107,
  "title": "Aaronson Stars for Leeds, but Late Handball Costs the Visitors",
  "author": "Mio Ristić",
  "date": "January 5, 2026",
  "excerpt": "Brenden Aaronson scores twice and dominates the pitch for Leeds United, but a late handball concedes a penalty, allowing Newcastle to secure a dramatic 4-3 win at St James’ Park.",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ad29YihheEJBbsOdzkp3NkEx0JipAnWdrA&s",
  "slug": "aaronson-leeds-newcastle"
},
    {
  "id": 106,
  "title": "Leading the Charge: Brenden Aaronson Shines as Leeds Draw 1-1 with ManU",
  "author": "Mio Ristić",
  "date": "January 4, 2026",
  "excerpt": "Brenden Aaronson scores his second Premier League goal of the season to help Leeds United secure a 1-1 draw against Manchester United at Elland Road.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2180302529/crop/MM5DIOJQGY5DENZWGA5G433XMU5DENJWHIYA====/GettyImages-2180302529.jpg",
  "slug": "brenden-aaronson-leeds-manu"
},
    {
      id: 105,
      title: "MLS Transfers 2026: Biggest Moves and Roster Updates",
      author: "Mio Ristić",
      date: "January 5, 2026",
      excerpt: "A full overview of the top MLS transfers, contract extensions, and roster updates for the 2026 season, including Alladoh, Woledzi, Morgan, and more.",
      imageUrl: "https://assets.goal.com/images/v3/getty-2248300236/crop/MM5DIMJRGE5DEMZRGI5G433XMU5DAORSGE2A====/GettyImages-2248300236.jpg",
      slug: "mls-transfers-2026"
    },
    {
  "id": 104,
  "title": "Top 10 Things We Will Remember From the 2025 MLS Season",
  "author": "Mio Ristić",
  "date": "December 5, 2025",
  "excerpt": "A detailed look at the most memorable moments, transfers, and highlights from the 2025 MLS season, including Inter Miami's historic title, Rodrigo de Paula's decisive goal, and MLS stars like Messi, Son, and Thomas Müller.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2202000448/crop/MM5DEMJZGI5DCMRTGM5G433XMU5DCMJYHIZDK===/GettyImages-2202000448.jpg",
  "slug": "top-10-mls-2025"
},
    {
"id": 103,
"title": "MLS Transfers 2025/26: Biggest Moves and Roster Updates",
"author": "Mio Ristić",
"date": "December 6, 2025",
"excerpt": "A complete overview of the biggest MLS transfers, contract extensions, and roster changes ahead of the 2026 season, including Messi, Lloris, Brenner, and more.",
"imageUrl": "https://assets.goal.com/images/v3/getty-2223853224/crop/MM5DCOBQHA5DCMBRG45G433XMU5DCMZXHA5DCMBX/GettyImages-2223853224.jpg",
"slug": "mls-transfers-2025"
},
    {
"id": 102,
"title": "USMNT in Group D: Challenges and Chances for World Cup 2026",
"author": "Mio Ristić",
"date": "December 5, 2025",
"excerpt": "A deep dive into the USMNT's opponents in Group D, tactical insights, and what fans can expect in the 2026 World Cup.",
"imageUrl": "https://assets.goal.com/images/v3/blt72949e9c276641f4/crop/MM5DGOBYGE5DEMJYGM5G433XMU5DAORSGAZA====/GettyImages-2246882882.jpg",
"slug": "usa-world-cup"
},
   {
  "id": 101,
  "title": "Messi vs. Müller: The Final Chapter of a European Rivalry Arrives in MLS",
  "author": "Mio Ristić",
  "date": "December 5, 2025",
  "excerpt": "Lionel Messi and Thomas Müller face off in the 2025 MLS Cup final. Read analysis, match insights, and see how these European legends are shaping MLS history.",
   "imageUrl": "https://i.ibb.co/zVdYQrkC/Untitled-design-2.png",
  "slug": "messi-vs-muller"
},
   
    {
"id": 100,
"title": "Cristiano Ronaldo Is Coming to Atlanta: Georgia Prepares for a Football Spectacle",
"author": "Mio Ristić",
"date": "December 3, 2025",
"excerpt": "Ronaldo heads to Atlanta for the USMNT friendly against Portugal on March 31, 2026. Fans can witness one of football’s greatest players live at Mercedes-Benz Stadium.",
"imageUrl": "https://assets.goal.com/images/v3/getty-2233954657/crop/MM5DEMZTGY5DCMZRGQ5G433XMU5DEMBQG45DS===/GettyImages-2233954657.jpg?auto=webp&format=pjpg&width=3840&quality=60](https://assets.goal.com/images/v3/getty-2233954657/crop/MM5DEMZTGY5DCMZRGQ5G433XMU5DEMBQG45DS===/GettyImages-2233954657.jpg?auto=webp&format=pjpg&width=3840&quality=60",
"slug": "ronaldo-in-atlanta"
}
,
    {
  "id": 99,
  "title": "USMNT Prepares for World Cup 2026: European Giants Arrive for Friendlies",
  "author": "Mio Ristić",
  "date": "December 3, 2025",
  "excerpt": "The U.S. Men’s National Team gears up for the 2026 World Cup with high-profile friendlies against Belgium, Portugal, and Germany. Full match dates, venues, and preparation insights included.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2234693152/crop/MM5DGMRQGA5DCOBQGA5G433XMU5DGNRQHI2DK===/GettyImages-2234693152.jpg?auto=webp&format=pjpg&width=1920&quality=60",
  "slug": "usmnt-prepares-2026"
},
    {
  "id": 98,
  "title": "Finally, Countdown: Inter Miami FC vs Vancouver Whitecaps – Everything You Need to Know for the MLS Cup Final",
  "author": "Mio Ristić",
  "date": "December 1, 2025",
  "excerpt": "The stage is set for one of the most anticipated matches in MLS history: Inter Miami FC faces off against the Vancouver Whitecaps in the 2025 MLS Cup Final. Full match preview, kickoff times, and fan gear links included.",
  "imageUrl": "https://i.ibb.co/NdY7jggd/Dynamic-Soccer-Stars-in-Action.png",
  "slug": "mls-final-2025"
},
    {
  "id": 97,
  "title": "Brian White’s Brace Sends Vancouver Whitecaps to MLS Cup Final",
  "author": "Mio Ristić",
  "date": "November 29, 2025",
  "excerpt": "USMNT striker Brian White scored a first-half brace to power Vancouver Whitecaps to a 3–1 victory over San Diego FC in the MLS Western Conference Final. Full match recap, key stats, and tactical analysis.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2209348682/crop/MM5DINRQGI5DENJYHE5G433XMU5DAORSGQYA====/GettyImages-2209348682.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "san-diego-vancouver"
}
,
    {
  "id": 96,
  "title": "Inter Miami vs NYCFC: Allende Hat-Trick Sends Miami to MLS Cup Final",
  "author": "Mio Ristić",
  "date": "November 29, 2025",
  "excerpt": "Inter Miami dominate NYCFC 5–1 in the Eastern Conference Final, powered by Tadeo Allende's hat-trick and Lionel Messi's midfield mastery. Full match recap, key stats, and tactical analysis.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2218021380/crop/MM5DINJRGI5DENJTHA5G433XMU5DAORSGM2Q====/GettyImages-2218021380.jpg?width=1400&upscale=true",
  "slug": "inter-miami-vs-nycfc"
},
    {
  "id": 95,
  "title": "Brenden Aaronson and Leeds United: Is It Time to Reevaluate His Role?",
  "author": "Mio Ristić",
  "date": "November 29, 2025",
  "excerpt": "Analysis of Brenden Aaronson's role at Leeds United, reviewing his recent performances, stats, and fan reactions.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2165145829/crop/MM5DEMZZGA5DCMZUGQ5G433XMU5DEOJYHIYTGMA=/GettyImages-2165145829.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "brenden-aaronson-and-leeds"
},
    {
  "id": 94,
  "title": "Today Is the Day: Conference Finals — Who Will Reach the MLS Cup Final?",
  "author": "Mio Ristić",
  "date": "November 29, 2025",
  "excerpt": "Preview of the 2025 MLS Eastern and Western Conference Finals, featuring Inter Miami vs. NYCFC and San Diego FC vs. Vancouver Whitecaps. Full analysis and ticket links included.",
  "imageUrl": "https://i.ibb.co/Swc5SdWv/Untitled-design.png",
  "slug": "conference-finals"
}
,
    {
  "id": 93,
  "title": "Christian Pulisic Likely to Miss AC Milan vs. Lazio, Says Massimiliano Allegri",
  "author": "Mio Ristić",
  "date": "November 28, 2025",
  "excerpt": "AC Milan could be without star winger Christian Pulisic for their Serie A clash against Lazio, as Allegri prioritizes caution after the USMNT star’s recent hamstring injury.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2247574198/crop/MM5DENJXG45DCNBVGA5G433XMU5DAORRGM2A====/GettyImages-2247574198.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "pulisic-likely-miss-ac-milan-lazio"
},
    {
  "id": 92,
  "title": "San Diego FC Edges Minnesota in a Fierce 1–0 Battle to Reach Western Conference Final in Their Debut MLS Season",
  "author": "Mio Ristić",
  "date": "November 26, 2025",
  "excerpt": "San Diego FC defeated Minnesota United 1–0 in an intense, physical playoff battle, advancing to the Western Conference Final in their debut MLS season.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2216643330/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216643330.jpg?width=1400&upscale=true",
  "slug": "san-diego-minnesota"
},
    {
  "id": 91,
  "title": "Inter Miami Dominates Without Suárez: Messi Leads, Silvetti and Allende Shine in Historic Win vs Cincinnati",
  "author": "Mio Ristić",
  "date": "November 24, 2025",
  "excerpt": "Inter Miami defeated FC Cincinnati 4–0 to reach the MLS Eastern Conference Final for the first time, highlighting Messi’s brilliance and the impact of Silvetti and Allende without Suárez.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2248121981/crop/MM5DIMRQGI5DEMZWGQ5G433XMU5DAORSGE4Q====/GettyImages-2248121981.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "inter-miami-cincinnati"
},
    {
  "id": 90,
  "title": "Christian Pulisic Delivers in the Derby: Why AC Milan’s American Star Is Becoming Their Go-To Leader",
  "author": "Mio Ristić",
  "date": "November 24, 2025",
  "excerpt": "Christian Pulisic starred in the Derby della Madonnina, helping AC Milan secure a crucial 1-0 victory over Inter with his decisive goal and leadership.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2248113240/crop/MM5DCNJQGQ5DQNBWHJXG653FHI2DIMJ2G4ZA====/GettyImages-2248113240.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "pulisic-inter-milan"
}
,
    {
  "id": 89,
  "title": "Vancouver Whitecaps Stun LAFC in Dramatic Penalty Shootout",
  "author": "Mio Ristić",
  "date": "November 22, 2025",
  "excerpt": "Vancouver Whitecaps defeated LAFC in the 2025 MLS Western Conference Semifinals after 120 minutes and a dramatic penalty shootout.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2248017867/crop/MM5DEOJRGI5DCNRTHA5G433XMU5DCMRWGM5DENJR/GettyImages-2248017867.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "whitecaps-stun-lafc"
}
,
    {
  "id": 88,
  "title": "Pittsburgh Win USL Championship After Dramatic Penalty Shootout",
  "author": "Mio Ristić",
  "date": "November 22, 2025",
  "excerpt": "Pittsburgh Riverhounds claimed their first USL Championship title after a tense 120-minute battle and a decisive 5–3 penalty shootout win over FC Tulsa.",
  "imageUrl": "https://the18.com/sites/default/files/feature-images/GettyImages-1258549217.jpg",
  "slug": "usl-champions"
}
,
    
    {
  "id": 87,
  "title": "Mauricio Pochettino’s USMNT: Momentum, Identity, and Cautious Optimism",
  "author": "Mio Ristić",
  "date": "November 21, 2025",
  "excerpt": "The USMNT is on the rise under Mauricio Pochettino, showing tactical structure, emerging young leaders, and a path toward the 2026 World Cup with measured optimism.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-1185973972/crop/MM5DEMZTGQ5DCMZRGM5G433XMU5DENRTHI3TQ===/GettyImages-1185973972.jpg?auto=webp&format=pjpg&width=1920&quality=60",
  "slug": "mauricio-pochettinos-usmnt"
},
    {
  "id": 86,
  "title": "One Knoxville Shock the League: A Title Win That Changes Everything",
  "author": "Mio Ristić",
  "date": "November 14, 2025",
  "excerpt": "One Knoxville SC claimed their first USL League One title in style, dominating Spokane 2–0. Here’s how they did it and what it means for the league.",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/USL_League_One_abbr_light_logo.svg/1920px-USL_League_One_abbr_light_logo.svg.png",
  "slug": "usl-one-champions"
}
,
    {
  "id": 85,
  "title": "Why Everyone’s Talking About the USMNT vs Paraguay Brawl",
  "author": "Mio Ristić",
  "date": "November 17, 2025",
  "excerpt": "The USMNT vs Paraguay friendly ended in a dramatic bench-clearing brawl. Here’s what really happened and what it reveals about the team under Pochettino.",
  "imageUrl": "https://assets.goal.com/images/v3/blt19784dca8a91db2a/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2246884471.jpg?auto=webp&format=pjpg&width=1920&quality=60",
  "slug": "us-paraguay-brawl"
}
,
    {
  "id": 84,
  "title": "USMNT Gains Momentum Under Pochettino Ahead of 2026 World Cup",
  "author": "Mio Ristić",
  "date": "November 17, 2025",
  "excerpt": "Mauricio Pochettino is shaping the USMNT with tactical maturity, defined roles, and clear playing style, as the team prepares for friendlies against Paraguay and Uruguay.",
  "imageUrl": "https://assets.goal.com/images/v3/blt4724cfaf9e2f7ee3/crop/MM5DCNZTGQ5DSNZVHJXG653FHI4TAORQ/poch-point169.jpeg?auto=webp&format=pjpg&width=1920&quality=60",
  "slug": "pochettino-usmnt-analysis"
},
    {
  "id": 83,
  "title": "MLS Moves to Global Calendar: Summer-to-Spring Season Starts in 2027",
  "author": "Mio Ristić",
  "date": "November 14, 2025",
  "excerpt": "Major League Soccer (MLS) shifts to a July–May season starting in 2027, aligning with top leagues worldwide, boosting transfers, player development, and fan engagement.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2240501357/crop/MM5DINRYGQ5DENRTGU5G433XMU5DAORSGQ2A====/GettyImages-2240501357.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "mls-new-format"
},
    {
  "id": 82,
  "title": "Major League Soccer Coming to Apple TV in 2026",
  "author": "Mio Ristić",
  "date": "November 14, 2025",
  "excerpt": "Starting in 2026, all MLS matches will stream on Apple TV at no additional cost, giving fans a single platform for every match, including playoffs and the All-Star Game.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2201986577/crop/MM5DEMRVGA5DCMRWGY5G433XMU5DAORRGE3Q====/GettyImages-2201986577.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "apple-tv"
}
,
    {
  "id": 81,
  "title": "Timmy Tillman Called Up to USMNT as Pochettino Adjusts Roster",
  "author": "Mio Ristić",
  "date": "November 12, 2025",
  "excerpt": "LAFC midfielder Timmy Tillman joins the USMNT as Mauricio Pochettino updates his roster ahead of friendlies against Paraguay and Uruguay.",
  "imageUrl": "https://assets.goal.com/images/v3/bltf367b68cbbc7f98e/poch2.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "timmy-tillman-usmnt-call-up"
},
    {
  "id": 80,
  "title": "MLS Playoffs Format: Is It Time for a Change?",
  "author": "Mio Ristić",
  "date": "November 10, 2025",
  "excerpt": "A critical analysis of the MLS Playoffs format, exploring current issues, main criticisms, and possible solutions for a more competitive postseason.",
  "imageUrl": "https://images.squarespace-cdn.com/content/v1/5c9a73454d87117017c01508/1686249453251-OXCODUQ3QUF79G4L38GW/525050.jpg",
  "slug": "mls-playoffs-format"
},

    {
  "id": 79,
  "title": "MLS Playoffs 2025: The Final Eight — Drama, Stars, and Glory Await",
  "author": "Mio Ristić",
  "date": "November 10, 2025",
  "excerpt": "Full preview of the 2025 MLS Cup Playoffs — key matchups, players, and predictions for Inter Miami, Philadelphia Union, LAFC, and others.",
  "imageUrl": "https://www.365scores.com/es/news/wp-content/uploads/2025/07/GettyImages-1892797976-1024x694.jpg",
  "slug": "mls-playoffs-2025-preview"
}
,
    {
  "id": 78,
  "title": "MLS Cup Playoffs 2025 – Second Leg Recap: Inter Miami, Philadelphia, San Diego & More",
  "author": "Mio Ristić",
  "date": "November 2, 2025",
  "excerpt": "Full recap of the second leg of the 2025 MLS Cup Playoffs, including highlights, scores, and standout performances from Inter Miami, Philadelphia Union, San Diego FC, and others.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-1469812350/crop/MM5DIMBUHA5DEMRXG45G433XMU5DENJQHIZDKNY=/GettyImages-1469812350.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "mls-cup-playoffs-2025-second-leg"
},
    {
  "id": 77,
  "title": "MLS Playoffs 2025 Recap: Inter Miami, Philadelphia, San Diego & More",
  "author": "Mio Ristić",
  "date": "October 30, 2025",
  "excerpt": "Full recap of the first round of the 2025 MLS Playoffs, including highlights, scores, and standout performances from Inter Miami, Philadelphia Union, San Diego FC, and more.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2243553938/crop/MM5DGMBWGQ5DCNZSGQ5G433XMU5DAORRGU4Q====/GettyImages-2243553938.jpg",
  "slug": "playoffs-2025-recap"
},
    {
  "id": 76,
  "title": "Inter Miami Cruise Past Nashville in Dominant Playoff Victory",
  "author": "Mio Ristić",
  "date": "October 25, 2025",
  "excerpt": "Lionel Messi led Inter Miami CF to a commanding 3–1 playoff win over Nashville SC in the Audi 2025 MLS Cup Playoffs. Read the full recap, goals, and highlights on US11.",
  "imageUrl": "https://brobible.com/wp-content/uploads/2023/08/lionel-messi-taking-a-corner-kick-for-inter-miami.jpg",
  "slug": "inter-miami-nashville"
},

    {
  "id": 75,
  "title": "Lionel Messi Extends Inter Miami Contract Through 2028",
  "author": "Mio Ristić",
  "date": "October 25, 2025",
  "excerpt": "Lionel Messi stays with Inter Miami CF until 2028, continuing his legendary MLS career. Read the full story and what to expect in Miami.",
  "imageUrl": "https://cyprus-mail.com/image/s1100x733/fill/webp/path/wp-content/uploads/2023/07/messi.jpg",
  "slug": "messi-inter-miami-extension"
},
    {
  "id": 74,
  "title": "Portland Timbers & Felipe Mora Get Groove Back in Wild Card Win",
  "author": "Mio Ristić",
  "date": "October 23, 2025",
  "excerpt": "Felipe Mora’s brace powered Portland Timbers past Real Salt Lake 3–1 in the 2025 MLS Wild Card match. Read the full playoff recap on US11.",
  "imageUrl": "https://cloudfront-us-east-1.images.arcpublishing.com/prisachile/IDRGQPSWNJAULE3CHLPZVD3FGM.jpg",
  "slug": "portland-real-playoffs"
},
    
{
  "id": 73,
  "title": "Chicago Fire Blaze Past Orlando in Wild Card Clash",
  "author": "Mio Ristić",
  "date": "October 23, 2025",
  "excerpt": "Chicago Fire defeated Orlando City 3–1 in the 2025 MLS Wild Card match, with Brian Gutiérrez and Hugo Cuypers leading the charge. Read the full match report on US11.",
  "imageUrl": "https://cdn.wsn.com/filters:format(webp)/filters:no_upscale()/fit-in/1200x585/1745997572/chicago-fire-fc-vs-orlando-city-sc-2025-05-03.jpg",
  "slug": "chicago-orlando-playoffs"
}
,
    {
  "id": 71,
  "title": "LA Force Crowned NISA Pro Cup Champions 2025",
  "author": "Mio Ristić",
  "date": "October 21, 2025",
  "excerpt": "LA Force defeated Capo FC 4–1 after extra time to win the 2025 NISA Pro Cup. Joel Quist starred with two goals, and Bryan Ortega sealed the victory in the 120th minute.",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/NISA_logo_black_2022.png",
  "slug": "nisa-champions"
},

    {
  "id": 70,
  "title": "Audi 2025 MLS Cup Playoffs: Wild Card & Round One Matchups Preview",
  "author": "Mio Ristić",
  "date": "October 20, 2025",
  "excerpt": "The Audi 2025 MLS Cup Playoffs are underway, featuring 18 teams, thrilling matchups, and top-tier talent. Explore the Wild Card showdowns, Round One series, and key players to watch.",
  "imageUrl": "https://www.365scores.com/news/wp-content/uploads/2024/10/GettyImages-2148556804-780x470.jpg",
  "slug": "mls-playoff-2025"
},
    {
  "id": 69,
  "title": "Capo FC and Los Angeles Force Secure Spots in NISA Pro Cup Final",
  "author": "Mio Ristić",
  "date": "October 19, 2025",
  "excerpt": "Capo FC and Los Angeles Force advanced to the 2025 NISA Pro Cup Championship Final after dominant semifinal performances, showcasing tactical discipline and key goals.",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/NISA_logo_black_2022.png",
  "slug": "nisa"
},
    {
  "id": 68,
  "title": "USMNT 2–1 Australia: Wright’s Brace, Pulisic’s Return, and a Fiery Colorado Atmosphere",
  "author": "Mio Ristić",
  "date": "October 15, 2025",
  "excerpt": "Haji Wright scored twice as the USMNT defeated Australia 2–1 in Colorado. Christian Pulisic returned to the pitch, and the packed stadium brought an unforgettable atmosphere.",
  "imageUrl": "https://assets.goal.com/images/v3/blt580bb7c6f26a8ef1/weah.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "usmnt-aus"
},

    {
  "id": 67,
  "title": "A New Era for the USMNT Under Pochettino: Bold Tactics, New Faces, and a Clear Direction",
  "author": "Mio Ristić",
  "date": "October 8, 2025",
  "excerpt": "The USMNT is entering a new chapter under Mauricio Pochettino with bold tactics, young players, and a clear vision for the future.",
  "imageUrl": "https://assets.goal.com/images/v3/blt024caa907a00f79e/balogun3.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "usmnt-ecuador"
},


    {
  "id": 66,
  "title": "LaLiga 2025: Barcelona vs Villarreal Historic Match in Miami",
  "author": "Mio Ristic",
  "date": "October 8, 2025",
  "excerpt": "Barcelona will face Villarreal in a historic LaLiga fixture in Miami — the first regular-season match from a top European league played in the U.S. Discover why Miami was chosen and reactions from clubs, players, and fans.",
  "imageUrl": "https://www.japantimes.co.jp/japantimes/uploads/images/2025/05/28/471879.JPG",
  "slug": "la-liga-miami-blog"
}
,
    {
  "id": 65,
  "title": "MLS 2025: Qualified Teams for the Audi MLS Cup Playoffs",
  "author": "Mio Ristic",
  "date": "October 6, 2025",
  "excerpt": "Discover all teams qualified for the 2025 Audi MLS Cup Playoffs — including the full list by conference, playoff format, key dates, and Decision Day schedule.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2227050537/crop/MM5DGMZSHA5DCOBXGI5G433XMU5DEMJYHIZDEMY=/GettyImages-2227050537.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "mls-2025-playoffs-blog"
},
    {
  "id": 64,
  "title": "MLS 2025: Teams Eliminated from Audi MLS Cup Playoffs",
  "author": "Mio Ristic",
  "date": "October 4, 2025",
  "excerpt": "Check out which MLS teams have been eliminated from the Audi 2025 MLS Cup Playoffs before Decision Day — full breakdown by conference and playoff implications.",
  "imageUrl": "https://cdn.wsn.com/filters:format(webp)/filters:no_upscale()/fit-in/1200x585/1752735435/los-angeles-fc-vs-la-galaxy-2025-07-19.jpg",
  "slug": "mls-eliminated-2025"
},
    {
      "id": 63,
      "title": "US Players in the Champions League 2025/26: Rising Stars to Watch",
      "author": "US11 FC",
      "date": "September 19, 2025",
      "excerpt": "Discover the top American players competing in the Champions League 2025/26 – from Weston McKennie to Cole Campbell. Profiles, clubs, positions, and key stats.",
      "imageUrl": 'https://assets.goal.com/images/v3/getty-2217021422/crop/MM5DGOJSGA5DEMRQGU5G433XMU5DIMJUHI4DG===/GettyImages-2217021422.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      "slug": "us-champions-league-2025"
    },    
    {
      "id": 62,
      "title": "Sounders FC Back in MLS Action: Ferreira Breaks Records in 2-2 Draw with LA Galaxy",
      "author": "US11 FC",
      "date": "September 14, 2025",
      "excerpt": "Seattle Sounders FC returned to MLS play with a 2-2 draw against LA Galaxy. Jesús Ferreira breaks MLS records, Danny Musovski shines, and returning stars Rusnák and Morris impact the game.",
      "imageUrl": "https://assets.goal.com/images/v3/getty-2202323865/crop/MM5DGOBZHE5DEMJZGM5G433XMU5DAORSGAZQ====/GettyImages-2202323865.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      "slug": "sounders-galaxy"
    },    
    {
      "id": 61,
      "title": "Müller Brings Munich Mentality to Vancouver: Birthday Hat Trick Seals 7-0 Rout",
      "author": "Mio Ristić",
      "date": "September 14, 2025",
      "excerpt": "On his 36th birthday, Thomas Müller dominated Philadelphia Union, scoring two penalties, a header, and providing a brilliant assist in Vancouver Whitecaps’ 7-0 MLS rout.",
      "imageUrl": "https://assets.goal.com/images/v3/blt61efb9f3489abfbe/crop/MM5DENBZGY5DCNBQGQ5G433XMU5DCMJRHI3TG===/GettyImages-2235288255.jpg?auto=webp&format=pjpg&width=1920&quality=60",
      "slug": "muller-vancouver"
    },
    {
      "id": 60,
      "title": "USMNT 2–0 Japan: Pochettino’s First Step Toward Stability?",
      "author": "Mio Ristić",
      "date": "September 10, 2025",
      "excerpt": "USMNT ended their seven-game winless streak with a 2-0 victory over Japan in Columbus. Zendejas and Balogun scored, Pulisic shined, and Freese impressed in goal. Could this be Pochettino’s springboard for consistency?",
      "imageUrl": "https://assets.goal.com/images/v3/getty-2234598796/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2234598796.jpg?auto=webp&format=pjpg&width=1920&quality=60",
      "slug": "usmnt-japan"
    },    
    {
      "id": 59,
      "title": "MLS Third Kit 2025: Retro Jerseys You Need in Your Collection",
      "author": "Mio Ristić",
      "date": "September 9, 2025",
      "excerpt": "Discover the best MLS third kits of 2025 – retro-inspired jerseys from Inter Miami, Seattle Sounders, LAFC, Columbus Crew, and more. Perfect for fans and collectors.",
      "imageUrl": "https://www.mlsstore.com/content/ws/all/0c171420-bd12-42f9-9806-1480b7ee4367__548X893.jpg?w=548",
      "slug": "mls-third-kit-2025"
    },
    {
      "id": 58,
      "title": "USMNT Warning: Defeat to South Korea Exposes Serious Problems Ahead of 2026 World Cup",
      "author": "Mio Ristic",
      "date": "September 7, 2025",
      "excerpt": "Son Heung-Min led South Korea to a 2-0 victory over the USMNT in New Jersey, raising fresh concerns about Mauricio Pochettino’s squad ahead of the 2026 World Cup.",
      "imageUrl": "https://s.yimg.com/os/creatr-uploaded-images/2025-09/976007e0-8b6b-11f0-bfbb-b88058d464f7",
      "slug": "us-korea"
    },
    {
      "id": 57,
      "title": "Seattle Runs Over Inter Miami: A Leagues Cup Night to Remember",
      "author": "Mio Ristic",
      "date": "August 31, 2025",
      "excerpt": "Seattle Sounders dominate Inter Miami 3-0 in the 2025 Leagues Cup final, showcasing teamwork over star power. Full recap, goals, and awards inside.",
      "imageUrl": "https://cloudfront-us-east-1.images.arcpublishing.com/leadersgroup/UNPIXKTAEVBB3HJWDGSPYQFOMA.jpg",
      "slug": "seattle-inter-miami-recap"
    },    
    {
      "id": 56,
      "title": "Inter Miami vs Seattle Sounders: Leagues Cup Final 2025 Preview & Tickets",
      "author": "Mio Ristic",
      "date": "August 30, 2025",
      "excerpt": "Lionel Messi leads Inter Miami against Seattle Sounders in the 2025 Leagues Cup Final at Lumen Field. Preview, key details, and ticket info inside.",
      "imageUrl": "https://brila.net/wp-content/uploads/2025/08/Lionel-Messi.jpg",
      "slug": "inter-miami-seattle-blog"
    },    
    {
      "id": 55,
      "title": "Paxten Aaronson: Great Move or Risky Step?",
      "author": "Mio Ristic",
      "date": "August 26, 2025",
      "excerpt": "Paxten Aaronson, one of MLS’s brightest young talents, returns from Europe to join Colorado Rapids. Is this a smart career reset or a risky step back?",
      "imageUrl": "https://assets.goal.com/images/v3/getty-2164041397/crop/MM5DGNRUHA5DEMBVGI5G433XMU5DCOJQHIYA====/GettyImages-2164041397.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      "slug": "paxten-aaronson-blog"
    },
    {
      "id": 54,
      "title": "Athletic Club Boise Set to Debut in USL League One",
      "author": "Mio Ristic",
      "date": "August 26, 2025",
      "excerpt": "Idaho’s first professional men’s soccer team, Athletic Club Boise, is preparing to make its debut in USL League One, representing the city and state with pride.",
      "imageUrl": "https://cdn1.sportngin.com/attachments/photo/6128-211830812/Crest-Reveal-Video-Thumbnail_large.png",
      "slug": "athletic-boise"
    },
    {
      "id": 53,
      "title": "Thomas Müller to Vancouver Whitecaps? A Bold MLS Move on the Horizon",
      "author": "Mio Ristic",
      "date": "August 3, 2025",
      "excerpt": "Bayern Munich legend Thomas Müller is rumored to join the Vancouver Whitecaps. Could this move shake up MLS and boost Canadian soccer?",
      "imageUrl": "https://cdn.vox-cdn.com/uploads/chorus_asset/file/25539754/2160081112.jpg",
      "slug": "muller-blog"
    },
    {
      "id": 52,
      "title": "Rodrigo De Paul Joins Inter Miami: MLS Dream Team Incoming?",
      "author": "Mio Ristic",
      "date": "August 3, 2025",
      "excerpt": "Rodrigo De Paul signs with Inter Miami, joining Messi, Busquets, and Alba. Is this the most star-packed team in MLS history? Find out what this move means for the league.",
      "imageUrl": "https://assets.goal.com/images/v3/getty-2227792192/crop/MM5DCOBUGA5DCMBTGU5G433XMU5DCMRRGU5DENBX/GettyImages-2227792192.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      "slug": "de-paul-inter-blog"
    },
    {
      "id": 51,
      "title": "Get 25% Off MLS Gear with This Promo Code",
      "author": "Mio Ristic",
      "date": "July 25, 2025",
      "excerpt": "Limited time offer: Save 25% on select MLS gear using promo code 25MLS at checkout. Don’t miss out!",
      "imageUrl": "https://www.mlsstore.com/content/ws/all/1f418ebe-8a12-4321-b98f-b96446a0b0cd__1200X890.jpg?w=1200",
      "slug": "mls-promo-blog"
    },    
    {
      "id": 50,
      "title": "Buy Tickets: Inter Miami CF vs Paris Saint-Germain – FIFA Club World Cup 2025 Knockout Clash",
      "author": "Mio Ristic",
      "date": "June 24, 2025",
      "excerpt": "Secure your seats for the high-stakes Round of 16 matchup between Inter Miami and PSG at the FIFA Club World Cup 2025. Watch Messi face his former club live in Atlanta.",
      "imageUrl": "https://www.observerbd.com/2025/06/25/ob_1750825385.jpg",
      "slug": "inter-miami-psg-tickets"
    },
    {
      "id": 49,
      "title": "Inter Miami CF Draws With Palmeiras, Secures Group Stage Qualification at FIFA Club World Cup 2025",
      "author": "Mio Ristic",
      "date": "June 24, 2025",
      "excerpt": "Inter Miami drew 2-2 with Palmeiras to secure progression to the knockout stages of the FIFA Club World Cup 2025, marking a milestone moment for MLS.",
      "imageUrl": "https://assets.goal.com/images/v3/getty-2221130245/crop/MM5DENBTGQ5DCMZWHE5G433XMU5DMMJYHIYTAMI=/GettyImages-2221130245.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      "slug": "inter-miami-palmeiras"
    },
    {
      "id": 48,
      "title": "Heart Over Power: Seattle Fall 2–0 to Ruthless PSG",
      "author": "Mio Ristic",
      "date": "June 23, 2025",
      "excerpt": "Seattle Sounders face a crucial match against Paris Saint-Germain with hopes to keep their FIFA Club World Cup dreams alive in a high-stakes Group B battle.",
      "imageUrl": "https://bad-dawgsports.com/wp-content/uploads/2025/06/2221741605.jpg",
      "slug": "seattle-psg"
    },
    {
      "id": 47,
      "title": "LAFC’s Club World Cup Dream Ends After Narrow Defeat to Espérance",
      "author": "Mio Ristic",
      "date": "June 21, 2025",
      "excerpt": "Los Angeles FC’s Club World Cup campaign ended with a 1-0 loss to Espérance de Tunis, despite chances created, the MLS side exits Group D without points.",
      "imageUrl": "https://assets.goal.com/images/v3/getty-2221219014/crop/MM5DEMZVGU5DCMZSGU5G433XMU5DAORRGI2A====/GettyImages-2221219014.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      "slug": "lafc-esperance"
    },    
    {
      "id": 46,
      "title": "Obed Vargas Meets Griezmann: A Dream Fulfilled at the Club World Cup",
      "author": "Mio Ristic",
      "date": "June 20, 2025",
      "excerpt": "Seattle’s rising star Obed Vargas shared a heartfelt post-match moment with Antoine Griezmann after their Club World Cup clash — a dream come true for the young midfielder.",
      "imageUrl": "https://assets.goal.com/images/v3/getty-2207507396/crop/MM5DENZXHA5DCNJWGM5G433XMU5DAORRGQ2Q====/GettyImages-2207507396.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      "slug": "vargas-griezmann-moment"
    },
    {
      "id": 45,
      "title": "Barrios Brace Boosts Atlético, but Seattle Go Down Fighting",
      "author": "Mio Ristic",
      "date": "June 20, 2025",
      "excerpt": "Atlético Madrid secured a 3–1 victory over Seattle Sounders thanks to Pablo Barrios’ brace and Axel Witsel’s header, but Seattle showed great spirit in the FIFA Club World Cup Group B battle.",
      "imageUrl": "https://motorcyclesports.net/wp-content/uploads/2025/06/2025-06-19T224853Z_862657799_UP1EL6J1RDGKI_RTRMADP_3_SOCCER-CLUB-SEA-ATM-scaled.jpg",
      "slug": "seattle-atletico",
    },
    {
      "id": 44,
      "title": "Inter Miami Silence the Doubters: Messi and Segovia Lift Club Past Porto",
      "author": "Mio Ristić",
      "date": "June 19, 2025",
      "excerpt": "Inter Miami came from behind to beat FC Porto 2-1 in a thrilling FIFA Club World Cup Group A clash, keeping their knockout hopes alive.",
      "imageUrl": "https://assets.goal.com/images/v3/getty-2220981929/crop/MM5DGNBTHE5DCOJTGQ5G433XMU5DAORRG43Q====/GettyImages-2220981929.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      "slug": "inter-miami-porto"
    },
    {
      "id": 43,
      "title": "Chelsea vs LAFC Recap – Maresca’s Side Opens Club World Cup with Confidence",
      "author": "Mio Ristić",
      "date": "June 17, 2025",
      "excerpt": "Chelsea defeated LAFC 2-0 in their Club World Cup opener in Atlanta. Despite thousands of empty seats, Delap impressed on debut while LAFC showed grit.",
      "imageUrl": "https://media.freemalaysiatoday.com/wp-content/uploads/2025/06/ce61bd72-chelsea.jpg",
      "slug": "chelsea-lafc"
    },
    {
      "id": 42,
      "title": "Seattle Sounders vs Botafogo Recap – Heart and Grit in Club World Cup Debut",
      "author": "Mio Ristić",
      "date": "June 16, 2025",
      "excerpt": "Seattle Sounders fought bravely but fell 2-1 to Botafogo in their FIFA Club World Cup opener. De la Vega had an excellent chance to score.",
      "imageUrl": "https://assets.goal.com/images/v3/getty-2220334930/crop/MM5DENZVGU5DCNJVGA5G433XMU5DGMBVHI3DE===/GettyImages-2220334930.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      "slug": "seattle-botafogo"
    },
    {
      "id": 41,
      "title": "Inter Miami 2025 \"Riptide\" Jersey – The Wave You Don’t Want to Miss",
      "author": "Mio Ristić",
      "date": "June 14, 2025",
      "excerpt": "Discover the bold new Inter Miami 2025 Riptide Third Kit inspired by Miami Blue waves and Messi’s magic. Official jersey, gear, and where to buy.",
      "imageUrl": "https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/mls/cw1sc4jlftyqxpshxuk5.jpg",
      "slug": "inter-blue-kit"
    },
    {
      "id": 40,
      "title": "Christian Pulisic Breaks Silence: Gold Cup Absence, USMNT Loyalty & Donovan Drama",
      "author": "Mio Ristic",
      "date": "June 12, 2025",
      "excerpt": "Christian Pulisic opens up on Golazo America about his Gold Cup decision, his commitment to the USMNT, and claps back at Landon Donovan’s recent comments.",
      "imageUrl": "https://nbcsports.brightspotcdn.com/dims4/default/c66b13c/2147483647/strip/false/crop/3998x2665+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fb7%2F18%2F3f8af10e4981bf8fb496e4dd26fd%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2178153810",
      "slug": "pulisic-usmnt"
    },    
    {
      "id": 39,
      "title": "U.S. Men's National Team Humiliated by Switzerland | Friendly Recap",
      "author": "Mio Ristic",
      "date": "June 11, 2025",
      "excerpt": "A disastrous first half saw the U.S. Men's National Team concede four goals to Switzerland in Nashville. Can Pochettino’s men recover in time for the Gold Cup and World Cup?",
      "imageUrl": "https://images.supersport.com/media/ax4dr1pr/mauricio-pochettino-press-25-01-g-1200.jpg?width=1920&quality=90&format=webp",
      "slug": "us-sui"
    },
    {
      "id": 38,
      "title": "Inter Miami: Can Messi's Team Live Up to the Hype? | 2025 FIFA Club World Cup",
      "author": "Mio Ristic",
      "date": "Jun 9, 2025",
      "excerpt": "Messi, Suárez, and Busquets lead Inter Miami into a tough Club World Cup group with Palmeiras, Porto, and Al Ahly. Can they survive and inspire?",
      "imageUrl": "https://assets.goal.com/images/v3/getty-2216908159/crop/MM5DENJSHA5DCNBSGI5G433XMU5DMMZUHIZDMNY=/GettyImages-2216908159.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      "slug": "inter-miami-wc"
    },
    {
      "id": 37,
      "title": "Jamie Vardy & MLS Rumors: Why a Move Looks Less Likely",
      "author": "Mio Ristic",
      "date": "Jun 8, 2025",
      "excerpt": "Despite interest from Charlotte FC and MLS clubs, Jamie Vardy’s future looks more Europe-bound, with Rangers FC emerging as a top contender.",
      "imageUrl": "https://assets.goal.com/images/v3/blt441143863bcbc649/2.jpg",
      "slug": "vardy-mls"
    },  
    {
      "id": 36,
      "title": "USMNT Scores Early but Falls to Turkey – Friendly Loss Sparks Concern",
      "author": "Mio Ristic",
      "date": "Jun 8, 2025",
      "excerpt": "Despite Jack McGlynn's early strike, the USMNT suffered a 2-1 defeat to Turkey, raising concerns ahead of the Gold Cup.",
      "imageUrl": "https://assets.goal.com/images/v3/getty-2193998658/crop/MM5DIMRUG45DEMZYHE5G433XMU5DAORSGIYQ====/GettyImages-2193998658.jpg",
      "slug": "us-vs-tur"
    },    
    {
      "id": 35,
      "title": "LA Galaxy End Winless Streak with 2-0 Victory Over Real Salt Lake",
      "author": "Mio Ristić",
      "date": "Jun 5, 2025",
      "excerpt": "After 16 matches without a win, LA Galaxy finally breaks their streak with a 2-0 home win against Real Salt Lake, sparking hope for a comeback.",
      "imageUrl": "https://energynews.rs/sites/energynews.rs/files/styles/large/public/content/images/2025-06/shutterstock_2499244741.jpg.webp?itok=djdfZ-lO",
      "slug": "galaxy-first-win"
    },    
    {
      id: 34,
      title: "Seattle Sounders vs. the Giants – Mission Impossible?",
      author: "Mio Ristic",
      date: "Jun 4, 2025",
      excerpt: "Seattle Sounders face Botafogo, Atlético Madrid, and PSG in a brutal Club World Cup group. Can the MLS side defy the odds?",
      imageUrl: "https://assets.goal.com/images/v3/getty-2204038021/crop/MM5DGOJYG45DEMRUGM5G433XMU5DAORSGA4A====/GettyImages-2204038021.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      slug: "seattle-sounders-vs-the-giants"
    },    
    {
      id: 33,
      title: "Benny Feilhaber Joins Oakland Roots as Head Coach",
      author: "Mio Ristic",
      date: "Jun 3, 2025",
      excerpt: "Oakland Roots appoint Benny Feilhaber as new head coach to turn around their 2025 USL Championship season.",
      imageUrl: "https://nbcsports.brightspotcdn.com/dims4/default/ffca0a4/2147483647/strip/false/crop/594x334+0+38/resize/1200x675!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Ff8%2F3a%2Fb5cd3855315c7e9b985262a12b2b%2Fgettyimages-74382598.jpg",
      slug: "benny_feilhaber_joins_oakland_roots",
    },
    {
      id: 32,
      title: "Rodríguez to Inter Miami – A Move Full of Promise?",
      author: "Mio Ristic",
      date: "Jun 2, 2025",
      excerpt: "Inter Miami continues to dream big.",
      imageUrl: "https://assets.goal.com/images/v3/getty-2210154915/crop/MM5DGMRQGA5DCOBQGA5G433XMU5DGNRYHIYTEMQ=/GettyImages-2210154915.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      slug: "brian-rodriguez-inter-miami",
    },
    {
      id: 31,
      title: "Cruz Azul Crushes Vancouver Whitecaps 5-0 to Win Record-Tying 7th Concacaf Title",
      author: "Mio Ristic",
      date: "Jun 2, 2025",
      excerpt: "Cruz Azul delivered one of the most dominant performances in Concacaf history, dismantling Vancouver Whitecaps 5-0 in the 2025 Champions Cup final.",
      imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/7DHMANO6LVHYLD5H4TUGDZTUS4.jpg",
      slug: "cruz-azul-win",
    },
    {
      id: 30,
      title: "Cruz Azul vs Vancouver Whitecaps: Historic Night Awaits Canadian Club in Concacaf Champions Cup Final",
      author: "Mio Ristic",
      date: "Jun 1, 2025",
      excerpt: "Since joining MLS in 2011, Vancouver has steadily grown but never before reached this continental final.",
      imageUrl: "https://assets.goal.com/images/v3/getty-2202919913/crop/MM5DGMJUGM5DCNZWHA5G433XMU5DAORRGY2A====/GettyImages-2202919913.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      slug: "cruz-azul-vs-vancouver-whitecaps",
    },
    {
      id: 29,
      title: "MLS Roundup: Messi Shines, San Diego Surges, and DC United Stuns Cincinnati",
      author: "Mio Ristic",
      date: "May 31, 2025",
      excerpt: "Major League Soccer's latest matchday was packed with drama, brilliance, and shifting momentum across both conferences.",
      imageUrl: "https://cdn1.intermiami.news/uploads/52/2024/12/GettyImages-1884518040-scaled.jpg",
      slug: "mls-round-recap-2",
    },
    {
      id: 28,
      title: "Obed Vargas: The Future of MLS",
      author: "Mio Ristic",
      date: "May 31, 2025",
      excerpt: "From Alaska to the Club World Cup: Obed Vargas Is MLS’s Brightest Young Star.",
      imageUrl: "https://sports.mynorthwest.com/wp-content/uploads/2024/04/Obed-Vargas-plays-for-the-Seattle-Sounders-ball-on-ground-Getty-900.jpg",
      slug: "obed-vargas-heart",
    },  
    {
      id: 27,
      title: "USL Is Building the Future of American Soccer",
      author: "Mio Ristic",
      date: "May 30, 2025",
      excerpt: "In a world of fleeting hype, USL builds lasting success through vision, community, and sustainable growth in American soccer.",
      imageUrl: "https://the18.com/sites/default/files/feature-images/GettyImages-1258549217.jpg",
      slug: "usl-future",
    },    
    {
      id: 26,
      title: "MLS Round Recap: 13 Matches, 1 Night, Pure Chaos",
      author: "Mio 29, Ristic",
      date: "May 2025",
      excerpt: "From Messi’s magic in Miami to Galaxy’s meltdown in LA — Matchday 16 in MLS was packed with drama, goals, and surprises.",
      imageUrl: "https://cdn1.intermiami.news/uploads/52/2024/12/GettyImages-1884518040-scaled.jpg",
      slug: "mls-round-recap",
    },    
    {
      id: 25,
      title: 'Di María to Inter Miami: The Last Dance or Just Another Flash',
      author: 'Mio Ristic',
      date: 'May 28, 2025',
      excerpt: 'Rumors link Ángel Di María with Inter Miami, promising excitement and questions. Will this signing last or fizzle out?',
      imageUrl: 'https://dynamo.kiev.ua/media/posts/2024/03/24/GettyImages-2097724773.jpg',
      slug: 'di-maria-inter-miami',
    },
    {
      id: 24,
      title: 'Why Mauricio Pochettino Is Facing Major Backlash Ahead of the 2025 Gold Cup',
      author: 'Mio Ristic',
      date: 'May 27, 2025',
      excerpt: 'The upcoming 2025 CONCACAF Gold Cup is stirring up excitement on and off the pitch, especially among U.S. soccer fans.',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2193742272/crop/MM5DCOBQHA5DCMBRG45G433XMU5DKOBZHI3DI===/GettyImages-2193742272.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      slug: 'why-mauricio-pochettino-is-facing',
    },
    {
      id: 23,
      title: 'Chaos in California: LA Galaxy vs San Diego FC Turns Violent',
      author: 'Mio Ristic',
      date: 'May 26, 2025',
      excerpt: 'After the final whistle blew in a tense showdown between LA Galaxy and new rivals San Diego FC',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2212164120/crop/MM5DIOBWGU5DENZTG45G433XMU5DAORSGUZQ====/GettyImages-2212164120.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      slug: 'rivalry-on-the-edge',
    },
    {
      id: 21,
      title: 'Chucky Lozano: San Diego’s Last-Minute Hero',
      author: 'Mio Ristic',
      date: 'May 25, 2025',
      excerpt: 'Hirving "Chucky" Lozano scored a dramatic 95th-minute winner to secure a thrilling victory for San Diego FC against LA Galaxy.',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      slug: 'lozano-becomes-a-san-diego-legend',
    },
    {
      id: 20,
      title: 'Walker Zimmerman Is Back',
      author: 'Mio Ristic',
      date: 'May 25, 2025',
      excerpt: 'After a period sidelined by injury, Walker Zimmerman returns to strengthen Nashville SC’s defense.',
      imageUrl: 'https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju',
      slug: 'zimmerman-is-back',
    },
    {
      id: 19,
      title: 'Top 10 MLS Jerseys of 2024',
      author: 'Mio Ristic',
      date: 'April 23, 2025',
      excerpt: 'Style, Passion & a Bit of Magic',
      imageUrl: 'https://images.supersport.com/media/0adn4b1p/lionel-messi-24-12-g-1200.jpg?width=1920&quality=90&format=webp',
      slug: 'top-mls-jersey2024',
    },
    {
      id: 18,
      title: 'Vancouver Whitecaps: A Club for Sale, Currently First in the West',
      author: 'Mio Ristic',
      date: 'April 20, 2025',
      excerpt: 'A Club for Sale, Currently First in the West',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2209348788/crop/MM5DINZZGU5DENRZG45G433XMU5DAORSGUYA====/GettyImages-2209348788.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      slug: 'vancouver-whitecaps-for-sale',
    },
    {
      id: 17,
      title: 'Inter Miami Extends Unbeaten Streak with 1–0 Away Win Over Columbus Crew',
      author: 'Mio Ristic',
      date: 'April 19, 2025',
      excerpt: 'Inter Miami extended their unbeaten streak in the 2025 MLS season',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2211040242/crop/MM5DGMBVGY5DCNZRHE5G433XMU5DSMBTHIYTCNQ=/GettyImages-2211040242.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      slug: 'columbuscrewvsintermiamiresult',
    },
    {
      id: 16,
      title: 'Columbus Crew vs. Inter Miami',
      author: 'Mio Ristic',
      date: 'April 17, 2025',
      excerpt: 'MLS’s Last Unbeatens Go Head-to-Head',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2208819749/crop/MM5DEMBUHA5DCMJVGI5G433XMU5DENZTHI3TA===/GettyImages-2208819749.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      slug: 'columbusvsmiamimlsblog',
    },
    {
      id: 15,
      title: 'Peter Vermes Bids Farewell to Sporting KC',
      author: 'Mio Ristic',
      date: 'April 16, 2025',
      excerpt: 'A Storied Legacy and Logical Parting.',
      imageUrl: 'https://nb1.hu/wp-content/uploads/2023/10/GettyImages-1257216781-scaled-e1743504066347.jpg',
      slug: 'petervermesblog',
    },
    {
      id: 14,
      title: 'Chicago Fire Makes Ambitious Move for Kevin De Bruyne',
      author: 'Mio Ristic',
      date: 'April 16, 2025',
      excerpt: 'What We Know So Far.',
      imageUrl: 'https://icdn.sempreinter.com/wp-content/uploads/2023/05/Kevin-De-Bruyne-8.jpg',
      slug: 'kevindb',
    },
    {
      id: 13,
      title: 'Thomas Müller to MLS? The End of an Era, the Start of a New One',
      author: 'Mio Ristic',
      date: 'April 15, 2025',
      excerpt: 'Thomas Müller, a name synonymous with Bayern Munich and the German national team.',
      imageUrl: 'https://assets.bundesliga.com/tachyon/sites/2/2021/05/GettyImages-859182146.jpg?crop=284px,0px,1352px,1080px&fit=540,540',
      slug: 'thomasmullermlsblog',
    },
    {
      id: 11,
      title: 'One PlanetKit Blog',
      author: 'Mio Ristic',
      date: 'April 15, 2025',
      excerpt: 'The world of football was shaken on April 16, 2025.',
      imageUrl: 'https://www.mlsstore.com/content/ws/all/2735eeb9-6378-4ba7-b6d8-5552f898cc0d__1600X732.jpg?w=3200',
      slug: 'oneplanetkit',
    },
    {
      id: 10,
      title: 'The Legacy of Aaron Boupendza in MLS',
      author: 'Mio Ristic',
      date: 'April 15, 2025',
      excerpt: 'A Tribute to a Star Gone Too Soon',
      imageUrl: 'https://www.telegram.hr/wp-content/uploads/2025/04/aaron-boupendza.jpg',
      slug: 'boupendza',
    },
    {
      id: 9,
      title: 'San Diego FC Makes History with First MLS Win',
      author: 'Mio Ristic',
      date: 'February 25, 2025',
      excerpt: 'San Diego FC secures a dramatic victory in their inaugural MLS match.',
      imageUrl: SanDiegoLogo,
      slug: 'san-diego-first-win',
    },
    {
      id: 7,
      title: 'MLS in FC25',
      author: 'Mio Ristic',
      date: 'July 1, 2024',
      excerpt: 'FC25 – Overview, MLS Clubs, and U.S. National Team.',
      imageUrl: 'https://drop-assets.ea.com/images/1BY2V24NDqyjYKlDV8mJrx/ff63d00bb5bf24ad0c1b87adcd0e2771/EA_FC25_Standard_KeyArt_16-9_3840x2160.jpg?im=AspectCrop=(16,9),xPosition=0.5384114583333334,yPosition=0.538425925925926&q=85&w=1280',
      slug: 'fc25',
    },
    {
      id: 6,
      title: 'San Diego: A New MLS Team Ready for Big Challenges',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'Hirving Lozano, Coach and Rooster',
      imageUrl: SanDiegoLogo,
      slug: 'san-diego-news',
    },
    {
      id: 5,
      title: 'MLS: Past, Present, and Future',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: "An in-depth analysis of soccer's journey in America.",
      imageUrl: 'https://images.unsplash.com/photo-1653014741491-ff4c23be99be?q=80&w=1974&auto=format&fit=crop',
      slug: 'mls-past',
    },
    {
      id: 4,
      title: 'Top Supplements for Soccer Players',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'A countdown of the most memorable moments in the league.',
      imageUrl: 'https://images.unsplash.com/photo-1662695086526-112d7959fab4?q=80&w=1974&auto=format&fit=crop',
      slug: 'supplements-in-soccer',
    },
    {
      id: 2,
      title: 'Women in Soccer: Breaking Barriers',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'The role of women in the soccer world.',
      imageUrl: 'https://images.unsplash.com/photo-1532290278496-3d29b25b691a?q=80&w=2070&auto=format&fit=crop',
      slug: 'women-in-soccer',
    },
    {
      id: 1,
      title: 'Welcome to US11',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'Nurturing the next generation of soccer stars.',
      imageUrl: Us11,
      slug: 'us11',
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
          <h1 className="text-5xl font-bold text-[#020617] mb-12">News</h1>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <Link
                key={post.id}
                href={`/news/${post.slug}`}
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
