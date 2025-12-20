// app/blog/usl-one-champions-layout.jsx
export const metadata = {
  title: "One Knoxville Shock the League: A Title Win That Changes Everything",
  description:
    "One Knoxville SC claimed their first USL League One title in style. Here’s how they dominated Spokane and what it means for the league.",
  openGraph: {
    title: "One Knoxville Shock the League: A Title Win That Changes Everything",
    description:
      "A detailed breakdown of One Knoxville SC's championship win over Spokane, including key moments, player highlights, and fan reactions.",
    url: "https://www.us11fc.com/blog/usl-one-champions",
    siteName: "US11",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/USL_League_One_abbr_light_logo.svg/1920px-USL_League_One_abbr_light_logo.svg.png",
        width: 1920,
        height: 1080,
        alt: "One Knoxville SC celebrating championship",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Knoxville Shock the League: A Title Win That Changes Everything | US11 Blog",
    description:
      "One Knoxville SC dominated Spokane to win their first USL League One title. A full recap of the historic victory and what it means for the league.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/USL_League_One_abbr_light_logo.svg/1920px-USL_League_One_abbr_light_logo.svg.png",
    ],
    creator: "@USLLeagueOne",
  },
};

export default function USLOneChampionsLayout({ children }) {
  return <>{children}</>;
}
