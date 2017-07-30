/**
 * Created by immerer on 2017/7/30.
 */

import {DECREMENT, INCREMENT} from "./ActionTypes";
export const increment = (counterCaption) => {
   return {
       type: INCREMENT,
       counterCaption: counterCaption
   };
};

export const decrement = (counterCaption) => {
    return {
        type: DECREMENT,
        counterCaption: counterCaption
    };
};