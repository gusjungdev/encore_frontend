import{a as r}from"./axios.71f0d3ca.js";import{a as p,b as f,e,w as i,v as o,q as v,s as u,j as c,o as x,p as m,k as y}from"./entry.18fd011e.js";import{_ as g,a as _}from"./google_mobile.053d8094.js";const h={data(){return{login_status:"",userdata:{fname:"",lname:"",email:"",mobile:"",consent:!1},valid:!1}},methods:{ValidateInput(){this.userdata.fname.length>0&&this.userdata.lname.length>0&&this.userdata.email.length>0&&this.userdata.mobile.length>=10&&this.userdata.consent?this.valid=!0:this.valid=!1},async Register(l){const t=await r.post("https://gusjungit.com/webservice/api/v1/member/login",{userdata:l});t.data.status=="success"&&console.log(t.data)}}},n=l=>(m("data-v-f0e4166c"),l=l(),y(),l),b={class:"container text-center",style:{"padding-top":"48px","padding-bottom":"112px"}},w={class:"row"},k={class:"col-12 d-flex justify-content-center"},j={class:"row",style:{width:"600px"}},V=c('<div class="col-12" data-v-f0e4166c><span class="kanit-font fs-22 fw-500" data-v-f0e4166c>\u0E21\u0E32\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32</span></div><div class="col-12" data-v-f0e4166c><span class="kanit-font fs-16 fw-400 c-grey" style="margin-top:8px;" data-v-f0e4166c>\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22</span></div><div class="col-12 d-flex justify-content-start" style="padding-top:32px;" data-v-f0e4166c><span class="kanit-font fs-16 fw-500" data-v-f0e4166c>\u0E0A\u0E37\u0E48\u0E2D</span></div>',3),I={class:"col-12"},C=n(()=>e("div",{class:"col-12 d-flex justify-content-start pt-10"},[e("span",{class:"kanit-font fs-16 fw-500"},"\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25")],-1)),U={class:"col-12"},K=n(()=>e("div",{class:"col-12 d-flex justify-content-start pt-10"},[e("span",{class:"kanit-font fs-16 fw-500"},"\u0E2D\u0E35\u0E40\u0E21\u0E25")],-1)),S={class:"col-12"},z=n(()=>e("div",{class:"col-12 d-flex justify-content-start pt-10"},[e("span",{class:"kanit-font fs-16 fw-500"},"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C")],-1)),B={class:"col-12"},D={class:"col-12 d-flex justify-content-start",style:{"padding-top":"10px"}},N={class:"form-check"},M=n(()=>e("label",{class:"form-check-label kanit-font fs-14 c-grey2",for:"flexCheckDefault"}," \u0E09\u0E31\u0E19\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A \u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27 \u0E41\u0E25\u0E30 \u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49 \u0E02\u0E2D\u0E07 ... ",-1)),R={class:"col-12 d-flex justify-content-center",style:{"padding-top":"40px"}},T=["disabled"],q=c('<div class="row g-0" style="padding-top:40px;" data-v-f0e4166c><div class="col-12" data-v-f0e4166c><div class="d-flex justify-content-center align-items-center" data-v-f0e4166c><div style="border:1px solid #828282;width:75px;height:0px;" data-v-f0e4166c></div><span class="kanit-font" style="margin-left:10px;margin-right:10px;font-size:14p;color:#828282;" data-v-f0e4166c>\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1C\u0E48\u0E32\u0E19</span><div style="border:1px solid #828282;width:75px;height:0px;" data-v-f0e4166c></div></div></div></div><div class="row g-0" style="padding-top:24px;" data-v-f0e4166c><div class="col-6" data-v-f0e4166c><div class="d-flex justify-content-end align-items-center" data-v-f0e4166c><div class="d-flex flex-column" style="padding-right:30px;" data-v-f0e4166c><img src="'+g+'" alt="..." style="width:32px;" data-v-f0e4166c><span class="jost-font" style="color:#828282;font-size:14px;" data-v-f0e4166c>Line</span></div></div></div><div class="col-6" data-v-f0e4166c><div class="d-flex justify-content-start align-items-center" data-v-f0e4166c><div class="d-flex flex-column" style="padding-left:20px;" data-v-f0e4166c><img src="'+_+'" alt="..." style="width:34px;margin-left:7px;" data-v-f0e4166c><span class="jost-font" style="color:#828282;font-size:14px;" data-v-f0e4166c>Google</span></div></div></div></div>',2),E={class:"row g-0",style:{"padding-top":"30px"}},G={class:"d-flex justify-content-center align-items-center kanit-font"},L=n(()=>e("span",{class:"fs-14 fw-400 c-grey2"},"\u0E04\u0E38\u0E13\u0E21\u0E35\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",-1));function A(l,t,F,H,a,d){return x(),f("div",b,[e("div",w,[e("div",k,[e("div",j,[V,e("div",I,[i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>a.userdata.fname=s),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":"",onKeyup:t[1]||(t[1]=s=>d.ValidateInput())},null,544),[[o,a.userdata.fname]])]),C,e("div",U,[i(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>a.userdata.lname=s),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":"",onKeyup:t[3]||(t[3]=s=>d.ValidateInput())},null,544),[[o,a.userdata.lname]])]),K,e("div",S,[i(e("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>a.userdata.email=s),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":"",onKeyup:t[5]||(t[5]=s=>d.ValidateInput())},null,544),[[o,a.userdata.email]])]),z,e("div",B,[i(e("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>a.userdata.mobile=s),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":"",onKeyup:t[7]||(t[7]=s=>d.ValidateInput())},null,544),[[o,a.userdata.mobile]])]),e("div",D,[e("div",N,[i(e("input",{"onUpdate:modelValue":t[8]||(t[8]=s=>a.userdata.consent=s),class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault",onChange:t[9]||(t[9]=s=>d.ValidateInput())},null,544),[[v,a.userdata.consent]]),M])]),e("div",R,[e("button",{type:"button",class:"btn btn-dark kanit-font btn-disable",style:{"border-radius":"0",width:"354px",height:"44px"},disabled:!a.valid,onClick:t[10]||(t[10]=s=>d.Register(a.userdata))},"\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19",8,T)]),q,e("div",E,[e("div",G,[L,u(" \xA0 "),e("span",{class:"fs-14 fw-500",onClick:t[11]||(t[11]=()=>{})},"\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")])])])])])])}const Q=p(h,[["render",A],["__scopeId","data-v-f0e4166c"]]);export{Q as default};
