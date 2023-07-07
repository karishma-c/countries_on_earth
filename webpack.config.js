const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path')


module.exports = {
    entry: './src/index.js',

    output : {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }), 
        new MiniCssExtractPlugin()
    ],

    module : {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                       presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
            {
                test: /\.(woff|woff2|ttf|eot|png|jpg|svg|gif)$/i,
                use: ['file-loader']
            },
            {
                test : /\.(s(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    }
}