const path = require('path');

module.exports = {
    entry: './src/index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        // publicPath: '/public'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            }
        ]
    },

    devtool: 'cheap-eval-source-map',

    devServer: {
        historyApiFallback: true,
        publicPath: '/'

    },
    
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};