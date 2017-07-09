import React,{Component} from 'react';
import HomeHeader from "../../../src/components/HomeHeader/index";
import Slider from "../../../src/components/Slider/index";
export default class Home extends Component{
    render(){
        return(
            <div>
                <HomeHeader/>
                <Slider/>
            </div>
        )
    }
}