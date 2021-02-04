import React, {Component} from "react";
import DhlotteryRequest from "./DhlotteryRequest";
import axios from "axios";
import server_url from "../define/UrlDefine";

class ApiServerRequest extends Component {

    state = {
        lottoWinningInfo: [],
        recommendNum: [],
        isSuccess:false
    }

    componentDidMount() {
        if(this.props.recommend === '0' || this.props.recommend === 0) {
            this.getRecommendRandom()
        // } else if(this.props.recommend === '1' || this.props.recommend === 1) {
        //     this.getRecommendMany()
        }
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

    getRecommendRandom = () => {
        console.log("서비스 연동 개발 중...")
        // axios.get(server_url + "/recommend/random", {param: {selectedNumbers}})
        //     .then(res => {
        //         console.log(res.data)
        //         this.setState({
        //             lottoWinningInfo: res.data,
        //             isSuccess:true
        //         });
        //     })
        //     .catch(res => console.log(res))
    }

    getRecommendMany = () => {
        axios.get(server_url + "/recommend/many")
            .then(res => {
                console.log(res.data)
                this.setState({
                    recommendNum: res.data,
                    isSuccess:true
                });
            })
            .catch(res => console.log(res))
    }


    render() {
        return (
            <div>
                Call Api Data
                <DhlotteryRequest
                    recommend={this.props.recommend}
                    lottoWinningInfo={this.state.lottoWinningInfo}
                    recommendNum={this.state.recommendNum}
                />
            </div>
        );
    }
}

export default ApiServerRequest;