import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader';
import {connect} from 'react-redux';
class Home extends Component{
    render(){
        return(
            <div>
                <HomeHeader/>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        router:state.router//将状态中的router映射成router属性
    }
)(Home)