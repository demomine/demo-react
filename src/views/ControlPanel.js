/**
 * Created by immerer on 2017/7/30.
 */

import React,{Component} from "react";
import Counter from "./Counter";
class ControlPanel extends Component{
    render(){
        return (
            <div>
                <Counter caption="First"/>
                <Counter caption="Second"/>
                <Counter caption="Third"/>
            </div>
        );
    }
}

export default ControlPanel;