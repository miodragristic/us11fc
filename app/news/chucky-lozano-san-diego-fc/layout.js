// app/news/[slug]/layout.jsx
export const metadata = {
  title: 'Chucky Lozano Will Not Be Part of San Diego FC Sporting Plans',
  description:
    'San Diego FC confirms Hirving “Chucky” Lozano will not be part of the club’s sporting plans, despite being the second-leading scorer last season.',
  openGraph: {
    title: 'Chucky Lozano Out of San Diego FC Sporting Plans',
    description:
      'Hirving Lozano contributed 11 goals and 11 assists last season but is not in San Diego FC’s plans moving forward.',
    url: 'https://us11fc.com/news/chucky-lozano-san-diego-fc',
    siteName: 'MLS Fan Store',
    images: [
      {
        url: 'https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60',
        width: 1200,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chucky Lozano Will Not Be Part of San Diego FC Sporting Plans',
    description:
      'Despite scoring 11 goals last season, Hirving “Chucky” Lozano is not included in San Diego FC’s sporting plans.',
    images: [
      'https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    ],
    creator: '@mikkyristic',
  },
};

export default function NewsLayout({ children }) {
  return (
    <main className="w-full bg-white text-[#020617] min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
        {children}
      </div>
    </main>
  );
}
