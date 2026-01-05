// app/blog/usmnt-pochettino/layout.js
export const metadata = {
  title: 'A New Era for the USMNT Under Pochettino: Bold Tactics, New Faces, and a Clear Direction',
  description:
    'The USMNT is entering a new chapter under Mauricio Pochettino with bold tactics, young players, and a clear vision for the future.',
  keywords: [
    'USMNT',
    'Pochettino',
    'soccer tactics',
    'football analysis',
    'USA national team',
    'Ecuador friendly',
    'Timothy Weah',
    'Christian Pulisic',
  ],
  authors: [{ name: 'Mio Ristić' }],
  openGraph: {
    title: 'A New Era for the USMNT Under Pochettino',
    description:
      'A new tactical identity, young stars, and an ambitious vision. Explore the rise of the USMNT under Mauricio Pochettino.',
    url: 'https://www.us11fc.com/blog/usmnt-pochettino',
    siteName: 'US11',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://assets.goal.com/images/v3/blt024caa907a00f79e/balogun3.jpg?auto=webp&format=pjpg&width=3840&quality=60',
        width: 1200,
        height: 630,
        alt: 'USMNT in action',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A New Era for the USMNT Under Pochettino',
    description:
      'Discover how Mauricio Pochettino is reshaping the USMNT with bold tactics and new faces.',
    creator: '@MioRistic',
    images: ['https://assets.goal.com/images/v3/blt024caa907a00f79e/balogun3.jpg?auto=webp&format=pjpg&width=3840&quality=60'],
  },
  alternates: {
    canonical: 'https://tvoj-domen.com/blog/usmnt-pochettino',
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
