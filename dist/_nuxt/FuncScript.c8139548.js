import{o as u,b as i}from"./entry.6d48ae9c.js";const f={methods:{replaceComma(c){var r=String(c);try{var t=this.stringBefore(r,"."),a=this.stringAfter(r,".");a==null||a==null?r=r.replace(/(?!-)[^0-9.]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","):(t=t.replace(/(?!-)[^0-9.]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","),r=t+"."+a)}catch(l){console.log(l)}return r},stringBefore(c,r){var t=c.split(r)[0];return t},stringAfter(c,r){var t=c.split(r)[1];return t}}},v=Object.assign(f,{__name:"FuncScript",setup(c,{expose:r}){function t(s){var e=String(s);try{var n=a(e,"."),g=l(e,".");g==null||g==null?e=e.replace(/(?!-)[^0-9.]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","):(n=n.replace(/(?!-)[^0-9.]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","),e=n+"."+g)}catch(o){console.log(o)}return e}function a(s,e){var n=s.split(e)[0];return n}function l(s,e){var n=s.split(e)[1];return n}return r({replaceComma:t}),(s,e)=>(u(),i("div"))}});export{v as default};
