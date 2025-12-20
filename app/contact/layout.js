// app/contact/layout.js
export const metadata = {
    title: "Contact",
    description: "Contact Miodrag Ristic Mikaso, a passionate sports writer and blogger. Reach out for inquiries or collaboration.",
    openGraph: {
      title: "Contact MIKASO",
      description: "Contact Miodrag Ristic Mikaso, a passionate sports writer and blogger.",
      images: ["/Mio.png"],
      type: "website",
    },
  };
  
  export default function ContactLayout({ children }) {
    return (
      <section className="w-full min-h-screen bg-white pt-[1px]">
        {children}
      </section>
    );
  }
  