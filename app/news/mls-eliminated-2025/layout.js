export const metadata = {
  title: 'MLS 2025: Teams Eliminated from Audi MLS Cup Playoffs',
  description:
    'Stay updated on the 2025 MLS playoff race — see which teams have been officially eliminated from the Audi MLS Cup Playoffs before Decision Day.',
  openGraph: {
    title: 'MLS 2025: Teams Eliminated from Audi MLS Cup Playoffs',
    description:
      'Complete list of MLS teams eliminated from the 2025 Audi MLS Cup Playoffs — with updates for both Eastern and Western Conferences.',
    url: 'https://www.us11fc.com/blog/mls-eliminated-2025',
    siteName: 'US11 Fan Hub',
    images: [
      {
        url: 'https://cdn.wsn.com/filters:format(webp)/filters:no_upscale()/fit-in/1200x585/1752735435/los-angeles-fc-vs-la-galaxy-2025-07-19.jpg',
        width: 1200,
        height: 630,
        alt: 'MLS 2025 Playoffs Image',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLS 2025: Teams Eliminated from Audi MLS Cup Playoffs',
    description:
      'See which MLS teams are already out of playoff contention in the 2025 season — latest analysis and conference breakdown.',
    images: [
      'https://cdn.wsn.com/filters:format(webp)/filters:no_upscale()/fit-in/1200x585/1752735435/los-angeles-fc-vs-la-galaxy-2025-07-19.jpg',
    ],
    creator: '@mioristic', // stavi svoj Twitter handle ako imaš
  },
};

export default function MLS2025Layout({ children }) {
  return <>{children}</>;
}
