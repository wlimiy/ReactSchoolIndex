基于React开发在线课堂首页
==
开发项目流程
--
### 初始化项目文件夹
>npm init

### 安装项目依赖

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

项目启动

npm start
### 建立src文件夹
    main.js
        import React,{Component} from 'react';
        import {render} from 'react-dom';
        render(
            <h1>Hello World</h1>,document.getElementById('app')
        );
    index.html
        <div id="app"></div>
    
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
### common 主要放公共文件
    css
        index.less
     images
        logo.jpg
### container 主要是放置页面级文件夹
App.js
```
    //这个组件是用来显示所有页面用的
    import React,{Component} from 'react';
    export default class Home extends Component{
        render(){
            return(
                <div>
                    {this.props.children}
                </div>
            )
        }
    }
```
Home

    index.js
Lesson

    index.js

Profile
    
    index.js
    
### components 主要是放置组件文件夹

HomeHeader文件夹
    
    index.js
    index.less
Tab文件夹

* 路由切换
    * 访问/home 显示首页组件
    * 访问/lesson 显示课程组件
    * 访问/profile 显示个人中心组件

    index.js
    index.less
    
Home文件夹

    index.js

    import React,{Component} from 'react';
    export default class Home extends Component{
        render(){
            return (
                <div>
                    Home
                </div>
            )
        }
    }


### 实现HomeHeader
- 利用state控制状态
```
constructor(){
    super();
    this.state={
        isShow:false
    }
}
changeShow(){
    this.setState({
        isShow:!this.state.isShow
    })
}
```
- react-addons-css-transition-group实现动画效果
https://facebook.github.io/react/docs/animation.html
```
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
### 实现底部导航切换
containers>App.js
这个组件 主要是显示所有页面用的
components>Tab

main.js
- react-router-dom<br/>
https://reacttraining.com/react-router/
```
import {
    HashRouter as Router,//容器
    Route//一条路由
} from 'react-router-dom';

<Router>
    <div>
    <Route path="/" component={Root}/>
    <Route path="/home" component={Home}/>
    <Route path="/User" component={User}/>
    <Route path="/Profile" component={Profile}/>
    </div>
</Router>
```

>路由切换
- 访问/home 显示首页组件
- 访问/lesson 显示课程页面
- 访问/profile 显示课程中心

### 应用redux实现状态管理

创建redux文件夹：src/redux

    - action-types
        index.js
            //index文件，存放所有的动作名
            //更改当前课程
            export const SET_CURRENT_LESSON = 'SET_CURRENT_LESSON';
    - actions
        home.js
            //首页动作
            //放一些action-creater函数返回action
            import * as Types from '../action-types'
            export const setCurrentLesson=(lesson)=>{
                return {
                    type:Types.SET_CURRENT_LESSON,
                    lesson
                }
            };
    - store
        index.js
            import {createStore} from 'redux';
            import reducers from '../reducers';//将合并后的reducer插入到store中
            export default createStore(reducers);
    - reducers   
        home.js
            import * as Types from '../action-types';
            let initState={
              currentLesson:'all'  
            };
            export function home(state=initState,action) {
                switch (action.type){
                    case Types.SET_CURRENT_LESSON:
                        return {...state,...{currentLesson:action.lesson}}
                }
                return initState;
            }
        index.js
            //导出合并后的reducer
            import {combineReducers} from 'redux';
            import {home} from './home';
            export default combineReducers({
                home
            })
```
src/main.js
        引入store
            import {Provider} from 'react-redux';
            import store from './redux/store';
            window._store=store;//将store挂在window上，store有个getState()方法，可以获取状态

            ReactDOM.render(
                <Provider store={store}>
                <Router>
                    <App>
                        <Switch>
                            <Route path="/home" component={Home}/>
                            <Route path="/lesson" component={Lesson}/>
                            <Route path="/profile" component={Profile}/>
                            <Redirect to="/home"/>
                        </Switch>
                    </App>
                </Router>
                </Provider>,document.querySelector('#app')
            );
``` 
### 首页导航激活状态
### 实现轮播图
- react-swipe实现轮播图效果插件
https://github.com/voronianski/react-swipe
```
import ReactSwipe from 'react-swipe';
<ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
</ReactSwipe>
```
- sliders要通过ajax请求数据，通过action请求数据，请求成功后派发对应的reducers


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
- redux
- react-redux
- react-router-redux
- redux-thunk
- history/createHashHistory
- 函数解构赋值
- 对象解析赋值
- fetch
```
使用fetch代替ajax发送数据实践（node+webpack）--whatwg-fetch 
1、安装whatwg-fetch(和ajax一样，新的获取数据方式,支持promise语法)获取数据。安装方法：
    npm install whatwg-fetch --save; 
2、导入依赖。注意这里的导入只能使用**import 'whatwg-fetch';**接着是发送xhr请求的代码，我们将其封装成一个方法，如下
    function myFetch(Url){
        fetch(Url)
            .then(function(response) {
                console.log(response);
                return response.text();
            })
            .then((data) => {
                console.log(data);
            }).catch(e=>{console.log(e);})
    }
3. 接着将其暴露出去，给其他js文件引用。module.exports = myFetch;
4. 定义另一个index.js文件，代码如下：
    import myFetch from './index6'
    myFetch("http://localhost:3000/users");
```
- koa
- Webpack了解
    
    什么是WebPack？
    >WebPack可以看做是模块打包机，它做的事件是：分析你的项目结构，找到JavaScript模块以及它的一些浏览器不能直接运行的拓展语言，并将其打包为合适的格式以供浏览器使用。
    
    Webpack安装
    >sudo npm install webpack -S

