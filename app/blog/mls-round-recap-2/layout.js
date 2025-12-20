export const metadata = {
    title: 'MLS Roundup: Messi Shines, San Diego Surges, and DC United Stuns Cincinnati',
    description:
      "Major League Soccer's latest matchday packed with Messi's magic, surprising away wins, and key shifts in the conference race.",
    openGraph: {
      title: 'MLS Roundup: Messi Shines, San Diego Surges, and DC United Stuns Cincinnati',
      description:
        'Catch all the highlights from MLS matchday featuring Messi’s masterclass, San Diego’s rise, and DC United’s shocking upset.',
      url: 'https://www.us11fc.com/blog/mls-round-recap-2',
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://cdn1.intermiami.news/uploads/52/2024/12/GettyImages-1884518040-scaled.jpg', // možeš promeniti ako imaš bolju sliku
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MLS Roundup: Messi Shines, San Diego Surges, and DC United Stuns Cincinnati',
      description:
        'Messi dazzles, San Diego dominates at home, and DC United pulls off a major upset — full MLS recap from US11.',
      images: [
        'https://cdn1.intermiami.news/uploads/52/2024/12/GettyImages-1884518040-scaled.jpg', // ista slika, možeš zameniti
      ],
      creator: '@us11fc', // zameni ako imaš drugi Twitter handle
    },
  };
  
  export default function MLSRoundRecapLayout({ children }) {
    return <>{children}</>;
  }
  