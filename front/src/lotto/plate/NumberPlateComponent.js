import React, {Component} from "react";
import "./NumberPlateStyle.css";
import NumberPlateBoxComponent from "./NumberPlateBoxComponent";
import OptionPlateComponent from "./OptionPlateComponent";

class NumberPlateComponent extends Component {
    allHandleChange = (e) => {
        const {checked} = e.target;
        this.props.allHandleChange(checked)
    }

    render() {
        return (
            <div>
                {this.props.isRandom &&
                <div className="number-plate-all-box">
                    <OptionPlateComponent
                        optionVal={this.props.optionVal}
                        optionHandleChange={this.props.optionHandleChange}
                    />
                </div>
                }
                <button className="number-button" onClick={this.props.handleButtonOnClick}>만들어</button>
                {this.props.isRandom &&
                <div className="number-plate-all-box">
                    <input type="checkbox" checked={this.props.allCheck} onChange={this.allHandleChange}/>
                    <span>ALL</span>

                </div>
                }
                <div>

                </div>
                {this.props.isRandom &&
                <div className="number-plate-contents">
                    {this.props.selected.map((select, index) =>
                        <NumberPlateBoxComponent
                            key={index}
                            number={index + 1}
                            selected={select}
                            numberHandleChange={this.props.numberHandleChange}
                        />
                    )}
                </div>
                }
            </div>
        );
    }
}

export default NumberPlateComponent;