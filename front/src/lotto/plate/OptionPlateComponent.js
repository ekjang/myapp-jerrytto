import React, {Component} from "react";
import "./OptionPlateStyle.css";

class OptionPlateComponent extends Component {

    optionHandleChange = (e) => {
        this.props.optionHandleChange(e.target.value)
    }

    render() {
        return (
            <div className="radio-box-style">
                <b>숫자</b>
                <span>
                    <input type="radio" id="option1" name="Include" value="Include"
                           checked={this.props.optionVal === "Include" ? true : false} onChange={this.optionHandleChange} />넣어
                    <input type="radio" id="option2" name="Exclude" value="Exclude"
                           checked={this.props.optionVal === "Exclude" ? true : false} onChange={this.optionHandleChange} />빼
                </span>
            </div>
        );
    }
}

export default OptionPlateComponent;