import{a as p,c as d,O as o,P as u,o as e,b as r,t as s,m as l,s as i,Q as f}from"./entry.18fd011e.js";const h={layout:"empty",props:{error:{type:Object,default:null}},data(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head(){return{title:this.error.statusCode===404?this.pageNotFound:this.otherError}}},m={key:0},x={key:1};function y(n,k,a,N,t,g){const c=f,_=u("v-app");return e(),d(_,{dark:""},{default:o(()=>[a.error.statusCode===404?(e(),r("h1",m,s(t.pageNotFound),1)):(e(),r("h1",x,s(t.otherError),1)),l(c,{to:"/"},{default:o(()=>[i(" Home page ")]),_:1})]),_:1})}const C=p(h,[["render",y],["__scopeId","data-v-fc610c2f"]]);export{C as default};
