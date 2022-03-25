import{u as w,a as D,d as k,o as u,c as f,b as r,e as a,f as N,g as R,w as l,h as c,n as g,i as S,r as y,_ as A,j as T,k as V,l as I,m as q,p as B,q as W,s as F,t as H}from"./vendor.b549ce69.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};j();const z="modulepreload",v={},G="/",_=function(s,i){return!i||i.length===0?s():Promise.all(i.map(n=>{if(n=`${G}${n}`,n in v)return;v[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":z,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((m,d)=>{o.addEventListener("load",m),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>s())};var b={};const x={};typeof b=="function"&&b(x);const K=[{name:"index",path:"/",component:x,props:!0,redirect:"/systemctl"},{name:"Nginx",path:"/nginx",component:()=>_(()=>import("./Nginx.ad45e34f.js"),["assets/Nginx.ad45e34f.js","assets/Nginx.e87dfd89.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.b549ce69.js"]),props:!0},{name:"Systemctl",path:"/systemctl",component:()=>_(()=>import("./Systemctl.1f108c4c.js"),["assets/Systemctl.1f108c4c.js","assets/Systemctl.38661e75.css","assets/vendor.b549ce69.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>_(()=>import("./_...all_.16fc2fda.js"),["assets/_...all_.16fc2fda.js","assets/_...all_.5b579b93.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.b549ce69.js"]),props:!0},{name:"hi-name",path:"/hi/:name",component:()=>_(()=>import("./_name_.382c46d0.js"),["assets/_name_.382c46d0.js","assets/_name_.b56d8a66.css","assets/vendor.b549ce69.js"]),props:!0}],h=w(),U=D(h),J={"text-xl":"","my-6":"","inline-flex":"","gap-2":""},M={key:0,"i-carbon-moon":""},Q={key:1,"i-carbon-sun":""},X=r("a",{class:"icon-btn","i-carbon-logo-github":"",rel:"noreferrer",href:"https://github.com/Weilence/systemctl-quick",target:"_blank",title:"GitHub"},null,-1),Y=k({setup(p){return(s,i)=>(u(),f("nav",J,[r("button",{class:"icon-btn !outline-none",onClick:i[0]||(i[0]=n=>a(U)())},[a(h)?(u(),f("div",M)):(u(),f("div",Q))]),X]))}}),Z={"font-sans":""},ee={flex:""},te=r("div",{"flex-1":""},null,-1),ne=r("span",null,"SystemCtl",-1),oe=[ne],se=r("span",null,"Nginx",-1),re=[se],ie={bg:"gray-500/15","p-6":""},ce=k({setup(p){const s=N();return(i,n)=>{const e=y("router-link"),t=A,o=y("router-view"),m=T,d=Y,L=V,C=I,O=q,P=B;return u(),R(P,{theme:a(h)?a(S):void 0},{default:l(()=>[c(O,null,{default:l(()=>[r("main",Z,[c(C,null,{default:l(()=>[c(t,null,{default:l(()=>[r("div",ee,[te,c(e,{to:"/systemctl"},{default:l(()=>[r("div",{"text-lg":"","px-6":"","py-3":"","hover:bg":"blue-500","cursor-pointer":"",class:g({"bg-blue-500/80":a(s).path==="/systemctl"})},oe,2)]),_:1}),c(e,{to:"/nginx"},{default:l(()=>[r("div",{"text-lg":"","px-6":"","py-3":"","hover:bg":"blue-500","cursor-pointer":"",class:g({"bg-blue-500/80":a(s).path==="/nginx"})},re,2)]),_:1})])]),_:1}),c(m,null,{default:l(()=>[r("div",ie,[c(o)])]),_:1}),c(L,{text:"center"},{default:l(()=>[c(d)]),_:1})]),_:1})])]),_:1})]),_:1},8,["theme"])}}});const E=W(ce),le=F({history:H("/"),routes:K});E.use(le);const $=document.createElement("meta");$.name="naive-ui-style";document.head.appendChild($);E.mount("#app");
