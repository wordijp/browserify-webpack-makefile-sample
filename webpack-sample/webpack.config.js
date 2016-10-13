
module.exports = {
	entry: __dirname + '/src/index.jsx',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015'],
			},
		}],
	},
	resolve: {
		extensinos: ['', '.js', '.jsx'],
	},
};
