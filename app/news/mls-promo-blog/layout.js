export const metadata = {
    title: 'Get 25% Off MLS Gear with This Promo Code',
    description:
      'Limited time offer: Save 25% on select MLS gear using promo code 25MLS at checkout. Don’t miss out!',
    openGraph: {
      title: 'Get 25% Off MLS Gear with This Promo Code',
      description:
        'Limited time offer: Save 25% on select MLS gear using promo code 25MLS at checkout. Don’t miss out!',
      url: 'https://www.us11fc.com/blog/mls-promo-blog',
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://www.mlsstore.com/content/ws/all/1f418ebe-8a12-4321-b98f-b96446a0b0cd__1200X890.jpg?w=1200',
          width: 1200,
          height: 890,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Get 25% Off MLS Gear with This Promo Code',
      description:
        'Limited time offer: Save 25% on select MLS gear using promo code 25MLS at checkout. Don’t miss out!',
      images: [
        'https://www.mlsstore.com/content/ws/all/1f418ebe-8a12-4321-b98f-b96446a0b0cd__1200X890.jpg?w=1200',
      ],
      creator: '@mioristic',
    },
  };
  
  export default function Mls25OffPromoLayout({ children }) {
    return <>{children}</>;
  }
  