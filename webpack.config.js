var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/src/js/index.js',
	output: {
		path: __dirname + '/src',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.css$/,
				loader: 'css-loader!style-loader'
			}
		]
	}
}