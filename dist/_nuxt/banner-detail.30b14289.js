import"./Cart.vue.65e5df8a.js";import{a as c,b as l,e as t,t as n,j as d,s as i,o as a}from"./entry.1af96281.js";import _ from"./CallAPI.5d19bc28.js";import"./composables.6ff7ace0.js";import"./axios.71f0d3ca.js";const r=""+new URL("desktop-banner-detail-banner-02.566eb823.png",import.meta.url).href,p={data(){return{ImgEngpoint:"https://api.encorefashion.co/",page_language:"TH",love_data:{}}},mounted(){this.GetLove()},methods:{async GetLove(){const o=await _.methods.LoveTheWorldApi();if(o.data.status==200){let e=o.data.data;this.page_language=="TH"?this.love_data=e.json_th:this.love_data=e.json_en}}}},h={class:"row g-0 app-font"},f={class:"col-12",style:{"padding-bottom":"74px"}},v={class:"row g-0",style:{height:"55px"}},x={class:"navbar navbar-expand-lg bg-white"},g={class:"container-fluid",style:{padding:"0px 65px"}},u={class:"col-12"},m={class:"row g-0"},y={class:"col-12 d-flex align-items-center justify-content-start"},w=t("span",{style:{"font-size":"14px",color:"#4F4F4F"}},"\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01 /",-1),j={style:{"font-size":"14px",color:"#a6a6a6"}},b={class:"row g-0",style:{"padding-bottom":"32px"}},L={class:"col-12 d-flex justify-content-center"},T={class:"fs-30 fw-500"},M={class:"row g-0 justify-content-center"},H=["src"],E={class:"row g-0 justify-content-center"},z={class:"col-10",style:{padding:"40px 0px"}},I=["innerHTML"],B=d('<div class="row g-0"><div class="col-12 d-flex justify-content-center"><span class="fs-30 fw-500">Love The World</span></div></div><div class="row g-0 justify-content-center" style="padding-top:32px;padding-bottom:45px;"><div class="col-6"><img src="'+r+'" style="width:100%;"></div></div>',2),R={class:"row g-0",style:{padding:"45px 0px"}},k={class:"col-7 ps-5"},F=["src"],N={class:"col-5 ps-5 pe-5 pt-3"},S={class:"row g-0"},V={class:"d-flex justify-content-start align-items-start"},D={class:"d-flex flex-column justify-content-start"},G=t("div",{class:"d-flex justify-content-start"},[t("span",{style:{"font-size":"30px","font-weight":"500",color:"#292929"}},"Our Committment / Mission")],-1),O=t("div",{style:{border:"2px solid #292929",width:"80px",margin:"24px 0px"}},null,-1),W={class:"d-flex flex-column justify-content-start text-start"},A=["innerHTML"],C=t("div",{class:"d-flex justify-content-start pt-4"},[t("span",{class:"jost-font fs-18 fw-600 text-underline"},[i("Read More "),t("i",{class:"bi bi-chevron-down fs-16"})])],-1),U={class:"row g-0",style:{padding:"45px 0px"}},q={class:"col-5 ps-5 pt-3"},J={class:"row g-0"},K={class:"d-flex justify-content-start align-items-start"},P={class:"d-flex flex-column justify-content-start"},Q=t("div",{class:"d-flex justify-content-start"},[t("span",{style:{"font-size":"30px","font-weight":"500",color:"#292929"}},"Resell")],-1),X=t("div",{style:{border:"2px solid #292929",width:"80px",margin:"24px 0px"}},null,-1),Y={class:"d-flex flex-column justify-content-start text-start"},Z=["innerHTML"],$=t("div",{class:"d-flex justify-content-start pt-4"},[t("span",{class:"jost-font fs-18 fw-600 text-underline"},"Sell a Bag")],-1),tt={class:"col-7 ps-5 pe-5"},st=["src"],ot={class:"row g-0",style:{padding:"45px 0px"}},et={class:"col-7 ps-5"},nt=["src"],it={class:"col-5 ps-5 pe-5 pt-3"},ct={class:"row g-0"},lt={class:"d-flex justify-content-start align-items-start"},dt={class:"d-flex flex-column justify-content-start"},at=t("div",{class:"d-flex justify-content-start"},[t("span",{style:{"font-size":"30px","font-weight":"500",color:"#292929"}},"Other")],-1),_t=t("div",{style:{border:"2px solid #292929",width:"80px",margin:"24px 0px"}},null,-1),rt={class:"d-flex flex-column justify-content-start text-start"},pt=["innerHTML"],ht=t("div",{class:"d-flex justify-content-start pt-4"},[t("span",{class:"jost-font fs-18 fw-600 text-underline"},[i("Read More "),t("i",{class:"bi bi-chevron-down fs-16"})])],-1);function ft(o,e,vt,xt,s,gt){return a(),l("div",h,[t("div",f,[t("div",v,[t("nav",x,[t("div",g,[t("div",u,[t("div",m,[t("div",y,[w,t("span",j,"\xA0"+n(s.love_data.topic),1)])])])])])]),t("div",b,[t("div",L,[t("span",T,n(s.love_data.topic),1)])]),t("div",M,[t("img",{src:s.ImgEngpoint+s.love_data.topic_url},null,8,H)]),t("div",E,[t("div",z,[t("div",{innerHTML:s.love_data.content},null,8,I)])]),B,t("div",R,[t("div",k,[t("img",{src:s.ImgEngpoint+s.love_data.mission_url},null,8,F)]),t("div",N,[t("div",S,[t("div",V,[t("div",D,[G,O,t("div",W,[t("div",{innerHTML:s.love_data.mission_content},null,8,A)]),C])])])])]),t("div",U,[t("div",q,[t("div",J,[t("div",K,[t("div",P,[Q,X,t("div",Y,[t("div",{innerHTML:s.love_data.resell_content},null,8,Z)]),$])])])]),t("div",tt,[t("img",{src:s.ImgEngpoint+s.love_data.resell_url},null,8,st)])]),t("div",ot,[t("div",et,[t("img",{src:s.ImgEngpoint+s.love_data.outher_url},null,8,nt)]),t("div",it,[t("div",ct,[t("div",lt,[t("div",dt,[at,_t,t("div",rt,[t("div",{innerHTML:s.love_data.outher_content},null,8,pt)]),ht])])])])])])])}const bt=c(p,[["render",ft]]);export{bt as default};
