// app/san-diego-brawl/layout.js



export const metadata = {
  title: 'Chaos in California: LA Galaxy vs San Diego FC Turns Violent',
  description:
    'A post-match brawl erupts after LA Galaxy’s loss to San Diego FC, raising serious concerns about fan safety and stadium security.',
  openGraph: {
    title: 'Chaos in California: LA Galaxy vs San Diego FC Turns Violent',
    description:
      'Tensions boil over after LA Galaxy fall to San Diego FC. Read about the violent post-match clash and what it means for MLS.',
    url: 'https://www.us11fc.com/',
    siteName: 'MLS Fan Store',
    images: [
      {
        url: 'https://assets.goal.com/images/v3/getty-2212164120/crop/MM5DIOBWGU5DENZTG45G433XMU5DAORSGUZQ====/GettyImages-2212164120.jpg?auto=webp&format=pjpg&width=3840&quality=60',
        width: 1200,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chaos in California: LA Galaxy vs San Diego FC Turns Violent',
    description:
      'The rivalry ignites as LA Galaxy and San Diego FC fans clash in the stands. Full story and video highlights inside.',
    images: [
      'https://assets.goal.com/images/v3/getty-2212164120/crop/MM5DIOBWGU5DENZTG45G433XMU5DAORSGUZQ====/GettyImages-2212164120.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    ],
    creator: '@tvojTwitterHandle', // zameni ako imaš
  },
};

export default function SanDiegoBrawlLayout({ children }) {
  return <>{children}</>;
}

  
