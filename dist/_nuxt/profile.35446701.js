import{a as v,b as c,e,i as a,m as _,f as r,t as m,o as d,p as h,k as x,G as u}from"./entry.6d48ae9c.js";const g=""+new URL("desktop-profile-person.40c94908.svg",import.meta.url).href,b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGYSURBVHgBxZbtbYMwEIbfVP2fdAN3gjCCNygbhA2aDZoNkk5QNkCdoM0EtBOEDZINUh++EzSxkA0GHulkCZ99n8ZeIJyVkY2RxIjib79GSiNHIxVG5M3I2ciVxy8W+XZineis2BAZKYxohw5lJGedktdEI+eNMw/dLRpHo5DxhruANeLEBhGgdJ4QjvTHIKiOFMkW4UgWOnvhAd0kPP4gnIpHhQEOCEuEc+FxUAYqHp8RzpDs/YOasE8z0Zo+zXtHnyOVIeIxJOR3m3joatYtEREFm06K6gPuzqZm26O5ExQiomEvmWtLKCsFO1TezB3gvi/uWHTMUUSvsD0gR6mCH6qlT868IxCqtaScItUIu91IN0VzgwaVhIyfeZHGcFLey6uJVcu4QjyUjxOiFL2DHfs7y5nD1kthPBK2sb+dUGjO+Ngc4Ag0x/jRC5R+6oVd+yPVZYrohYKdqNGw0b9gOlK2qek9IMfiiOn45jEhBxTs6+WC6SBblZE1ObBGhFdLTyeefN+EYzmwnNOBmtkdeDTyiXmo7f4BK+hwgcpjCVgAAAAASUVORK5CYII=",f=""+new URL("desktop-wallet-icon.73ef91d4.svg",import.meta.url).href,y=""+new URL("desktop-box-icon.5f440889.svg",import.meta.url).href,A=""+new URL("desktop-carship.7b42f010.svg",import.meta.url).href;const k={data(){return{catagory_items:[{index:0,hover:!1,img:"~/assets/img/product/desktop-list-item-01.png"},{index:1,hover:!1,img:"_nuxt/assets/img/product/desktop-list-item-01.png"},{index:2,hover:!1,img:"~/assets/img/product/desktop-list-item-02.png"},{index:3,hover:!1,img:"~/assets/img/product/desktop-list-item-03.png"}],catagory_menu:[{index:0,active:!1,text:"\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E22\u0E37\u0E14"},{index:1,active:!1,text:"\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E40\u0E0A\u0E34\u0E49\u0E15"},{index:2,active:!1,text:"\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E2A\u0E40\u0E27\u0E15\u0E40\u0E0A\u0E34\u0E49\u0E15"},{index:3,active:!1,text:"\u0E0A\u0E38\u0E14\u0E40\u0E14\u0E23\u0E2A"},{index:4,active:!1,text:"\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E41\u0E02\u0E19\u0E22\u0E32\u0E27"}],filter_expand:!1,filter_color:[{index:0,active:!1,text:"\u0E1F\u0E49\u0E32"},{index:1,active:!1,text:"\u0E19\u0E49\u0E33\u0E15\u0E32\u0E25\u0E2D\u0E48\u0E2D\u0E19"},{index:2,active:!1,text:"\u0E19\u0E49\u0E33\u0E15\u0E32\u0E25\u0E2D\u0E21\u0E21\u0E48\u0E27\u0E07"},{index:3,active:!1,text:"\u0E41\u0E14\u0E07"},{index:4,active:!1,text:"\u0E04\u0E23\u0E35\u0E21"},{index:5,active:!1,text:"\u0E14\u0E33"},{index:6,active:!1,text:"\u0E02\u0E32\u0E27"}],filter_brand:[{index:0,items:[{index:0,active:!1,text:"Balenciaga"},{index:1,active:!1,text:"Celine"},{index:2,active:!1,text:"Chanel"},{index:3,active:!1,text:"Coach"},{index:4,active:!1,text:"Dior"},{index:5,active:!1,text:"Gucci"},{index:6,active:!1,text:"Hermes"}]},{index:1,items:[{index:0,active:!1,text:"Issey Miyake"},{index:1,active:!1,text:"Longchamp"},{index:2,active:!1,text:"Louis Vuitton"},{index:3,active:!1,text:"Michael kors"},{index:4,active:!1,text:"Prada"},{index:5,active:!1,text:"Saint Laurent"}]}],pathname:"/profile",login_data:{user_info:{fname:"",lname:"",email:"",mobile:"",consent:!1,address:[]},cart_data:[],order_history:[],favorite_item:[],login_status:!0}}},mounted(){console.log("mounted"),this.$bus.$emit("navEvent","close-offcanvas-login"),this.pathname=window.location.pathname;let n=sessionStorage.getItem("login_data");this.login_data=JSON.parse(n)},updated(){this.pathname=window.location.pathname},methods:{RouteNav(n){this.$router.push(n),this.pathname=n},Logout(){console.log("logout"),sessionStorage.removeItem("login_data"),sessionStorage.removeItem("token"),sessionStorage.removeItem("cart_items"),this.$bus.$emit("navEvent","login-recheck"),this.$bus.$emit("navEvent","cart-update"),this.$router.push("/")}}},i=n=>(h("data-v-54b42d8d"),n=n(),x(),n),w={class:"row g-0 app-font"},C={class:"col-12"},N={class:"row g-0 desktop-size",style:{height:"55px"}},R={class:"navbar navbar-expand-lg",style:{"background-color":"#f2f2f2"}},I={class:"container-fluid",style:{padding:"0px 65px"}},j={class:"col-12"},B={class:"row g-0"},E={class:"col-5 d-flex align-items-center justify-content-start"},D={class:"col-7 d-flex align-items-center justify-content-end"},S=i(()=>e("div",{class:"row g-0 desktop-size"},[e("div",{class:"col-12"},[e("div",{style:{border:"1px solid #f0f0f0",width:"100%"}})])],-1)),z={class:"row g-0 desktop-size",style:{height:"55px"}},O={class:"navbar navbar-expand-lg bg-white"},U={class:"container-fluid",style:{padding:"0px 65px"}},V={class:"col-12"},L={class:"row g-0"},Y={class:"col-12 d-flex align-items-center justify-content-start"},G={key:0,class:"row g-0"},H={key:1,class:"row g-0"},Z=i(()=>e("div",{class:"row g-0 desktop-size text-center"},[e("span",{class:"fs-22 fw-500"},"Profile Dashboard")],-1)),P={class:"row g-0 d-flex justify-content-center"},K={class:"col-12 col-md-7"},M={class:"col-12"},Q={class:"row g-0 p-2"},T={class:"col-6"},F={class:"row g-0"},W={class:"col-12 text-start"},q={class:"row g-0 d-flex align-items-center justify-content-start"},J={class:"card row border-0"},X={class:"card-body p-0"},$=i(()=>e("div",{class:"float-start"},[e("img",{src:g,class:"me-2 desktop-size",style:{height:"45px"}}),e("img",{src:b,class:"m-2 me-3 mobile-size",style:{width:"30px"}})],-1)),ee={class:"fs-18 fw-500"},te=i(()=>e("br",null,null,-1)),se={class:"col-6 d-flex align-items-center justify-content-end"},oe=i(()=>e("hr",{class:"m-0"},null,-1)),ie={class:"col-12"},ne={class:"row g-0 p-3 pt-4"},le={class:"col-12 mb-3"},ae=i(()=>e("span",{class:"float-start fs-16 fw-500"},"\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",-1)),ce={class:"col-12"},de={class:"row g-0 d-flex justify-content-center"},re={class:"col-10"},fe={class:"row"},pe={class:"card col-md-3 col-3 border-0 p-0"},ve={class:"col-12 d-flex align-items-center justify-content-center",style:{height:"40px"}},_e=i(()=>e("div",{class:"col-12 d-flex align-items-center justify-content-center"},[e("span",{class:"fs-14"},"\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E0A\u0E33\u0E23\u0E30")],-1)),me={class:"card col-md-3 col-3 border-0 p-0"},he={class:"col-12 d-flex align-items-center justify-content-center",style:{height:"40px"}},xe=i(()=>e("div",{class:"col-12 d-flex align-items-center justify-content-center"},[e("span",{class:"fs-14"},"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E31\u0E14\u0E2A\u0E48\u0E07")],-1)),ue={class:"card col-md-3 col-3 border-0 p-0"},ge={class:"col-12 d-flex align-items-center justify-content-center",style:{height:"40px"}},be=i(()=>e("div",{class:"col-12 d-flex align-items-center justify-content-center"},[e("span",{class:"fs-14"},"\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A")],-1)),ye={class:"card col-md-3 col-3 border-0 p-0"},Ae={class:"col-12 d-flex align-items-center justify-content-center",style:{height:"40px"}},ke=i(()=>e("div",{class:"col-12 d-flex align-items-center justify-content-center"},[e("span",{class:"fs-14"},"\u0E08\u0E31\u0E14\u0E2A\u0E48\u0E07\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08")],-1)),we=i(()=>e("hr",{class:"m-0 mobile-size"},null,-1)),Ce={class:"col-12 mobile-size"},Ne={class:"col-12"},Re=i(()=>e("span",{class:"fs-16 fw-400 float-start"},"\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E35\u0E48\u0E09\u0E31\u0E19\u0E2A\u0E19\u0E43\u0E08",-1)),Ie=i(()=>e("hr",{class:"m-0"},null,-1)),je={class:"col-12 profile_logout_btn_frame text-center"},Be=i(()=>e("span",{style:{"font-size":"16px","font-weight":"400"}},"\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A",-1)),Ee=[Be];function De(n,t,Se,ze,l,s){const p=u;return d(),c("div",w,[e("div",C,[e("div",N,[e("nav",R,[e("div",I,[e("div",j,[e("div",B,[e("div",E,[e("span",{class:"mouse-pointer fs-18 fw-500",style:a(l.pathname=="/profile"?"color: #2D9CDB;":""),onClick:t[0]||(t[0]=o=>s.RouteNav("/profile"))},"Profile Dashboard",4)]),e("div",D,[e("button",{type:"button",class:"btn btn-nav-bar",onClick:t[1]||(t[1]=o=>s.RouteNav("/profile/personal-info"))},[e("span",{class:"fs-16 fw-400",style:a(l.pathname=="/profile/personal-info"?"color: #2D9CDB; text-decoration: underline;":"")},"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27",4)]),e("button",{type:"button",class:"btn btn-nav-bar",onClick:t[2]||(t[2]=o=>s.RouteNav("/profile/credit-info"))},[e("span",{class:"fs-16 fw-400",style:a(l.pathname=="/profile/credit-info"?"color: #2D9CDB; text-decoration: underline;":"")},"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E31\u0E15\u0E23\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15/\u0E40\u0E14\u0E1A\u0E34\u0E15",4)]),e("button",{type:"button",class:"btn btn-nav-bar",onClick:t[3]||(t[3]=o=>s.RouteNav("/profile/order-history"))},[e("span",{class:"fs-16 fw-400",style:a(l.pathname=="/profile/order-history"?"color: #2D9CDB; text-decoration: underline;":"")},"\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",4)]),e("button",{type:"button",class:"btn btn-nav-bar",onClick:t[4]||(t[4]=o=>s.RouteNav("/profile/favorite-item"))},[e("span",{class:"fs-16 fw-400",style:a(l.pathname=="/profile/favorite-item"?"color: #2D9CDB; text-decoration: underline;":"")},"\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E35\u0E48\u0E09\u0E31\u0E19\u0E2A\u0E19\u0E43\u0E08",4)])])])])])])]),S,e("div",z,[e("nav",O,[e("div",U,[e("div",V,[e("div",L,[e("div",Y,[e("span",{class:"fs-14 mouse-pointer cl-text-normal",onClick:t[5]||(t[5]=o=>s.RouteNav("/"))},"\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01 /"),e("span",{class:"fs-14 mouse-pointer cl-text-blind",onClick:t[6]||(t[6]=o=>s.RouteNav("/profile"))},"\xA0Profile Dashboard")])])])])])]),l.pathname!="/profile"?(d(),c("div",G,[_(p)])):r("",!0),l.pathname=="/profile"?(d(),c("div",H,[Z,e("div",P,[e("div",K,[e("div",M,[e("div",Q,[e("div",T,[e("div",F,[e("div",W,[e("div",q,[e("div",J,[e("div",X,[$,e("div",null,[e("span",ee,"\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35, "+m(l.login_data.user_info.fname),1),te,e("span",{class:"fs-14 cl-grey mouse-pointer",onClick:t[7]||(t[7]=o=>s.RouteNav("/profile/personal-info"))},"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25")])])])])])])]),e("div",se,[e("i",{class:"bi bi-chevron-right fs-15 mouse-pointer",onClick:t[8]||(t[8]=o=>s.RouteNav("/profile/personal-info"))})])])]),oe,e("div",ie,[e("div",ne,[e("div",le,[ae,e("i",{class:"float-end bi bi-chevron-right fs-12 mouse-pointer",onClick:t[9]||(t[9]=o=>s.RouteNav("/profile/order-history")),style:{"margin-top":"2px","margin-left":"5px"}}),e("span",{class:"float-end fs-14 fw-400 cl-grey mouse-pointer",onClick:t[10]||(t[10]=o=>s.RouteNav("/profile/order-history"))},"\u0E14\u0E39\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D")]),e("div",ce,[e("div",de,[e("div",re,[e("div",fe,[e("div",pe,[e("div",ve,[e("img",{src:f,alt:"...",class:"mouse-pointer",onClick:t[11]||(t[11]=o=>s.RouteNav("/profile/order-history"))})]),_e]),e("div",me,[e("div",he,[e("img",{src:y,alt:"...",class:"mouse-pointer",onClick:t[12]||(t[12]=o=>s.RouteNav("/profile/order-history"))})]),xe]),e("div",ue,[e("div",ge,[e("img",{src:A,alt:"...",class:"mouse-pointer",onClick:t[13]||(t[13]=o=>s.RouteNav("/profile/order-history"))})]),be]),e("div",ye,[e("div",Ae,[e("img",{src:f,alt:"...",class:"mouse-pointer",onClick:t[14]||(t[14]=o=>s.RouteNav("/profile/order-history"))})]),ke])])])])])])]),we,e("div",Ce,[e("div",{class:"row g-0 p-3",onClick:t[16]||(t[16]=o=>s.RouteNav("/profile/favorite-item"))},[e("div",Ne,[Re,e("i",{class:"bi bi-chevron-right fs-15 float-end",onClick:t[15]||(t[15]=o=>s.RouteNav("/profile/personal-info"))})])])]),Ie,e("div",je,[e("button",{type:"button",class:"btn btn-outline-dark",style:{"border-radius":"0",width:"354px",height:"44px"},onClick:t[17]||(t[17]=o=>s.Logout())},Ee)])])])])):r("",!0)])])}const Ue=v(k,[["render",De],["__scopeId","data-v-54b42d8d"]]);export{Ue as default};
