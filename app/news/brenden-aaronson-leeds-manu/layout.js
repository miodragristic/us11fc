// app/news/[slug]/layout.jsx
export const metadata = {
  title: 'Brenden Aaronson Shines as Leeds Draw 1-1 with ManU',
  description:
    'Brenden Aaronson scores his second Premier League goal of the season to help Leeds United secure a 1-1 draw against Manchester United at Elland Road.',
  openGraph: {
    title: 'Aaronson Leads Leeds: 1-1 Draw with ManU',
    description:
      'U.S. midfielder Brenden Aaronson continues his fine form in Europe, scoring and creating opportunities in Premier League action for Leeds United.',
    url: 'https://us11fc.com/news/brenden-aaronson-leeds-manu',
    siteName: 'MLS Fan Store',
    images: [
      {
        url: 'https://assets.goal.com/images/v3/getty-2180302529/crop/MM5DIOJQGY5DENZWGA5G433XMU5DENJWHIYA====/GettyImages-2180302529.jpg?auto=webp&format=pjpg&width=1920&quality=60',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brenden Aaronson Leads Leeds to 1-1 Draw vs ManU',
    description:
      'Aaronson scores his second Premier League goal and continues to impress for Leeds United and the U.S. national team.',
    images: [
      'https://assets.goal.com/images/v3/getty-2180302529/crop/MM5DIOJQGY5DENZWGA5G433XMU5DENJWHIYA====/GettyImages-2180302529.jpg?auto=webp&format=pjpg&width=1920&quality=60',
    ],
    creator: '@mikkyristic',
  },
};

export default function NewsLayout({ children }) {
  return (
    <main className="w-full bg-white text-[#020617] min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">{children}</div>
    </main>
  );
}
