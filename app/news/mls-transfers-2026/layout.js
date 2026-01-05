
import React from 'react';

export const metadata = {
  title: "MLS Transfers 2026: Biggest Moves and Roster Updates",
  description: "A full overview of the most important MLS transfers, contract extensions, and roster changes for 2026 season.",
  openGraph: {
    title: "MLS Transfers 2026: Biggest Moves and Roster Updates",
    description: "See the latest MLS transfers, contract renewals, and roster updates for the 2026 season.",
    url: "https://www.us11fc.com/news/mls-transfers-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2248300236/crop/MM5DIMJRGE5DEMZRGI5G433XMU5DAORSGE2A====/GettyImages-2248300236.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        height: 420,
        alt: "MLS Transfers 2026 overview image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Transfers 2026: Biggest Moves and Roster Updates | US11 News",
    description: "Check out the top MLS transfers, contract extensions, and roster updates for the 2026 season.",
    images: [
      "https://assets.goal.com/images/v3/getty-2248300236/crop/MM5DIMJRGE5DEMZRGI5G433XMU5DAORSGE2A====/GettyImages-2248300236.jpg?auto=webp&format=pjpg&width=1920&quality=60"
    ],
    creator: "@us11",
  },
};

export default function MLSTransfersLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      
    
      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>
    </div>
  );
}
