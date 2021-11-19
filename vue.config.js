// 配置路径别名
var path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 配置基础链接地址，根据发布环境添加
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  outputDir: 'preview',
  // 使用easy-mock模拟数据服务
  devServer: {
    // proxy: {
    //   '/tsadmin/': {
    //     target: 'http://localhost:7300',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/tsadmin': '/mock/618dcbc9f21bed6a4cb6666b/tsadmin'
    //     }
    //   }
    // }
  },
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  assetsDir: 'static',
  filenameHashing: true, // 发布打包文件是否有哈希后缀
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        //'@@': resolve('src/components')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}
