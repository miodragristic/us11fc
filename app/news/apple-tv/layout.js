export const metadata = {
  title: "Major League Soccer Coming to Apple TV in 2026 | US11",
  description:
    "Starting in 2026, all MLS matches will stream on Apple TV with no additional subscription required, delivering every match to fans globally.",
  openGraph: {
    title: "Major League Soccer Coming to Apple TV in 2026",
    description:
      "Full story: Apple and MLS announce that starting 2026, every MLS match, including Leagues Cup, MLS All-Star, and playoffs, will be available on Apple TV.",
    url: "https://www.us11fc.com/blog/apple-tv",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2201986577/crop/MM5DEMRVGA5DCMRWGY5G433XMU5DAORRGE3Q====/GettyImages-2201986577.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 800,
        alt: "MLS on Apple TV 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Streaming on Apple TV Starting 2026 | US11 Blog",
    description:
      "Apple TV will host all Major League Soccer matches beginning in 2026, including playoffs, All-Star Game, and Leagues Cup, with no extra cost.",
    images: [
      "https://assets.goal.com/images/v3/getty-2201986577/crop/MM5DEMRVGA5DCMRWGY5G433XMU5DAORRGE3Q====/GettyImages-2201986577.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@us11",
  },
};

export default function AppleTVLayout({ children }) {
  return <>{children}</>;
}
