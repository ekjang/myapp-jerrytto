(this.webpackJsonpjerry=this.webpackJsonpjerry||[]).push([[0],{10:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),c=n.n(o),l=n(19),r=n.n(l),s=(n(25),n(26),n(2)),i=n(3),h=n(5),u=n(4),d=(n(8),n.p+"static/media/main_jerry.e7dfcf1f.svg"),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"lotto-random-header",children:[Object(a.jsx)("b",{children:"Hello JERRYtto"}),Object(a.jsx)("span",{children:Object(a.jsx)("img",{className:"image-style",src:d})})]})}}]),n}(o.Component),j=(n(10),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleChange=function(t){var n=t.target.checked;e.props.numberHandleChange(n,e.props.number)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"number-plate-box-contents",children:Object(a.jsxs)("div",{className:"number-plate-box",children:[Object(a.jsx)("input",{type:"checkbox",checked:this.props.selected,onChange:this.handleChange}),Object(a.jsx)("span",{children:this.props.number})]})})}}]),n}(o.Component)),b=(n(27),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).optionHandleChange=function(t){e.props.optionHandleChange(t.target.value)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"radio-box-style",children:[Object(a.jsx)("b",{children:"\uc22b\uc790"}),Object(a.jsxs)("span",{children:[Object(a.jsx)("input",{type:"radio",id:"option1",name:"Include",value:"Include",checked:"Include"===this.props.optionVal,onChange:this.optionHandleChange}),"\ub123\uc5b4",Object(a.jsx)("input",{type:"radio",id:"option2",name:"Exclude",value:"Exclude",checked:"Exclude"===this.props.optionVal,onChange:this.optionHandleChange}),"\ube7c"]})]})}}]),n}(o.Component)),m=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).allHandleChange=function(t){var n=t.target.checked;e.props.allHandleChange(n)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[this.props.isRandom&&Object(a.jsx)("div",{className:"number-plate-all-box",children:Object(a.jsx)(b,{optionVal:this.props.optionVal,optionHandleChange:this.props.optionHandleChange})}),Object(a.jsx)("button",{className:"number-button",onClick:this.props.handleButtonOnClick,children:"\ub9cc\ub4e4\uc5b4"}),this.props.isRandom&&Object(a.jsxs)("div",{className:"number-plate-all-box",children:[Object(a.jsx)("input",{type:"checkbox",checked:this.props.allCheck,onChange:this.allHandleChange}),Object(a.jsx)("span",{children:"ALL"})]}),Object(a.jsx)("div",{}),this.props.isRandom&&Object(a.jsx)("div",{className:"number-plate-contents",children:this.props.selected.map((function(t,n){return Object(a.jsx)(j,{number:n+1,selected:t,numberHandleChange:e.props.numberHandleChange},n)}))})]})}}]),n}(o.Component),O=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).selectHandleChange=function(t){e.props.selectHandelChange(t)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"lotto-select-style",children:Object(a.jsxs)("select",{value:this.props.recommend,onChange:this.selectHandleChange,children:[Object(a.jsx)("option",{value:0,children:"\ub79c\ub364 \ubc88\ud638"}),Object(a.jsx)("option",{value:1,children:"\ub9ce\uc774 \ub2f9\ucca8\ub41c \ubc88\ud638"}),Object(a.jsx)("option",{value:2,children:"\ub9ce\uc774 \ub2f9\ucca8\ub418\uc9c0 \uc54a\uc740 \ubc88\ud638"}),Object(a.jsx)("option",{value:3,children:"\ucd94\ucc9c \ubc88\ud638"})]})})}}]),n}(o.Component),f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:["totSell: ",this.props.lottoWinningInfo.totSell,"firstNum: ",this.props.lottoWinningInfo.firstNum,"recommendNum: ",this.props.recommendNum]})}}]),n}(o.Component),v=n(7),C=n.n(v),g="https://ekjang.github.io/myapp-jerrytto",x=(o.Component,function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"lotto-random-sidemenu",children:[Object(a.jsx)(O,{recommend:this.props.recommend,selectHandelChange:this.props.selectHandelChange}),Object(a.jsx)(m,{allCheck:this.props.allCheck,selected:this.props.selected,allHandleChange:this.props.allHandleChange,numberHandleChange:this.props.numberHandleChange,handleButtonOnClick:this.props.handleButtonOnClick,optionVal:this.props.optionVal,optionHandleChange:this.props.optionHandleChange,recommend:this.props.recommend,isRandom:this.props.isRandom})]})}}]),n}(o.Component)),k=(n(46),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={numbers:[1,2,3,4,5,6],b_number:7},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.lottoNumber.slice(0,6),t=this.props.lottoNumber[6];return Object(a.jsx)("div",{className:"lotto-contents",children:Object(a.jsxs)("div",{className:"lotto-box",children:[e.map((function(e){return Object(a.jsx)("div",{className:"lotto-box-number",children:e},e)})),Object(a.jsx)("div",{className:"lotto-box-plus",children:"+"}),Object(a.jsx)("div",{className:"lotto-box-number",children:t})]})})}}]),n}(o.Component)),N=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.lottoNumbers;return Object(a.jsxs)("div",{className:"lotto-random-contents",children:[Object(a.jsx)("div",{className:"blank-style",children:Object(a.jsx)("button",{className:"clear-button",onClick:this.props.clearButtonOnClick,children:"\uc9c0\uc6cc"})}),Object(a.jsx)("div",{children:e.map((function(e,t){return Object(a.jsx)(k,{lottoNumber:e},t)}))})]})}}]),n}(o.Component),y=(o.Component,function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={allCheck:{},optionVal:{},selected:[],lottoNumbers:[],recommend:"0",isRandom:!0,drwNo:"",drwNoDate:""},e.selectHandelChange=function(t){"0"===t.target.value||0===t.target.value?(e.allHandleChange(!0),e.setState({recommend:t.target.value,isRandom:!0})):(e.allHandleChange(!1),e.setState({recommend:t.target.value,isRandom:!1}),"1"===t.target.value||1===t.target.value?alert("\uc11c\ube44\uc2a4 \ud14c\uc2a4\ud2b8 \uc911\uc785\ub2c8\ub2e4."):(alert("\uae30\ub2e4\ub824\uc694\ud83d\ude05"),e.allHandleChange(!0),e.setState({recommend:"0",isRandom:!0})))},e.allHandleChange=function(t){for(var n=e.state.selected,a=1;a<46;a++)e.numberHandleChange(t,a);e.setState({allCheck:t,selected:n})},e.optionHandleChange=function(t){e.optionVal=t,e.setState({optionVal:t})},e.clearButtonOnClick=function(){var t=e.state.lottoNumbers;if(t.length>0)for(;t.length>0;)t.pop();e.setState({lottoNumbers:t})},e.numberHandleChange=function(t,n){var a=e.state,o=a.allCheck,c=a.selected,l=o;c[n-1]=t;var r=0;c.forEach((function(e,t){e&&r++})),r>=45?l=!0:!1===t&&(l=!1),e.setState({allCheck:l,selected:c})},e.handleButtonOnClick=function(){var t=e.state.recommend;"0"===t||0===t?e.recommend0():"1"!==t&&1!==t||(alert("\ubc88\ud638\ub97c 5\uac1c \uc0dd\uc131\ud569\ub2c8\ub2e4."),e.recommend1())},e.recommend1=function(){var t=e.state.lottoNumbers;C.a.get(g+"/recommend/many").then((function(n){n.data.lottoNumbers.map((function(e){return t.push(e)})),e.setState({lottoNumbers:t})})).catch((function(e){return console.log(e)}))},e.recommend0=function(){var t=e.state,n=t.selected,a=t.optionVal,o=[];if(n.forEach((function(e,t){"Include"===a?e&&(o.push(t+1)):"Exclude"===a&&(e||(o.push(t+1)))})),"Include"===a){if(o.length<7)return void alert("7\uac1c \uc774\uc0c1(\ubcf4\ub108\uc2a4 \ubc88\ud638 \ud3ec\ud568)\uc758 \ubc88\ud638\ub97c \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.");alert("\ubc88\ud638\ub97c 5\uac1c \uc0dd\uc131\ud569\ub2c8\ub2e4."),e.selectBundle(0,o)}else"Exclude"===a&&(o.length<7?alert("39\uac1c \uc774\uc0c1(\ubcf4\ub108\uc2a4 \ubc88\ud638 \ud3ec\ud568)\uc758 \ubc88\ud638\ub97c \uc81c\uc678\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."):(alert("\ubc88\ud638\ub97c 5\uac1c \uc0dd\uc131\ud569\ub2c8\ub2e4."),e.selectBundle(0,o)))},e.selectBundle=function(t,n){for(var a=e.state.lottoNumbers,o=0;o<5*(t+1);o++){var c=e.selectLotto([],n);a.push(c),e.setState({lottoNumbers:a})}},e.selectLotto=function(t,n){if(7===t.length){var a=t.slice(0,6);return a.sort((function(e,t){return e-t})),a.push(t[6]),a}var o=n[Math.floor(Math.random()*n.length)];return t.indexOf(o)<0&&t.push(o),e.selectLotto(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){for(var e=this,t=this.state,n=t.selected,a=(t.allCheck,t.optionVal,1);a<46;a++)n.push(!1);this.allCheck=!0,this.optionVal="Include",this.allHandleChange(!0),this.setState({allCheck:this.allCheck,optionVal:this.optionVal,selected:n}),alert("jerryttotemplate !"),fetch(g+"/getLotto").then((function(e){return e.json()})).then((function(t){return e.setState({drwNo:t.drwNo,drwNoDate:t.drwNoDate})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"lotto-random-template",children:[Object(a.jsx)(p,{}),Object(a.jsxs)("div",{children:[this.state.drwNo,",",this.state.drwNoDate]}),Object(a.jsxs)("div",{className:"lotto-random-main",children:[Object(a.jsx)(x,{allCheck:this.state.allCheck,selected:this.state.selected,allHandleChange:this.allHandleChange,numberHandleChange:this.numberHandleChange,handleButtonOnClick:this.handleButtonOnClick,optionVal:this.optionVal,optionHandleChange:this.optionHandleChange,recommend:this.state.recommend,isRandom:this.state.isRandom,selectHandelChange:this.selectHandelChange}),Object(a.jsx)(N,{lottoNumbers:this.state.lottoNumbers,clearButtonOnClick:this.clearButtonOnClick})]})]})}}]),n}(o.Component));n.p;var H=function(){return Object(a.jsx)("div",{className:"lotto-random-template",children:Object(a.jsx)(y,{})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),o(e),c(e),l(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(H,{})}),document.getElementById("root")),w()},8:function(e,t,n){}},[[47,1,2]]]);
//# sourceMappingURL=main.9abd5136.chunk.js.map