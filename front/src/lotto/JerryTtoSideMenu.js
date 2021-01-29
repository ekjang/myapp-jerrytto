import React, {Component} from "react";
import "./JerryTtoStyle.css";
import NumberPlateComponent from "./plate/NumberPlateComponent";
import SelectBoxTemplate from "./recommend/SelectBoxTemplate"
import CrawlerTemplate from "./crawler/CrawlerTemplate"

class JerryTtoSideMenu extends Component {
    render() {
        return (
            <div className="lotto-random-sidemenu">
                <SelectBoxTemplate
                    recommend={this.props.recommend}
                    selectHandelChange={this.props.selectHandelChange}
                />
                <NumberPlateComponent
                    allCheck={this.props.allCheck}
                    selected={this.props.selected}
                    allHandleChange={this.props.allHandleChange}
                    numberHandleChange={this.props.numberHandleChange}
                    handleButtonOnClick={this.props.handleButtonOnClick}
                    optionVal={this.props.optionVal}
                    optionHandleChange={this.props.optionHandleChange}
                    recommend={this.props.recommend}
                    isRandom={this.props.isRandom}
                />
                <CrawlerTemplate />
            </div>
        );
    }
}

export default JerryTtoSideMenu;