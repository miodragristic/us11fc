/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack konfiguracija sa root-om
  turbopack: {
    root: __dirname, // ovo osigurava da Turbopack zna gde je koren projekta
  },

  // Remote images konfiguracija
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'assets.goal.com' },
      { protocol: 'https', hostname: 'cdn1.sportngin.com' },
      { protocol: 'https', hostname: 'images.supersport.com' },
      { protocol: 'https', hostname: 'nb1.hu' },
      { protocol: 'https', hostname: 'icdn.sempreinter.com' },
      { protocol: 'https', hostname: 'en.nogomania.com' },
      { protocol: 'https', hostname: 'assets.spox.com' },
      { protocol: 'https', hostname: 'www.parismatch.com' },
      { protocol: 'https', hostname: 'images.topps.com' },
      { protocol: 'https', hostname: 'www.mlsstore.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.mlssoccer.com' },
      { protocol: 'https', hostname: 'phantom-marca.unidadeditorial.es' },
      { protocol: 'https', hostname: 'assets.bundesliga.com' },
      { protocol: 'https', hostname: 'www.telegram.hr' },
      { protocol: 'https', hostname: 'www.amazon.com' },
      { protocol: 'https', hostname: 'the18.com' },
      { protocol: 'https', hostname: 'drop-assets.ea.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'cdn1.intermiami.news' },
      { protocol: 'https', hostname: 'sports.mynorthwest.com' },
      { protocol: 'https', hostname: 'cloudfront-us-east-1.images.arcpublishing.com' },
      { protocol: 'https', hostname: 'nbcsports.brightspotcdn.com' },
      { protocol: 'https', hostname: 'energynews.rs' },
      { protocol: 'https', hostname: 'images.mlssoccer.com' },
      { protocol: 'https', hostname: 'media.freemalaysiatoday.com' },
      { protocol: 'https', hostname: 'motorcyclesports.net' },
      { protocol: 'https', hostname: 'bad-dawgsports.com' },
      { protocol: 'https', hostname: 'www.observerbd.com' },
      { protocol: 'https', hostname: 'media.bleacherreport.com' },
      { protocol: 'https', hostname: 'cdn.vox-cdn.com' },
      { protocol: 'https', hostname: 'brila.net' },
      { protocol: 'https', hostname: 's.yimg.com' },
      { protocol: 'https', hostname: 'cdn.wsn.com' },
      { protocol: 'https', hostname: 'www.japantimes.co.jp' },
      { protocol: 'https', hostname: 'fanatics.frgimages.com' },
      { protocol: 'https', hostname: 'i.postimg.cc' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'www.365scores.com' },
      { protocol: 'https', hostname: 'getfootballnewsspain.com' },
      { protocol: 'https', hostname: 'images.footballfanatics.com' },
      { protocol: 'https', hostname: 'mlsnews.s3.amazonaws.com' },
      { protocol: 'https', hostname: 'www.adnradio.cl' },
      { protocol: 'https', hostname: 'www.750thegame.com' },
      { protocol: 'https', hostname: 'cyprus-mail.com' },
      { protocol: 'https', hostname: 'brobible.com' },
      { protocol: 'https', hostname: 'images.squarespace-cdn.com' },
    ],
  },

  // Proxy / rewrite konfiguracija umesto middleware
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://external-api.com/:path*', // Zameni sa stvarnim API endpointom
      },
    ];
  },
};

export default nextConfig;
