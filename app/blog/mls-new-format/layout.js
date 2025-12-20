export const metadata = {
  title: "MLS Moves to Global Calendar: Summer-to-Spring Season Starts in 2027 | US11",
  description:
    "Major League Soccer (MLS) shifts to a July–May season starting in 2027, aligning with top leagues worldwide, boosting transfers, player development, and fan engagement.",
  openGraph: {
    title: "MLS Moves to Global Calendar: Summer-to-Spring Season Starts in 2027",
    description:
      "Starting in 2027, MLS matches will follow a global calendar, with May playoffs and better integration with international competitions.",
    url: "https://www.us11fc.com/blog/mls-new-format",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2240501357/crop/MM5DINRYGQ5DENRTGU5G433XMU5DAORSGQ2A====/GettyImages-2240501357.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 800,
        alt: "MLS Global Calendar Shift 2027",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Moves to Global Calendar | Summer-to-Spring Season 2027 | US11 Blog",
    description:
      "MLS shifts to a July–May schedule starting in 2027, aligning with top leagues worldwide and optimizing transfers, player development, and fan engagement.",
    images: [
      "https://assets.goal.com/images/v3/getty-2240501357/crop/MM5DINRYGQ5DENRTGU5G433XMU5DAORSGQ2A====/GettyImages-2240501357.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@us11",
  },
};

export default function MLSGlobalCalendarLayout({ children }) {
  return <>{children}</>;
}
