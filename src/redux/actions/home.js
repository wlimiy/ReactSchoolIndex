//首页动作
//放一些action-creater函数返回action
import * as Types from '../action-types'
export const setCurrentLesson=(lesson)=>{
    return {
        type:Types.SET_CURRENT_LESSON,
        lesson
    }
};