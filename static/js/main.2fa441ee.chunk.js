(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(3),o=n.n(s),c=n(1),i=n.n(c),r=n(4),l=n(5),a=n(7),u=n(6),h=n(17),j=n(0),d=function(e){var t=e.goods.map((function(e){return{name:e,id:Object(h.a)()}}));return Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)("li",{children:e.name},e.id)}))})},b=(n(13),function(e){Object(a.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isVisible:!1,isReversed:!1,sortBy:"",lengthLimit:"10"},e.show=function(){e.setState((function(e){return{isVisible:!e.isVisible}}))},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortByGood=function(){e.setState({sortBy:"good"})},e.sortByGoodLength=function(){e.setState({sortBy:"length"})},e.reset=function(){e.setState({isReversed:!1,sortBy:"",lengthLimit:"10"})},e.changeLength=function(t){e.setState({lengthLimit:t.target.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isVisible,n=e.isReversed,s=e.sortBy,o=e.lengthLimit,c=this.props.goods.filter((function(e){return e.length<=+o}));return c.sort((function(e,t){switch(s){case"good":return e.localeCompare(t);case"length":return e.length-t.length;default:return 0}})),n&&c.reverse(),Object(j.jsxs)("div",{className:"GoodsListContainer",children:[Object(j.jsx)("div",{className:"wraperButtonStart",children:!t&&Object(j.jsx)("button",{type:"button",onClick:this.show,children:"Start"})}),Object(j.jsxs)("div",{className:"selectBox",children:[Object(j.jsx)("p",{className:"text",children:"The length of the product name should not exceed:"}),Object(j.jsxs)("select",{className:"select",value:o,onChange:this.changeLength,children:[Object(j.jsx)("option",{value:"1",children:"1"}),Object(j.jsx)("option",{value:"2",children:"2"}),Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"4",children:"4"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"6",children:"6"}),Object(j.jsx)("option",{value:"7",children:"7"}),Object(j.jsx)("option",{value:"8",children:"8"}),Object(j.jsx)("option",{value:"9",children:"9"}),Object(j.jsx)("option",{value:"10",children:"10"})]})]}),Object(j.jsx)("button",{className:"button",type:"button",onClick:this.reverse,children:"Reverse"}),Object(j.jsx)("button",{className:"button",type:"button",onClick:this.sortByGood,children:"Sort alphabetically"}),Object(j.jsx)("button",{className:"button",type:"button",onClick:this.sortByGoodLength,children:"Sort by length"}),Object(j.jsx)("button",{className:"button",type:"button",onClick:this.reset,children:"Reset"}),t&&Object(j.jsx)(d,{goods:c})]})}}]),n}(i.a.Component)),p=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),g=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Goods"}),p.length,Object(j.jsx)(b,{goods:p})]})};o.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2fa441ee.chunk.js.map