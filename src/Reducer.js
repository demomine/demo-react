/**
 * Created by immerer on 2017/7/30.
 */
//扩展运算符用三个点号表示，功能是把数组或类数组对象展开成一系列用逗号隔开的值
import {DECREMENT, INCREMENT} from "./ActionTypes";
export default (state, action)=>{
    const {counterCaption} = action;

    switch (action.type) {
        case INCREMENT:
            return {...state,[counterCaption]:state[counterCaption] + 1};
        case DECREMENT:
            return {...state,[counterCaption]:state[counterCaption] - 1};
        default:
            return state;
    }
};