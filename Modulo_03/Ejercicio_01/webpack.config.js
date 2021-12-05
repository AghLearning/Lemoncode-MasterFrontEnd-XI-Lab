const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["./src/app.js"],
//     // output: [],
//     // resolve: [],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            scriptLoading: "blocking",
            hash: true,
        }),
    ],
    devServer: {
        port:8081,
    }
}