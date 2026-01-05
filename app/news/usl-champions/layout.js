// app/blog/pittsburgh-tulsa-final-layout.jsx

export const metadata = {
  title: "Pittsburgh Win USL Championship After Dramatic Penalty Shootout",
  description:
    "Pittsburgh Riverhounds defeat FC Tulsa in a dramatic USL Championship Final after a tense 120-minute battle and a decisive penalty shootout.",
  openGraph: {
    title: "Pittsburgh Win USL Championship After Dramatic Penalty Shootout",
    description:
      "A full breakdown of Pittsburgh Riverhounds’ championship victory over FC Tulsa, including key moments, tactical analysis, and player highlights.",
    url: "https://www.us11fc.com/blog/usl-champions",
    siteName: "US11",
    images: [
      {
        url: "https://the18.com/sites/default/files/feature-images/GettyImages-1258549217.jpg",
        width: 1920,
        height: 1080,
        alt: "Pittsburgh vs Tulsa USL Championship Final",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pittsburgh Win USL Championship After Dramatic Penalty Shootout | US11 Blog",
    description:
      "Full recap of Pittsburgh's dramatic penalty shootout victory over FC Tulsa in the USL Championship Final.",
    images: [
      "https://the18.com/sites/default/files/feature-images/GettyImages-1258549217.jpg",
    ],
    creator: "@USLChampionship",
  },
};

export default function PittsburghTulsaFinalLayout({ children }) {
  return <>{children}</>;
}
