import React from "react";

export const metadata = {
  title: "Today Is the Day: Conference Finals — Who Will Reach the MLS Cup Final? | US11",
  description:
    "Preview of the 2025 MLS Eastern and Western Conference Finals, featuring Inter Miami vs. NYCFC and San Diego FC vs. Vancouver Whitecaps. Full analysis and ticket links included.",
  openGraph: {
    title: "MLS Conference Finals Preview | US11",
    description:
      "Eastern and Western Conference Finals preview: Inter Miami vs. NYCFC, San Diego FC vs. Vancouver Whitecaps. Tickets, storylines, and team analysis.",
    url: "https://us11fc.com/blog/conference-finals",
    images: [
      {
        url: "https://i.ibb.co/Swc5SdWv/Untitled-design.png",
        width: 1200,
        height: 630,
        alt: "MLS playoff atmosphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Conference Finals Preview | US11",
    description:
      "Preview of Inter Miami vs. NYCFC and San Diego FC vs. Vancouver Whitecaps with ticket links and key storylines.",
    url: "https://us11fc.com/blog/conference-finals",
    images: [
      "https://i.ibb.co/0jjbnzb9/Soccer-Stars-in-Explosive-Action.png",
    ],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
