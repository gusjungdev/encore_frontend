import{C as i}from"./Cart.vue.3fdc1219.js";import{a as n,b as r,e as t,t as c,o as l}from"./entry.cbb55ae9.js";import"./axios.71f0d3ca.js";import"./composables.2b47d93e.js";const d={data(){return{ImgEngpoint:"http://kudsan.synology.me:8089/",page_language:"TH",res_data:{},msg:"ivamus egestas mattis porttitor. Proin molestie lobortis bibendum. In enim odio, aliquam sit amet sagittis sit amet, mollis id nulla. Duis malesuada, elit eu suscipit laoreet, ante nunc auctor mi, sit amet iaculis dolor urna vitae turpis. Aliquam vulputate massa est. Aenean iaculis ornare est, eget imperdiet velit iaculis ac Praesent at tempor ligula, a lobortis quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent pharetra laoreet mi. Donec interdum"}},mounted(){this.AboutUs()},methods:{async AboutUs(){const o=await i.methods.AboutUsApi();if(o.data.status==200){let e=o.data.data;this.res_data=e}},RouteHome(){this.$router.push("/")}}},u={class:"row g-0 app-font"},p={class:"col-12",style:{"padding-bottom":"74px"}},_={class:"row g-0",style:{height:"55px"}},m={class:"navbar navbar-expand-lg bg-white"},g={class:"container-fluid",style:{padding:"0px 65px"}},h={class:"col-12"},v={class:"row g-0"},f={class:"col-12 d-flex align-items-center justify-content-start"},b=t("span",{class:"fs-14 cl-text-blind"},"\xA0\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32",-1),x={class:"row g-0 text-center",style:{"padding-bottom":"32px"}},y={class:"fs-30 fw-500"},w={class:"row g-0 justify-content-center"},A=["src"],L={class:"row g-0 justify-content-center"},C={class:"col-11",style:{padding:"40px 0px"}},H=["innerHTML"];function k(o,e,q,I,s,a){return l(),r("div",u,[t("div",p,[t("div",_,[t("nav",m,[t("div",g,[t("div",h,[t("div",v,[t("div",f,[t("span",{class:"fs-14 mouse-pointer",onClick:e[0]||(e[0]=P=>a.RouteHome())},"\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01 /"),b])])])])])]),t("div",x,[t("span",y,c(s.res_data["topic_"+s.page_language.toLocaleLowerCase()]),1)]),t("div",w,[t("img",{src:s.ImgEngpoint+s.res_data.url},null,8,A)]),t("div",L,[t("div",C,[t("div",{innerHTML:s.res_data["content_"+s.page_language.toLocaleLowerCase()]},null,8,H)])])])])}const T=n(d,[["render",k]]);export{T as default};
