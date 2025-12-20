import React from 'react';

const US11ChampionsLeagueBlog = () => {
  const players = [
    {
        id: 1,
        name: "Weston McKennie",
        team: "Juventus",
        position: "Midfielder",
        imageUrl: "https://assets.goal.com/images/v3/getty-2198386161/crop/MM5DCOBSGQ5DCMBSGY5G433XMU5DAORZGU======/GettyImages-2198386161.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        text: `Weston McKennie brings exceptional energy and tactical intelligence to Juventus’ midfield. Known for his aggressive playing style, he is a player who seamlessly links defense and attack, providing stability in transition and the ability to quickly change the pace of the game. His knack for intercepting passes, reading opponents’ movements, and delivering key passes makes him an indispensable part of the team’s midfield.
      
      Since joining Juventus, McKennie has demonstrated impressive versatility, adapting to different formations and tactical demands. Whether deployed as a central midfielder, defensive midfielder, or occasionally on the flank, his ability to execute defensive duties responsibly while contributing to the attack makes him a modern, all-around midfielder.
      
      Statistically, McKennie plays a significant role – recording interceptions, key passes, and contributing to the build-up of actions that often lead to goal-scoring opportunities. His stamina and physical readiness allow Juventus to maintain high intensity throughout the match, which is especially crucial in Serie A, where discipline and tactical awareness are paramount.
      
      Beyond his technical and tactical qualities, McKennie brings mental strength to the team. His energy on the pitch, communication with teammates, and leadership in critical moments further strengthen Juventus’ midfield, making him one of the team’s key players.`
      },
      {
        id: 2,
        name: "Tim Weah",
        team: "Marseille",
        position: "Winger/Forward",
        imageUrl: "https://assets.goal.com/images/v3/blt54832553f546789b/crop/MM5DGMRQGA5DCOBQGA5G433XMU5DMNRTHIYA====/GettyImages-2233067113.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        text: `Tim Weah, son of football legend George Weah, brings exceptional pace, creativity, and flair to Marseille's attack. Known for his explosive dribbling and ability to take on defenders, he consistently stretches defenses and creates scoring opportunities for both himself and his teammates.
      
      Since joining Marseille, Weah has demonstrated versatility, often switching between winger and forward roles to adapt to tactical demands. His intelligence off the ball, combined with precise timing of runs, allows him to exploit spaces and contribute effectively in high-intensity matches.
      
      Statistically, Weah has become a key player in Marseille’s offensive output, contributing goals, assists, and key passes. His agility and stamina enable him to maintain threat throughout the full 90 minutes, making him a constant challenge for opposition defenders.
      
      Beyond his technical skills, Weah’s mentality and work rate set him apart. He consistently presses opponents, communicates with teammates, and shows determination in crucial moments, reinforcing his role as one of Marseille's most dynamic attacking players.`
      },
      {
        id: 3,
        name: "Folarin Balogun",
        team: "AS Monaco",
        position: "Forward",
        imageUrl: "https://afrosportnow.com/wp-content/uploads/2024/10/Folarin-Balogun.jpg",
        text: `Folarin Balogun is a highly promising striker for AS Monaco, renowned for his sharp goal-scoring instincts and clinical finishing inside the box. With excellent movement off the ball, he consistently finds space in dangerous areas and creates opportunities both for himself and his teammates.
      
      Since joining Monaco, Balogun has demonstrated composure in front of goal and adaptability in different attacking roles. Whether leading the line as a central striker or dropping slightly to link play, his intelligence and timing of runs make him a constant threat to opposing defenses.
      
      Statistically, Balogun contributes not only with goals but also with key passes and pressing actions that initiate counter-attacks. His agility, speed, and technical ability allow him to challenge defenders in one-on-one situations and make decisive plays in high-pressure moments.
      
      Beyond his technical and tactical skills, Balogun’s mentality and work ethic distinguish him as a rising talent. He exhibits focus, determination, and the ability to perform consistently, positioning him as one of Monaco’s key offensive assets and a striker to watch for the future.`
      },      
      {
        id: 4,
        name: "Johnny Cardoso",
        team: "Atlético Madrid",
        position: "Defensive Midfielder",
        imageUrl: "https://assets.goal.com/images/v3/getty-2228494976/crop/MM5DEOBRGY5DCNJYGQ5G433XMU5DINJYHIZTK===/GettyImages-2228494976.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        text: `Johnny Cardoso strengthens Atlético Madrid's midfield with his exceptional defensive awareness, intelligent pressing, and precise passing. Known for breaking up opposition play, he provides stability and balance to the team while initiating attacking transitions.
      
      Since joining Atlético, Cardoso has showcased versatility, effectively performing both as a shield in front of the backline and as a link between defense and attack. His positioning, tactical discipline, and ability to read the game allow him to intercept passes and disrupt opponents’ rhythm consistently.
      
      Statistically, Cardoso contributes with tackles, interceptions, and successful passes that help maintain possession and control the tempo of the match. His stamina and work rate enable him to cover large areas of the pitch, making him a constant presence in defensive duels.
      
      Beyond his technical and tactical abilities, Cardoso’s mentality stands out. His communication on the field, composure under pressure, and leadership in midfield make him a key figure for Atlético Madrid, adding resilience and intelligence to the team’s core.`
      },      
      {
        id: 5,
        name: "Sergiño Dest",
        team: "PSV Eindhoven",
        position: "Defender",
        imageUrl: "https://assets.goal.com/images/v3/getty-2136573260/crop/MM5DCNZSHA5DSNZSHJXG653FHI2TCOJ2GE4TO===/GettyImages-2136573260.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        text: `Sergiño Dest is a dynamic and attack-minded right-back for PSV Eindhoven, combining blistering pace with technical skill to contribute in both defense and offense. Known for his ability to make overlapping runs, deliver precise crosses, and create goal-scoring opportunities, Dest adds width and creativity to the team’s play.
      
      Since joining PSV, Dest has shown tactical intelligence in balancing his forward ventures with disciplined defensive positioning. His agility, one-on-one defensive skills, and anticipation allow him to neutralize opposing wingers while supporting his own team’s build-up from the back.
      
      Statistically, Dest contributes with key passes, successful dribbles, and defensive actions such as tackles and interceptions. His stamina and work rate ensure he can maintain high intensity throughout the match, providing both defensive solidity and attacking impetus.
      
      Beyond his technical and tactical strengths, Dest brings versatility and professionalism to the squad. His energy on the pitch, decision-making under pressure, and ability to link up with midfield and attack make him an essential component of PSV Eindhoven’s defensive and offensive structure.`
      },      
      {
        id: 6,
        name: "Ricardo Pepi",
        team: "PSV Eindhoven",
        position: "Forward",
        imageUrl: "https://assets.goal.com/images/v3/getty-2186540551/crop/MM5DGMJUGU5DCNZWHE5G433XMU5DCNRUHIYA====/GettyImages-2186540551.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        text: `Ricardo Pepi is a talented and clinical forward for PSV Eindhoven, known for his intelligent movement in the box and lethal finishing. He consistently finds space in dangerous areas, making him a constant threat to opposing defenses and a reliable goal-scoring option for his team.
      
      Since joining PSV, Pepi has demonstrated versatility in attack, capable of playing as a central striker or in wider roles when tactical demands require. His timing of runs, anticipation of passes, and composure in front of goal make him an effective presence in the final third.
      
      Statistically, Pepi contributes with goals, assists, and key attacking actions, often turning tight opportunities into scoring chances. His agility, speed, and technical ability allow him to challenge defenders one-on-one and capitalize on quick transitions.
      
      Beyond his technical prowess, Pepi brings determination and work ethic to the pitch. His relentless pressing, communication with teammates, and ability to perform in high-pressure situations make him a central figure in PSV’s attack and a striker to watch in the coming seasons.`
      },      
      {
        id: 7,
        name: "Malik Tillman",
        team: "Bayer Leverkusen",
        position: "Attacking Midfielder",
        imageUrl: "https://assets.goal.com/images/v3/getty-1640576673/crop/MM5DIMBVGQ5DEMRYGA5G433XMU5DAORSGEYQ====/GettyImages-1640576673.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        text: `Malik Tillman is a creative and technically gifted attacking midfielder for Bayer Leverkusen, known for his vision, precise passing, and ability to make decisive plays in the final third. He consistently unlocks defenses with intelligent movement and innovative combinations with teammates.
      
      Since joining Leverkusen, Tillman has showcased versatility, operating as a central playmaker or slightly off-center to exploit spaces. His timing of runs, spatial awareness, and ability to read the game allow him to contribute effectively to both goal creation and attacking transitions.
      
      Statistically, Tillman contributes with key passes, assists, and occasional goals, often influencing the outcome of matches with his playmaking skills. His agility, ball control, and quick decision-making make him a constant threat in high-pressure situations.
      
      Beyond his technical and tactical qualities, Tillman brings confidence and composure to the pitch. His leadership, communication, and willingness to take responsibility in crucial moments make him a pivotal figure in Bayer Leverkusen’s attacking strategy.`
      },      
      {
        id: 8,
        name: "Yunus Musah",
        team: "Atalanta",
        position: "Midfielder",
        imageUrl: "https://cultofcalcio.com/wp-content/uploads/2023/09/musah.jpg",
        text: `Yunus Musah is a dynamic midfielder for Atalanta, combining strength, speed, and tactical intelligence to influence both defensive and attacking phases of play. Known for driving counter-attacks and maintaining control in midfield, he is a versatile presence capable of adapting to various tactical demands.
      
      Since joining Atalanta, Musah has demonstrated impressive versatility, performing effectively as a central midfielder or slightly advanced to support attacks. His ability to read the game, intercept passes, and make forward runs allows him to contribute decisively to both transitions and sustained possession.
      
      Statistically, Musah contributes with tackles, interceptions, key passes, and occasional goals, providing balance and energy to the team. His stamina and agility enable him to cover large areas of the pitch, making him a constant threat in high-intensity matches.
      
      Beyond his technical and tactical abilities, Musah’s mentality and work ethic set him apart. He communicates effectively, shows composure under pressure, and consistently performs in crucial moments, making him a central figure in Atalanta’s midfield strategy.`
      },      
      {
        id: 9,
        name: "Timothy Chandler",
        team: "Eintracht Frankfurt",
        position: "Defender",
        imageUrl: "https://assets.goal.com/images/v3/bltbfd72befe0372cf0/1.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        text: `Timothy Chandler is a seasoned and reliable defender for Eintracht Frankfurt, known for his ability to provide defensive stability while also supporting the attack from the flank. With excellent positioning and anticipation, he consistently neutralizes opposing wingers and contributes to maintaining team shape.
      
      Since joining Frankfurt, Chandler has demonstrated versatility, often operating as a right-back but capable of covering multiple defensive roles when required. His pace and tactical awareness allow him to engage in one-on-one duels effectively and participate in forward transitions.
      
      Statistically, Chandler contributes with tackles, interceptions, clearances, and accurate crosses when moving forward. His stamina and work rate enable him to maintain high performance throughout the match, balancing defensive duties with attacking support.
      
      Beyond his technical and tactical abilities, Chandler brings leadership and experience to the squad. His communication on the field, composure under pressure, and understanding of game situations make him a dependable figure in Eintracht Frankfurt’s defensive structure.`
      },      
      {
        id: 10,
        name: "Cole Campbell",
        team: "Borussia Dortmund",
        position: "Forward",
        imageUrl: "https://www.ligaportal.at/international/images/sid/202428/806099f3460093217279a3a285f8b17b96e7f261.jpg",
        text: `Cole Campbell is a quick and explosive forward for Borussia Dortmund, known for his pace, agility, and potential to become a key attacking player in the coming seasons. His ability to make sharp runs behind defenses and capitalize on scoring opportunities makes him a constant threat in the final third.
      
      Since joining Dortmund, Campbell has shown versatility in attacking roles, capable of playing as a central striker or wider forward to exploit spaces. His timing, movement, and composure in front of goal allow him to be effective even against high-level defenses.
      
      Statistically, Campbell contributes with goals, assists, and key attacking actions, often influencing matches with his speed and decision-making. His work rate and stamina allow him to maintain pressure on opposition defenses throughout the match.
      
      Beyond his technical and tactical skills, Campbell demonstrates determination, focus, and professionalism. His energy on the pitch, willingness to learn, and ability to perform in critical moments make him a promising talent and an exciting prospect for Borussia Dortmund’s future.`
      }
      
  ];

  const shopItemsByPlayerId = {
    1: [
      {
        id: 1,
        title: "Juventus adidas 2025/26 Home Authentic Jersey - White",
        price: "$149.99",
        imageUrl: "https://fanatics.frgimages.com/juventus/mens-adidas-white-juventus-2025/26-home-authentic-jersey_ss5_p-202461747+pv-1+u-8ruizbqluqgln5y6hqqa+v-ke4wbo3osx5ljictjveu.jpg?_hv=2&w=900",
        link: "https://fanatics.93n6tx.net/raKRv5"
      }
    ],
    2: [
      {
        id: 2,
        title: "PUMA Mens Olympique De Marseille 2425 Jersey Casual - White",
        price: "$99.95",
        imageUrl: "https://fanatics.frgimages.com/olympique-marseille/mens-puma-navy-olympique-marseille-2025/26-away-replica-jersey_ss5_p-203175452+pv-1+u-n021xqsi2m8rwendne5d+v-lw7mniiqok2a4mkseqvi.jpg?_hv=2&w=900",
        link: "https://fanatics.93n6tx.net/EE62ke"
      }
    ],
    // 3: [
    //   {
    //     id: 3,
    //     title: "Men's AS Monaco Folarin Balogun 2025 Replica Jersey",
    //     price: "$134.99",
    //     imageUrl: "https://example.com/balogun-jersey.jpg",
    //     link: "https://store.asmonaco.com/balogun-jersey"
    //   }
    // ],
    4: [
      {
        id: 4,
        title: "Men's Atlético Madrid Johnny Cardoso 2025 Replica Jersey",
        price: "$139.99",
        imageUrl: "https://fanatics.frgimages.com/atletico-de-madrid/mens-nike-blue-atletico-de-madrid-2025/26-third-replica-jersey_ss5_p-202658977+pv-1+u-ssym8pp7l6qmaja4q2in+v-dtf7kpqpx1lnvmmh2qfr.jpg?_hv=2&w=900",
        link: "https://fanatics.93n6tx.net/9L62N0"
      }
    ],
    5: [
      {
        id: 5,
        title: "PSV Eindhoven Puma 2025/26 Home Replica Jersey - White",
        price: "$99.99",
        imageUrl: "https://fanatics.frgimages.com/psv-eindhoven/mens-puma-white-psv-eindhoven-2025/26-home-replica-jersey_ss5_p-203175463+pv-1+u-h3waut1tyg4ucshkhpwi+v-tif83c9ueh8gioack6n4.jpg?_hv=2&w=900",
        link: "https://fanatics.93n6tx.net/kOKVyz"
      }
    ],
    6: [
      {
        id: 6,
        title: "PSV Eindhoven Puma 2025/26 Home Replica Jersey - White",
        price: "$99.99",
        imageUrl: "https://fanatics.frgimages.com/psv-eindhoven/mens-puma-white-psv-eindhoven-2025/26-home-replica-jersey_ss5_p-203175463+pv-1+u-h3waut1tyg4ucshkhpwi+v-tif83c9ueh8gioack6n4.jpg?_hv=2&w=900",
        link: "https://fanatics.93n6tx.net/kOKVyz"
      }
    ],
    // 7: [
    //   {
    //     id: 7,
    //     title: "Men's Bayer Leverkusen Malik Tillman 2025 Replica Jersey",
    //     price: "$139.99",
    //     imageUrl: "https://example.com/tillman-jersey.jpg",
    //     link: "https://store.bayer04.de/tillman-jersey"
    //   }
    // ],
    // 8: [
    //   {
    //     id: 8,
    //     title: "Men's Atalanta Yunus Musah 2025 Replica Jersey",
    //     price: "$134.99",
    //     imageUrl: "https://example.com/musah-jersey.jpg",
    //     link: "https://store.atalanta.it/musah-jersey"
    //   }
    // ],
    // 9: [
    //   {
    //     id: 9,
    //     title: "Men's Eintracht Frankfurt Timothy Chandler 2025 Replica Jersey",
    //     price: "$139.99",
    //     imageUrl: "https://example.com/chandler-jersey.jpg",
    //     link: "https://store.eintracht.de/chandler-jersey"
    //   }
    // ],
    10: [
      {
        id: 10,
        title: "Borussia Dortmund Puma 2025/26 Authentic Jersey - Yellow",
        price: "$149.99",
        imageUrl: "https://fanatics.frgimages.com/borussia-dortmund/mens-puma-yellow-borussia-dortmund-2025/26-authentic-jersey_ss5_p-203175433+pv-1+u-fcjmw5pxjdypohwtvxpb+v-pspuxjs6worxq9rvjjyh.jpg?_hv=2&w=900",
        link: "https://fanatics.93n6tx.net/Qj90ZP"
      }
    ]
  };

  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        {/* Header */}
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          American Stars in the Champions League 2025/26
        </h1>
        <img
          src='https://assets.goal.com/images/v3/getty-2217021422/crop/MM5DGOJSGA5DEMRQGU5G433XMU5DIMJUHI4DG===/GettyImages-2217021422.jpg?auto=webp&format=pjpg&width=3840&quality=60'
          alt='US Players in Champions League'
          className='w-full h-[400px] object-cover rounded-lg shadow-md mb-4'
          style={{ objectPosition: 'center 20%' }}
        />
        <div className='mb-4 text-sm text-gray-600'>
          <p>By: US11 FC | September 2025</p>
          <p>Creator: Alessandro Sabattini 
| 
Credit: Getty Images
Copyright: 2025 Getty Images</p>
        </div>

        {/* Intro */}
        <div className='space-y-4 mb-10 text-[#020617] text-lg'>
          <p>The Champions League 2025/26 season has seen a new wave of American talent making their mark on Europe’s biggest stage.</p>
          <p>From midfield dynamos to explosive forwards, these US players are proving that American soccer is evolving, with stars ready to shine under the brightest lights.</p>
          <p>Here’s a closer look at the top 10 American stars competing in this year’s Champions League.</p>
        </div>

        {/* Player Sections */}
        {players.map((player) => (
          <div key={player.id} className='mb-12'>
            <h2 className='text-2xl sm:text-3xl font-semibold text-[#020617] mb-2'>
              {player.name} – {player.team}
            </h2>
            <p className='text-gray-700 mb-4'><strong>Position:</strong> {player.position}</p>
            <img
              src={player.imageUrl}
              alt={player.name}
              className='w-full h-[400px] object-cover rounded-lg shadow-md mb-4'
            />
            <p className='text-lg text-[#020617] mb-4'>{player.text}</p>

            {/* Jersey Section */}
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 mb-4'>
              {(shopItemsByPlayerId[player.id] || []).map(item => (
                <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
                  <img
                    className='w-full h-64 object-cover'
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <div className='p-4'>
                    <h4 className='font-semibold text-lg text-[#020617]'>{item.title}</h4>
                    <p className='text-gray-600'>{item.price}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                    >
                      Buy Jersey
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Final Thoughts */}
        <h2 className='text-2xl sm:text-3xl font-semibold text-[#020617] mb-6'>Final Thoughts</h2>
        <div className='space-y-4 text-[#020617] text-lg'>
          <p>These American stars are setting the stage for a new era of US soccer on the European scene. Their skill, determination, and flair are making waves and inspiring the next generation of talent.</p>
          <p>As the season unfolds, expect to see even more highlights, stunning performances, and perhaps a few surprises from these rising stars.</p>
          <p>One thing is certain: the future of American soccer is brighter than ever.</p>
        </div>

        <div className='text-center mt-8 mb-8'>
          <p className='text-sm text-gray-600'>Follow all Champions League action and US players at US11 FC</p>
          <p className='text-sm text-gray-600'>#USSoccer #ChampionsLeague #RisingStars</p>
        </div>
      </div>
    </div>
  );
};

export default US11ChampionsLeagueBlog;
