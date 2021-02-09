module.exports = {
    plugins: [
      'postcss-flexbugs-fixes',
      [
        'postcss-preset-env',
        {
          autoprefixer: {
            flexbox: 'no-2009'
          },
          stage: 3,
          features: {
            'custom-properties': false
          }
        }
      ],
      [
        '@fullhuman/postcss-purgecss',
        {
          content: [
              './pages/**/*.{js,jsx,ts,tsx}',
              './components/**/*.{js,jsx,ts,tsx}'
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          safelist: ['html', 'body']
        }
      ],
      '@zeit/next-sass',
      'next-images',
      [
        '@zeit/next-less',
        {
        lessLoaderOptions: {
            javascriptEnabled: true
            }
        }
      ]
    ]
  }

//   const withSass = require('@zeit/next-sass')
// const withImages = require('next-images')
// const withLess = require('@zeit/next-less')

// module.exports = withLess(
//   withSass(
//     withImages({
//       lessLoaderOptions: {
//         javascriptEnabled: true
//       }
//     })
//   )
// )