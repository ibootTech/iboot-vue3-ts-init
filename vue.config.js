const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '',
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html'
    }
  },
  devServer: {
    port: process.env.port || 8080,
    open: process.env.VUE_APP_AUTO_OPEN_BROWSER || false
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#40a9ff',
            'link-color': '#40a9ff'
          },
          javascriptEnabled: true
        }
      }
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, 'src/components'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options(
        {
          symbolId: 'icon-[name]'
        },
        { removeAttrs: { attrs: 'path:fill' } }
      )
      .end()
  },
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false
      })
    ]
  }
}
function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/lib/style/variable.less') // 需要全局导入的less
      ]
    })
}
