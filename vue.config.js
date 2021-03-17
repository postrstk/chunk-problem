const webpack = require('webpack');

module.exports = {
    configureWebpack: {
      plugins: [
        new webpack.ContextReplacementPlugin(
            /router/,
            new RegExp(`(${process.env.VUE_APP_MODULE_TAG}|common).routes.js`),
        )
      ]
    }
  }