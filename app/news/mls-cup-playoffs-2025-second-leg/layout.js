export const metadata = {
  title: "MLS Cup Playoffs 2025 – Second Leg Recap: Inter Miami, Philadelphia, San Diego & More",
  description:
    "Full recap of the second leg of the 2025 MLS Cup Playoffs, including highlights, scores, and player performances from Inter Miami, Philadelphia Union, San Diego FC, and others.",
  openGraph: {
    title: "MLS Cup Playoffs 2025 – Second Leg Recap: Inter Miami, Philadelphia, San Diego & More",
    description:
      "Relive the drama of the MLS 2025 Playoffs second leg with results, key moments, and standout performances from all matches.",
    url: "https://www.us11fc.com/blog/mls-cup-playoffs-2025-second-leg",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2243553938/crop/MM5DGMBWGQ5DCNZSGQ5G433XMU5DAORRGU4Q====/GettyImages-2243553938.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 800,
        alt: "MLS Cup Playoffs 2025 Highlights",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Cup Playoffs 2025 – Second Leg Recap: Inter Miami, Philadelphia, San Diego & More | US11 Blog",
    description:
      "Highlights and scores from the second leg of the 2025 MLS Cup Playoffs: Inter Miami, Philadelphia Union, San Diego FC, and more.",
    images: [
      "https://assets.goal.com/images/v3/getty-2243553938/crop/MM5DGMBWGQ5DCNZSGQ5G433XMU5DAORRGU4Q====/GettyImages-2243553938.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@us11",
  },
};

export default function MLSCupPlayoffs2025SecondLegLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="max-w-5xl mx-auto py-12 px-4 md:px-0">
        {children}
      </main>
    </div>
  );
}
