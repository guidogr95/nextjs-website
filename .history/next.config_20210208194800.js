// const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withLess = require('@zeit/next-less')
const path = require('path')

// module.exports = withLess(
//   withSass(
//     withImages({
//         lessLoaderOptions: {
//             javascriptEnabled: true
//         },
//         trailingSlash: true,
//         webpackDevMiddleware: config => {
//             config.watchOptions = {
//                 poll: 1000,
//                 aggregateTimeout: 300
//             }
//             return config
//         },
//         sassOptions: {
//         includePaths: [path.join(__dirname, 'styles')]
//     }
//     })
//   )
// )

// const path = require('path')
module.exports = withLess(withImages({
	trailingSlash: true,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}
		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
}))
