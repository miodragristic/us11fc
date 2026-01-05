// app/blog/mls-playoffs-format/layout.jsx

export const metadata = {
  title: "MLS Playoffs Format: Is It Time for a Change?",
  description: "A critical analysis of the MLS Playoffs format, exploring current issues, main criticisms, and possible solutions for a more competitive postseason.",
  openGraph: {
    title: "MLS Playoffs Format: Is It Time for a Change?",
    description: "A professional breakdown of MLS playoff system, its flaws, and proposals for improvement.",
    url: "https://www.us11fc.com/blog/mls-playoffs-format",
    siteName: "US11",
    images: [
      {
        url: "https://images.squarespace-cdn.com/content/v1/5c9a73454d87117017c01508/1686249453251-OXCODUQ3QUF79G4L38GW/525050.jpg",
        width: 1200,
        height: 800,
        alt: "MLS Playoffs Format Analysis",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Playoffs Format: Is It Time for a Change? | US11 Blog",
    description: "Insights and analysis on MLS playoff system, its challenges, and proposed solutions for better competition.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/5c9a73454d87117017c01508/1686249453251-OXCODUQ3QUF79G4L38GW/525050.jpg",
    ],
    creator: "@us11",
  },
};

export default function MLSPlayoffsLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main>{children}</main>
    </div>
  );
}
