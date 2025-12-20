// app/supplements/layout.js
export const metadata = {
    title: 'Supplements & Energy Drinks',
    description: 'Supplements and energy drinks specially curated for footballers to boost performance and recovery.',
    openGraph: {
      type: 'website',
      url: 'https://yourdomain.com/supplements',
      title: 'Supplements & Energy Drinks',
      description: 'Supplements and energy drinks specially curated for footballers to boost performance and recovery.',
      images: [
        {
          url: 'https://yourdomain.com/images/supplements-og-image.jpg',
          width: 1200,
          height: 630,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Supplements & Energy Drinks | My Game Store',
      description: 'Supplements and energy drinks specially curated for footballers to boost performance and recovery.',
      images: ['https://yourdomain.com/images/supplements-og-image.jpg'],
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
  
  export default function SupplementsLayout({ children }) {
    return (
      <section className="w-full min-h-screen bg-white pt-[1px]">
        {children}
      </section>
    );
  }
  