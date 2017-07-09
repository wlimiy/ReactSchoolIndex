import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import './common/css/index.less';
import Home from "./containers/Home/index";
import Lesson from "./containers/Lesson/index";
import Profile from "./containers/Profile/index";
import App from "./containers/App";
ReactDom.render(
    <HashRouter>
        <App>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/lesson" component={Lesson}/>
                <Route path="/profile" component={Profile}/>
                <Redirect to='/home'/>
            </Switch>
        </App>
    </HashRouter>
    ,document.querySelector('#app'));