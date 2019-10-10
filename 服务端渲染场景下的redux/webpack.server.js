const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
    target: 'node',
    mode: 'development',
    externals: [nodeExternals()],
    entry: './server/server.js',
    output: {
        path: path.join(__dirname, 'dest'),
        filename: 'server.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
            }
        }]
    }
}