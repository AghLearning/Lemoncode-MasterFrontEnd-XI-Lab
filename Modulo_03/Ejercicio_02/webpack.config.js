const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
    entry: {
        app: "./src/student.js", 
        // appStyles: "./src/mystyles.css"
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(process.cwd(), "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    // {loader: "style-loader"},
                    MiniCssExtractPlugin.loader,
                    {loader: "css-loader"}
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "index.html",
            scriptLoading: "blocking",
            hash:false,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css",
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 8081,
        hot:true,
    },
};