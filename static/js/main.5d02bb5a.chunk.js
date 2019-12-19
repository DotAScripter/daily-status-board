(this["webpackJsonpdaily-status-board-react"]=this["webpackJsonpdaily-status-board-react"]||[]).push([[0],{11:function(t,e,a){t.exports=a(20)},16:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),u=a(8),r=a.n(u),i=a(10),o=a(2),c=a(3),l=a(5),d=a(4),p=a(1),b=a(6),h=(a(16),a(9)),m=a.n(h),f={labels:[],datasets:[{label:"Plus",backgroundColor:"rgb(34, 175, 34, 0.6)",borderColor:"rgb(34, 175, 34)",borderWidth:1,data:[]},{label:"Minus",backgroundColor:"rgb(220, 20, 60, 0.6)",borderColor:"rgb(220, 20, 60)",borderWidth:1,data:[]}]},v={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},tooltips:{bodyFontSize:36,titleFontSize:18},scales:{xAxes:[{stacked:!0,ticks:{fontSize:15}}],yAxes:[{stacked:!0,ticks:{fontSize:25,suggestedMin:0,suggestedMax:8}}]}},y=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(d.a)(e).call(this,t))).canvasRef=s.a.createRef(),a}return Object(b.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.myChart=new m.a(this.canvasRef.current,{type:"bar",options:v,data:f})}},{key:"componentDidUpdate",value:function(){this.myChart.data.labels=this.props.data.map((function(t){return t.label})),this.myChart.data.datasets[0].data=this.props.data.map((function(t){return t.plus})),this.myChart.data.datasets[1].data=this.props.data.map((function(t){return t.minus})),this.myChart.update()}},{key:"render",value:function(){return s.a.createElement("div",{className:"chart-container"},s.a.createElement("canvas",{ref:this.canvasRef}))}}]),e}(s.a.Component),C=(a(19),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(d.a)(e).call(this,t))).updateNumber=a.updateNumber.bind(Object(p.a)(a)),a}return Object(b.a)(e,t),Object(c.a)(e,[{key:"updateNumber",value:function(){this.props.updateNumber()}},{key:"render",value:function(){return s.a.createElement("div",{className:this.props.containerClass},s.a.createElement("input",{type:"number",value:this.props.number,className:this.props.inputClass,readOnly:!0}),s.a.createElement("button",{className:this.props.buttonClass,onClick:this.updateNumber},this.props.buttonText))}}]),e}(s.a.Component));function O(t){return s.a.createElement("button",{className:"submitData",onClick:t.onClick},"Submit")}var j=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(d.a)(e).call(this,t))).state={plus:0,minus:0},a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.updatePlus=a.updatePlus.bind(Object(p.a)(a)),a.updateMinus=a.updateMinus.bind(Object(p.a)(a)),a}return Object(b.a)(e,t),Object(c.a)(e,[{key:"reset",value:function(){this.setState({plus:0,minus:0})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.onSubmit(this.state.plus,this.state.minus),this.reset()}},{key:"updatePlus",value:function(){this.setState({plus:this.state.plus+1})}},{key:"updateMinus",value:function(){this.setState({minus:this.state.minus+1})}},{key:"render",value:function(){return s.a.createElement("div",{className:"chart-controls"},s.a.createElement("div",{className:"input-container"},s.a.createElement(C,{containerClass:"plus-container",inputClass:"plusInput",buttonClass:"plusButton",buttonText:"+",number:this.state.plus,updateNumber:this.updatePlus}),s.a.createElement(C,{containerClass:"minus-container",inputClass:"minusInput",buttonClass:"minusButton",buttonText:"-",number:this.state.minus,updateNumber:this.updateMinus})),s.a.createElement(O,{onClick:this.handleSubmit}))}}]),e}(s.a.Component);function k(t){for(var e=[],a=0;a<t;a++)e.push({label:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[a],plus:Math.round(20+80*Math.random()),minus:-1*Math.round(20+80*Math.random())});return e}function g(){var t=[];return t.push({title:"Categories",data:k(20)}),t}var E=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(d.a)(e).call(this,t))).state={dataArray:k(10)},a.updateChart=a.updateChart.bind(Object(p.a)(a)),a}return Object(b.a)(e,t),Object(c.a)(e,[{key:"updateChart",value:function(t,e){var a={label:"df",plus:t,minus:-1*e};this.state.dataArray.length>=10&&console.log("Dataset data is longer than MAX_DATA_LENGTH (10), removing first datapoint"),this.setState({dataArray:[].concat(Object(i.a)(this.state.dataArray),[a])})}},{key:"componentDidMount",value:function(){this.setState({data:g()})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(y,{data:this.state.dataArray}),s.a.createElement(j,{onSubmit:this.updateChart}))}}]),e}(s.a.Component);r.a.render(s.a.createElement(E,null),document.getElementById("chart-handler"))}},[[11,1,2]]]);
//# sourceMappingURL=main.5d02bb5a.chunk.js.map