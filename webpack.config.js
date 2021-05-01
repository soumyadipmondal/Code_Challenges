const { Server } = require('http');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js",
        about : "./src/about.js",
        contact: "./src/contact.js"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname, "dist")
    },
    /* plugins:[new HtmlWebpackPlugin()], */
    /* optimization:{
        splitChunks: {
            chunks: 'all'
        }
    }, */
    devServer:{
        contentBase:path.join(__dirname, "dist"),
        port: 9000
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets: ["@babel/preset-env", '@babel/preset-react']
                    }    
                },
                
            },

            {
                test: /\.css$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },

            {
                test: /\.(png|jpg)$/,
                use:{
                    loader: "url-loader"
                }
            }

        ]
        
    }
}