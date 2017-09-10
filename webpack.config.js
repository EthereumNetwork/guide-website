var path = require('path')
var webpack = require('webpack')
var CompressionPlugin = require('compression-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './public/src/main.js',
  output: {
    path: path.resolve(__dirname, './public/dist'),
    publicPath: '/',
    filename: 'build.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'vue-style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false
      }
    }
  },
  // performance: {
  //   hints: false
  // },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'development') {
  module.exports.output.filename = 'build.js'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new CopyWebpackPlugin([
      { from: './public/src/assets' }
    ]),
    new HtmlWebpackPlugin({
      template: './public/index.ejs'
    }),
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    })
  ])
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new CopyWebpackPlugin([
      { from: './public/src/assets' }
    ]),
    new HtmlWebpackPlugin({
      template: './public/index.ejs'
    }),
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ])
}
