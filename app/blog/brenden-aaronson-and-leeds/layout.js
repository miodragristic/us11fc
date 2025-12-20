import React from "react";

export const metadata = {
  title: "Brenden Aaronson and Leeds United: Is It Time to Reevaluate His Role? | US11",
  description:
    "Analysis of Brenden Aaronson's role at Leeds United, reviewing his recent performances, stats, and fan reactions.",
  openGraph: {
    title: "Brenden Aaronson and Leeds United | US11",
    description:
      "Reviewing Brenden Aaronson’s playing time and impact at Leeds United. Stats, performances, and tactical insights.",
    url: "https://us11fc.com/blog/brenden-aaronson-and-leeds",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2165145829/crop/MM5DEMZZGA5DCMZUGQ5G433XMU5DEOJYHIYTGMA=/GettyImages-2165145829.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 630,
        alt: "Brenden Aaronson at Leeds United",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brenden Aaronson and Leeds United | US11",
    description:
      "Analysis of Brenden Aaronson’s role and performances at Leeds United.",
    url: "https://us11fc.com/blog/brenden-aaronson-and-leeds",
    images: [
      "https://assets.goal.com/images/v3/getty-2165145829/crop/MM5DEMZZGA5DCMZUGQ5G433XMU5DEOJYHIYTGMA=/GettyImages-2165145829.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
