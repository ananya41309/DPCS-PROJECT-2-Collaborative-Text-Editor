const path = require('path');

module.exports = {
    entry: 'bundle.js', // Use index.js as entry
    output: {
        path: path.resolve(__dirname, 'bundle.js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'bundle.js'),
        },
        compress: true,
        port: 9000,
    },
};
