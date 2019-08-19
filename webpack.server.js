const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');


const config = {
  // Inform Webpack that we're building a bundle for nodejs, rather thatn for the browser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/index.js',

  // tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()] //tell webpack not bundle any library that is in node_modules folder, this is just for SERVER bundle
}

module.exports = merge(baseConfig, config);