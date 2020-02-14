/* eslint-disable */
const path = require('path');
// const glob = require('glob');
const fs = require('fs');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const PurifyCSSPlugin = require('purifycss-webpack');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        home: './assets/js/src/pages/home.js',
        about: './assets/js/src/pages/about.js',
        portfolio: './assets/js/src/pages/portfolio.js',
        services: './assets/js/src/pages/services.js',
        blog: './assets/js/src/pages/blog.js',
        contact: './assets/js/src/pages/contact.js',
        style: './assets/css/src/style.scss',
        "service-page": './assets/js/src/pages/service-page.js',
        splash: './assets/js/src/pages/splash.js'
    },
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.scss|\.css$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '../../css/dist/bundle.css',
                            sourceMap: true
                        },
                    },
                    {
                        loader: 'extract-loader'
                    },
                    // {
                    //     loader: ExtractTextPlugin.extract({
                    //         fallbackLoader: 'style-loader',
                    //         loader: 'css-loader',
                    //         // options: {
                    //         //     import: true
                    //         // }
                    //     })

                    // },

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
                use: [{
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
                }, {

                    loader: 'eslint-loader'

                }]
            }
        ]
    },
    // plugins: [
    //     new BundleAnalyzerPlugin()
    // ],
    // plugins: [
    //     new ExtractTextPlugin('[name].[contenthash].css'),
    //     // Make sure this is after ExtractTextPlugin!
    //     new PurifyCSSPlugin({
    //       // Give paths to parse for rules. These should be absolute!
    //       paths: glob.sync(path.join(__dirname, '*.php')),
    //     })
    //   ],
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './assets/js/dist'),
    }
    
};