module.exports = {
  poweredByHeader: false,
  images: {
    domains: ['cdn.contentful.com', 'images.ctfassets.net', 'por-navegantes.s3.amazonaws.com', 'avatars.githubusercontent.com', 'i.pinimg.com'],
  },
  future: {
    webpack5: true,
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=180, s-maxage=180, stale-while-revalidate=180',
          },
        ],
      },
    ]
  },
}
