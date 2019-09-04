let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    entry: ['@babel/polyfill',  './src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        overlay: true
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            filename: 'index.html'
        })
    ]
};

module.exports = (env, options) => {
    config.devtool = options.mode === 'production' ? false : 'eval-sourcemap';

    return config;
};
