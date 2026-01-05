export const metadata = {
  title: "MLS Cup Final 2025: Inter Miami FC vs Vancouver Whitecaps",
  description:
    "Full preview of the 2025 MLS Cup Final — key players, match details, kickoff times, and fan gear for Inter Miami and Vancouver Whitecaps.",
  openGraph: {
    title: "MLS Cup Final 2025: Inter Miami FC vs Vancouver Whitecaps",
    description:
      "Preview of the 2025 MLS Cup Final — Messi, Muller, and more stars battle for glory. Full breakdown, match details, and ticket info.",
    url: "https://www.us11fc.com/blog/mls-final-2025",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/NdY7jggd/Dynamic-Soccer-Stars-in-Action.png",
        width: 1200,
        height: 800,
        alt: "MLS Cup Final 2025 preview",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Cup Final 2025: Inter Miami FC vs Vancouver Whitecaps | US11 Blog",
    description:
      "Full breakdown of the MLS Cup Final 2025: key players, kickoff times, ticket links, and fan gear for Inter Miami and Vancouver Whitecaps.",
    images: ["https://i.ibb.co/NdY7jggd/Dynamic-Soccer-Stars-in-Action.png"],
    creator: "@us11",
  },
};

export default function MLSFinal2025Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>
    </div>
  );
}
