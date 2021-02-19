/**
 * Make lib build emit typescript declaration files. Required due to:
 * https://github.com/vuejs/vue-cli/issues/1081
 * 
 * This code is taken from
 * https://github.com/vuejs/vue-cli/issues/1081#issuecomment-648805350
 * 
 * Remove it when the issue is resolved.
 */
const emitTSDeclarations = {
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.module.rule("ts").uses.delete("cache-loader")
      config.module
        .rule("ts")
        .use("ts-loader")
        .loader("ts-loader")
        .tap((options) => ({
          ...options,
          transpileOnly: false,
          happyPackMode: false,
        }))
    }
  },
  parallel: false
}

module.exports = {
  ...emitTSDeclarations,

  devServer: {
    // Set host here. Option --host of vue-cli-service may lead to CORS issue.
    host: "vue-cookie-box.localhost"
  },

  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ["src/scss"]
        }
      }
    }
  }
}
