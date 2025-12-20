export const metadata = {
  title: "Portland Timbers & Felipe Mora Get Groove Back in Wild Card Win",
  description:
    "Felipe Mora’s brace powered Portland Timbers past Real Salt Lake 3–1 in the 2025 MLS Wild Card match. Read the full playoff recap on US11.",
  openGraph: {
    title: "Portland Timbers & Felipe Mora Get Groove Back in Wild Card Win",
    description:
      "Felipe Mora struck twice as Portland Timbers beat Real Salt Lake 3–1 in the Audi 2025 MLS Cup Playoffs Wild Card round. Mora, Miller, and Neville’s men are on the move.",
    url: "https://www.us11fc.com/blog/portland-real-playoffs",
    siteName: "US11",
    images: [
      {
        url: "cloudfront-us-east-1.images.arcpublishing.com",
        width: 1200,
        height: 800,
        alt: "Felipe Mora celebrates scoring for Portland Timbers vs Real Salt Lake in the 2025 MLS Cup Playoffs",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Portland Timbers & Felipe Mora Get Groove Back in Wild Card Win | US11 Blog",
    description:
      "Felipe Mora led the Timbers with two goals in their 3–1 playoff victory over Real Salt Lake. Full recap on US11.",
    images: [
      "https://assets.goal.com/images/v3/getty-2242036909/crop/MM5DGNZRGY5DEMBZGA5G433XMU5DAORRHEZQ====/GettyImages-2242036909.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@us11",
  },
};

export default function PortlandRSLPlayoffsLayout({ children }) {
  return (
    <main className="bg-white text-[#020617] min-h-screen">
      {children}
    </main>
  );
}
