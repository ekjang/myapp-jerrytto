import React, {Component} from "react";

class DhlotteryRequest extends Component {

    /**
      * totSell //총 판매금액
      * roundDate //추첨일
      * whichRound //몇 회차
      * winnerMoney: 1등 상금
      * allWinnersMoney 총 1등 당첨자들 합산금액
      * firstNum 번호1
      * secondNum 번호2
      * thirdNum //번호3
      * fourthNum //번호4
      * fifthNum //번호5
      * sixthNum //번호6
      * // winTickets // 1등 당첨자수
      * bonusNum //보너스 번호
      * */
    render() {
        return (
            <div>
                totSell: {this.props.lottoWinningInfo.totSell}
                firstNum: {this.props.lottoWinningInfo.firstNum}

                recommendNum: {this.props.recommendNum}
            </div>
        );
    }
}

export default DhlotteryRequest;