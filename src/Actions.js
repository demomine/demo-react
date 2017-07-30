/**
 * Created by immerer on 2017/7/30.
 */

import AppDispatcher from "./AppDispatcher";
import {DECREMENT, INCREMENT} from "./ActionTypes";

export const increment = (counterCaption) =>{
    AppDispatcher.dispatch({
        type: INCREMENT,
        counterCaption: counterCaption
    });
};

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type: DECREMENT,
        counterCaption: counterCaption
    });
};