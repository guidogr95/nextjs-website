const withImages = require('next-images')
// const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
// const fetch = require('isomorphic-unfetch');
module.exports = withFonts(withImages())