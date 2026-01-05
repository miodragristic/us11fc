// app/san-diego-first-win/layout.js
export const metadata = {
    title: 'San Diego FC Achieves First Historic MLS Win!',
    description: 'Relive San Diego FC’s thrilling debut MLS victory over LA Galaxy and the start of a new era.',
    openGraph: {
      title: 'San Diego FC Achieves First Historic MLS Win!',
      description: 'Relive San Diego FC’s thrilling debut MLS victory over LA Galaxy and the start of a new era.',
      url: 'https://www.us11fc.com/san-diego-first-win', // zameni sa tačnim URL-om
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://assets.goal.com/images/v3/getty-2205422037/crop/MM5DINJUGM5DENJVGU5G433XMU5DAORSGM3Q====/GettyImages-2205422037.jpg?auto=webp&format=pjpg&width=1920&quality=60',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'San Diego FC Achieves First Historic MLS Win!',
      description: 'A monumental win for San Diego FC as they defeat LA Galaxy in their first MLS appearance.',
      images: ['https://assets.goal.com/images/v3/getty-2205422037/crop/MM5DINJUGM5DENJVGU5G433XMU5DAORSGM3Q====/GettyImages-2205422037.jpg?auto=webp&format=pjpg&width=1920&quality=60'],
      creator: '@tvojTwitterHandle', // zameni sa svojim Twitter nalogom
    },
  };
  
  export default function SanDiegoFirstWinLayout({ children }) {
    return <>{children}</>;
  }
  