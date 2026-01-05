// app/vancouver-whitecaps/layout.js

export const metadata = {
    title: 'Vancouver Whitecaps: A Club for Sale, Currently First in the West',
    description:
      'Vancouver Whitecaps FC leads the Western Conference in MLS 2025 but is currently up for sale. Discover what this means for the club’s future and the ongoing season.',
    openGraph: {
      title: 'Vancouver Whitecaps: A Club for Sale, Currently First in the West',
      description:
        'Explore the impressive run of Vancouver Whitecaps FC and the implications of the club’s sale on its future.',
      url: 'https://www.us11fc.com/vancouver-whitecaps', // zameni stvarnim URL-om
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://assets.goal.com/images/v3/getty-2209348788/crop/MM5DINZZGU5DENRZG45G433XMU5DAORSGUYA====/GettyImages-2209348788.jpg?auto=webp&format=pjpg&width=3840&quality=60',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Vancouver Whitecaps: A Club for Sale, Currently First in the West',
      description:
        'Follow Vancouver Whitecaps FC’s top standing in MLS 2025 and the club’s sale developments.',
      images: [
        'https://assets.goal.com/images/v3/getty-2209348788/crop/MM5DINZZGU5DENRZG45G433XMU5DAORSGUYA====/GettyImages-2209348788.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      ],
      creator: '@tvojTwitterHandle', // zameni ako imaš
    },
  };
  
  export default function VancouverWhitecapsLayout({ children }) {
    return <>{children}</>;
  }
  