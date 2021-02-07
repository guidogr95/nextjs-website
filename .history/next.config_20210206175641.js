const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withLess = require('@zeit/next-less')
const withCSS = require("@zeit/next-css")

module.exports = withCSS(withLess(
    withSass(
      withImages({
        lessLoaderOptions: {
          javascriptEnabled: true
        }
      })
    )
  ))