export const metadata = {
  title: "Top 10 Things We Will Remember From the 2025 MLS Season",
  description: "A detailed look at the most memorable moments, transfers, and highlights from the 2025 MLS season.",
  openGraph: {
    title: "Top 10 Things We Will Remember From the 2025 MLS Season",
    description: "Explore the key moments, transfers, and standout performances from MLS 2025.",
    url: "https://www.us11fc.com/blog/top-10-mls-2025",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2202000448/crop/MM5DEMJZGI5DCMRTGM5G433XMU5DCMJYHIZDK===/GettyImages-2202000448.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        height: 420,
        alt: "MLS 2025 overview image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 10 Things We Will Remember From the 2025 MLS Season | US11 News",
    description: "Check out the key moments, transfers, and highlights from MLS 2025.",
    images: [
      "https://assets.goal.com/images/v3/getty-2202000448/crop/MM5DEMJZGI5DCMRTGM5G433XMU5DCMJYHIZDK===/GettyImages-2202000448.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    ],
    creator: "@us11",
  },
};

export default function Top10MLSLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>
    </div>
  );
}
