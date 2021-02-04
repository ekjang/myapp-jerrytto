import React, { Component } from 'react';
import JerryTtoHeader from "./JerryTtoHeader";
import JerryTtoSideMenu from "./JerryTtoSideMenu";
import JerryTtoContents from "./JerryTtoContents";
import JerryTtoTopMenu from "./JerryTtoTopMenu";
import "./JerryTtoStyle.css";
import axios from "axios";
import server_url from "./define/UrlDefine";

class JerryTtoTemplate extends Component {

    state = {
        allCheck : {}, //ALL 체크 여부
        optionVal : {}, //숫자 넣어(Include)/빼(Exclude)
        selected : [], //랜덤 번호일 경우 선택한 번호 순서대로 체크 여부 배열
        lottoNumbers : [], //"만들어" 결과 번호 배열
        recommend: '0', //번호 생성 알고리즘 선택 (0: 랜덤 번호/1: 많이 당첨/2: 많이 당첨 안된/3: 추천)
        isRandom: true //랜덤 번호 체크박스 여부
    }

    componentDidMount() {
        const {selected, allCheck, optionVal} = this.state;
        for(let i=1; i<46; i++) {
            selected.push(false);
        }
        this.allCheck = true //기본 ALL 체크
        this.optionVal = "Include" //기본 숫자 Include
        this.allHandleChange(true);
        this.setState({allCheck: this.allCheck, optionVal: this.optionVal, selected});
    }

    //번호 생성 알고리즘 선택 시
    selectHandelChange = (e) => {
        console.log(e)
        console.log(e.target.value)
        if(e.target.value === '0' || e.target.value === 0) {
            this.allHandleChange(true);
            this.setState({recommend: e.target.value, isRandom: true});
        } else {
            alert("서비스 준비중입니다.")
            this.allHandleChange(false)
            this.setState({recommend: e.target.value, isRandom: false})
        }
    }

    //전체 체크
    allHandleChange = (checked) => {
        const {selected} = this.state;
        for(let i=1; i<46; i++) {
            this.numberHandleChange(checked, i)
        }
        this.setState({allCheck: checked, selected: selected})
    }

    //숫자 포함/제외 옵션 선택 클릭
    optionHandleChange = (value) => {
        this.optionVal = value
        this.setState({optionVal: value})
    }

    //"지워"" 버튼 클릭
    clearButtonOnClick = () => {
        const {lottoNumbers} = this.state
        if(lottoNumbers.length > 0) {
            while (lottoNumbers.length > 0) {
                lottoNumbers.pop()
            }
        }
        this.setState({lottoNumbers})
    }

    //숫자 선택 이벤트 발생
    numberHandleChange = (checked, number) => {
        const {allCheck, selected} = this.state;
        let checkFalse = allCheck;

        selected[number-1] = checked;

        let trueCount = 0;
        selected.forEach((s, i) => {
            if(s) {
                trueCount++;
            }
        })
        if(trueCount >= 45) {
            checkFalse = true
        } else {
            if(checked === false) {
                checkFalse = false
            }
        }
        this.setState({allCheck: checkFalse, selected})
    ;}

    //"만들어" 버튼 클릭
    handleButtonOnClick = () => {
        const {recommend} = this.state
        console.log(recommend)
        if(recommend === '0' || recommend === 0) {
            this.recommend0()
        } else if(recommend === '1' || recommend === 1){
            this.recommend1()
        }
    }

    recommend1 = () => {
        axios.get(server_url + "/recommend/many")
            .then(res => {
                console.log(res.data)
                this.setState({
                    lottoNumbers: res.data,
                    isSuccess:true
                });
            })
            .catch(res => console.log(res))
    }

    recommend0 = () => {
        const {selected, lottoNumbers, optionVal} = this.state
        const numbers = [];
        let selectedNumberCount = 0;

        selected.forEach((s, i) => {
            if(optionVal === "Include") {
                if(s) {
                    selectedNumberCount++;
                    numbers.push(i+1)
                }
            } else if(optionVal === "Exclude") {
                if(!s) {
                    selectedNumberCount++;
                    numbers.push(i+1)
                }
            }
        })

        ///////////////////////////////////////////
        //선택 숫자 포함일 때
        if(optionVal === "Include") {
            if (numbers.length < 7) {
                alert("7개 이상(보너스 번호 포함)의 번호를 선택해야 합니다.")
                return;
            } else {
                alert("번호를 5개 생성합니다.")
                this.selectBundle(0, numbers)
            }
        ///////////////////////////////////////////
        //선택 숫자 제외일 때
        } else if(optionVal === "Exclude") {
            if (numbers.length < 7) {
                alert("39개 이상(보너스 번호 포함)의 번호를 제외할 수 없습니다.")
            } else {
                alert("번호를 5개 생성합니다.")
                this.selectBundle(0, numbers)
            }
        }
    }

    //몇개 보여줄지.?
    selectBundle = (bundle, numbers) => {
        const {lottoNumbers} = this.state
        for (let i = 0; i < (bundle + 1) * 5; i++) {
            const lotto = this.selectLotto([], numbers);
            lottoNumbers.push(lotto);
            this.setState({lottoNumbers});
        }
    }

    //선택한 번호를 기준으로 생성하는 랜덤 알고리즘
    selectLotto = (lottoNumber, numbers) => {
        if(lottoNumber.length === 7) {
            const temp = lottoNumber.slice(0, 6);
            temp.sort((a,b)=>a-b);
            temp.push(lottoNumber[6]);
            return temp;
        }
        let n = numbers[Math.floor(Math.random() * numbers.length)];
        if(lottoNumber.indexOf(n) < 0) {
            lottoNumber.push(n);
        }
        return this.selectLotto(lottoNumber, numbers);
    }

    render() {
        return (
            <div className="lotto-random-template">
                <JerryTtoHeader />
                {/*<JerryTtoTopMenu />*/}
                <div className="lotto-random-main">
                    <JerryTtoSideMenu
                        allCheck={this.state.allCheck}
                        selected={this.state.selected}
                        allHandleChange={this.allHandleChange}
                        numberHandleChange={this.numberHandleChange}
                        handleButtonOnClick={this.handleButtonOnClick}
                        optionVal={this.optionVal}
                        optionHandleChange={this.optionHandleChange}
                        recommend={this.state.recommend}
                        isRandom={this.state.isRandom}
                        selectHandelChange={this.selectHandelChange}
                    />
                    <JerryTtoContents
                        lottoNumbers={this.state.lottoNumbers}
                        clearButtonOnClick={this.clearButtonOnClick}
                    />
                </div>
            </div>
        );
    }

}

export default JerryTtoTemplate;