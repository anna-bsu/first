const path = require('path');

module.exports = {
    entry: './task9,10,11/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};