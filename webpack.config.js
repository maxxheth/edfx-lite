const path = require('path');

const fs = require('fs');

module.exports = {
    entry: {
		home: './assets/js/src/pages/home.js',
		about: './assets/js/src/pages/about.js',
        portfolio: './assets/js/src/pages/portfolio.js',
        services: './assets/js/src/pages/services.js'
    },
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss|\.css$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '../../css/dist/bundle.css',
                            sourceMap:true
                        },
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader',
                    
                        options: {
                            import: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {

                            sassOptions: {
                                
                                includePaths: ['./node_modules'],
                                // sourceMap: true

                            }

                        },
                    }
                    
                ],
            },
			{
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "node_modules/jarallax"),
                    path.resolve(__dirname, "node_modules/video-worker"),
                    path.resolve(__dirname, "assets/js/src")
                ],
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								useBuiltIns: 'usage',
								corejs: 3,
                                shippedProposals: true

                                // targets: {
                                //     "browsers": ["last 3 versions", "ie >= 11"]
                                // }
                            }]
                        ],
						cacheDirectory: false
					}
				}
			}
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './assets/js/dist'),
    },
    optimization: {
        usedExports: true
    }
};