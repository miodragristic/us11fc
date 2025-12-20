export const metadata = {
    title: 'Athletic Club Boise Prepares to Debut in USL League One',
    description:
      'Athletic Club Boise, Idaho’s first professional men’s soccer team, is set to make its debut in USL League One in Spring 2026, showcasing local talent and community pride.',
    openGraph: {
      title: 'Athletic Club Boise Prepares to Debut in USL League One',
      description:
        'Full preview of Athletic Club Boise’s inaugural USL League One season: team identity, stadium, ownership, and goals for representing Idaho on the national stage.',
      url: 'https://us11fc.com/blog/athletic-boise',
      siteName: 'US11 Fan Hub',
      images: [
        {
          url: 'https://upload.wikimedia.org/wikipedia/en/5/55/Athletic_Club_Boise_logo.png',
          width: 1200,
          height: 630, // OG standard
          alt: 'Athletic Club Boise Logo',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Athletic Club Boise Prepares to Debut in USL League One',
      description:
        'Preview of Idaho’s first professional men’s soccer team as they prepare for their USL League One debut, highlighting the club’s vision and community impact.',
      images: ['https://upload.wikimedia.org/wikipedia/en/5/55/Athletic_Club_Boise_logo.png'],
      creator: '@mioristic',
    },
  };
  
  export default function Layout({ children }) {
    return <>{children}</>;
  }
  