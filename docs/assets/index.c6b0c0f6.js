import{d as E,r as w,c as C,N as q,o as g,a as b,b as n,w as s,l as S,_ as A,e,t as O,f as x,p as L,g as R,h as T,i as I,j as N,u as P,k as V,m as y,n as W,q as j,s as H,v as z,x as G,y as K,z as J,A as M}from"./vendor.63dd2e6a.js";const Q=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerpolicy&&(u.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?u.credentials="include":l.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(l){if(l.ep)return;l.ep=!0;const u=t(l);fetch(l.href,u)}};Q();const Y="modulepreload",D={},Z="/systemctl-quick/",$=function(d,t){return!t||t.length===0?d():Promise.all(t.map(a=>{if(a=`${Z}${a}`,a in D)return;D[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":Y,l||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),l)return new Promise((h,k)=>{i.addEventListener("load",h),i.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>d())};var ee=(p,d)=>{const t=p.__vccOpts||p;for(const[a,l]of d)t[a]=l;return t};const B=p=>(L("data-v-675fd3b2"),p=p(),R(),p),te={"m-auto":"","w-700px":""},le=x(" Unit "),ne=x(" Services "),oe=B(()=>e("div",{"inline-flex":"","items-center":""},[x(" Type "),e("a",{href:"https://www.freedesktop.org/software/systemd/man/systemd.service.html#Type=",target:"_blank"},[e("div",{"i-carbon:help-filled":""})])],-1)),re=B(()=>e("table",{"w-full":"",relative:"",top:"-5",class:"table",summary:"Exit causes and the effect of the Restart= settings"},[e("thead",null,[e("tr",null,[e("th",null,"Restart settings/Exit causes"),e("th",null,"no"),e("th",null,"always"),e("th",null,"on-success"),e("th",null,"on-failure"),e("th",null,"on-abnormal"),e("th",null,"on-abort"),e("th",null,"on-watchdog")])]),e("tbody",null,[e("tr",null,[e("td",null,"Clean exit code or signal"),e("td"),e("td",null,"X"),e("td",null,"X"),e("td"),e("td"),e("td"),e("td")]),e("tr",null,[e("td",null,"Unclean exit code"),e("td"),e("td",null,"X"),e("td"),e("td",null,"X"),e("td"),e("td"),e("td")]),e("tr",null,[e("td",null,"Unclean signal"),e("td"),e("td",null,"X"),e("td"),e("td",null,"X"),e("td",null,"X"),e("td",null,"X"),e("td")]),e("tr",null,[e("td",null,"Timeout"),e("td"),e("td",null,"X"),e("td"),e("td",null,"X"),e("td",null,"X"),e("td"),e("td")]),e("tr",null,[e("td",null,"Watchdog"),e("td"),e("td",null,"X"),e("td"),e("td",null,"X"),e("td",null,"X"),e("td"),e("td",null,"X")])])],-1)),ae=x(" Install "),se={"mt-2":""},ue=E({setup(p){const d=w(null),t=w({unit:{description:"",after:["network.target"]},services:{type:"simple",workingDirectory:"",execStart:"",execStop:"",restart:"on-failure",restartSec:""},install:{wantedBy:["multi-user.target"],requiredBy:[]}}),a={unit:{description:{required:!0,trigger:"input"}},services:{type:{required:!0,trigger:"input"}}},l=w([{label:"network.target",value:"network.target"},{label:"multi-user.target",value:"multi-user.target"}]),u=C(()=>i(t.value));function i(_){let o="";for(const[m,f]of Object.entries(_)){o+=`[${h(m)}]
`;for(const[c,v]of Object.entries(f))S.exports.isArray(v)&&!v.length||!S.exports.isArray(v)&&!v||(o+=`${h(c)}=${k(v)}
`);o+=`
`}return o}function h(_){return _[0].toUpperCase()+_.slice(1)}function k(_){return S.exports.isArray(_)?_.join(" "):_}return(_,o)=>{const m=q,f=T,c=I,v=N,X=A;return g(),b("div",te,[n(X,{ref_key:"form",ref:d,"label-width":120,"label-placement":"left",model:t.value,rules:a},{default:s(()=>[n(m,{"text-center":""},{default:s(()=>[le]),_:1}),n(c,{label:"Description",path:"unit.description"},{default:s(()=>[n(f,{value:t.value.unit.description,"onUpdate:value":o[0]||(o[0]=r=>t.value.unit.description=r),placeholder:"\u8F93\u5165\u63CF\u8FF0"},null,8,["value"])]),_:1}),n(m,{"text-center":""},{default:s(()=>[ne]),_:1}),n(c,{path:"services.type"},{label:s(()=>[oe]),default:s(()=>[n(v,{value:t.value.services.type,"onUpdate:value":o[1]||(o[1]=r=>t.value.services.type=r),options:[{label:"simple",value:"simple"},{label:"exec",value:"exec"},{label:"forking",value:"forking"},{label:"oneshot",value:"oneshot"},{label:"dbus",value:"dbus"},{label:"notify",value:"notify"},{label:"idle",value:"idle"}]},null,8,["value"])]),_:1}),n(c,{label:"After",path:"unit.after"},{default:s(()=>[n(v,{value:t.value.unit.after,"onUpdate:value":o[2]||(o[2]=r=>t.value.unit.after=r),filterable:"",multiple:"",tag:"",options:l.value},null,8,["value","options"])]),_:1}),n(c,{label:"WorkingDirectory",path:"services.workingDirectory"},{default:s(()=>[n(f,{value:t.value.services.workingDirectory,"onUpdate:value":o[3]||(o[3]=r=>t.value.services.workingDirectory=r),placeholder:"\u8F93\u5165\u5DE5\u4F5C\u76EE\u5F55"},null,8,["value"])]),_:1}),n(c,{label:"ExecStart",path:"services.execStart"},{default:s(()=>[n(f,{value:t.value.services.execStart,"onUpdate:value":o[4]||(o[4]=r=>t.value.services.execStart=r),placeholder:"\u8F93\u5165\u542F\u52A8\u547D\u4EE4"},null,8,["value"])]),_:1}),n(c,{label:"ExecStop",path:"services.execStop"},{default:s(()=>[n(f,{value:t.value.services.execStop,"onUpdate:value":o[5]||(o[5]=r=>t.value.services.execStop=r),placeholder:"\u8F93\u5165\u505C\u6B62\u547D\u4EE4"},null,8,["value"])]),_:1}),n(c,{label:"Restart",path:"services.restart"},{default:s(()=>[n(v,{value:t.value.services.restart,"onUpdate:value":o[6]||(o[6]=r=>t.value.services.restart=r),options:[{label:"no",value:"no"},{label:"always",value:"always"},{label:"on-success",value:"on-success"},{label:"on-failure",value:"on-failure"},{label:"on-abnormal",value:"on-abnormal"},{label:"on-abort",value:"on-abort"},{label:"on-watchdog",value:"on-watchdog"}]},null,8,["value"])]),_:1}),re,n(c,{label:"RestartSec",path:"services.restartSec"},{default:s(()=>[n(f,{value:t.value.services.restartSec,"onUpdate:value":o[7]||(o[7]=r=>t.value.services.restartSec=r),placeholder:"\u8F93\u5165\u91CD\u542F\u65F6\u95F4\u95F4\u9694\uFF0C\u4E0D\u586B\u65F6\u9ED8\u8BA4\u4E3A100ms"},null,8,["value"])]),_:1}),n(m,{"text-center":""},{default:s(()=>[ae]),_:1}),n(c,{label:"WantedBy",path:"install.wantedBy"},{default:s(()=>[n(v,{value:t.value.install.wantedBy,"onUpdate:value":o[8]||(o[8]=r=>t.value.install.wantedBy=r),filterable:"",multiple:"",tag:"",options:l.value},null,8,["value","options"])]),_:1}),n(c,{label:"RequiredBy",path:"install.requiredBy"},{default:s(()=>[n(v,{value:t.value.install.requiredBy,"onUpdate:value":o[9]||(o[9]=r=>t.value.install.requiredBy=r),filterable:"",multiple:"",tag:"",options:l.value},null,8,["value","options"])]),_:1}),n(c,{label:"Preview"},{default:s(()=>[e("pre",se,O(u.value),1)]),_:1})]),_:1},8,["model"])])}}});var ie=ee(ue,[["__scopeId","data-v-675fd3b2"]]);const ce=[{name:"index",path:"/",component:ie,props:!0},{name:"all",path:"/:all(.*)*",component:()=>$(()=>import("./_...all_.52437a5d.js"),["assets/_...all_.52437a5d.js","assets/_...all_.5b579b93.css","assets/vendor.63dd2e6a.js"]),props:!0},{name:"hi-name",path:"/hi/:name",component:()=>$(()=>import("./_name_.6dc077ca.js"),["assets/_name_.6dc077ca.js","assets/_name_.eddacc31.css","assets/vendor.63dd2e6a.js"]),props:!0}],F=P(),de=V(F),pe={"text-xl":"","mt-6":"","inline-flex":"","gap-2":""},ve={key:0,"i-carbon-moon":""},_e={key:1,"i-carbon-sun":""},fe=e("a",{class:"icon-btn","i-carbon-logo-github":"",rel:"noreferrer",href:"https://github.com/Weilence/systemctl-quick",target:"_blank",title:"GitHub"},null,-1),me=E({setup(p){return(d,t)=>(g(),b("nav",pe,[e("button",{class:"icon-btn !outline-none",onClick:t[0]||(t[0]=a=>y(de)())},[y(F)?(g(),b("div",ve)):(g(),b("div",_e))]),fe]))}}),ge={"font-sans":"",p:"x-4 y-10"},he={text:"center gray-700 dark:gray-200"},be=E({setup(p){return(d,t)=>{const a=H("router-view"),l=me,u=G,i=z;return g(),W(i,{theme:y(F)?y(j):void 0},{default:s(()=>[n(u,null,{default:s(()=>[e("main",ge,[n(a),e("div",he,[n(l)])])]),_:1})]),_:1},8,["theme"])}}});const U=K(be),ye=J({history:M("/systemctl-quick/"),routes:ce});U.use(ye);U.mount("#app");export{ee as _};
