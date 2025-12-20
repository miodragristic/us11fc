export const metadata = {
    title: 'Top 10 MLS Selling Jerseys in 2024',
    description: 'Discover the best-selling MLS jerseys of 2024 featuring stars like Messi, Suarez, and more!',
    openGraph: {
      title: 'Top 10 MLS Selling Jerseys in 2024',
      description: 'Discover the best-selling MLS jerseys of 2024 featuring stars like Messi, Suarez, and more!',
      url: 'https://www.us11fc.com/blog/top-mls-jersey2024', // sad je stvarni URL stranice
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://images.supersport.com/media/0adn4b1p/lionel-messi-24-12-g-1200.jpg',
          width: 1200,
          height: 800,
          alt: 'Lionel Messi MLS Jersey 2024', // dodao alt tekst za bolju pristupačnost
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Top 10 MLS Selling Jerseys in 2024',
      description: 'Discover the best-selling MLS jerseys of 2024 featuring stars like Messi, Suarez, and more!',
      images: ['https://images.supersport.com/media/0adn4b1p/lionel-messi-24-12-g-1200.jpg'],
      creator: '@tvojTwitterHandle', // ovde stavi svoj Twitter username bez greške
    },
  };
  
  export default function TopJerseysLayout({ children }) {
    return (
      <>
        {children}
      </>
    );
  }
  