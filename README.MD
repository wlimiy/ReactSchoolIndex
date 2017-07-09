基于React开发腾讯课堂首页
==
开发项目流程
--
###初始化项目文件夹
>npm init

###安装项目依赖

* react技术栈
>sudo npm install react react-dom redux react-redux react-router-dom react-router-redux -D
* webpack
>sudo npm install webpack webpack-dev-server html-webpack-plugin -S
* babel
>sudo npm install babel-core babel-preset-es2015 babel-loader babel-preset-stage-0 babel-preset-react babel-plugin-transform-decorators-legacy -S
* 图片和less
>sudo npm install css-loader style-loader less-loader less file-loader url-loader -S
* 轮播图插件
>sudo npm install react-swipe swipe-js-iso -S
* react动画
>sudo npm install react-addons-css-transition-group -D
* fetch
>sudo npm install whatwg-fetch est-promist -D
* koa
>sudo npm install koa koa-router koa-cors  koa-bodyparser nodemon -D

### 建立src文件夹

    main.js
    index.html
    
### webpack.config.js
```
let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');//这个插件的作用是依据一个简单的模板，帮你生成最终的Html5文件
module.exports={
    entry:'./src/main.js',//唯一入口文件
    output : {
        path:path.resolve('dist'),//打包后的文件存放的地方,path必须是绝对路径
        filename:'bundle.js'//打包后输出文件的文件名
    },
    devtool:'source-map',//可以映射出对应的源码位置
    module: {
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//从后往前写
            {test:/\.(jpg|png|gif)$/,use:'url-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};
```
### .babelrc
>这个文件是用来设置转码的规则和插件的
```
{
  'presets': ['es2015','stage-0','react'],
  'plugins': ['babel-plugin-transform-decorators-legacy']
}
presets 字段是用来设定转码规则
```

### .gitignore
```
node_modules
.idea
.DS_Store
```
### container 主要是放置页面级文件夹
### components 主要是放置组件文件夹
### common 主要是放置公共文件夹
## 路由切换
- 访问/home 显示首页组件
- 访问/lesson 显示课程页面
- 访问/profile 显示课程中心

## homeHeader
- 将当前点击的课程存到redux中，在页面加载时获取redux中的当前课程进行读取数据
## 项目应用知识点
- react-router-dom
    - HashRouter
    - browserRouter
    - Switch
- flex
```
flex-direction:column
    伸缩流方向：row:默认从左向右排列 column:从上到下排列

justify-content:space-between
    主轴对齐：space-between:第一个伸缩项目在一行中最开始位置，第二个伸缩项目在一行中最终点位置

align-items:center
    侧轴对齐：调整伸缩项目在侧轴上的定位方式，居中对齐
    
```
- react-addons-css-transition-group实现动画效果
```
https://facebook.github.io/react/docs/animation.html

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>

.example-enter {
  opacity: 0.01;
}

.example-enter.example-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.example-leave {
  opacity: 1;
}

.example-leave.example-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
        
```
- react-router-redux
- redux-thunk
- history/createHashHistory
- 函数解构赋值
- 对象解析赋值
- fetch
- koa

Webpack了解
--
什么是WebPack？
>WebPack可以看做是模块打包机，它做的事件是：分析你的项目结构，找到JavaScript模块以及它的一些浏览器不能直接运行的拓展语言，并将其打包为合适的格式以供浏览器使用。

Webpack安装
>sudo npm install webpack -S

flex了解
--

