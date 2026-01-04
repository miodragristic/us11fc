import React from "react";

export const metadata = {
  title: "MLS Hall of Fame: David Beckham | US11",
  description:
    "David Beckham's impact on MLS, LA Galaxy, and global football culture, from his signing in 2007 to his legacy today.",
  openGraph: {
    title: "MLS Hall of Fame: David Beckham | US11",
    description:
      "A deep dive into David Beckham’s MLS career, LA Galaxy influence, and his legacy in global football.",
    url: "https://us11fc.com/blog/mls-hall-of-fame/david-beckham",
    images: [
      {
        url: "https://i.ibb.co/kVfLGrpP/david-beckham-soccer-field-22396823.webp",
        width: 1200,
        height: 630,
        alt: "David Beckham LA Galaxy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Hall of Fame: David Beckham | US11",
    description:
      "Explore David Beckham’s MLS journey and his transformative role at LA Galaxy.",
    url: "https://us11fc.com/blog/mls-hall-of-fame/david-beckham",
    images: [
      "https://i.ibb.co/kVfLGrpP/david-beckham-soccer-field-22396823.webp",
    ],
  },
};

export default function Layout({ children }) {
  return (
    <div className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
        {children}
      </div>
    </div>
  );
}
