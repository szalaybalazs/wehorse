const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.resolve('client', 'js', 'index.js'),
  resolve: {
    alias: {
      '@': path.resolve('client', 'js'),
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve('static', 'js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-transform-runtime',
              ["@babel/plugin-proposal-decorators", { "legacy": true }]
            ],
          }
        }
      }, {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('autoprefixer')({ overrideBrowserslist: 'last 10 versions' })
                ]
              }
            },
            'sass-loader'
          ]
        })
      }, {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      }, {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: !isProduction,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    // minimizer: [new UglifyJsPlugin({ test: /\.js(\?.*)?$/i, })],
  },
  plugins: [
    new ExtractTextPlugin('../css/main.css'),
    new CompressionPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
      },
    }),
  ],
  devtool: !isProduction && 'source-map',
};
