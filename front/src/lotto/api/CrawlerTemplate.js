import React, {Component} from "react";
import axios from "axios";
import server_url from "../define/UrlDefine"
import DhlotteryRequest from "./DhlotteryRequest"

class CrawlerTemplate extends Component {
    state = {
        lottoWinningInfo: [],
        isSuccess:false
    }

    componentDidMount() {
        this.getWinning()
    }

    getWinning = () => {
        axios.get(server_url + "/lotto/win-num-by-round", {params: {roundNo: 921}})
            .then(res => {
                console.log(res.data)
                this.setState({
                    lottoWinningInfo: res.data,
                    isSuccess:true
                });
            })
            .catch(res => console.log(res))
    }

    getWinning = () => {
        axios.get(server_url + "/lotto/win-num-by-round", {params: {roundNo: 921}})
            .then(res => {
                console.log(res.data)
                this.setState({
                    lottoWinningInfo: res.data,
                    isSuccess:true
                });
            })
            .catch(res => console.log(res))
    }


    render() {
        return (
            <div>
                Template Component
                <DhlotteryRequest
                    lottoWinningInfo={this.state.lottoWinningInfo}
                />
            </div>
        );
    }
}

export default CrawlerTemplate;