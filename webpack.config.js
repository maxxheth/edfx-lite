const path = require('path');

const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
		home: './assets/js/src/pages/home.js',
		about: './assets/js/src/pages/about.js',
		portfolio: './assets/js/src/pages/portfolio.js'
	},
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                        loader: 'file-loader'
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {

                            sassOptions: {
                                
                                includePaths: ['./node_modules'],

                            }

                        },
                    }
                ],
            },
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								useBuiltIns: 'usage',
								corejs: 3,
								shippedProposals: true
							}]
						],
						cacheDirectory: false
					}
				}
			}
        ]
    },
    // watch: true,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './assets/js/dist')
    },

};