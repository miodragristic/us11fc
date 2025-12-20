// app/obed-vargas-heart/layout.js

export const metadata = {
    title: 'Obed Vargas: Heart of Mexico, Talent of America, and the Future of MLS',
    description:
      'Discover the story of Obed Vargas, a Seattle Sounders wonderkid who chose Mexico over the USA and now prepares for the Club World Cup at just 19.',
    openGraph: {
      title: 'Obed Vargas: Heart of Mexico, Talent of America, and the Future of MLS',
      description:
        'From Alaska to the world stage — follow Obed Vargas’ incredible rise, international switch, and Seattle Sounders journey toward global football.',
      url: 'https://www.us11fc.com/blog/obed-vargas-heart',
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://sports.mynorthwest.com/wp-content/uploads/2024/04/Obed-Vargas-plays-for-the-Seattle-Sounders-ball-on-ground-Getty-900.jpg',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Obed Vargas: Heart of Mexico, Talent of America, and the Future of MLS',
      description:
        'Why Obed Vargas is the future of MLS — and how Seattle developed a star who now proudly wears the Mexico shirt.',
      images: [
        'https://sports.mynorthwest.com/wp-content/uploads/2024/04/Obed-Vargas-plays-for-the-Seattle-Sounders-ball-on-ground-Getty-900.jpg',
      ],
      creator: '@us11fc', // zameni ako koristiš drugi Twitter handle
    },
  };
  
  export default function ObedVargasLayout({ children }) {
    return <>{children}</>;
  }
  