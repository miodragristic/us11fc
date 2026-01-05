// app/blog/boupendza/layout.js

export const metadata = {
    title: 'The Legacy of Aaron Boupendza in MLS: A Tribute to a Star Gone Too Soon',
    description:
      'A moving tribute to Aaron Boupendza, the former FC Cincinnati striker whose impact on MLS and Gabonese football will never be forgotten.',
    openGraph: {
      title: 'The Legacy of Aaron Boupendza in MLS',
      description:
        'Remembering Aaron Boupendza: his time in MLS, unforgettable goals, and global journey. Gone too soon, never forgotten.',
      url: 'https://www.us11fc.com/blog/boupendza',
      siteName: 'US11',
      images: [
        {
          url: 'https://www.telegram.hr/wp-content/uploads/2025/04/aaron-boupendza.jpg',
          width: 1200,
          height: 800,
          alt: 'Aaron Boupendza tribute photo',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'The Legacy of Aaron Boupendza in MLS',
      description:
        'A heartfelt tribute to Aaron Boupendza: from Hatayspor to FC Cincinnati, from Moanda to the world. RIP.',
      images: [
        'https://www.telegram.hr/wp-content/uploads/2025/04/aaron-boupendza.jpg',
      ],
      creator: '@us11fc',
    },
  };
  
  export default function BoupendzaLayout({ children }) {
    return <>{children}</>;
  }
  