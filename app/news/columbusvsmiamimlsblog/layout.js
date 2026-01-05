// app/blog/columbusvsmiamimlsblog/layout.js

export const metadata = {
    title: 'Columbus Crew vs Inter Miami – Clash of MLS Unbeatens',
    description:
      'Columbus Crew and Inter Miami, the Eastern Conference’s last unbeatens, face off in a top-of-the-table showdown in Cleveland.',
    openGraph: {
      title: 'Columbus Crew vs Inter Miami – MLS Showdown of the Season',
      description:
        'Two undefeated titans go head-to-head: Columbus Crew’s technical precision vs Inter Miami’s Messi-powered stardom. Full preview and ticket info.',
      url: 'https://www.us11fc.com/blog/columbusvsmiamimlsblog',
      siteName: 'US11',
      images: [
        {
          url: 'https://assets.goal.com/images/v3/getty-2208819749/crop/MM5DEMBUHA5DCMJVGI5G433XMU5DENZTHI3TA===/GettyImages-2208819749.jpg?auto=webp&format=pjpg&width=3840&quality=60',
          width: 1200,
          height: 800,
          alt: 'Columbus Crew vs Inter Miami banner',
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: '2025-04-24T12:00:00Z',
      authors: [{ name: 'Mio Ristić', url: 'https://www.us11fc.com/authors/mioristic' }],
      tags: ['Columbus Crew', 'Inter Miami', 'Lionel Messi', 'MLS 2025', 'Cleveland Match'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MLS Eastern Giants Collide: Columbus vs Inter Miami',
      description:
        'Unbeaten streaks are on the line as Columbus Crew faces Inter Miami in front of a packed Cleveland crowd. Get all the details.',
      images: [
        'https://assets.goal.com/images/v3/getty-2208819749/crop/MM5DEMBUHA5DCMJVGI5G433XMU5DENZTHI3TA===/GettyImages-2208819749.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      ],
      creator: '@us11fc',
    },
  };
  
  export default function ColumbusVsMiamiMLSBlogLayout({ children }) {
    return <>{children}</>;
  }
  