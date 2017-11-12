const path = require('path');

module.exports = {
  entry: {
    app: './ES6/factory-funtions.js'
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/, // regex
        exclude: /node_modules/,
        use: "babel-loader"
      },
    ]
  },
  plugins: []
}
