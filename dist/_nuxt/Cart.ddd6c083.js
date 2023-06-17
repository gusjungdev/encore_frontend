import"./Cart.vue.992df3a6.js";import{a as g,o as d,b as _,e as t,F as m,r as f,t as n,f as v,p as y,k as b}from"./entry.6d48ae9c.js";import h from"./CallAPI.1139034b.js";import"./composables.4c79b2d3.js";import"./axios.71f0d3ca.js";const x={data(){return{selected_all:!1,cart_item:[],cart_item_select:[],total_price:0,total_count:0,ImgEngpoint:"https://api.encorefashion.co/",page_language:"TH",login_data:{user_info:{fname:"",lname:"",email:"",mobile:"",consent:!1,address:[]},cart_data:[],order_history:[],favorite_item:[],login_status:!0}}},created(){},mounted(){console.log("component mounted : cart"),this.$bus.$on("addEvent",e=>{console.log("addEvent");let s={msg:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E15\u0E30\u0E01\u0E23\u0E49\u0E32\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27",type:"success"};this.$bus.$emit("alertEvent",s),this.AddItem(e)}),this.$bus.$on("reloadCartEvent",e=>{this.CartList()}),this.CartList()},updated(){console.log("component updated : cart")},beforeUnmount(){console.log("component unmount : cart"),this.$bus.$off("addEvent"),this.$bus.$off("reloadCartEvent")},beforeUnmount(){},methods:{async CartList(){let e=sessionStorage.getItem("login_data");if(this.login_data=JSON.parse(e),this.login_data!=null){this.cart_item=[];try{const s=await h.methods.cartListApi(this.login_data.user_info.customerCode);if(s.data.status==200){let o=s.data.data;for(let a=0;a<o.length;a++)o[a].index=a,o[a].selected=!1,this.cart_item.push(o[a])}}catch{}}else{let s=sessionStorage.getItem("cart_items");if(s!=null){let o=JSON.parse(s);this.cart_item=o}}this.CartUpdate()},async AddItem(e){console.log("add item");let s=sessionStorage.getItem("login_data");if(s!=null){console.log("login status : true"),this.login_data=JSON.parse(s);let o={customerCode:this.login_data.user_info.customerCode,stockID:e.stockID};const a=await h.methods.AddCartApi(o);if(console.log(a),a.data.status==200)try{this.CartList()}catch(l){console.log(l)}}else console.log("login status : false"),console.log(this.cart_item.length),e.index=this.cart_item.length,e.selected=!1,this.cart_item.push(e),this.CartUpdate()},async RemoveItem(e){let s=sessionStorage.getItem("login_data");this.login_data=JSON.parse(s),this.login_data!=null?(await h.methods.DeleteCartApi(e.cartID)).data.status==200&&this.CartList():(e.length>1?this.cart_item.splice(e.index,1):this.cart_item.pop(),this.CartUpdate());let o={msg:"\u0E25\u0E1A\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E15\u0E30\u0E01\u0E23\u0E49\u0E32\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27",type:"success"};this.$bus.$emit("alertEvent",o)},UpdateCount(e,s){s=="increase"?this.cart_item[e.index].count++:e.count>1&&this.cart_item[e.index].count--,this.CartUpdate(),this.CalPriceTotal()},UpdateChecked(e){console.log(e),e.selected==!1?this.cart_item[e.index].selected=!0:this.cart_item[e.index].selected=!1,console.log(this.cart_item),this.CalPriceTotal()},SelectAll(){this.selected_all?this.selected_all=!1:this.selected_all=!0;for(let e=0;e<this.cart_item.length;e++)this.cart_item[e].selected=this.selected_all;this.CalPriceTotal()},UpdateFavorite(e){e.favorite==!1?this.cart_item[e.index].favorite=!0:this.cart_item[e.index].favorite=!1,this.CartUpdate()},CalPriceTotal(){let e=0,s=0;this.cart_item_select=[];for(let o=0;o<this.cart_item.length;o++)this.cart_item[o].selected&&(e+=this.cart_item[o].price*1,s+=1,this.cart_item_select.push(this.cart_item[o]));this.total_price=e,this.total_count=s},async CartUpdate(){sessionStorage.setItem("cart_items",JSON.stringify(this.cart_item));let e=sessionStorage.getItem("cart_items");if(e!=null){let s=JSON.parse(e);this.cart_item=s}this.$bus.$emit("navEvent","cart-update")},RouteNav(e){e=="summary"&&(console.log(this.cart_item_select),sessionStorage.setItem("summary_order_items",JSON.stringify(this.cart_item_select)),this.$router.push("/order-summary")),e=="product"&&this.$router.push("/product")},ReplaceComma(e){var s=String(e);try{var o=this.stringBefore(s,"."),a=this.stringAfter(s,".");a==null||a==null?s=s.replace(/(?!-)[^0-9.]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","):(o=o.replace(/(?!-)[^0-9.]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","),s=o+"."+a)}catch(l){console.log(l)}return s},stringBefore(e,s){var o=e.split(s)[0];return o},stringAfter(e,s){var o=e.split(s)[1];return o}}},r=e=>(y("data-v-6668163b"),e=e(),b(),e),k={class:"card"},C=r(()=>t("div",{class:"card-header text-center desktop-size",style:{height:"64px","background-color":"white"}},[t("div",{class:"row align-items-center g-0",style:{height:"100%"}},[t("span",{style:{"font-size":"18px"}},"\u0E15\u0E30\u0E01\u0E23\u0E49\u0E32")])],-1)),w={class:"card-body p-0"},S={class:"list-group list-group-flush"},I={class:"row g-0"},N={class:"col-1",style:{}},U={class:"row align-items-center g-0",style:{height:"100%"}},A=["onClick","checked"],E={class:"col-11",style:{}},L={class:"row g-0"},R={class:"col-4"},j=["src"],B={class:"col-5",style:{}},z={class:"row g-0"},D={class:"col-12 d-flex align-items-center justify-content-start pb-2"},J={class:"fs-14 fw-400 float-start"},O={class:"col-12 d-flex align-items-center justify-content-start pb-2"},$={class:"fs-13 fw-400"},P={class:"col-12 d-flex align-items-center justify-content-start pb-2"},T={class:"fs-12"},F=r(()=>t("div",{class:"col-12 d-flex align-items-center justify-content-start pb-2"},[t("span",{class:"fs-14 fw-400"},"x 1")],-1)),V={class:"col-3"},H={class:"row g-0",style:{height:"50%"}},q={class:"col-12",style:{}},G={class:"d-flex justify-content-end"},K={style:{"font-size":"14px",color:"#2D9CDB"}},M=r(()=>t("br",null,null,-1)),Q={key:0,style:{"font-size":"12px","text-decoration-line":"line-through",color:"#828282",position:"absolute",top:"40px"}},W={class:"row align-items-end g-0",style:{height:"50%"}},X={class:"d-flex justify-content-end",style:{"padding-bottom":"6px"}},Y=["onClick"],Z={class:"card-footer text-muted",style:{}},tt={class:"row g-0 align-items-center desktop-size",style:{height:"100%"}},et={class:"col-5"},st=r(()=>t("label",{class:"form-check-label",for:"secondCheckbox",style:{color:"black"}},"\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",-1)),ot={class:"col-7",style:{}},it={class:"row g-0"},at={class:"col-5",style:{"padding-right":"10px"}},lt=r(()=>t("div",{class:"row g-0 text-end"},[t("span",{class:"fs-14 fw-400",style:{color:"black"}},"\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 :")],-1)),ct={class:"row g-0 text-end"},nt={class:"fs-16 fw-500",style:{color:"black"}},rt={class:"col-7"},dt={class:"row align-items-end g-0",style:{height:"100%"}},_t=["disabled"],ht={style:{"font-size":"16px"}},pt={class:"row g-0 align-items-center mobile-size",style:{height:"100%"}},ut={class:"col-6 d-flex justify-content-start pt-2 pb-1"},gt=r(()=>t("label",{class:"form-check-label cl-black fs-14 ps-1",for:"secondCheckbox"},"\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",-1)),mt={class:"col-6 d-flex justify-content-end pt-2 pb-1"},ft=r(()=>t("span",{class:"fs-12 fw-400 cl-black",style:{"margin-top":"2px"}},"\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 :",-1)),vt={class:"fs-14 fw-500 cl-black"},yt={class:"col-12 d-flex justify-content-start align-items-center pt-2 pb-2"},bt=["disabled"],xt={class:"kanit-font fs-16 fw-400"};function kt(e,s,o,a,l,c){return d(),_("div",k,[C,t("div",w,[t("ul",S,[(d(!0),_(m,null,f(l.cart_item,(i,p)=>(d(),_("li",{key:p,class:"list-group-item",style:{padding:"18px"}},[t("div",I,[t("div",N,[t("div",U,[t("input",{class:"form-check-input",type:"checkbox",id:"checkboxNoLabel",value:"","aria-label":"...",onClick:u=>c.UpdateChecked(i),checked:i.selected},null,8,A)])]),t("div",E,[t("div",L,[t("div",R,[t("img",{src:l.ImgEngpoint+i.product_PicCover,alt:"...",style:{width:"87px",height:"129px"}},null,8,j)]),t("div",B,[t("div",z,[t("div",D,[t("span",J,n(i["product_Name"+l.page_language]),1)]),t("div",O,[t("span",$,"Brand : "+n(i["brand_name"+l.page_language]),1)]),t("div",P,[t("span",T,"("+n(i.size)+" / "+n(i["color_"+l.page_language.toLocaleLowerCase()])+")",1)]),F])]),t("div",V,[t("div",H,[t("div",q,[t("div",G,[t("span",K,"\u0E3F"+n(c.ReplaceComma(i.price)),1),M,i.discount?(d(),_("span",Q,"\u0E3F"+n(c.ReplaceComma(i.base_price)),1)):v("",!0)])])]),t("div",W,[t("div",X,[t("i",{class:"bi bi-trash mouse-pointer",onClick:u=>c.RemoveItem(i)},null,8,Y)])])])])])])]))),128))])]),t("div",Z,[t("div",tt,[t("div",et,[t("input",{class:"form-check-input me-1",type:"checkbox",value:"",id:"secondCheckbox",onClick:s[0]||(s[0]=i=>c.SelectAll())}),st]),t("div",ot,[t("div",it,[t("div",at,[lt,t("div",ct,[t("span",nt,"\u0E3F\xA0"+n(c.ReplaceComma(l.total_price)),1)])]),t("div",rt,[t("div",dt,[t("button",{type:"button",class:"btn btn-dark",disabled:!(l.total_count>0),style:{width:"130px",height:"44px"},onClick:s[1]||(s[1]=i=>c.RouteNav("summary"))},[t("span",ht,"\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19("+n(l.total_count)+")",1)],8,_t)])])])])]),t("div",pt,[t("div",ut,[t("input",{class:"form-check-input me-1",type:"checkbox",value:"",id:"secondCheckbox",onClick:s[2]||(s[2]=i=>c.SelectAll())}),gt]),t("div",mt,[ft,t("span",vt,"\u0E3F\xA0"+n(l.total_price),1)]),t("div",yt,[t("span",{class:"fs-14 fw-400 text-underline cl-black",onClick:s[3]||(s[3]=i=>c.RouteNav("product"))},"\u0E0A\u0E49\u0E2D\u0E1B\u0E1B\u0E34\u0E49\u0E07\u0E15\u0E48\u0E2D"),t("button",{type:"button",class:"btn btn-dark no-radius",disabled:!(l.total_count>0),style:{width:"80%",height:"44px","margin-left":"auto"},onClick:s[4]||(s[4]=i=>c.RouteNav("summary"))},[t("span",xt,"\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19 ("+n(l.total_count)+")",1)],8,bt)])])])])}const Ut=g(x,[["render",kt],["__scopeId","data-v-6668163b"]]);export{Ut as default};
