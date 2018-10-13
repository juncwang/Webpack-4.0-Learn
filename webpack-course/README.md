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

* 安装本地 webpack 实现热更新功能并启动
    * 命令行安装本地 webpack
        * `npm install webpack webpack-cli webpack-dev-server`
    * 命令行启动热更新功能
        * `webpack-dev-server --config=config/webpack.dev.js`

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

* js 文件加载 其他 文件方法
    * `require("./xxx.css")`
    * `require("./xxx.html")`

* 配置 npm 命令
    * 在 package.json 文件内的 script 项下配置
        * `"命令名称": "实际终端命令的语句"`
        * 在终端就可以使用 `npm 命令名称` 或者 `npm run 命令名称` 来执行: `世纪终端命令的语句`
        * 详见 package.json 文件内的 script 项

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
    