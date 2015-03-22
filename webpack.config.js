var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './js/index'
  ],
  output: {
    path: __dirname + '/build/',
    filename: '[name].entry.js',
    publicPath: '/build'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
          //'6to5-loader?experimental&optional=selfContained' // http://6to5.org/docs/usage/experimental/
        ]
      },
        {
        test: /\.less$/,
        loaders: [
          "style-loader",
          "css-loader",
          "autoprefixer-loader?browsers=last 2 version",
          "less-loader?strictMath&cleancss"
        ]
      },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.(png|woff)$/, loader: 'url-loader?limit=100000' },
        {
        test:/\.html$/,
        loader: 'html-loader'
      },

    ]
  }
};
