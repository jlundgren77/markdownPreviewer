var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry: [APP_DIR + '/index.jsx', APP_DIR + '/main.scss'],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test : /\.jsx?/,
				include : APP_DIR,
				loader : 'babel'
			},
			
			{
        		test : /\.scss$/,
        		loader : ExtractTextPlugin.extract('css!sass')
      		},

      		{ test: /\.css$/, loader: "style!css", options: { sourceMap: true} },
			
			{
      			test: /\.json$/,
     			 loader: 'json'
			},
			{ test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url' },
			{
       			 test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        		 loader: 'file-loader'
     		}
		]
	},
	plugins: [
		new ExtractTextPlugin('/dist/styles/main.css', {
			allChunks: true
		})
	]
};

module.exports = config;
