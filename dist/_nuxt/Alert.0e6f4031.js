import{o as r,b as c,e as t,F as p,j as m}from"./entry.18fd011e.js";const g=""+new URL("desktop-payment-credit-card-back.fdcdd90b.svg",import.meta.url).href,u=""+new URL("desktop-alert-warning.6303ae52.svg",import.meta.url).href,h=m('<div></div><div class="modal" id="creditModal" tabindex="-1" aria-labelledby="creditModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal_layout"><div class="modal-content no-radius"><div class="modal-body kanit-font text-center"><div class="row g-0"><div class="col-12"><i class="bi bi-x-lg mouse-pointer" data-bs-dismiss="modal" style="position:absolute;right:10px;top:5px;"></i></div><div class="col-12 py-2"><span class="fs-18 fw-500">CVV \u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</span></div><div class="col-12 py-2"><span class="fs-16 fw-400">\u0E23\u0E2B\u0E31\u0E2A\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E02\u0E2D\u0E07\u0E1A\u0E31\u0E15\u0E23\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15\u0E2A\u0E32\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E35\u0E48\u0E2B\u0E25\u0E31\u0E01 \u0E1A\u0E19\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E23\u0E37\u0E2D\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E02\u0E2D\u0E07\u0E1A\u0E31\u0E15\u0E23</span></div><div class="col-12 py-2"><img class="me-2" src="'+g+'" alt="..."></div><div class="col-12 py-2"><span class="fs-14 fw-400 cl-grey">Visa, Mastercard</span></div></div></div></div></div></div>',2),f={class:"modal kanit-font",id:"purchaseModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},x={class:"modal-dialog modal-dialog-centered modal_layout"},_={class:"modal-content no-radius"},v={class:"modal-body"},b={class:"row g-0"},w=t("div",{class:"col-12 pt-2 pb-2 d-flex justify-content-center"},[t("img",{class:"me-2",src:u,alt:"..."})],-1),y=t("div",{class:"col-12 pt-2 pb-2 d-flex justify-content-center"},[t("span",{class:"fs-18 fw-500"},"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E48\u0E2D\u0E19\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32")],-1),k={class:"col-6 pt-3 pb-2 pe-1"},C=t("span",{style:{"font-size":"16px"}},"\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01",-1),A=[C],B={class:"col-6 pt-3 pb-2 ps-1"},$=t("span",{style:{"font-size":"16px"}},"\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",-1),S=[$],U={data(){return{}},created(){},mounted(){},beforeDestroy(){},methods:{OpenLogin(){this.$bus.$emit("navEvent","open-offcanvas-login")},routeNav(e){e=="home"&&this.$router.push("/"),e=="product"&&this.$router.push("/product"),e=="register"&&this.$router.push("/register"),e=="order-payment"&&this.$router.push("/order-payment")},successAlert(e){Swal.fire({text:e,padding:"40px 0px 50px 0px",width:"354px",timer:2e3,imageUrl:"/_nuxt/assets/img/desktop-alert-checked.svg",imageWidth:41,imageHeight:41,imageAlt:"Custom image",showConfirmButton:!1})},warningAlert(e){Swal.fire({html:e,padding:"40px 0px 50px 0px",width:"354px",timer:2e3,imageUrl:"/_nuxt/assets/img/desktop-alert-warning.svg",imageWidth:70,imageHeight:70,imageAlt:"Custom image",showConfirmButton:!1})}}},H=Object.assign(U,{__name:"Alert",setup(e,{expose:a}){function o(){console.log("openAlert"),Swal.fire({text:"\u0E25\u0E1A\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E16\u0E40\u0E02\u0E47\u0E19\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27",padding:"40px 0px 50px 0px",width:"354px",timer:2e3,imageUrl:"/_nuxt/assets/img/desktop-alert-checked.svg",imageWidth:41,imageHeight:41,imageAlt:"Custom image",showConfirmButton:!1})}function d(i){Swal.fire({text:i,padding:"40px 0px 50px 0px",width:"354px",timer:2e3,imageUrl:"/_nuxt/assets/img/desktop-alert-checked.svg",imageWidth:41,imageHeight:41,imageAlt:"Custom image",showConfirmButton:!1})}function n(i){Swal.fire({text:i,padding:"0px 0px 20px 0px",width:"354px",imageUrl:"/_nuxt/assets/img/desktop-alert-warning.svg",imageWidth:41,imageHeight:41,imageAlt:"Custom image",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",cancelButtonText:"\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01",reverseButtons:!0}).then(s=>{s.isConfirmed?(console.log("confirm"),location.href="/register"):s.dismiss===Swal.DismissReason.cancel&&(console.log("cancel"),location.href="/register")})}return a({openAlert:o,successAlert:d,warningAlert:n}),(i,s)=>(r(),c(p,null,[h,t("div",f,[t("div",x,[t("div",_,[t("div",v,[t("div",b,[w,y,t("div",k,[t("button",{type:"button",class:"btn btn-outline-dark",style:{width:"100%",height:"44px","border-radius":"0"},"data-bs-dismiss":"modal",onClick:s[0]||(s[0]=l=>i.routeNav("register"))},A)]),t("div",B,[t("button",{type:"button",class:"btn btn-dark",style:{width:"100%",height:"44px","border-radius":"0"},"data-bs-dismiss":"modal",onClick:s[1]||(s[1]=l=>i.OpenLogin())},S)])])])])])])],64))}});export{H as default};
