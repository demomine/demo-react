/**
 * Created by immerer on 2017/7/30.
 */

import React,{Component} from "react";
import store from './Store.js';
import * as Actions from "./Actions";
class Counter extends Component {
    constructor(props){
        super(props);
        this.onIncrementButton = this.onIncrementButton.bind(this);
        this.onDecrementButton = this.onDecrementButton.bind(this);
        this.getOwnState = this.getOwnState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = this.getOwnState();
    }

    getOwnState(){
        return {
            count: store.getState()[this.props.caption]
        };
    }

    onIncrementButton() {
        store.dispatch(Actions.increment(this.props.caption))
    }

    onDecrementButton() {
        store.dispatch(Actions.decrement(this.props.caption))
    }

    onChange(){
        this.setState(this.getOwnState());
    }

    componentDidMount(){
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    render(){
        const {caption} = this.props;
        return (
            <div>
                <button onClick={this.onIncrementButton}>+</button>
                <span>{caption}:{this.state.count}</span>
                <button onClick={this.onDecrementButton}>-</button>
            </div>
        );
    }
}

export default Counter;