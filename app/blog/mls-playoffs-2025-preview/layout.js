export const metadata = {
  title: "MLS Playoffs 2025: The Final Eight — Drama, Stars, and Glory Await",
  description:
    "Full preview of the 2025 MLS Cup Playoffs — key matchups, players, and predictions for Inter Miami, Philadelphia Union, LAFC, and others.",
  openGraph: {
    title: "MLS Playoffs 2025: The Final Eight — Drama, Stars, and Glory Await",
    description:
      "Preview of the 2025 MLS Playoffs — with Messi, Suárez, Son, Lozano, and more fighting for the MLS Cup. Read full analysis, fixtures, and predictions.",
    url: "https://www.us11fc.com/blog/mls-playoffs-2025-preview",
    siteName: "US11",
    images: [
      {
        url: "https://www.365scores.com/es/news/wp-content/uploads/2025/07/GettyImages-1892797976-1024x694.jpg",
        width: 1200,
        height: 800,
        alt: "MLS Playoffs 2025 preview",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MLS Playoffs 2025: The Final Eight — Drama, Stars, and Glory Await | US11 Blog",
    description:
      "MLS Cup Playoffs 2025 — full breakdown of key matches, players, and predictions for Inter Miami, Philadelphia Union, San Diego FC, LAFC, and more.",
    images: [
      "https://www.365scores.com/es/news/wp-content/uploads/2025/07/GettyImages-1892797976-1024x694.jpg",
    ],
    creator: "@us11",
  },
};

export default function MLSPlayoffs2025PreviewLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>
    </div>
  );
}
