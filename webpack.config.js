const webpack = require('webpack');
const path = require('path');
const DefinePlugin = webpack.DefinePlugin;
const EnvironmentPlugin = webpack.EnvironmentPlugin;

const ExtractPlugin = require('extract-text-webpack-plugin');
require('dotenv').config();

module.exports = {
    entry: './client/index.js',
    output: {
        // Webpack prefers an absolute path:
        path: path.resolve(__dirname, './bundle/'),
        filename: 'bundle.js'
    },
    devServer: {
        inline:true,
        port: process.env.FRONTEND_PORT
      },
    watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader', 
                            options: {
                                sourceMap:true
                            }
                        },
                        'resolve-url-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                includePaths:[`${__dirname}/client/src/style`]
                            }
                        }
                    ]
                })
            },
            {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                }
        ]
    }
}
