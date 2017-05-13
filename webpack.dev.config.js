var webpack = require('webpack');

module.exports = {
	entry: [
		__dirname + '/index.js'
	],
	output: [
		filename: '/bundle.js',
		path: __dirname + 'dist'	
	],
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.(scss|css)$/,
				loaders: [
					"style-loader",
					"css-loader",
					"sass-loader",
				]
			}
		]
	}
	devServer: {
		contentBase: __dirname + '/dist',
	}
}