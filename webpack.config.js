module.exports = {
  entry: './app/main.js',
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
