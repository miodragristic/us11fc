export const metadata = {
    title: 'MLS in FC25 – Top Clubs and Players in EA SPORTS FC 25',
    description:
      'Explore the top-rated MLS clubs and players in EA SPORTS FC 25. From Messi to Reus, see who dominates the league this season.',
    openGraph: {
      title: 'MLS in FC25 – Best MLS Teams & Stars in EA SPORTS FC 25',
      description:
        'Find out which MLS clubs and players are rated highest in EA SPORTS FC 25. Featuring Inter Miami, LAFC, LA Galaxy, and more.',
      url: 'https://www.us11fc.com/blog/fc25',
      siteName: 'US11',
      images: [
        {
          url: 'https://drop-assets.ea.com/images/1BY2V24NDqyjYKlDV8mJrx/ff63d00bb5bf24ad0c1b87adcd0e2771/EA_FC25_Standard_KeyArt_16-9_3840x2160.jpg?im=AspectCrop=(16,9),xPosition=0.5384114583333334,yPosition=0.538425925925926&q=85&w=1280',
          width: 1200,
          height: 800,
          alt: 'FC25 MLS Top Players Banner',
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: '2024-12-24T12:00:00Z',
      authors: [{ name: 'Mio Ristić', url: 'https://www.us11fc.com/authors/mioristic' }],
      tags: ['MLS', 'FC25', 'Lionel Messi', 'Inter Miami', 'EA SPORTS FC'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MLS in FC25 – Top MLS Players and Teams',
      description:
        'Lionel Messi, Olivier Giroud, and Marco Reus headline the MLS roster in EA SPORTS FC 25. Dive into rankings and predictions.',
      images: [
        'https://drop-assets.ea.com/images/1BY2V24NDqyjYKlDV8mJrx/ff63d00bb5bf24ad0c1b87adcd0e2771/EA_FC25_Standard_KeyArt_16-9_3840x2160.jpg?im=AspectCrop=(16,9),xPosition=0.5384114583333334,yPosition=0.538425925925926&q=85&w=1280',
      ],
      creator: '@us11fc',
    },
  };
  
  export default function FC25Layout({ children }) {
    return <>{children}</>;
  }
  