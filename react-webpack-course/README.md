### 使用 webpack-base

1. 运行初始化程序 `npm init -y` 生成 package.json 文件
2. 安装以下需要的全局组件
    * `npm install webpack webpack-cli webpack-dev-server -g`
    * `npm install express -g`
3. 安装以下需要的组件
    * `npm install webpack webpack-cli webpack-dev-server`
    * `npm install style-loader css-loader`
    * `npm install html-loader extract-loader file-loader`
    * `npm install babel-core babel-cli babel-loader@7`
    * `npm install babel-preset-env babel-plugin-transform-runtime`
    * `npm install webpack-dev-middleware webpack-hot-middleware`
    * `npm install html-webpack-plugin`
4. package.json 文件下的 script 下增加以下内容
    * `"dev": "nodemon --inspect --watch config --watch src/server src/server/main.js"`

### 具体详细信息请看 webpack-course 文档





    



