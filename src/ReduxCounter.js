/**
 * Created by immerer on 2017/8/5.
 */

/**
 * Created by immerer on 2017/7/30.
 */

import React,{Component } from "react";
import * as Actions from "./Actions";
import connect from "redux"
class ReduxCounter extends Component {
    render() {
        const {caption, onIncrementButton, onDecrementButton, count} = this.props;
        return (
            <div>
                <button onClick={onIncrementButton}>+</button>
                <span>{caption}:{count}</span>
                <button onClick={onDecrementButton}>-</button>
            </div>
        );
    }
}

function mapStateToProps (state,props){
    return {
        count:state[props.caption]
    }
}

function mapDispatchToProps(dispatch,props) {
    return {
        onIncrementButton:() => {
            dispatch(Actions.increment(props.caption))
        },
        onDecrementButton:() => {
            dispatch(Actions.decrement(props.caption))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ReduxCounter);