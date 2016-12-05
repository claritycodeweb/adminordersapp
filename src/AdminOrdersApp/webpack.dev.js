var path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log("@@@@@@@@@ USING DEVELOPMENT @@@@@@@@@@@@@@@");

module.exports = {

    devtool: 'source-map',

    entry: {
        'app': './Client/main.ts' // JiT compilation
    },

    output: {
        path: "./wwwroot/",
        filename: '[name].bundle.js',
        publicPath: "/"
    },

    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        outputPath: path.join(__dirname, 'wwwroot/')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'source-map-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
                exclude: /node_modules/,
                loader: "file-loader?name=assets/[name]-[hash:6].[ext]",
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader']
            },
            {
                test: /initial\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader!sass-loader?sourceMap'
                })
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ],
        exprContextCritical: false
    },

    plugins: [
        new ExtractTextPlugin({filename: 'initial.css', allChunks: true}),
        new CleanWebpackPlugin(
            [
                './wwwroot/dist',
                './wwwroot/fonts',
                './wwwroot/assets'
            ]
        ),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'Client/index.html'
        }),

        new CopyWebpackPlugin([
            { from: './Client/images/*.*', to: "assets/", flatten: true }
        ])
    ]

};

