import{C as u}from"./Cart.vue.3fdc1219.js";import{a as h,b as n,e as s,t as _,f as r,w as l,v as d,q as y,j as p,o as c}from"./entry.cbb55ae9.js";import{_ as b}from"./desktop-timeline-checked.0345cbd2.js";import"./axios.71f0d3ca.js";import"./composables.2b47d93e.js";const v=""+new URL("desktop-payment-qrcode.628931f3.png",import.meta.url).href,x=""+new URL("desktop-payment-credit-gateway.2c5126be.png",import.meta.url).href,g=""+new URL("desktop-payment-visa.9a3cbfa9.svg",import.meta.url).href,w={data(){return{nav_text:"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",head_text:"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19",item_list:[{index:0,class:"carousel-item active",img:""},{index:1,class:"carousel-item",img:""},{index:2,class:"carousel-item",img:""}],item_select:{},cart_item:[],total_price:0,shipping_price:0,summary_price:0,select_shiping:!1,select_purchase_method:!1,enable_purchase:!1,login_status:!1,payment_method:"",shipping_id:null,addressdata:{fname:"",lname:"",province:"",district:"",sub_district:"",postcode:"",detail:"",default:!1},login_consent:!1,invoice_page:!1,taxdata:{taxid:"",company_name:"",province:"",district:"",sub_district:"",postcode:"",detail:"",default:!1}}},created(){console.log("created")},mounted(){console.log("mounted");let o=sessionStorage.getItem("summary_order_items");this.cart_item=JSON.parse(o),this.CalPriceTotal(),this.$bus.$emit("navEvent","cart");const t=new URLSearchParams(window.location.search);this.payment_method=t.get("payment-method"),this.shipping_id=t.get("shipping-method")},beforeDestroy(){},methods:{RouteNav(o){o=="home"&&this.$router.push("/"),o=="product"&&this.$router.push("/product"),o=="register"&&this.$router.push("/register"),o=="order-summary"&&this.$router.push("/order-summary"),o=="order-finished"&&this.$router.push("/order-finished")},CalPriceShiping(o){this.shipping_price=o,this.select_shiping=!0,this.CalPriceTotal()},ChangeBuyMethod(o){this.select_purchase_method=!0,this.CalPriceTotal()},CalPriceTotal(){let o=0;console.log(this.cart_item);for(let t=0;t<this.cart_item.length;t++)o+=this.cart_item[t].price*1;console.log("total price "+o),this.total_price=o,this.summary_price=this.total_price+this.shipping_price,this.select_shiping==!0&&this.select_purchase_method==!0&&(this.enable_purchase=!0)},OpenLogin(){this.$bus.$emit("navEvent","open-offcanvas-login")},RouteInvoice(o){this.invoice_page=o,o?this.head_text="\u0E43\u0E1A\u0E01\u0E33\u0E01\u0E31\u0E1A\u0E20\u0E32\u0E29\u0E35\u0E40\u0E15\u0E47\u0E21\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A":this.head_text="\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19"},async AddOrder(){let o=sessionStorage.getItem("login_data");o=JSON.parse(o);let t="";this.payment_method=="promptpay"?t="qrcode":t="credit";let f=[];for(let a=0;a<this.cart_item.length;a++)f.push(this.cart_item[a].cartID);let m={customerCode:o.user_info.customerCode,cartID:f,payment_type:t,shipping_id:parseInt(this.shipping_id),address_Obj:{no:"11",moo:"",soi:"",road:"",postcode:"44",province:"mm",province_id:"11",district:"nn",district_id:"22",subdistrict:"ll",subdistrict_id:"33"}};console.log(m);const e=await u.methods.AddOrderApi(m);if(console.log(e),e.data.status==200)try{this.RouteNav("order-finished")}catch(a){console.log(a)}}}},k={class:"row g-0 app-font order_summary_layout"},j={class:"col-12 desktop-size"},C={class:"row g-0",style:{height:"55px"}},z={class:"navbar navbar-expand-lg bg-white"},R={class:"container-fluid p-0"},N={key:0,class:"col-12 d-flex align-items-center justify-content-start"},V=s("span",{class:"fs-14 fw-400 cl-text-blind"},"\xA0\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19",-1),U={key:1,class:"col-12 d-flex align-items-center justify-content-start"},D=s("span",{class:"fs-14 fw-400 cl-text-blind"},"\xA0\u0E43\u0E1A\u0E01\u0E33\u0E01\u0E31\u0E1A\u0E20\u0E32\u0E29\u0E35\u0E40\u0E15\u0E47\u0E21\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A",-1),A={class:"col-12"},B={class:"d-flex justify-content-center order_summary_head"},P={class:"desktop-size kanit-font fs-22 fw-500"},O={class:"mobile-size kanit-font fs-18 fw-500"},I={key:0,class:"col-12"},L=p('<div class="row g-0 justify-content-center order_summary_timeline"><div class="col-12"><div class="d-flex justify-content-center"><div class="card" style="width:24px;height:24px;background-color:#292929;border-radius:50%;display:inline-block;border:0;"><div class="d-flex justify-content-center full_height"><img class="" src="'+b+'" alt="..." style="width:11px;"></div></div><div class="order_summary_timeline_line"><div class="row g-0 align-items-center" style="height:100%;"><div style="border:1px solid #292929;"></div></div></div><div class="card" style="width:24px;height:24px;background-color:#292929;border-radius:50%;display:inline-block;border:0;"><div class="d-flex justify-content-center"><span class="cl-white">2</span></div></div><div class="order_summary_timeline_line"><div class="row g-0 align-items-center" style="height:100%;"><div style="border:1px solid #BDBDBD;"></div></div></div><div class="card" style="width:24px;height:24px;background-color:#BDBDBD;border-radius:50%;display:inline-block;border:0;"><div class="d-flex justify-content-center"><span class="cl-white">3</span></div></div></div></div><div class="col-12"><div class="d-flex justify-content-center" style="padding-top:8px;"><div class="desktop-size" style="width:530px;"><div class="row g-0"><div class="col-4"><div class="d-flex justify-content-start"><span class="fs-14 fw-400">\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</span></div></div><div class="col-4"><div class="d-flex justify-content-center"><span class="fs-14 fw-400">\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19</span></div></div><div class="col-4"><div class="d-flex justify-content-end" style="padding-right:22px;"><span class="fs-14 fw-400">\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08</span></div></div></div></div><div class="mobile-size" style="width:530px;"><div class="row g-0"><div class="col-4"><div class="d-flex justify-content-center"><span class="fs-14 fw-400">\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</span></div></div><div class="col-4"><div class="d-flex justify-content-center"><span class="fs-14 fw-400">\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19</span></div></div><div class="col-4"><div class="d-flex justify-content-center" style=""><span class="fs-14 fw-400">\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08</span></div></div></div></div></div></div></div>',1),q=[L],S={key:1,class:"col-12"},T={class:"row g-0 justify-content-center",style:{"border-bottom":"1px solid #e1e1e1"}},E={class:"col-11 col-md-8 order_payment_content"},F={class:"row g-0"},M=p('<div class="col-6"><div class="row g-0 text-start"><span class="fs-16 fw-500 my-1">\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D</span><span class="fs-16 fw-500 my-1">\u0E22\u0E2D\u0E14\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</span><span class="fs-16 fw-500 my-1">\u0E01\u0E23\u0E38\u0E13\u0E32\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E20\u0E32\u0E22\u0E43\u0E19</span></div></div>',1),Q={class:"col-6"},J={class:"row g-0 text-end"},W=s("span",{class:"fs-16 fw-400 my-1"},"EX23456354",-1),X={class:"fs-16 fw-400 my-1"},G=s("span",{class:"fs-16 fw-400 my-1",style:{color:"#F2994A"}},"23 : 59 : 53",-1),H=s("span",{class:"fs-16 fw-400 cl-grey my-1"},"\u0E2B\u0E21\u0E14\u0E40\u0E27\u0E25\u0E32 06/01/2023, 10.30",-1),K={key:2,class:"col-12"},Y={key:0,class:"row g-0 justify-content-center"},Z={class:"col-12 col-md-8 order_payment_content_qr"},$={class:"row g-0"},ss=p('<div class="col-12 mobile-size"><div class="d-flex justify-content-center"><span class="fs-16 fw-500">\u0E0A\u0E33\u0E23\u0E30\u0E1C\u0E48\u0E32\u0E19 QR \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E1E\u0E22\u0E4C</span></div></div><div class="col-12 col-md-6"><div class="col-12"><div class="row g-0 d-flex justify-content-center"><img class="desktop-size" src="'+v+'" alt="..." style="width:282px;"><img class="mobile-size" src="'+v+'" alt="..." style="margin-top:24px;"></div></div><div class="col-12"><div class="col-12 d-flex justify-content-center pt-3"><span class="fs-16 fw-400" style="color:#F2994A;">\u0E23\u0E2D\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19</span></div><div class="col-12 d-flex justify-content-center pt-3"><button type="button" class="btn btn-outline-dark mobile-size" style="width:180px;height:40px;border-radius:0px;"><i class="bi bi-download"></i><span class="fs-16 fw-400 ms-2">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 QR</span></button></div></div></div>',2),ts={class:"col-12 col-md-6 order_payment_content_qr_detail"},es=p('<div class="row g-0 text-start"><span class="fs-16 fw-500">\u0E27\u0E34\u0E18\u0E35\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E1C\u0E48\u0E32\u0E19 QR Promptpay</span><span class="fs-16 fw-400 mt-2 ms-1">1. \u0E04\u0E25\u0E34\u0E01\u0E1B\u0E38\u0E48\u0E21 \u201C\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 QR\u201D\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E04\u0E1B\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D</span><span class="fs-16 fw-400 ms-1">2. \u0E40\u0E1B\u0E34\u0E14\u0E41\u0E2D\u0E1E\u0E1E\u0E25\u0E34\u0E40\u0E04\u0E0A\u0E31\u0E19 \u0E42\u0E21\u0E1A\u0E32\u0E22\u0E41\u0E1A\u0E07\u0E01\u0E4C\u0E01\u0E34\u0E49\u0E07 \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E21\u0E19\u0E39\u0E2A\u0E41\u0E01\u0E19</span><span class="fs-16 fw-400 ms-1">3. \u0E01\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B\u0E08\u0E32\u0E01\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21</span><span class="fs-16 fw-400 ms-1">4. \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B\u0E04\u0E34\u0E27\u0E2D\u0E32\u0E23\u0E4C\u0E42\u0E04\u0E49\u0E14\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E44\u0E27\u0E49\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19</span><span class="fs-16 fw-400 ms-1">5. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E22\u0E2D\u0E14 \u0E41\u0E25\u0E30\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19</span></div>',1),is={class:"row g-0 d-flex justify-content-center"},os=s("span",{class:"fs-16"},"\u0E15\u0E01\u0E25\u0E07",-1),as=[os],ls={class:"col-12"},ds=s("div",{class:"row mobile-size",style:{border:"1px solid #e1e1e1"}},null,-1),ns={class:"row mobile-size g-0 justify-content-center"},cs=s("span",{class:"fs-16"},"\u0E15\u0E01\u0E25\u0E07",-1),rs=[cs],ps={key:1,class:"row g-0 justify-content-center"},_s={class:"col-12 col-md-8 order_payment_content_credit"},fs=p('<div class="col-12 mobile-size"><span class="fs-16 fw-500">\u0E0A\u0E33\u0E23\u0E30\u0E1C\u0E48\u0E32\u0E19 \u0E1A\u0E31\u0E15\u0E23\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15/\u0E1A\u0E31\u0E15\u0E23\u0E40\u0E14\u0E1A\u0E34\u0E15</span></div><div class="col-12 text-center"><img src="'+x+'" alt="..."></div><div class="col-12 pt-3 desktop-size text-center"><span class="fs-16 fw-500">\u0E0A\u0E33\u0E23\u0E30\u0E1C\u0E48\u0E32\u0E19 \u0E1A\u0E31\u0E15\u0E23\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15/\u0E1A\u0E31\u0E15\u0E23\u0E40\u0E14\u0E1A\u0E34\u0E15</span></div><div class="col-12"><div class="row g-0 order_payment_credit_list px-2"><div class="col-12 pt-2 d-flex justify-content-start align-items-center"><input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."><div class="row g-0 ps-2"><div class="col-12 d-flex justify-content-start"><span class="fs-16 fw-500">****2366</span></div><div class="col-12 d-flex justify-content-start pt-1"><img src="'+g+'" alt="..."><span class="fs-14 fw-400 ms-1">Ploy</span></div></div></div><div class="col-12 pt-2 d-flex justify-content-start align-items-center"><input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."><span class="fs-16 fw-500 ps-2">\u0E1A\u0E31\u0E15\u0E23\u0E2D\u0E37\u0E48\u0E19\u0E46</span></div></div></div>',4),ms={class:"col-12 order_payment_credit_input"},vs={class:"row g-0 pt-3"},us={class:"col-12 col-md-6"},hs={class:"row g-0 p-2"},ys=s("div",{class:"col-12 d-flex justify-content-start"},[s("span",{class:"kanit-font fs-16 fw-500"},"\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E1A\u0E31\u0E15\u0E23")],-1),bs={class:"col-12 pt-2"},xs={class:"col-12 col-md-6"},gs={class:"row g-0 p-2"},ws=s("div",{class:"col-12 d-flex justify-content-start"},[s("span",{class:"kanit-font fs-16 fw-500"},"\u0E27\u0E31\u0E19\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38\u0E1A\u0E31\u0E15\u0E23\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15")],-1),ks={class:"col-12 pt-2"},js={class:"row g-0 pt-3"},Cs={class:"col-12 col-md-6"},zs={class:"row g-0 p-2"},Rs=s("div",{class:"col-12"},[s("span",{class:"fs-16 fw-500 float-start"},"CVV"),s("i",{class:"bi bi-question-circle float-end","data-bs-toggle":"modal","data-bs-target":"#creditModal"})],-1),Ns={class:"col-12 pt-2"},Vs={class:"col-12 col-md-6"},Us={class:"row g-0 p-2"},Ds=s("div",{class:"col-12 d-flex justify-content-start"},[s("span",{class:"kanit-font fs-16 fw-500"},"\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E08\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E1A\u0E31\u0E15\u0E23")],-1),As={class:"col-12 pt-2"},Bs={class:"row g-0 p-2 order_payment_credit_input_check"},Ps={class:"form-check text-start"},Os=s("label",{class:"form-check-label cl-black",for:"flexCheckDefault"}," \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E31\u0E15\u0E23\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15 ",-1),Is={class:"row g-0 desktop-size mt-3 p-2"},Ls={class:"col-12 p-3"},qs=s("span",{class:"float-start fs-14 fw-500"},"\u0E43\u0E1A\u0E01\u0E33\u0E01\u0E31\u0E1A\u0E20\u0E32\u0E29\u0E35\u0E41\u0E1A\u0E1A\u0E40\u0E15\u0E47\u0E21\u0E23\u0E39\u0E1B",-1),Ss={class:"desktop-size col-12 d-flex justify-content-center order_payment_credit_input_btn"},Ts=s("div",{class:"col-12 mobile-size"},[s("div",{class:"card no-radius",style:{width:"100%",height:"42px","background-color":"#f2f2f2",border:"0"}})],-1),Es={class:"col-12 mobile-size p-3"},Fs={key:3,class:"col-12 d-flex justify-content-center"},Ms={class:"col-10"},Qs={class:"row g-0"},Js=p('<div class="col-12" style="padding-bottom:63px;"><div class="row g-0 justify-content-center"><div class="card no-border no-radius" style="max-width:712px;background:rgba(242, 153, 74, 0.1);"><div class="d-flex justify-content-center justify-content-center" style="padding:17px;"><i class="bi bi-exclamation-triangle-fill fs-14" style="color:#F2994A;"></i><span class="fs-14 ms-2" style="color:#F2994A;">\u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E01\u0E23\u0E2D\u0E01\u0E43\u0E2B\u0E49\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u0E2B\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E41\u0E25\u0E49\u0E27 \u0E04\u0E38\u0E13\u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E14\u0E46 \u0E43\u0E19\u0E43\u0E1A\u0E01\u0E33\u0E01\u0E31\u0E1A\u0E20\u0E32\u0E29\u0E35\u0E44\u0E14\u0E49\u0E2D\u0E35\u0E01</span></div></div></div></div>',1),Ws={class:"col-6",style:{"padding-right":"40px"}},Xs={class:"row g-0"},Gs=s("span",{class:"fs-16"},"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E20\u0E32\u0E29\u0E35",-1),Hs=s("span",{class:"mt-3 fs-16"},"\u0E40\u0E25\u0E02\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E15\u0E31\u0E27\u0E1C\u0E39\u0E49\u0E40\u0E2A\u0E35\u0E22\u0E20\u0E32\u0E29\u0E35 / \u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E15\u0E31\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19",-1),Ks=s("span",{class:"mt-2 fs-16"},"\u0E0A\u0E37\u0E48\u0E2D\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17",-1),Ys={class:"col-6",style:{"border-left":"1px solid #e1e1e1","padding-left":"40px"}},Zs={class:"row g-0"},$s=p('<div class="card no-border"><div class="col-12"><span class="float-start fs-16">\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48</span><span class="float-end fs-16 fw-400" style="color:#2D9CDB;">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48</span></div></div><span class="mt-3 fs-16">\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14</span>',2),st=s("span",{class:"mt-2 fs-16"},"\u0E40\u0E02\u0E15/\u0E2D\u0E33\u0E40\u0E16\u0E2D",-1),tt=s("span",{class:"mt-2 fs-16"},"\u0E23\u0E2B\u0E31\u0E2A\u0E44\u0E1B\u0E23\u0E29\u0E13\u0E35\u0E22\u0E4C",-1),et=s("span",{class:"mt-2 fs-16"},"\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E4B",-1),it=s("span",{class:"mt-2 fs-16"},"\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D",-1),ot=s("div",{class:"col-12",style:{"padding-top":"50px","padding-bottom":"63px"}},[s("div",{class:"row g-0 justify-content-center"},[s("button",{type:"button",class:"btn btn-dark no-radius",style:{"max-width":"354px",height:"44px"}},"\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D")])],-1);function at(o,t,f,m,e,a){return c(),n("div",k,[s("div",j,[s("div",C,[s("nav",z,[s("div",R,[e.invoice_page?r("",!0):(c(),n("div",N,[s("span",{class:"fs-14 fw-400 cl-text-normal mouse-pointer",onClick:t[0]||(t[0]=i=>a.RouteNav("home"))},"\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01 /"),s("span",{class:"fs-14 fw-400 cl-text-normal mouse-pointer",onClick:t[1]||(t[1]=i=>a.RouteNav("order-summary"))},"\xA0"+_(e.nav_text)+" /",1),V])),e.invoice_page?(c(),n("div",U,[s("span",{class:"fs-14 fw-400 cl-text-normal mouse-pointer",onClick:t[2]||(t[2]=i=>a.RouteNav("home"))},"\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01 /"),s("span",{class:"fs-14 fw-400 cl-text-normal mouse-pointer",onClick:t[3]||(t[3]=i=>a.RouteNav("order-summary"))},"\xA0"+_(e.nav_text)+" /",1),s("span",{class:"fs-14 fw-400 cl-text-normal mouse-pointer",onClick:t[4]||(t[4]=i=>a.RouteInvoice(!1))},"\xA0\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19 /"),D])):r("",!0)])])])]),s("div",A,[s("div",B,[s("span",P,_(e.head_text),1),s("span",O,_(e.head_text),1)])]),e.invoice_page?r("",!0):(c(),n("div",I,q)),e.invoice_page?r("",!0):(c(),n("div",S,[s("div",T,[s("div",E,[s("div",F,[M,s("div",Q,[s("div",J,[W,s("span",X,"\u0E3F "+_(e.total_price),1),G,H])])])])])])),e.invoice_page?r("",!0):(c(),n("div",K,[e.payment_method=="promptpay"?(c(),n("div",Y,[s("div",Z,[s("div",$,[ss,s("div",ts,[es,s("div",is,[s("button",{type:"button",class:"btn btn-dark order_payment_content_qr_btn desktop-size",onClick:t[5]||(t[5]=i=>a.AddOrder())},as)])]),s("div",ls,[ds,s("div",ns,[s("button",{type:"button",class:"btn btn-dark order_payment_content_qr_btn",onClick:t[6]||(t[6]=i=>a.AddOrder())},rs)])])])])])):r("",!0),e.payment_method=="credit-debit-card"?(c(),n("div",ps,[s("div",_s,[fs,s("div",ms,[s("div",vs,[s("div",us,[s("div",hs,[ys,s("div",bs,[l(s("input",{"onUpdate:modelValue":t[7]||(t[7]=i=>e.addressdata.fname=i),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":""},null,512),[[d,e.addressdata.fname]])])])]),s("div",xs,[s("div",gs,[ws,s("div",ks,[l(s("input",{"onUpdate:modelValue":t[8]||(t[8]=i=>e.addressdata.lname=i),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":""},null,512),[[d,e.addressdata.lname]])])])])]),s("div",js,[s("div",Cs,[s("div",zs,[Rs,s("div",Ns,[l(s("input",{"onUpdate:modelValue":t[9]||(t[9]=i=>e.addressdata.province=i),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":""},null,512),[[d,e.addressdata.province]])])])]),s("div",Vs,[s("div",Us,[Ds,s("div",As,[l(s("input",{"onUpdate:modelValue":t[10]||(t[10]=i=>e.addressdata.district=i),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":""},null,512),[[d,e.addressdata.district]])])])])]),s("div",Bs,[s("div",Ps,[l(s("input",{"onUpdate:modelValue":t[11]||(t[11]=i=>e.login_consent=i),class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"},null,512),[[y,e.login_consent]]),Os])]),s("div",Is,[s("div",{class:"card no-radius mouse-pointer",onClick:t[14]||(t[14]=i=>a.RouteInvoice(!0))},[s("div",Ls,[qs,s("i",{class:"float-end bi bi-chevron-right fs-12 mouse-pointer",onClick:t[12]||(t[12]=i=>a.RouteNav("/profile/order-history")),style:{"margin-top":"2px","margin-left":"5px"}}),s("span",{class:"float-end fs-14 fw-500 cl-grey mouse-pointer",onClick:t[13]||(t[13]=i=>a.RouteNav("/profile/order-history"))},"\u0E02\u0E2D\u0E43\u0E1A\u0E01\u0E33\u0E01\u0E31\u0E1A\u0E20\u0E32\u0E29\u0E35")])])]),s("div",Ss,[s("button",{type:"button",class:"desktop-size btn btn-dark kanit-font btn-disable",style:{"border-radius":"0",width:"354px",height:"44px"},onClick:t[15]||(t[15]=i=>a.AddOrder())},"\u0E15\u0E01\u0E25\u0E07")])]),Ts,s("div",Es,[s("button",{type:"button",class:"btn btn-dark kanit-font btn-disable mobile-size",style:{"border-radius":"0",width:"100%",height:"44px"},onClick:t[16]||(t[16]=i=>a.AddOrder())},"\u0E15\u0E01\u0E25\u0E07")])])])):r("",!0)])),e.invoice_page?(c(),n("div",Fs,[s("div",Ms,[s("div",Qs,[Js,s("div",Ws,[s("div",Xs,[Gs,Hs,l(s("input",{"onUpdate:modelValue":t[17]||(t[17]=i=>e.taxdata.taxid=i),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":""},null,512),[[d,e.taxdata.taxid]]),Ks,l(s("input",{"onUpdate:modelValue":t[18]||(t[18]=i=>e.taxdata.company_name=i),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":""},null,512),[[d,e.taxdata.company_name]])])]),s("div",Ys,[s("div",Zs,[$s,l(s("input",{"onUpdate:modelValue":t[19]||(t[19]=i=>e.taxdata.taxid=i),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":""},null,512),[[d,e.taxdata.taxid]]),st,l(s("input",{"onUpdate:modelValue":t[20]||(t[20]=i=>e.taxdata.taxid=i),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":""},null,512),[[d,e.taxdata.taxid]]),tt,l(s("input",{"onUpdate:modelValue":t[21]||(t[21]=i=>e.taxdata.taxid=i),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":""},null,512),[[d,e.taxdata.taxid]]),et,l(s("textarea",{"onUpdate:modelValue":t[22]||(t[22]=i=>e.addressdata.detail=i),class:"form-control","aria-label":"With textarea"},null,512),[[d,e.addressdata.detail]]),it,l(s("input",{"onUpdate:modelValue":t[23]||(t[23]=i=>e.taxdata.taxid=i),type:"text",class:"form-control br-0",placeholder:"","aria-label":"","aria-describedby":""},null,512),[[d,e.taxdata.taxid]])])]),ot])])])):r("",!0)])}const pt=h(w,[["render",at]]);export{pt as default};
