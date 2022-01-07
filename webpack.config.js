const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/ts/main.ts',
    output: {
        filename: 'bundled-main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            ts: path.resolve('./src/ts')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
}