const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': 'content-type,authorization,accept',
    },
    port: 8181,
    historyApiFallback: true,
    client: {
      logging: 'none',
    },
    open: true,
    static: {
      directory: 'dist',
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      __DEV__: true,
    }),
  ],
});
