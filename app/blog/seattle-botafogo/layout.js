export const metadata = {
    title: 'Seattle Sounders vs Botafogo Recap',
    description:
      'Seattle Sounders showed great heart but fell 2-1 to Botafogo in the 2025 FIFA Club World Cup opener.',
    openGraph: {
      title: 'Seattle Sounders vs Botafogo Recap',
      description:
        'Seattle Sounders showed great heart but fell 2-1 to Botafogo in the 2025 FIFA Club World Cup opener.',
      url: 'https://www.us11fc.com/blog/seattle-botafogo', // zameni stvarnim URL-om
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://assets.goal.com/images/v3/getty-2220334930/crop/MM5DENZVGU5DCNJVGA5G433XMU5DGMBVHI3DE===/GettyImages-2220334930.jpg?auto=webp&format=pjpg&width=3840&quality=60',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Seattle Sounders vs Botafogo Recap',
      description:
        'Seattle Sounders showed great heart but fell 2-1 to Botafogo in the 2025 FIFA Club World Cup opener.',
      images: [
        'https://assets.goal.com/images/v3/getty-2220334930/crop/MM5DENZVGU5DCNJVGA5G433XMU5DGMBVHI3DE===/GettyImages-2220334930.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      ],
      creator: '@mioristic', // ako imaš twitter handle
    },
  };
  
  export default function SeattleBotafogoLayout({ children }) {
    return <>{children}</>;
  }
  