const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');


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
    plugins: [
        new webpack.DefinePlugin({ // <-- key to reducing React's size
        'process.env': {
        'NODE_ENV': JSON.stringify('production')
        }
    }),
    // new webpack.optimize.DedupePlugin(), //dedupe similar code 
    new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        compress: {
            sequences     : true,
            booleans      : true,
            loops         : true,
            unused      : true,
            warnings    : false,
            drop_console: true,
            unsafe      : true
        }
        }), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),
    //Merge chunks 
    ],

    devtool: 'cheap-eval-source-map',

    devServer: {
        historyApiFallback: true,
        publicPath: '/'

    },
    
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
    
};