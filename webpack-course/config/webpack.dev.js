// 使用 nodejs 的 path 模块
const path = require("path")

module.exports = {

    // 设置自定义系统入口文件, 可以有多个入口文件
    entry: {
        main : "./src/main.js",
        // 多个入口文件可以用中括号包裹, 并且用逗号隔开
        // main : [ "./src/main.js", "./src/index.js"]
    },

    // 打包环境设置: 开发 development & 生产 production
    mode: "development",

    // 出口文件设置: 有且只能有一个出口文件
    output: {
        // 设置出口文件名称
        filename: "bundle.js",
        // 可以使用以下方式设置出口文件名称, 设置后出口文件名为 main-bundle.js
        // filename: "[name]-bundle.js"

        // 输出路径设置到 dist 文件夹下
        path: path.resolve(__dirname, "../dist"),

        // 设置公有路径, 在 html 可以使用 <script src="/bundle.js"></script> 引入
        publicPath: "/",
        // 下面这种写法, 在 html 可以使用 <script src="/js/bundle.js"></script> 引入
        // publicPath: "/js"
    },

    // 设置热更新服务内容
    devServer: {
        // 设置默认启动文件夹
        contentBase: "dist"
    }
}