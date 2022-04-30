const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
   mode: 'production',
   entry: './src/scripts/main.js',
   output: {
      path: path.resolve(__dirname, 'dist/scripts'),
      filename: 'main.js',
   },
   plugins: [
      new Dotenv({ path: path.resolve(__dirname, './webpack.env') })
   ]
};