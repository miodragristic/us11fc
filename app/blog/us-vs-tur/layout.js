export const metadata = {
    title: 'USMNT Struggles Continue in 2-1 Loss to Turkey | 2025 Friendly Recap',
    description:
      'The U.S. Men’s National Team fell 2-1 to Turkey despite an early goal from Jack McGlynn. Defensive lapses and a youthful lineup exposed growing pains ahead of the Gold Cup.',
    openGraph: {
      title: 'USMNT Struggles Continue in 2-1 Loss to Turkey | 2025 Friendly Recap',
      description:
        'An early lead from Jack McGlynn wasn’t enough as Turkey scored twice in quick succession to hand the USMNT their third straight loss.',
      url: 'https://us11fc.com/blog/us-vs-tur',
      siteName: 'US11',
      images: [
        {
          url: 'https://assets.goal.com/images/v3/getty-2193998658/crop/MM5DIMRUG45DEMZYHE5G433XMU5DAORSGIYQ====/GettyImages-2193998658.jpg', // možeš promeniti u sliku koju koristiš u blogu
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'USMNT Struggles Continue in 2-1 Loss to Turkey | 2025 Friendly Recap',
      description:
        'Jack McGlynn’s opening goal wasn’t enough as the U.S. defense crumbled in the first half against a sharp Turkey side.',
      images: [
        'https://assets.goal.com/images/v3/getty-2193998658/crop/MM5DIMRUG45DEMZYHE5G433XMU5DAORSGIYQ====/GettyImages-2193998658.jpg',
      ],
      creator: '@mioristic',
    },
  };
  
  export default function Layout({ children }) {
    return <>{children}</>;
  }
  