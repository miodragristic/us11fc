// app/usl-future/layout.js

export const metadata = {
    title: 'USL Is Building the Future of American Soccer',
    description:
      'Discover how the United Soccer League is shaping the future of American soccer through infrastructure, community partnerships, and sustainable growth.',
    openGraph: {
      title: 'USL Is Building the Future of American Soccer',
      description:
        'Explore USL’s long-term vision to transform soccer in the U.S. and Canada by investing in stadiums, player development, and local communities.',
      url: 'https://www.us11fc.com/blog/usl-future',  
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://the18.com/sites/default/files/feature-images/GettyImages-1258549217.jpg', // ubaci stvarni URL slike
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'USL Is Building the Future of American Soccer',
      description:
        'Learn about USL’s investment in stadiums, community, and player development shaping the future of soccer in North America.',
      images: [
        'https://the18.com/sites/default/files/feature-images/GettyImages-1258549217.jpg', // isti URL kao za OpenGraph sliku
      ],
      creator: '@tvojTwitterHandle', // ubaci ako imaš, ili obriši ovaj red
    },
  };
  
  export default function USLFutureLayout({ children }) {
    return <>{children}</>;
  }
  