export const metadata = {
title: "Cristiano Ronaldo Is Coming to Atlanta: Georgia Prepares for a Football Spectacle",
description: "Ronaldo heads to Atlanta for the USMNT friendly against Portugal on March 31, 2026. Fans can witness one of football’s greatest players live at Mercedes-Benz Stadium.",
openGraph: {
title: "Cristiano Ronaldo Is Coming to Atlanta: Georgia Prepares for a Football Spectacle",
description: "See Cristiano Ronaldo live in Atlanta as the USMNT hosts Portugal in a 2026 World Cup prep friendly.",
url: "https://www.us11fc.com/blog/ronaldo-in-atlanta](https://www.us11fc.com/blog/ronaldo-in-atlanta",
siteName: "US11",
images: [
{
url: "https://assets.goal.com/images/v3/getty-2233954657/crop/MM5DEMZTGY5DCMZRGQ5G433XMU5DEMBQG45DS===/GettyImages-2233954657.jpg?auto=webp&format=pjpg&width=3840&quality=60",
width: 1200,
height: 800,
alt: "Cristiano Ronaldo in Atlanta",
},
],
locale: "en_US",
type: "article",
},
twitter: {
card: "summary_large_image",
title: "Cristiano Ronaldo Is Coming to Atlanta: Georgia Prepares for a Football Spectacle | US11 Blog",
description: "Ronaldo in Atlanta for the USMNT vs Portugal friendly: date, venue, and fan insights.",
images: ["[https://assets.goal.com/images/v3/getty-2233954657/crop/MM5DEMZTGY5DCMZRGQ5G433XMU5DEMBQG45DS===/GettyImages-2233954657.jpg?auto=webp&format=pjpg&width=3840&quality=60](https://assets.goal.com/images/v3/getty-2233954657/crop/MM5DEMZTGY5DCMZRGQ5G433XMU5DEMBQG45DS===/GettyImages-2233954657.jpg?auto=webp&format=pjpg&width=3840&quality=60)"],
creator: "@us11",
},
};

export default function RonaldoLayout({ children }) {
return ( <div className="min-h-screen bg-white text-[#020617]"> <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
{children} </main> </div>
);
}
