### 使用 react 环境

* 安装 react 命令如下
    * `npm install react react-dom`
    * 创建 react 入口文件 `src/app.js`
    * 在 `src/main.js` 头部引入 `require("babel-register")` 及 `require("./app.js")`
    * 在 `src/app.js` 内写入 react 代码
    * 在 `config/webpack.dev.js` 内配置 `module` 内的 `rules` 内配置配置 `js` 的 `loader` 内把 `test: /\.js$/` 改为 `test: /\.js|jsx/`
* 安装 babel-preset-react 命令如下
    * `npm install babel-preset-react`
    * 在 `.babelrc` 文件内的 `presets` 内配置 `"babel-preset-react"`

### 使用 ejs 环境

* 创建 `ejs` 文件 `src/index.ejs`
*  `config/webpack.dev.js` 文件内的 `plugins` 内 的 `htmlwebpackplugin` 内
    * `template` 值修改为对应的 `ejs` 首页文件, 例如: `"src/index.ejs"` 则使用 `ejs`
    * 可增加 `title` 属性并赋值给到它, 在 `src/index.ejs` 内可以直接调用
        * `src/index.ejs` 内调用 `title` 属性值的方法 `<%= htmlWebpackPlugin.options.title %>`
* 为图片增加 `hash` 值
    * 在 `config/webpack.dev.js` 内配置 `module` 内的 `rules` 内配置配置图片内的 `loader` 内 `use` 内 `options` 内的 `name: "images/[name].[ext]"` 改为 `name: "images/[name]-[hash:8].[ext]"`
    * 在 `src/index.ejs` 内的 `<img src="./images/we.jpg" alt="">` 改为 `<img src="<%= require("./images/we.jpg") %>" alt="Ous home">`
    * 做完以上两步就能前端网页图片就能得到 `hash` 值了

### 使用 pug 环境

* 创建 `pug` 文件 `src/index.pug`
* 安装 pug 命令如下
    * `npm install pug pug-loader`
* 配置 `config/webpack.dev.js` 内配置 loader
    * 在 `config/webpack.dev.js` 内配置 `module` 内的 `rules` 内增加一个 `loader` 对象
    * 内容如下
        * `{test:/\.pug$/,use:{loader:"pug-loader"}}`
*  `config/webpack.dev.js` 文件内的 `plugins` 内 的 `htmlwebpackplugin` 内 `template` 值
    * `template` 值修改为对应的 `pug` 首页文件, 例如: `"src/index.pug"` 则使用 `pug`
    * 可增加 `title` 属性并赋值给到它, 在 `src/index.pug` 内可以直接调用
        * `src/index.pug` 内调用 `title` 属性值的方法 `htmlWebpackPlugin.options.title`
* 为图片增加 `hash` 值
    * 在 `config/webpack.dev.js` 内配置 `module` 内的 `rules` 内配置配置图片内的 `loader` 内 `use` 内 `options` 内的 `name: "images/[name].[ext]"` 改为 `name: "images/[name]-[hash:8].[ext]"`
    * 在 `src/index.pug` 内的 `<img src="./images/we.jpg" alt="">` 改为 `img(src=require("./images/we.js"))`
    * 做完以上两步就能前端网页图片就能得到 `hash` 值了

### 使用 sass 环境
* 创建 `sass` 文件 `src/main.sass`
    * 在 `src/main.js` 引入 `require("./main.sass")`
* 安装 sass 命令如下
    * `npm install node-sass sass-loader`
* 配置 `config/webpack.dev.js` 内配置 loader
    * 在 `config/webpack.dev.js` 内配置 `module` 内的 `rules` 内增加一个 `loader` 对象
    * 内容如下
        * `{test:/\.sass$/,use:{loader:"style-loader"},{loader:"css-loader"},{loader:"sass-loader"}}`

### 使用 less 环境
* 创建 `less` 文件 `src/main.less`
    * 在 `src/main.js` 引入 `require("./main.less")`
* 安装 less 命令如下
    * `npm install less less-loader`
* 配置 `config/webpack.dev.js` 内配置 loader
    * 在 `config/webpack.dev.js` 内配置 `module` 内的 `rules` 内增加一个 `loader` 对象
    * 内容如下
        * `{test:/\.less$/,use:{loader:"style-loader"},{loader:"css-loader"},{loader:"less-loader"}}`


### 使用 stylus 环境
* 创建 `stylus` 文件 `src/main.styl`
    * 在 `src/main.js` 引入 `require("./main.styl")`
* 安装 stylus 命令如下
    * `npm install stylus stylus-loader`
* 配置 `config/webpack.dev.js` 内配置 loader
    * 在 `config/webpack.dev.js` 内配置 `module` 内的 `rules` 内增加一个 `loader` 对象
    * 内容如下
        * `{test:/\.styl$/,use:{loader:"style-loader"},{loader:"css-loader"},{loader:"stylus-loader"}}`