import React,{Component} from 'react';
import './index.less';
import logoImg from '../../common/images/logo.jpg';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class HomeHeader extends Component{
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
    render(){
        let {isShow}=this.state;
        return(
            <div className="home-header">
                <div className="header-bar">
                    <img src={logoImg} alt=""/>
                    <div onClick={this.changeShow.bind(this)}>
                        {isShow?
                            <i className="iconfont icon-close"></i>
                            :
                            <i className="iconfont icon-category"></i>
                        }
                    </div>
                </div>
                <div className="header-menu">
                    <ReactCSSTransitionGroup
                        transitionName='example'
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                    {
                        isShow?
                            <ul>
                                <li>Node课程培训</li>
                                <li>HTML课程培训</li>
                                <li>视频课程</li>
                                <li>文档课程</li>
                            </ul>
                            :''
                    }
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}
