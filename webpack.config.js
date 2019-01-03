var path = require('path');
module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};