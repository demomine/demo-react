/**
 * Created by immerer on 2017/7/30.
 */

import {Component} from "react";
import * as React from "react";
import CounterStore from "../stores/CounterStore";
import * as Actions from "../Actions";
class Counter extends Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
    }


    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    onClickIncrementButton() {
        Actions.increment(this.props.caption);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count: newCount});
    }

    onClickDecrementButton() {
        Actions.decrement(this.props.caption);
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickIncrementButton}>+</button>
                <span>{ this.state.count }</span>
                <button onClick={this.onClickDecrementButton}>-</button>
            </div>
        );
    }
}

export default Counter;