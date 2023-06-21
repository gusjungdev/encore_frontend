import"./Cart.vue.65e5df8a.js";import{a as h,b as d,e as s,w as r,v as c,f as _,F as v,r as m,o as n,t as u}from"./entry.1af96281.js";import f from"./CallAPI.5d19bc28.js";import"./composables.6ff7ace0.js";import"./axios.71f0d3ca.js";const y={data(){return{userdata:{firstname:"",lastname:"",email:"",phoneNO:"",bDate:"",consent:!1},valid:!1,address_list:[],login_data:{user_info:{fname:"",lname:"",email:"",mobile:"",consent:!1,address:[]},cart_data:[],order_history:[],favorite_item:[],login_status:!0}}},mounted(){console.log("mounted");let o=sessionStorage.getItem("login_data"),t=JSON.parse(o);this.login_data=t,this.GetUserDetail(t.user_info.customerID),this.GetAddressList()},methods:{async GetUserDetail(o){const t=await f.methods.customerDetailApi(o);if(t.data.status==200){let i=t.data.data;this.userdata.firstname=i[0].firstname,this.userdata.lastname=i[0].lastname,this.userdata.email=i[0].email,this.userdata.phoneNO=i[0].phoneNO,this.userdata.bDate=i[0].bDate}},ValidateInput(){this.userdata.firstname.length>0&&this.userdata.lastname.length>0&&this.userdata.email.length>0&&this.userdata.phoneNO.length>=10&&this.userdata.consent?this.valid=!0:this.valid=!1},RouteNav(o){o=="address"&&(this.$router.push("/profile/address"),this.pathname="/profile/address")},async GetAddressList(){try{const o=await f.methods.GetAddressListApi(this.login_data.user_info.customerCode);if(o.data.status==200){let t=o.data.data;this.address_list=t}}catch{this.address_list=[]}},convertJson(o){return JSON.parse(o)}}},b={class:"row g-0 app-font justify-content-center",style:{"padding-bottom":"65px"}},g={class:"col-7"},w=s("div",{class:"row g-0 text-center"},[s("h5",null,"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27")],-1),x={class:"row g-0"},k=s("div",{class:"col-12 d-flex justify-content-start",style:{"padding-top":"32px"}},[s("span",{class:"fs-16 fw-500"},"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27")],-1),D={class:"col-12"},j={class:"row g-0 pt-2"},N={class:"col-6"},V={class:"row g-0 pe-2"},I=s("div",{class:"col-12 d-flex justify-content-start"},[s("span",{class:"kanit-font fs-16 fw-500"},"\u0E0A\u0E37\u0E48\u0E2D")],-1),O={class:"col-12"},C={class:"col-6"},U={class:"row g-0 ps-2"},A=s("div",{class:"col-12 d-flex justify-content-start"},[s("span",{class:"kanit-font fs-16 fw-500"},"\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25")],-1),J={class:"col-12"},B={class:"row g-0 pt-3"},G={class:"col-6"},K={class:"row g-0 pe-2"},L=s("div",{class:"col-12 d-flex justify-content-start"},[s("span",{class:"kanit-font fs-16 fw-500"},"\u0E27\u0E31\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E1B\u0E35\u0E40\u0E01\u0E34\u0E14 (\u0E04.\u0E28.)")],-1),S={class:"col-12"},R={class:"col-6"},F={class:"row g-0 ps-2"},E=s("div",{class:"col-12 d-flex justify-content-start"},[s("span",{class:"kanit-font fs-16 fw-500"},"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D")],-1),M={class:"col-12"},T={class:"row g-0 pt-3"},q={class:"col-6"},z={class:"row g-0 pe-2"},H=s("div",{class:"col-12 d-flex justify-content-start"},[s("span",{class:"kanit-font fs-16 fw-500"},"\u0E2D\u0E35\u0E40\u0E21\u0E25")],-1),P={class:"col-12"},Q=s("div",{class:"col-6"},null,-1),W={class:"row g-0 pt-3"},X=s("div",{class:"col-6"},[s("div",{class:"row g-0"},[s("div",{class:"col-12 d-flex justify-content-start"},[s("span",{class:"kanit-font fs-16 fw-500"},"\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48")])])],-1),Y={class:"col-6"},Z={class:"row g-0"},$={class:"col-12 d-flex justify-content-end"},ss={class:"row g-0 pt-3"},ts={key:0,class:"card no-radius"},es={class:"row g-0 p-2"},as=s("div",{class:"col-12"},[s("span",{class:"fs-16 fw-500"},"\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 (\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19)")],-1),os={class:"col-12 pt-2"},ls={class:"fs-14 fw-500"},is={class:"col-12 pt-2"},ds={class:"fs-14 fw-400"},ns={class:"col-12 d-flex justify-content-center",style:{"padding-top":"40px"}};function rs(o,t,i,cs,a,l){return n(),d("div",b,[s("div",g,[w,s("div",x,[k,s("div",D,[s("div",j,[s("div",N,[s("div",V,[I,s("div",O,[r(s("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.userdata.firstname=e),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":"",onKeyup:t[1]||(t[1]=e=>l.ValidateInput())},null,544),[[c,a.userdata.firstname]])])])]),s("div",C,[s("div",U,[A,s("div",J,[r(s("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>a.userdata.lastname=e),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":"",onKeyup:t[3]||(t[3]=e=>l.ValidateInput())},null,544),[[c,a.userdata.lastname]])])])])]),s("div",B,[s("div",G,[s("div",K,[L,s("div",S,[r(s("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>a.userdata.bDate=e),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":"",onKeyup:t[5]||(t[5]=e=>l.ValidateInput())},null,544),[[c,a.userdata.bDate]])])])]),s("div",R,[s("div",F,[E,s("div",M,[r(s("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>a.userdata.phoneNO=e),disabled:"",type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":""},null,512),[[c,a.userdata.phoneNO]])])])])]),s("div",T,[s("div",q,[s("div",z,[H,s("div",P,[r(s("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>a.userdata.email=e),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":"",onKeyup:t[8]||(t[8]=e=>l.ValidateInput())},null,544),[[c,a.userdata.email]])])])]),Q]),s("div",W,[X,s("div",Y,[s("div",Z,[s("div",$,[a.address_list==[]?(n(),d("span",{key:0,class:"kanit-font fs-16 fw-400 mouse-pointer",style:{color:"#2D9CDB"},onClick:t[9]||(t[9]=e=>l.RouteNav("address"))},"+ \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48")):_("",!0),a.address_list!=[]?(n(),d("span",{key:1,class:"kanit-font fs-16 fw-400 mouse-pointer",style:{color:"#2D9CDB"},onClick:t[10]||(t[10]=e=>l.RouteNav("address"))},"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48")):_("",!0)])])])]),s("div",ss,[(n(!0),d(v,null,m(a.address_list,(e,p)=>(n(),d("div",{key:p,class:"row g-0"},[e.isDefualt==1?(n(),d("div",ts,[s("div",es,[as,s("div",os,[s("span",ls,u(l.convertJson(e.obj_address).firstname)+" "+u(l.convertJson(e.obj_address).lastname),1)]),s("div",is,[s("span",ds,u(l.convertJson(e.obj_address).detailAddress),1)])])])):_("",!0)]))),128))]),s("div",ns,[s("button",{type:"button",class:"btn btn-dark kanit-font btn-disable",style:{"border-radius":"0",width:"354px",height:"44px"},onClick:t[11]||(t[11]=()=>{})},"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27")])])])])])}const vs=h(y,[["render",rs]]);export{vs as default};
