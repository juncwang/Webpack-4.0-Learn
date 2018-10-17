### 使用 webpack-base

1. 运行初始化程序 `npm init -y` 生成 package.json 文件
2. 安装以下需要的全局组件
    * `npm install webpack webpack-cli webpack-dev-server -g`
    * `npm install express -g`
    * `npm install nodemon -g`
3. 安装以下需要的组件
    * `npm install webpack webpack-cli webpack-dev-server`
    * `npm install style-loader css-loader`
    * `npm install html-loader extract-loader file-loader`
    * `npm install babel-core babel-cli babel-loader@7`
    * `npm install babel-preset-env babel-plugin-transform-runtime`
    * `npm install webpack-dev-middleware webpack-hot-middleware`
    * `npm install html-webpack-plugin`
    * `npm install react react-dom`
    * `npm install babel-preset-react`
4. package.json 文件下的 script 下增加以下内容
    * `"dev": "nodemon --inspect --watch config --watch src/server src/server/main.js"`
    * `"build": "webpack --config=config/webpack.dev.js"`
    * `"start": "webpack-dev-server --config=config/webpack.dev.js"`

### 构建输出文件
* 在 config/webpack.dev.js 文件中把以下两行代码注释掉
    * `import webpack from "webpack"`
    * `new webpack.HotModuleReplacementPlugin(),`
* 注释完成后就可以执行
    * `npm run build` 构建输出文件
    * `npm run start` 本地启动热更新代码

### 具体详细信息请看 webpack-course react-webpack-course 文档





    



