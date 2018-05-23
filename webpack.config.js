var resolve = require('path').resolve;
var webpack = require('webpack');
module.exports = {
    context:resolve(__dirname,'src'),

    output:{
        filename:'[name].min.js',
        path:resolve(__dirname,'assets/'),

        publicPath:'assets/'
    },

    entry:{
        bundle:'./index.js'
    },

    devtool:'cheap-module-source-map',
    devServer:{
        hot:false,
        publicPath:'',
        disableHostCheck:true
    },

    module:{
        loaders:[
            {
                test:/\.html$/,
                loader:"html-loader"
            },
            {
                test:/\.css$/,
                loader:"css-loader!style-loader"
            },
            {
                test:/\.(jpg|gif|png)(\?\w+)?$/,
                loader:"url-loader?limit=1&name=[name].[ext]?[hash:6]&publicPath=assets/"
            },
            {
                test:/\.(woff|woff2|eot|ttf|svg)(\?\w+)?$/,
                loader:"url-loader?limit=1&name=[name].[ext]?[hash:6]&publicPath=assets/"
            }
        ]
    },
    externals:{
        "jquery":"jQuery",
        "jQuery":"jQuery"
    }
}
