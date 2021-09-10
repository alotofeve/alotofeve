const path = require('path');

module.exports = {
    entry: { index: path.resolve(__dirname, "./src/app.js") },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/
        }]
    }
};