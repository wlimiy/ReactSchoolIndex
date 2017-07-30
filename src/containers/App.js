//这个组件是用来显示所有页面用的
import React,{Component} from 'react';
import Tab from '../components/Tab';
import {connect} from 'react-redux';
class App extends Component{
    render(){
        return(
            <div className="wrap">
                {this.props.children}
                <Tab path={this.props.router.location.pathname}/>
            </div>
        )
    }
}
export default connect(
    state=>({
        router:state.router
    })
)(App);