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

* 安装 CNPM 命令
    * 命令行输入命令
        * `npm install cnpm -g`

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
        * 配置打包命令 
        * package.json 文件内的 script 项内配置 `"build": "webpack --config=config/webpack.dev.js"`

* 安装本地 webpack 实现热更新功能并启动
    * 命令行安装本地 webpack
        * `npm install webpack webpack-cli webpack-dev-server`
    * 命令行启动热更新功能
        * `webpack-dev-server --config=config/webpack.dev.js`
        * 配置热更新启动命令 
        * package.json 文件内的 script 项内配置 `"start": "webpack-dev-server --config=config/webpack.dev.js"`

* 安装 CSS loader 及配置 loader 方法
    * 命令行安装命令
        * `npm install style-loader css-loader`
    * 配置 CSS 文件的方法
        * 详见 config/webpack.dev.js

* 安装 HTML 及 图片 loader 及配置 loader 方法
    * 命令行安装命令
        * `npm install html-loader extract-loader file-loader`
    * 配置 HTML 及 图片 文件的方法
        * 详见 config/webpack.dev.js

* 文件加载方法
    * `require("./xxx.css")`
    * `require("./xxx.html")`

* 安装 BABEL 及配置 loader 方法
    * 命令行安装命令
        * `npm install babel-core`
        * `npm install babel-cli` 在终端可以使用 babel 命令操作符, 例如 `babel src/main.js` 对文件进行转译
    * 使用 babel 转义语法
        * 第一种通过安装插件的方式进行部分转义
            * 这些插件需要在 `.babelrc` 文件内的 plugins 项进行配置, 例如 `"plugins":["transform-es2015-arrow-functions"]`
            * `npm install babel-plugin-transform-es2015-arrow-functions` ES6-将箭头函数转换成 ES5 所能执行的方法
            * `npm install babel-plugin-async-to-promises` ES8-解决异步问题转换成 ES5 所能执行的方法
        * 第二中通过 babel-polyfill 方式进行全部转义包括 es6、es7、es8
            * 命令行安装 `npm install babel-polyfill`
            * 在 config/webpack.dev.js 文件的如果文件 main 加入, 例如 `main: ["babel-polyfil", "./src/main.js"]`
            * 这样打包出来的文件会增大
        * 第三种通过安装环境变量的形式
            * 安装环境变量命令 `npm install babel-preset-env`
            * 配置 `.babelrc` 文件
                * `"presets": [["env",{"targets":{"browsers":["last 2 versions"]},"debug":true}]]`
            * 安装插件 `npm install babel-plugin-transform-runtime` 避免打包时对环境变量的污染
            * 配置 `.babelrc` 文件
                * `"plugins": ["transform-runtime"]`
            * 在 main.js 文件头部引入 `require("babel-runtime/regenerator")` 就可以实时转义语法并防止污染环境变量
                
    * 在根目录下创建 babel 的配置文件 `.babelrc` 并对插件进行配置
        * 详见 .babelrc 文件
    * 在 webpack 内使用 babel 的配置方法
        * 安装 babel 的加载器, 命令行输入命令
            * `npm install babel-loader`
                * 安装完后可能在运行时会报错 并提示 
                * `Error: Cannot find module '@babel/core'`
                * `babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.`
                * 如果看到这样的问题请把 babel-loader 安装换成以下命令
                    * `npm install babel-loader@7`
        * 配置方法详见 config/webpack.dev.js 文件

### 配置 npm 命令
    * 在 package.json 文件内的 script 项下配置
        * `"命令名称": "实际终端命令的语句"`
        * 在终端就可以使用 `npm 命令名称` 或者 `npm run 命令名称` 来执行: `世纪终端命令的语句`
        * 详见 package.json 文件内的 script 项
    
### 搭建后端服务程序

* 安装 express 后段服务及配置
    * 执行以下命令行命令:
        * `npm install express` 安装 express
    * 配置 express 文件
        * 在 src 文件夹下创建 server 文件夹
        * 在 server 文件夹下 创建 main.js 服务器入口文件 及 express.js 服务器配置文件
        * 配置服务器启动命令
        * package.json 文件内的 script 项内配置 `"dev": "node src/server/main.js"`
    * 配置 main.js 文件
        * 引入 `require("babel-register")` 可以在服务器端转义 es6 语法
        * 引入 `require("./express")` 加入服务器配置文件
    * 配置 express.js 文件
        * 详见 src/express.js 文件

* 安装插件实现服务器启动后 css js 代码热更新功能
    * 监听代码插件安装及配置: 
        * `npm install webpack-dev-middleware` 安装插件
        * 配置详见 src/express.js 文件 监听代码
    * 热更新插件安装及配置:
        * `npm install webpack-hot-middleware` 安装插件
        * 配置详见 src/express.js 文件 热更新服务
    * 配置 config/webpack.dev.js
        * 在开始引入 `import webpack from "webpack"`
        * 在 `module.exports` 内的 `DevServer` 内加入热更新功能 `hot: true`
        * 在 `module.exports` 内的 `plugins` 内加入热更新插件 `new webpack.HotModuleReplacementPlugin()`
    * 配置 src/main.js 
        * 在 `require("babel-runtime/regenerator")` 下面一行引入 `require("webpack-hot-middleware/client")`

* 安装插件实现服务器启动后 config/webpack.dev.js 代码热更新功能
    * 监听代码插件安装及配置
        * `npm install nodemon -g` 安装插件
        * 把 package.json 文件下的 script 下的 dev 内容更改为以下 `"dev": "nodemon --watch config --watch src/server src/server/main.js"`

* 安装插件实现服务器启动后 html 代码热更新功能
    * 监听代码插件安装及配置
        * `npm install html-webpack-plugin` 安装插件
    * 在 config/webpack.dev.js 内进行引入及配置
        * 在头部引入 `const HTMLWebpackPlugin = require("html-webpack-plugin")`
        * 在 module.exports 内的 plugins 内增加 `new HTMLWebpackPlugin({template: "./src/index.html"})`
        * 在 src/main.js 文件引入中更改以下引入内容 `require("webpack-hot-middleware/client?reload=true")`

### 利用 node webpack chrome 实现调试功能
* 添加调试工具 inspect
    * 把 package.json 文件下的 script 下的 dev 内容更改为以下 `"dev": "nodemon --inspect --watch config --watch src/server src/server/main.js"`
    * 使用 debugger 可以对代码进行断点设置
        * 后端通过浏览器调试工具内 增加的 inspect 进行调试
        * 前端通过浏览器调试工具进行调试
            * 如果想看到浏览器调试代码和对应文件代码一致, 需要在 config/webpack.dev.js 内的 module.exports 项内增加
                * `devtool: "source-map"`