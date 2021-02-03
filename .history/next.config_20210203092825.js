const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withLess = require('@zeit/next-less')

module.exports = withLess(
    withSass(
      withImages({
        lessLoaderOptions: {
          javascriptEnabled: true
        },
        target: 'node'
      })
    )
  )