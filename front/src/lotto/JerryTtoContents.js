import React, {Component} from "react";
import "./JerryTtoStyle.css";
import LottoBoxComponent from "./numberBox/LottoBoxComponent";

class JerryTtoContents extends Component {
    render() {
        const lottoNumbers = this.props.lottoNumbers
        return (
            <div className="lotto-random-contents">
                <div className="blank-style">
                    <button className="clear-button" onClick={this.props.clearButtonOnClick}>지워</button>
                </div>
                <div>
                    {lottoNumbers.map((lottoNumber, i) =>
                        <LottoBoxComponent
                            key={i}
                            lottoNumber={lottoNumber}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default JerryTtoContents;