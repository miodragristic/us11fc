export const metadata = {
    title: 'Peter Vermes Bids Farewell to Sporting KC',
    description: 'A deep look into Peter Vermes’ legacy at Sporting Kansas City and the end of an era in MLS.',
    openGraph: {
      title: 'Peter Vermes Bids Farewell to Sporting KC',
      description: 'A deep look into Peter Vermes’ legacy at Sporting Kansas City and the end of an era in MLS.',
      url: 'https://www.us11fc.com', 
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://nb1.hu/wp-content/uploads/2023/10/GettyImages-1257216781-scaled-e1743504066347.jpg',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Peter Vermes Bids Farewell to Sporting KC',
      description: 'Explore Vermes’ impactful journey at Sporting KC and why his departure marks a turning point.',
      images: ['https://nb1.hu/wp-content/uploads/2023/10/GettyImages-1257216781-scaled-e1743504066347.jpg'],
      creator: '@tvojTwitterHandle',
    },
  };
  
  export default function PeterVermesBlogLayout({ children }) {
    return (
      <>
        {children}
      </>
    );
  }
  