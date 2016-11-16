var pkg = require('./package.json');
var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.join(__dirname, "./"),
	// Setup server
	devServer: {
		contentBase: "./public",
		inline: true,
		noinfo: true,
		port: 8081
	},
	// Javascript entry point
	entry: './app.jsx',
	module: {
		// JS, JSX, Stylus Loaders
		loaders: [
			{
				test: /(\.js|\.jsx)$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			}
		]
	},
	// Javascript bundle file
	output: {
		path: __dirname + "/public/",
		filename: 'app.min.js'
	},
	resolve: {
		extensions: ['', '.jsx', '.js']
	},
}