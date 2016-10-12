module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      {
        test: /\.ejs$/,
        exclude: /node_modules/,
        loader: 'ejs-loader'
      },
    ]
  },

  output: {
    filename: 'index.js',
    path: './lib'
  }
};
