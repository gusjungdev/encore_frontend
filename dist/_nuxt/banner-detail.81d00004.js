import"./Cart.vue.3bd5ef3d.js";import{a as l,b as c,e as s,t as n,s as i,o as d}from"./entry.e1848fba.js";import _ from"./CallAPI.6c08a124.js";import"./composables.9997b364.js";import"./axios.71f0d3ca.js";const a={data(){return{ImgEngpoint:"https://api.encorefashion.co/",page_language:"TH",love_data:{}}},mounted(){this.GetLove()},methods:{async GetLove(){const o=await _.methods.LoveTheWorldApi();if(o.data.status==200){let e=o.data.data;this.page_language=="TH"?this.love_data=e.json_th:this.love_data=e.json_en}}}},r={class:"row g-0 app-font"},p={class:"col-12",style:{"padding-bottom":"74px"}},f={class:"row g-0",style:{height:"55px"}},h={class:"navbar navbar-expand-lg bg-white"},v={class:"container-fluid",style:{padding:"0px 65px"}},x={class:"col-12"},g={class:"row g-0"},u={class:"col-12 d-flex align-items-center justify-content-start"},m=s("span",{style:{"font-size":"14px",color:"#4F4F4F"}},"\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01 /",-1),y={style:{"font-size":"14px",color:"#a6a6a6"}},w={class:"row g-0 pb-4"},j={class:"col-12 d-flex justify-content-center"},b={class:"fs-30 fw-500"},T={class:"row g-0 justify-content-center"},L={class:"col-12 col-lg-8"},M=["src"],H={class:"row g-0 justify-content-center"},z={class:"col-10 py-3 py-lg-4"},E=["innerHTML"],I={class:"row g-0 py-4"},B={class:"col-12 col-lg-7 ps-lg-5"},k=["src"],R={class:"col-12 col-lg-5 px-3 px-lg-5 pt-3"},F={class:"row g-0"},S={class:"d-flex justify-content-start align-items-start"},D={class:"d-flex flex-column justify-content-start"},G=s("div",{class:"d-flex justify-content-start"},[s("span",{style:{"font-size":"30px","font-weight":"500",color:"#292929"}},"Our Committment / Mission")],-1),N=s("div",{style:{border:"2px solid #292929",width:"80px",margin:"24px 0px"}},null,-1),O={class:"d-flex flex-column justify-content-start text-start"},V=["innerHTML"],A=s("div",{class:"d-flex justify-content-start pt-4"},[s("span",{class:"jost-font fs-18 fw-600 text-underline"},[i("Read More "),s("i",{class:"bi bi-chevron-down fs-16"})])],-1),C={class:"row g-0 py-4"},W={class:"desktop-size col-12 col-lg-5 px-3 px-lg-5 pt-3"},q={class:"row g-0"},J={class:"d-flex justify-content-start align-items-start"},K={class:"d-flex flex-column justify-content-start"},P=s("div",{class:"d-flex justify-content-start"},[s("span",{style:{"font-size":"30px","font-weight":"500",color:"#292929"}},"Resell")],-1),Q=s("div",{style:{border:"2px solid #292929",width:"80px",margin:"24px 0px"}},null,-1),U={class:"d-flex flex-column justify-content-start text-start"},X=["innerHTML"],Y=s("div",{class:"d-flex justify-content-start pt-4"},[s("span",{class:"jost-font fs-18 fw-600 text-underline"},"Sell a Bag")],-1),Z={class:"desktop-size col-12 col-lg-7 ps-lg-5"},$=["src"],ss={class:"mobile-size col-12 col-lg-7 ps-lg-5"},ts=["src"],os={class:"mobile-size col-12 col-lg-5 px-3 px-lg-5 pt-3"},es={class:"row g-0"},ns={class:"d-flex justify-content-start align-items-start"},is={class:"d-flex flex-column justify-content-start"},ls=s("div",{class:"d-flex justify-content-start"},[s("span",{style:{"font-size":"30px","font-weight":"500",color:"#292929"}},"Resell")],-1),cs=s("div",{style:{border:"2px solid #292929",width:"80px",margin:"24px 0px"}},null,-1),ds={class:"d-flex flex-column justify-content-start text-start"},_s=["innerHTML"],as=s("div",{class:"d-flex justify-content-start pt-4"},[s("span",{class:"jost-font fs-18 fw-600 text-underline"},"Sell a Bag")],-1),rs={class:"row g-0 py-4"},ps={class:"col-12 col-lg-7 ps-lg-5"},fs=["src"],hs={class:"col-12 col-lg-5 px-3 px-lg-5 pt-3"},vs={class:"row g-0"},xs={class:"d-flex justify-content-start align-items-start"},gs={class:"d-flex flex-column justify-content-start"},us=s("div",{class:"d-flex justify-content-start"},[s("span",{style:{"font-size":"30px","font-weight":"500",color:"#292929"}},"Other")],-1),ms=s("div",{style:{border:"2px solid #292929",width:"80px",margin:"24px 0px"}},null,-1),ys={class:"d-flex flex-column justify-content-start text-start"},ws=["innerHTML"],js=s("div",{class:"d-flex justify-content-start pt-4"},[s("span",{class:"jost-font fs-18 fw-600 text-underline"},[i("Read More "),s("i",{class:"bi bi-chevron-down fs-16"})])],-1);function bs(o,e,Ts,Ls,t,Ms){return d(),c("div",r,[s("div",p,[s("div",f,[s("nav",h,[s("div",v,[s("div",x,[s("div",g,[s("div",u,[m,s("span",y,"\xA0"+n(t.love_data.topic),1)])])])])])]),s("div",w,[s("div",j,[s("span",b,n(t.love_data.topic),1)])]),s("div",T,[s("div",L,[s("img",{class:"w-100",src:t.ImgEngpoint+t.love_data.topic_url},null,8,M)])]),s("div",H,[s("div",z,[s("div",{innerHTML:t.love_data.content},null,8,E)])]),s("div",I,[s("div",B,[s("img",{class:"w-100",src:t.ImgEngpoint+t.love_data.mission_url},null,8,k)]),s("div",R,[s("div",F,[s("div",S,[s("div",D,[G,N,s("div",O,[s("div",{innerHTML:t.love_data.mission_content},null,8,V)]),A])])])])]),s("div",C,[s("div",W,[s("div",q,[s("div",J,[s("div",K,[P,Q,s("div",U,[s("div",{innerHTML:t.love_data.resell_content},null,8,X)]),Y])])])]),s("div",Z,[s("img",{class:"w-100",src:t.ImgEngpoint+t.love_data.resell_url},null,8,$)]),s("div",ss,[s("img",{class:"w-100",src:t.ImgEngpoint+t.love_data.resell_url},null,8,ts)]),s("div",os,[s("div",es,[s("div",ns,[s("div",is,[ls,cs,s("div",ds,[s("div",{innerHTML:t.love_data.resell_content},null,8,_s)]),as])])])])]),s("div",rs,[s("div",ps,[s("img",{class:"w-100",src:t.ImgEngpoint+t.love_data.outher_url},null,8,fs)]),s("div",hs,[s("div",vs,[s("div",xs,[s("div",gs,[us,ms,s("div",ys,[s("div",{innerHTML:t.love_data.outher_content},null,8,ws)]),js])])])])])])])}const ks=l(a,[["render",bs]]);export{ks as default};
