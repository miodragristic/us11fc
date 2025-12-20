import React from "react";

export const metadata = {
  title: 'Inter Miami vs NYCFC: Allende Hat-Trick Sends Miami to MLS Cup Final',
  description:
    'Inter Miami dominate NYCFC 5-1 in the Eastern Conference Final, powered by a Tadeo Allende hat-trick and Lionel Messi’s midfield mastery. Full match recap, key stats, and tactical analysis.',
  openGraph: {
    title: 'Inter Miami vs NYCFC: Allende Hat-Trick Sends Miami to MLS Cup Final',
    description:
      'Inter Miami beat NYCFC 5-1 in the Eastern Conference Final behind Allende’s hat-trick and Messi’s playmaking. Full recap, stats, and analysis.',
    url: 'https://www.us11fc.com/blog/inter-miami-vs-nycfc',
    siteName: 'MLS Fan Store',
    images: [
      {
        url: 'https://assets.goal.com/images/v3/getty-2218021380/crop/MM5DINJRGI5DENJTHA5G433XMU5DAORSGM2Q====/GettyImages-2218021380.jpg?width=1400&upscale=true',
        width: 1200,
        height: 800,
        alt: 'Inter Miami vs NYCFC Eastern Conference Final',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inter Miami vs NYCFC: Allende Hat-Trick Sends Miami to MLS Cup Final',
    description:
      'Inter Miami dominate NYCFC 5-1 in the Eastern Conference Final, with Allende and Messi leading the way.',
    images: [
      'https://assets.goal.com/images/v3/getty-2218021380/crop/MM5DINJRGI5DENJTHA5G433XMU5DAORSGM2Q====/GettyImages-2218021380.jpg?width=1400&upscale=true',
    ],
    creator: '@mioristic',
  },
};

export default function InterMiamiNYCFCLayout({ children }) {
  return <React.Fragment>{children}</React.Fragment>;
}
