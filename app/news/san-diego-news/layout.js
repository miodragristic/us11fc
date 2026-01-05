// app/san-diego-blog/layout.js

export const metadata = {
    title: 'San Diego: A New MLS Team Ready for Big Challenges',
    description:
      'Discover how San Diego FC is preparing for their MLS debut, featuring star signing Hirving Lozano and a promising young roster.',
    openGraph: {
      title: 'San Diego: A New MLS Team Ready for Big Challenges',
      description:
        'Discover how San Diego FC is preparing for their MLS debut, featuring star signing Hirving Lozano and a promising young roster.',
      url: 'https://www.us11fc.com/san-diego-blog', // zameni stvarnim URL-om
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://assets.goal.com/images/v3/getty-2202758631/crop/MM5DGNZXGI5DEMJSGI5G433XMU5DAORRHE3A====/GettyImages-2202758631.jpg?auto=webp&format=pjpg&width=3840&quality=60',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'San Diego: A New MLS Team Ready for Big Challenges',
      description:
        'Hirving Lozano leads the charge as San Diego FC prepares for its inaugural MLS season.',
      images: [
        'https://assets.goal.com/images/v3/getty-2202758631/crop/MM5DGNZXGI5DEMJSGI5G433XMU5DAORRHE3A====/GettyImages-2202758631.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      ],
      creator: '@tvojTwitterHandle', // zameni sa tvojim ako imaš
    },
  };
  
  export default function SanDiegoBlogLayout({ children }) {
    return <>{children}</>;
  }
  