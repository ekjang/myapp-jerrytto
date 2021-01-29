/* eslint-disablt */ //문법 warning console에 뜨지 않도록

import React from "react";
import './App.css';
import JerryTtoTemplate from "./lotto/JerryTtoTemplate";
import bgJerry from "./png/bg_jerry.svg"

function App() {

    return (
        // <div className="bg-style" style={{backgroundImage:`url(${bgJerry})`}}>
            <div className="lotto-random-template" >
                <JerryTtoTemplate />
            </div>
        // </div>
    );
}

export default App;
