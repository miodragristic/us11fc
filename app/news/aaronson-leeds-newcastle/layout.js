export const metadata = {
  title: 'Aaronson Stars for Leeds, but Late Handball Costs the Visitors',
  description:
    'Brenden Aaronson shines with two goals for Leeds United, but a late handball concedes a penalty, allowing Newcastle to snatch a dramatic 4-3 victory at St James’ Park.',
  openGraph: {
    title: 'Aaronson Stars for Leeds, but Late Handball Costs the Visitors',
    description:
      'Brenden Aaronson delivers a standout performance in Leeds’ Premier League clash with Newcastle, scoring twice before a late penalty changes the outcome.',
    url: 'https://us11fc.com/news/aaronson-leeds-newcastle',
    siteName: 'MLS Fan Store',
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ad29YihheEJBbsOdzkp3NkEx0JipAnWdrA&s',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aaronson Stars for Leeds, but Late Handball Costs the Visitors',
    description:
      'Brenden Aaronson scores twice in a thrilling match against Newcastle, but a late handball leads to a penalty and Newcastle’s dramatic win.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ad29YihheEJBbsOdzkp3NkEx0JipAnWdrA&s',
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