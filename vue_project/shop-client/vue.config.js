const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
lintOnSave: false,
chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("./src"));
      //.set("assets", resolve("./src/assets"))
      //.set("components", resolve("./src/components"))
      //.set("common", resolve("./src/components/common"))
      //.set("network", resolve("./src/network"))
      //.set("views", resolve("./src/views"))
      //.set("content", resolve("./src/components/content"));
  },
  devServer: {
    inline:true,
    port:8081,
    proxy: {
      '/api': { // 只对请求路由以/api开头的请求进行代理转发
        target: 'http://127.0.0.1',// 转发的目标url
        changeOrigin: true // 支持跨域
      }
    }
  },
};

