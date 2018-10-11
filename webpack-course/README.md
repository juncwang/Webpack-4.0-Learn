### 项目中配置 webpack 

* 默认状态下, 创建下列文件夹及文件:
    * src
        * index.js
    * dist
        * index.html
    * config
        * webpack.dev.js

* 创建 package.json 文件
    * `npm init -y`

* webpack 手动打包的两种方式
    * 项目中只要 src 文件夹下有 index.js 并且 dist 文件夹下有 index.html 就可以使用以下两种命令手动
    * `webpack --mode=development`
        * 开发者模式,代码未经压缩
    * `webpack --mode=production`
        * 发布模式，代码压缩

* 对 webpack.dev.js 进行配置并使用配置文件进行打包
    * 配置说明详见 config/webpack.dev.js 备注
    * 命令行打包语句进行打包
        * `webpack --config=config/webpack.dev.js`

* 安装本地 webpack 实现热更新功能并启动
    * 命令行安装本地 webpack
        * `npm install webpack webpack-cli webpack-dev-server`
    * 命令行启动热更新功能
        * `webpack-dev-server --config=config/webpack.dev.js`