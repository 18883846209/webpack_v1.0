// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
	build: {
		env: require('./prod.env'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		productionSourceMap: true,
		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		// Run the build command with an extra argument to
		// View the bundle analyzer report after build finishes:
		// `npm run build --report`
		// Set to `true` or `false` to always turn it on or off
		bundleAnalyzerReport: process.env.npm_config_report,
		assetsPublicPath: './'		
		// htmlFtp:{
		// 	host:'118.190.25.113',
		// 	port:256,
		// 	user:'ftpcoco',
		// 	password:'killers1Y'
		// },
		// staticAssetsFtp:{
		// 	host:'118.190.25.113',
		// 	port:256,
		// 	user:'ftpcoco',
		// 	password:'killers1Y'
		// },
		// directoryName:'htmlwebpack',
		// assetsPublicPath: 'https://mobile.51wnl.com/htmlwebpack/'
	},
	dev: {
		env: require('./dev.env'),
		port: 9998,
		autoOpenBrowser: true,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {},
		// CSS Sourcemaps off by default because relative paths are "buggy"
		// with this option, according to the CSS-Loader README
		// (https://github.com/webpack/css-loader#sourcemaps)
		// In our experience, they generally work as expected,
		// just be aware of this issue when enabling this option.
		cssSourceMap: false
	}
}
