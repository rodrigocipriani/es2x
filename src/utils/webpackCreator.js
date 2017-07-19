const webpack           = require('webpack');
const path              = require('path');
const DashboardPlugin   = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer      = require('autoprefixer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// todo: include defaults to config params
module.exports = (config) => {
  const { dirname, port, appSubUrl, appTitle, isBundleAnalizer, vendors } = config;

  const vendor = vendors || null;

  const nodeEnv      = process.env.NODE_ENV || 'development';
  const isProduction = nodeEnv === 'production';
  const bundleAnalizer = isBundleAnalizer !== null ? isBundleAnalizer : false;

  const HOST = isProduction ? '127.0.0.1' : '0.0.0.0';

  /*
   * Configurações gerais
   */
  const PORT        = port;
  const PUBLIC_PATH = `/${ appSubUrl }`;
  const BUILD_PATH  = path.join(dirname, './build');
  const IMG_PATH    = path.join(dirname, './src/assets/img');
  const SOURCE_PATH = path.join(dirname, './src');
  const ENTRY_POINT = './index.js';

  /*
   Commons plugins
   */
  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name     : 'vendor',
      minChunks: Infinity,
      filename : 'vendor-[hash].js'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(SOURCE_PATH, 'index.html'),
      path    : BUILD_PATH,
      filename: 'index.html',
      metadata: {
        title: appTitle
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              'last 3 version',
              'ie >= 10'
            ]
          }),
        ],
        context: SOURCE_PATH
      }
    }),
    new webpack.ProvidePlugin({
      $              : 'jquery',
      jQuery         : 'jquery',
      'window.jQuery': 'jquery',
      Hammer         : 'hammerjs'
    }),
    new ExtractTextPlugin('style-[hash].css'),
    bundleAnalizer ? new BundleAnalyzerPlugin() : () => {}
  ];

  /*
   * Common rules
   */
  const rules = [
    {
      test   : /\.(js|jsx)$/,
      exclude: /node_modules/,
      use    : [
        'babel-loader'
      ]
    },
    {
      test   : /\.(png|gif|jpg|svg)$/,
      include: IMG_PATH,
      use    : 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use : 'file-loader?name=fonts/[name].[ext]'
    },
    {
      test: /\.css$/,
      use : [
        'style-loader',
        'css-loader?modules&importLoaders=1',
        // 'postcss-loader'
        {
          loader : 'postcss-loader?parser=postcss-js&sourceMap=inline',
          options: {
            plugins() {
              return [
                require('precss'), // eslint-disable-line global-require
                require('autoprefixer') // eslint-disable-line global-require
              ];
            }
          }
        }
      ]
    }
  ];

  if (isProduction) {
    /*
     * Production plugins
     */
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug   : false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings    : false,
          screw_ie8   : true,
          conditionals: true,
          unused      : true,
          comparisons : true,
          sequences   : true,
          dead_code   : true,
          evaluate    : true,
          if_return   : true,
          join_vars   : true
        },
        output: {
          comments: false
        }
      })
      // new ExtractTextPlugin('style-[hash].css')
    );

    /*
     * Production rules
     */
    rules.push(
      {
        test  : /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader        : 'css-loader!postcss-loader!sass-loader'
        })
      }
    );
  } else {
    /*
     Development plugins
     */
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new DashboardPlugin()
    );

    /*
     Development rules
     */
    rules.push(
      {
        test   : /\.scss$/,
        // test: /(\.css|\.scss)$/,
        exclude: /node_modules/,
        use    : [
          'style-loader',
          // Using source maps breaks urls in the CSS loader
          // https://github.com/webpack/css-loader/issues/232
          // This comment solves it, but breaks testing from a local network
          // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
          // 'css-loader?sourceMap',
          'css-loader',
          'postcss-loader',
          'sass-loader?sourceMap'
        ]
      }
    );
  }

  return {
    devtool: isProduction ? 'eval' : 'source-map',
    context: SOURCE_PATH,
    entry  : {
      js: ENTRY_POINT,
      vendor
    },
    output: {
      path      : BUILD_PATH,
      publicPath: PUBLIC_PATH,
      filename  : 'app-[hash].js'
    },
    module: {
      rules
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules   : [
        path.resolve(dirname, 'node_modules'),
        SOURCE_PATH
      ]
    },
    plugins,
    devServer: {
      contentBase       : isProduction ? './build' : './source',
      historyApiFallback: true,
      port              : PORT,
      compress          : isProduction,
      inline            : !isProduction,
      hot               : !isProduction,
      host              : HOST,
      disableHostCheck  : !isProduction,
      stats             : {
        assets    : true,
        children  : false,
        chunks    : false,
        hash      : false,
        modules   : false,
        publicPath: false,
        timings   : true,
        version   : false,
        warnings  : true,
        colors    : {
          green: '\u001b[32m'
        }
      }
    }
  };
};

