const path = require("path");
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  devServer: {
    // headers: {
    //   'Cross-Origin-Opener-Policy':'cross-origin',
    //   'Cross-Origin-Embedder-Policy':'require-corp',
    //   'Cross-Origin-Resource-Policy': 'cross-origin'
    // },
    overlay: {
      warnings: false,
      errors: false
    },
  },
  lintOnSave: false,
  css: {
    loaderOptions: {}
  },
  pluginOptions: {
    i18n: {
      localeDir: "locales",
      enableInSFC: true
    }
  },
  chainWebpack: config => {
    config.module
      .rule("caption-loader")
      .test(/\.captionstyle$/i)
      .use("arraybuffer-loader")
      .loader("arraybuffer-loader")
      .options({
        esModule: false
      })
      .end();
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/icons")) //处理svg目录
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
  }
};
