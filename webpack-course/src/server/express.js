// 启动一个服务器

// 引入系统的 express
import express from "express"
// 引入系统的路径
import path from "path"

// 创建一个服务器
const server = express()

// 配置启动路径
const staticMiddleware = express.static("dist")

// 热更新所需配置代码
const webpack = require("webpack")
const config = require("../../config/webpack.dev.js")
const compile = webpack(config)

// 监听代码
const webpackDevMiddleware = require("webpack-dev-middleware")(compile,config)

// 热更新服务
const webpackHotMiddleware = require("webpack-hot-middleware")(compile)

// 注意配置顺序
// 启动监听代码服务
server.use(webpackDevMiddleware)
// 启动热更新服务
server.use(webpackHotMiddleware)
// 使用配置的路径
server.use(staticMiddleware)

// 开启服务器并监听 8080 端口, 启动时调用回调函数
server.listen(8080, ()=>{
    console.log("server is running ... ... !")
})