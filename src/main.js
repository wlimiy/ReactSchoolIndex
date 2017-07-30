import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
//使用react-router-redux
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
let history=createHistory();
window._store=store;//将store挂在window上，store有个getState()方法，可以获取状态
import {
    HashRouter as Router,//容器
    Route,//一条路由
    Switch,
    Redirect
} from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';
import Lesson from './containers/Lesson';
import Profile from './containers/Profile';
import './common/css/index.less'
ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
        <App>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/lesson" component={Lesson}/>
                <Route path="/profile" component={Profile}/>
                <Redirect to="/home"/>
            </Switch>
        </App>
    </ConnectedRouter>
    </Provider>,document.querySelector('#app')
);