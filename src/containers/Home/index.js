import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home';
import {bindActionCreators} from 'redux';
class Home extends Component{
    choose(val){//homeHeader点击后的课程
        console.log(val);//想改变redux中的值，就要发布action
        this.props.setCurrentLesson(val);

    }
    render(){
        return(
            <div>
                {/*子组件和父组件通信，父组件传递回调函数给子组件，子组件触发这个函数*/}
                <HomeHeader choose={this.choose.bind(this)}/>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        router:state.router//将状态中的router映射成router属性
    }
)(Home)