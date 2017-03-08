module.exports = {
  entry: { redux: __dirname + '/srcs/index.js' },
  output: {
    path: __dirname + '/public/js',
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      'node_modules',
      __dirname + '/srcs'
    ],
    alias: {
      comps$: __dirname + '/srcs/components'
    }
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
  },
  watch: true
};
