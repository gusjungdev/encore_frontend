import{a as c,H as d,E as s,I as l,J as r,B as i,D as u,K as f,L as v,M as p,b as m,o as x,j as h}from"./entry.cbb55ae9.js";const g={class:"home"},_=h('<div class="container height-100 d-flex justify-content-center align-items-center" data-v-556684c3><div class="position-relative" data-v-556684c3><div class="card p-2 text-center" data-v-556684c3><h6 data-v-556684c3>Please enter the one time password <br data-v-556684c3> to verify your account</h6><div data-v-556684c3><span data-v-556684c3>A code has been sent to</span> <small data-v-556684c3>*******9897</small></div><div id="otp" class="inputs d-flex flex-row justify-content-center mt-2" data-v-556684c3><input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" data-v-556684c3><input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" data-v-556684c3><input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" data-v-556684c3><input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" data-v-556684c3><input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" data-v-556684c3><input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" data-v-556684c3></div><div class="mt-4" data-v-556684c3><button class="btn btn-danger px-4 validate" data-v-556684c3>Validate</button></div></div><div class="card-2" data-v-556684c3><div class="content d-flex justify-content-center align-items-center" data-v-556684c3><span data-v-556684c3>Didn&#39;t get the code</span> <a href="#" class="text-decoration-none ms-3" data-v-556684c3>Resend(1/3)</a></div></div></div></div>',1),y=[_],k={__name:"login",setup(B){const n=d({count:0,title:"My Counter"});s(()=>n.count%2===0?"even":"odd"),l(()=>n.count,(e,t)=>{console.log("newCount",e)}),r(()=>{console.log("onBeforeMount")}),i(()=>{console.log("onMounted"),a()});function a(){const e=document.querySelectorAll("#otp > *[id]");for(let t=0;t<e.length;t++)e[t].addEventListener("keydown",function(o){if(o.key==="Backspace")e[t].value="",t!==0&&e[t-1].focus();else{if(t===e.length-1&&e[t].value!=="")return!0;o.keyCode>47&&o.keyCode<58?(e[t].value=o.key,t!==e.length-1&&e[t+1].focus(),o.preventDefault()):o.keyCode>64&&o.keyCode<91&&(e[t].value=String.fromCharCode(o.keyCode),t!==e.length-1&&e[t+1].focus(),o.preventDefault())}})}return u(()=>{console.log("onBeforeUnmount")}),f(()=>{console.log("onUnmounted")}),v(()=>{console.log("onBeforeUpdate")}),p(()=>{console.log("onUpdated")}),(e,t)=>(x(),m("div",g,y))}},U=c(k,[["__scopeId","data-v-556684c3"]]);export{U as default};
