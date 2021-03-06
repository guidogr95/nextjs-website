  const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withLess = require('@zeit/next-less')
const withPurgeCss = require('next-purgecss')

module.exports = withLess(
  withSass(
    withImages(
        {
            lessLoaderOptions: {
              javascriptEnabled: true
            }}
        // withPurgeCss({
        //     lessLoaderOptions: {
        //       javascriptEnabled: true
        //     },
        //     purgeCssPaths: [
        //         'pages/**/*',
        //         'components/**/*'
        //     ],
        //         purgeCss: {
        //         whitelist: () => ['player', 'carousel-inner', 'carousel', 'carousel-item', 'carousel-control-prev-icon', 'sr-only', 'carousel-control-next-icon'],
        //         whitelistPatterns: () => [/Toastify/, /.*nprogress.*/],
        //         rejected: true
        //     }
        // })
    )
  )
)

// const config = withPurgeCss({
//   purgeCssPaths: [
//     'pages/**/*',
//     'components/**/*'
//   ],
//   purgeCss: {
//     whitelist: () => ['player'],
//     whitelistPatterns: () => [/Toastify/, /.*nprogress.*/],
//     rejected: true
//   },
//   purgeCssEnabled: ({ dev, isServer }) => true, // Enable PurgeCSS for all env
// });
// module.exports = config;  // If NextJS >= 9.3
// module.exports = withCss(config); // If NextJS < 9.3