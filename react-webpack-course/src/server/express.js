import express from "express"
import path from "path"

const server = express()

const staticMiddleware = express.static("dist")

const webpack = require("webpack")
const config = require("../../config/webpack.dev.js")
const compile = webpack(config)

const webpackDevMiddleware = require("webpack-dev-middleware")(compile,config)

const webpackHotMiddleware = require("webpack-hot-middleware")(compile)

server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)
server.use(staticMiddleware)

server.listen(8080, ()=>{
    console.log("server is running ... ... !")
})