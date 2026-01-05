// app/blog/columbuscrewvsintermiamiresult/layout.js

export const metadata = {
    title: 'Inter Miami Extends Unbeaten Streak with 1–0 Away Win Over Columbus Crew',
    description:
      'Benjamin Cremaschi’s diving header lifts Inter Miami to a 1–0 win over Columbus Crew in front of 60,614 fans at Cleveland Browns Stadium.',
    openGraph: {
      title: 'Inter Miami Beats Columbus Crew 1–0 in Cleveland',
      description:
        'A Benjamin Cremaschi goal secures Inter Miami’s win over Columbus Crew in a match played at Browns Stadium, with Messi drawing massive crowd.',
      url: 'https://www.us11fc.com/blog/columbuscrewvsintermiamiresult',
      siteName: 'US11',
      images: [
        {
          url: 'https://assets.goal.com/images/v3/getty-2211040242/crop/MM5DGMBVGY5DCNZRHE5G433XMU5DSMBTHIYTCNQ=/GettyImages-2211040242.jpg?auto=webp&format=pjpg&width=3840&quality=60',
          width: 1200,
          height: 800,
          alt: 'Inter Miami celebrates goal vs Columbus Crew',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Inter Miami Extends Unbeaten Run in Cleveland',
      description:
        'Cremaschi scores, Ustari shines, and Messi nearly nets one as Inter Miami beats Columbus Crew 1–0 before 60k+ fans.',
      images: [
        'https://assets.goal.com/images/v3/getty-2211040242/crop/MM5DGMBVGY5DCNZRHE5G433XMU5DSMBTHIYTCNQ=/GettyImages-2211040242.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      ],
      creator: '@us11fc',
    },
  };
  
  export default function ColumbusCrewvsInterMiamiLayout({ children }) {
    return <>{children}</>;
  }
  