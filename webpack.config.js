module.exports = {
  entry: { redux: './srcs' },
  output: {
    path: './public/js',
    filename: '[name].bundle.js'
  },
  resolve: {

  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
