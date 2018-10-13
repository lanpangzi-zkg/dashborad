const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const manifestDll = require('./src/static/js/base-manifest.json');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].min.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 8000,
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: ['eslint-loader'],
            }, {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
            }, {
                test: /\.css/,
                exclude: /node_modules/,
                loader: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        // 省略后缀
        extensions: ['.jsx', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'haha',
            template: './src/static/template/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8889,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            logLevel: 'info',
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            /**
             * 在这里引入 manifest 文件
             */
            manifest: manifestDll,
        }),
        new CopyWebpackPlugin([{
            from: 'src/static/js/*.js',
            to: './',
            flatten: true,
        }]),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                },
                commons: {
                    test: path.resolve(__dirname, 'src'),
                    name: 'commons',
                    chunks: 'initial',
                },
            },
        },
    },
};
