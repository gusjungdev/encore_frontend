import{C as l}from"./Cart.vue.3fdc1219.js";import{a as u,b as o,e,t as a,o as r}from"./entry.cbb55ae9.js";import"./axios.71f0d3ca.js";import"./composables.2b47d93e.js";const c={data(){return{ImgEngpoint:"http://kudsan.synology.me:8089/",page_language:"TH",res_data:{},nav_text:"\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19",detail_msg:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a lectus vitae ipsum tincidunt maximus vitae at massa. In nec cursus nulla. Duis ex turpis, finibus et nisi eget, lacinia lacinia nisi. Nullam id auctor ligula. Etiam vel sem venenatis, mattis mauris vitae, pharetra dui. Morbi scelerisque ullamcorper leo. Pellentesque metus orci, lacinia nec venenatis sit amet, finibus et ipsum. Vivamus sollicitudin, nisi et laoreet pellentesque, orci nunc tempus leo, blandit maximus turpis ex quis leo. Nunc rhoncus volutpat felis, nec ornare sem tincidunt a. Cras vitae enim magna. Cras dictum, diam in tincidunt pharetra, neque lorem
Mauris luctus libero at hendrerit bibendum. Nam in ullamcorper libero, tempor ultricies purus. Nulla libero libero, ullamcorper gravida risus id, euismod scelerisque turpis. Donec vehicula lacus maximus nunc condimentum ultrices. Aliquam ultricies nisi quis vulputate consequat. Phasellus interdum lobortis libero
Vestibulum pharetra pretium lectus, mollis dapibus lorem. Curabitur ultrices varius vulputate. Donec diam sem, mattis placerat faucibus vehicula, vehicula nec ante. Sed at mi scelerisque libero suscipit maximus. Vestibulum interdum, est dictum ornare pellentesque, nibh diam tempus lacus, at lacinia ante urna ut sapien. Vestibulum id elit aliquet massa eleifend consequat eget tristique magna. Proin
Vestibulum pharetra pretium lectus, mollis dapibus lorem. Curabitur ultrices varius vulputate. Donec diam sem, mattis placerat faucibus vehicula, vehicula nec ante. Sed at mi scelerisque libero suscipit maximus. Vestibulum interdum, est dictum ornare pellentesque, nibh diam tempus lacus, at lacinia ante urna ut sapien. Vestibulum id elit aliquet massa eleifend consequat eget tristique magna. Proin`}},mounted(){this.PaymentDetail()},methods:{async PaymentDetail(){const t=await l.methods.PaymentDetailApi();if(t.data.status==200){let i=t.data.data;this.res_data=i,console.log(this.res_data)}},routeNav(t){t=="home"&&this.$router.push("/")}}},m={class:"row g-0 app-font",style:{padding:"0px 65px"}},d={class:"col-12"},p={class:"row g-0",style:{height:"55px"}},_={class:"navbar navbar-expand-lg bg-white"},v={class:"container-fluid p-0"},h={class:"col-12"},b={class:"row g-0"},g={class:"col-12 d-flex align-items-center justify-content-start"},f={class:"fs-14 fw-400",style:{color:"#a6a6a6"}},x={class:"col-12"},q={class:"row g-0",style:{"padding-bottom":"64px","border-bottom":"1px solid #e1e1e1"}},y={class:"d-flex justify-content-center"},w={class:"kanit-font fs-22 fw-500"},P={class:"col-12 pt-2",style:{"padding-bottom":"100px"}},C=["innerHTML"];function D(t,i,N,V,s,n){return r(),o("div",m,[e("div",d,[e("div",p,[e("nav",_,[e("div",v,[e("div",h,[e("div",b,[e("div",g,[e("span",{class:"fs-14 fw-400",style:{color:"#4F4F4F",cursor:"pointer"},onClick:i[0]||(i[0]=L=>n.routeNav("home"))},"\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01 /"),e("span",f,"\xA0"+a(s.nav_text),1)])])])])])])]),e("div",x,[e("div",q,[e("div",y,[e("span",w,a(s.res_data["topic_"+s.page_language.toLocaleLowerCase()]),1)])])]),e("div",P,[e("div",{innerHTML:s.res_data["content_"+s.page_language.toLocaleLowerCase()]},null,8,C)])])}const B=u(c,[["render",D],["__scopeId","data-v-bf5baedd"]]);export{B as default};
