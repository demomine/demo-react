/**
 * Created by immerer on 2017/7/30.
 */
import React,{Component} from "react";
import Counter from "./Counter";
class ControlPanel extends Component{
    constructor(props) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues = [ 0, 10, 20];
        const initSum = this.initValues.reduce((a, b) => a+b, 0);
        this.state = {
            sum: initSum
        }
    }

    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue;
        console.log("value:" + valueChange);
        this.setState({ sum: this.state.sum + valueChange});
    }

    render(){
        return (
          <div>
              <Counter onUpdate={this.onCounterUpdate} caption={10} initialValue={this.initValues[0]}/>
              <Counter onUpdate={this.onCounterUpdate} caption="a2"/>
              <Counter onUpdate={this.onCounterUpdate} caption="a3" initialValue={this.initValues[2]} />
              <button onClick={()=>{this.forceUpdate()}}>click to update</button>
              <div>Total Count: {this.state.sum}</div>
          </div>
        );
    }
}

export default ControlPanel;