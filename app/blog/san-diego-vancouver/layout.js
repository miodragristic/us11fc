import React from "react";

export const metadata = {
  title: "Brian White’s Brace Sends Vancouver Whitecaps to MLS Cup Final | US11",
  description:
    "USMNT striker Brian White scored twice as Vancouver Whitecaps defeated San Diego FC 3–1 in the MLS Western Conference Final. Full match recap, stats, and tactical analysis.",
  openGraph: {
    title: "Brian White’s Brace Sends Vancouver Whitecaps to MLS Cup Final | US11",
    description:
      "Brian White shines with a first-half brace as Vancouver Whitecaps dominate San Diego FC 3–1 to reach their first MLS Cup Final.",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2209348682/crop/MM5DINRQGI5DENJYHE5G433XMU5DAORSGQYA====/GettyImages-2209348682.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 630,
        alt: "Brian White celebrates for Vancouver Whitecaps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian White’s Brace Sends Vancouver Whitecaps to MLS Cup Final | US11",
    description:
      "Brian White scores twice as Vancouver Whitecaps defeat San Diego FC 3–1 and advance to their first MLS Cup Final.",
    images: [
      "https://assets.goal.com/images/v3/getty-2209348682/crop/MM5DINRQGI5DENJYHE5G433XMU5DAORSGQYA====/GettyImages-2209348682.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
  },
};

export default function Layout({ children }) {
  // Ovo je čist layout fajl, samo renderuje children
  return <>{children}</>;
}
