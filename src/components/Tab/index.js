import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
export default class Tab extends Component{
    render(){
        return(
            <nav className="tab">
                <Link to={'/home'}>
                    <i className="iconfont icon-shouye"></i>
                    <span>首页</span>
                </Link>
                <Link to={'/lesson'}>
                    <i className="iconfont icon-kecheng"></i>
                    <span>我的课程</span>
                </Link>
                <Link to={'/profile'}>
                    <i className="iconfont icon-gerenzhongxin"></i>
                    <span>个人中心</span>
                </Link>
            </nav>
        )
    }
}