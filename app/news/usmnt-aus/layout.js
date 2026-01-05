// app/blog/usmnt-aus/layout.js
export const metadata = {
  title: 'USMNT 2–1 Australia: Wright’s Brace, Pulisic’s Return, and a Fiery Colorado Atmosphere',
  description:
    'The USMNT earned a thrilling 2–1 victory over Australia in Colorado, fueled by Haji Wright’s brace and the return of Christian Pulisic in front of a passionate crowd.',
  keywords: [
    'USMNT',
    'Haji Wright',
    'Christian Pulisic',
    'Pochettino',
    'USMNT vs Australia',
    'Colorado soccer',
    'US Soccer',
    'friendly match',
    'soccer news',
    'football analysis',
  ],
  authors: [{ name: 'Mio Ristić' }],
  openGraph: {
    title: 'USMNT 2–1 Australia: Wright’s Brace, Pulisic’s Return, and a Fiery Colorado Atmosphere',
    description:
      'A fiery night in Colorado: USMNT came from behind to beat Australia 2–1. Haji Wright scored twice, Pulisic returned, and the atmosphere was electric.',
    url: 'https://www.us11fc.com/blog/usmnt-aus',
    siteName: 'US11',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://assets.goal.com/images/v3/blt580bb7c6f26a8ef1/weah.jpg?auto=webp&format=pjpg&width=3840&quality=60',
        width: 1200,
        height: 630,
        alt: 'USMNT match vs Australia in Colorado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USMNT 2–1 Australia: Wright’s Brace, Pulisic’s Return, and a Fiery Colorado Atmosphere',
    description:
      'Haji Wright scores twice, Pulisic returns, and Colorado brings the energy as USMNT beats Australia 2–1.',
    creator: '@MioRistic',
    images: [
      'https://assets.goal.com/images/v3/blt580bb7c6f26a8ef1/weah.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    ],
  },
  alternates: {
    canonical: 'https://www.us11fc.com/blog/usmnt-aus',
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
