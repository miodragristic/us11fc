export const metadata = {
  title: "Lionel Messi Extends Inter Miami Contract Through 2028 | US11 Blog",
  description:
    "Lionel Messi stays with Inter Miami CF until 2028, continuing his legendary MLS career. Read the full story and what to expect in Miami.",
  openGraph: {
    title: "Lionel Messi Extends Inter Miami Contract Through 2028",
    description:
      "The GOAT stays in Miami! Messi signs a contract extension through 2028, ready to lead Inter Miami CF in MLS and beyond.",
    url: "https://www.us11fc.com/blog/messi-inter-miami-extension",
    siteName: "US11",
    images: [
      {
        url: "https://cyprus-mail.com/image/s1100x733/fill/webp/path/wp-content/uploads/2023/07/messi.jpg",
        width: 1200,
        height: 675,
        alt: "Lionel Messi celebrates with Inter Miami fans after scoring",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lionel Messi Extends Inter Miami Contract Through 2028 | US11 Blog",
    description:
      "Messi signs a contract extension with Inter Miami CF through 2028. Read the full story on US11.",
    images: [
      "https://assets.goal.com/images/v3/getty-2144908515/crop/MM5DGNZRGY5DEMBZGA5G433XMU2DKOBRGA====/GettyImages-2144908515.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@us11",
  },
};

export default function MessiBlogLayout({ children }) {
  return (
    <div className="bg-white min-h-screen w-full px-4 md:px-0">
      <div className="max-w-5xl mx-auto py-12">
        {children}
      </div>
    </div>
  );
}
