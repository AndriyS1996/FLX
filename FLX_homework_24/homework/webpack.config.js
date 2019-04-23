

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/app.js'
  },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.s?[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {sourceMap: true }
            },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/img',
          to: 'img'
        },
        {
          from: 'src/index.html',
          to: 'index.html'
        }
      ]),
      new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
      new MiniCssExtractPlugin({
        filename: 'css/styles.css'
      })
    ],
    devServer: {
      contentBase: './src'
      },
};