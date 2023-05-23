'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // runtimeCompiler: true,
  configureWebpack: {
    name: 'sdsd',
    resolve: {
      alias: {
        '@': resolve('src')
        // views: '@/views',
        // components: '@/components',
        // network: '@/network',
        // common: '@/common',
        // assets: '@/assets'
      }
    }
  }
}
