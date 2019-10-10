const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'client.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html'
        })
    ]
}