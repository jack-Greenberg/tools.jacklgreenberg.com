const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =  {
    mode: 'none',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
};
