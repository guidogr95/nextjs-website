const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withLess = require('@zeit/next-less')
const withPurgeCss = require('next-purgecss')

const whiteList = [
  'player',
  'carousel-inner',
  'carousel',
  'carousel-item',
  'carousel-control-prev-icon',
  'sr-only',
  'carousel-control-next-icon',
  'carousel-item-right',
  'carousel-item-prev',
  'carousel-item-next',
  'carousel-item-left',
  'btn',
  'accordion',
  'card',
  'card-header',
  'collapse',
  'show',
  'card-body'
]

module.exports = withLess(
  withSass(
    withImages(
      // {
      // lessLoaderOptions: {
      //   javascriptEnabled: true
      // }
        withPurgeCss({
            lessLoaderOptions: {
              javascriptEnabled: true
            },
            purgeCssPaths: [
                'pages/**/*',
                'components/**/*'
            ],
                purgeCss: {
                whitelist: () => whiteList,
                whitelistPatterns: () => [/Toastify/, /.*nprogress.*/],
                rejected: true
            }
        })
      // }
      )
  )
)