"use strict";(self.webpackChunkhw_2=self.webpackChunkhw_2||[]).push([[208],{208:(t,e,s)=>{s.r(e),s.d(e,{default:()=>E});const n="toDoList_container__USb59",o="toDoList_btn__tBMPA",a="toDoList_notasks__BERrb",r="toDoList_ul__luAQ4";var i=s(917);const c="deleteButton_btn__dmIn1";var l=s(579);const d=t=>{let{onClick:e,isPostLoading:s}=t;return(0,l.jsx)("button",{onClick:e,className:c,children:s?(0,l.jsx)(i.A,{width:10,color:"#ffff"}):"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})},u="toDoListItem_items__0EFlt",h="toDoListItem_check__1apUD",p="toDoListItem_uncheck__bdEnS",f="toDoListItem_btn__qmlr2";var g=s(907),m=s(698);const x=()=>{const t=(0,g.useQueryClient)();return(0,g.useMutation)((t=>(0,m.al)(t)),{onSuccess:(e,s)=>{t.setQueryData("todos",(t=>t.filter((t=>t.id!==s))))}})};var j=s(43),y=s(475);const _=t=>{let{task:e,refetch:s,isPostLoading:n,setIsPostLoading:o}=t;const{id:a,title:r,description:c,checked:g,creationDate:m}=e,_=x(),[b,v]=(0,j.useState)(null);return(0,l.jsxs)("li",{className:u,children:[(0,l.jsxs)("details",{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)("span",{children:"\u041d\u0430\u0437\u0432\u0430: "}),r]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("span",{children:"\u041e\u043f\u0438\u0441: "}),c]}),(0,l.jsx)("p",{className:g?h:p,children:g?"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u0430":"\u041d\u0435 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0430"}),(0,l.jsxs)("p",{children:[(0,l.jsx)("span",{children:"\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f: "}),m]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(y.N_,{to:"/todo-list/".concat(a),className:f,children:n?(0,l.jsx)(i.A,{width:10,color:"#ffff"}):"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),b&&(0,l.jsx)("p",{style:{color:"red"},children:b}),(0,l.jsx)(d,{isPostLoading:n,onClick:()=>(async t=>{try{o(!0),await _.mutateAsync(t),await s(),o(!1)}catch(e){o(!1),v("Error: ".concat(e.message))}})(a)})]})]},a)};var b=s(263);const v=(t=>{const e=t.length;return s=>{let n="";for(let o=0;o<s;o++){const s=Math.floor(Math.random()*e);n+=t[s]}return n}})("abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ-"),k=new Date,L=String(k.getDate()).padStart(2,"0")+"."+String(k.getMonth()+1).padStart(2,"0")+"."+k.getFullYear(),P="addToDoInfo_mainInput__ihoqX",D="addToDoInfo_inputs__ZtNuS",w="addToDoInfo_check__fn59q",I="addButton_btn__QWAQl",S=t=>{let{isPostLoading:e,addToDo:s}=t;return(0,l.jsx)("button",{disabled:e,onClick:s,className:I,children:e?(0,l.jsx)(i.A,{width:10,color:"#ffff"}):"\u0414\u043e\u0434\u0430\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"})},N=t=>{const[e,s]=(0,j.useState)(""),[n,o]=(0,j.useState)(""),[a,r]=(0,j.useState)(!1),i={id:v(10),title:e,description:n,checked:a,creationDate:L},{mutateAsync:c}=(0,g.useMutation)({mutationFn:t=>(0,m.u$)(t)}),[d,u]=(0,j.useState)(null),h=(0,j.useRef)(null),p=async()=>{try{t.setIsPostLoading(!0),await c(i),s(""),o(""),await t.refetch(),t.setIsPostLoading(!1)}catch(e){t.setIsPostLoading(!1),u("Error: ".concat(e.message))}},f=t=>{"Enter"===t.key&&p()};return(0,l.jsxs)("div",{className:D,children:[(0,l.jsx)("input",{type:"text",value:e,onChange:t=>s(t.target.value),className:P,onKeyPress:f}),(0,l.jsx)("input",{type:"text",value:n,onChange:t=>o(t.target.value),className:P,onKeyPress:f}),(0,l.jsxs)("div",{className:w,children:[(0,l.jsx)("p",{children:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e: "}),(0,l.jsx)("input",{type:"checkbox",ref:h,name:"checkbox",id:"checkbox",checked:a,onChange:t=>{r(t.target.checked)}})]}),d&&(0,l.jsx)("p",{style:{color:"red"},children:d}),(0,l.jsx)(S,{isPostLoading:t.isPostLoading,addToDo:p})]})};var O=s(216);const E=()=>{const{data:t,isFetching:e,error:s,refetch:i}=(0,g.useQuery)({queryKey:["todos"],queryFn:m.rk}),[c,d]=(0,j.useState)(!1),[u,h]=(0,j.useState)(!1),p=(0,O.Zp)();(0,j.useEffect)((()=>{!e&&t&&0===t.length&&h(!1)}),[e,t]);return s&&p("/error-page",{replace:!0}),(0,l.jsxs)("div",{className:n,children:[(0,l.jsx)("h1",{className:"main-header",children:"ToDo List"}),t&&t.length>0?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N,{refetch:i,isPostLoading:c,setIsPostLoading:d,error:s}),(0,l.jsx)("ul",{className:r,children:e?(0,l.jsx)(b.A,{style:{position:"absolute",top:"50%",left:"50%"},color:"#DEB887",loading:e}):t.map(((t,e)=>(0,l.jsx)(_,{task:t,error:s,refetch:i,isPostLoading:c,setIsPostLoading:d},e)))})]}):u?(0,l.jsx)(N,{refetch:i,isPostLoading:c,setIsPostLoading:d,error:s}):(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("p",{children:"\u041d\u0430\u0440\u0430\u0437\u0456 \u0443 \u0432\u0430\u0441 \u0449\u0435 \u043d\u0435\u043c\u0430\u0454 \u0437\u0430\u0432\u0434\u0430\u043d\u044c"}),(0,l.jsx)("button",{onClick:()=>{h(!0)},className:o,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"})]})]})}},917:(t,e,s)=>{s.d(e,{A:()=>l});var n=s(43),o=s(524),a=s(628),r=function(){return r=Object.assign||function(t){for(var e,s=1,n=arguments.length;s<n;s++)for(var o in e=arguments[s])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},i=function(t,e){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(s[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(s[n[o]]=t[n[o]])}return s},c=(0,a.J)("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");const l=function(t){var e=t.loading,s=void 0===e||e,a=t.color,l=void 0===a?"#000000":a,d=t.speedMultiplier,u=void 0===d?1:d,h=t.cssOverride,p=void 0===h?{}:h,f=t.size,g=void 0===f?15:f,m=t.margin,x=void 0===m?2:m,j=i(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),y=r({display:"inherit"},p),_=function(t){return{display:"inline-block",backgroundColor:l,width:(0,o.p)(g),height:(0,o.p)(g),margin:(0,o.p)(x),borderRadius:"100%",animation:"".concat(c," ").concat(.7/u,"s ").concat(t%2?"0s":"".concat(.35/u,"s")," infinite linear"),animationFillMode:"both"}};return s?n.createElement("span",r({style:y},j),n.createElement("span",{style:_(1)}),n.createElement("span",{style:_(2)}),n.createElement("span",{style:_(3)})):null}}}]);
//# sourceMappingURL=208.5e7dec8d.chunk.js.map