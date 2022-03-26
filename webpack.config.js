const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { resolve } = require('path')

module.exports = {
  entry: {
    router: './js/router.js',
    app: './js/index.js'
  },

  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // output file name
      template: 'index.html'  // template file name
    }),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    })
  ],

  module: {
    // 여러 loader를 사용할 경우 use. 그렇지 않을 경우에는 loader를 쓴다.
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        }
      }
    ]
  }
}