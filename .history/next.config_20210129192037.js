const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

// eslint-disable-next-line
const isProd = process.env.NODE_ENV === "production"

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {}
}

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },
  ...withLess(
    withSass(
      withImages({
        lessLoaderOptions: {
          javascriptEnabled: true
        }
      })
    )
  )
})