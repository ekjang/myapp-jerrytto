import React, {Component} from "react";

class SelectBoxTemplate extends Component {

    selectHandleChange = (e) => {
        this.props.selectHandelChange(e)
    };

    render() {
        return (
            <div className="lotto-select-style">
                랜덤 추천1 추천2 추천3
                <select value={this.props.recommend} onChange={this.selectHandleChange}>
                    <option value={0}>랜덤 번호</option>
                    <option value={1}>많이 당첨된 번호</option>
                    <option value={2}>많이 당첨되지 않은 번호</option>
                    <option value={3}>추천 번호</option>
                </select>
            </div>
        );
    }
}

export default SelectBoxTemplate;