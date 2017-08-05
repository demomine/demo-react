/**
 * Created by immerer on 2017/7/30.
 */
import React,{Component} from "react";
import CounterComponent from "./CounterComponent";
class ControlPanel extends Component{
    render() {
        return (
           /* <div>
                <CounterComponent caption="First"/>
                <CounterComponent caption="Second"/>
                <CounterComponent caption="Third"/>
            </div> */
            <div>
                <CounterComponent caption="First"/>
                <CounterComponent caption="Second"/>
                <CounterComponent caption="Third"/>
            </div>
        );
    }
}

export default ControlPanel;