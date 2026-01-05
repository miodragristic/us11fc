// app/chucky-lozano/layout.js

export const metadata = {
  title: 'Chucky Lozano: San Diego’s Last-Minute Hero',
  description:
    'San Diego FC clinched a thrilling victory against LA Galaxy thanks to a last-minute header from Hirving "Chucky" Lozano. Highlights and details here.',
  openGraph: {
    title: 'Chucky Lozano: San Diego’s Last-Minute Hero',
    description:
      'Discover how Hirving Lozano’s late goal secured a win for San Diego FC over LA Galaxy.',
    url: 'https://www.us11fc.com/',  
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
    title: 'Chucky Lozano: San Diego’s Last-Minute Hero',
    description:
      'San Diego FC secures a dramatic win with a late goal from Hirving Lozano. Watch the highlights and get tickets.',
    images: [
      'https://assets.goal.com/images/v3/getty-2216178867/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216178867.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    ],
    creator: '@tvojTwitterHandle', // zameni ako imaš
  },
};

export default function ChuckyLozanoLayout({ children }) {
  return <>{children}</>;
}
