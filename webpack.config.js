let path = require('path')
module.exports = {
  context: path.join(__dirname, './example'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, './example'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]  
  }
  
}