var resolve = require('path').resolve;
var webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, 'src'),

    output: {
        filename: '[name].min.js',
        // the output bundle
        path: resolve(__dirname, 'assets/'),

        publicPath: 'assets/'
    },
    entry: {
        bundle: './index.js'
    },

    devtool: 'cheap-module-source-map',
    devServer: {
        hot: false,
        "contentBase": '',
        publicPath: '',
        host: "0.0.0.0",
        disableHostCheck: true
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(jpg|gif|png)(\?\w+)?$/,
                loader: 'url?limit=1&name=[name].[ext]?[hash:6]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?\w+)?$/,
                loader: 'url?limit=1&name=[name].[ext]?[hash:6]'
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },

    //外部引用
    externals: {
        "jquery": "jQuery",
        "jQuery": "jQuery"
    }
};
