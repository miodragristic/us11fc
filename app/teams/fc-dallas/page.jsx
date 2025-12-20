import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = ({ teamSlug = 'fc-dallas' }) => {
  const players = [
    // { name: 'Geovane Jesus', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-dal/ll2qsmq5tkwxyaasdiil.jpg', link: './geovanejesus' },
    // { name: 'Lalas Abubakar', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-dal/yckl7vbzz9bnvpy8pss9.jpg', link: './lalasabubakar' },
    { name: 'Sebastian Lletget', image: 'https://cloudfront-us-east-1.images.arcpublishing.com/dmn/5IRRAYDKIBHDPJUIDYYBVVEGQQ.jpg', slug: './lletget' },
    // { name: 'Alan Velasco', image: 'https://cloudfront-us-east-1.images.arcpublishing.com/dmn/2DQN4PVO6NFAZPMIM57CMRA74E.jpg', link: './velasco' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <Link
            key={player.slug}
            href={`/teams/fc-dallas/${player.slug}`}
            className="group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={player.image}
              alt={player.name}
              className="h-64 w-full object-cover mb-4 rounded-lg"
              style={{ objectPosition: 'center 2%' }}
            />
            <h3 className="text-lg font-semibold text-center text-[#020617]">{player.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

const FCDallas = () => {
  const items = [
    {
      "title": "Men's FC Dallas adidas Navy 2024 After Burner Authentic Jersey",
      "brand": "adidas",
      "team": "FC Dallas",
      "color": "Navy",
      "year": 2024,
      "price": "$159.99",
      "shipsFree": true,
      "status": "In Stock",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-adidas-navy-fc-dallas-2024-after-burner-authentic-jersey_ss5_p-201092075+pv-1+u-q8gavc9l7ywcix8huitp+v-nzyvnfd2zf3obgp8juer.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gOqbjO"
    },
    {
      "title": "Men's FC Dallas Mitchell & Ness Dallas Burn City Full-Snap Satin Jacket",
      "brand": "Mitchell & Ness",
      "team": "FC Dallas / Dallas Burn",
      "color": "Unknown",
      "price": "$149.99",
      "shipsFree": true,
      "status": "Ready To Ship",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-mitchell-and-ness-white-dallas-burn-city-full-snap-satin-jacket_ss5_p-5282544+pv-1+u-uobfzdsfztxlv1hbjnx0+v-40rnh3yqybeydqcgphws.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/BnOXrx"
    },
    {
      "title": "Men's Dallas Burn Mitchell & Ness Black Historic Logo Since '96 Two-Tone Snapback Hat",
      "brand": "Mitchell & Ness",
      "team": "Dallas Burn",
      "color": "Black",
      "price": "$18.99",
      "originalPrice": "$37.99",
      "status": "Ready To Ship",
      "lastChecked": "2022-01-07",
      "imageUrl": "https://images.footballfanatics.com/dallas-burn/mens-mitchell-and-ness-black-dallas-burn-historic-logo-since-96-two-tone-snapback-hat_pi4437000_altimages_ff_4437383-775b3a32882f0872b14falt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/OeORgz"
    },
    {
      "title": "Men's Dallas Burn Mitchell & Ness Black/Green Historic Logo Since '96 Foundation Script Snapback Hat",
      "brand": "Mitchell & Ness",
      "team": "Dallas Burn",
      "color": "Black/Green",
      "price": "$15.99",
      "originalPrice": "$31.99",
      "status": "Ready To Ship",
      "lastChecked": "2022-01-07",
      "imageUrl": "https://images.footballfanatics.com/dallas-burn/mens-mitchell-and-ness-black/green-dallas-burn-historic-logo-since-96-foundation-script-snapback-hat_pi4437000_altimages_ff_4437391-fbf20fb9c9ef5ff31f20alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQnBO"
    },
    {
      "title": "Men's FC Dallas Mitchell & Ness Red Mesh V-Neck T-Shirt",
      "brand": "Mitchell & Ness",
      "team": "FC Dallas",
      "color": "Red",
      "price": "$44.99",
      "originalPrice": "$89.99",
      "shipsFree": true,
      "status": "Ready To Ship",
      "availability": "Almost Gone",
      "lastChecked": "2022-07-18",
      "imageUrl": "https://images.footballfanatics.com/dallas-burn/mens-mitchell-and-ness-red-fc-dallas-mesh-v-neck-t-shirt_pi4851000_altimages_ff_4851017-cae35a1550a7c57703e4alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/4GyebM"
    },
    {
      "title": "Men's Dallas Burn Mitchell & Ness Red Historic Logo Since '96 Jersey Hook Snapback Hat",
      "brand": "Mitchell & Ness",
      "team": "Dallas Burn",
      "color": "Red",
      "price": "$18.99",
      "originalPrice": "$37.99",
      "status": "Ready To Ship",
      "lastChecked": "2022-01-17",
      "imageUrl": "https://images.footballfanatics.com/dallas-burn/mens-mitchell-and-ness-red-dallas-burn-historic-logo-since-96-jersey-hook-snapback-hat_pi4437000_altimages_ff_4437379-94f1e5788847c41949cfalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOkoQq"
    },
    {
      "title": "Dallas Burn Strideline Since '96 Crew Socks",
      "brand": "Strideline",
      "team": "Dallas Burn",
      "color": "Unknown",
      "price": "$19.99",
      "status": "Ready To Ship",
      "availability": "Almost Gone",
      "imageUrl": "https://images.footballfanatics.com/strideline-dallas-burn-since-96-crew-socks_ss5_p-5348262+u-kcnypktipfm3jta2heow+v-kethbakmvd71katqkn6r.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/N9RKZv"
    },
    {
      "title": "Men's Dallas Burn Mitchell & Ness Red Vertical Tie-Dye Top",
      "brand": "Mitchell & Ness",
      "team": "Dallas Burn",
      "color": "Red (Tie-Dye)",
      "price": "$44.99",
      "originalPrice": "$89.99",
      "shipsFree": true,
      "status": "Ready To Ship",
      "lastChecked": "2022-06-01",
      "imageUrl": "https://images.footballfanatics.com/dallas-burn/mens-mitchell-and-ness-red-dallas-burn-vertical-tie-dye-top_pi4851000_altimages_ff_4851055-6bfdd35e0519c8b4a519alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/LKOPVL"
    },
    {
      "title": "Men's Dallas Burn Mitchell & Ness Red/Green Since '96 Split Color Short Sleeve Hoodie",
      "brand": "Mitchell & Ness",
      "team": "Dallas Burn",
      "color": "Red/Green",
      "price": "$34.99",
      "originalPrice": "$64.99",
      "shipsFree": true,
      "status": "Ready To Ship",
      "availability": "Almost Gone",
      "lastChecked": "2021-04-06",
      "imageUrl": "https://images.footballfanatics.com/dallas-burn/mens-mitchell-and-ness-red/green-dallas-burn-since-96-split-color-short-sleeve-hoodie_pi3896000_altimages_ff_3896084-2f128ed4df9d502b98d5alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/9LnWR0"
    },
    {
      "title": "Youth FC Dallas adidas Light Blue 2025 The Inferno Kit Replica Jersey",
      "brand": "adidas",
      "team": "FC Dallas",
      "color": "Light Blue",
      "year": 2025,
      "price": "$79.99",
      "shipsFree": true,
      "status": "In Stock",
      "category": "Youth Jersey",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/youth-adidas-light-blue-fc-dallas-2025-the-inferno-kit-replica-jersey_ss5_p-202658583+pv-1+u-qwyohgj9311ebnyn3rzz+v-oppdpmwrb5t3hvrb8fsk.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55yb69"
    },
    {
      "title": "Men's FC Dallas Black Arch Smoke T-Shirt",
      "brand": "Unknown",
      "team": "FC Dallas",
      "color": "Black",
      "price": "$17.99",
      "originalPrice": "$34.99",
      "status": "In Stock",
      "lastChecked": "2019-03-12",
      "category": "Men T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-black-fc-dallas-arch-smoke-t-shirt_ss5_p-3305850+pv-1+u-mjjhf4clbhcgocmns86v+v-r4ai2aslpbol9hm5jf24.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/APno9x"
    },
    {
      "title": "Men's FC Dallas adidas Navy 2025 Jersey Hook AEROREADY T-Shirt",
      "brand": "adidas",
      "team": "FC Dallas",
      "color": "Navy",
      "year": 2025,
      "price": "$39.99",
      "shipsFree": true,
      "status": "Ready To Ship",
      "availability": "Almost Gone",
      "category": "Men T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-adidas-navy-fc-dallas-2025-jersey-hook-aeroready-t-shirt_ss5_p-201664620+pv-1+u-oalhxsjppoeezwatcxse+v-q62h7a7ivvlobvoomzyr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/19y50a"
    },
    {
      "title": "Men's FC Dallas Fanatics Heather Gray Low Block Trucker Adjustable Hat",
      "brand": "Fanatics",
      "team": "FC Dallas",
      "color": "Heather Gray",
      "price": "$29.99",
      "shipsFree": true,
      "status": "Ready To Ship",
      "availability": "Almost Gone",
      "category": "Hats",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-fanatics-heather-gray-fc-dallas-low-block-trucker-adjustable-hat_ss5_p-201747544+pv-1+u-ar0u0bpth4ygv9od6spp+v-lvkrbaykhztpqyrbgdql.png?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/VxAyqa"
    },
    {
      "title": "Men's FC Dallas Sport Design Sweden Cream Everyday Relaxed T-Shirt",
      "brand": "Sport Design Sweden",
      "team": "FC Dallas",
      "color": "Cream",
      "price": "$39.99",
      "shipsFree": true,
      "status": "Ready To Ship",
      "category": "Men T-Shirts",
      "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-sport-design-sweden-cream-fc-dallas-everyday-relaxed-t-shirt_ss5_p-202666813+pv-1+u-blxafuogbcclxr5fxwif+v-tc9bq789ztraaxk25sor.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/Z6Ld9Q"
    },    
      {
        "title": "Men's FC Dallas New Era Tan Active 9TWENTY Adjustable Hat",
        "brand": "New Era",
        "team": "FC Dallas",
        "color": "Tan",
        "price": "$31.99",
        "shipsFree": true,
        "status": "Ready To Ship",
        "category": "Hats",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens%C2%A0new-era-tan-fc-dallas-active-9twenty-adjustable-hat_ss5_p-202314659+pv-1+u-yxi3po595mptqxr2pl5h+v-kf53s5tksmbotk9dwc5b.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/09yJLP"
      },
      {
        "title": "Men's FC Dallas New Era Gray Color Pack 9FORTY A-Frame Adjustable Trucker Hat",
        "brand": "New Era",
        "team": "FC Dallas",
        "color": "Gray",
        "price": "$32.99",
        "shipsFree": true,
        "status": "Ready To Ship",
        "category": "Hats",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-new-era-gray-fc-dallas-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948606+pv-1+u-60r1qfjsbjk0exnn3ery+v-crfrelnmcnae81mcjtoj.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6ynbrV"
      },
      {
        "title": "Youth FC Dallas Outerstuff Blue Stalwart Defender T-Shirt",
        "brand": "Outerstuff",
        "team": "FC Dallas",
        "color": "Blue",
        "price": "$31.99",
        "shipsFree": true,
        "status": "Ready To Ship",
        "category": "Kids T-Shirts",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/youth-outerstuff-blue-fc-dallas-stalwart-defender-t-shirt_ss5_p-201875237+pv-1+u-utl91w7z5daan8xgezdb+v-mjonsmc93iwcjlem1yze.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQnRO"
      },
      {
        "title": "Men's FC Dallas New Era Black 2025 Kickoff 9TWENTY Adjustable Hat",
        "brand": "New Era",
        "team": "FC Dallas",
        "color": "Black",
        "year": 2025,
        "price": "$27.99",
        "shipsFree": true,
        "status": "Ready To Ship",
        "category": "Hats",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-new-era-black-fc-dallas-2025-kickoff-9twenty-adjustable-hat_ss5_p-202427766+pv-1+u-jpif2neww22lgkn1ezkc+v-hoczajvaqloqzaaufo6k.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/N9RKOv"
      },
      {
        "title": "Men's FC Dallas Sport Design Sweden Red/Blue City Soul Oversized T-Shirt",
        "brand": "Sport Design Sweden",
        "team": "FC Dallas",
        "color": "Red/Blue",
        "price": "$39.99",
        "shipsFree": true,
        "status": "Ready To Ship",
        "category": "Men T-Shirts",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-sport-design-sweden-red/blue-fc-dallas-city-soul-oversized-t-shirt_ss5_p-202666839+pv-1+u-pw2csa7atqqsq3vc5ews+v-q3emwxj6a3qyoscejciv.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRbgQm"
      },
      {
        "title": "Men's FC Dallas adidas Light Blue 2025 The Inferno Kit Replica Jersey",
        "brand": "adidas",
        "team": "FC Dallas",
        "color": "Light Blue",
        "year": 2025,
        "price": "$99.99",
        "shipsFree": true,
        "status": "Ready To Ship",
        "category": "Men Jerseys",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-adidas-light-blue-fc-dallas-2025-the-inferno-kit-replica-jersey_ss5_p-202652745+pv-1+u-8oaaqaib5a84iqoxbmcj+v-8iwnm2sx8vcb6izco9bc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/7anmjr"
      },
      {
        "title": "Men's FC Dallas Fanatics Steel Logo T-Shirt",
        "brand": "Fanatics",
        "team": "FC Dallas",
        "color": "Steel",
        "price": "$19.99",
        "originalPrice": "$29.99",
        "lastChecked": "2024-04-05",
        "shipsFree": true,
        "status": "In Stock",
        "category": "Men T-Shirts",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-fanatics-steel-fc-dallas-logo-t-shirt_ss5_p-201167495+pv-1+u-y655jqpa0wqylnlwnxgm+v-nriomnpjyagegtvvcp6a.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQWov"
      },
      {
        "title": "Men's FC Dallas Fanatics Red Fundamentals T-Shirt",
        "brand": "Fanatics",
        "team": "FC Dallas",
        "color": "Red",
        "price": "$16.99",
        "originalPrice": "$29.99",
        "lastChecked": "2024-04-05",
        "shipsFree": true,
        "status": "In Stock",
        "category": "Men T-Shirts",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-fanatics-red-fc-dallas-fundamentals-t-shirt_ss5_p-201167540+pv-1+u-e0bdf5zbbio7r4x8snub+v-rqdf5vbuffhmgdmyscah.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/kO9jBn"
      },
      {
        "title": "FC Dallas Primary Scarf",
        "brand": "Unknown",
        "team": "FC Dallas",
        "price": "$34.99",
        "shipsFree": true,
        "status": "In Stock",
        "category": "Accessories",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/fc-dallas-primary-scarf_ss5_p-201302938+u-6hfmrrefqg3n6awb4ixm+v-gle4e4gxjsktou443hcs.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1e4VD"
      },
      {
        "title": "Men's FC Dallas New Era Navy Color Pack A-Frame 59FIFTY Fitted Hat",
        "brand": "New Era",
        "team": "FC Dallas",
        "color": "Navy",
        "price": "$44.99",
        "shipsFree": true,
        "status": "Ready To Ship",
        "category": "Hats",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-new-era-navy-fc-dallas-color-pack-a-frame-59fifty-fitted-hat_ss5_p-201948555+pv-1+u-d3sv1pvh50splolp6hwi+v-oifrfcmmf4i7grme4l71.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzmnb5"
      },
      {
        "title": "Men's FC Dallas New Era Gray Color Pack Two-Tone 9FIFTY Snapback Hat",
        "brand": "New Era",
        "team": "FC Dallas",
        "color": "Gray",
        "price": "$34.99",
        "shipsFree": true,
        "status": "Ready To Ship",
        "category": "Hats",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-new-era-gray-fc-dallas-color-pack-two-tone-9fifty-snapback-hat_ss5_p-201948579+pv-1+u-bbjhe6mkiuwbb1rj1xup+v-dlqfm8punubxzkp5zjwu.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLr94A"
      },
      {
        "title": "Men's FC Dallas Fanatics Red Injury Time Baseball Jersey",
        "brand": "Fanatics",
        "team": "FC Dallas",
        "color": "Red",
        "price": "$59.99",
        "shipsFree": true,
        "status": "Ready To Ship",
        "category": "Men Jerseys",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-fanatics-red-fc-dallas-injury-time-baseball-jersey_ss5_p-201747333+pv-1+u-yu6wiktglrlcf7qv39fd+v-6z7xjffq9chpm0sxy6mc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyOVXj"
      },
      {
        "title": "Men's FC Dallas Red Custom Team Authentic T-Shirt",
        "brand": "Fanatics",
        "team": "FC Dallas",
        "color": "Red",
        "price": "$39.99",
        "shipsFree": true,
        "status": "In Stock",
        "category": "Men T-Shirts",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/mens-red-fc-dallas-custom-team-authentic-t-shirt_ss5_p-202808154+pv-1+u-6rlenddfjfjois6yqal6+v-zip7golrctrvszb0vq4l.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1e4or"
      },
      {
        "title": "Women's FC Dallas Concepts Sport White Infuse Lightweight Slub Knit T-Shirt",
        "brand": "adidas",
        "team": "FC Dallas",
        "color": "Navy",
        "year": 2024,
        "price": "$29.99",
        "shipsFree": true,
        "status": "In Stock",
        "category": "Women Jerseys",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/womens-concepts-sport-white-fc-dallas-infuse-lightweight-slub-knit-t-shirt_ss5_p-202910268+pv-1+u-fmoenrw8iqbpvetwli7o+v-xbl60wsy7olvgluf9mwz.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/JKOr3R"
      },
      {
        "title": "Women's FC Dallas Gameday Couture Gray Tackle Titan Oversized Snow Wash T-Shirt",
        "brand": "Mitchell & Ness",
        "team": "FC Dallas",
        "color": "Navy",
        "price": "$44.99",
        "shipsFree": true,
        "status": "Ready To Ship",
        "category": "Men Jackets",
        "imageUrl": "https://images.footballfanatics.com/fc-dallas/womens-gameday-couture-gray-fc-dallas-tackle-titan-oversized-snow-wash-t-shirt_ss5_p-202369972+pv-1+u-ot0fso6yfbhskze4xhot+v-dibumjoxdv2ort9whey8.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/6ynbaK"
      },
      // {
      //   "title": "Men's Dallas Burn Mitchell & Ness Black Historic Logo Since '96 Two-Tone Snapback Hat",
      //   "brand": "Mitchell & Ness",
      //   "team": "Dallas Burn",
      //   "color": "Black",
      //   "price": "$18.99",
      //   "originalPrice": "$37.99",
      //   "lastChecked": "2022-01-07",
      //   "shipsFree": true,
      //   "status": "Ready To Ship",
      //   "category": "Hats",
      //   "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      // "link": "https://mlsstore.i8h2.net/WyReEA"
      // },
      // {
      //   "title": "Men's Dallas Burn Mitchell & Ness Black/Green Historic Logo Since '96 Foundation Script Snapback Hat",
      //   "brand": "Mitchell & Ness",
      //   "team": "Dallas Burn",
      //   "color": "Black/Green",
      //   "price": "$15.99",
      //   "originalPrice": "$31.99",
      //   "lastChecked": "2022-01-07",
      //   "shipsFree": true,
      //   "status": "Ready To Ship",
      //   "category": "Hats",
      //   "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      // "link": "https://mlsstore.i8h2.net/WyReEA"
      // },
      // {
      //   "title": "Men's FC Dallas Mitchell & Ness Red Mesh V-Neck T-Shirt",
      //   "brand": "Mitchell & Ness",
      //   "team": "FC Dallas",
      //   "color": "Red",
      //   "price": "$44.99",
      //   "originalPrice": "$89.99",
      //   "lastChecked": "2022-07-18",
      //   "shipsFree": true,
      //   "status": "Almost Gone!",
      //   "category": "Men T-Shirts",
      //   "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      // "link": "https://mlsstore.i8h2.net/WyReEA"
      // },
      // {
      //   "title": "Men's Dallas Burn Mitchell & Ness Red Historic Logo Since '96 Jersey Hook Snapback Hat",
      //   "brand": "Mitchell & Ness",
      //   "team": "Dallas Burn",
      //   "color": "Red",
      //   "price": "$18.99",
      //   "originalPrice": "$37.99",
      //   "lastChecked": "2022-01-17",
      //   "shipsFree": true,
      //   "status": "Ready To Ship",
      //   "category": "Hats",
      //   "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      // "link": "https://mlsstore.i8h2.net/WyReEA"
      // },
      // {
      //   "title": "Dallas Burn Strideline Since '96 Crew Socks",
      //   "brand": "Strideline",
      //   "team": "Dallas Burn",
      //   "price": "$19.99",
      //   "shipsFree": true,
      //   "status": "Almost Gone!",
      //   "category": "Socks",
      //   "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      // "link": "https://mlsstore.i8h2.net/WyReEA"
      // },
      // {
      //   "title": "Men's Dallas Burn Mitchell & Ness Red Vertical Tie-Dye Top",
      //   "brand": "Mitchell & Ness",
      //   "team": "Dallas Burn",
      //   "color": "Red",
      //   "price": "$44.99",
      //   "shipsFree": true,
      //   "status": "Ready To Ship",
      //   "category": "Men T-Shirts",
      //   "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      // "link": "https://mlsstore.i8h2.net/WyReEA"
      // },
      // {
      //   "title": "Men's Dallas Burn Mitchell & Ness Red/Green Since '96 Split Color Short Sleeve Hoodie",
      //   "brand": "Mitchell & Ness",
      //   "team": "Dallas Burn",
      //   "color": "Red/Green",
      //   "price": "$34.99",
      //   "originalPrice": "$64.99",
      //   "lastChecked": "2021-04-06",
      //   "shipsFree": true,
      //   "status": "Almost Gone!",
      //   "category": "Men Hoodies",
      //   "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      // "link": "https://mlsstore.i8h2.net/WyReEA"
      // },
      // {
      //   "title": "Youth FC Dallas adidas Light Blue 2025 The Inferno Kit Replica Jersey",
      //   "brand": "adidas",
      //   "team": "FC Dallas",
      //   "color": "Light Blue",
      //   "year": 2025,
      //   "price": "$79.99",
      //   "shipsFree": true,
      //   "status": "In Stock",
      //   "category": "Youth Jerseys",
      //   "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      // "link": "https://mlsstore.i8h2.net/WyReEA"
      // },
      // {
      //   "title": "Men's FC Dallas Black Arch Smoke T-Shirt",
      //   "brand": "Fanatics",
      //   "team": "FC Dallas",
      //   "color": "Black",
      //   "price": "$17.99",
      //   "originalPrice": "$34.99",
      //   "lastChecked": "2019-03-12",
      //   "shipsFree": true,
      //   "status": "In Stock",
      //   "category": "Men T-Shirts",
      //   "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      // "link": "https://mlsstore.i8h2.net/WyReEA"
      // },
      // {
      //   "title": "Men's FC Dallas adidas Navy 2025 Jersey Hook AEROREADY T-Shirt",
      //   "brand": "adidas",
      //   "team": "FC Dallas",
      //   "color": "Navy",
      //   "price": "$39.99",
      //   "shipsFree": true,
      //   "status": "Almost Gone!",
      //   "category": "Men T-Shirts",
      //   "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      // "link": "https://mlsstore.i8h2.net/WyReEA"
      // },
      // {
      //   "title": "Men's FC Dallas Fanatics Heather Gray Low Block Trucker Adjustable Hat",
      //   "brand": "Fanatics",
      //   "team": "FC Dallas",
      //   "color": "Heather Gray",
      //   "price": "$29.99",
      //   "shipsFree": true,
      //   "status": "Almost Gone!",
      //   "category": "Hats",
      //   "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      // "link": "https://mlsstore.i8h2.net/WyReEA"
      // },
      // {
      //   "title": "Men's FC Dallas Sport Design Sweden Cream Everyday Relaxed T-Shirt",
      //   "brand": "Sport Design Sweden",
      //   "team": "FC Dallas",
      //   "color": "Cream",
      //   "price": "$39.99",
      //   "shipsFree": true,
      //   "status": "Ready To Ship",
      //   "category": "Men T-Shirts",
      //   "imageUrl": "https://images.footballfanatics.com/dc-united/mens-fanatics-black/red-dc-united-striker-long-sleeve-t-shirt_pi4372000_altimages_ff_4372670-d8784130a1c204a45c85alt1_full.jpg?_hv=2&w=900",
      // "link": "https://mlsstore.i8h2.net/WyReEA"
      // }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>FC Dallas</h1>
        <div className='mb-6'>
          <img
            src='/Dallas.png'
            alt='FC Dallas' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

        <div className='flex gap-4 mb-8 justify-center'>
          <a 
            href="https://ticketnetwork.lusg.net/XmGV4M"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            BUY TICKETS
          </a>
          <a 
            href="https://example.com/find-hotel" 
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            HOTELS NEAR THE STADIUM
          </a>
        </div>

        {/* Club Information */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Club Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> FC Dallas</li>
            <li><strong>Nickname(s):</strong> The Hoops</li>
            <li><strong>Founded:</strong> 1996</li>
            <li><strong>Stadium:</strong> Toyota Stadium, Frisco, Texas</li>
            <li><strong>Capacity:</strong> 20,500</li>
            <li><strong>Owner:</strong> Hunt Sports Group</li>
            <li><strong>Head Coach:</strong> Eric Quill</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Proud Legacy in Texas</h2>
          <p>
            FC Dallas is one of Major League Soccer's most respected clubs, with a legacy of developing talented players and a history of strong performances. Founded in 1996, FC Dallas has built a foundation of youth development, fielding some of the league’s most exciting homegrown players.
          </p>
          <p>
            The team is known for its fast-paced style of play, combining technical skill with aggressive counter-attacks. FC Dallas plays its home games at Toyota Stadium in Frisco, Texas, offering a fantastic matchday atmosphere.
          </p>
          <p>
            With stars like Jesus Ferreira and Paul Arriola, the club continues to challenge for top honors in MLS while staying true to its developmental philosophy.
          </p>
        </div>


        <TrendingPlayers />

        <h2 className='text-4xl sm:text-6xl font-bold text-[#020617] mt-16 mb-4'>Shop</h2>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map((item) => (
          <div key={item.title} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                >
                  Buy Now <FaShoppingCart className='inline ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FCDallas;
