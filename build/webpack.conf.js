const path = require('path')
const MpxWebpackPlugin = require('@mpxjs/webpack-plugin')

const mainSubDir = ''
function resolveSrc (file) {
  return path.resolve(__dirname, '../examples', mainSubDir, file || '')
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const mpxLoaderConfig = {
  transRpx: {
    mode: 'only',
    comment: 'use rpx',
    include: resolve('examples')
  }
}

const webpackConf = {
  entry: {
    app: resolveSrc('app.mpx')
  },
  module: {
    rules: [
      {
        test: /\.(js|mpx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('examples')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.mpx$/,
        use: MpxWebpackPlugin.loader(mpxLoaderConfig)
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('examples'), resolve('test'), resolve('node_modules/@mpxjs')],
        exclude: [resolve('node_modules/@mpxjs/webpack-plugin')]
      },
      {
        test: /\.json$/,
        resourceQuery: /__component/,
        type: 'javascript/auto'
      },
      {
        test: /\.(wxs|qs|sjs|filter\.js)$/,
        loader: MpxWebpackPlugin.wxsPreLoader(),
        enforce: 'pre'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: MpxWebpackPlugin.urlLoader({
          name: 'img/[name][hash].[ext]'
        })
      }
    ]
  },
  performance: {
    hints: false
  },
  mode: 'none',
  resolve: {
    extensions: ['.js', '.mpx'],
    modules: ['node_modules'],
    alias: {
      '~': resolve('src'),
      '@': resolve('packages'),
      '#': resolve('examples')
    }
  }
}

module.exports = webpackConf
