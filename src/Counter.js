/**
 * Created by immerer on 2017/7/30.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
class Counter extends Component {
    constructor(props){
        super(props);
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.state = {
            count: props.initialValue
        }
    }

    increaseCount(){
        this.upCount(true);
    }

    decreaseCount(){
        this.upCount(false);
    }
/*
    upCount(isIncrease){//count?更新后的值为什么还是原来的
        const preValue = this.state.count;
        if (isIncrease) {
            this.setState({count: this.state.count + 1});
        } else {
            this.setState({count: this.state.count - 1});
        }
        console.log("preValue:" + preValue + " newValue: " + this.state.count)
        this.props.onUpdate(this.state.count, preValue);
    }*/

    upCount(isIncrease){
        const preValue = this.state.count;
        if (isIncrease) {
            const newValue = preValue+1;
            this.setState({count: newValue});
            this.props.onUpdate(newValue, preValue);
        } else {
            const newValue = preValue-1;
            this.setState({count: newValue});
            this.props.onUpdate(newValue, preValue);
        }
    }

    componentWillMount(){
        console.log("component will mount")
    }

    render(){
        const {caption} = this.props;
        return (
            <div>
                <button onClick={this.decreaseCount}> - </button>
                <span>{this.state.count}</span>
                <button onClick={this.increaseCount}> + </button>
                <span>{caption}</span>
            </div>
        );
    }

    componentDidMount(){
        console.log("component did mount")
    }


    componentWillReceiveProps(nextProps){
        console.log("update receive value" + this.state.count)
    }

    /*shouldComponentUpdate(nextProps,nextState){
        console.log("should update value" + this.state.count)
        return nextState.count !== this.state.count;
    }*/

    componentDidUpdate(updateProps) {
        console.log("did update value" + this.state.count)
    }

}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initialValue: PropTypes.number,
    onUpdate: PropTypes.func
};

Counter.defaultProps = {
    initialValue: 100,
    onUpdate: f => f
};

export default Counter;