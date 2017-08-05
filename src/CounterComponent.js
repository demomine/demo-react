/**
 * Created by immerer on 2017/7/30.
 */

import React,{Component,PropTypes } from "react";
import store from './Store.js';
import * as Actions from "./Actions";
class CounterComponent extends Component {
    render(){
        const {caption,onIncrementButton,onDecrementButton,count} = this.props;
        return (
            <div>
                <button onClick={onIncrementButton}>+</button>
                <span>{caption}:{count}</span>
                <button onClick={onDecrementButton}>-</button>
            </div>
        );
    }
}
CounterComponent.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrementButton: PropTypes.func.isRequired,
    onDecrementButton: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
};

class CounterContainer extends Component{
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

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    componentDidMount(){
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    render() {
        return <CounterComponent caption={this.props.caption}
                          onIncrementButton={this.onIncrementButton}//this.onIncrementButton()错误
                          onDecrementButton={this.onDecrementButton}
                          count={this.state.count} />

    }
}


CounterContainer.propTypes = {
    caption: PropTypes.string.isRequired
};

export default CounterContainer;