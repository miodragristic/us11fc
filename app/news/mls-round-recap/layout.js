// app/mls-round-recap/layout.js

export const metadata = {
    title: 'MLS Round Recap: 13 Matches, 1 Night, Pure Chaos',
    description:
      'From Messi’s magic to LA Galaxy’s collapse, here’s everything you need from a wild MLS matchday featuring 13 games in one night.',
    openGraph: {
      title: 'MLS Round Recap: 13 Matches, 1 Night, Pure Chaos',
      description:
        'Catch up on all the goals, drama, and surprises from a jam-packed MLS matchday — including Messi’s brilliance and Galaxy’s misery.',
      url: 'https://www.us11fc.com/blog/mls-round-recap',
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://cdn1.intermiami.news/uploads/52/2024/12/GettyImages-1884518040-scaled.jpg', // zameni ako imaš bolju sliku kola
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MLS Round Recap: 13 Matches, 1 Night, Pure Chaos',
      description:
        'Messi dazzles, Galaxy stumble, and chaos reigns across MLS — full breakdown from US11.',
      images: [
        'https://cdn1.intermiami.news/uploads/52/2024/12/GettyImages-1884518040-scaled.jpg', // ista slika, zameni ako treba
      ],
      creator: '@us11fc', // zameni ako imaš drugi handle
    },
  };
  
  export default function MLSRoundRecapLayout({ children }) {
    return <>{children}</>;
  }
  