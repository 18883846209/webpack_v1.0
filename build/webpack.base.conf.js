var path = require('path');
var utils = require('./utils');
var config = require('../config');
var isProduction = process.env.NODE_ENV === 'production';
var webpack = require('webpack');

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	// entry: {
	// 	index: './src/index.js'
	// },
	entry: utils.entries(),
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@': resolve('src')
		},
		mainFields: ['jsnext:main', 'main'], //TODO:可能会有问题  让webpack先使用jsnext:main字段，在没有时使用main字段。这样就可以优化支持tree-shaking的库。
		modules: [path.resolve('node_modules')]
	},
	module: {
		rules: [{
				test: /\.(js)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: resolve('src'),
				options: {
					formatter: require('eslint-friendly-formatter')
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader?cacheDirectory=true',
				include: resolve('src')
			},
			{
				test: /\.(woff2?|eot|ttf|otf|png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.html$/,
				loader: "html-loader",
				options: {
					ignoreCustomFragments: [/\{\{.*?}}/],
					attrs: ['img:src', 'link:href']
				}
			}
		],
		noParse: /node_modules\/(jquey|moment|chart\.js)/
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
}
