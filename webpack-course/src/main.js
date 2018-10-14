// alert("hello world!")

// 将文件引入到 js
require("babel-runtime/regenerator")
require("webpack-hot-middleware/client")
require("./main.css")
require("./index.html")

// 使用 babel-plugin-transform-es2015-arrow-functions 进行转义
// var a = () => {
//     console.log("hello world")
// }

// 使用 babel-plugin-async-to-promises 进行转义
var a = async () => {
    await console.log("hello world")
    console.log("Done")
}