import React from "react";

export const metadata = {
  title: "San Diego FC Edges Minnesota in a Fierce 1–0 Battle | US11",
  description:
    "San Diego FC defeats Minnesota United 1–0 in an intense playoff battle to reach the Western Conference Final in their debut MLS season.",
  openGraph: {
    title: "San Diego FC Edges Minnesota in a Fierce 1–0 Battle | US11",
    description:
      "A fierce 1–0 win sends San Diego FC to the Western Conference Final in their first MLS season. Full match analysis, stats, and key moments.",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2216643330/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216643330.jpg?width=1400&upscale=true",
        width: 1200,
        height: 630,
        alt: "San Diego FC celebrates win",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "San Diego FC Edges Minnesota 1–0 | US11",
    description:
      "San Diego FC reaches the Western Conference Final thanks to a thunderbolt strike from Anders Dreyer.",
    images: [
      "https://assets.goal.com/images/v3/getty-2216643330/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2216643330.jpg?width=1400&upscale=true",
    ],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
