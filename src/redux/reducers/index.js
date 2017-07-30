//导出合并后的reducer
import {combineReducers} from 'redux';
import {home} from './home';
import {routerReducer} from 'react-router-redux';
export default combineReducers({
    home,
    router:routerReducer
})
//路由的状态：state.router.location.path